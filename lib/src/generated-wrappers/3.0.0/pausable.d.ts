import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
export declare type PausableEventArgs_3_0_0 = PausablePauseEventArgs_3_0_0 | PausableUnpauseEventArgs_3_0_0;
export declare enum PausableEvents_3_0_0 {
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface PausablePauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export interface PausableUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export declare class PausableContract_3_0_0 extends BaseContract {
    private _defaultEstimateGasFactor;
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<PausableContract_3_0_0>;
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
//# sourceMappingURL=pausable.d.ts.map