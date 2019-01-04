import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TxDataPayable } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare type SecurityTokenRegistryEventArgs = SecurityTokenRegistryPauseEventArgs | SecurityTokenRegistryUnpauseEventArgs | SecurityTokenRegistryTickerRemovedEventArgs | SecurityTokenRegistryChangeExpiryLimitEventArgs | SecurityTokenRegistryChangeSecurityLaunchFeeEventArgs | SecurityTokenRegistryChangeTickerRegistrationFeeEventArgs | SecurityTokenRegistryOwnershipTransferredEventArgs | SecurityTokenRegistryChangeTickerOwnershipEventArgs | SecurityTokenRegistryNewSecurityTokenEventArgs | SecurityTokenRegistryRegisterTickerEventArgs;
export declare enum SecurityTokenRegistryEvents {
    Pause = "Pause",
    Unpause = "Unpause",
    TickerRemoved = "TickerRemoved",
    ChangeExpiryLimit = "ChangeExpiryLimit",
    ChangeSecurityLaunchFee = "ChangeSecurityLaunchFee",
    ChangeTickerRegistrationFee = "ChangeTickerRegistrationFee",
    OwnershipTransferred = "OwnershipTransferred",
    ChangeTickerOwnership = "ChangeTickerOwnership",
    NewSecurityToken = "NewSecurityToken",
    RegisterTicker = "RegisterTicker"
}
export interface SecurityTokenRegistryPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}
export interface SecurityTokenRegistryUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export interface SecurityTokenRegistryTickerRemovedEventArgs extends DecodedLogArgs {
    _ticker: string;
    _removedAt: BigNumber;
    _removedBy: string;
}
export interface SecurityTokenRegistryChangeExpiryLimitEventArgs extends DecodedLogArgs {
    _oldExpiry: BigNumber;
    _newExpiry: BigNumber;
}
export interface SecurityTokenRegistryChangeSecurityLaunchFeeEventArgs extends DecodedLogArgs {
    _oldFee: BigNumber;
    _newFee: BigNumber;
}
export interface SecurityTokenRegistryChangeTickerRegistrationFeeEventArgs extends DecodedLogArgs {
    _oldFee: BigNumber;
    _newFee: BigNumber;
}
export interface SecurityTokenRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface SecurityTokenRegistryChangeTickerOwnershipEventArgs extends DecodedLogArgs {
    _ticker: string;
    _oldOwner: string;
    _newOwner: string;
}
export interface SecurityTokenRegistryNewSecurityTokenEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _fromAdmin: boolean;
    _registrationFee: BigNumber;
}
export interface SecurityTokenRegistryRegisterTickerEventArgs extends DecodedLogArgs {
    _owner: string;
    _ticker: string;
    _name: string;
    _registrationDate: BigNumber;
    _expiryDate: BigNumber;
    _fromAdmin: boolean;
    _registrationFee: BigNumber;
}
export declare class SecurityTokenRegistryContract extends BaseContract {
    getBoolValues: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getUintValues: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getStringValues: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getBytes32Values: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getAddressValues: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getBytesValues: {
        callAsync(_variable: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    initialize: {
        sendTransactionAsync(_polymathRegistry: string, _STFactory: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _polyToken: string, _owner: string, txData?: Partial<TxDataPayable>): Promise<string>;
        estimateGasAsync(_polymathRegistry: string, _STFactory: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _polyToken: string, _owner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_polymathRegistry: string, _STFactory: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _polyToken: string, _owner: string): string;
        callAsync(_polymathRegistry: string, _STFactory: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _polyToken: string, _owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    registerTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _tokenName: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_owner: string, _ticker: string, _tokenName: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string): string;
        callAsync(_owner: string, _ticker: string, _tokenName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean): string;
        callAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeTicker: {
        sendTransactionAsync(_ticker: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_ticker: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ticker: string): string;
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferTickerOwnership: {
        sendTransactionAsync(_newOwner: string, _ticker: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_newOwner: string, _ticker: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string, _ticker: string): string;
        callAsync(_newOwner: string, _ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeExpiryLimit: {
        sendTransactionAsync(_newExpiry: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_newExpiry: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newExpiry: BigNumber): string;
        callAsync(_newExpiry: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getTickersByOwner: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTokensByOwner: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTickerDetails: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, BigNumber, BigNumber, string, boolean]>;
    };
    generateSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean): string;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifySecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber): string;
        callAsync(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isSecurityToken: {
        callAsync(_securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getSecurityTokenAddress: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getSecurityTokenData: {
        callAsync(_securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string, BigNumber]>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeTickerRegistrationFee: {
        sendTransactionAsync(_tickerRegFee: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_tickerRegFee: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tickerRegFee: BigNumber): string;
        callAsync(_tickerRegFee: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeSecurityLaunchFee: {
        sendTransactionAsync(_stLaunchFee: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_stLaunchFee: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_stLaunchFee: BigNumber): string;
        callAsync(_stLaunchFee: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_tokenContract: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setProtocolVersion: {
        sendTransactionAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
        callAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getSTFactoryAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getProtocolVersion: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    updatePolyTokenAddress: {
        sendTransactionAsync(_newAddress: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_newAddress: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newAddress: string): string;
        callAsync(_newAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getSecurityTokenLaunchFee: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTickerRegistrationFee: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getExpiryLimit: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    isPaused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=security_token_registry.d.ts.map