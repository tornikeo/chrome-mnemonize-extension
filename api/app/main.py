from fastapi import FastAPI
from pydantic import BaseModel
from .routers import mnemonics
import dotenv

dotenv.load_dotenv()

app = FastAPI(debug=True)

app.include_router(
    mnemonics.app, prefix='/mnemonics'
)

class Response(BaseModel):
    status: str
    
@app.get('/', response_model=Response)
def home():
    return Response(status='ok')

