from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_create_mnemonic():
    response = client.post('/mnemonics',json=dict(
        key='keskustella',
        value="to chat",
    ))
    assert response.status_code == 200
    print(response.content)