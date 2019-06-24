import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type VestingEscrowWalletEventArgs = VestingEscrowWalletAddScheduleEventArgs | VestingEscrowWalletModifyScheduleEventArgs | VestingEscrowWalletRevokeAllSchedulesEventArgs | VestingEscrowWalletRevokeScheduleEventArgs | VestingEscrowWalletDepositTokensEventArgs | VestingEscrowWalletSendToTreasuryEventArgs | VestingEscrowWalletSendTokensEventArgs | VestingEscrowWalletAddTemplateEventArgs | VestingEscrowWalletRemoveTemplateEventArgs | VestingEscrowWalletTreasuryWalletChangedEventArgs | VestingEscrowWalletPauseEventArgs | VestingEscrowWalletUnpauseEventArgs;
export declare enum VestingEscrowWalletEvents {
    AddSchedule = "AddSchedule",
    ModifySchedule = "ModifySchedule",
    RevokeAllSchedules = "RevokeAllSchedules",
    RevokeSchedule = "RevokeSchedule",
    DepositTokens = "DepositTokens",
    SendToTreasury = "SendToTreasury",
    SendTokens = "SendTokens",
    AddTemplate = "AddTemplate",
    RemoveTemplate = "RemoveTemplate",
    TreasuryWalletChanged = "TreasuryWalletChanged",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface VestingEscrowWalletAddScheduleEventArgs extends DecodedLogArgs {
    _beneficiary: string;
    _templateName: string;
    _startTime: BigNumber;
}
export interface VestingEscrowWalletModifyScheduleEventArgs extends DecodedLogArgs {
    _beneficiary: string;
    _templateName: string;
    _startTime: BigNumber;
}
export interface VestingEscrowWalletRevokeAllSchedulesEventArgs extends DecodedLogArgs {
    _beneficiary: string;
}
export interface VestingEscrowWalletRevokeScheduleEventArgs extends DecodedLogArgs {
    _beneficiary: string;
    _templateName: string;
}
export interface VestingEscrowWalletDepositTokensEventArgs extends DecodedLogArgs {
    _numberOfTokens: BigNumber;
    _sender: string;
}
export interface VestingEscrowWalletSendToTreasuryEventArgs extends DecodedLogArgs {
    _numberOfTokens: BigNumber;
    _sender: string;
}
export interface VestingEscrowWalletSendTokensEventArgs extends DecodedLogArgs {
    _beneficiary: string;
    _numberOfTokens: BigNumber;
}
export interface VestingEscrowWalletAddTemplateEventArgs extends DecodedLogArgs {
    _name: string;
    _numberOfTokens: BigNumber;
    _duration: BigNumber;
    _frequency: BigNumber;
}
export interface VestingEscrowWalletRemoveTemplateEventArgs extends DecodedLogArgs {
    _name: string;
}
export interface VestingEscrowWalletTreasuryWalletChangedEventArgs extends DecodedLogArgs {
    _newWallet: string;
    _oldWallet: string;
}
export interface VestingEscrowWalletPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface VestingEscrowWalletUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class VestingEscrowWalletContract extends BaseContract {
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
    treasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    unassignedTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
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
    schedules: {
        callAsync(index_0: string, index_1: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, BigNumber, BigNumber]>;
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
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    templateNames: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    beneficiaries: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    configure: {
        sendTransactionAsync(_treasuryWallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_treasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_treasuryWallet: string): string;
        callAsync(_treasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeTreasuryWallet: {
        sendTransactionAsync(_newTreasuryWallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newTreasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newTreasuryWallet: string): string;
        callAsync(_newTreasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    depositTokens: {
        sendTransactionAsync(_numberOfTokens: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_numberOfTokens: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_numberOfTokens: BigNumber): string;
        callAsync(_numberOfTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    sendToTreasury: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getTreasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pushAvailableTokens: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string): string;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pullAvailableTokens: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addTemplate: {
        sendTransactionAsync(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber): string;
        callAsync(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeTemplate: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_name: string): string;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getTemplateCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getAllTemplateNames: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    addSchedule: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber): string;
        callAsync(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addScheduleFromTemplate: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string, _startTime: BigNumber): string;
        callAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifySchedule: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string, _startTime: BigNumber): string;
        callAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeSchedule: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string): string;
        callAsync(_beneficiary: string, _templateName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeAllSchedules: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string): string;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getSchedule: {
        callAsync(_beneficiary: string, _templateName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getTemplateNames: {
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getScheduleCount: {
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    pushAvailableTokensMulti: {
        sendTransactionAsync(_fromIndex: BigNumber, _toIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fromIndex: BigNumber, _toIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fromIndex: BigNumber, _toIndex: BigNumber): string;
        callAsync(_fromIndex: BigNumber, _toIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addScheduleMulti: {
        sendTransactionAsync(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[]): string;
        callAsync(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addScheduleFromTemplateMulti: {
        sendTransactionAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[]): string;
        callAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeSchedulesMulti: {
        sendTransactionAsync(_beneficiaries: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiaries: string[]): string;
        callAsync(_beneficiaries: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyScheduleMulti: {
        sendTransactionAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[]): string;
        callAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<VestingEscrowWalletContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=vesting_escrow_wallet.d.ts.map