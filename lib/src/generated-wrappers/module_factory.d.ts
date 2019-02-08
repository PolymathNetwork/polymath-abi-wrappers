import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare type ModuleFactoryEventArgs = ModuleFactoryOwnershipRenouncedEventArgs | ModuleFactoryOwnershipTransferredEventArgs | ModuleFactoryChangeFactorySetupFeeEventArgs | ModuleFactoryChangeFactoryUsageFeeEventArgs | ModuleFactoryChangeFactorySubscriptionFeeEventArgs | ModuleFactoryGenerateModuleFromFactoryEventArgs | ModuleFactoryChangeSTVersionBoundEventArgs;
export declare enum ModuleFactoryEvents {
    OwnershipRenounced = "OwnershipRenounced",
    OwnershipTransferred = "OwnershipTransferred",
    ChangeFactorySetupFee = "ChangeFactorySetupFee",
    ChangeFactoryUsageFee = "ChangeFactoryUsageFee",
    ChangeFactorySubscriptionFee = "ChangeFactorySubscriptionFee",
    GenerateModuleFromFactory = "GenerateModuleFromFactory",
    ChangeSTVersionBound = "ChangeSTVersionBound"
}
export interface ModuleFactoryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}
export interface ModuleFactoryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface ModuleFactoryChangeFactorySetupFeeEventArgs extends DecodedLogArgs {
    _oldSetupCost: BigNumber;
    _newSetupCost: BigNumber;
    _moduleFactory: string;
}
export interface ModuleFactoryChangeFactoryUsageFeeEventArgs extends DecodedLogArgs {
    _oldUsageCost: BigNumber;
    _newUsageCost: BigNumber;
    _moduleFactory: string;
}
export interface ModuleFactoryChangeFactorySubscriptionFeeEventArgs extends DecodedLogArgs {
    _oldSubscriptionCost: BigNumber;
    _newMonthlySubscriptionCost: BigNumber;
    _moduleFactory: string;
}
export interface ModuleFactoryGenerateModuleFromFactoryEventArgs extends DecodedLogArgs {
    _module: string;
    _moduleName: string;
    _moduleFactory: string;
    _creator: string;
    _setupCost: BigNumber;
    _timestamp: BigNumber;
}
export interface ModuleFactoryChangeSTVersionBoundEventArgs extends DecodedLogArgs {
    _boundType: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export declare class ModuleFactoryContract extends BaseContract {
    deploy: {
        sendTransactionAsync(_data: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_data: string): string;
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    monthlySubscriptionCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    title: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    version: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    description: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setupCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getTags: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTypes: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    usageCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getInstructions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeFactorySetupFee: {
        sendTransactionAsync(_newSetupCost: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newSetupCost: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newSetupCost: BigNumber): string;
        callAsync(_newSetupCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeFactoryUsageFee: {
        sendTransactionAsync(_newUsageCost: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newUsageCost: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newUsageCost: BigNumber): string;
        callAsync(_newUsageCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeFactorySubscriptionFee: {
        sendTransactionAsync(_newSubscriptionCost: BigNumber, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newSubscriptionCost: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newSubscriptionCost: BigNumber): string;
        callAsync(_newSubscriptionCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeTitle: {
        sendTransactionAsync(_newTitle: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newTitle: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newTitle: string): string;
        callAsync(_newTitle: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeDescription: {
        sendTransactionAsync(_newDesc: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newDesc: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newDesc: string): string;
        callAsync(_newDesc: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeName: {
        sendTransactionAsync(_newName: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newName: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newName: string): string;
        callAsync(_newName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeVersion: {
        sendTransactionAsync(_newVersion: string, txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_newVersion: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newVersion: string): string;
        callAsync(_newVersion: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeSTVersionBounds: {
        sendTransactionAsync(_boundType: string, _newVersion: (number | BigNumber)[], txData?: Partial<TxData>): Promise<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_boundType: string, _newVersion: (number | BigNumber)[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_boundType: string, _newVersion: (number | BigNumber)[]): string;
        callAsync(_boundType: string, _newVersion: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getLowerSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getUpperSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getSetupCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getName: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=module_factory.d.ts.map