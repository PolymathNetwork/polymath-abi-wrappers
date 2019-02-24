import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData, TxDataPayable } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type CappedSTOEventArgs = CappedSTOTokenPurchaseEventArgs | CappedSTOSetAllowBeneficialInvestmentsEventArgs | CappedSTOSetFundRaiseTypesEventArgs | CappedSTOPauseEventArgs | CappedSTOUnpauseEventArgs;
export declare enum CappedSTOEvents {
    TokenPurchase = "TokenPurchase",
    SetAllowBeneficialInvestments = "SetAllowBeneficialInvestments",
    SetFundRaiseTypes = "SetFundRaiseTypes",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface CappedSTOTokenPurchaseEventArgs extends DecodedLogArgs {
    purchaser: string;
    beneficiary: string;
    value: BigNumber;
    amount: BigNumber;
}
export interface CappedSTOSetAllowBeneficialInvestmentsEventArgs extends DecodedLogArgs {
    _allowed: boolean;
}
export interface CappedSTOSetFundRaiseTypesEventArgs extends DecodedLogArgs {
    _fundRaiseTypes: BigNumber[];
}
export interface CappedSTOPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}
export interface CappedSTOUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}
export declare class CappedSTOContract extends BaseContract {
    rate: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    allowBeneficialInvestments: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    endTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    cap: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    wallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_amount: BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    totalTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    investors: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    startTime: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
    fundRaiseTypes: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    FEE_ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    investorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    configure: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string): string;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeAllowBeneficialInvestments: {
        sendTransactionAsync(_allowBeneficialInvestments: boolean, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_allowBeneficialInvestments: boolean, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_allowBeneficialInvestments: boolean): string;
        callAsync(_allowBeneficialInvestments: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyTokens: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxDataPayable>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_beneficiary: string): string;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    buyTokensWithPoly: {
        sendTransactionAsync(_investedPOLY: BigNumber, txData?: Partial<TxData>, factor?: number): Promise<PolyResponse>;
        estimateGasAsync(_investedPOLY: BigNumber, factor: number, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_investedPOLY: BigNumber): string;
        callAsync(_investedPOLY: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    capReached: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    getSTODetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean]>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=capped_s_t_o.d.ts.map