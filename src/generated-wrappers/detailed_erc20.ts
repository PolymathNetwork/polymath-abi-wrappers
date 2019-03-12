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

export type DetailedERC20EventArgs =
    | DetailedERC20ApprovalEventArgs
    | DetailedERC20TransferEventArgs;

export enum DetailedERC20Events {
    Approval = 'Approval',
    Transfer = 'Transfer',
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


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class DetailedERC20Contract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public name = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'name()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.name;
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
            const outputAbi = (_.find(self.abi, {name: 'name'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public approve = {
        async sendTransactionAsync(
            spender: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
            [spender,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [spender,
    value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [spender,
    value
    ]);
            const encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([spender,
    value
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
                self.approve.estimateGasAsync.bind<DetailedERC20Contract, any, Promise<number>>(
                    self,
                    spender,
    value
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            spender: string,
            value: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
            [spender,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [spender,
    value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([spender,
    value
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
            spender: string,
            value: BigNumber,
        ): string {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
            [spender,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [spender,
    value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([spender,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            spender: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'approve(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [spender,
        value
        ] = BaseContract._formatABIDataItemList(inputAbi, [spender,
        value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [spender,
        value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.approve;
            const encodedData = ethersFunction.encode([spender,
        value
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
            const outputAbi = (_.find(self.abi, {name: 'approve'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public totalSupply = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'totalSupply()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalSupply;
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
            const outputAbi = (_.find(self.abi, {name: 'totalSupply'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public transferFrom = {
        async sendTransactionAsync(
            from: string,
            to: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
            [from,
    to,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [from,
    to,
    value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [from,
    to,
    value
    ]);
            const encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([from,
    to,
    value
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
                self.transferFrom.estimateGasAsync.bind<DetailedERC20Contract, any, Promise<number>>(
                    self,
                    from,
    to,
    value
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            from: string,
            to: string,
            value: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
            [from,
    to,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [from,
    to,
    value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([from,
    to,
    value
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
            from: string,
            to: string,
            value: BigNumber,
        ): string {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
            [from,
    to,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [from,
    to,
    value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([from,
    to,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            from: string,
            to: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'transferFrom(address,address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [from,
        to,
        value
        ] = BaseContract._formatABIDataItemList(inputAbi, [from,
        to,
        value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [from,
        to,
        value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferFrom;
            const encodedData = ethersFunction.encode([from,
        to,
        value
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
            const outputAbi = (_.find(self.abi, {name: 'transferFrom'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public decimals = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'decimals()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.decimals;
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
            const outputAbi = (_.find(self.abi, {name: 'decimals'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public balanceOf = {
        async callAsync(
            who: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'balanceOf(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [who
        ] = BaseContract._formatABIDataItemList(inputAbi, [who
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [who
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOf;
            const encodedData = ethersFunction.encode([who
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
            const outputAbi = (_.find(self.abi, {name: 'balanceOf'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public symbol = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'symbol()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.symbol;
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
            const outputAbi = (_.find(self.abi, {name: 'symbol'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public transfer = {
        async sendTransactionAsync(
            to: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
            [to,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [to,
    value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [to,
    value
    ]);
            const encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([to,
    value
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
                self.transfer.estimateGasAsync.bind<DetailedERC20Contract, any, Promise<number>>(
                    self,
                    to,
    value
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            to: string,
            value: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
            [to,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [to,
    value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([to,
    value
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
            to: string,
            value: BigNumber,
        ): string {
            const self = this as any as DetailedERC20Contract;
            const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
            [to,
    value
    ] = BaseContract._formatABIDataItemList(inputAbi, [to,
    value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([to,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            to: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'transfer(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [to,
        value
        ] = BaseContract._formatABIDataItemList(inputAbi, [to,
        value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [to,
        value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transfer;
            const encodedData = ethersFunction.encode([to,
        value
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
            const outputAbi = (_.find(self.abi, {name: 'transfer'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public allowance = {
        async callAsync(
            owner: string,
            spender: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as DetailedERC20Contract;
            const functionSignature = 'allowance(address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [owner,
        spender
        ] = BaseContract._formatABIDataItemList(inputAbi, [owner,
        spender
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [owner,
        spender
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowance;
            const encodedData = ethersFunction.encode([owner,
        spender
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
            const outputAbi = (_.find(self.abi, {name: 'allowance'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('DetailedERC20', abi, address, provider, txDefaults);
        this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
