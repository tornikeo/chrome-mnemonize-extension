from fastapi import APIRouter
from pydantic import BaseModel
from app.llm import basic

app = APIRouter()

class Request(BaseModel):
    key: str
    value: str
    
class Response(BaseModel):
    mnemonic: str
    explanation: str
    
@app.post('/', response_model=Response)
def create_mnemonic(request: Request):
    return Response(
        **basic.create_mnemonic(request.key,request.value)
    )