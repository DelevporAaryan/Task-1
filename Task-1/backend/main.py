from fastapi import FastAPI
import uuid
from database import interactions
from ai_agent import log_tool, suggest_tool, summary_tool

app = FastAPI()

@app.post("/log-interaction")
def log_interaction(data: dict):
    text = data.get("text", "")

    # 🔥 Agent routing (LangGraph style simulation)
    if "summary" in text.lower():
        return {"summary": summary_tool(interactions)}

    if "suggest" in text.lower():
        return {"suggestion": suggest_tool()}

    extracted = log_tool(text)
    extracted["id"] = str(uuid.uuid4())

    interactions.append(extracted)
    return extracted


@app.get("/interactions")
def get_all():
    return interactions
