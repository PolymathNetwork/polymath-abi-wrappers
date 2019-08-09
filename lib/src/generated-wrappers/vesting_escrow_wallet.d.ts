import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
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
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
    treasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    unassignedTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
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
    schedules: {
        callAsync(index_0: string, index_1: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(index_0: string, index_1: BigNumber): string;
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
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    templateNames: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    beneficiaries: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    configure: {
        sendTransactionAsync(_treasuryWallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_treasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_treasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_treasuryWallet: string): string;
    };
    changeTreasuryWallet: {
        sendTransactionAsync(_newTreasuryWallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_newTreasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_newTreasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_newTreasuryWallet: string): string;
    };
    depositTokens: {
        sendTransactionAsync(_numberOfTokens: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_numberOfTokens: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_numberOfTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_numberOfTokens: BigNumber): string;
    };
    sendToTreasury: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
    };
    getTreasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    pushAvailableTokens: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string): string;
    };
    pullAvailableTokens: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    addTemplate: {
        sendTransactionAsync(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber): string;
    };
    removeTemplate: {
        sendTransactionAsync(_name: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_name: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_name: string): string;
    };
    getTemplateCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getAllTemplateNames: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    addSchedule: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string, _numberOfTokens: BigNumber, _duration: BigNumber, _frequency: BigNumber, _startTime: BigNumber): string;
    };
    addScheduleFromTemplate: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string, _startTime: BigNumber): string;
    };
    modifySchedule: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _templateName: string, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string, _startTime: BigNumber): string;
    };
    revokeSchedule: {
        sendTransactionAsync(_beneficiary: string, _templateName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _templateName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _templateName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string): string;
    };
    revokeAllSchedules: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string): string;
    };
    getSchedule: {
        callAsync(_beneficiary: string, _templateName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string, _templateName: string): string;
    };
    getTemplateNames: {
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_beneficiary: string): string;
    };
    getScheduleCount: {
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_beneficiary: string): string;
    };
    pushAvailableTokensMulti: {
        sendTransactionAsync(_fromIndex: BigNumber, _toIndex: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fromIndex: BigNumber, _toIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_fromIndex: BigNumber, _toIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_fromIndex: BigNumber, _toIndex: BigNumber): string;
    };
    addScheduleMulti: {
        sendTransactionAsync(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiaries: string[], _templateNames: string[], _numberOfTokens: BigNumber[], _durations: BigNumber[], _frequencies: BigNumber[], _startTimes: BigNumber[]): string;
    };
    addScheduleFromTemplateMulti: {
        sendTransactionAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[]): string;
    };
    revokeSchedulesMulti: {
        sendTransactionAsync(_beneficiaries: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiaries: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiaries: string[]): string;
    };
    modifyScheduleMulti: {
        sendTransactionAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiaries: string[], _templateNames: string[], _startTimes: BigNumber[]): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<VestingEscrowWalletContract>;
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
//# sourceMappingURL=vesting_escrow_wallet.d.ts.map