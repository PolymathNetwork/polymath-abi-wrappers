import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
export declare type OwnableEventArgs = OwnableOwnershipRenouncedEventArgs | OwnableOwnershipTransferredEventArgs;
export declare enum OwnableEvents {
    OwnershipRenounced = "OwnershipRenounced",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface OwnableOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}
export interface OwnableOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export declare class OwnableContract extends BaseContract {
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=ownable.d.ts.map