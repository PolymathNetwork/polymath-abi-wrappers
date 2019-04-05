// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, Provider, TxData, TxDataPayable, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
import { BigNumber, classUtils, logUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { PolyResponse } from '../polyResponse';
import * as ethers from 'ethers';
import * as _ from 'lodash';
// tslint:enable:no-unused-variable

export type VolumeRestrictionTMEventArgs =
    | VolumeRestrictionTMChangedExemptWalletListEventArgs
    | VolumeRestrictionTMAddIndividualRestrictionEventArgs
    | VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs
    | VolumeRestrictionTMModifyIndividualRestrictionEventArgs
    | VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs
    | VolumeRestrictionTMAddDefaultRestrictionEventArgs
    | VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs
    | VolumeRestrictionTMModifyDefaultRestrictionEventArgs
    | VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs
    | VolumeRestrictionTMIndividualRestrictionRemovedEventArgs
    | VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs
    | VolumeRestrictionTMDefaultRestrictionRemovedEventArgs
    | VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs
    | VolumeRestrictionTMPauseEventArgs
    | VolumeRestrictionTMUnpauseEventArgs;

export enum VolumeRestrictionTMEvents {
    ChangedExemptWalletList = 'ChangedExemptWalletList',
    AddIndividualRestriction = 'AddIndividualRestriction',
    AddIndividualDailyRestriction = 'AddIndividualDailyRestriction',
    ModifyIndividualRestriction = 'ModifyIndividualRestriction',
    ModifyIndividualDailyRestriction = 'ModifyIndividualDailyRestriction',
    AddDefaultRestriction = 'AddDefaultRestriction',
    AddDefaultDailyRestriction = 'AddDefaultDailyRestriction',
    ModifyDefaultRestriction = 'ModifyDefaultRestriction',
    ModifyDefaultDailyRestriction = 'ModifyDefaultDailyRestriction',
    IndividualRestrictionRemoved = 'IndividualRestrictionRemoved',
    IndividualDailyRestrictionRemoved = 'IndividualDailyRestrictionRemoved',
    DefaultRestrictionRemoved = 'DefaultRestrictionRemoved',
    DefaultDailyRestrictionRemoved = 'DefaultDailyRestrictionRemoved',
    Pause = 'Pause',
    Unpause = 'Unpause',
}

export interface VolumeRestrictionTMChangedExemptWalletListEventArgs extends DecodedLogArgs {
    _wallet: string;
    _change: boolean;
}

export interface VolumeRestrictionTMAddIndividualRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMModifyIndividualRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMAddDefaultRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMModifyDefaultRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}

export interface VolumeRestrictionTMIndividualRestrictionRemovedEventArgs extends DecodedLogArgs {
    _holder: string;
}

export interface VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs extends DecodedLogArgs {
    _holder: string;
}

export interface VolumeRestrictionTMDefaultRestrictionRemovedEventArgs extends DecodedLogArgs {
}

export interface VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs extends DecodedLogArgs {
}

export interface VolumeRestrictionTMPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}

export interface VolumeRestrictionTMUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class VolumeRestrictionTMContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.unpause.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
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
            const self = this as any as VolumeRestrictionTMContract;
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
    public individualRestriction = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'individualRestriction(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.individualRestriction;
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
            const outputAbi = (_.find(self.abi, {name: 'individualRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public paused = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as VolumeRestrictionTMContract;
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
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
    ]);
            const encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.takeFee.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _amount
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _amount: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _amount: BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
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
            const self = this as any as VolumeRestrictionTMContract;
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
    public polyToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
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
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.pause.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
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
            const self = this as any as VolumeRestrictionTMContract;
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
    public defaultRestriction = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'defaultRestriction()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.defaultRestriction;
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
            const outputAbi = (_.find(self.abi, {name: 'defaultRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public securityToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
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
            const self = this as any as VolumeRestrictionTMContract;
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
    public FEE_ADMIN = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
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
    public defaultDailyRestriction = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'defaultDailyRestriction()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.defaultDailyRestriction;
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
            const outputAbi = (_.find(self.abi, {name: 'defaultDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public exemptAddresses = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'exemptAddresses(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.exemptAddresses;
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
            const outputAbi = (_.find(self.abi, {name: 'exemptAddresses'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public individualDailyRestriction = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'individualDailyRestriction(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.individualDailyRestriction;
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
            const outputAbi = (_.find(self.abi, {name: 'individualDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public verifyTransfer = {
        async sendTransactionAsync(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
            _isTransfer: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ]);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.verifyTransfer.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
            _isTransfer: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
            _isTransfer: boolean,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    index_1,
    _amount,
    index_3,
    _isTransfer
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
            _isTransfer: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'verifyTransfer(address,address,uint256,bytes,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        index_1,
        _amount,
        index_3,
        _isTransfer
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        index_1,
        _amount,
        index_3,
        _isTransfer
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        index_1,
        _amount,
        index_3,
        _isTransfer
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
            const encodedData = ethersFunction.encode([_from,
        index_1,
        _amount,
        index_3,
        _isTransfer
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
            const outputAbi = (_.find(self.abi, {name: 'verifyTransfer'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public changeExemptWalletList = {
        async sendTransactionAsync(
            _wallet: string,
            _change: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('changeExemptWalletList(address,bool)').inputs;
            [_wallet,
    _change
    ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
    _change
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_wallet,
    _change
    ]);
            const encodedData = self._lookupEthersInterface('changeExemptWalletList(address,bool)').functions.changeExemptWalletList.encode([_wallet,
    _change
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.changeExemptWalletList.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _wallet,
    _change
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _wallet: string,
            _change: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('changeExemptWalletList(address,bool)').inputs;
            [_wallet,
    _change
    ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
    _change
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeExemptWalletList(address,bool)').functions.changeExemptWalletList.encode([_wallet,
    _change
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _wallet: string,
            _change: boolean,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('changeExemptWalletList(address,bool)').inputs;
            [_wallet,
    _change
    ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
    _change
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeExemptWalletList(address,bool)').functions.changeExemptWalletList.encode([_wallet,
    _change
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _wallet: string,
            _change: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'changeExemptWalletList(address,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_wallet,
        _change
        ] = BaseContract._formatABIDataItemList(inputAbi, [_wallet,
        _change
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_wallet,
        _change
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeExemptWalletList;
            const encodedData = ethersFunction.encode([_wallet,
        _change
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
            const outputAbi = (_.find(self.abi, {name: 'changeExemptWalletList'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public addIndividualRestriction = {
        async sendTransactionAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').functions.addIndividualRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.addIndividualRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').functions.addIndividualRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').functions.addIndividualRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addIndividualRestriction;
            const encodedData = ethersFunction.encode([_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'addIndividualRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public addIndividualDailyRestriction = {
        async sendTransactionAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').functions.addIndividualDailyRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.addIndividualDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').functions.addIndividualDailyRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').functions.addIndividualDailyRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addIndividualDailyRestriction;
            const encodedData = ethersFunction.encode([_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'addIndividualDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public addIndividualDailyRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            const encodedData = self._lookupEthersInterface('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').functions.addIndividualDailyRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.addIndividualDailyRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').functions.addIndividualDailyRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').functions.addIndividualDailyRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addIndividualDailyRestrictionMulti;
            const encodedData = ethersFunction.encode([_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
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
            const outputAbi = (_.find(self.abi, {name: 'addIndividualDailyRestrictionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public addIndividualRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            const encodedData = self._lookupEthersInterface('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').functions.addIndividualRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.addIndividualRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').functions.addIndividualRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').functions.addIndividualRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addIndividualRestrictionMulti;
            const encodedData = ethersFunction.encode([_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
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
            const outputAbi = (_.find(self.abi, {name: 'addIndividualRestrictionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public addDefaultRestriction = {
        async sendTransactionAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').functions.addDefaultRestriction.encode([_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.addDefaultRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').functions.addDefaultRestriction.encode([_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').functions.addDefaultRestriction.encode([_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addDefaultRestriction;
            const encodedData = ethersFunction.encode([_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'addDefaultRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public addDefaultDailyRestriction = {
        async sendTransactionAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)').functions.addDefaultDailyRestriction.encode([_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.addDefaultDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)').functions.addDefaultDailyRestriction.encode([_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)').functions.addDefaultDailyRestriction.encode([_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'addDefaultDailyRestriction(uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addDefaultDailyRestriction;
            const encodedData = ethersFunction.encode([_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'addDefaultDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeIndividualRestriction = {
        async sendTransactionAsync(
            _holder: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualRestriction(address)').inputs;
            [_holder
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder
    ]);
            const encodedData = self._lookupEthersInterface('removeIndividualRestriction(address)').functions.removeIndividualRestriction.encode([_holder
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.removeIndividualRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holder
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holder: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualRestriction(address)').inputs;
            [_holder
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeIndividualRestriction(address)').functions.removeIndividualRestriction.encode([_holder
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holder: string,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualRestriction(address)').inputs;
            [_holder
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeIndividualRestriction(address)').functions.removeIndividualRestriction.encode([_holder
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holder: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'removeIndividualRestriction(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holder
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeIndividualRestriction;
            const encodedData = ethersFunction.encode([_holder
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
            const outputAbi = (_.find(self.abi, {name: 'removeIndividualRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeIndividualRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualRestrictionMulti(address[])').inputs;
            [_holders
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders
    ]);
            const encodedData = self._lookupEthersInterface('removeIndividualRestrictionMulti(address[])').functions.removeIndividualRestrictionMulti.encode([_holders
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.removeIndividualRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holders
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holders: string[],
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualRestrictionMulti(address[])').inputs;
            [_holders
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeIndividualRestrictionMulti(address[])').functions.removeIndividualRestrictionMulti.encode([_holders
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holders: string[],
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualRestrictionMulti(address[])').inputs;
            [_holders
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeIndividualRestrictionMulti(address[])').functions.removeIndividualRestrictionMulti.encode([_holders
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holders: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'removeIndividualRestrictionMulti(address[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holders
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeIndividualRestrictionMulti;
            const encodedData = ethersFunction.encode([_holders
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
            const outputAbi = (_.find(self.abi, {name: 'removeIndividualRestrictionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeIndividualDailyRestriction = {
        async sendTransactionAsync(
            _holder: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualDailyRestriction(address)').inputs;
            [_holder
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder
    ]);
            const encodedData = self._lookupEthersInterface('removeIndividualDailyRestriction(address)').functions.removeIndividualDailyRestriction.encode([_holder
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.removeIndividualDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holder
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holder: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualDailyRestriction(address)').inputs;
            [_holder
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeIndividualDailyRestriction(address)').functions.removeIndividualDailyRestriction.encode([_holder
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holder: string,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualDailyRestriction(address)').inputs;
            [_holder
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeIndividualDailyRestriction(address)').functions.removeIndividualDailyRestriction.encode([_holder
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holder: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'removeIndividualDailyRestriction(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holder
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holder
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeIndividualDailyRestriction;
            const encodedData = ethersFunction.encode([_holder
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
            const outputAbi = (_.find(self.abi, {name: 'removeIndividualDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeIndividualDailyRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualDailyRestrictionMulti(address[])').inputs;
            [_holders
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders
    ]);
            const encodedData = self._lookupEthersInterface('removeIndividualDailyRestrictionMulti(address[])').functions.removeIndividualDailyRestrictionMulti.encode([_holders
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.removeIndividualDailyRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holders
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holders: string[],
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualDailyRestrictionMulti(address[])').inputs;
            [_holders
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeIndividualDailyRestrictionMulti(address[])').functions.removeIndividualDailyRestrictionMulti.encode([_holders
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holders: string[],
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeIndividualDailyRestrictionMulti(address[])').inputs;
            [_holders
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeIndividualDailyRestrictionMulti(address[])').functions.removeIndividualDailyRestrictionMulti.encode([_holders
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holders: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'removeIndividualDailyRestrictionMulti(address[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holders
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holders
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeIndividualDailyRestrictionMulti;
            const encodedData = ethersFunction.encode([_holders
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
            const outputAbi = (_.find(self.abi, {name: 'removeIndividualDailyRestrictionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeDefaultRestriction = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeDefaultRestriction()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('removeDefaultRestriction()').functions.removeDefaultRestriction.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.removeDefaultRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeDefaultRestriction()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeDefaultRestriction()').functions.removeDefaultRestriction.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeDefaultRestriction()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeDefaultRestriction()').functions.removeDefaultRestriction.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'removeDefaultRestriction()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeDefaultRestriction;
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
            const outputAbi = (_.find(self.abi, {name: 'removeDefaultRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeDefaultDailyRestriction = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeDefaultDailyRestriction()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('removeDefaultDailyRestriction()').functions.removeDefaultDailyRestriction.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.removeDefaultDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeDefaultDailyRestriction()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeDefaultDailyRestriction()').functions.removeDefaultDailyRestriction.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('removeDefaultDailyRestriction()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeDefaultDailyRestriction()').functions.removeDefaultDailyRestriction.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'removeDefaultDailyRestriction()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeDefaultDailyRestriction;
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
            const outputAbi = (_.find(self.abi, {name: 'removeDefaultDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyIndividualRestriction = {
        async sendTransactionAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').functions.modifyIndividualRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.modifyIndividualRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').functions.modifyIndividualRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)').functions.modifyIndividualRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyIndividualRestriction;
            const encodedData = ethersFunction.encode([_holder,
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'modifyIndividualRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyIndividualDailyRestriction = {
        async sendTransactionAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').functions.modifyIndividualDailyRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.modifyIndividualDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').functions.modifyIndividualDailyRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').inputs;
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)').functions.modifyIndividualDailyRestriction.encode([_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyIndividualDailyRestriction;
            const encodedData = ethersFunction.encode([_holder,
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'modifyIndividualDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyIndividualDailyRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            const encodedData = self._lookupEthersInterface('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').functions.modifyIndividualDailyRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.modifyIndividualDailyRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').functions.modifyIndividualDailyRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])').functions.modifyIndividualDailyRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyIndividualDailyRestrictionMulti;
            const encodedData = ethersFunction.encode([_holders,
        _allowedTokens,
        _startTimes,
        _endTimes,
        _restrictionTypes
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
            const outputAbi = (_.find(self.abi, {name: 'modifyIndividualDailyRestrictionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyIndividualRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            const encodedData = self._lookupEthersInterface('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').functions.modifyIndividualRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.modifyIndividualRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').functions.modifyIndividualRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').inputs;
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])').functions.modifyIndividualRestrictionMulti.encode([_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
        ] = BaseContract._formatABIDataItemList(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyIndividualRestrictionMulti;
            const encodedData = ethersFunction.encode([_holders,
        _allowedTokens,
        _startTimes,
        _rollingPeriodInDays,
        _endTimes,
        _restrictionTypes
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
            const outputAbi = (_.find(self.abi, {name: 'modifyIndividualRestrictionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyDefaultRestriction = {
        async sendTransactionAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').functions.modifyDefaultRestriction.encode([_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.modifyDefaultRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').functions.modifyDefaultRestriction.encode([_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)').functions.modifyDefaultRestriction.encode([_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyDefaultRestriction;
            const encodedData = ethersFunction.encode([_allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'modifyDefaultRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyDefaultDailyRestriction = {
        async sendTransactionAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const encodedData = self._lookupEthersInterface('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)').functions.modifyDefaultDailyRestriction.encode([_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.modifyDefaultDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)').functions.modifyDefaultDailyRestriction.encode([_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const inputAbi = self._lookupAbi('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)').inputs;
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)').functions.modifyDefaultDailyRestriction.encode([_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyDefaultDailyRestriction;
            const encodedData = ethersFunction.encode([_allowedTokens,
        _startTime,
        _endTime,
        _restrictionType
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
            const outputAbi = (_.find(self.abi, {name: 'modifyDefaultDailyRestriction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getIndividualBucketDetailsToUser = {
        async callAsync(
            _user: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'getIndividualBucketDetailsToUser(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_user
        ] = BaseContract._formatABIDataItemList(inputAbi, [_user
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_user
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getIndividualBucketDetailsToUser;
            const encodedData = ethersFunction.encode([_user
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
            const outputAbi = (_.find(self.abi, {name: 'getIndividualBucketDetailsToUser'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getDefaultBucketDetailsToUser = {
        async callAsync(
            _user: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'getDefaultBucketDetailsToUser(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_user
        ] = BaseContract._formatABIDataItemList(inputAbi, [_user
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_user
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getDefaultBucketDetailsToUser;
            const encodedData = ethersFunction.encode([_user
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
            const outputAbi = (_.find(self.abi, {name: 'getDefaultBucketDetailsToUser'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getTotalTradedByUser = {
        async callAsync(
            _user: string,
            _at: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'getTotalTradedByUser(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_user,
        _at
        ] = BaseContract._formatABIDataItemList(inputAbi, [_user,
        _at
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_user,
        _at
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTotalTradedByUser;
            const encodedData = ethersFunction.encode([_user,
        _at
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
            const outputAbi = (_.find(self.abi, {name: 'getTotalTradedByUser'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getInitFunction = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
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
    public getExemptAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'getExemptAddress()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getExemptAddress;
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
            const outputAbi = (_.find(self.abi, {name: 'getExemptAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getRestrictedData = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const functionSignature = 'getRestrictedData()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getRestrictedData;
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
            const outputAbi = (_.find(self.abi, {name: 'getRestrictedData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getPermissions = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as VolumeRestrictionTMContract;
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
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('VolumeRestrictionTM', abi, address, provider, txDefaults);
        this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
