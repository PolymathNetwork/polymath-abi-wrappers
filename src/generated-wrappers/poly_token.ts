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

export type PolyTokenEventArgs =
    | PolyTokenTransferEventArgs
    | PolyTokenApprovalEventArgs;

export enum PolyTokenEvents {
    Transfer = 'Transfer',
    Approval = 'Approval',
}

export interface PolyTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}

export interface PolyTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class PolyTokenContract extends BaseContract {
    public name = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolyTokenContract;
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
    public totalSupply = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as PolyTokenContract;
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
    public decimals = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as PolyTokenContract;
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
    public decimalFactor = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'decimalFactor()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.decimalFactor;
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
            const outputAbi = (_.find(self.abi, {name: 'decimalFactor'}) as MethodAbi).outputs;
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
            const self = this as any as PolyTokenContract;
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
    public balanceOf = {
        async callAsync(
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'balanceOf(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_owner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_owner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOf;
            const encodedData = ethersFunction.encode([_owner
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
    public allowance = {
        async callAsync(
            _owner: string,
            _spender: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'allowance(address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_owner,
        _spender
        ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
        _spender
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner,
        _spender
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowance;
            const encodedData = ethersFunction.encode([_owner,
        _spender
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
    public transfer = {
        async sendTransactionAsync(
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
            [_to,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
    _value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
    _value
    ]);
            const encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([_to,
    _value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transfer.estimateGasAsync.bind(
                    self,
                    _to,
                    _value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
            [_to,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
    _value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([_to,
    _value
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
            _to: string,
            _value: BigNumber,
        ): string {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
            [_to,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
    _value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([_to,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _to: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'transfer(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_to,
        _value
        ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
        _value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
        _value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transfer;
            const encodedData = ethersFunction.encode([_to,
        _value
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
    public transferFrom = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
            [_from,
    _to,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _to,
    _value
    ]);
            const encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([_from,
    _to,
    _value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferFrom.estimateGasAsync.bind(
                    self,
                    _from,
                    _to,
                    _value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
            [_from,
    _to,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([_from,
    _to,
    _value
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
            _from: string,
            _to: string,
            _value: BigNumber,
        ): string {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
            [_from,
    _to,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([_from,
    _to,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'transferFrom(address,address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _to,
        _value
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _to,
        _value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _to,
        _value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferFrom;
            const encodedData = ethersFunction.encode([_from,
        _to,
        _value
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
    public approve = {
        async sendTransactionAsync(
            _spender: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
            [_spender,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
    _value
    ]);
            const encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([_spender,
    _value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.approve.estimateGasAsync.bind(
                    self,
                    _spender,
                    _value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _spender: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
            [_spender,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([_spender,
    _value
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
            _spender: string,
            _value: BigNumber,
        ): string {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
            [_spender,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([_spender,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _spender: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'approve(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_spender,
        _value
        ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
        _value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
        _value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.approve;
            const encodedData = ethersFunction.encode([_spender,
        _value
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
    public increaseApproval = {
        async sendTransactionAsync(
            _spender: string,
            _addedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('increaseApproval(address,uint256)').inputs;
            [_spender,
    _addedValue
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _addedValue
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
    _addedValue
    ]);
            const encodedData = self._lookupEthersInterface('increaseApproval(address,uint256)').functions.increaseApproval.encode([_spender,
    _addedValue
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.increaseApproval.estimateGasAsync.bind(
                    self,
                    _spender,
                    _addedValue
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _spender: string,
            _addedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('increaseApproval(address,uint256)').inputs;
            [_spender,
    _addedValue
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _addedValue
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('increaseApproval(address,uint256)').functions.increaseApproval.encode([_spender,
    _addedValue
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
            _spender: string,
            _addedValue: BigNumber,
        ): string {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('increaseApproval(address,uint256)').inputs;
            [_spender,
    _addedValue
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _addedValue
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('increaseApproval(address,uint256)').functions.increaseApproval.encode([_spender,
    _addedValue
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _spender: string,
            _addedValue: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'increaseApproval(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_spender,
        _addedValue
        ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
        _addedValue
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
        _addedValue
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.increaseApproval;
            const encodedData = ethersFunction.encode([_spender,
        _addedValue
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
            const outputAbi = (_.find(self.abi, {name: 'increaseApproval'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public decreaseApproval = {
        async sendTransactionAsync(
            _spender: string,
            _subtractedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('decreaseApproval(address,uint256)').inputs;
            [_spender,
    _subtractedValue
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _subtractedValue
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
    _subtractedValue
    ]);
            const encodedData = self._lookupEthersInterface('decreaseApproval(address,uint256)').functions.decreaseApproval.encode([_spender,
    _subtractedValue
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.decreaseApproval.estimateGasAsync.bind(
                    self,
                    _spender,
                    _subtractedValue
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _spender: string,
            _subtractedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('decreaseApproval(address,uint256)').inputs;
            [_spender,
    _subtractedValue
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _subtractedValue
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('decreaseApproval(address,uint256)').functions.decreaseApproval.encode([_spender,
    _subtractedValue
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
            _spender: string,
            _subtractedValue: BigNumber,
        ): string {
            const self = this as any as PolyTokenContract;
            const inputAbi = self._lookupAbi('decreaseApproval(address,uint256)').inputs;
            [_spender,
    _subtractedValue
    ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
    _subtractedValue
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('decreaseApproval(address,uint256)').functions.decreaseApproval.encode([_spender,
    _subtractedValue
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _spender: string,
            _subtractedValue: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as PolyTokenContract;
            const functionSignature = 'decreaseApproval(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_spender,
        _subtractedValue
        ] = BaseContract._formatABIDataItemList(inputAbi, [_spender,
        _subtractedValue
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
        _subtractedValue
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.decreaseApproval;
            const encodedData = ethersFunction.encode([_spender,
        _subtractedValue
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
            const outputAbi = (_.find(self.abi, {name: 'decreaseApproval'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _polyDistributionContractAddress: string,
    ): Promise<PolyTokenContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return PolyTokenContract.deployAsync(bytecode, abi, provider, txDefaults, _polyDistributionContractAddress
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _polyDistributionContractAddress: string,
    ): Promise<PolyTokenContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_polyDistributionContractAddress
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_polyDistributionContractAddress
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_polyDistributionContractAddress
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
        logUtils.log(`PolyToken successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new PolyTokenContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_polyDistributionContractAddress
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('PolyToken', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
