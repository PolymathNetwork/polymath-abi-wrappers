import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
export declare type PausableEventArgs = PausablePauseEventArgs | PausableUnpauseEventArgs;
export declare enum PausableEvents {
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface PausablePauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface PausableUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class PausableContract extends BaseContract {
    private _defaultEstimateGasFactor;
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<PausableContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=pausable.d.ts.map