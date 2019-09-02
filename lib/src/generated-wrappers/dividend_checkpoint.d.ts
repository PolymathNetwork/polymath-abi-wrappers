import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type DividendCheckpointEventArgs = DividendCheckpointSetDefaultExcludedAddressesEventArgs | DividendCheckpointSetWithholdingEventArgs | DividendCheckpointSetWithholdingFixedEventArgs | DividendCheckpointSetWalletEventArgs | DividendCheckpointUpdateDividendDatesEventArgs | DividendCheckpointPauseEventArgs | DividendCheckpointUnpauseEventArgs;
export declare enum DividendCheckpointEvents {
    SetDefaultExcludedAddresses = "SetDefaultExcludedAddresses",
    SetWithholding = "SetWithholding",
    SetWithholdingFixed = "SetWithholdingFixed",
    SetWallet = "SetWallet",
    UpdateDividendDates = "UpdateDividendDates",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface DividendCheckpointSetDefaultExcludedAddressesEventArgs extends DecodedLogArgs {
    _excluded: string[];
}
export interface DividendCheckpointSetWithholdingEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber[];
}
export interface DividendCheckpointSetWithholdingFixedEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber;
}
export interface DividendCheckpointSetWalletEventArgs extends DecodedLogArgs {
    _oldWallet: string;
    _newWallet: string;
}
export interface DividendCheckpointUpdateDividendDatesEventArgs extends DecodedLogArgs {
    _dividendIndex: BigNumber;
    _maturity: BigNumber;
    _expiry: BigNumber;
}
export interface DividendCheckpointPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface DividendCheckpointUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class DividendCheckpointContract extends BaseContract {
    private _defaultEstimateGasFactor;
    EXCLUDED_ADDRESS_LIMIT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
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
    investorWithheld: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    wallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    withholdingTax: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    dividends: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber, string]>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
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
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    excluded: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    configure: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_wallet: string): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    changeWallet: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_wallet: string): string;
    };
    getDefaultExcluded: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getTreasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    createCheckpoint: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    setDefaultExcluded: {
        sendTransactionAsync(_excluded: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_excluded: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_excluded: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_excluded: string[]): string;
    };
    setWithholding: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _withholding: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber[]): string;
    };
    setWithholdingFixed: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _withholding: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber): string;
    };
    pushDividendPaymentToAddresses: {
        sendTransactionAsync(_dividendIndex: BigNumber, _payees: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _payees: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dividendIndex: BigNumber, _payees: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _payees: string[]): string;
    };
    pushDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber): string;
    };
    pullDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
    };
    reclaimDividend: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
    };
    calculateDividend: {
        callAsync(_dividendIndex: BigNumber, _payee: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _payee: string): string;
    };
    getDividendIndex: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(_checkpointId: BigNumber): string;
    };
    withdrawWithholding: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
    };
    updateDividendDates: {
        sendTransactionAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber): string;
    };
    getDividendsData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], string[]]>;
        getABIEncodedTransactionData(): string;
    };
    getDividendData: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
    };
    getDividendProgress: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], boolean[], boolean[], BigNumber[], BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
    };
    getCheckpointData: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(_checkpointId: BigNumber): string;
    };
    isExcluded: {
        callAsync(_investor: string, _dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_investor: string, _dividendIndex: BigNumber): string;
    };
    isClaimed: {
        callAsync(_investor: string, _dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_investor: string, _dividendIndex: BigNumber): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<DividendCheckpointContract>;
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
//# sourceMappingURL=dividend_checkpoint.d.ts.map