import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type ModuleFactoryEventArgs = ModuleFactoryOwnershipTransferredEventArgs | ModuleFactoryChangeSetupCostEventArgs | ModuleFactoryChangeCostTypeEventArgs | ModuleFactoryGenerateModuleFromFactoryEventArgs | ModuleFactoryChangeSTVersionBoundEventArgs;
export declare enum ModuleFactoryEvents {
    OwnershipTransferred = "OwnershipTransferred",
    ChangeSetupCost = "ChangeSetupCost",
    ChangeCostType = "ChangeCostType",
    GenerateModuleFromFactory = "GenerateModuleFromFactory",
    ChangeSTVersionBound = "ChangeSTVersionBound"
}
export interface ModuleFactoryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface ModuleFactoryChangeSetupCostEventArgs extends DecodedLogArgs {
    _oldSetupCost: BigNumber;
    _newSetupCost: BigNumber;
}
export interface ModuleFactoryChangeCostTypeEventArgs extends DecodedLogArgs {
    _isOldCostInPoly: boolean;
    _isNewCostInPoly: boolean;
}
export interface ModuleFactoryGenerateModuleFromFactoryEventArgs extends DecodedLogArgs {
    _module: string;
    _moduleName: string;
    _moduleFactory: string;
    _creator: string;
    _setupCost: BigNumber;
    _setupCostInPoly: BigNumber;
}
export interface ModuleFactoryChangeSTVersionBoundEventArgs extends DecodedLogArgs {
    _boundType: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export declare class ModuleFactoryContract extends BaseContract {
    private _defaultEstimateGasFactor;
    deploy: {
        sendTransactionAsync(_data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_data: string): string;
    };
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    isCostInPoly: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    title: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    description: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    polymathRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    setupCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    isOwner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(newOwner: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(newOwner: string): string;
    };
    getTypes: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(): string;
    };
    getTags: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    version: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    changeSetupCost: {
        sendTransactionAsync(_setupCost: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_setupCost: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_setupCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_setupCost: BigNumber): string;
    };
    changeCostAndType: {
        sendTransactionAsync(_setupCost: BigNumber, _isCostInPoly: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_setupCost: BigNumber, _isCostInPoly: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_setupCost: BigNumber, _isCostInPoly: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_setupCost: BigNumber, _isCostInPoly: boolean): string;
    };
    changeTitle: {
        sendTransactionAsync(_title: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_title: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_title: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_title: string): string;
    };
    changeDescription: {
        sendTransactionAsync(_description: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_description: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_description: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_description: string): string;
    };
    changeName: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string): string;
    };
    changeTags: {
        sendTransactionAsync(_tagsData: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tagsData: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tagsData: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tagsData: string[]): string;
    };
    changeSTVersionBounds: {
        sendTransactionAsync(_boundType: string, _newVersion: (number | BigNumber)[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_boundType: string, _newVersion: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_boundType: string, _newVersion: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_boundType: string, _newVersion: (number | BigNumber)[]): string;
    };
    getLowerSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(): string;
    };
    getUpperSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(): string;
    };
    setupCostInPoly: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _setupCost: BigNumber, _polymathRegistry: string, _isCostInPoly: boolean): Promise<ModuleFactoryContract>;
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
//# sourceMappingURL=module_factory.d.ts.map