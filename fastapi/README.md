# FastAPI

 ## 简介

  > FastAPI 是一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.8+ 并基于标准的 Python 类型提示。  

 ## WSGI服务器 uvicorn 

   > uvicorn 是一个轻量级高效的 web 服务器框架。  
   > 使用 uvloop和 httptools实现的一个服务器。  

   > 实现一个基于 ASGI(异步服务器网关接口)的最小的应用程序接口。  
   > 它目前支持 http，websockets，Pub/Sub 广播，并且可以扩展到其他协议和消息类型。

 ## 安装 

  ### conda 方式

   - fastapi

      ```shell
        conda install fastapi
        # or
        pip install fastapi
      ```

   - uvicorn
  
      ```shell
        conda install uvicorn
        # or
        pip install uvicorn
      ```

  ### Python自带虚拟环境venv 方式

   - 创建一个虚拟环境

      ```shell

        # python -m venv 虚拟环境目录
        python -m venv project_dir
        
      ```
     
   - 激活虚拟环境

      ```shell
        # 进入虚拟路径下的Scripts文件夹
        cd project_dir/Scripts
        # 激活虚拟环境
        activate
        # 显示(project_dir) xxx/project_dir/Scripts 说明激活成功
      ```

   - 安装fastapi 和 uvicorn

      ```shell
        pip install fastapi
        pip install uvicorn
      ```

 
 ## 快速开始

  ### 创建一个简单的API
  
  ```python
    from fastapi import FastAPI

    app = FastAPI()

    @app.get("/")
    def root():
        return {"Hello":"World"}

    @app.get("/async")
    async def async_root():
        return {"async Hello":"World"}

    @app.get("/items/{item_id}")
    def read_item(item_id: int, q: str = None):
        return {"item_id": item_id, "q": q}
  ```

  ### 运行 

  ```shell
    uvicorn main:app --reload
  ```

   - main：main.py 文件（一个 Python "模块"）。
   - app：在 main.py 文件中通过 app = FastAPI() 创建的对象。
   - reload：让服务器在更新代码后重新启动。仅在开发时使用该选项。

  ### 访问

  ```shell
    curl http://127.0.0.1:8000
    # {"Hello":"World"}
    curl http://127.0.0.1:8000/async
    # {"async Hello":"World"}
    curl http://127.0.0.1:8000/items/5?q=somequery
    # {"item_id":5,"q":"somequery"}
    curl http://127.0.0.1:8000/items/5
    # {"item_id":5,"q":null}
  ```
  - 以上 路径 都接受 GET 操作（也被称为 HTTP 方法）。
  - /items/{item_id} 路径 有一个 路径参数 item_id 并且应该为 int 类型。
  - /items/{item_id} 路径 有一个可选的 str 类型的 查询参数 q。

  ### 交互式 API 文档 

   > 现在访问 http://127.0.0.1:8000/docs。  

   > 你会看到自动生成的交互式 API 文档（由 Swagger UI生成）  
   
  ### 可选的 API 文档 

   > 访问 http://127.0.0.1:8000/redoc。

 
 ## 示例升级 

  > 我们借助 Pydantic 来使用标准的 Python 类型声明请求体。  

  ```python
  from typing import Union

  from fastapi import FastAPI
  from pydantic import BaseModel

  app = FastAPI()

  class Item(BaseModel):
      name: str
      price: float
      is_offer: Union[bool, None] = None


  @app.get("/")
  def read_root():
      return {"Hello": "World"}


  @app.get("/items/{item_id}")
  def read_item(item_id: int, q: Union[str, None] = None):
      return {"item_id": item_id, "q": q}


  @app.put("/items/{item_id}")
  def update_item(item_id: int, item: Item):
      return {"item_name": item.name, "item_id": item_id}
  ```

  > 打开交互式 API 文档: http://127.0.0.1:8000/docs  

  > 交互式 API 文档将会自动更新，并加入新的请求体,也可以页面上测试


 ## 自定义响应 (Custom Response - HTML, Stream, File, others)

  > 默认情况，会返回 JSON 格式的响应（JSONRespone）。  

  > 你可以复写返回值，直接返回Respone对象。

  ### 大数据列表 

   > python 列表 返回的是 JSON 格式的响应，如果列表数据量很大，会非常耗时。  
     python 自带的json效率不是很高，ujson和orjson效率高，尤其是用rust实现的orjson模块  

   - 安装orjson

      ```shell
      pip install orjson
      ```

   - 修改返回值

      ```python
      from fastapi import FastAPI
      from fastapi.responses import ORJSONResponse
      --snip--
      @app.get("/list",response_class=ORJSONResponse)
      async def list_items():
          return ORJSONResponse([{"item_id":1,"item_name":"item1"},{"item_id":2,"item_name":"item2"}])
      ```

  ### 返回HTML 

   ```python
    from fastapi import FastAPI
    from pydantic import BaseModel
    from fastapi.responses import HTMLResponse
    --snip--
    @app.get("/pages/1",response_class=HTMLResponse)
    def page1():
        return """
        <html>
            <head>
                <title>Page 1</title>
            </head>
            <body>
                <h1>Page 1</h1>
                <p>This is page 1</p>
            </body>
        </html>
        """
   ```

   ```python
    @app.get("/pages/2")
    def page2():
        html_content = """
        <html>
            <head>
                <title>page 2</title>
            </head>
            <body>
                <h1>page 2</h1>
            </body>
        </html>
        """

        return HTMLResponse(html_content,status_code=200)
   ```

  ### 返回其他类型 

   - 返回xml 

      ```python
      from fastapi import FastAPI,Response
      --snip--
      @app.get("/legacy/")
      def get_legacy_data():
          data="""<?xml version="1.0"?>
          <shampoo>
          <Header>
              Apply shampoo here.
          </Header>
          <Body>
              You'll have to use soap here.
          </Body>
          </shampoo>
          """
          return Response(content=data,media_type="application/xml")
      ```
   
   - 返回html 

      ```python
       from fastapi import FastAPI,Response
      --snip--
      @app.get("/pages/3")
      def page3():
          return Response("<h1>Page 3</h1>",media_type="text/html")
      ```

   - 返回文本

      ```python
      from fastapi import FastAPI,Response
      --snip--
      @app.get("/msg")
      def text_msg():
          return Response("Hello World!",media_type="text/plain")
      ```

   - 返回json (FastAPI的默认方式)

      ```python
      from fastapi import FastAPI,Response
      import json
      --snip--
      @app.get("/data")
      def res_data():
          data = {"a":1}
          return Response(json.dumps(data),media_type="application/json")
      ```

      ```python
      from fastapi import FastAPI,Response
      import orjson
      --snip--
      @app.get("/data")
      def res_data():
          data = {"a":1}
          return Response(orjson.dumps(data),media_type="application/json")
      ```

   - 重定向 

      ```python
      from fastapi import FastAPI
      from fastapi.responses import RedirectResponse
      --snip--
      @app.get("/baidu")
      def redirect_baidu():
          return RedirectResponse("https://www.baidu.com")

      @app.get("/fastapi", response_class=RedirectResponse)
      async def redirect_fastapi():
          return "https://fastapi.tiangolo.com"

      @app.get("/pydantic", response_class=RedirectResponse, status_code=302)
      async def redirect_pydantic():
          return "https://pydantic-docs.helpmanual.io/"
      ```

   - 返回字节流 

      ```python
      from fastapi import FastAPI,Response
      from fastapi.responses import StreamingResponse
      --snip--
      async def fake_video_streamer():
          for i in range(10):
              yield b"some fake video bytes"


      @app.get("/stream")
      async def stream_api():
          return StreamingResponse(fake_video_streamer())
      ```

  
 ## 修改默认返回方式

   ```python
    from fastapi import FastAPI
    from fastapi.responses import ORJSONResponse

    app = FastAPI(default_response_class=ORJSONResponse)


    @app.get("/items/")
    async def read_items():
        return [{"item_id": "Foo"}]
   ```

 
 ## 模板引擎Templates 

  ### 安装模板引擎 

   > 官方说用哪个模板引擎都可以，官方是以jinja2做例子的，这里也用jinja2  

   ```shell
    conda install jinja2
    # or
    pip install Jinja2
   ```

  ### 如何使用 

   server.py

   ```python
    from fastapi import FastAPI, Request
    from fastapi.responses import HTMLResponse
    from fastapi.staticfiles import StaticFiles
    from fastapi.templating import Jinja2Templates

    app = FastAPI()

    # 第一个参数/static 是网路路径
    # 第二个参数是物理文件夹static
    # 第三个参数是代码中类似url_for方法用的名字
    app.mount("/static", StaticFiles(directory="static"), name="static_for_3")


    templates = Jinja2Templates(directory="templates")


    @app.get("/items/{id}", response_class=HTMLResponse)
    async def read_item(request: Request, id: str):
        return templates.TemplateResponse(name="item.html", context={"request":request,"id": id})
    )
   ```

   > 创建文件夹templates，里面创建文件item.html

   item.html

   ```html
    <html>
        <head>
            <title>Item Details</title>
            <link href="{{ url_for('static_for_3', path='/styles.css') }}" rel="stylesheet">
        </head>
        <body>
            <h1>Item ID: {{ id }}</h1>
        </body>
    </html>
   ```

   > 这里用到了url_for函数，这个函数是用来生成静态资源的路径的   
   > 创建文件夹static，里面创建文件styles.css  

   styles.css

   ```css
    h1 {
        color: green;
    }
   ```

  ### 运行结果 

    ```shell
    uvicorn server:app --reload
    ```