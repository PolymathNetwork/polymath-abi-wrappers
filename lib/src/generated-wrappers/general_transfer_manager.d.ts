import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type GeneralTransferManagerEventArgs = GeneralTransferManagerChangeIssuanceAddressEventArgs | GeneralTransferManagerAllowAllTransfersEventArgs | GeneralTransferManagerAllowAllWhitelistTransfersEventArgs | GeneralTransferManagerAllowAllWhitelistIssuancesEventArgs | GeneralTransferManagerAllowAllBurnTransfersEventArgs | GeneralTransferManagerChangeSigningAddressEventArgs | GeneralTransferManagerChangeDefaultsEventArgs | GeneralTransferManagerModifyWhitelistEventArgs | GeneralTransferManagerPauseEventArgs | GeneralTransferManagerUnpauseEventArgs;
export declare enum GeneralTransferManagerEvents {
    ChangeIssuanceAddress = "ChangeIssuanceAddress",
    AllowAllTransfers = "AllowAllTransfers",
    AllowAllWhitelistTransfers = "AllowAllWhitelistTransfers",
    AllowAllWhitelistIssuances = "AllowAllWhitelistIssuances",
    AllowAllBurnTransfers = "AllowAllBurnTransfers",
    ChangeSigningAddress = "ChangeSigningAddress",
    ChangeDefaults = "ChangeDefaults",
    ModifyWhitelist = "ModifyWhitelist",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface GeneralTransferManagerChangeIssuanceAddressEventArgs extends DecodedLogArgs {
    _issuanceAddress: string;
}
export interface GeneralTransferManagerAllowAllTransfersEventArgs extends DecodedLogArgs {
    _allowAllTransfers: boolean;
}
export interface GeneralTransferManagerAllowAllWhitelistTransfersEventArgs extends DecodedLogArgs {
    _allowAllWhitelistTransfers: boolean;
}
export interface GeneralTransferManagerAllowAllWhitelistIssuancesEventArgs extends DecodedLogArgs {
    _allowAllWhitelistIssuances: boolean;
}
export interface GeneralTransferManagerAllowAllBurnTransfersEventArgs extends DecodedLogArgs {
    _allowAllBurnTransfers: boolean;
}
export interface GeneralTransferManagerChangeSigningAddressEventArgs extends DecodedLogArgs {
    _signingAddress: string;
}
export interface GeneralTransferManagerChangeDefaultsEventArgs extends DecodedLogArgs {
    _defaultFromTime: BigNumber;
    _defaultToTime: BigNumber;
}
export interface GeneralTransferManagerModifyWhitelistEventArgs extends DecodedLogArgs {
    _investor: string;
    _dateAdded: BigNumber;
    _addedBy: string;
    _fromTime: BigNumber;
    _toTime: BigNumber;
    _expiryTime: BigNumber;
    _canBuyFromSTO: boolean;
}
export interface GeneralTransferManagerPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}
export interface GeneralTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export declare class GeneralTransferManagerContract extends BaseContract {
    allowAllBurnTransfers: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    WHITELIST: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    allowAllWhitelistTransfers: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    investors: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    FLAGS: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    whitelist: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    nonceMap: {
        callAsync(index_0: string, index_1: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    allowAllTransfers: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    signingAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    issuanceAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    FEE_ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    allowAllWhitelistIssuances: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    defaults: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeDefaults: {
        sendTransactionAsync(_defaultFromTime: BigNumber, _defaultToTime: BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_defaultFromTime: BigNumber, _defaultToTime: BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_defaultFromTime: BigNumber, _defaultToTime: BigNumber): string;
        callAsync(_defaultFromTime: BigNumber, _defaultToTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeIssuanceAddress: {
        sendTransactionAsync(_issuanceAddress: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_issuanceAddress: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_issuanceAddress: string): string;
        callAsync(_issuanceAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeSigningAddress: {
        sendTransactionAsync(_signingAddress: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_signingAddress: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_signingAddress: string): string;
        callAsync(_signingAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeAllowAllTransfers: {
        sendTransactionAsync(_allowAllTransfers: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_allowAllTransfers: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowAllTransfers: boolean): string;
        callAsync(_allowAllTransfers: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeAllowAllWhitelistTransfers: {
        sendTransactionAsync(_allowAllWhitelistTransfers: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_allowAllWhitelistTransfers: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowAllWhitelistTransfers: boolean): string;
        callAsync(_allowAllWhitelistTransfers: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeAllowAllWhitelistIssuances: {
        sendTransactionAsync(_allowAllWhitelistIssuances: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_allowAllWhitelistIssuances: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowAllWhitelistIssuances: boolean): string;
        callAsync(_allowAllWhitelistIssuances: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeAllowAllBurnTransfers: {
        sendTransactionAsync(_allowAllBurnTransfers: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_allowAllBurnTransfers: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowAllBurnTransfers: boolean): string;
        callAsync(_allowAllBurnTransfers: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    verifyTransfer: {
        sendTransactionAsync(_from: string, _to: string, index_2: BigNumber, index_3: string, index_4: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, index_2: BigNumber, index_3: string, index_4: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, index_2: BigNumber, index_3: string, index_4: boolean): string;
        callAsync(_from: string, _to: string, index_2: BigNumber, index_3: string, index_4: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    modifyWhitelist: {
        sendTransactionAsync(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean): string;
        callAsync(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyWhitelistMulti: {
        sendTransactionAsync(_investors: string[], _fromTimes: BigNumber[], _toTimes: BigNumber[], _expiryTimes: BigNumber[], _canBuyFromSTO: boolean[], txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _fromTimes: BigNumber[], _toTimes: BigNumber[], _expiryTimes: BigNumber[], _canBuyFromSTO: boolean[], factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _fromTimes: BigNumber[], _toTimes: BigNumber[], _expiryTimes: BigNumber[], _canBuyFromSTO: boolean[]): string;
        callAsync(_investors: string[], _fromTimes: BigNumber[], _toTimes: BigNumber[], _expiryTimes: BigNumber[], _canBuyFromSTO: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyWhitelistSigned: {
        sendTransactionAsync(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _v: number | BigNumber, _r: string, _s: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _v: number | BigNumber, _r: string, _s: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _v: number | BigNumber, _r: string, _s: string): string;
        callAsync(_investor: string, _fromTime: BigNumber, _toTime: BigNumber, _expiryTime: BigNumber, _canBuyFromSTO: boolean, _validFrom: BigNumber, _validTo: BigNumber, _nonce: BigNumber, _v: number | BigNumber, _r: string, _s: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getInvestors: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getAllInvestorsData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], boolean[]]>;
    };
    getInvestorsData: {
        callAsync(_investors: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber[], boolean[]]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=general_transfer_manager.d.ts.map