# 产生跨域的原因

 - 跨域是浏览器(客户端)的一种保护机制
    发起一个跨域请求，
       request是正常发到服务端的
       response也是能从后端（nodejs）正常发出的
       response返回到浏览器时，浏览器会对请求request的报文头header和返回报文response的header进行校验：Access-Control-Allow-Origin这个值是否匹配  

# 解决方法

  - 在后端设置response返回的报文头header
  
   ```
    // 设置白名单
    var allowedOrigins = [
        'http://127.0.0.1:3100', 
        'http://localhost:3100', 
    ];
    // 拿到请求报文头的origin请求源 （protocal://ip:port）
    var origin = req.headers.origin;
    // 设置返回报文的报文头Access-Control-Allow-Origin
    if(allowedOrigins.indexOf(<string>origin) >= 0 ){
         resp.setHeader('Access-Control-Allow-Origin', <string>origin);
    }

    // resp.setHeader("Access-Control-Allow-Origin","*")                  // 让浏览器全部放开 
    // resp.setHeader("Access-Control-Allow-Origin","http://localhost:3100") // 域名太少
   ```

# post请求时表单请求和json请求的区别

 - 传统的表单格式      application/x-www-form-urlencoded
    
  优点：兼容性强，所有的浏览器或者只要支持http协议的都支持

  缺点：
    1.表单格式 a=%abcfd&b=2&c=3放到body里,这种会比json臃肿一些，报文会大一些
    2.只请求一次，如果服务存在并正常，正常处理；如果服务不存在或有问题，那这次请求就失败了

 - 比较新的的json格式  application/json
    
   优点：
    1.json {a:"我",b:2,c:3}放到body里,这种会小一些
    2.分两次请求
        先预请求    option
        再正式请求  post

   缺点：有些场景不支持，不兼容