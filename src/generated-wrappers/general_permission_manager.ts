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

export type GeneralPermissionManagerEventArgs =
    | GeneralPermissionManagerChangePermissionEventArgs
    | GeneralPermissionManagerAddDelegateEventArgs;

export enum GeneralPermissionManagerEvents {
    ChangePermission = 'ChangePermission',
    AddDelegate = 'AddDelegate',
}

export interface GeneralPermissionManagerChangePermissionEventArgs extends DecodedLogArgs {
    _delegate: string;
    _module: string;
    _perm: string;
    _valid: boolean;
    _timestamp: BigNumber;
}

export interface GeneralPermissionManagerAddDelegateEventArgs extends DecodedLogArgs {
    _delegate: string;
    _details: string;
    _timestamp: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class GeneralPermissionManagerContract extends BaseContract {
    public perms = {
        async callAsync(
            index_0: string,
            index_1: string,
            index_2: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'perms(address,address,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1,
        index_2
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1,
        index_2
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
        index_1,
        index_2
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.perms;
            const encodedData = ethersFunction.encode([index_0,
        index_1,
        index_2
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
            const outputAbi = (_.find(self.abi, {name: 'perms'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralPermissionManagerContract;
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
                self.takeFee.estimateGasAsync.bind<GeneralPermissionManagerContract, any, Promise<number>>(
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
            const self = this as any as GeneralPermissionManagerContract;
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
            const self = this as any as GeneralPermissionManagerContract;
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
            const self = this as any as GeneralPermissionManagerContract;
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
            const self = this as any as GeneralPermissionManagerContract;
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
    public CHANGE_PERMISSION = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'CHANGE_PERMISSION()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.CHANGE_PERMISSION;
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
            const outputAbi = (_.find(self.abi, {name: 'CHANGE_PERMISSION'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public allDelegates = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'allDelegates(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allDelegates;
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
            const outputAbi = (_.find(self.abi, {name: 'allDelegates'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralPermissionManagerContract;
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
            const self = this as any as GeneralPermissionManagerContract;
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
            const self = this as any as GeneralPermissionManagerContract;
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
    public delegateDetails = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'delegateDetails(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.delegateDetails;
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
            const outputAbi = (_.find(self.abi, {name: 'delegateDetails'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralPermissionManagerContract;
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
    public checkPermission = {
        async callAsync(
            _delegate: string,
            _module: string,
            _perm: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'checkPermission(address,address,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_delegate,
        _module,
        _perm
        ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
        _module,
        _perm
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
        _module,
        _perm
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.checkPermission;
            const encodedData = ethersFunction.encode([_delegate,
        _module,
        _perm
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
            const outputAbi = (_.find(self.abi, {name: 'checkPermission'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public addDelegate = {
        async sendTransactionAsync(
            _delegate: string,
            _details: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('addDelegate(address,bytes32)').inputs;
            [_delegate,
    _details
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _details
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
    _details
    ]);
            const encodedData = self._lookupEthersInterface('addDelegate(address,bytes32)').functions.addDelegate.encode([_delegate,
    _details
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.addDelegate.estimateGasAsync.bind<GeneralPermissionManagerContract, any, Promise<number>>(
                    self,
                    _delegate,
                    _details
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _delegate: string,
            _details: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('addDelegate(address,bytes32)').inputs;
            [_delegate,
    _details
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _details
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addDelegate(address,bytes32)').functions.addDelegate.encode([_delegate,
    _details
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
            _delegate: string,
            _details: string,
        ): string {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('addDelegate(address,bytes32)').inputs;
            [_delegate,
    _details
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _details
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addDelegate(address,bytes32)').functions.addDelegate.encode([_delegate,
    _details
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _delegate: string,
            _details: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'addDelegate(address,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_delegate,
        _details
        ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
        _details
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
        _details
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addDelegate;
            const encodedData = ethersFunction.encode([_delegate,
        _details
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
            const outputAbi = (_.find(self.abi, {name: 'addDelegate'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public deleteDelegate = {
        async sendTransactionAsync(
            _delegate: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('deleteDelegate(address)').inputs;
            [_delegate
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate
    ]);
            const encodedData = self._lookupEthersInterface('deleteDelegate(address)').functions.deleteDelegate.encode([_delegate
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.deleteDelegate.estimateGasAsync.bind<GeneralPermissionManagerContract, any, Promise<number>>(
                    self,
                    _delegate
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _delegate: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('deleteDelegate(address)').inputs;
            [_delegate
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('deleteDelegate(address)').functions.deleteDelegate.encode([_delegate
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
            _delegate: string,
        ): string {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('deleteDelegate(address)').inputs;
            [_delegate
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('deleteDelegate(address)').functions.deleteDelegate.encode([_delegate
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _delegate: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'deleteDelegate(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_delegate
        ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.deleteDelegate;
            const encodedData = ethersFunction.encode([_delegate
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
            const outputAbi = (_.find(self.abi, {name: 'deleteDelegate'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public checkDelegate = {
        async callAsync(
            _potentialDelegate: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'checkDelegate(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_potentialDelegate
        ] = BaseContract._formatABIDataItemList(inputAbi, [_potentialDelegate
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_potentialDelegate
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.checkDelegate;
            const encodedData = ethersFunction.encode([_potentialDelegate
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
            const outputAbi = (_.find(self.abi, {name: 'checkDelegate'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public changePermission = {
        async sendTransactionAsync(
            _delegate: string,
            _module: string,
            _perm: string,
            _valid: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('changePermission(address,address,bytes32,bool)').inputs;
            [_delegate,
    _module,
    _perm,
    _valid
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _module,
    _perm,
    _valid
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
    _module,
    _perm,
    _valid
    ]);
            const encodedData = self._lookupEthersInterface('changePermission(address,address,bytes32,bool)').functions.changePermission.encode([_delegate,
    _module,
    _perm,
    _valid
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changePermission.estimateGasAsync.bind<GeneralPermissionManagerContract, any, Promise<number>>(
                    self,
                    _delegate,
                    _module,
                    _perm,
                    _valid
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _delegate: string,
            _module: string,
            _perm: string,
            _valid: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('changePermission(address,address,bytes32,bool)').inputs;
            [_delegate,
    _module,
    _perm,
    _valid
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _module,
    _perm,
    _valid
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changePermission(address,address,bytes32,bool)').functions.changePermission.encode([_delegate,
    _module,
    _perm,
    _valid
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
            _delegate: string,
            _module: string,
            _perm: string,
            _valid: boolean,
        ): string {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('changePermission(address,address,bytes32,bool)').inputs;
            [_delegate,
    _module,
    _perm,
    _valid
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _module,
    _perm,
    _valid
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changePermission(address,address,bytes32,bool)').functions.changePermission.encode([_delegate,
    _module,
    _perm,
    _valid
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _delegate: string,
            _module: string,
            _perm: string,
            _valid: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'changePermission(address,address,bytes32,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_delegate,
        _module,
        _perm,
        _valid
        ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
        _module,
        _perm,
        _valid
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
        _module,
        _perm,
        _valid
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changePermission;
            const encodedData = ethersFunction.encode([_delegate,
        _module,
        _perm,
        _valid
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
            const outputAbi = (_.find(self.abi, {name: 'changePermission'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changePermissionMulti = {
        async sendTransactionAsync(
            _delegate: string,
            _modules: string[],
            _perms: string[],
            _valids: boolean[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('changePermissionMulti(address,address[],bytes32[],bool[])').inputs;
            [_delegate,
    _modules,
    _perms,
    _valids
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _modules,
    _perms,
    _valids
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
    _modules,
    _perms,
    _valids
    ]);
            const encodedData = self._lookupEthersInterface('changePermissionMulti(address,address[],bytes32[],bool[])').functions.changePermissionMulti.encode([_delegate,
    _modules,
    _perms,
    _valids
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changePermissionMulti.estimateGasAsync.bind<GeneralPermissionManagerContract, any, Promise<number>>(
                    self,
                    _delegate,
                    _modules,
                    _perms,
                    _valids
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _delegate: string,
            _modules: string[],
            _perms: string[],
            _valids: boolean[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('changePermissionMulti(address,address[],bytes32[],bool[])').inputs;
            [_delegate,
    _modules,
    _perms,
    _valids
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _modules,
    _perms,
    _valids
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changePermissionMulti(address,address[],bytes32[],bool[])').functions.changePermissionMulti.encode([_delegate,
    _modules,
    _perms,
    _valids
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
            _delegate: string,
            _modules: string[],
            _perms: string[],
            _valids: boolean[],
        ): string {
            const self = this as any as GeneralPermissionManagerContract;
            const inputAbi = self._lookupAbi('changePermissionMulti(address,address[],bytes32[],bool[])').inputs;
            [_delegate,
    _modules,
    _perms,
    _valids
    ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
    _modules,
    _perms,
    _valids
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changePermissionMulti(address,address[],bytes32[],bool[])').functions.changePermissionMulti.encode([_delegate,
    _modules,
    _perms,
    _valids
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _delegate: string,
            _modules: string[],
            _perms: string[],
            _valids: boolean[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'changePermissionMulti(address,address[],bytes32[],bool[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_delegate,
        _modules,
        _perms,
        _valids
        ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
        _modules,
        _perms,
        _valids
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
        _modules,
        _perms,
        _valids
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changePermissionMulti;
            const encodedData = ethersFunction.encode([_delegate,
        _modules,
        _perms,
        _valids
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
            const outputAbi = (_.find(self.abi, {name: 'changePermissionMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getAllDelegatesWithPerm = {
        async callAsync(
            _module: string,
            _perm: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'getAllDelegatesWithPerm(address,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_module,
        _perm
        ] = BaseContract._formatABIDataItemList(inputAbi, [_module,
        _perm
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module,
        _perm
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAllDelegatesWithPerm;
            const encodedData = ethersFunction.encode([_module,
        _perm
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
            const outputAbi = (_.find(self.abi, {name: 'getAllDelegatesWithPerm'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getAllModulesAndPermsFromTypes = {
        async callAsync(
            _delegate: string,
            _types: Array<number|BigNumber>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], string[]]
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'getAllModulesAndPermsFromTypes(address,uint8[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_delegate,
        _types
        ] = BaseContract._formatABIDataItemList(inputAbi, [_delegate,
        _types
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
        _types
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAllModulesAndPermsFromTypes;
            const encodedData = ethersFunction.encode([_delegate,
        _types
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
            const outputAbi = (_.find(self.abi, {name: 'getAllModulesAndPermsFromTypes'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getAllDelegates = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as GeneralPermissionManagerContract;
            const functionSignature = 'getAllDelegates()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAllDelegates;
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
            const outputAbi = (_.find(self.abi, {name: 'getAllDelegates'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralPermissionManagerContract;
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
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('GeneralPermissionManager', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
