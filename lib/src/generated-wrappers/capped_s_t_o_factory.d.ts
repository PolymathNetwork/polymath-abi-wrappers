import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type CappedSTOFactoryEventArgs = CappedSTOFactoryLogicContractSetEventArgs | CappedSTOFactoryModuleUpgradedEventArgs | CappedSTOFactoryOwnershipTransferredEventArgs | CappedSTOFactoryChangeSetupCostEventArgs | CappedSTOFactoryChangeCostTypeEventArgs | CappedSTOFactoryGenerateModuleFromFactoryEventArgs | CappedSTOFactoryChangeSTVersionBoundEventArgs;
export declare enum CappedSTOFactoryEvents {
    LogicContractSet = "LogicContractSet",
    ModuleUpgraded = "ModuleUpgraded",
    OwnershipTransferred = "OwnershipTransferred",
    ChangeSetupCost = "ChangeSetupCost",
    ChangeCostType = "ChangeCostType",
    GenerateModuleFromFactory = "GenerateModuleFromFactory",
    ChangeSTVersionBound = "ChangeSTVersionBound"
}
export interface CappedSTOFactoryLogicContractSetEventArgs extends DecodedLogArgs {
    _version: string;
    _upgrade: BigNumber;
    _logicContract: string;
    _upgradeData: string;
}
export interface CappedSTOFactoryModuleUpgradedEventArgs extends DecodedLogArgs {
    _module: string;
    _securityToken: string;
    _version: BigNumber;
}
export interface CappedSTOFactoryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface CappedSTOFactoryChangeSetupCostEventArgs extends DecodedLogArgs {
    _oldSetupCost: BigNumber;
    _newSetupCost: BigNumber;
}
export interface CappedSTOFactoryChangeCostTypeEventArgs extends DecodedLogArgs {
    _isOldCostInPoly: boolean;
    _isNewCostInPoly: boolean;
}
export interface CappedSTOFactoryGenerateModuleFromFactoryEventArgs extends DecodedLogArgs {
    _module: string;
    _moduleName: string;
    _moduleFactory: string;
    _creator: string;
    _setupCost: BigNumber;
    _setupCostInPoly: BigNumber;
}
export interface CappedSTOFactoryChangeSTVersionBoundEventArgs extends DecodedLogArgs {
    _boundType: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export declare class CappedSTOFactoryContract extends BaseContract {
    private _defaultEstimateGasFactor;
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    upgrade: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeSetupCost: {
        sendTransactionAsync(_setupCost: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_setupCost: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_setupCost: BigNumber): string;
        callAsync(_setupCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeTags: {
        sendTransactionAsync(_tagsData: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tagsData: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tagsData: string[]): string;
        callAsync(_tagsData: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setupCostInPoly: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    changeTitle: {
        sendTransactionAsync(_title: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_title: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_title: string): string;
        callAsync(_title: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setLogicContract: {
        sendTransactionAsync(_version: string, _logicContract: string, _upgradeData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_version: string, _logicContract: string, _upgradeData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_version: string, _logicContract: string, _upgradeData: string): string;
        callAsync(_version: string, _logicContract: string, _upgradeData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isCostInPoly: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    title: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    version: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    latestUpgrade: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    logicContracts: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string]>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    description: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    polymathRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setupCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getLowerSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    changeName: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string): string;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isOwner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getTags: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    modules: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    moduleToSecurityToken: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getTypes: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    changeCostAndType: {
        sendTransactionAsync(_setupCost: BigNumber, _isCostInPoly: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_setupCost: BigNumber, _isCostInPoly: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_setupCost: BigNumber, _isCostInPoly: boolean): string;
        callAsync(_setupCost: BigNumber, _isCostInPoly: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateLogicContract: {
        sendTransactionAsync(_upgrade: BigNumber, _version: string, _logicContract: string, _upgradeData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_upgrade: BigNumber, _version: string, _logicContract: string, _upgradeData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_upgrade: BigNumber, _version: string, _logicContract: string, _upgradeData: string): string;
        callAsync(_upgrade: BigNumber, _version: string, _logicContract: string, _upgradeData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeDescription: {
        sendTransactionAsync(_description: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_description: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_description: string): string;
        callAsync(_description: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newOwner: string): string;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getUpperSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    changeSTVersionBounds: {
        sendTransactionAsync(_boundType: string, _newVersion: (number | BigNumber)[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_boundType: string, _newVersion: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_boundType: string, _newVersion: (number | BigNumber)[]): string;
        callAsync(_boundType: string, _newVersion: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deploy: {
        sendTransactionAsync(_data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_data: string): string;
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _setupCost: BigNumber, _logicContract: string, _polymathRegistry: string, _isCostInPoly: boolean): Promise<CappedSTOFactoryContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=capped_s_t_o_factory.d.ts.map