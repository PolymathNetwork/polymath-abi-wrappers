import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type VolumeRestrictionTMEventArgs = VolumeRestrictionTMChangedExemptWalletListEventArgs | VolumeRestrictionTMAddIndividualRestrictionEventArgs | VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs | VolumeRestrictionTMModifyIndividualRestrictionEventArgs | VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs | VolumeRestrictionTMAddDefaultRestrictionEventArgs | VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs | VolumeRestrictionTMModifyDefaultRestrictionEventArgs | VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs | VolumeRestrictionTMIndividualRestrictionRemovedEventArgs | VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs | VolumeRestrictionTMDefaultRestrictionRemovedEventArgs | VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs | VolumeRestrictionTMPauseEventArgs | VolumeRestrictionTMUnpauseEventArgs;
export declare enum VolumeRestrictionTMEvents {
    ChangedExemptWalletList = "ChangedExemptWalletList",
    AddIndividualRestriction = "AddIndividualRestriction",
    AddIndividualDailyRestriction = "AddIndividualDailyRestriction",
    ModifyIndividualRestriction = "ModifyIndividualRestriction",
    ModifyIndividualDailyRestriction = "ModifyIndividualDailyRestriction",
    AddDefaultRestriction = "AddDefaultRestriction",
    AddDefaultDailyRestriction = "AddDefaultDailyRestriction",
    ModifyDefaultRestriction = "ModifyDefaultRestriction",
    ModifyDefaultDailyRestriction = "ModifyDefaultDailyRestriction",
    IndividualRestrictionRemoved = "IndividualRestrictionRemoved",
    IndividualDailyRestrictionRemoved = "IndividualDailyRestrictionRemoved",
    DefaultRestrictionRemoved = "DefaultRestrictionRemoved",
    DefaultDailyRestrictionRemoved = "DefaultDailyRestrictionRemoved",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface VolumeRestrictionTMChangedExemptWalletListEventArgs extends DecodedLogArgs {
    _wallet: string;
    _exempted: boolean;
}
export interface VolumeRestrictionTMAddIndividualRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyIndividualRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMAddDefaultRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyDefaultRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMIndividualRestrictionRemovedEventArgs extends DecodedLogArgs {
    _holder: string;
}
export interface VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs extends DecodedLogArgs {
    _holder: string;
}
export interface VolumeRestrictionTMDefaultRestrictionRemovedEventArgs extends DecodedLogArgs {
}
export interface VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs extends DecodedLogArgs {
}
export interface VolumeRestrictionTMPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface VolumeRestrictionTMUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class VolumeRestrictionTMContract extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
    LOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    executeTransfer: {
        sendTransactionAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string;
        callAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    verifyTransfer: {
        callAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
    };
    changeExemptWalletList: {
        sendTransactionAsync(_wallet: string, _exempted: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, _exempted: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string, _exempted: boolean): string;
        callAsync(_wallet: string, _exempted: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addIndividualRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addIndividualDailyRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addIndividualDailyRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addIndividualRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addDefaultRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addDefaultDailyRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeIndividualRestriction: {
        sendTransactionAsync(_holder: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holder: string): string;
        callAsync(_holder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeIndividualRestrictionMulti: {
        sendTransactionAsync(_holders: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holders: string[]): string;
        callAsync(_holders: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeIndividualDailyRestriction: {
        sendTransactionAsync(_holder: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holder: string): string;
        callAsync(_holder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeIndividualDailyRestrictionMulti: {
        sendTransactionAsync(_holders: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holders: string[]): string;
        callAsync(_holders: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeDefaultRestriction: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeDefaultDailyRestriction: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyIndividualRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyIndividualDailyRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyIndividualDailyRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyIndividualRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyDefaultRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyDefaultDailyRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getIndividualBucketDetailsToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getDefaultBucketDetailsToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getTotalTradedByUser: {
        callAsync(_user: string, _at: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getExemptAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getIndividualRestriction: {
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getIndividualDailyRestriction: {
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getDefaultRestriction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getDefaultDailyRestriction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getRestrictionData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<VolumeRestrictionTMContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=volume_restriction_t_m.d.ts.map