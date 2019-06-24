import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type LockUpTransferManagerEventArgs = LockUpTransferManagerAddLockUpToUserEventArgs | LockUpTransferManagerRemoveLockUpFromUserEventArgs | LockUpTransferManagerModifyLockUpTypeEventArgs | LockUpTransferManagerAddNewLockUpTypeEventArgs | LockUpTransferManagerRemoveLockUpTypeEventArgs | LockUpTransferManagerPauseEventArgs | LockUpTransferManagerUnpauseEventArgs;
export declare enum LockUpTransferManagerEvents {
    AddLockUpToUser = "AddLockUpToUser",
    RemoveLockUpFromUser = "RemoveLockUpFromUser",
    ModifyLockUpType = "ModifyLockUpType",
    AddNewLockUpType = "AddNewLockUpType",
    RemoveLockUpType = "RemoveLockUpType",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface LockUpTransferManagerAddLockUpToUserEventArgs extends DecodedLogArgs {
    _userAddress: string;
    _lockupName: string;
}
export interface LockUpTransferManagerRemoveLockUpFromUserEventArgs extends DecodedLogArgs {
    _userAddress: string;
    _lockupName: string;
}
export interface LockUpTransferManagerModifyLockUpTypeEventArgs extends DecodedLogArgs {
    _lockupAmount: BigNumber;
    _startTime: BigNumber;
    _lockUpPeriodSeconds: BigNumber;
    _releaseFrequencySeconds: BigNumber;
    _lockupName: string;
}
export interface LockUpTransferManagerAddNewLockUpTypeEventArgs extends DecodedLogArgs {
    _lockupName: string;
    _lockupAmount: BigNumber;
    _startTime: BigNumber;
    _lockUpPeriodSeconds: BigNumber;
    _releaseFrequencySeconds: BigNumber;
}
export interface LockUpTransferManagerRemoveLockUpTypeEventArgs extends DecodedLogArgs {
    _lockupName: string;
}
export interface LockUpTransferManagerPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface LockUpTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class LockUpTransferManagerContract extends BaseContract {
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
    lockups: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
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
    addNewLockUpType: {
        sendTransactionAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string): string;
        callAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addNewLockUpTypeMulti: {
        sendTransactionAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[]): string;
        callAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addLockUpByName: {
        sendTransactionAsync(_userAddress: string, _lockupName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddress: string, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_userAddress: string, _lockupName: string): string;
        callAsync(_userAddress: string, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addLockUpByNameMulti: {
        sendTransactionAsync(_userAddresses: string[], _lockupNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddresses: string[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_userAddresses: string[], _lockupNames: string[]): string;
        callAsync(_userAddresses: string[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addNewLockUpToUser: {
        sendTransactionAsync(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string): string;
        callAsync(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    addNewLockUpToUserMulti: {
        sendTransactionAsync(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[]): string;
        callAsync(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeLockUpFromUser: {
        sendTransactionAsync(_userAddress: string, _lockupName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddress: string, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_userAddress: string, _lockupName: string): string;
        callAsync(_userAddress: string, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeLockupType: {
        sendTransactionAsync(_lockupName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_lockupName: string): string;
        callAsync(_lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeLockupTypeMulti: {
        sendTransactionAsync(_lockupNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_lockupNames: string[]): string;
        callAsync(_lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    removeLockUpFromUserMulti: {
        sendTransactionAsync(_userAddresses: string[], _lockupNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddresses: string[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_userAddresses: string[], _lockupNames: string[]): string;
        callAsync(_userAddresses: string[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyLockUpType: {
        sendTransactionAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string): string;
        callAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyLockUpTypeMulti: {
        sendTransactionAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[]): string;
        callAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getLockUp: {
        callAsync(_lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    getAllLockupData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]>;
    };
    getListOfAddresses: {
        callAsync(_lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getAllLockups: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getLockupsNamesToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getLockedTokenToUser: {
        callAsync(_userAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<LockUpTransferManagerContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=lock_up_transfer_manager.d.ts.map