import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { PolyResponse } from '../polyResponse';
export declare type FeatureRegistryEventArgs = FeatureRegistryOwnershipTransferredEventArgs | FeatureRegistryChangeFeatureStatusEventArgs;
export declare enum FeatureRegistryEvents {
    OwnershipTransferred = "OwnershipTransferred",
    ChangeFeatureStatus = "ChangeFeatureStatus"
}
export interface FeatureRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface FeatureRegistryChangeFeatureStatusEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _newStatus: boolean;
}
export declare class FeatureRegistryContract extends BaseContract {
    private _defaultEstimateGasFactor;
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isOwner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    featureStatus: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newOwner: string): string;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getFeatureStatus: {
        callAsync(_nameKey: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    setFeatureStatus: {
        sendTransactionAsync(_nameKey: string, _newStatus: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_nameKey: string, _newStatus: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nameKey: string, _newStatus: boolean): string;
        callAsync(_nameKey: string, _newStatus: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<FeatureRegistryContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=feature_registry.d.ts.map