import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type ISecurityTokenRegistryEventArgs = ISecurityTokenRegistryPauseEventArgs | ISecurityTokenRegistryUnpauseEventArgs | ISecurityTokenRegistryTickerRemovedEventArgs | ISecurityTokenRegistryChangeExpiryLimitEventArgs | ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs | ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs | ISecurityTokenRegistryChangeFeeCurrencyEventArgs | ISecurityTokenRegistryOwnershipTransferredEventArgs | ISecurityTokenRegistryChangeTickerOwnershipEventArgs | ISecurityTokenRegistryNewSecurityTokenEventArgs | ISecurityTokenRegistryRegisterTickerEventArgs | ISecurityTokenRegistrySecurityTokenRefreshedEventArgs | ISecurityTokenRegistryProtocolFactorySetEventArgs | ISecurityTokenRegistryLatestVersionSetEventArgs | ISecurityTokenRegistryProtocolFactoryRemovedEventArgs;
export declare enum ISecurityTokenRegistryEvents {
    Pause = "Pause",
    Unpause = "Unpause",
    TickerRemoved = "TickerRemoved",
    ChangeExpiryLimit = "ChangeExpiryLimit",
    ChangeSecurityLaunchFee = "ChangeSecurityLaunchFee",
    ChangeTickerRegistrationFee = "ChangeTickerRegistrationFee",
    ChangeFeeCurrency = "ChangeFeeCurrency",
    OwnershipTransferred = "OwnershipTransferred",
    ChangeTickerOwnership = "ChangeTickerOwnership",
    NewSecurityToken = "NewSecurityToken",
    RegisterTicker = "RegisterTicker",
    SecurityTokenRefreshed = "SecurityTokenRefreshed",
    ProtocolFactorySet = "ProtocolFactorySet",
    LatestVersionSet = "LatestVersionSet",
    ProtocolFactoryRemoved = "ProtocolFactoryRemoved"
}
export interface ISecurityTokenRegistryPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface ISecurityTokenRegistryUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface ISecurityTokenRegistryTickerRemovedEventArgs extends DecodedLogArgs {
    _ticker: string;
    _removedBy: string;
}
export interface ISecurityTokenRegistryChangeExpiryLimitEventArgs extends DecodedLogArgs {
    _oldExpiry: BigNumber;
    _newExpiry: BigNumber;
}
export interface ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs extends DecodedLogArgs {
    _oldFee: BigNumber;
    _newFee: BigNumber;
}
export interface ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs extends DecodedLogArgs {
    _oldFee: BigNumber;
    _newFee: BigNumber;
}
export interface ISecurityTokenRegistryChangeFeeCurrencyEventArgs extends DecodedLogArgs {
    _isFeeInPoly: boolean;
}
export interface ISecurityTokenRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface ISecurityTokenRegistryChangeTickerOwnershipEventArgs extends DecodedLogArgs {
    _ticker: string;
    _oldOwner: string;
    _newOwner: string;
}
export interface ISecurityTokenRegistryNewSecurityTokenEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _fromAdmin: boolean;
    _usdFee: BigNumber;
    _polyFee: BigNumber;
    _protocolVersion: BigNumber;
}
export interface ISecurityTokenRegistryNewSecurityTokenEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _fromAdmin: boolean;
    _registrationFee: BigNumber;
}
export interface ISecurityTokenRegistryRegisterTickerEventArgs extends DecodedLogArgs {
    _owner: string;
    _ticker: string;
    _registrationDate: BigNumber;
    _expiryDate: BigNumber;
    _fromAdmin: boolean;
    _registrationFeePoly: BigNumber;
    _registrationFeeUsd: BigNumber;
}
export interface ISecurityTokenRegistryRegisterTickerEventArgs extends DecodedLogArgs {
    _owner: string;
    _ticker: string;
    _name: string;
    _registrationDate: BigNumber;
    _expiryDate: BigNumber;
    _fromAdmin: boolean;
    _registrationFee: BigNumber;
}
export interface ISecurityTokenRegistrySecurityTokenRefreshedEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _protocolVersion: BigNumber;
}
export interface ISecurityTokenRegistryProtocolFactorySetEventArgs extends DecodedLogArgs {
    _STFactory: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export interface ISecurityTokenRegistryLatestVersionSetEventArgs extends DecodedLogArgs {
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export interface ISecurityTokenRegistryProtocolFactoryRemovedEventArgs extends DecodedLogArgs {
    _STFactory: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export declare class ISecurityTokenRegistryContract extends BaseContract {
    private _defaultEstimateGasFactor;
    generateSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean): string;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    generateNewSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber): string;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    refreshSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string): string;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    modifySecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber): string;
        callAsync(_name: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyExistingSecurityToken: {
        sendTransactionAsync(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber): string;
        callAsync(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyExistingTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean): string;
        callAsync(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    registerTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _tokenName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, _tokenName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string): string;
        callAsync(_owner: string, _ticker: string, _tokenName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    registerNewTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_owner: string, _ticker: string): string;
        callAsync(_owner: string, _ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isSecurityToken: {
        callAsync(_securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getSecurityTokenAddress: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getSecurityTokenData: {
        callAsync(_securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, string, BigNumber]>;
    };
    getSTFactoryAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getSTFactoryAddressOfVersion: {
        callAsync(_protocolVersion: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getLatestProtocolVersion: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getTickersByOwner: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTokensByOwner: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTickerDetails: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, BigNumber, BigNumber, string, boolean]>;
    };
    modifyTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean): string;
        callAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeTicker: {
        sendTransactionAsync(_ticker: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ticker: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ticker: string): string;
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferTickerOwnership: {
        sendTransactionAsync(_newOwner: string, _ticker: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, _ticker: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string, _ticker: string): string;
        callAsync(_newOwner: string, _ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeExpiryLimit: {
        sendTransactionAsync(_newExpiry: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newExpiry: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newExpiry: BigNumber): string;
        callAsync(_newExpiry: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeTickerRegistrationFee: {
        sendTransactionAsync(_tickerRegFee: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tickerRegFee: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tickerRegFee: BigNumber): string;
        callAsync(_tickerRegFee: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeSecurityLaunchFee: {
        sendTransactionAsync(_stLaunchFee: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_stLaunchFee: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_stLaunchFee: BigNumber): string;
        callAsync(_stLaunchFee: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeFeesAmountAndCurrency: {
        sendTransactionAsync(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean): string;
        callAsync(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setProtocolFactory: {
        sendTransactionAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
        callAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeProtocolFactory: {
        sendTransactionAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
        callAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setLatestVersion: {
        sendTransactionAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
        callAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updatePolyTokenAddress: {
        sendTransactionAsync(_newAddress: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newAddress: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newAddress: string): string;
        callAsync(_newAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getSecurityTokenLaunchFee: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTickerRegistrationFee: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    setGetterRegistry: {
        sendTransactionAsync(_getterContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_getterContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_getterContract: string): string;
        callAsync(_getterContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getFees: {
        sendTransactionAsync(_feeType: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_feeType: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_feeType: string): string;
        callAsync(_feeType: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    getTokensByDelegate: {
        callAsync(_delegate: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getExpiryLimit: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTickerStatus: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getIsFeeInPoly: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getTickerOwner: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    isPaused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
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
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    tickerAvailable: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ISecurityTokenRegistryContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=i_security_token_registry.d.ts.map