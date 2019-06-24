import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
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
    allowBeneficialInvestments: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    endTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    treasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    totalTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    finalAmountReturned: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    investorInvested: {
        callAsync(index_0: string, index_1: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isFinalized: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getRaised: {
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    pausedTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    investorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    nonAccreditedLimitUSDOverride: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    minimumInvestmentUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    fundsRaisedUSD: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    configure: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[]): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], _nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _wallet: string, _treasuryWallet: string, _usdTokens: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyFunding: {
        sendTransactionAsync(_fundRaiseTypes: (number | BigNumber)[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fundRaiseTypes: (number | BigNumber)[]): string;
        callAsync(_fundRaiseTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyLimits: {
        sendTransactionAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber): string;
        callAsync(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyTiers: {
        sendTransactionAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[]): string;
        callAsync(_ratePerTier: BigNumber[], _ratePerTierDiscountPoly: BigNumber[], _tokensPerTierTotal: BigNumber[], _tokensPerTierDiscountPoly: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyTimes: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyAddresses: {
        sendTransactionAsync(_wallet: string, _treasuryWallet: string, _usdTokens: string[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, _treasuryWallet: string, _usdTokens: string[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_wallet: string, _treasuryWallet: string, _usdTokens: string[]): string;
        callAsync(_wallet: string, _treasuryWallet: string, _usdTokens: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    modifyOracle: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, _oracleAddress: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, _oracleAddress: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _oracleAddress: string): string;
        callAsync(_fundRaiseType: number | BigNumber, _oracleAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    finalize: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeNonAccreditedLimit: {
        sendTransactionAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investors: string[], _nonAccreditedLimit: BigNumber[]): string;
        callAsync(_investors: string[], _nonAccreditedLimit: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getAccreditedData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], boolean[], BigNumber[]]>;
    };
    changeAllowBeneficialInvestments: {
        sendTransactionAsync(_allowBeneficialInvestments: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowBeneficialInvestments: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowBeneficialInvestments: boolean): string;
        callAsync(_allowBeneficialInvestments: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyWithETH: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxDataPayable>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string): string;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    buyWithPOLY: {
        sendTransactionAsync(_beneficiary: string, _investedPOLY: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedPOLY: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber): string;
        callAsync(_beneficiary: string, _investedPOLY: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    buyWithUSD: {
        sendTransactionAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _usdToken: string): string;
        callAsync(_beneficiary: string, _investedSC: BigNumber, _usdToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    buyWithETHRateLimited: {
        sendTransactionAsync(_beneficiary: string, _minTokens: BigNumber, txData?: Partial<TxDataPayable>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _minTokens: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _minTokens: BigNumber): string;
        callAsync(_beneficiary: string, _minTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    buyWithPOLYRateLimited: {
        sendTransactionAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber): string;
        callAsync(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    buyWithUSDRateLimited: {
        sendTransactionAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string): string;
        callAsync(_beneficiary: string, _investedSC: BigNumber, _minTokens: BigNumber, _usdToken: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    isOpen: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    capReached: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getRate: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string;
        callAsync(_fundRaiseType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    convertToUSD: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _amount: BigNumber): string;
        callAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    convertFromUSD: {
        sendTransactionAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_fundRaiseType: number | BigNumber, _amount: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _amount: BigNumber): string;
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
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<USDTieredSTOContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=u_s_d_tiered_s_t_o.d.ts.map