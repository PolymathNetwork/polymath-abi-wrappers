import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type ManualApprovalTransferManagerEventArgs = ManualApprovalTransferManagerAddManualApprovalEventArgs | ManualApprovalTransferManagerModifyManualApprovalEventArgs | ManualApprovalTransferManagerRevokeManualApprovalEventArgs | ManualApprovalTransferManagerPauseEventArgs | ManualApprovalTransferManagerUnpauseEventArgs;
export declare enum ManualApprovalTransferManagerEvents {
    AddManualApproval = "AddManualApproval",
    ModifyManualApproval = "ModifyManualApproval",
    RevokeManualApproval = "RevokeManualApproval",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface ManualApprovalTransferManagerAddManualApprovalEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _allowance: BigNumber;
    _expiryTime: BigNumber;
    _description: string;
    _addedBy: string;
}
export interface ManualApprovalTransferManagerModifyManualApprovalEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _expiryTime: BigNumber;
    _allowance: BigNumber;
    _description: string;
    _edittedBy: string;
}
export interface ManualApprovalTransferManagerRevokeManualApprovalEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _addedBy: string;
}
export interface ManualApprovalTransferManagerPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}
export interface ManualApprovalTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export declare class ManualApprovalTransferManagerContract extends BaseContract {
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    approvalIndex: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    approvals: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, BigNumber, BigNumber, string]>;
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
    TRANSFER_APPROVAL: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    verifyTransfer: {
        sendTransactionAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, _isTransfer: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, _isTransfer: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string, _isTransfer: boolean): string;
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, _isTransfer: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    addManualApproval: {
        sendTransactionAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string): string;
        callAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[]): string;
        callAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyManualApproval: {
        sendTransactionAsync(_from: string, _to: string, _expiryTime: BigNumber, _changedAllowance: BigNumber, _description: string, _change: number | BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _expiryTime: BigNumber, _changedAllowance: BigNumber, _description: string, _change: number | BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _expiryTime: BigNumber, _changedAllowance: BigNumber, _description: string, _change: number | BigNumber): string;
        callAsync(_from: string, _to: string, _expiryTime: BigNumber, _changedAllowance: BigNumber, _description: string, _change: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changedAllowances: BigNumber[], _descriptions: string[], _changes: (number | BigNumber)[], txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changedAllowances: BigNumber[], _descriptions: string[], _changes: (number | BigNumber)[], factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changedAllowances: BigNumber[], _descriptions: string[], _changes: (number | BigNumber)[]): string;
        callAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changedAllowances: BigNumber[], _descriptions: string[], _changes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeManualApproval: {
        sendTransactionAsync(_from: string, _to: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string): string;
        callAsync(_from: string, _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string[], _to: string[]): string;
        callAsync(_from: string[], _to: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getActiveApprovalsToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[], BigNumber[], BigNumber[], string[]]>;
    };
    getApprovalDetails: {
        callAsync(_from: string, _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, string]>;
    };
    getTotalApprovalsLength: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getAllApprovals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[], BigNumber[], BigNumber[], string[]]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=manual_approval_transfer_manager.d.ts.map