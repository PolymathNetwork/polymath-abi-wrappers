import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
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
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, index_2: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, index_2: BigNumber): string;
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
    approvalIndex: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string, index_1: string): string;
    };
    approvals: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string, BigNumber, BigNumber, string]>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
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
        sendTransactionAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string;
    };
    addManualApproval: {
        sendTransactionAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _allowance: BigNumber, _expiryTime: BigNumber, _description: string): string;
    };
    addManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string[], _to: string[], _allowances: BigNumber[], _expiryTimes: BigNumber[], _descriptions: string[]): string;
    };
    modifyManualApproval: {
        sendTransactionAsync(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _expiryTime: BigNumber, _changeInAllowance: BigNumber, _description: string, _increase: boolean): string;
    };
    modifyManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string[], _to: string[], _expiryTimes: BigNumber[], _changeInAllowance: BigNumber[], _descriptions: string[], _increase: boolean[]): string;
    };
    revokeManualApproval: {
        sendTransactionAsync(_from: string, _to: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string): string;
    };
    revokeManualApprovalMulti: {
        sendTransactionAsync(_from: string[], _to: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string[], _to: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string[], _to: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string[], _to: string[]): string;
    };
    getActiveApprovalsToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[], BigNumber[], BigNumber[], string[]]>;
        getABIEncodedTransactionData(_user: string): string;
    };
    getApprovalDetails: {
        callAsync(_from: string, _to: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, _to: string): string;
    };
    getTotalApprovalsLength: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getAllApprovals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[], BigNumber[], BigNumber[], string[]]>;
        getABIEncodedTransactionData(): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<ManualApprovalTransferManagerContract>;
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
//# sourceMappingURL=manual_approval_transfer_manager.d.ts.map