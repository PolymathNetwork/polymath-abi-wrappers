import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
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
    };
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    investorWithheld: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    wallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    withholdingTax: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    dividends: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber, string]>;
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
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    excluded: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    configure: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string): string;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeWallet: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string): string;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getDefaultExcluded: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getTreasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    createCheckpoint: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    setDefaultExcluded: {
        sendTransactionAsync(_excluded: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_excluded: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_excluded: string[]): string;
        callAsync(_excluded: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setWithholding: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber[]): string;
        callAsync(_investors: string[], _withholding: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setWithholdingFixed: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber): string;
        callAsync(_investors: string[], _withholding: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pushDividendPaymentToAddresses: {
        sendTransactionAsync(_dividendIndex: BigNumber, _payees: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _payees: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _payees: string[]): string;
        callAsync(_dividendIndex: BigNumber, _payees: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pushDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pullDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimDividend: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    calculateDividend: {
        callAsync(_dividendIndex: BigNumber, _payee: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    getDividendIndex: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    withdrawWithholding: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    updateDividendDates: {
        sendTransactionAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getDividendsData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], string[]]>;
    };
    getDividendData: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]>;
    };
    getDividendProgress: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], boolean[], boolean[], BigNumber[], BigNumber[], BigNumber[]]>;
    };
    getCheckpointData: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[]]>;
    };
    isExcluded: {
        callAsync(_investor: string, _dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isClaimed: {
        callAsync(_investor: string, _dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<DividendCheckpointContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=dividend_checkpoint.d.ts.map