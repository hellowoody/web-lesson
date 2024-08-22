from fastapi import FastAPI
from enum import Enum

app = FastAPI()

@app.get("/")
def root():
    return {"Hello":"World"}

@app.get("/users")
async def read_users():
    # 总是被匹配
    return ["Rick", "Morty"]


@app.get("/users")
async def read_users2():
    # 被忽略
    return ["Bean", "Elfo"]


@app.get("/users/me")
async def read_user_me():
    # 如果这个放在 /users/{user_id} 后面 就被忽略了
    return {"user_id": "the current user"}

@app.get("/users/{user_id}")
async def read_user(user_id: str):
    return {"user_id": user_id}


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}


@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}