from pydantic import BaseModel

class Interaction(BaseModel):
    doctor: str
    product: str
    outcome: str
    notes: str
