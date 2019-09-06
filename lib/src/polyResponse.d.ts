import { TransactionReceiptWithDecodedLogs } from 'ethereum-types';
export declare class PolyResponse {
    txHash: string;
    receiptAsync: Promise<TransactionReceiptWithDecodedLogs>;
    constructor(txHash: string, receiptAsync: Promise<TransactionReceiptWithDecodedLogs>);
}
//# sourceMappingURL=PolyResponse.d.ts.map