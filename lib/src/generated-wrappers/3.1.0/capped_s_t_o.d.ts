import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../../PolyResponse';
export declare type CappedSTOEventArgs_3_1_0 = CappedSTOTokenPurchaseEventArgs_3_1_0 | CappedSTOSetAllowBeneficialInvestmentsEventArgs_3_1_0 | CappedSTOReserveTokenMintEventArgs_3_1_0 | CappedSTOReserveTokenTransferEventArgs_3_1_0 | CappedSTOPauseEventArgs_3_1_0 | CappedSTOUnpauseEventArgs_3_1_0 | CappedSTOSetFundRaiseTypesEventArgs_3_1_0 | CappedSTORevokePreMintFlagEventArgs_3_1_0 | CappedSTOAllowPreMintFlagEventArgs_3_1_0;
export declare enum CappedSTOEvents_3_1_0 {
    TokenPurchase = "TokenPurchase",
    SetAllowBeneficialInvestments = "SetAllowBeneficialInvestments",
    ReserveTokenMint = "ReserveTokenMint",
    ReserveTokenTransfer = "ReserveTokenTransfer",
    Pause = "Pause",
    Unpause = "Unpause",
    SetFundRaiseTypes = "SetFundRaiseTypes",
    RevokePreMintFlag = "RevokePreMintFlag",
    AllowPreMintFlag = "AllowPreMintFlag"
}
export interface CappedSTOTokenPurchaseEventArgs_3_1_0 extends DecodedLogArgs {
    purchaser: string;
    beneficiary: string;
    value: BigNumber;
    amount: BigNumber;
}
export interface CappedSTOSetAllowBeneficialInvestmentsEventArgs_3_1_0 extends DecodedLogArgs {
    _allowed: boolean;
}
export interface CappedSTOReserveTokenMintEventArgs_3_1_0 extends DecodedLogArgs {
    _owner: string;
    _wallet: string;
    _tokens: BigNumber;
}
export interface CappedSTOReserveTokenTransferEventArgs_3_1_0 extends DecodedLogArgs {
    _from: string;
    _wallet: string;
    _tokens: BigNumber;
}
export interface CappedSTOPauseEventArgs_3_1_0 extends DecodedLogArgs {
    account: string;
}
export interface CappedSTOUnpauseEventArgs_3_1_0 extends DecodedLogArgs {
    account: string;
}
export interface CappedSTOSetFundRaiseTypesEventArgs_3_1_0 extends DecodedLogArgs {
    _fundRaiseTypes: BigNumber[];
}
export interface CappedSTORevokePreMintFlagEventArgs_3_1_0 extends DecodedLogArgs {
    _owner: string;
    _tokens: BigNumber;
    _preMint: boolean;
}
export interface CappedSTOAllowPreMintFlagEventArgs_3_1_0 extends DecodedLogArgs {
    _owner: string;
    _tokens: BigNumber;
    _preMint: boolean;
}
export declare class CappedSTOContract_3_1_0 extends BaseContract {
    private _defaultEstimateGasFactor;
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
    getTreasuryWallet: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    rate: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
    cap: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
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
    totalTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    investors: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
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
    fundRaiseTypes: {
        callAsync(index_0: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: number | BigNumber): string;
    };
    investorCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    preMintAllowed: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    configure: {
        sendTransactionAsync(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, _treasuryWallet: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, _treasuryWallet: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, _treasuryWallet: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber, _cap: BigNumber, _rate: BigNumber, _fundRaiseTypes: (number | BigNumber)[], _fundsReceiver: string, _treasuryWallet: string): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    allowPreMinting: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    revokePreMintFlag: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    changeAllowBeneficialInvestments: {
        sendTransactionAsync(_allowBeneficialInvestments: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowBeneficialInvestments: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowBeneficialInvestments: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowBeneficialInvestments: boolean): string;
    };
    buyTokens: {
        sendTransactionAsync(_beneficiary: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_beneficiary: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_beneficiary: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_beneficiary: string): string;
    };
    buyTokensWithPoly: {
        sendTransactionAsync(_investedPOLY: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_investedPOLY: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_investedPOLY: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_investedPOLY: BigNumber): string;
    };
    capReached: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    getTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getSTODetails: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, boolean]>;
        getABIEncodedTransactionData(): string;
    };
    finalize: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<CappedSTOContract_3_1_0>;
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
//# sourceMappingURL=capped_s_t_o.d.ts.map