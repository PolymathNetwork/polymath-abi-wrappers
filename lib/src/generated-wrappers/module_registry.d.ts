import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type ModuleRegistryEventArgs = ModuleRegistryPauseEventArgs | ModuleRegistryUnpauseEventArgs | ModuleRegistryModuleUsedEventArgs | ModuleRegistryModuleRegisteredEventArgs | ModuleRegistryModuleVerifiedEventArgs | ModuleRegistryModuleUnverifiedEventArgs | ModuleRegistryModuleRemovedEventArgs | ModuleRegistryOwnershipTransferredEventArgs;
export declare enum ModuleRegistryEvents {
    Pause = "Pause",
    Unpause = "Unpause",
    ModuleUsed = "ModuleUsed",
    ModuleRegistered = "ModuleRegistered",
    ModuleVerified = "ModuleVerified",
    ModuleUnverified = "ModuleUnverified",
    ModuleRemoved = "ModuleRemoved",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface ModuleRegistryPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface ModuleRegistryUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface ModuleRegistryModuleUsedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _securityToken: string;
}
export interface ModuleRegistryModuleRegisteredEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _owner: string;
}
export interface ModuleRegistryModuleVerifiedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
}
export interface ModuleRegistryModuleUnverifiedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
}
export interface ModuleRegistryModuleRemovedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _decisionMaker: string;
}
export interface ModuleRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export declare class ModuleRegistryContract extends BaseContract {
    private _defaultEstimateGasFactor;
    getBytes32Value: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_variable: string): string;
    };
    getBytesValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_variable: string): string;
    };
    getAddressValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_variable: string): string;
    };
    getArrayAddress: {
        callAsync(_key: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_key: string): string;
    };
    getBoolValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_variable: string): string;
    };
    getStringValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_variable: string): string;
    };
    getArrayBytes32: {
        callAsync(_key: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_key: string): string;
    };
    getUintValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_variable: string): string;
    };
    getArrayUint: {
        callAsync(_key: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(_key: string): string;
    };
    initialize: {
        sendTransactionAsync(_polymathRegistry: string, _owner: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_polymathRegistry: string, _owner: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_polymathRegistry: string, _owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_polymathRegistry: string, _owner: string): string;
    };
    useModule2: {
        sendTransactionAsync(_moduleFactory: string, _isUpgrade: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, _isUpgrade: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, _isUpgrade: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string, _isUpgrade: boolean): string;
    };
    useModule1: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
    };
    isCompatibleModule: {
        callAsync(_moduleFactory: string, _securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_moduleFactory: string, _securityToken: string): string;
    };
    registerModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
    };
    removeModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
    };
    verifyModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
    };
    unverifyModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
    };
    getTagsByTypeAndToken: {
        callAsync(_moduleType: number | BigNumber, _securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[]]>;
        getABIEncodedTransactionData(_moduleType: number | BigNumber, _securityToken: string): string;
    };
    getTagsByType: {
        callAsync(_moduleType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[]]>;
        getABIEncodedTransactionData(_moduleType: number | BigNumber): string;
    };
    getFactoryDetails: {
        callAsync(_factoryAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, string, string[]]>;
        getABIEncodedTransactionData(_factoryAddress: string): string;
    };
    getModulesByType: {
        callAsync(_moduleType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_moduleType: number | BigNumber): string;
    };
    getAllModulesByType: {
        callAsync(_moduleType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_moduleType: number | BigNumber): string;
    };
    getModulesByTypeAndToken: {
        callAsync(_moduleType: number | BigNumber, _securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_moduleType: number | BigNumber, _securityToken: string): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newOwner: string): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    isPaused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ModuleRegistryContract>;
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
//# sourceMappingURL=module_registry.d.ts.map