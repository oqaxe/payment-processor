// types.ts
export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
}

export enum TransactionStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type CardData = {
  number: string;
  cvv: string;
  expirationDate: string;
};

export type PaymentRequest = {
  amount: number;
  paymentMethod: PaymentMethod;
  cardData?: CardData;
  address?: Address;
};

export type PaymentResponse = {
  transactionId: string;
  status: TransactionStatus;
};
```

```typescript
// types.ts
export class Address {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public zip: string
  ) {}
}

export class CardData {
  constructor(
    public number: string,
    public cvv: string,
    public expirationDate: string
  ) {}
}

export class PaymentRequest {
  constructor(
    public amount: number,
    public paymentMethod: PaymentMethod,
    public cardData?: CardData,
    public address?: Address
  ) {}
}

export class PaymentResponse {
  constructor(
    public transactionId: string,
    public status: TransactionStatus
  ) {}
}