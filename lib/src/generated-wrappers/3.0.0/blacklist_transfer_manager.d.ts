import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../../PolyResponse';
export declare type BlacklistTransferManagerEventArgs_3_0_0 = BlacklistTransferManagerAddBlacklistTypeEventArgs_3_0_0 | BlacklistTransferManagerModifyBlacklistTypeEventArgs_3_0_0 | BlacklistTransferManagerDeleteBlacklistTypeEventArgs_3_0_0 | BlacklistTransferManagerAddInvestorToBlacklistEventArgs_3_0_0 | BlacklistTransferManagerDeleteInvestorFromBlacklistEventArgs_3_0_0 | BlacklistTransferManagerPauseEventArgs_3_0_0 | BlacklistTransferManagerUnpauseEventArgs_3_0_0;
export declare enum BlacklistTransferManagerEvents_3_0_0 {
    AddBlacklistType = "AddBlacklistType",
    ModifyBlacklistType = "ModifyBlacklistType",
    DeleteBlacklistType = "DeleteBlacklistType",
    AddInvestorToBlacklist = "AddInvestorToBlacklist",
    DeleteInvestorFromBlacklist = "DeleteInvestorFromBlacklist",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface BlacklistTransferManagerAddBlacklistTypeEventArgs_3_0_0 extends DecodedLogArgs {
    _startTime: BigNumber;
    _endTime: BigNumber;
    _blacklistName: string;
    _repeatPeriodTime: BigNumber;
}
export interface BlacklistTransferManagerModifyBlacklistTypeEventArgs_3_0_0 extends DecodedLogArgs {
    _startTime: BigNumber;
    _endTime: BigNumber;
    _blacklistName: string;
    _repeatPeriodTime: BigNumber;
}
export interface BlacklistTransferManagerDeleteBlacklistTypeEventArgs_3_0_0 extends DecodedLogArgs {
    _blacklistName: string;
}
export interface BlacklistTransferManagerAddInvestorToBlacklistEventArgs_3_0_0 extends DecodedLogArgs {
    _investor: string;
    _blacklistName: string;
}
export interface BlacklistTransferManagerDeleteInvestorFromBlacklistEventArgs_3_0_0 extends DecodedLogArgs {
    _investor: string;
    _blacklistName: string;
}
export interface BlacklistTransferManagerPauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export interface BlacklistTransferManagerUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export declare class BlacklistTransferManagerContract_3_0_0 extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    blacklists: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(index_0: string): string;
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
    LOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    executeTransfer: {
        sendTransactionAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, index_1: string, index_2: BigNumber, index_3: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, index_1: string, index_2: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, index_1: string, index_2: BigNumber, index_3: string): string;
    };
    addBlacklistType: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber): string;
    };
    addBlacklistTypeMulti: {
        sendTransactionAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[]): string;
    };
    modifyBlacklistType: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber): string;
    };
    modifyBlacklistTypeMulti: {
        sendTransactionAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTimes: BigNumber[], _endTimes: BigNumber[], _blacklistNames: string[], _repeatPeriodTimes: BigNumber[]): string;
    };
    deleteBlacklistType: {
        sendTransactionAsync(_blacklistName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_blacklistName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_blacklistName: string): string;
    };
    deleteBlacklistTypeMulti: {
        sendTransactionAsync(_blacklistNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_blacklistNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_blacklistNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_blacklistNames: string[]): string;
    };
    addInvestorToBlacklist: {
        sendTransactionAsync(_investor: string, _blacklistName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _blacklistName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, _blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string, _blacklistName: string): string;
    };
    addInvestorToBlacklistMulti: {
        sendTransactionAsync(_investors: string[], _blacklistName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _blacklistName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _blacklistName: string): string;
    };
    addMultiInvestorToBlacklistMulti: {
        sendTransactionAsync(_investors: string[], _blacklistNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _blacklistNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _blacklistNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _blacklistNames: string[]): string;
    };
    addInvestorToNewBlacklist: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _blacklistName: string, _repeatPeriodTime: BigNumber, _investor: string): string;
    };
    deleteInvestorFromBlacklist: {
        sendTransactionAsync(_investor: string, _blacklistName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _blacklistName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, _blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string, _blacklistName: string): string;
    };
    deleteInvestorFromAllBlacklist: {
        sendTransactionAsync(_investor: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string): string;
    };
    deleteInvestorFromAllBlacklistMulti: {
        sendTransactionAsync(_investor: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string[]): string;
    };
    deleteMultiInvestorsFromBlacklistMulti: {
        sendTransactionAsync(_investors: string[], _blacklistNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _blacklistNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _blacklistNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _blacklistNames: string[]): string;
    };
    getListOfAddresses: {
        callAsync(_blacklistName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_blacklistName: string): string;
    };
    getBlacklistNamesToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_user: string): string;
    };
    getAllBlacklists: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<BlacklistTransferManagerContract_3_0_0>;
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
//# sourceMappingURL=blacklist_transfer_manager.d.ts.map