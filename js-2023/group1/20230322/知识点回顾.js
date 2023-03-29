/*
    邮箱的正则表达式

    xxx@二级n级域名.一级域名
    zhangsan@enterprise.qq.com
    zhangsan@a.b.c.d.qq.com
    a@com
    {,63}
*/

const reg = /[-\w\.]{1,64}@([-a-zA-Z0-9]{1,64}\.)*[-a-zA-Z0-9]{1,64}/

console.log(reg.test("abc@com"))
console.log(reg.test("abc@hostname.com"))
console.log(reg.test("abc@some-host.com"))
console.log(reg.test("123@hostname.com"))
console.log(reg.test("abc-123@hostname.com"))
console.log(reg.test("abc-123@sub.hostname.com"))
console.log(reg.test("abc-123@m-s.sub.hostname.com"))
