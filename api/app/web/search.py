import requests
import json
import os


def search(query: str) -> dict:
    url = "https://google.serper.dev/search"
    payload = json.dumps({
        "q": query,
    })
    headers = {
        'X-API-KEY': os.environ['SERPER_API_KEY'],
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    return response.json()

