import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type DetailedERC20EventArgs = DetailedERC20ApprovalEventArgs | DetailedERC20TransferEventArgs;
export declare enum DetailedERC20Events {
    Approval = "Approval",
    Transfer = "Transfer"
}
export interface DetailedERC20ApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}
export interface DetailedERC20TransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export declare class DetailedERC20Contract extends BaseContract {
    private _defaultEstimateGasFactor;
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    approve: {
        sendTransactionAsync(spender: string, value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(spender: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(spender: string, value: BigNumber): string;
        callAsync(spender: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(from: string, to: string, value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(from: string, to: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(from: string, to: string, value: BigNumber): string;
        callAsync(from: string, to: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    decimals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    balanceOf: {
        callAsync(who: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    transfer: {
        sendTransactionAsync(to: string, value: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(to: string, value: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(to: string, value: BigNumber): string;
        callAsync(to: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    allowance: {
        callAsync(owner: string, spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _name: string, _symbol: string, _decimals: number | BigNumber): Promise<DetailedERC20Contract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=detailed_erc20.d.ts.map