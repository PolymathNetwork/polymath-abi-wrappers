import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare class ITransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor;
    executeTransfer: {
        sendTransactionAsync(_from: string, _to: string, _amount: BigNumber, _data: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, _to: string, _amount: BigNumber, _data: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _amount: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, _data: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, _to: string, _amount: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, _data: string): string;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ITransferManagerContract>;
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
//# sourceMappingURL=i_transfer_manager.d.ts.map