from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
def root():
    return {"Hello":"World"}


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

from fastapi.staticfiles import StaticFiles
# 第一个参数/static 是网路路径
# 第二个参数是物理文件夹static
# 第三个参数是代码中类似url_for方法用的名字
app.mount("/static", StaticFiles(directory="static"))