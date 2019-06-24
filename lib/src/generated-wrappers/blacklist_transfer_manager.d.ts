import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type BlacklistTransferManagerEventArgs = BlacklistTransferManagerAddBlacklistTypeEventArgs | BlacklistTransferManagerModifyBlacklistTypeEventArgs | BlacklistTransferManagerDeleteBlacklistTypeEventArgs | BlacklistTransferManagerAddInvestorToBlacklistEventArgs | BlacklistTransferManagerDeleteInvestorFromBlacklistEventArgs | BlacklistTransferManagerPauseEventArgs | BlacklistTransferManagerUnpauseEventArgs;
export declare enum BlacklistTransferManagerEvents {
    AddBlacklistType = "AddBlacklistType",
    ModifyBlacklistType = "ModifyBlacklistType",
    DeleteBlacklistType = "DeleteBlacklistType",
    AddInvestorToBlacklist = "AddInvestorToBlacklist",
    DeleteInvestorFromBlacklist = "DeleteInvestorFromBlacklist",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface BlacklistTransferManagerAddBlacklistTypeEventArgs extends DecodedLogArgs {
    _startTime: BigNumber;
    _endTime: BigNumber;
    _blacklistName: string;
    _repeatPeriodTime: BigNumber;
}
export interface BlacklistTransferManagerModifyBlacklistTypeEventArgs extends DecodedLogArgs {
    _startTime: BigNumber;
    _endTime: BigNumber;
    _blacklistName: string;
    _repeatPeriodTime: BigNumber;
}
export interface BlacklistTransferManagerDeleteBlacklistTypeEventArgs extends DecodedLogArgs {
    _blacklistName: string;
}
export interface BlacklistTransferManagerAddInvestorToBlacklistEventArgs extends DecodedLogArgs {
    _investor: string;
    _blacklistName: string;
}
export interface BlacklistTransferManagerDeleteInvestorFromBlacklistEventArgs extends DecodedLogArgs {
    _investor: string;
    _blacklistName: string;
}
export interface BlacklistTransferManagerPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface BlacklistTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class BlacklistTransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    blacklists: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
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
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    executeTransfer: {
        sendTransactionAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, index_1: string, index_2: BigNumber, index_3: string): string;
        callAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    verifyTransfer: {
        callAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
    };
    addBlacklistType: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addBlacklistTypeMulti: {
        sendTransactionAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[]): string;
        callAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyBlacklistType: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyBlacklistTypeMulti: {
        sendTransactionAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[]): string;
        callAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteBlacklistType: {
        sendTransactionAsync(_blacklistName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_blacklistName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_blacklistName: string): string;
        callAsync(_blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteBlacklistTypeMulti: {
        sendTransactionAsync(_blacklistNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_blacklistNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_blacklistNames: string[]): string;
        callAsync(_blacklistNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addInvestorToBlacklist: {
        sendTransactionAsync(_investor: string, _blacklistName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _blacklistName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _blacklistName: string): string;
        callAsync(_investor: string, _blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addInvestorToBlacklistMulti: {
        sendTransactionAsync(_investors: string[], _blacklistName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _blacklistName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _blacklistName: string): string;
        callAsync(_investors: string[], _blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addMultiInvestorToBlacklistMulti: {
        sendTransactionAsync(_investors: string[], _blacklistNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _blacklistNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _blacklistNames: string[]): string;
        callAsync(_investors: string[], _blacklistNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addInvestorToNewBlacklist: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteInvestorFromBlacklist: {
        sendTransactionAsync(_investor: string, _blacklistName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _blacklistName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string, _blacklistName: string): string;
        callAsync(_investor: string, _blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteInvestorFromAllBlacklist: {
        sendTransactionAsync(_investor: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string): string;
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteInvestorFromAllBlacklistMulti: {
        sendTransactionAsync(_investor: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investor: string[]): string;
        callAsync(_investor: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteMultiInvestorsFromBlacklistMulti: {
        sendTransactionAsync(_investors: string[], _blacklistNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _blacklistNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _blacklistNames: string[]): string;
        callAsync(_investors: string[], _blacklistNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getListOfAddresses: {
        callAsync(_blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getBlacklistNamesToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getAllBlacklists: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<BlacklistTransferManagerContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=blacklist_transfer_manager.d.ts.map