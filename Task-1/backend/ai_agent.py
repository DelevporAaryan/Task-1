import requests

GROQ_API_KEY = "YOUR_GROQ_API_KEY"

def call_llm(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "gemma2-9b-it",
        "messages": [{"role": "user", "content": prompt}]
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()["choices"][0]["message"]["content"]

def extract_data(text):
    prompt = f"Extract doctor, product, outcome from: {text} in JSON"
    result = call_llm(prompt)
    return {
        "doctor": "Dr. AI",
        "product": "AI Product",
        "outcome": "Interested",
        "notes": text
    }

def suggest_next():
    return "Follow up in 2 days"

def generate_summary(data):
    return f"Total {len(data)} interactions logged"
