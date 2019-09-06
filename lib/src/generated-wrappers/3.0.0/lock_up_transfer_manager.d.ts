import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../../PolyResponse';
export declare type LockUpTransferManagerEventArgs_3_0_0 = LockUpTransferManagerAddLockUpToUserEventArgs_3_0_0 | LockUpTransferManagerRemoveLockUpFromUserEventArgs_3_0_0 | LockUpTransferManagerModifyLockUpTypeEventArgs_3_0_0 | LockUpTransferManagerAddNewLockUpTypeEventArgs_3_0_0 | LockUpTransferManagerRemoveLockUpTypeEventArgs_3_0_0 | LockUpTransferManagerPauseEventArgs_3_0_0 | LockUpTransferManagerUnpauseEventArgs_3_0_0;
export declare enum LockUpTransferManagerEvents_3_0_0 {
    AddLockUpToUser = "AddLockUpToUser",
    RemoveLockUpFromUser = "RemoveLockUpFromUser",
    ModifyLockUpType = "ModifyLockUpType",
    AddNewLockUpType = "AddNewLockUpType",
    RemoveLockUpType = "RemoveLockUpType",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface LockUpTransferManagerAddLockUpToUserEventArgs_3_0_0 extends DecodedLogArgs {
    _userAddress: string;
    _lockupName: string;
}
export interface LockUpTransferManagerRemoveLockUpFromUserEventArgs_3_0_0 extends DecodedLogArgs {
    _userAddress: string;
    _lockupName: string;
}
export interface LockUpTransferManagerModifyLockUpTypeEventArgs_3_0_0 extends DecodedLogArgs {
    _lockupAmount: BigNumber;
    _startTime: BigNumber;
    _lockUpPeriodSeconds: BigNumber;
    _releaseFrequencySeconds: BigNumber;
    _lockupName: string;
}
export interface LockUpTransferManagerAddNewLockUpTypeEventArgs_3_0_0 extends DecodedLogArgs {
    _lockupName: string;
    _lockupAmount: BigNumber;
    _startTime: BigNumber;
    _lockUpPeriodSeconds: BigNumber;
    _releaseFrequencySeconds: BigNumber;
}
export interface LockUpTransferManagerRemoveLockUpTypeEventArgs_3_0_0 extends DecodedLogArgs {
    _lockupName: string;
}
export interface LockUpTransferManagerPauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export interface LockUpTransferManagerUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export declare class LockUpTransferManagerContract_3_0_0 extends BaseContract {
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
    lockups: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(index_0: string): string;
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
    executeTransfer: {
        sendTransactionAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string;
    };
    addNewLockUpType: {
        sendTransactionAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string): string;
    };
    addNewLockUpTypeMulti: {
        sendTransactionAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[]): string;
    };
    addLockUpByName: {
        sendTransactionAsync(_userAddress: string, _lockupName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddress: string, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_userAddress: string, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_userAddress: string, _lockupName: string): string;
    };
    addLockUpByNameMulti: {
        sendTransactionAsync(_userAddresses: string[], _lockupNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddresses: string[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_userAddresses: string[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_userAddresses: string[], _lockupNames: string[]): string;
    };
    addNewLockUpToUser: {
        sendTransactionAsync(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_userAddress: string, _lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string): string;
    };
    addNewLockUpToUserMulti: {
        sendTransactionAsync(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_userAddresses: string[], _lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[]): string;
    };
    removeLockUpFromUser: {
        sendTransactionAsync(_userAddress: string, _lockupName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddress: string, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_userAddress: string, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_userAddress: string, _lockupName: string): string;
    };
    removeLockupType: {
        sendTransactionAsync(_lockupName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_lockupName: string): string;
    };
    removeLockupTypeMulti: {
        sendTransactionAsync(_lockupNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_lockupNames: string[]): string;
    };
    removeLockUpFromUserMulti: {
        sendTransactionAsync(_userAddresses: string[], _lockupNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_userAddresses: string[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_userAddresses: string[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_userAddresses: string[], _lockupNames: string[]): string;
    };
    modifyLockUpType: {
        sendTransactionAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_lockupAmount: BigNumber, _startTime: BigNumber, _lockUpPeriodSeconds: BigNumber, _releaseFrequencySeconds: BigNumber, _lockupName: string): string;
    };
    modifyLockUpTypeMulti: {
        sendTransactionAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_lockupAmounts: BigNumber[], _startTimes: BigNumber[], _lockUpPeriodsSeconds: BigNumber[], _releaseFrequenciesSeconds: BigNumber[], _lockupNames: string[]): string;
    };
    getLockUp: {
        callAsync(_lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_lockupName: string): string;
    };
    getAllLockupData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(): string;
    };
    getListOfAddresses: {
        callAsync(_lockupName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_lockupName: string): string;
    };
    getAllLockups: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getLockupsNamesToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(_user: string): string;
    };
    getLockedTokenToUser: {
        callAsync(_userAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_userAddress: string): string;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<LockUpTransferManagerContract_3_0_0>;
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
//# sourceMappingURL=lock_up_transfer_manager.d.ts.map