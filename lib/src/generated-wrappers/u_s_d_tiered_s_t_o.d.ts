import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TxDataPayable } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type USDTieredSTOEventArgs = USDTieredSTOSetAllowBeneficialInvestmentsEventArgs | USDTieredSTOSetNonAccreditedLimitEventArgs | USDTieredSTOSetAccreditedEventArgs | USDTieredSTOTokenPurchaseEventArgs | USDTieredSTOFundsReceivedEventArgs | USDTieredSTOReserveTokenMintEventArgs | USDTieredSTOSetAddressesEventArgs | USDTieredSTOSetLimitsEventArgs | USDTieredSTOSetTimesEventArgs | USDTieredSTOSetTiersEventArgs | USDTieredSTOSetFundRaiseTypesEventArgs | USDTieredSTOPauseEventArgs | USDTieredSTOUnpauseEventArgs;
export declare enum USDTieredSTOEvents {
    SetAllowBeneficialInvestments = "SetAllowBeneficialInvestments",
    SetNonAccreditedLimit = "SetNonAccreditedLimit",
    SetAccredited = "SetAccredited",
    TokenPurchase = "TokenPurchase",
    FundsReceived = "FundsReceived",
    ReserveTokenMint = "ReserveTokenMint",
    SetAddresses = "SetAddresses",
    SetLimits = "SetLimits",
    SetTimes = "SetTimes",
    SetTiers = "SetTiers",
    SetFundRaiseTypes = "SetFundRaiseTypes",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface USDTieredSTOSetAllowBeneficialInvestmentsEventArgs extends DecodedLogArgs {
    _allowed: boolean;
}
export interface USDTieredSTOSetNonAccreditedLimitEventArgs extends DecodedLogArgs {
    _investor: string;
    _limit: BigNumber;
}
export interface USDTieredSTOSetAccreditedEventArgs extends DecodedLogArgs {
    _investor: string;
    _accredited: boolean;
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
    _reserveWallet: string;
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
export interface USDTieredSTOSetFundRaiseTypesEventArgs extends DecodedLogArgs {
    _fundRaiseTypes: BigNumber[];
}
export interface USDTieredSTOPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}
export interface USDTieredSTOUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export declare class USDTieredSTOContract extends BaseContract {
    tiers: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    };
    investorsList: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    allowBeneficialInvestments: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    endTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    nonAccreditedLimitUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    wallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    totalTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    finalAmountReturned: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    investors: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    stableCoinsRaised: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    startTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    investorInvested: {
        callAsync(index_0: string, index_1: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    usdTokenEnabled: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isFinalized: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    ETH_ORACLE: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getRaised: {
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    POLY_ORACLE: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    pausedTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    usdTokens: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    fundsRaised: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    investorInvestedUSD: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    fundRaiseTypes: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    currentTier: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    FEE_ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    reserveWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    investorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    minimumInvestmentUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    fundsRaisedUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    configure: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _reserveWallet: string, _usdTokens: string[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _reserveWallet: string, _usdTokens: string[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _reserveWallet: string, _usdTokens: string[]): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _reserveWallet: string, _usdTokens: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyFunding: {
        sendTransactionAsync(_fundRaiseTypes: (number | BigNumber)[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseTypes: (number | BigNumber)[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fundRaiseTypes: (number | BigNumber)[]): string;
        callAsync(_fundRaiseTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyLimits: {
        sendTransactionAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber): string;
        callAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyTiers: {
        sendTransactionAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[]): string;
        callAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyTimes: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyAddresses: {
        sendTransactionAsync(_wallet: string, _reserveWallet: string, _usdTokens: string[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, _reserveWallet: string, _usdTokens: string[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string, _reserveWallet: string, _usdTokens: string[]): string;
        callAsync(_wallet: string, _reserveWallet: string, _usdTokens: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    finalize: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeAccredited: {
        sendTransactionAsync(_investors: string[], _accredited: boolean[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _accredited: boolean[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _accredited: boolean[]): string;
        callAsync(_investors: string[], _accredited: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeNonAccreditedLimit: {
        sendTransactionAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _nonAccreditedLimit: BigNumber[]): string;
        callAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getAccreditedData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], boolean[], BigNumber[]]>;
    };
    changeAllowBeneficialInvestments: {
        sendTransactionAsync(_allowBeneficialInvestments: boolean, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_allowBeneficialInvestments: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowBeneficialInvestments: boolean): string;
        callAsync(_allowBeneficialInvestments: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithETH: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxDataPayable>): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string): string;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithPOLY: {
        sendTransactionAsync(_beneficiary: string, _investedPOLY: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedPOLY: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber): string;
        callAsync(_beneficiary: string, _investedPOLY: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithUSD: {
        sendTransactionAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _usdToken: string): string;
        callAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithETHRateLimited: {
        sendTransactionAsync(_beneficiary: string, _minTokens: BigNumber, txData?: Partial<TxDataPayable>): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _minTokens: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _minTokens: BigNumber): string;
        callAsync(_beneficiary: string, _minTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithPOLYRateLimited: {
        sendTransactionAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber): string;
        callAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithUSDRateLimited: {
        sendTransactionAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string): string;
        callAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyTokensView: {
        callAsync(_beneficiary: string, _investmentValue: BigNumber, _fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    isOpen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    capReached: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getRate: {
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    convertToUSD: {
        callAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    convertFromUSD: {
        callAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTokensMinted: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTokensSoldFor: {
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getTokensMintedByTier: {
        callAsync(_tier: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getTokensSoldByTier: {
        callAsync(_tier: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getNumberOfTiers: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getUsdTokens: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getSTODetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[], BigNumber, BigNumber, BigNumber, boolean[]]>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=u_s_d_tiered_s_t_o.d.ts.map