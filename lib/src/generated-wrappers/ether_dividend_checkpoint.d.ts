import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TxDataPayable } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare type EtherDividendCheckpointEventArgs = EtherDividendCheckpointEtherDividendDepositedEventArgs | EtherDividendCheckpointEtherDividendClaimedEventArgs | EtherDividendCheckpointEtherDividendReclaimedEventArgs | EtherDividendCheckpointEtherDividendClaimFailedEventArgs | EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs | EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs | EtherDividendCheckpointSetWithholdingEventArgs | EtherDividendCheckpointSetWithholdingFixedEventArgs;
export declare enum EtherDividendCheckpointEvents {
    EtherDividendDeposited = "EtherDividendDeposited",
    EtherDividendClaimed = "EtherDividendClaimed",
    EtherDividendReclaimed = "EtherDividendReclaimed",
    EtherDividendClaimFailed = "EtherDividendClaimFailed",
    EtherDividendWithholdingWithdrawn = "EtherDividendWithholdingWithdrawn",
    SetDefaultExcludedAddresses = "SetDefaultExcludedAddresses",
    SetWithholding = "SetWithholding",
    SetWithholdingFixed = "SetWithholdingFixed"
}
export interface EtherDividendCheckpointEtherDividendDepositedEventArgs extends DecodedLogArgs {
    _depositor: string;
    _checkpointId: BigNumber;
    _created: BigNumber;
    _maturity: BigNumber;
    _expiry: BigNumber;
    _amount: BigNumber;
    _totalSupply: BigNumber;
    _dividendIndex: BigNumber;
    _name: string;
}
export interface EtherDividendCheckpointEtherDividendClaimedEventArgs extends DecodedLogArgs {
    _payee: string;
    _dividendIndex: BigNumber;
    _amount: BigNumber;
    _withheld: BigNumber;
}
export interface EtherDividendCheckpointEtherDividendReclaimedEventArgs extends DecodedLogArgs {
    _claimer: string;
    _dividendIndex: BigNumber;
    _claimedAmount: BigNumber;
}
export interface EtherDividendCheckpointEtherDividendClaimFailedEventArgs extends DecodedLogArgs {
    _payee: string;
    _dividendIndex: BigNumber;
    _amount: BigNumber;
    _withheld: BigNumber;
}
export interface EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs extends DecodedLogArgs {
    _claimer: string;
    _dividendIndex: BigNumber;
    _withheldAmount: BigNumber;
}
export interface EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs extends DecodedLogArgs {
    _excluded: string[];
    _timestamp: BigNumber;
}
export interface EtherDividendCheckpointSetWithholdingEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber[];
    _timestamp: BigNumber;
}
export interface EtherDividendCheckpointSetWithholdingFixedEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber;
    _timestamp: BigNumber;
}
export declare class EtherDividendCheckpointContract extends BaseContract {
    setWithholdingFixed: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber): string;
        callAsync(_investors: string[], _withholding: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    EXCLUDED_ADDRESS_LIMIT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDividendData: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]>;
    };
    pullDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    CHECKPOINT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pushDividendPaymentToAddresses: {
        sendTransactionAsync(_dividendIndex: BigNumber, _payees: string[], txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_dividendIndex: BigNumber, _payees: string[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _payees: string[]): string;
        callAsync(_dividendIndex: BigNumber, _payees: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isClaimed: {
        callAsync(_investor: string, _dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    calculateDividend: {
        callAsync(_dividendIndex: BigNumber, _payee: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    MANAGE: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDividendIndex: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_amount: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    withholdingTax: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getCheckpointData: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[]]>;
    };
    DISTRIBUTE: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    dividends: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber, string]>;
    };
    isExcluded: {
        callAsync(_investor: string, _dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    setWithholding: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber[], txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber[]): string;
        callAsync(_investors: string[], _withholding: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getDividendsData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], string[]]>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    excluded: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setDefaultExcluded: {
        sendTransactionAsync(_excluded: string[], txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_excluded: string[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_excluded: string[]): string;
        callAsync(_excluded: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    FEE_ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pushDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, _start: BigNumber, _iterations: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_dividendIndex: BigNumber, _start: BigNumber, _iterations: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _start: BigNumber, _iterations: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, _start: BigNumber, _iterations: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getDefaultExcluded: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getDividendProgress: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], boolean[], boolean[], BigNumber[], BigNumber[], BigNumber[]]>;
    };
    createCheckpoint: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    createDividend: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _name: string, txData?: Partial<TxDataPayable>): Promise<string>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _name: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createDividendWithCheckpoint: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _name: string, txData?: Partial<TxDataPayable>): Promise<string>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _name: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createDividendWithExclusions: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _excluded: string[], _name: string, txData?: Partial<TxDataPayable>): Promise<string>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _excluded: string[], _name: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _excluded: string[], _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _excluded: string[], _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createDividendWithCheckpointAndExclusions: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string, txData?: Partial<TxDataPayable>): Promise<string>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimDividend: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    withdrawWithholding: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=ether_dividend_checkpoint.d.ts.map