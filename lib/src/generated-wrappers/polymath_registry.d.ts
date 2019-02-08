import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
export declare type PolymathRegistryEventArgs = PolymathRegistryChangeAddressEventArgs | PolymathRegistryOwnershipRenouncedEventArgs | PolymathRegistryOwnershipTransferredEventArgs;
export declare enum PolymathRegistryEvents {
    ChangeAddress = "ChangeAddress",
    OwnershipRenounced = "OwnershipRenounced",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface PolymathRegistryChangeAddressEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _oldAddress: string;
    _newAddress: string;
}
export interface PolymathRegistryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}
export interface PolymathRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export declare class PolymathRegistryContract extends BaseContract {
    storedAddresses: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_tokenContract: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getAddress: {
        callAsync(_nameKey: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeAddress: {
        sendTransactionAsync(_nameKey: string, _newAddress: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_nameKey: string, _newAddress: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nameKey: string, _newAddress: string): string;
        callAsync(_nameKey: string, _newAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=polymath_registry.d.ts.map