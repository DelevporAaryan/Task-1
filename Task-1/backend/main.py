from fastapi import FastAPI
import uuid
from database import interactions
from ai_agent import extract_data, suggest_next, generate_summary
from models import Interaction

app = FastAPI()

@app.post("/log-interaction")
def log_interaction(data: dict):
    extracted = extract_data(data["text"])
    extracted["id"] = str(uuid.uuid4())
    interactions.append(extracted)
    return extracted

@app.put("/edit-interaction/{id}")
def edit_interaction(id: str, updated: Interaction):
    for i in interactions:
        if i["id"] == id:
            i.update(updated.dict())
            return i
    return {"error": "Not found"}

@app.get("/interactions")
def get_all():
    return interactions

@app.get("/suggest/{id}")
def suggest(id: str):
    return {"suggestion": suggest_next()}

@app.get("/summary")
def summary():
    return {"summary": generate_summary(interactions)}
