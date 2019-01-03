// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, Provider, TxData, TxDataPayable } from 'ethereum-types';
import { BigNumber, classUtils, logUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import * as ethers from 'ethers';
import * as _ from 'lodash';
// tslint:enable:no-unused-variable

export type USDTieredSTOEventArgs =
    | USDTieredSTOSetAllowBeneficialInvestmentsEventArgs
    | USDTieredSTOSetNonAccreditedLimitEventArgs
    | USDTieredSTOSetAccreditedEventArgs
    | USDTieredSTOTokenPurchaseEventArgs
    | USDTieredSTOFundsReceivedEventArgs
    | USDTieredSTOReserveTokenMintEventArgs
    | USDTieredSTOSetAddressesEventArgs
    | USDTieredSTOSetLimitsEventArgs
    | USDTieredSTOSetTimesEventArgs
    | USDTieredSTOSetTiersEventArgs
    | USDTieredSTOSetFundRaiseTypesEventArgs
    | USDTieredSTOPauseEventArgs
    | USDTieredSTOUnpauseEventArgs;

export enum USDTieredSTOEvents {
    SetAllowBeneficialInvestments = 'SetAllowBeneficialInvestments',
    SetNonAccreditedLimit = 'SetNonAccreditedLimit',
    SetAccredited = 'SetAccredited',
    TokenPurchase = 'TokenPurchase',
    FundsReceived = 'FundsReceived',
    ReserveTokenMint = 'ReserveTokenMint',
    SetAddresses = 'SetAddresses',
    SetLimits = 'SetLimits',
    SetTimes = 'SetTimes',
    SetTiers = 'SetTiers',
    SetFundRaiseTypes = 'SetFundRaiseTypes',
    Pause = 'Pause',
    Unpause = 'Unpause',
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
    _usdToken: string;
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


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class USDTieredSTOContract extends BaseContract {
    public tiers = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'tiers(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.tiers;
            const encodedData = ethersFunction.encode([index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'tiers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public allowBeneficialInvestments = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'allowBeneficialInvestments()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowBeneficialInvestments;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'allowBeneficialInvestments'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public endTime = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'endTime()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.endTime;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'endTime'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.unpause.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'unpause()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.unpause;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'unpause'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public nonAccreditedLimitUSD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'nonAccreditedLimitUSD()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.nonAccreditedLimitUSD;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'nonAccreditedLimitUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public wallet = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'wallet()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.wallet;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'wallet'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public paused = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'paused()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.paused;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'paused'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public takeFee = {
        async sendTransactionAsync(
            _amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
    ]);
            const encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.takeFee.estimateGasAsync.bind(
                    self,
                    _amount
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _amount: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'takeFee(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_amount
        ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.takeFee;
            const encodedData = ethersFunction.encode([_amount
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'takeFee'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public totalTokensSold = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'totalTokensSold()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalTokensSold;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'totalTokensSold'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public finalAmountReturned = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'finalAmountReturned()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.finalAmountReturned;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'finalAmountReturned'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public polyToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'polyToken()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.polyToken;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'polyToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public startTime = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'startTime()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.startTime;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'startTime'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public accredited = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'accredited(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.accredited;
            const encodedData = ethersFunction.encode([index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'accredited'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.pause.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'pause()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.pause;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'pause'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public investorInvested = {
        async callAsync(
            index_0: string,
            index_1: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'investorInvested(address,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
        index_1
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorInvested;
            const encodedData = ethersFunction.encode([index_0,
        index_1
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'investorInvested'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public reclaimERC20 = {
        async sendTransactionAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
            [_tokenContract
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract
    ]);
            const encodedData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.reclaimERC20.estimateGasAsync.bind(
                    self,
                    _tokenContract
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
            [_tokenContract
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _tokenContract: string,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
            [_tokenContract
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tokenContract: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'reclaimERC20(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_tokenContract
        ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.reclaimERC20;
            const encodedData = ethersFunction.encode([_tokenContract
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'reclaimERC20'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public isFinalized = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'isFinalized()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isFinalized;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'isFinalized'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public ETH_ORACLE = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'ETH_ORACLE()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.ETH_ORACLE;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'ETH_ORACLE'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getRaised = {
        async callAsync(
            _fundRaiseType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getRaised(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_fundRaiseType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getRaised;
            const encodedData = ethersFunction.encode([_fundRaiseType
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getRaised'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public POLY_ORACLE = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'POLY_ORACLE()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.POLY_ORACLE;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'POLY_ORACLE'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public pausedTime = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'pausedTime()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.pausedTime;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'pausedTime'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public securityToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'securityToken()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.securityToken;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'securityToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public factory = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'factory()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.factory;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'factory'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public fundsRaised = {
        async callAsync(
            index_0: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'fundsRaised(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.fundsRaised;
            const encodedData = ethersFunction.encode([index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'fundsRaised'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public investorInvestedUSD = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'investorInvestedUSD(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorInvestedUSD;
            const encodedData = ethersFunction.encode([index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'investorInvestedUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public fundRaiseTypes = {
        async callAsync(
            index_0: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'fundRaiseTypes(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.fundRaiseTypes;
            const encodedData = ethersFunction.encode([index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'fundRaiseTypes'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public currentTier = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'currentTier()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentTier;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'currentTier'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public FEE_ADMIN = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'FEE_ADMIN()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.FEE_ADMIN;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'FEE_ADMIN'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public reserveWallet = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'reserveWallet()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.reserveWallet;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'reserveWallet'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public investorCount = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'investorCount()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorCount;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'investorCount'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public nonAccreditedLimitUSDOverride = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'nonAccreditedLimitUSDOverride(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.nonAccreditedLimitUSDOverride;
            const encodedData = ethersFunction.encode([index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'nonAccreditedLimitUSDOverride'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public minimumInvestmentUSD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'minimumInvestmentUSD()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.minimumInvestmentUSD;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'minimumInvestmentUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public usdToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'usdToken()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.usdToken;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'usdToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public fundsRaisedUSD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'fundsRaisedUSD()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.fundsRaisedUSD;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'fundsRaisedUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public configure = {
        async sendTransactionAsync(
            _startTime: BigNumber,
            _endTime: BigNumber,
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            _fundRaiseTypes: Array<number|BigNumber>,
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)').inputs;
            [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ]);
            const encodedData = self._lookupEthersInterface('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)').functions.configure.encode([_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.configure.estimateGasAsync.bind(
                    self,
                    _startTime,
                    _endTime,
                    _ratePerTier,
                    _ratePerTierDiscountPoly,
                    _tokensPerTierTotal,
                    _tokensPerTierDiscountPoly,
                    _nonAccreditedLimitUSD,
                    _minimumInvestmentUSD,
                    _fundRaiseTypes,
                    _wallet,
                    _reserveWallet,
                    _usdToken
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _startTime: BigNumber,
            _endTime: BigNumber,
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            _fundRaiseTypes: Array<number|BigNumber>,
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)').inputs;
            [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)').functions.configure.encode([_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _startTime: BigNumber,
            _endTime: BigNumber,
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            _fundRaiseTypes: Array<number|BigNumber>,
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)').inputs;
            [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)').functions.configure.encode([_startTime,
    _endTime,
    _ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly,
    _nonAccreditedLimitUSD,
    _minimumInvestmentUSD,
    _fundRaiseTypes,
    _wallet,
    _reserveWallet,
    _usdToken
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _startTime: BigNumber,
            _endTime: BigNumber,
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            _fundRaiseTypes: Array<number|BigNumber>,
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_startTime,
        _endTime,
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
        _fundRaiseTypes,
        _wallet,
        _reserveWallet,
        _usdToken
        ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
        _endTime,
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
        _fundRaiseTypes,
        _wallet,
        _reserveWallet,
        _usdToken
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
        _endTime,
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
        _fundRaiseTypes,
        _wallet,
        _reserveWallet,
        _usdToken
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.configure;
            const encodedData = ethersFunction.encode([_startTime,
        _endTime,
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
        _fundRaiseTypes,
        _wallet,
        _reserveWallet,
        _usdToken
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'configure'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyFunding = {
        async sendTransactionAsync(
            _fundRaiseTypes: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyFunding(uint8[])').inputs;
            [_fundRaiseTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseTypes
    ]);
            const encodedData = self._lookupEthersInterface('modifyFunding(uint8[])').functions.modifyFunding.encode([_fundRaiseTypes
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyFunding.estimateGasAsync.bind(
                    self,
                    _fundRaiseTypes
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _fundRaiseTypes: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyFunding(uint8[])').inputs;
            [_fundRaiseTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyFunding(uint8[])').functions.modifyFunding.encode([_fundRaiseTypes
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _fundRaiseTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyFunding(uint8[])').inputs;
            [_fundRaiseTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyFunding(uint8[])').functions.modifyFunding.encode([_fundRaiseTypes
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _fundRaiseTypes: Array<number|BigNumber>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'modifyFunding(uint8[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_fundRaiseTypes
        ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseTypes
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyFunding;
            const encodedData = ethersFunction.encode([_fundRaiseTypes
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'modifyFunding'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyLimits = {
        async sendTransactionAsync(
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyLimits(uint256,uint256)').inputs;
            [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ] = BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ]);
            const encodedData = self._lookupEthersInterface('modifyLimits(uint256,uint256)').functions.modifyLimits.encode([_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyLimits.estimateGasAsync.bind(
                    self,
                    _nonAccreditedLimitUSD,
                    _minimumInvestmentUSD
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyLimits(uint256,uint256)').inputs;
            [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ] = BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyLimits(uint256,uint256)').functions.modifyLimits.encode([_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyLimits(uint256,uint256)').inputs;
            [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ] = BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyLimits(uint256,uint256)').functions.modifyLimits.encode([_nonAccreditedLimitUSD,
    _minimumInvestmentUSD
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _nonAccreditedLimitUSD: BigNumber,
            _minimumInvestmentUSD: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'modifyLimits(uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_nonAccreditedLimitUSD,
        _minimumInvestmentUSD
        ] = BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
        _minimumInvestmentUSD
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_nonAccreditedLimitUSD,
        _minimumInvestmentUSD
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyLimits;
            const encodedData = ethersFunction.encode([_nonAccreditedLimitUSD,
        _minimumInvestmentUSD
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'modifyLimits'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyTiers = {
        async sendTransactionAsync(
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyTiers(uint256[],uint256[],uint256[],uint256[])').inputs;
            [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ] = BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ]);
            const encodedData = self._lookupEthersInterface('modifyTiers(uint256[],uint256[],uint256[],uint256[])').functions.modifyTiers.encode([_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyTiers.estimateGasAsync.bind(
                    self,
                    _ratePerTier,
                    _ratePerTierDiscountPoly,
                    _tokensPerTierTotal,
                    _tokensPerTierDiscountPoly
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyTiers(uint256[],uint256[],uint256[],uint256[])').inputs;
            [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ] = BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyTiers(uint256[],uint256[],uint256[],uint256[])').functions.modifyTiers.encode([_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyTiers(uint256[],uint256[],uint256[],uint256[])').inputs;
            [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ] = BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyTiers(uint256[],uint256[],uint256[],uint256[])').functions.modifyTiers.encode([_ratePerTier,
    _ratePerTierDiscountPoly,
    _tokensPerTierTotal,
    _tokensPerTierDiscountPoly
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _ratePerTier: BigNumber[],
            _ratePerTierDiscountPoly: BigNumber[],
            _tokensPerTierTotal: BigNumber[],
            _tokensPerTierDiscountPoly: BigNumber[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'modifyTiers(uint256[],uint256[],uint256[],uint256[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly
        ] = BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyTiers;
            const encodedData = ethersFunction.encode([_ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'modifyTiers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyTimes = {
        async sendTransactionAsync(
            _startTime: BigNumber,
            _endTime: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyTimes(uint256,uint256)').inputs;
            [_startTime,
    _endTime
    ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
    _endTime
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
    _endTime
    ]);
            const encodedData = self._lookupEthersInterface('modifyTimes(uint256,uint256)').functions.modifyTimes.encode([_startTime,
    _endTime
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyTimes.estimateGasAsync.bind(
                    self,
                    _startTime,
                    _endTime
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _startTime: BigNumber,
            _endTime: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyTimes(uint256,uint256)').inputs;
            [_startTime,
    _endTime
    ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
    _endTime
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyTimes(uint256,uint256)').functions.modifyTimes.encode([_startTime,
    _endTime
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _startTime: BigNumber,
            _endTime: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyTimes(uint256,uint256)').inputs;
            [_startTime,
    _endTime
    ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
    _endTime
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyTimes(uint256,uint256)').functions.modifyTimes.encode([_startTime,
    _endTime
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _startTime: BigNumber,
            _endTime: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'modifyTimes(uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_startTime,
        _endTime
        ] = BaseContract._formatABIDataItemList(inputAbi, [_startTime,
        _endTime
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
        _endTime
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyTimes;
            const encodedData = ethersFunction.encode([_startTime,
        _endTime
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'modifyTimes'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyAddresses = {
        async sendTransactionAsync(
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyAddresses(address,address,address)').inputs;
            [_wallet,
    _reserveWallet,
    _usdToken
    ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
    _reserveWallet,
    _usdToken
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_wallet,
    _reserveWallet,
    _usdToken
    ]);
            const encodedData = self._lookupEthersInterface('modifyAddresses(address,address,address)').functions.modifyAddresses.encode([_wallet,
    _reserveWallet,
    _usdToken
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyAddresses.estimateGasAsync.bind(
                    self,
                    _wallet,
                    _reserveWallet,
                    _usdToken
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyAddresses(address,address,address)').inputs;
            [_wallet,
    _reserveWallet,
    _usdToken
    ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
    _reserveWallet,
    _usdToken
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyAddresses(address,address,address)').functions.modifyAddresses.encode([_wallet,
    _reserveWallet,
    _usdToken
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('modifyAddresses(address,address,address)').inputs;
            [_wallet,
    _reserveWallet,
    _usdToken
    ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
    _reserveWallet,
    _usdToken
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyAddresses(address,address,address)').functions.modifyAddresses.encode([_wallet,
    _reserveWallet,
    _usdToken
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _wallet: string,
            _reserveWallet: string,
            _usdToken: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'modifyAddresses(address,address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_wallet,
        _reserveWallet,
        _usdToken
        ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
        _reserveWallet,
        _usdToken
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_wallet,
        _reserveWallet,
        _usdToken
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyAddresses;
            const encodedData = ethersFunction.encode([_wallet,
        _reserveWallet,
        _usdToken
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'modifyAddresses'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public finalize = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('finalize()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('finalize()').functions.finalize.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.finalize.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('finalize()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('finalize()').functions.finalize.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('finalize()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('finalize()').functions.finalize.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'finalize()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.finalize;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'finalize'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeAccredited = {
        async sendTransactionAsync(
            _investors: string[],
            _accredited: boolean[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeAccredited(address[],bool[])').inputs;
            [_investors,
    _accredited
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _accredited
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
    _accredited
    ]);
            const encodedData = self._lookupEthersInterface('changeAccredited(address[],bool[])').functions.changeAccredited.encode([_investors,
    _accredited
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeAccredited.estimateGasAsync.bind(
                    self,
                    _investors,
                    _accredited
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investors: string[],
            _accredited: boolean[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeAccredited(address[],bool[])').inputs;
            [_investors,
    _accredited
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _accredited
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAccredited(address[],bool[])').functions.changeAccredited.encode([_investors,
    _accredited
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _investors: string[],
            _accredited: boolean[],
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeAccredited(address[],bool[])').inputs;
            [_investors,
    _accredited
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _accredited
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAccredited(address[],bool[])').functions.changeAccredited.encode([_investors,
    _accredited
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _accredited: boolean[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'changeAccredited(address[],bool[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors,
        _accredited
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
        _accredited
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
        _accredited
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAccredited;
            const encodedData = ethersFunction.encode([_investors,
        _accredited
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'changeAccredited'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeNonAccreditedLimit = {
        async sendTransactionAsync(
            _investors: string[],
            _nonAccreditedLimit: BigNumber[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeNonAccreditedLimit(address[],uint256[])').inputs;
            [_investors,
    _nonAccreditedLimit
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _nonAccreditedLimit
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
    _nonAccreditedLimit
    ]);
            const encodedData = self._lookupEthersInterface('changeNonAccreditedLimit(address[],uint256[])').functions.changeNonAccreditedLimit.encode([_investors,
    _nonAccreditedLimit
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeNonAccreditedLimit.estimateGasAsync.bind(
                    self,
                    _investors,
                    _nonAccreditedLimit
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investors: string[],
            _nonAccreditedLimit: BigNumber[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeNonAccreditedLimit(address[],uint256[])').inputs;
            [_investors,
    _nonAccreditedLimit
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _nonAccreditedLimit
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeNonAccreditedLimit(address[],uint256[])').functions.changeNonAccreditedLimit.encode([_investors,
    _nonAccreditedLimit
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _investors: string[],
            _nonAccreditedLimit: BigNumber[],
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeNonAccreditedLimit(address[],uint256[])').inputs;
            [_investors,
    _nonAccreditedLimit
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _nonAccreditedLimit
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeNonAccreditedLimit(address[],uint256[])').functions.changeNonAccreditedLimit.encode([_investors,
    _nonAccreditedLimit
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _nonAccreditedLimit: BigNumber[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'changeNonAccreditedLimit(address[],uint256[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors,
        _nonAccreditedLimit
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
        _nonAccreditedLimit
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
        _nonAccreditedLimit
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeNonAccreditedLimit;
            const encodedData = ethersFunction.encode([_investors,
        _nonAccreditedLimit
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'changeNonAccreditedLimit'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeAllowBeneficialInvestments = {
        async sendTransactionAsync(
            _allowBeneficialInvestments: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeAllowBeneficialInvestments(bool)').inputs;
            [_allowBeneficialInvestments
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowBeneficialInvestments
    ]);
            const encodedData = self._lookupEthersInterface('changeAllowBeneficialInvestments(bool)').functions.changeAllowBeneficialInvestments.encode([_allowBeneficialInvestments
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeAllowBeneficialInvestments.estimateGasAsync.bind(
                    self,
                    _allowBeneficialInvestments
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _allowBeneficialInvestments: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeAllowBeneficialInvestments(bool)').inputs;
            [_allowBeneficialInvestments
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAllowBeneficialInvestments(bool)').functions.changeAllowBeneficialInvestments.encode([_allowBeneficialInvestments
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _allowBeneficialInvestments: boolean,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('changeAllowBeneficialInvestments(bool)').inputs;
            [_allowBeneficialInvestments
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAllowBeneficialInvestments(bool)').functions.changeAllowBeneficialInvestments.encode([_allowBeneficialInvestments
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowBeneficialInvestments: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'changeAllowBeneficialInvestments(bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowBeneficialInvestments
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowBeneficialInvestments
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowBeneficialInvestments;
            const encodedData = ethersFunction.encode([_allowBeneficialInvestments
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'changeAllowBeneficialInvestments'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyWithETH = {
        async sendTransactionAsync(
            _beneficiary: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithETH(address)').inputs;
            [_beneficiary
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary
    ]);
            const encodedData = self._lookupEthersInterface('buyWithETH(address)').functions.buyWithETH.encode([_beneficiary
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.buyWithETH.estimateGasAsync.bind(
                    self,
                    _beneficiary
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _beneficiary: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithETH(address)').inputs;
            [_beneficiary
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('buyWithETH(address)').functions.buyWithETH.encode([_beneficiary
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _beneficiary: string,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithETH(address)').inputs;
            [_beneficiary
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('buyWithETH(address)').functions.buyWithETH.encode([_beneficiary
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _beneficiary: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyWithETH(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithETH;
            const encodedData = ethersFunction.encode([_beneficiary
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyWithETH'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyWithPOLY = {
        async sendTransactionAsync(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithPOLY(address,uint256)').inputs;
            [_beneficiary,
    _investedPOLY
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedPOLY
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
    _investedPOLY
    ]);
            const encodedData = self._lookupEthersInterface('buyWithPOLY(address,uint256)').functions.buyWithPOLY.encode([_beneficiary,
    _investedPOLY
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.buyWithPOLY.estimateGasAsync.bind(
                    self,
                    _beneficiary,
                    _investedPOLY
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithPOLY(address,uint256)').inputs;
            [_beneficiary,
    _investedPOLY
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedPOLY
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('buyWithPOLY(address,uint256)').functions.buyWithPOLY.encode([_beneficiary,
    _investedPOLY
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _beneficiary: string,
            _investedPOLY: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithPOLY(address,uint256)').inputs;
            [_beneficiary,
    _investedPOLY
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedPOLY
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('buyWithPOLY(address,uint256)').functions.buyWithPOLY.encode([_beneficiary,
    _investedPOLY
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyWithPOLY(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary,
        _investedPOLY
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
        _investedPOLY
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
        _investedPOLY
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithPOLY;
            const encodedData = ethersFunction.encode([_beneficiary,
        _investedPOLY
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyWithPOLY'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyWithUSD = {
        async sendTransactionAsync(
            _beneficiary: string,
            _investedDAI: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithUSD(address,uint256)').inputs;
            [_beneficiary,
    _investedDAI
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedDAI
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
    _investedDAI
    ]);
            const encodedData = self._lookupEthersInterface('buyWithUSD(address,uint256)').functions.buyWithUSD.encode([_beneficiary,
    _investedDAI
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.buyWithUSD.estimateGasAsync.bind(
                    self,
                    _beneficiary,
                    _investedDAI
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _beneficiary: string,
            _investedDAI: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithUSD(address,uint256)').inputs;
            [_beneficiary,
    _investedDAI
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedDAI
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('buyWithUSD(address,uint256)').functions.buyWithUSD.encode([_beneficiary,
    _investedDAI
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _beneficiary: string,
            _investedDAI: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithUSD(address,uint256)').inputs;
            [_beneficiary,
    _investedDAI
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedDAI
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('buyWithUSD(address,uint256)').functions.buyWithUSD.encode([_beneficiary,
    _investedDAI
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _beneficiary: string,
            _investedDAI: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyWithUSD(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary,
        _investedDAI
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
        _investedDAI
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
        _investedDAI
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithUSD;
            const encodedData = ethersFunction.encode([_beneficiary,
        _investedDAI
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyWithUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyWithETHRateLimited = {
        async sendTransactionAsync(
            _beneficiary: string,
            _minTokens: BigNumber,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithETHRateLimited(address,uint256)').inputs;
            [_beneficiary,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _minTokens
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
    _minTokens
    ]);
            const encodedData = self._lookupEthersInterface('buyWithETHRateLimited(address,uint256)').functions.buyWithETHRateLimited.encode([_beneficiary,
    _minTokens
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.buyWithETHRateLimited.estimateGasAsync.bind(
                    self,
                    _beneficiary,
                    _minTokens
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _beneficiary: string,
            _minTokens: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithETHRateLimited(address,uint256)').inputs;
            [_beneficiary,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _minTokens
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('buyWithETHRateLimited(address,uint256)').functions.buyWithETHRateLimited.encode([_beneficiary,
    _minTokens
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _beneficiary: string,
            _minTokens: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithETHRateLimited(address,uint256)').inputs;
            [_beneficiary,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _minTokens
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('buyWithETHRateLimited(address,uint256)').functions.buyWithETHRateLimited.encode([_beneficiary,
    _minTokens
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _beneficiary: string,
            _minTokens: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyWithETHRateLimited(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary,
        _minTokens
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
        _minTokens
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
        _minTokens
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithETHRateLimited;
            const encodedData = ethersFunction.encode([_beneficiary,
        _minTokens
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyWithETHRateLimited'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyWithPOLYRateLimited = {
        async sendTransactionAsync(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            _minTokens: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithPOLYRateLimited(address,uint256,uint256)').inputs;
            [_beneficiary,
    _investedPOLY,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedPOLY,
    _minTokens
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
    _investedPOLY,
    _minTokens
    ]);
            const encodedData = self._lookupEthersInterface('buyWithPOLYRateLimited(address,uint256,uint256)').functions.buyWithPOLYRateLimited.encode([_beneficiary,
    _investedPOLY,
    _minTokens
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.buyWithPOLYRateLimited.estimateGasAsync.bind(
                    self,
                    _beneficiary,
                    _investedPOLY,
                    _minTokens
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            _minTokens: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithPOLYRateLimited(address,uint256,uint256)').inputs;
            [_beneficiary,
    _investedPOLY,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedPOLY,
    _minTokens
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('buyWithPOLYRateLimited(address,uint256,uint256)').functions.buyWithPOLYRateLimited.encode([_beneficiary,
    _investedPOLY,
    _minTokens
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            _minTokens: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithPOLYRateLimited(address,uint256,uint256)').inputs;
            [_beneficiary,
    _investedPOLY,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedPOLY,
    _minTokens
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('buyWithPOLYRateLimited(address,uint256,uint256)').functions.buyWithPOLYRateLimited.encode([_beneficiary,
    _investedPOLY,
    _minTokens
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _beneficiary: string,
            _investedPOLY: BigNumber,
            _minTokens: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyWithPOLYRateLimited(address,uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary,
        _investedPOLY,
        _minTokens
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
        _investedPOLY,
        _minTokens
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
        _investedPOLY,
        _minTokens
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithPOLYRateLimited;
            const encodedData = ethersFunction.encode([_beneficiary,
        _investedPOLY,
        _minTokens
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyWithPOLYRateLimited'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyWithUSDRateLimited = {
        async sendTransactionAsync(
            _beneficiary: string,
            _investedDAI: BigNumber,
            _minTokens: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithUSDRateLimited(address,uint256,uint256)').inputs;
            [_beneficiary,
    _investedDAI,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedDAI,
    _minTokens
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
    _investedDAI,
    _minTokens
    ]);
            const encodedData = self._lookupEthersInterface('buyWithUSDRateLimited(address,uint256,uint256)').functions.buyWithUSDRateLimited.encode([_beneficiary,
    _investedDAI,
    _minTokens
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.buyWithUSDRateLimited.estimateGasAsync.bind(
                    self,
                    _beneficiary,
                    _investedDAI,
                    _minTokens
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _beneficiary: string,
            _investedDAI: BigNumber,
            _minTokens: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithUSDRateLimited(address,uint256,uint256)').inputs;
            [_beneficiary,
    _investedDAI,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedDAI,
    _minTokens
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('buyWithUSDRateLimited(address,uint256,uint256)').functions.buyWithUSDRateLimited.encode([_beneficiary,
    _investedDAI,
    _minTokens
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _beneficiary: string,
            _investedDAI: BigNumber,
            _minTokens: BigNumber,
        ): string {
            const self = this as any as USDTieredSTOContract;
            const inputAbi = self._lookupAbi('buyWithUSDRateLimited(address,uint256,uint256)').inputs;
            [_beneficiary,
    _investedDAI,
    _minTokens
    ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
    _investedDAI,
    _minTokens
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('buyWithUSDRateLimited(address,uint256,uint256)').functions.buyWithUSDRateLimited.encode([_beneficiary,
    _investedDAI,
    _minTokens
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _beneficiary: string,
            _investedDAI: BigNumber,
            _minTokens: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyWithUSDRateLimited(address,uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary,
        _investedDAI,
        _minTokens
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
        _investedDAI,
        _minTokens
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
        _investedDAI,
        _minTokens
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithUSDRateLimited;
            const encodedData = ethersFunction.encode([_beneficiary,
        _investedDAI,
        _minTokens
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyWithUSDRateLimited'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public buyTokensView = {
        async callAsync(
            _beneficiary: string,
            _investmentValue: BigNumber,
            _fundRaiseType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'buyTokensView(address,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_beneficiary,
        _investmentValue,
        _fundRaiseType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
        _investmentValue,
        _fundRaiseType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
        _investmentValue,
        _fundRaiseType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyTokensView;
            const encodedData = ethersFunction.encode([_beneficiary,
        _investmentValue,
        _fundRaiseType
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'buyTokensView'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public isOpen = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'isOpen()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isOpen;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'isOpen'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public capReached = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'capReached()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.capReached;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'capReached'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getRate = {
        async callAsync(
            _fundRaiseType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getRate(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_fundRaiseType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getRate;
            const encodedData = ethersFunction.encode([_fundRaiseType
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getRate'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public convertToUSD = {
        async callAsync(
            _fundRaiseType: number|BigNumber,
            _amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'convertToUSD(uint8,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_fundRaiseType,
        _amount
        ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType,
        _amount
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType,
        _amount
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.convertToUSD;
            const encodedData = ethersFunction.encode([_fundRaiseType,
        _amount
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'convertToUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public convertFromUSD = {
        async callAsync(
            _fundRaiseType: number|BigNumber,
            _amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'convertFromUSD(uint8,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_fundRaiseType,
        _amount
        ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType,
        _amount
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType,
        _amount
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.convertFromUSD;
            const encodedData = ethersFunction.encode([_fundRaiseType,
        _amount
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'convertFromUSD'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTokensSold = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getTokensSold()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensSold;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getTokensSold'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTokensMinted = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getTokensMinted()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensMinted;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getTokensMinted'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTokensSoldFor = {
        async callAsync(
            _fundRaiseType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getTokensSoldFor(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_fundRaiseType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensSoldFor;
            const encodedData = ethersFunction.encode([_fundRaiseType
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getTokensSoldFor'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTokensMintedByTier = {
        async callAsync(
            _tier: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getTokensMintedByTier(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_tier
        ] = BaseContract._formatABIDataItemList(inputAbi, [_tier
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tier
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensMintedByTier;
            const encodedData = ethersFunction.encode([_tier
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getTokensMintedByTier'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTokensSoldByTier = {
        async callAsync(
            _tier: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getTokensSoldByTier(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_tier
        ] = BaseContract._formatABIDataItemList(inputAbi, [_tier
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tier
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensSoldByTier;
            const encodedData = ethersFunction.encode([_tier
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getTokensSoldByTier'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getNumberOfTiers = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getNumberOfTiers()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getNumberOfTiers;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getNumberOfTiers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getPermissions = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getPermissions()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getPermissions;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getPermissions'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getSTODetails = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[], BigNumber, BigNumber, BigNumber, boolean[]]
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getSTODetails()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getSTODetails;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getSTODetails'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getInitFunction = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as USDTieredSTOContract;
            const functionSignature = 'getInitFunction()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInitFunction;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getInitFunction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _securityToken: string,
            _polyAddress: string,
    ): Promise<USDTieredSTOContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return USDTieredSTOContract.deployAsync(bytecode, abi, provider, txDefaults, _securityToken,
_polyAddress
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _securityToken: string,
            _polyAddress: string,
    ): Promise<USDTieredSTOContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_securityToken,
_polyAddress
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_securityToken,
_polyAddress
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_securityToken,
_polyAddress
]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`USDTieredSTO successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new USDTieredSTOContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_securityToken,
_polyAddress
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('USDTieredSTO', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
