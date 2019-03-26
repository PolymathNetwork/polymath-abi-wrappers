import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class ISTOContract extends BaseContract {
    private _defaultEstimateGasFactor;
    getTokensSold: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=isto.d.ts.map