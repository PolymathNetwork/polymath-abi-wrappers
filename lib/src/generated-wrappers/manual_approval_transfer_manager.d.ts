import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
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
    account: string;
}
export interface ManualApprovalTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class ManualApprovalTransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, index_2: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
    approvalIndex: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    approvals: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, BigNumber, BigNumber, string]>;
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
        sendTransactionAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string;
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
    };
    addManualApproval: {
        sendTransactionAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string): string;
        callAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[]): string;
        callAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyManualApproval: {
        sendTransactionAsync(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean): string;
        callAsync(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[]): string;
        callAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeManualApproval: {
        sendTransactionAsync(_from: string, _to: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string): string;
        callAsync(_from: string, _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revokeManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
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
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<ManualApprovalTransferManagerContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=manual_approval_transfer_manager.d.ts.map