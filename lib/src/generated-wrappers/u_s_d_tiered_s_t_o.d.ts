import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type USDTieredSTOEventArgs = USDTieredSTOSetAllowBeneficialInvestmentsEventArgs | USDTieredSTOSetNonAccreditedLimitEventArgs | USDTieredSTOTokenPurchaseEventArgs | USDTieredSTOFundsReceivedEventArgs | USDTieredSTOReserveTokenMintEventArgs | USDTieredSTOSetAddressesEventArgs | USDTieredSTOSetLimitsEventArgs | USDTieredSTOSetTimesEventArgs | USDTieredSTOSetTiersEventArgs | USDTieredSTOSetTreasuryWalletEventArgs | USDTieredSTOPauseEventArgs | USDTieredSTOUnpauseEventArgs | USDTieredSTOSetFundRaiseTypesEventArgs;
export declare enum USDTieredSTOEvents {
    SetAllowBeneficialInvestments = "SetAllowBeneficialInvestments",
    SetNonAccreditedLimit = "SetNonAccreditedLimit",
    TokenPurchase = "TokenPurchase",
    FundsReceived = "FundsReceived",
    ReserveTokenMint = "ReserveTokenMint",
    SetAddresses = "SetAddresses",
    SetLimits = "SetLimits",
    SetTimes = "SetTimes",
    SetTiers = "SetTiers",
    SetTreasuryWallet = "SetTreasuryWallet",
    Pause = "Pause",
    Unpause = "Unpause",
    SetFundRaiseTypes = "SetFundRaiseTypes"
}
export interface USDTieredSTOSetAllowBeneficialInvestmentsEventArgs extends DecodedLogArgs {
    _allowed: boolean;
}
export interface USDTieredSTOSetNonAccreditedLimitEventArgs extends DecodedLogArgs {
    _investor: string;
    _limit: BigNumber;
}
export interface USDTieredSTOTokenPurchaseEventArgs extends DecodedLogArgs {
    _purchaser: string;
    _beneficiary: string;
    _tokens: BigNumber;
    _usdAmount: BigNumber;
    _tierPrice: BigNumber;
    _tier: BigNumber;
}
export interface USDTieredSTOFundsReceivedEventArgs extends DecodedLogArgs {
    _purchaser: string;
    _beneficiary: string;
    _usdAmount: BigNumber;
    _fundRaiseType: BigNumber;
    _receivedValue: BigNumber;
    _spentValue: BigNumber;
    _rate: BigNumber;
}
export interface USDTieredSTOReserveTokenMintEventArgs extends DecodedLogArgs {
    _owner: string;
    _wallet: string;
    _tokens: BigNumber;
    _latestTier: BigNumber;
}
export interface USDTieredSTOSetAddressesEventArgs extends DecodedLogArgs {
    _wallet: string;
    _usdTokens: string[];
}
export interface USDTieredSTOSetLimitsEventArgs extends DecodedLogArgs {
    _nonAccreditedLimitUSD: BigNumber;
    _minimumInvestmentUSD: BigNumber;
}
export interface USDTieredSTOSetTimesEventArgs extends DecodedLogArgs {
    _startTime: BigNumber;
    _endTime: BigNumber;
}
export interface USDTieredSTOSetTiersEventArgs extends DecodedLogArgs {
    _ratePerTier: BigNumber[];
    _ratePerTierDiscountPoly: BigNumber[];
    _tokensPerTierTotal: BigNumber[];
    _tokensPerTierDiscountPoly: BigNumber[];
}
export interface USDTieredSTOSetTreasuryWalletEventArgs extends DecodedLogArgs {
    _oldWallet: string;
    _newWallet: string;
}
export interface USDTieredSTOPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface USDTieredSTOUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface USDTieredSTOSetFundRaiseTypesEventArgs extends DecodedLogArgs {
    _fundRaiseTypes: BigNumber[];
}
export declare class USDTieredSTOContract extends BaseContract {
    private _defaultEstimateGasFactor;
    tiers: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
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
    allowBeneficialInvestments: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    endTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    treasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    nonAccreditedLimitUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
    totalTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    finalAmountReturned: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    stableCoinsRaised: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    startTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    investorInvested: {
        callAsync(index_0: string, index_1: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string, index_1: number | BigNumber): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    isFinalized: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getRaised: {
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string;
    };
    pausedTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
    fundsRaised: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: number | BigNumber): string;
    };
    investorInvestedUSD: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    fundRaiseTypes: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: number | BigNumber): string;
    };
    currentTier: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    investorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    nonAccreditedLimitUSDOverride: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    minimumInvestmentUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    fundsRaisedUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    configure: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[]): string;
    };
    modifyFunding: {
        sendTransactionAsync(_fundRaiseTypes: (number | BigNumber)[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_fundRaiseTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_fundRaiseTypes: (number | BigNumber)[]): string;
    };
    modifyLimits: {
        sendTransactionAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber): string;
    };
    modifyTiers: {
        sendTransactionAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[]): string;
    };
    modifyTimes: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber): string;
    };
    modifyAddresses: {
        sendTransactionAsync(_wallet: string, _treasuryWallet: string, _usdTokens: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, _treasuryWallet: string, _usdTokens: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_wallet: string, _treasuryWallet: string, _usdTokens: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_wallet: string, _treasuryWallet: string, _usdTokens: string[]): string;
    };
    modifyOracle: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, _oracleAddress: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, _oracleAddress: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_fundRaiseType: number | BigNumber, _oracleAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _oracleAddress: string): string;
    };
    finalize: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    changeNonAccreditedLimit: {
        sendTransactionAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investors: string[], _nonAccreditedLimit: BigNumber[]): string;
    };
    getAccreditedData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], boolean[], BigNumber[]]>;
        getABIEncodedTransactionData(): string;
    };
    changeAllowBeneficialInvestments: {
        sendTransactionAsync(_allowBeneficialInvestments: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowBeneficialInvestments: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowBeneficialInvestments: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowBeneficialInvestments: boolean): string;
    };
    buyWithETH: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string): string;
    };
    buyWithPOLY: {
        sendTransactionAsync(_beneficiary: string, _investedPOLY: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedPOLY: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _investedPOLY: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber): string;
    };
    buyWithUSD: {
        sendTransactionAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _usdToken: string): string;
    };
    buyWithETHRateLimited: {
        sendTransactionAsync(_beneficiary: string, _minTokens: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _minTokens: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _minTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string, _minTokens: BigNumber): string;
    };
    buyWithPOLYRateLimited: {
        sendTransactionAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber): string;
    };
    buyWithUSDRateLimited: {
        sendTransactionAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string): string;
    };
    isOpen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    capReached: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    getRate: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string;
    };
    convertToUSD: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _amount: BigNumber): string;
    };
    convertFromUSD: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _amount: BigNumber): string;
    };
    getTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getTokensMinted: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getTokensSoldFor: {
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string;
    };
    getTokensMintedByTier: {
        callAsync(_tier: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(_tier: BigNumber): string;
    };
    getTokensSoldByTier: {
        callAsync(_tier: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_tier: BigNumber): string;
    };
    getNumberOfTiers: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getUsdTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getSTODetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[], BigNumber, BigNumber, BigNumber, boolean[]]>;
        getABIEncodedTransactionData(): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<USDTieredSTOContract>;
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
//# sourceMappingURL=u_s_d_tiered_s_t_o.d.ts.map