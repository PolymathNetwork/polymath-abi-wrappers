import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type PercentageTransferManagerEventArgs = PercentageTransferManagerModifyHolderPercentageEventArgs | PercentageTransferManagerModifyWhitelistEventArgs | PercentageTransferManagerSetAllowPrimaryIssuanceEventArgs | PercentageTransferManagerPauseEventArgs | PercentageTransferManagerUnpauseEventArgs;
export declare enum PercentageTransferManagerEvents {
    ModifyHolderPercentage = "ModifyHolderPercentage",
    ModifyWhitelist = "ModifyWhitelist",
    SetAllowPrimaryIssuance = "SetAllowPrimaryIssuance",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface PercentageTransferManagerModifyHolderPercentageEventArgs extends DecodedLogArgs {
    _oldHolderPercentage: BigNumber;
    _newHolderPercentage: BigNumber;
}
export interface PercentageTransferManagerModifyWhitelistEventArgs extends DecodedLogArgs {
    _investor: string;
    _addedBy: string;
    _valid: boolean;
}
export interface PercentageTransferManagerSetAllowPrimaryIssuanceEventArgs extends DecodedLogArgs {
    _allowPrimaryIssuance: boolean;
}
export interface PercentageTransferManagerPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface PercentageTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class PercentageTransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    allowPrimaryIssuance: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
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
    maxHolderPercentage: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
    whitelist: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
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
        sendTransactionAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string;
    };
    configure: {
        sendTransactionAsync(_maxHolderPercentage: BigNumber, _allowPrimaryIssuance: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_maxHolderPercentage: BigNumber, _allowPrimaryIssuance: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_maxHolderPercentage: BigNumber, _allowPrimaryIssuance: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_maxHolderPercentage: BigNumber, _allowPrimaryIssuance: boolean): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    changeHolderPercentage: {
        sendTransactionAsync(_maxHolderPercentage: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_maxHolderPercentage: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_maxHolderPercentage: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_maxHolderPercentage: BigNumber): string;
    };
    modifyWhitelist: {
        sendTransactionAsync(_investor: string, _valid: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investor: string, _valid: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investor: string, _valid: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investor: string, _valid: boolean): string;
    };
    modifyWhitelistMulti: {
        sendTransactionAsync(_investors: string[], _valids: boolean[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _valids: boolean[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _valids: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _valids: boolean[]): string;
    };
    setAllowPrimaryIssuance: {
        sendTransactionAsync(_allowPrimaryIssuance: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowPrimaryIssuance: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowPrimaryIssuance: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowPrimaryIssuance: boolean): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<PercentageTransferManagerContract>;
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
//# sourceMappingURL=percentage_transfer_manager.d.ts.map