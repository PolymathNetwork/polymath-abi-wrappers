import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type SecurityTokenEventArgs = SecurityTokenModuleAddedEventArgs | SecurityTokenModuleUpgradedEventArgs | SecurityTokenUpdateTokenDetailsEventArgs | SecurityTokenUpdateTokenNameEventArgs | SecurityTokenGranularityChangedEventArgs | SecurityTokenFreezeIssuanceEventArgs | SecurityTokenFreezeTransfersEventArgs | SecurityTokenCheckpointCreatedEventArgs | SecurityTokenSetControllerEventArgs | SecurityTokenTreasuryWalletChangedEventArgs | SecurityTokenDisableControllerEventArgs | SecurityTokenOwnershipTransferredEventArgs | SecurityTokenTokenUpgradedEventArgs | SecurityTokenModuleArchivedEventArgs | SecurityTokenModuleUnarchivedEventArgs | SecurityTokenModuleRemovedEventArgs | SecurityTokenModuleBudgetChangedEventArgs | SecurityTokenTransferByPartitionEventArgs | SecurityTokenAuthorizedOperatorEventArgs | SecurityTokenRevokedOperatorEventArgs | SecurityTokenAuthorizedOperatorByPartitionEventArgs | SecurityTokenRevokedOperatorByPartitionEventArgs | SecurityTokenIssuedByPartitionEventArgs | SecurityTokenRedeemedByPartitionEventArgs | SecurityTokenControllerTransferEventArgs | SecurityTokenControllerRedemptionEventArgs | SecurityTokenDocumentRemovedEventArgs | SecurityTokenDocumentUpdatedEventArgs | SecurityTokenIssuedEventArgs | SecurityTokenRedeemedEventArgs | SecurityTokenTransferEventArgs | SecurityTokenApprovalEventArgs;
export declare enum SecurityTokenEvents {
    ModuleAdded = "ModuleAdded",
    ModuleUpgraded = "ModuleUpgraded",
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
    ControllerTransfer = "ControllerTransfer",
    ControllerRedemption = "ControllerRedemption",
    DocumentRemoved = "DocumentRemoved",
    DocumentUpdated = "DocumentUpdated",
    Issued = "Issued",
    Redeemed = "Redeemed",
    Transfer = "Transfer",
    Approval = "Approval"
}
export interface SecurityTokenModuleAddedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _name: string;
    _moduleFactory: string;
    _module: string;
    _moduleCost: BigNumber;
    _budget: BigNumber;
    _label: string;
    _archived: boolean;
}
export interface SecurityTokenModuleUpgradedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface SecurityTokenUpdateTokenDetailsEventArgs extends DecodedLogArgs {
    _oldDetails: string;
    _newDetails: string;
}
export interface SecurityTokenUpdateTokenNameEventArgs extends DecodedLogArgs {
    _oldName: string;
    _newName: string;
}
export interface SecurityTokenGranularityChangedEventArgs extends DecodedLogArgs {
    _oldGranularity: BigNumber;
    _newGranularity: BigNumber;
}
export interface SecurityTokenFreezeIssuanceEventArgs extends DecodedLogArgs {
}
export interface SecurityTokenFreezeTransfersEventArgs extends DecodedLogArgs {
    _status: boolean;
}
export interface SecurityTokenCheckpointCreatedEventArgs extends DecodedLogArgs {
    _checkpointId: BigNumber;
    _investorLength: BigNumber;
}
export interface SecurityTokenSetControllerEventArgs extends DecodedLogArgs {
    _oldController: string;
    _newController: string;
}
export interface SecurityTokenTreasuryWalletChangedEventArgs extends DecodedLogArgs {
    _oldTreasuryWallet: string;
    _newTreasuryWallet: string;
}
export interface SecurityTokenDisableControllerEventArgs extends DecodedLogArgs {
}
export interface SecurityTokenOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface SecurityTokenTokenUpgradedEventArgs extends DecodedLogArgs {
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export interface SecurityTokenModuleArchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface SecurityTokenModuleUnarchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface SecurityTokenModuleRemovedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
}
export interface SecurityTokenModuleBudgetChangedEventArgs extends DecodedLogArgs {
    _moduleTypes: BigNumber[];
    _module: string;
    _oldBudget: BigNumber;
    _budget: BigNumber;
}
export interface SecurityTokenTransferByPartitionEventArgs extends DecodedLogArgs {
    _fromPartition: string;
    _operator: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export interface SecurityTokenAuthorizedOperatorEventArgs extends DecodedLogArgs {
    operator: string;
    tokenHolder: string;
}
export interface SecurityTokenRevokedOperatorEventArgs extends DecodedLogArgs {
    operator: string;
    tokenHolder: string;
}
export interface SecurityTokenAuthorizedOperatorByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    operator: string;
    tokenHolder: string;
}
export interface SecurityTokenRevokedOperatorByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    operator: string;
    tokenHolder: string;
}
export interface SecurityTokenIssuedByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    to: string;
    value: BigNumber;
    data: string;
}
export interface SecurityTokenRedeemedByPartitionEventArgs extends DecodedLogArgs {
    partition: string;
    operator: string;
    from: string;
    value: BigNumber;
    data: string;
    operatorData: string;
}
export interface SecurityTokenControllerTransferEventArgs extends DecodedLogArgs {
    _controller: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export interface SecurityTokenControllerRedemptionEventArgs extends DecodedLogArgs {
    _controller: string;
    _tokenHolder: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export interface SecurityTokenDocumentRemovedEventArgs extends DecodedLogArgs {
    _name: string;
    _uri: string;
    _documentHash: string;
}
export interface SecurityTokenDocumentUpdatedEventArgs extends DecodedLogArgs {
    _name: string;
    _uri: string;
    _documentHash: string;
}
export interface SecurityTokenIssuedEventArgs extends DecodedLogArgs {
    _operator: string;
    _to: string;
    _value: BigNumber;
    _data: string;
}
export interface SecurityTokenRedeemedEventArgs extends DecodedLogArgs {
    _operator: string;
    _from: string;
    _value: BigNumber;
    _data: string;
}
export interface SecurityTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export interface SecurityTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare class SecurityTokenContract extends BaseContract {
    private _defaultEstimateGasFactor;
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    approve: {
        sendTransactionAsync(spender: string, value: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(spender: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(spender: string, value: BigNumber): string;
    };
    initialized: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    holderCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getterDelegate: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    decimals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    increaseAllowance: {
        sendTransactionAsync(spender: string, addedValue: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, addedValue: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(spender: string, addedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(spender: string, addedValue: BigNumber): string;
    };
    currentCheckpointId: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    granularity: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    dataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    balanceOf: {
        callAsync(owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(owner: string): string;
    };
    polymathRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    controllerDisabled: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    decreaseAllowance: {
        sendTransactionAsync(spender: string, subtractedValue: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, subtractedValue: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(spender: string, subtractedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(spender: string, subtractedValue: BigNumber): string;
    };
    moduleRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    securityTokenRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    tokenDetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    allowance: {
        callAsync(owner: string, spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(owner: string, spender: string): string;
    };
    transfersFrozen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    tokenFactory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    controller: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    initialize: {
        sendTransactionAsync(_getterDelegate: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_getterDelegate: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_getterDelegate: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_getterDelegate: string): string;
    };
    isModule: {
        callAsync(_module: string, _type: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_module: string, _type: number | BigNumber): string;
    };
    addModuleWithLabel: {
        sendTransactionAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _label: string, _archived: boolean): string;
    };
    addModule: {
        sendTransactionAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, _archived: boolean): string;
    };
    archiveModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_module: string): string;
    };
    upgradeModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_module: string): string;
    };
    upgradeToken: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    unarchiveModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_module: string): string;
    };
    removeModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_module: string): string;
    };
    withdrawERC20: {
        sendTransactionAsync(_tokenContract: string, _value: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string, _value: BigNumber): string;
    };
    changeModuleBudget: {
        sendTransactionAsync(_module: string, _change: BigNumber, _increase: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_module: string, _change: BigNumber, _increase: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_module: string, _change: BigNumber, _increase: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_module: string, _change: BigNumber, _increase: boolean): string;
    };
    updateTokenDetails: {
        sendTransactionAsync(_newTokenDetails: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newTokenDetails: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newTokenDetails: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newTokenDetails: string): string;
    };
    changeGranularity: {
        sendTransactionAsync(_granularity: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_granularity: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_granularity: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_granularity: BigNumber): string;
    };
    changeDataStore: {
        sendTransactionAsync(_dataStore: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dataStore: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dataStore: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dataStore: string): string;
    };
    changeName: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string): string;
    };
    changeTreasuryWallet: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_wallet: string): string;
    };
    freezeTransfers: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    unfreezeTransfers: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    transfer: {
        sendTransactionAsync(_to: string, _value: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_to: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber): string;
    };
    transferWithData: {
        sendTransactionAsync(_to: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_to: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber, _data: string): string;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber): string;
    };
    transferFromWithData: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string;
    };
    balanceOfByPartition: {
        callAsync(_partition: string, _tokenHolder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string): string;
    };
    transferByPartition: {
        sendTransactionAsync(_partition: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _to: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_partition: string, _to: string, _value: BigNumber, _data: string): string;
    };
    authorizeOperator: {
        sendTransactionAsync(_operator: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_operator: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_operator: string): string;
    };
    revokeOperator: {
        sendTransactionAsync(_operator: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_operator: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_operator: string): string;
    };
    authorizeOperatorByPartition: {
        sendTransactionAsync(_partition: string, _operator: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _operator: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_partition: string, _operator: string): string;
    };
    revokeOperatorByPartition: {
        sendTransactionAsync(_partition: string, _operator: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _operator: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_partition: string, _operator: string): string;
    };
    operatorTransferByPartition: {
        sendTransactionAsync(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_partition: string, _from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string): string;
    };
    freezeIssuance: {
        sendTransactionAsync(_signature: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_signature: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_signature: string): string;
    };
    issue: {
        sendTransactionAsync(_tokenHolder: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolder: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenHolder: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string): string;
    };
    issueMulti: {
        sendTransactionAsync(_tokenHolders: string[], _values: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolders: string[], _values: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenHolders: string[], _values: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenHolders: string[], _values: BigNumber[]): string;
    };
    issueByPartition: {
        sendTransactionAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string): string;
    };
    redeem: {
        sendTransactionAsync(_value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_value: BigNumber, _data: string): string;
    };
    redeemByPartition: {
        sendTransactionAsync(_partition: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_partition: string, _value: BigNumber, _data: string): string;
    };
    operatorRedeemByPartition: {
        sendTransactionAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string): string;
    };
    redeemFrom: {
        sendTransactionAsync(_tokenHolder: string, _value: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolder: string, _value: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenHolder: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string): string;
    };
    createCheckpoint: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    setController: {
        sendTransactionAsync(_controller: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_controller: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_controller: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_controller: string): string;
    };
    disableController: {
        sendTransactionAsync(_signature: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_signature: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_signature: string): string;
    };
    canTransfer: {
        callAsync(_to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber, _data: string): string;
    };
    canTransferFrom: {
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string;
    };
    canTransferByPartition: {
        callAsync(_from: string, _to: string, _partition: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string]>;
        getABIEncodedTransactionData(_from: string, _to: string, _partition: string, _value: BigNumber, _data: string): string;
    };
    setDocument: {
        sendTransactionAsync(_name: string, _uri: string, _documentHash: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _uri: string, _documentHash: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, _uri: string, _documentHash: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string, _uri: string, _documentHash: string): string;
    };
    removeDocument: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string): string;
    };
    isControllable: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    controllerTransfer: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string, _operatorData: string): string;
    };
    controllerRedeem: {
        sendTransactionAsync(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string, _operatorData: string): string;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<SecurityTokenContract>;
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
//# sourceMappingURL=security_token.d.ts.map