from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


class CodePayload(BaseModel):
    code: str
    language: str = "python"
    version: str = "*"

@app.post("/api/execute")
async def execute_code(payload: CodePayload):
    piston_url = "https://emkc.org/api/v2/piston/execute"
    data = {
        "language": payload.language,
        "version": payload.version,
        "files": [
            {
                "name": "main.py",
                "content": payload.code,
            }
        ]
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(piston_url, json=data)

    if response.status_code != 200:
        return {"error": "Failed to execute code", "details": response.text}

    result = response.json()
    return {
        "output": result.get("run", {}).get("output", ""),
        "stdout": result.get("run", {}).get("stdout", ""),
        "stderr": result.get("run", {}).get("stderr", ""),
        "language": payload.language
    }
        