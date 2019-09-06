import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { PolyResponse } from '../../PolyResponse';
export declare type FeatureRegistryEventArgs_3_1_0 = FeatureRegistryOwnershipTransferredEventArgs_3_1_0 | FeatureRegistryChangeFeatureStatusEventArgs_3_1_0;
export declare enum FeatureRegistryEvents_3_1_0 {
    OwnershipTransferred = "OwnershipTransferred",
    ChangeFeatureStatus = "ChangeFeatureStatus"
}
export interface FeatureRegistryOwnershipTransferredEventArgs_3_1_0 extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface FeatureRegistryChangeFeatureStatusEventArgs_3_1_0 extends DecodedLogArgs {
    _nameKey: string;
    _newStatus: boolean;
}
export declare class FeatureRegistryContract_3_1_0 extends BaseContract {
    private _defaultEstimateGasFactor;
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    isOwner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    featureStatus: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(newOwner: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(newOwner: string): string;
    };
    getFeatureStatus: {
        callAsync(_nameKey: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_nameKey: string): string;
    };
    setFeatureStatus: {
        sendTransactionAsync(_nameKey: string, _newStatus: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_nameKey: string, _newStatus: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_nameKey: string, _newStatus: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_nameKey: string, _newStatus: boolean): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<FeatureRegistryContract_3_1_0>;
    /**
    * @returns The contract ABI
    */
    static ABI(): ContractAbi;
    /**
    * To add ABIs to the decoder to decode every event log emmited
    */
    addABItoDecoder(abiArray: AbiDefinition[], contractName?: string): void;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=feature_registry.d.ts.map