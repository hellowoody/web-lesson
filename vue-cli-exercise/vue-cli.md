# 安装命令的区别

```
// 使用方便，配置简单
npm install -g @vue/cli  

//无论你在哪个目录，都可以执行下面的命令
vue --version

//创建项目
vue create 你的项目名字
```

```
// 配置时稍微麻烦一些
mkdir 新的文件夹
cd 新的文件夹
npm init -y
npm install -D @vue/cli
//只能在你刚创建的新文件夹里去执行下面的命令
npx vue --version


// 创建项目
npx vue create 你的项目名字
```