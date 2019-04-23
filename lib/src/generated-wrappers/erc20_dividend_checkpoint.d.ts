import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type ERC20DividendCheckpointEventArgs = ERC20DividendCheckpointERC20DividendDepositedEventArgs | ERC20DividendCheckpointERC20DividendClaimedEventArgs | ERC20DividendCheckpointERC20DividendReclaimedEventArgs | ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs | ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs | ERC20DividendCheckpointSetWithholdingEventArgs | ERC20DividendCheckpointSetWithholdingFixedEventArgs | ERC20DividendCheckpointSetWalletEventArgs | ERC20DividendCheckpointUpdateDividendDatesEventArgs | ERC20DividendCheckpointPauseEventArgs | ERC20DividendCheckpointUnpauseEventArgs;
export declare enum ERC20DividendCheckpointEvents {
    ERC20DividendDeposited = "ERC20DividendDeposited",
    ERC20DividendClaimed = "ERC20DividendClaimed",
    ERC20DividendReclaimed = "ERC20DividendReclaimed",
    ERC20DividendWithholdingWithdrawn = "ERC20DividendWithholdingWithdrawn",
    SetDefaultExcludedAddresses = "SetDefaultExcludedAddresses",
    SetWithholding = "SetWithholding",
    SetWithholdingFixed = "SetWithholdingFixed",
    SetWallet = "SetWallet",
    UpdateDividendDates = "UpdateDividendDates",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface ERC20DividendCheckpointERC20DividendDepositedEventArgs extends DecodedLogArgs {
    _depositor: string;
    _checkpointId: BigNumber;
    _created: BigNumber;
    _maturity: BigNumber;
    _expiry: BigNumber;
    _token: string;
    _amount: BigNumber;
    _totalSupply: BigNumber;
    _dividendIndex: BigNumber;
    _name: string;
}
export interface ERC20DividendCheckpointERC20DividendClaimedEventArgs extends DecodedLogArgs {
    _payee: string;
    _dividendIndex: BigNumber;
    _token: string;
    _amount: BigNumber;
    _withheld: BigNumber;
}
export interface ERC20DividendCheckpointERC20DividendReclaimedEventArgs extends DecodedLogArgs {
    _claimer: string;
    _dividendIndex: BigNumber;
    _token: string;
    _claimedAmount: BigNumber;
}
export interface ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs extends DecodedLogArgs {
    _claimer: string;
    _dividendIndex: BigNumber;
    _token: string;
    _withheldAmount: BigNumber;
}
export interface ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs extends DecodedLogArgs {
    _excluded: string[];
    _timestamp: BigNumber;
}
export interface ERC20DividendCheckpointSetWithholdingEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber[];
    _timestamp: BigNumber;
}
export interface ERC20DividendCheckpointSetWithholdingFixedEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber;
    _timestamp: BigNumber;
}
export interface ERC20DividendCheckpointSetWalletEventArgs extends DecodedLogArgs {
    _oldWallet: string;
    _newWallet: string;
    _timestamp: BigNumber;
}
export interface ERC20DividendCheckpointUpdateDividendDatesEventArgs extends DecodedLogArgs {
    _dividendIndex: BigNumber;
    _maturity: BigNumber;
    _expiry: BigNumber;
}
export interface ERC20DividendCheckpointPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}
export interface ERC20DividendCheckpointUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export declare class ERC20DividendCheckpointContract extends BaseContract {
    private _defaultEstimateGasFactor;
    setWithholdingFixed: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber): string;
        callAsync(_investors: string[], _withholding: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    EXCLUDED_ADDRESS_LIMIT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDividendData: {
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]>;
    };
    pullDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    CHECKPOINT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    pushDividendPaymentToAddresses: {
        sendTransactionAsync(_dividendIndex: BigNumber, _payees: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _payees: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _payees: string[]): string;
        callAsync(_dividendIndex: BigNumber, _payees: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    wallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getDividendIndex: {
        callAsync(_checkpointId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    updateDividendDates: {
        sendTransactionAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    configure: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string): string;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setWithholding: {
        sendTransactionAsync(_investors: string[], _withholding: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _withholding: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber[]): string;
        callAsync(_investors: string[], _withholding: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    dividendTokens: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeWallet: {
        sendTransactionAsync(_wallet: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string): string;
        callAsync(_wallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
        sendTransactionAsync(_excluded: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_excluded: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_excluded: string[]): string;
        callAsync(_excluded: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    FEE_ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pushDividendPayment: {
        sendTransactionAsync(_dividendIndex: BigNumber, _start: BigNumber, _iterations: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, _start: BigNumber, _iterations: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
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
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    createDividend: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createDividendWithCheckpoint: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createDividendWithExclusions: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _excluded: string[], _name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _excluded: string[], _name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _excluded: string[], _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _excluded: string[], _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createDividendWithCheckpointAndExclusions: {
        sendTransactionAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string): string;
        callAsync(_maturity: BigNumber, _expiry: BigNumber, _token: string, _amount: BigNumber, _checkpointId: BigNumber, _excluded: string[], _name: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimDividend: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    withdrawWithholding: {
        sendTransactionAsync(_dividendIndex: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_dividendIndex: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_dividendIndex: BigNumber): string;
        callAsync(_dividendIndex: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<ERC20DividendCheckpointContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=erc20_dividend_checkpoint.d.ts.map