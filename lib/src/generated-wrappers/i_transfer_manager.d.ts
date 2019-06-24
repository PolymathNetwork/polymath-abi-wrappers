import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare class ITransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    executeTransfer: {
        sendTransactionAsync(_from: string, _to: string, _amount: BigNumber, _data: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _amount: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, _data: string): string;
        callAsync(_from: string, _to: string, _amount: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, _amount: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ITransferManagerContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=i_transfer_manager.d.ts.map