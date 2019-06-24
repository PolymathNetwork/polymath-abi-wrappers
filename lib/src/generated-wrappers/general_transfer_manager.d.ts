import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type GeneralTransferManagerEventArgs = GeneralTransferManagerChangeIssuanceAddressEventArgs | GeneralTransferManagerChangeDefaultsEventArgs | GeneralTransferManagerModifyKYCDataEventArgs | GeneralTransferManagerModifyInvestorFlagEventArgs | GeneralTransferManagerModifyTransferRequirementsEventArgs | GeneralTransferManagerPauseEventArgs | GeneralTransferManagerUnpauseEventArgs;
export declare enum GeneralTransferManagerEvents {
    ChangeIssuanceAddress = "ChangeIssuanceAddress",
    ChangeDefaults = "ChangeDefaults",
    ModifyKYCData = "ModifyKYCData",
    ModifyInvestorFlag = "ModifyInvestorFlag",
    ModifyTransferRequirements = "ModifyTransferRequirements",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface GeneralTransferManagerChangeIssuanceAddressEventArgs extends DecodedLogArgs {
    _issuanceAddress: string;
}
export interface GeneralTransferManagerChangeDefaultsEventArgs extends DecodedLogArgs {
    _defaultCanSendAfter: BigNumber;
    _defaultCanReceiveAfter: BigNumber;
}
export interface GeneralTransferManagerModifyKYCDataEventArgs extends DecodedLogArgs {
    _investor: string;
    _addedBy: string;
    _canSendAfter: BigNumber;
    _canReceiveAfter: BigNumber;
    _expiryTime: BigNumber;
}
export interface GeneralTransferManagerModifyInvestorFlagEventArgs extends DecodedLogArgs {
    _investor: string;
    _flag: BigNumber;
    _value: boolean;
}
export interface GeneralTransferManagerModifyTransferRequirementsEventArgs extends DecodedLogArgs {
    _transferType: BigNumber;
    _fromValidKYC: boolean;
    _toValidKYC: boolean;
    _fromRestricted: boolean;
    _toRestricted: boolean;
}
export interface GeneralTransferManagerPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface GeneralTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class GeneralTransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    WHITELIST: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    INVESTORFLAGS: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    UNLOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pause: {
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
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    nonceMap: {
        callAsync(index_0: string, index_1: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    LOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    issuanceAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    INVESTORSKEY: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transferRequirements: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, boolean, boolean, boolean]>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    defaults: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeDefaults: {
        sendTransactionAsync(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber): string;
        callAsync(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeIssuanceAddress: {
        sendTransactionAsync(_issuanceAddress: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_issuanceAddress: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_issuanceAddress: string): string;
        callAsync(_issuanceAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    executeTransfer: {
        sendTransactionAsync(_from: string, _to: string, index_2: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, index_2: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, index_2: BigNumber, _data: string): string;
        callAsync(_from: string, _to: string, index_2: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, index_2: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
    };
    modifyTransferRequirements: {
        sendTransactionAsync(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean): string;
        callAsync(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyTransferRequirementsMulti: {
        sendTransactionAsync(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[]): string;
        callAsync(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyKYCData: {
        sendTransactionAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber): string;
        callAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyKYCDataMulti: {
        sendTransactionAsync(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[]): string;
        callAsync(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyInvestorFlag: {
        sendTransactionAsync(_investor: string, _flag: number | BigNumber, _value: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _flag: number | BigNumber, _value: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _flag: number | BigNumber, _value: boolean): string;
        callAsync(_investor: string, _flag: number | BigNumber, _value: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyInvestorFlagMulti: {
        sendTransactionAsync(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[]): string;
        callAsync(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyKYCDataSigned: {
        sendTransactionAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string): string;
        callAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyKYCDataSignedMulti: {
        sendTransactionAsync(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string): string;
        callAsync(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getAllInvestors: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getInvestors: {
        callAsync(_fromIndex: BigNumber, _toIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getAllInvestorFlags: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[]]>;
    };
    getInvestorFlag: {
        callAsync(_investor: string, _flag: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getInvestorFlags: {
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getAllKYCData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[]]>;
    };
    getKYCData: {
        callAsync(_investors: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber[]]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getAddressBytes32: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<GeneralTransferManagerContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=general_transfer_manager.d.ts.map