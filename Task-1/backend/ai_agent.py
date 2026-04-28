import requests, json

GROQ_API_KEY = "YOUR_GROQ_API_KEY"

def call_llm(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "gemma2-9b-it",
        "messages": [
            {"role": "system", "content": "Extract structured CRM data"},
            {"role": "user", "content": prompt}
        ]
    }

    res = requests.post(url, headers=headers, json=data)
    return res.json()["choices"][0]["message"]["content"]


def log_tool(text):
    prompt = f"""
    Extract JSON with keys:
    doctor, product, outcome, summary
    from: {text}
    """

    try:
        response = call_llm(prompt)
        return json.loads(response)
    except:
        return {
            "doctor": "Unknown",
            "product": "Unknown",
            "outcome": "Unknown",
            "summary": text
        }


def suggest_tool():
    return "Follow up in 2 days"


def summary_tool(db):
    return f"{len(db)} interactions logged"
