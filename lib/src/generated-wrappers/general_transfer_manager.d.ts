import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
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
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    WHITELIST: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    INVESTORFLAGS: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    UNLOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    nonceMap: {
        callAsync(index_0: string, index_1: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string, index_1: BigNumber): string;
    };
    LOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    issuanceAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    INVESTORSKEY: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    transferRequirements: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, boolean, boolean, boolean]>;
        getABIEncodedTransactionData(index_0: number | BigNumber): string;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    defaults: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
        getABIEncodedTransactionData(): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    changeDefaults: {
        sendTransactionAsync(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber): string;
    };
    changeIssuanceAddress: {
        sendTransactionAsync(_issuanceAddress: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_issuanceAddress: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_issuanceAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_issuanceAddress: string): string;
    };
    executeTransfer: {
        sendTransactionAsync(_from: string, _to: string, index_2: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, index_2: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, index_2: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, _to: string, index_2: BigNumber, _data: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, index_2: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, _to: string, index_2: BigNumber, index_3: string): string;
    };
    modifyTransferRequirements: {
        sendTransactionAsync(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_transferType: number | BigNumber, _fromValidKYC: boolean, _toValidKYC: boolean, _fromRestricted: boolean, _toRestricted: boolean): string;
    };
    modifyTransferRequirementsMulti: {
        sendTransactionAsync(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_transferTypes: (number | BigNumber)[], _fromValidKYC: boolean[], _toValidKYC: boolean[], _fromRestricted: boolean[], _toRestricted: boolean[]): string;
    };
    modifyKYCData: {
        sendTransactionAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber): string;
    };
    modifyKYCDataMulti: {
        sendTransactionAsync(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[]): string;
    };
    modifyInvestorFlag: {
        sendTransactionAsync(_investor: string, _flag: number | BigNumber, _value: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _flag: number | BigNumber, _value: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, _flag: number | BigNumber, _value: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string, _flag: number | BigNumber, _value: boolean): string;
    };
    modifyInvestorFlagMulti: {
        sendTransactionAsync(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _flag: (number | BigNumber)[], _value: boolean[]): string;
    };
    modifyKYCDataSigned: {
        sendTransactionAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string, _canSendAfter: BigNumber, _canReceiveAfter: BigNumber, _expiryTime: BigNumber, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string): string;
    };
    modifyKYCDataSignedMulti: {
        sendTransactionAsync(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string[], _canSendAfter: BigNumber[], _canReceiveAfter: BigNumber[], _expiryTime: BigNumber[], _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _signature: string): string;
    };
    getAllInvestors: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getInvestors: {
        callAsync(_fromIndex: BigNumber, _toIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_fromIndex: BigNumber, _toIndex: BigNumber): string;
    };
    getAllInvestorFlags: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[]]>;
        getABIEncodedTransactionData(): string;
    };
    getInvestorFlag: {
        callAsync(_investor: string, _flag: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_investor: string, _flag: number | BigNumber): string;
    };
    getInvestorFlags: {
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_investor: string): string;
    };
    getAllKYCData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(): string;
    };
    getKYCData: {
        callAsync(_investors: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(_investors: string[]): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber): string;
    };
    getAddressBytes32: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<GeneralTransferManagerContract>;
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
//# sourceMappingURL=general_transfer_manager.d.ts.map