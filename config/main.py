from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

app = FastAPI()

class PaymentRequest(BaseModel):
    amount: float
    currency: str
    customer_id: str
    payment_method: str
    transaction_id: Optional[str]
    created_at: Optional[datetime]

class PaymentResponse(BaseModel):
    transaction_id: str
    status: str
    amount: float
    currency: str
    customer_id: str
    payment_method: str
    created_at: datetime

@app.post("/make_payment")
async def make_payment(payment_request: PaymentRequest):
    transaction_id = "PAY-12345"
    status = "success"
    return PaymentResponse(
        transaction_id=transaction_id,
        status=status,
        amount=payment_request.amount,
        currency=payment_request.currency,
        customer_id=payment_request.customer_id,
        payment_method=payment_request.payment_method,
        created_at=datetime.now(),
    )