import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare type SecurityTokenEventArgs = SecurityTokenModuleAddedEventArgs | SecurityTokenUpdateTokenDetailsEventArgs | SecurityTokenGranularityChangedEventArgs | SecurityTokenModuleArchivedEventArgs | SecurityTokenModuleUnarchivedEventArgs | SecurityTokenModuleRemovedEventArgs | SecurityTokenModuleBudgetChangedEventArgs | SecurityTokenFreezeTransfersEventArgs | SecurityTokenCheckpointCreatedEventArgs | SecurityTokenFreezeMintingEventArgs | SecurityTokenMintedEventArgs | SecurityTokenBurntEventArgs | SecurityTokenSetControllerEventArgs | SecurityTokenForceTransferEventArgs | SecurityTokenForceBurnEventArgs | SecurityTokenDisableControllerEventArgs | SecurityTokenOwnershipRenouncedEventArgs | SecurityTokenOwnershipTransferredEventArgs | SecurityTokenApprovalEventArgs | SecurityTokenTransferEventArgs;
export declare enum SecurityTokenEvents {
    ModuleAdded = "ModuleAdded",
    UpdateTokenDetails = "UpdateTokenDetails",
    GranularityChanged = "GranularityChanged",
    ModuleArchived = "ModuleArchived",
    ModuleUnarchived = "ModuleUnarchived",
    ModuleRemoved = "ModuleRemoved",
    ModuleBudgetChanged = "ModuleBudgetChanged",
    FreezeTransfers = "FreezeTransfers",
    CheckpointCreated = "CheckpointCreated",
    FreezeMinting = "FreezeMinting",
    Minted = "Minted",
    Burnt = "Burnt",
    SetController = "SetController",
    ForceTransfer = "ForceTransfer",
    ForceBurn = "ForceBurn",
    DisableController = "DisableController",
    OwnershipRenounced = "OwnershipRenounced",
    OwnershipTransferred = "OwnershipTransferred",
    Approval = "Approval",
    Transfer = "Transfer"
}
export interface SecurityTokenModuleAddedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _name: string;
    _moduleFactory: string;
    _module: string;
    _moduleCost: BigNumber;
    _budget: BigNumber;
    _timestamp: BigNumber;
}
export interface SecurityTokenUpdateTokenDetailsEventArgs extends DecodedLogArgs {
    _oldDetails: string;
    _newDetails: string;
}
export interface SecurityTokenGranularityChangedEventArgs extends DecodedLogArgs {
    _oldGranularity: BigNumber;
    _newGranularity: BigNumber;
}
export interface SecurityTokenModuleArchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
    _timestamp: BigNumber;
}
export interface SecurityTokenModuleUnarchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
    _timestamp: BigNumber;
}
export interface SecurityTokenModuleRemovedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
    _timestamp: BigNumber;
}
export interface SecurityTokenModuleBudgetChangedEventArgs extends DecodedLogArgs {
    _moduleTypes: BigNumber[];
    _module: string;
    _oldBudget: BigNumber;
    _budget: BigNumber;
}
export interface SecurityTokenFreezeTransfersEventArgs extends DecodedLogArgs {
    _status: boolean;
    _timestamp: BigNumber;
}
export interface SecurityTokenCheckpointCreatedEventArgs extends DecodedLogArgs {
    _checkpointId: BigNumber;
    _timestamp: BigNumber;
}
export interface SecurityTokenFreezeMintingEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export interface SecurityTokenMintedEventArgs extends DecodedLogArgs {
    _to: string;
    _value: BigNumber;
}
export interface SecurityTokenBurntEventArgs extends DecodedLogArgs {
    _from: string;
    _value: BigNumber;
}
export interface SecurityTokenSetControllerEventArgs extends DecodedLogArgs {
    _oldController: string;
    _newController: string;
}
export interface SecurityTokenForceTransferEventArgs extends DecodedLogArgs {
    _controller: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _verifyTransfer: boolean;
    _data: string;
}
export interface SecurityTokenForceBurnEventArgs extends DecodedLogArgs {
    _controller: string;
    _from: string;
    _value: BigNumber;
    _verifyTransfer: boolean;
    _data: string;
}
export interface SecurityTokenDisableControllerEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export interface SecurityTokenOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}
export interface SecurityTokenOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface SecurityTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}
export interface SecurityTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export declare class SecurityTokenContract extends BaseContract {
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    approve: {
        sendTransactionAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _value: BigNumber): string;
        callAsync(_spender: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    decimals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    currentCheckpointId: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    granularity: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    decreaseApproval: {
        sendTransactionAsync(_spender: string, _subtractedValue: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_spender: string, _subtractedValue: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _subtractedValue: BigNumber): string;
        callAsync(_spender: string, _subtractedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    polymathRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    controllerDisabled: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    mintingFrozen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    moduleRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    featureRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    securityTokenRegistry: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    tokenDetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    increaseApproval: {
        sendTransactionAsync(_spender: string, _addedValue: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_spender: string, _addedValue: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _addedValue: BigNumber): string;
        callAsync(_spender: string, _addedValue: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    allowance: {
        callAsync(_owner: string, _spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    transfersFrozen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    controller: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    addModule: {
        sendTransactionAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber): string;
        callAsync(_moduleFactory: string, _data: string, _maxCost: BigNumber, _budget: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    archiveModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_module: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unarchiveModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_module: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeModule: {
        sendTransactionAsync(_module: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_module: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string): string;
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getModule: {
        callAsync(_module: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string, boolean, BigNumber[]]>;
    };
    getModulesByName: {
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getModulesByType: {
        callAsync(_type: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    withdrawERC20: {
        sendTransactionAsync(_tokenContract: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_tokenContract: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string, _value: BigNumber): string;
        callAsync(_tokenContract: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeModuleBudget: {
        sendTransactionAsync(_module: string, _change: BigNumber, _increase: boolean, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_module: string, _change: BigNumber, _increase: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_module: string, _change: BigNumber, _increase: boolean): string;
        callAsync(_module: string, _change: BigNumber, _increase: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateTokenDetails: {
        sendTransactionAsync(_newTokenDetails: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_newTokenDetails: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newTokenDetails: string): string;
        callAsync(_newTokenDetails: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeGranularity: {
        sendTransactionAsync(_granularity: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_granularity: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_granularity: BigNumber): string;
        callAsync(_granularity: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getInvestors: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getInvestorsAt: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    iterateInvestors: {
        callAsync(_start: BigNumber, _end: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getInvestorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    freezeTransfers: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unfreezeTransfers: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transfer: {
        sendTransactionAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber): string;
        callAsync(_to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferWithData: {
        sendTransactionAsync(_to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber, _data: string): string;
        callAsync(_to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber): string;
        callAsync(_from: string, _to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferFromWithData: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    verifyTransfer: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    freezeMinting: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    mint: {
        sendTransactionAsync(_investor: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_investor: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _value: BigNumber): string;
        callAsync(_investor: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    mintWithData: {
        sendTransactionAsync(_investor: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_investor: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _value: BigNumber, _data: string): string;
        callAsync(_investor: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    mintMulti: {
        sendTransactionAsync(_investors: string[], _values: BigNumber[], txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_investors: string[], _values: BigNumber[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _values: BigNumber[]): string;
        callAsync(_investors: string[], _values: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    checkPermission: {
        callAsync(_delegate: string, _module: string, _perm: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    burnWithData: {
        sendTransactionAsync(_value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_value: BigNumber, _data: string): string;
        callAsync(_value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    burnFromWithData: {
        sendTransactionAsync(_from: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _value: BigNumber, _data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _value: BigNumber, _data: string): string;
        callAsync(_from: string, _value: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createCheckpoint: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getCheckpointTimes: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    totalSupplyAt: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    balanceOfAt: {
        callAsync(_investor: string, _checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    setController: {
        sendTransactionAsync(_controller: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_controller: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_controller: string): string;
        callAsync(_controller: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    disableController: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    forceTransfer: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, _data: string, _log: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, _data: string, _log: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string, _log: string): string;
        callAsync(_from: string, _to: string, _value: BigNumber, _data: string, _log: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    forceBurn: {
        sendTransactionAsync(_from: string, _value: BigNumber, _data: string, _log: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _value: BigNumber, _data: string, _log: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _value: BigNumber, _data: string, _log: string): string;
        callAsync(_from: string, _value: BigNumber, _data: string, _log: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getVersion: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=security_token.d.ts.map