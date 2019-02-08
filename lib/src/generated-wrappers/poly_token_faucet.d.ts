import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare type PolyTokenFaucetEventArgs = PolyTokenFaucetTransferEventArgs | PolyTokenFaucetApprovalEventArgs;
export declare enum PolyTokenFaucetEvents {
    Transfer = "Transfer",
    Approval = "Approval"
}
export interface PolyTokenFaucetTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export interface PolyTokenFaucetApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare class PolyTokenFaucetContract extends BaseContract {
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    decimals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getTokens: {
        sendTransactionAsync(_amount: BigNumber, _recipient: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_amount: BigNumber, _recipient: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber, _recipient: string): string;
        callAsync(_amount: BigNumber, _recipient: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transfer: {
        sendTransactionAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber): string;
        callAsync(_to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber): string;
        callAsync(_from: string, _to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    approve: {
        sendTransactionAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _value: BigNumber): string;
        callAsync(_spender: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    allowance: {
        callAsync(_owner: string, _spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    increaseApproval: {
        sendTransactionAsync(_spender: string, _addedValue: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_spender: string, _addedValue: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _addedValue: BigNumber): string;
        callAsync(_spender: string, _addedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    decreaseApproval: {
        sendTransactionAsync(_spender: string, _subtractedValue: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_spender: string, _subtractedValue: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _subtractedValue: BigNumber): string;
        callAsync(_spender: string, _subtractedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=poly_token_faucet.d.ts.map