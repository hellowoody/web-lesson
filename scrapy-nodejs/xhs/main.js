const playwright = require('playwright');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

(async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.xiaohongshu.com/explore');

  try {
    const seen = new Map(); // key -> item，用于去重

    for (let i = 0; i < 6; i++) {
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
     });

      // 滚动后给页面一点时间加载新内容，比单纯 waitForSelector 更保险
      await page.waitForTimeout(800);
      await page.waitForSelector('section', { timeout: 10000 });

      const content = await page.$$eval('section', els => {
        return els.map(item => {
          const titleEl = item.querySelector('a.title span');
          const authorEl = item.querySelector('a.author span');
          const likeEl = item.querySelector('.like-wrapper.like-active span.count');
          const imgEl = item.querySelector('a.cover img');
          if (!titleEl || !authorEl || !imgEl) return null; // 防止异常节点报错
          return {
            title: titleEl.innerHTML,
            author: authorEl.innerHTML,
            like: likeEl ? likeEl.innerHTML : null,
            img: imgEl.src,
          };
        }).filter(Boolean);
      });

      // 去重：用 img 地址做 key（图片链接基本唯一，比 title 更可靠）
      let newCount = 0;
      content.forEach(item => {
        const key = item.img;
        if (!seen.has(key)) {
          seen.set(key, item);
          newCount++;
        }
      });

      console.log(`第 ${i} 轮抓到 ${content.length} 条，新增 ${newCount} 条`);
      console.log(i, "======================================================================");
    }

    const arr = Array.from(seen.values());
    writeToJsonFile(arr, "content.json");
    // 确保目录存在
    const imgDir = path.join(__dirname, 'imgs');
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir, { recursive: true });
    }

    for (const item of arr) {
      await downloadImage(item.img, `./imgs/${item.img.split("/").pop()}.png`);
    }
  } catch (error) {
    console.log('error', error);
  }

  await browser.close();
})();

function writeToJsonFile(data, filename) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile(filename, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to JSON file: ', err);
      return;
    }
    console.log(`Data written to ${filename}`);
  });
}

async function downloadImage(imageUrl, outputPath) {
  try {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream'
    });
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
}