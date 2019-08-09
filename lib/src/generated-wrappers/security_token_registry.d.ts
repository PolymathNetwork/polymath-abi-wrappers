import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type SecurityTokenRegistryEventArgs = SecurityTokenRegistryPauseEventArgs | SecurityTokenRegistryUnpauseEventArgs | SecurityTokenRegistryTickerRemovedEventArgs | SecurityTokenRegistryChangeExpiryLimitEventArgs | SecurityTokenRegistryChangeSecurityLaunchFeeEventArgs | SecurityTokenRegistryChangeTickerRegistrationFeeEventArgs | SecurityTokenRegistryChangeFeeCurrencyEventArgs | SecurityTokenRegistryOwnershipTransferredEventArgs | SecurityTokenRegistryChangeTickerOwnershipEventArgs | SecurityTokenRegistryNewSecurityTokenEventArgs | SecurityTokenRegistryNewSecurityTokenEventArgs | SecurityTokenRegistryRegisterTickerEventArgs | SecurityTokenRegistryRegisterTickerEventArgs | SecurityTokenRegistrySecurityTokenRefreshedEventArgs | SecurityTokenRegistryProtocolFactorySetEventArgs | SecurityTokenRegistryLatestVersionSetEventArgs | SecurityTokenRegistryProtocolFactoryRemovedEventArgs;
export declare enum SecurityTokenRegistryEvents {
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
export interface SecurityTokenRegistryPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface SecurityTokenRegistryUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface SecurityTokenRegistryTickerRemovedEventArgs extends DecodedLogArgs {
    _ticker: string;
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
export interface SecurityTokenRegistryChangeFeeCurrencyEventArgs extends DecodedLogArgs {
    _isFeeInPoly: boolean;
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
    _usdFee: BigNumber;
    _polyFee: BigNumber;
    _protocolVersion: BigNumber;
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
    _registrationDate: BigNumber;
    _expiryDate: BigNumber;
    _fromAdmin: boolean;
    _registrationFeePoly: BigNumber;
    _registrationFeeUsd: BigNumber;
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
export interface SecurityTokenRegistrySecurityTokenRefreshedEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _protocolVersion: BigNumber;
}
export interface SecurityTokenRegistryProtocolFactorySetEventArgs extends DecodedLogArgs {
    _STFactory: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export interface SecurityTokenRegistryLatestVersionSetEventArgs extends DecodedLogArgs {
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export interface SecurityTokenRegistryProtocolFactoryRemovedEventArgs extends DecodedLogArgs {
    _STFactory: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export declare class SecurityTokenRegistryContract extends BaseContract {
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
        sendTransactionAsync(_polymathRegistry: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _owner: string, _getterContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_polymathRegistry: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _owner: string, _getterContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_polymathRegistry: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _owner: string, _getterContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_polymathRegistry: string, _stLaunchFee: BigNumber, _tickerRegFee: BigNumber, _owner: string, _getterContract: string): string;
    };
    updateFromRegistry: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    getFees: {
        sendTransactionAsync(_feeType: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_feeType: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_feeType: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_feeType: string): string;
    };
    getSecurityTokenLaunchFee: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getTickerRegistrationFee: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    setGetterRegistry: {
        sendTransactionAsync(_getterContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_getterContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_getterContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_getterContract: string): string;
    };
    registerNewTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_owner: string, _ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_owner: string, _ticker: string): string;
    };
    registerTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _tokenName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, _tokenName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_owner: string, _ticker: string, _tokenName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string): string;
    };
    modifyExistingTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean): string;
    };
    modifyTicker: {
        sendTransactionAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string, _registrationDate: BigNumber, _expiryDate: BigNumber, _status: boolean): string;
    };
    removeTicker: {
        sendTransactionAsync(_ticker: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ticker: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ticker: string): string;
    };
    tickerAvailable: {
        callAsync(_ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_ticker: string): string;
    };
    transferTickerOwnership: {
        sendTransactionAsync(_newOwner: string, _ticker: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, _ticker: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newOwner: string, _ticker: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newOwner: string, _ticker: string): string;
    };
    changeExpiryLimit: {
        sendTransactionAsync(_newExpiry: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newExpiry: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newExpiry: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newExpiry: BigNumber): string;
    };
    generateSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean): string;
    };
    generateNewSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, _protocolVersion: BigNumber): string;
    };
    refreshSecurityToken: {
        sendTransactionAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean, _treasuryWallet: string): string;
    };
    modifyExistingSecurityToken: {
        sendTransactionAsync(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber): string;
    };
    modifySecurityToken: {
        sendTransactionAsync(index_0: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(index_0: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(index_0: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(index_0: string, _ticker: string, _owner: string, _securityToken: string, _tokenDetails: string, _deployedAt: BigNumber): string;
    };
    isSecurityToken: {
        callAsync(_securityToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_securityToken: string): string;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newOwner: string): string;
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
    changeTickerRegistrationFee: {
        sendTransactionAsync(_tickerRegFee: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tickerRegFee: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tickerRegFee: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tickerRegFee: BigNumber): string;
    };
    changeSecurityLaunchFee: {
        sendTransactionAsync(_stLaunchFee: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_stLaunchFee: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_stLaunchFee: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_stLaunchFee: BigNumber): string;
    };
    changeFeesAmountAndCurrency: {
        sendTransactionAsync(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    setProtocolFactory: {
        sendTransactionAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_STFactoryAddress: string, _major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
    };
    removeProtocolFactory: {
        sendTransactionAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
    };
    setLatestVersion: {
        sendTransactionAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_major: number | BigNumber, _minor: number | BigNumber, _patch: number | BigNumber): string;
    };
    updatePolyTokenAddress: {
        sendTransactionAsync(_newAddress: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newAddress: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newAddress: string): string;
    };
    isPaused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<SecurityTokenRegistryContract>;
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
//# sourceMappingURL=security_token_registry.d.ts.map