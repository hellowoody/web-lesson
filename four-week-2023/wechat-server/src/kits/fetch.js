import axios from "axios";

const appid = ""
const secret = ""
export const wxLogin = async (code) => {
    // 这里我们请求了微信服务器登录凭证校验接口，
    const res = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: appid,
        secret: secret,
        js_code: code,
        grant_type: 'authorization_code',
      },
    });
    // return res.data;
    return {
      session_key: 'XJuIz4Dj6zK7BChHAvnnnQ==',
      openid: 'oA7oq43cEyO31KFtBIsx711ZA-7s'
    };
}