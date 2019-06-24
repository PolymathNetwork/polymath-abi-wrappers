import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type ISecurityTokenEventArgs = ISecurityTokenTransferEventArgs | ISecurityTokenApprovalEventArgs | ISecurityTokenModuleAddedEventArgs | ISecurityTokenUpdateTokenDetailsEventArgs | ISecurityTokenUpdateTokenNameEventArgs | ISecurityTokenGranularityChangedEventArgs | ISecurityTokenFreezeIssuanceEventArgs | ISecurityTokenFreezeTransfersEventArgs | ISecurityTokenCheckpointCreatedEventArgs | ISecurityTokenSetControllerEventArgs | ISecurityTokenTreasuryWalletChangedEventArgs | ISecurityTokenDisableControllerEventArgs | ISecurityTokenOwnershipTransferredEventArgs | ISecurityTokenTokenUpgradedEventArgs | ISecurityTokenModuleArchivedEventArgs | ISecurityTokenModuleUnarchivedEventArgs | ISecurityTokenModuleRemovedEventArgs | ISecurityTokenModuleBudgetChangedEventArgs | ISecurityTokenTransferByPartitionEventArgs | ISecurityTokenAuthorizedOperatorEventArgs | ISecurityTokenRevokedOperatorEventArgs | ISecurityTokenAuthorizedOperatorByPartitionEventArgs | ISecurityTokenRevokedOperatorByPartitionEventArgs | ISecurityTokenIssuedByPartitionEventArgs | ISecurityTokenRedeemedByPartitionEventArgs | ISecurityTokenDocumentRemovedEventArgs | ISecurityTokenDocumentUpdatedEventArgs | ISecurityTokenControllerTransferEventArgs | ISecurityTokenControllerRedemptionEventArgs | ISecurityTokenIssuedEventArgs | ISecurityTokenRedeemedEventArgs;
export declare enum ISecurityTokenEvents {
    Transfer = "Transfer",
    Approval = "Approval",
    ModuleAdded = "ModuleAdded",
    UpdateTokenDetails = "UpdateTokenDetails",
    UpdateTokenName = "UpdateTokenName",
    GranularityChanged = "GranularityChanged",
    FreezeIssuance = "FreezeIssuance",
    FreezeTransfers = "FreezeTransfers",
    CheckpointCreated = "CheckpointCreated",
    SetController = "SetController",
    TreasuryWalletChanged = "TreasuryWalletChanged",
    DisableController = "DisableController",
    OwnershipTransferred = "OwnershipTransferred",
    TokenUpgraded = "TokenUpgraded",
    ModuleArchived = "ModuleArchived",
    ModuleUnarchived = "ModuleUnarchived",
    ModuleRemoved = "ModuleRemoved",
    ModuleBudgetChanged = "ModuleBudgetChanged",
    TransferByPartition = "TransferByPartition",
    AuthorizedOperator = "AuthorizedOperator",
    RevokedOperator = "RevokedOperator",
    AuthorizedOperatorByPartition = "AuthorizedOperatorByPartition",
    RevokedOperatorByPartition = "RevokedOperatorByPartition",
    IssuedByPartition = "IssuedByPartition",
    RedeemedByPartition = "RedeemedByPartition",
    DocumentRemoved = "DocumentRemoved",
    DocumentUpdated = "DocumentUpdated",
    ControllerTransfer = "ControllerTransfer",
    ControllerRedemption = "ControllerRedemption",
    Issued = "Issued",
    Redeemed = "Redeemed"
}
export interface ISecurityTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export interface ISecurityTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}
export interface ISecurityTokenModuleAddedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _name: string;
    _moduleFactory: string;
    _module: string;
    _moduleCost: BigNumber;
    _budget: BigNumber;
    _label: string;
    _archived: boolean;
}
export interface ISecurityTokenUpdateTokenDetailsEventArgs extends DecodedLogArgs {
    _oldDetails: string;
    _newDetails: string;
}
export interface ISecurityTokenUpdateTokenNameEventArgs extends DecodedLogArgs {
    _oldName: string;
    _newName: string;
}
export interface ISecurityTokenGranularityChangedEventArgs extends DecodedLogArgs {
    _oldGranularity: BigNumber;
    _newGranularity: BigNumber;
}
export interface ISecurityTokenFreezeIssuanceEventArgs extends DecodedLogArgs {
}
export interface ISecurityTokenFreezeTransfersEventArgs extends DecodedLogArgs {
    _status: boolean;
}
export interface ISecurityTokenCheckpointCreatedEventArgs extends DecodedLogArgs {
    _checkpointId: BigNumber;
    _investorLength: BigNumber;
}
export interface ISecurityTokenSetControllerEventArgs extends DecodedLogArgs {
    _oldController: string;
    _newController: string;
}
export interface ISecurityTokenTreasuryWalletChangedEventArgs extends DecodedLogArgs {
    _oldTreasuryWallet: string;
    _newTreasuryWallet: string;
}
export interface ISecurityTokenDisableControllerEventArgs extends DecodedLogArgs {
}
export interface ISecurityTokenOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface ISecurityTokenTokenUpgradedEventArgs extends DecodedLogArgs {
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export interface ISecurityTokenModuleArchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface ISecurityTokenModuleUnarchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface ISecurityTokenModuleRemovedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface ISecurityTokenModuleBudgetChangedEventArgs extends DecodedLogArgs {
    _moduleTypes: BigNumber[];
    _module: string;
    _oldBudget: BigNumber;
    _budget: BigNumber;
}
export interface ISecurityTokenTransferByPartitionEventArgs extends DecodedLogArgs {
    _fromPartition: string;
    _operator: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export interface ISecurityTokenAuthorizedOperatorEventArgs extends DecodedLogArgs {
    operator: string;
    tokenHolder: string;
}
export interface ISecurityTokenRevokedOperatorEventArgs extends DecodedLogArgs {
    operator: string;
    tokenHolder: string;
}
export interface ISecurityTokenAuthorizedOperatorByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    operator: string;
    tokenHolder: string;
}
export interface ISecurityTokenRevokedOperatorByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    operator: string;
    tokenHolder: string;
}
export interface ISecurityTokenIssuedByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    to: string;
    value: BigNumber;
    data: string;
}
export interface ISecurityTokenRedeemedByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    operator: string;
    from: string;
    value: BigNumber;
    data: string;
    operatorData: string;
}
export interface ISecurityTokenDocumentRemovedEventArgs extends DecodedLogArgs {
    _name: string;
    _uri: string;
    _documentHash: string;
}
export interface ISecurityTokenDocumentUpdatedEventArgs extends DecodedLogArgs {
    _name: string;
    _uri: string;
    _documentHash: string;
}
export interface ISecurityTokenControllerTransferEventArgs extends DecodedLogArgs {
    _controller: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export interface ISecurityTokenControllerRedemptionEventArgs extends DecodedLogArgs {
    _controller: string;
    _tokenHolder: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export interface ISecurityTokenIssuedEventArgs extends DecodedLogArgs {
    _operator: string;
    _to: string;
    _value: BigNumber;
    _data: string;
}
export interface ISecurityTokenRedeemedEventArgs extends DecodedLogArgs {
    _operator: string;
    _from: string;
    _value: BigNumber;
    _data: string;
}
export declare class ISecurityTokenContract extends BaseContract {
    private _defaultEstimateGasFactor;
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    decimals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    balanceOf: {
        callAsync(owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    allowance: {
        callAsync(owner: string, spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    transfer: {
        sendTransactionAsync(to: string, value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(to: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(to: string, value: BigNumber): string;
        callAsync(to: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferFrom: {
        sendTransactionAsync(from: string, to: string, value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(from: string, to: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(from: string, to: string, value: BigNumber): string;
        callAsync(from: string, to: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    approve: {
        sendTransactionAsync(spender: string, value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(spender: string, value: BigNumber): string;
        callAsync(spender: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    decreaseAllowance: {
        sendTransactionAsync(spender: string, subtractedValue: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, subtractedValue: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(spender: string, subtractedValue: BigNumber): string;
        callAsync(spender: string, subtractedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    increaseAllowance: {
        sendTransactionAsync(spender: string, addedValue: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, addedValue: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(spender: string, addedValue: BigNumber): string;
        callAsync(spender: string, addedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    canTransfer: {
        callAsync(_to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
    };
    initialize: {
        sendTransactionAsync(_getterDelegate: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_getterDelegate: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_getterDelegate: string): string;
        callAsync(_getterDelegate: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    canTransferByPartition: {
        callAsync(_from: string, _to: string, _partition: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string]>;
    };
    canTransferFrom: {
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
    };
    setDocument: {
        sendTransactionAsync(_name: string, _uri: string, _documentHash: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _uri: string, _documentHash: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _uri: string, _documentHash: string): string;
        callAsync(_name: string, _uri: string, _documentHash: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeDocument: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string): string;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getDocument: {
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, BigNumber]>;
    };
    getAllDocuments: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    isControllable: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isModule: {
        callAsync(_module: string, _type: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    issue: {
        sendTransactionAsync(_tokenHolder: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolder: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string): string;
        callAsync(_tokenHolder: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    issueMulti: {
        sendTransactionAsync(_tokenHolders: string[], _values: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolders: string[], _values: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenHolders: string[], _values: BigNumber[]): string;
        callAsync(_tokenHolders: string[], _values: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    issueByPartition: {
        sendTransactionAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string): string;
        callAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    redeemByPartition: {
        sendTransactionAsync(_partition: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _value: BigNumber, _data: string): string;
        callAsync(_partition: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    redeem: {
        sendTransactionAsync(_value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_value: BigNumber, _data: string): string;
        callAsync(_value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    redeemFrom: {
        sendTransactionAsync(_tokenHolder: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolder: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string): string;
        callAsync(_tokenHolder: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    operatorRedeemByPartition: {
        sendTransactionAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string): string;
        callAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    checkPermission: {
        callAsync(_delegate: string, _module: string, _perm: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getModule: {
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string, boolean, BigNumber[], string]>;
    };
    getModulesByName: {
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getModulesByType: {
        callAsync(_type: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTreasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    totalSupplyAt: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    balanceOfAt: {
        callAsync(_investor: string, _checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    createCheckpoint: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getCheckpointTimes: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getInvestors: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getInvestorsAt: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getInvestorsSubsetAt: {
        callAsync(_checkpointId: BigNumber, _start: BigNumber, _end: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    iterateInvestors: {
        callAsync(_start: BigNumber, _end: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    currentCheckpointId: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    isOperator: {
        callAsync(_operator: string, _tokenHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isOperatorForPartition: {
        callAsync(_partition: string, _operator: string, _tokenHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    partitionsOf: {
        callAsync(_tokenHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    dataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeDataStore: {
        sendTransactionAsync(_dataStore: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dataStore: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dataStore: string): string;
        callAsync(_dataStore: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeTreasuryWallet: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string): string;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    withdrawERC20: {
        sendTransactionAsync(_tokenContract: string, _value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string, _value: BigNumber): string;
        callAsync(_tokenContract: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeModuleBudget: {
        sendTransactionAsync(_module: string, _change: BigNumber, _increase: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, _change: BigNumber, _increase: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string, _change: BigNumber, _increase: boolean): string;
        callAsync(_module: string, _change: BigNumber, _increase: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateTokenDetails: {
        sendTransactionAsync(_newTokenDetails: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newTokenDetails: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newTokenDetails: string): string;
        callAsync(_newTokenDetails: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeName: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string): string;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeGranularity: {
        sendTransactionAsync(_granularity: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_granularity: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_granularity: BigNumber): string;
        callAsync(_granularity: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    freezeTransfers: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unfreezeTransfers: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    freezeIssuance: {
        sendTransactionAsync(_signature: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_signature: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_signature: string): string;
        callAsync(_signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addModuleWithLabel: {
        sendTransactionAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean): string;
        callAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addModule: {
        sendTransactionAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean): string;
        callAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    archiveModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unarchiveModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setController: {
        sendTransactionAsync(_controller: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_controller: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_controller: string): string;
        callAsync(_controller: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    controllerTransfer: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string): string;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    controllerRedeem: {
        sendTransactionAsync(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string): string;
        callAsync(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    disableController: {
        sendTransactionAsync(_signature: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_signature: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_signature: string): string;
        callAsync(_signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getVersion: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getInvestorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    holderCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    transferWithData: {
        sendTransactionAsync(_to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_to: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber, _data: string): string;
        callAsync(_to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferFromWithData: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferByPartition: {
        sendTransactionAsync(_partition: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _to: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _to: string, _value: BigNumber, _data: string): string;
        callAsync(_partition: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    balanceOfByPartition: {
        callAsync(_partition: string, _tokenHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    granularity: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    polymathRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    upgradeModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    upgradeToken: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isIssuable: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    authorizeOperator: {
        sendTransactionAsync(_operator: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_operator: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_operator: string): string;
        callAsync(_operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeOperator: {
        sendTransactionAsync(_operator: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_operator: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_operator: string): string;
        callAsync(_operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    authorizeOperatorByPartition: {
        sendTransactionAsync(_partition: string, _operator: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _operator: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _operator: string): string;
        callAsync(_partition: string, _operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeOperatorByPartition: {
        sendTransactionAsync(_partition: string, _operator: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _operator: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _operator: string): string;
        callAsync(_partition: string, _operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    operatorTransferByPartition: {
        sendTransactionAsync(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string): string;
        callAsync(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transfersFrozen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newOwner: string): string;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isOwner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    controller: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    moduleRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    securityTokenRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    tokenFactory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getterDelegate: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    controllerDisabled: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    initialized: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    tokenDetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ISecurityTokenContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=i_security_token.d.ts.map