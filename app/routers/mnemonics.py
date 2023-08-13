from fastapi import APIRouter
from pydantic import BaseModel

app = APIRouter()

class Request(BaseModel):
    key: str
    value: str
    
class Response(BaseModel):
    result: str
    
@app.post('/', response_model=Response)
def create_mnemonic(request: Request):
    return Response(
        result=f"{request.key} is {request.value}"
    )