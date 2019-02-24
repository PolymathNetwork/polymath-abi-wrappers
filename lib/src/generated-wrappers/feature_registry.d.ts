import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { PolyResponse } from '../polyResponse';
export declare type FeatureRegistryEventArgs = FeatureRegistryChangeFeatureStatusEventArgs | FeatureRegistryOwnershipRenouncedEventArgs | FeatureRegistryOwnershipTransferredEventArgs;
export declare enum FeatureRegistryEvents {
    ChangeFeatureStatus = "ChangeFeatureStatus",
    OwnershipRenounced = "OwnershipRenounced",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface FeatureRegistryChangeFeatureStatusEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _newStatus: boolean;
}
export interface FeatureRegistryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}
export interface FeatureRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export declare class FeatureRegistryContract extends BaseContract {
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    featureStatus: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getFeatureStatus: {
        callAsync(_nameKey: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    setFeatureStatus: {
        sendTransactionAsync(_nameKey: string, _newStatus: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_nameKey: string, _newStatus: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nameKey: string, _newStatus: boolean): string;
        callAsync(_nameKey: string, _newStatus: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=feature_registry.d.ts.map