import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type GeneralPermissionManagerEventArgs = GeneralPermissionManagerChangePermissionEventArgs | GeneralPermissionManagerAddDelegateEventArgs;
export declare enum GeneralPermissionManagerEvents {
    ChangePermission = "ChangePermission",
    AddDelegate = "AddDelegate"
}
export interface GeneralPermissionManagerChangePermissionEventArgs extends DecodedLogArgs {
    _delegate: string;
    _module: string;
    _perm: string;
    _valid: boolean;
    _timestamp: BigNumber;
}
export interface GeneralPermissionManagerAddDelegateEventArgs extends DecodedLogArgs {
    _delegate: string;
    _details: string;
    _timestamp: BigNumber;
}
export declare class GeneralPermissionManagerContract extends BaseContract {
    perms: {
        callAsync(index_0: string, index_1: string, index_2: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    CHANGE_PERMISSION: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    allDelegates: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    delegateDetails: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    checkPermission: {
        callAsync(_delegate: string, _module: string, _perm: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    addDelegate: {
        sendTransactionAsync(_delegate: string, _details: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_delegate: string, _details: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_delegate: string, _details: string): string;
        callAsync(_delegate: string, _details: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deleteDelegate: {
        sendTransactionAsync(_delegate: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_delegate: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_delegate: string): string;
        callAsync(_delegate: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    checkDelegate: {
        callAsync(_potentialDelegate: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    changePermission: {
        sendTransactionAsync(_delegate: string, _module: string, _perm: string, _valid: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_delegate: string, _module: string, _perm: string, _valid: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_delegate: string, _module: string, _perm: string, _valid: boolean): string;
        callAsync(_delegate: string, _module: string, _perm: string, _valid: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changePermissionMulti: {
        sendTransactionAsync(_delegate: string, _modules: string[], _perms: string[], _valids: boolean[], txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_delegate: string, _modules: string[], _perms: string[], _valids: boolean[], factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_delegate: string, _modules: string[], _perms: string[], _valids: boolean[]): string;
        callAsync(_delegate: string, _modules: string[], _perms: string[], _valids: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getAllDelegatesWithPerm: {
        callAsync(_module: string, _perm: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getAllModulesAndPermsFromTypes: {
        callAsync(_delegate: string, _types: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], string[]]>;
    };
    getAllDelegates: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=general_permission_manager.d.ts.map