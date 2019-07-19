import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
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
    };
    getBytesValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getAddressValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getArrayAddress: {
        callAsync(_key: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getBoolValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getStringValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getArrayBytes32: {
        callAsync(_key: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getUintValue: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getArrayUint: {
        callAsync(_key: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    initialize: {
        sendTransactionAsync(_polymathRegistry: string, _owner: string, txData?: Partial<TxDataPayable>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_polymathRegistry: string, _owner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_polymathRegistry: string, _owner: string): string;
        callAsync(_polymathRegistry: string, _owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    useModule2: {
        sendTransactionAsync(_moduleFactory: string, _isUpgrade: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, _isUpgrade: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string, _isUpgrade: boolean): string;
        callAsync(_moduleFactory: string, _isUpgrade: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    useModule1: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isCompatibleModule: {
        callAsync(_moduleFactory: string, _securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    registerModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    verifyModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unverifyModule: {
        sendTransactionAsync(_moduleFactory: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string): string;
        callAsync(_moduleFactory: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getTagsByTypeAndToken: {
        callAsync(_moduleType: number | BigNumber, _securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[]]>;
    };
    getTagsByType: {
        callAsync(_moduleType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[]]>;
    };
    getFactoryDetails: {
        callAsync(_factoryAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, string, string[]]>;
    };
    getModulesByType: {
        callAsync(_moduleType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getAllModulesByType: {
        callAsync(_moduleType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getModulesByTypeAndToken: {
        callAsync(_moduleType: number | BigNumber, _securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isPaused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ModuleRegistryContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=module_registry.d.ts.map