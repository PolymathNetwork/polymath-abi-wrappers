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

export type EtherDividendCheckpointEventArgs =
    | EtherDividendCheckpointEtherDividendDepositedEventArgs
    | EtherDividendCheckpointEtherDividendClaimedEventArgs
    | EtherDividendCheckpointEtherDividendReclaimedEventArgs
    | EtherDividendCheckpointEtherDividendClaimFailedEventArgs
    | EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs
    | EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs
    | EtherDividendCheckpointSetWithholdingEventArgs
    | EtherDividendCheckpointSetWithholdingFixedEventArgs;

export enum EtherDividendCheckpointEvents {
    EtherDividendDeposited = 'EtherDividendDeposited',
    EtherDividendClaimed = 'EtherDividendClaimed',
    EtherDividendReclaimed = 'EtherDividendReclaimed',
    EtherDividendClaimFailed = 'EtherDividendClaimFailed',
    EtherDividendWithholdingWithdrawn = 'EtherDividendWithholdingWithdrawn',
    SetDefaultExcludedAddresses = 'SetDefaultExcludedAddresses',
    SetWithholding = 'SetWithholding',
    SetWithholdingFixed = 'SetWithholdingFixed',
}

export interface EtherDividendCheckpointEtherDividendDepositedEventArgs extends DecodedLogArgs {
    _depositor: string;
    _checkpointId: BigNumber;
    _created: BigNumber;
    _maturity: BigNumber;
    _expiry: BigNumber;
    _amount: BigNumber;
    _totalSupply: BigNumber;
    _dividendIndex: BigNumber;
    _name: string;
}

export interface EtherDividendCheckpointEtherDividendClaimedEventArgs extends DecodedLogArgs {
    _payee: string;
    _dividendIndex: BigNumber;
    _amount: BigNumber;
    _withheld: BigNumber;
}

export interface EtherDividendCheckpointEtherDividendReclaimedEventArgs extends DecodedLogArgs {
    _claimer: string;
    _dividendIndex: BigNumber;
    _claimedAmount: BigNumber;
}

export interface EtherDividendCheckpointEtherDividendClaimFailedEventArgs extends DecodedLogArgs {
    _payee: string;
    _dividendIndex: BigNumber;
    _amount: BigNumber;
    _withheld: BigNumber;
}

export interface EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs extends DecodedLogArgs {
    _claimer: string;
    _dividendIndex: BigNumber;
    _withheldAmount: BigNumber;
}

export interface EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs extends DecodedLogArgs {
    _excluded: string[];
    _timestamp: BigNumber;
}

export interface EtherDividendCheckpointSetWithholdingEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber[];
    _timestamp: BigNumber;
}

export interface EtherDividendCheckpointSetWithholdingFixedEventArgs extends DecodedLogArgs {
    _investors: string[];
    _withholding: BigNumber;
    _timestamp: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class EtherDividendCheckpointContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public setWithholdingFixed = {
        async sendTransactionAsync(
            _investors: string[],
            _withholding: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setWithholdingFixed(address[],uint256)').inputs;
            [_investors,
    _withholding
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _withholding
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
    _withholding
    ]);
            const encodedData = self._lookupEthersInterface('setWithholdingFixed(address[],uint256)').functions.setWithholdingFixed.encode([_investors,
    _withholding
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
                self.setWithholdingFixed.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _investors,
    _withholding
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _investors: string[],
            _withholding: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setWithholdingFixed(address[],uint256)').inputs;
            [_investors,
    _withholding
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _withholding
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setWithholdingFixed(address[],uint256)').functions.setWithholdingFixed.encode([_investors,
    _withholding
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
            _investors: string[],
            _withholding: BigNumber,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setWithholdingFixed(address[],uint256)').inputs;
            [_investors,
    _withholding
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _withholding
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setWithholdingFixed(address[],uint256)').functions.setWithholdingFixed.encode([_investors,
    _withholding
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _withholding: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'setWithholdingFixed(address[],uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors,
        _withholding
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
        _withholding
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
        _withholding
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.setWithholdingFixed;
            const encodedData = ethersFunction.encode([_investors,
        _withholding
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
            const outputAbi = (_.find(self.abi, {name: 'setWithholdingFixed'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public EXCLUDED_ADDRESS_LIMIT = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'EXCLUDED_ADDRESS_LIMIT()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.EXCLUDED_ADDRESS_LIMIT;
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
            const outputAbi = (_.find(self.abi, {name: 'EXCLUDED_ADDRESS_LIMIT'}) as MethodAbi).outputs;
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
            const self = this as any as EtherDividendCheckpointContract;
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
    public getDividendData = {
        async callAsync(
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'getDividendData(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getDividendData;
            const encodedData = ethersFunction.encode([_dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'getDividendData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public pullDividendPayment = {
        async sendTransactionAsync(
            _dividendIndex: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pullDividendPayment(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
    ]);
            const encodedData = self._lookupEthersInterface('pullDividendPayment(uint256)').functions.pullDividendPayment.encode([_dividendIndex
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
                self.pullDividendPayment.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _dividendIndex
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _dividendIndex: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pullDividendPayment(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('pullDividendPayment(uint256)').functions.pullDividendPayment.encode([_dividendIndex
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
            _dividendIndex: BigNumber,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pullDividendPayment(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('pullDividendPayment(uint256)').functions.pullDividendPayment.encode([_dividendIndex
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'pullDividendPayment(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.pullDividendPayment;
            const encodedData = ethersFunction.encode([_dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'pullDividendPayment'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public CHECKPOINT = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'CHECKPOINT()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.CHECKPOINT;
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
            const outputAbi = (_.find(self.abi, {name: 'CHECKPOINT'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public pushDividendPaymentToAddresses = {
        async sendTransactionAsync(
            _dividendIndex: BigNumber,
            _payees: string[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pushDividendPaymentToAddresses(uint256,address[])').inputs;
            [_dividendIndex,
    _payees
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
    _payees
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex,
    _payees
    ]);
            const encodedData = self._lookupEthersInterface('pushDividendPaymentToAddresses(uint256,address[])').functions.pushDividendPaymentToAddresses.encode([_dividendIndex,
    _payees
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
                self.pushDividendPaymentToAddresses.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _dividendIndex,
    _payees
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _dividendIndex: BigNumber,
            _payees: string[],
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pushDividendPaymentToAddresses(uint256,address[])').inputs;
            [_dividendIndex,
    _payees
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
    _payees
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('pushDividendPaymentToAddresses(uint256,address[])').functions.pushDividendPaymentToAddresses.encode([_dividendIndex,
    _payees
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
            _dividendIndex: BigNumber,
            _payees: string[],
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pushDividendPaymentToAddresses(uint256,address[])').inputs;
            [_dividendIndex,
    _payees
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
    _payees
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('pushDividendPaymentToAddresses(uint256,address[])').functions.pushDividendPaymentToAddresses.encode([_dividendIndex,
    _payees
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _dividendIndex: BigNumber,
            _payees: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'pushDividendPaymentToAddresses(uint256,address[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex,
        _payees
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
        _payees
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex,
        _payees
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.pushDividendPaymentToAddresses;
            const encodedData = ethersFunction.encode([_dividendIndex,
        _payees
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
            const outputAbi = (_.find(self.abi, {name: 'pushDividendPaymentToAddresses'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public isClaimed = {
        async callAsync(
            _investor: string,
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'isClaimed(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isClaimed;
            const encodedData = ethersFunction.encode([_investor,
        _dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'isClaimed'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public calculateDividend = {
        async callAsync(
            _dividendIndex: BigNumber,
            _payee: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'calculateDividend(uint256,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex,
        _payee
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
        _payee
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex,
        _payee
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.calculateDividend;
            const encodedData = ethersFunction.encode([_dividendIndex,
        _payee
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
            const outputAbi = (_.find(self.abi, {name: 'calculateDividend'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public MANAGE = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'MANAGE()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.MANAGE;
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
            const outputAbi = (_.find(self.abi, {name: 'MANAGE'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getDividendIndex = {
        async callAsync(
            _checkpointId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'getDividendIndex(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_checkpointId
        ] = BaseContract._formatABIDataItemList(inputAbi, [_checkpointId
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_checkpointId
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getDividendIndex;
            const encodedData = ethersFunction.encode([_checkpointId
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
            const outputAbi = (_.find(self.abi, {name: 'getDividendIndex'}) as MethodAbi).outputs;
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
            const self = this as any as EtherDividendCheckpointContract;
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
                self.takeFee.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
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
            const self = this as any as EtherDividendCheckpointContract;
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
            const self = this as any as EtherDividendCheckpointContract;
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
            const self = this as any as EtherDividendCheckpointContract;
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
            const self = this as any as EtherDividendCheckpointContract;
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
    public withholdingTax = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'withholdingTax(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.withholdingTax;
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
            const outputAbi = (_.find(self.abi, {name: 'withholdingTax'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getCheckpointData = {
        async callAsync(
            _checkpointId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], BigNumber[], BigNumber[]]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'getCheckpointData(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_checkpointId
        ] = BaseContract._formatABIDataItemList(inputAbi, [_checkpointId
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_checkpointId
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getCheckpointData;
            const encodedData = ethersFunction.encode([_checkpointId
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
            const outputAbi = (_.find(self.abi, {name: 'getCheckpointData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public DISTRIBUTE = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'DISTRIBUTE()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.DISTRIBUTE;
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
            const outputAbi = (_.find(self.abi, {name: 'DISTRIBUTE'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public dividends = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber, string]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'dividends(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.dividends;
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
            const outputAbi = (_.find(self.abi, {name: 'dividends'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public isExcluded = {
        async callAsync(
            _investor: string,
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'isExcluded(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isExcluded;
            const encodedData = ethersFunction.encode([_investor,
        _dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'isExcluded'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public setWithholding = {
        async sendTransactionAsync(
            _investors: string[],
            _withholding: BigNumber[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setWithholding(address[],uint256[])').inputs;
            [_investors,
    _withholding
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _withholding
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
    _withholding
    ]);
            const encodedData = self._lookupEthersInterface('setWithholding(address[],uint256[])').functions.setWithholding.encode([_investors,
    _withholding
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
                self.setWithholding.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _investors,
    _withholding
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _investors: string[],
            _withholding: BigNumber[],
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setWithholding(address[],uint256[])').inputs;
            [_investors,
    _withholding
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _withholding
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setWithholding(address[],uint256[])').functions.setWithholding.encode([_investors,
    _withholding
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
            _investors: string[],
            _withholding: BigNumber[],
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setWithholding(address[],uint256[])').inputs;
            [_investors,
    _withholding
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _withholding
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setWithholding(address[],uint256[])').functions.setWithholding.encode([_investors,
    _withholding
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _withholding: BigNumber[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'setWithholding(address[],uint256[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors,
        _withholding
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
        _withholding
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
        _withholding
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.setWithholding;
            const encodedData = ethersFunction.encode([_investors,
        _withholding
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
            const outputAbi = (_.find(self.abi, {name: 'setWithholding'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getDividendsData = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], string[]]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'getDividendsData()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getDividendsData;
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
            const outputAbi = (_.find(self.abi, {name: 'getDividendsData'}) as MethodAbi).outputs;
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
            const self = this as any as EtherDividendCheckpointContract;
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
    public excluded = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'excluded(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.excluded;
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
            const outputAbi = (_.find(self.abi, {name: 'excluded'}) as MethodAbi).outputs;
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
            const self = this as any as EtherDividendCheckpointContract;
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
    public factory = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as EtherDividendCheckpointContract;
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
    public setDefaultExcluded = {
        async sendTransactionAsync(
            _excluded: string[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setDefaultExcluded(address[])').inputs;
            [_excluded
    ] = BaseContract._formatABIDataItemList(inputAbi, [_excluded
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_excluded
    ]);
            const encodedData = self._lookupEthersInterface('setDefaultExcluded(address[])').functions.setDefaultExcluded.encode([_excluded
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
                self.setDefaultExcluded.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _excluded
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _excluded: string[],
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setDefaultExcluded(address[])').inputs;
            [_excluded
    ] = BaseContract._formatABIDataItemList(inputAbi, [_excluded
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setDefaultExcluded(address[])').functions.setDefaultExcluded.encode([_excluded
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
            _excluded: string[],
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('setDefaultExcluded(address[])').inputs;
            [_excluded
    ] = BaseContract._formatABIDataItemList(inputAbi, [_excluded
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setDefaultExcluded(address[])').functions.setDefaultExcluded.encode([_excluded
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _excluded: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'setDefaultExcluded(address[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_excluded
        ] = BaseContract._formatABIDataItemList(inputAbi, [_excluded
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_excluded
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.setDefaultExcluded;
            const encodedData = ethersFunction.encode([_excluded
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
            const outputAbi = (_.find(self.abi, {name: 'setDefaultExcluded'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public FEE_ADMIN = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as EtherDividendCheckpointContract;
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
    public pushDividendPayment = {
        async sendTransactionAsync(
            _dividendIndex: BigNumber,
            _start: BigNumber,
            _iterations: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pushDividendPayment(uint256,uint256,uint256)').inputs;
            [_dividendIndex,
    _start,
    _iterations
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
    _start,
    _iterations
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex,
    _start,
    _iterations
    ]);
            const encodedData = self._lookupEthersInterface('pushDividendPayment(uint256,uint256,uint256)').functions.pushDividendPayment.encode([_dividendIndex,
    _start,
    _iterations
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
                self.pushDividendPayment.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _dividendIndex,
    _start,
    _iterations
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _dividendIndex: BigNumber,
            _start: BigNumber,
            _iterations: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pushDividendPayment(uint256,uint256,uint256)').inputs;
            [_dividendIndex,
    _start,
    _iterations
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
    _start,
    _iterations
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('pushDividendPayment(uint256,uint256,uint256)').functions.pushDividendPayment.encode([_dividendIndex,
    _start,
    _iterations
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
            _dividendIndex: BigNumber,
            _start: BigNumber,
            _iterations: BigNumber,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('pushDividendPayment(uint256,uint256,uint256)').inputs;
            [_dividendIndex,
    _start,
    _iterations
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
    _start,
    _iterations
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('pushDividendPayment(uint256,uint256,uint256)').functions.pushDividendPayment.encode([_dividendIndex,
    _start,
    _iterations
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _dividendIndex: BigNumber,
            _start: BigNumber,
            _iterations: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'pushDividendPayment(uint256,uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex,
        _start,
        _iterations
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex,
        _start,
        _iterations
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex,
        _start,
        _iterations
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.pushDividendPayment;
            const encodedData = ethersFunction.encode([_dividendIndex,
        _start,
        _iterations
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
            const outputAbi = (_.find(self.abi, {name: 'pushDividendPayment'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getDefaultExcluded = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'getDefaultExcluded()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getDefaultExcluded;
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
            const outputAbi = (_.find(self.abi, {name: 'getDefaultExcluded'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getDividendProgress = {
        async callAsync(
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], boolean[], boolean[], BigNumber[], BigNumber[], BigNumber[]]
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'getDividendProgress(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getDividendProgress;
            const encodedData = ethersFunction.encode([_dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'getDividendProgress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public createCheckpoint = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createCheckpoint()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
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
                self.createCheckpoint.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
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
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createCheckpoint()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
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
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createCheckpoint()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'createCheckpoint()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.createCheckpoint;
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
            const outputAbi = (_.find(self.abi, {name: 'createCheckpoint'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public createDividend = {
        async sendTransactionAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _name: string,
            txData: Partial<TxDataPayable> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividend(uint256,uint256,bytes32)').inputs;
            [_maturity,
    _expiry,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _name
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
    _expiry,
    _name
    ]);
            const encodedData = self._lookupEthersInterface('createDividend(uint256,uint256,bytes32)').functions.createDividend.encode([_maturity,
    _expiry,
    _name
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
                self.createDividend.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _maturity,
    _expiry,
    _name
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _name: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividend(uint256,uint256,bytes32)').inputs;
            [_maturity,
    _expiry,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _name
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('createDividend(uint256,uint256,bytes32)').functions.createDividend.encode([_maturity,
    _expiry,
    _name
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
            _maturity: BigNumber,
            _expiry: BigNumber,
            _name: string,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividend(uint256,uint256,bytes32)').inputs;
            [_maturity,
    _expiry,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _name
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('createDividend(uint256,uint256,bytes32)').functions.createDividend.encode([_maturity,
    _expiry,
    _name
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _name: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'createDividend(uint256,uint256,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_maturity,
        _expiry,
        _name
        ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
        _expiry,
        _name
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
        _expiry,
        _name
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.createDividend;
            const encodedData = ethersFunction.encode([_maturity,
        _expiry,
        _name
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
            const outputAbi = (_.find(self.abi, {name: 'createDividend'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public createDividendWithCheckpoint = {
        async sendTransactionAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _name: string,
            txData: Partial<TxDataPayable> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)').inputs;
            [_maturity,
    _expiry,
    _checkpointId,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _name
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _name
    ]);
            const encodedData = self._lookupEthersInterface('createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)').functions.createDividendWithCheckpoint.encode([_maturity,
    _expiry,
    _checkpointId,
    _name
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
                self.createDividendWithCheckpoint.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _maturity,
    _expiry,
    _checkpointId,
    _name
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _name: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)').inputs;
            [_maturity,
    _expiry,
    _checkpointId,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _name
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)').functions.createDividendWithCheckpoint.encode([_maturity,
    _expiry,
    _checkpointId,
    _name
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
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _name: string,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)').inputs;
            [_maturity,
    _expiry,
    _checkpointId,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _name
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)').functions.createDividendWithCheckpoint.encode([_maturity,
    _expiry,
    _checkpointId,
    _name
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _name: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'createDividendWithCheckpoint(uint256,uint256,uint256,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_maturity,
        _expiry,
        _checkpointId,
        _name
        ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
        _expiry,
        _checkpointId,
        _name
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
        _expiry,
        _checkpointId,
        _name
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.createDividendWithCheckpoint;
            const encodedData = ethersFunction.encode([_maturity,
        _expiry,
        _checkpointId,
        _name
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
            const outputAbi = (_.find(self.abi, {name: 'createDividendWithCheckpoint'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public createDividendWithExclusions = {
        async sendTransactionAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _excluded: string[],
            _name: string,
            txData: Partial<TxDataPayable> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithExclusions(uint256,uint256,address[],bytes32)').inputs;
            [_maturity,
    _expiry,
    _excluded,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _excluded,
    _name
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
    _expiry,
    _excluded,
    _name
    ]);
            const encodedData = self._lookupEthersInterface('createDividendWithExclusions(uint256,uint256,address[],bytes32)').functions.createDividendWithExclusions.encode([_maturity,
    _expiry,
    _excluded,
    _name
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
                self.createDividendWithExclusions.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _maturity,
    _expiry,
    _excluded,
    _name
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _excluded: string[],
            _name: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithExclusions(uint256,uint256,address[],bytes32)').inputs;
            [_maturity,
    _expiry,
    _excluded,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _excluded,
    _name
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('createDividendWithExclusions(uint256,uint256,address[],bytes32)').functions.createDividendWithExclusions.encode([_maturity,
    _expiry,
    _excluded,
    _name
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
            _maturity: BigNumber,
            _expiry: BigNumber,
            _excluded: string[],
            _name: string,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithExclusions(uint256,uint256,address[],bytes32)').inputs;
            [_maturity,
    _expiry,
    _excluded,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _excluded,
    _name
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('createDividendWithExclusions(uint256,uint256,address[],bytes32)').functions.createDividendWithExclusions.encode([_maturity,
    _expiry,
    _excluded,
    _name
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _excluded: string[],
            _name: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'createDividendWithExclusions(uint256,uint256,address[],bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_maturity,
        _expiry,
        _excluded,
        _name
        ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
        _expiry,
        _excluded,
        _name
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
        _expiry,
        _excluded,
        _name
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.createDividendWithExclusions;
            const encodedData = ethersFunction.encode([_maturity,
        _expiry,
        _excluded,
        _name
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
            const outputAbi = (_.find(self.abi, {name: 'createDividendWithExclusions'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public createDividendWithCheckpointAndExclusions = {
        async sendTransactionAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _excluded: string[],
            _name: string,
            txData: Partial<TxDataPayable> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)').inputs;
            [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ]);
            const encodedData = self._lookupEthersInterface('createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)').functions.createDividendWithCheckpointAndExclusions.encode([_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
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
                self.createDividendWithCheckpointAndExclusions.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _excluded: string[],
            _name: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)').inputs;
            [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)').functions.createDividendWithCheckpointAndExclusions.encode([_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
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
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _excluded: string[],
            _name: string,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)').inputs;
            [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)').functions.createDividendWithCheckpointAndExclusions.encode([_maturity,
    _expiry,
    _checkpointId,
    _excluded,
    _name
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _maturity: BigNumber,
            _expiry: BigNumber,
            _checkpointId: BigNumber,
            _excluded: string[],
            _name: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'createDividendWithCheckpointAndExclusions(uint256,uint256,uint256,address[],bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_maturity,
        _expiry,
        _checkpointId,
        _excluded,
        _name
        ] = BaseContract._formatABIDataItemList(inputAbi, [_maturity,
        _expiry,
        _checkpointId,
        _excluded,
        _name
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_maturity,
        _expiry,
        _checkpointId,
        _excluded,
        _name
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.createDividendWithCheckpointAndExclusions;
            const encodedData = ethersFunction.encode([_maturity,
        _expiry,
        _checkpointId,
        _excluded,
        _name
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
            const outputAbi = (_.find(self.abi, {name: 'createDividendWithCheckpointAndExclusions'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public reclaimDividend = {
        async sendTransactionAsync(
            _dividendIndex: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('reclaimDividend(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
    ]);
            const encodedData = self._lookupEthersInterface('reclaimDividend(uint256)').functions.reclaimDividend.encode([_dividendIndex
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
                self.reclaimDividend.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _dividendIndex
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _dividendIndex: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('reclaimDividend(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('reclaimDividend(uint256)').functions.reclaimDividend.encode([_dividendIndex
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
            _dividendIndex: BigNumber,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('reclaimDividend(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('reclaimDividend(uint256)').functions.reclaimDividend.encode([_dividendIndex
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'reclaimDividend(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.reclaimDividend;
            const encodedData = ethersFunction.encode([_dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'reclaimDividend'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public withdrawWithholding = {
        async sendTransactionAsync(
            _dividendIndex: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('withdrawWithholding(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
    ]);
            const encodedData = self._lookupEthersInterface('withdrawWithholding(uint256)').functions.withdrawWithholding.encode([_dividendIndex
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
                self.withdrawWithholding.estimateGasAsync.bind<EtherDividendCheckpointContract, any, Promise<number>>(
                    self,
                    _dividendIndex
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _dividendIndex: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('withdrawWithholding(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('withdrawWithholding(uint256)').functions.withdrawWithholding.encode([_dividendIndex
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
            _dividendIndex: BigNumber,
        ): string {
            const self = this as any as EtherDividendCheckpointContract;
            const inputAbi = self._lookupAbi('withdrawWithholding(uint256)').inputs;
            [_dividendIndex
    ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('withdrawWithholding(uint256)').functions.withdrawWithholding.encode([_dividendIndex
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _dividendIndex: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as EtherDividendCheckpointContract;
            const functionSignature = 'withdrawWithholding(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_dividendIndex
        ] = BaseContract._formatABIDataItemList(inputAbi, [_dividendIndex
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_dividendIndex
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.withdrawWithholding;
            const encodedData = ethersFunction.encode([_dividendIndex
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
            const outputAbi = (_.find(self.abi, {name: 'withdrawWithholding'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('EtherDividendCheckpoint', abi, address, provider, txDefaults);
        this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1 : defaultEstimateGasFactor;
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
