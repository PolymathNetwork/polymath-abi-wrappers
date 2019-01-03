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

export type ModuleRegistryEventArgs =
    | ModuleRegistryPauseEventArgs
    | ModuleRegistryUnpauseEventArgs
    | ModuleRegistryModuleUsedEventArgs
    | ModuleRegistryModuleRegisteredEventArgs
    | ModuleRegistryModuleVerifiedEventArgs
    | ModuleRegistryModuleRemovedEventArgs
    | ModuleRegistryOwnershipTransferredEventArgs;

export enum ModuleRegistryEvents {
    Pause = 'Pause',
    Unpause = 'Unpause',
    ModuleUsed = 'ModuleUsed',
    ModuleRegistered = 'ModuleRegistered',
    ModuleVerified = 'ModuleVerified',
    ModuleRemoved = 'ModuleRemoved',
    OwnershipTransferred = 'OwnershipTransferred',
}

export interface ModuleRegistryPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}

export interface ModuleRegistryUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}

export interface ModuleRegistryModuleUsedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _securityToken: string;
}

export interface ModuleRegistryModuleRegisteredEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _owner: string;
}

export interface ModuleRegistryModuleVerifiedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _verified: boolean;
}

export interface ModuleRegistryModuleRemovedEventArgs extends DecodedLogArgs {
    _moduleFactory: string;
    _decisionMaker: string;
}

export interface ModuleRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ModuleRegistryContract extends BaseContract {
    public getBoolValues = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getBoolValues(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getBoolValues;
            const encodedData = ethersFunction.encode([_variable
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
            const outputAbi = (_.find(self.abi, {name: 'getBoolValues'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getUintValues = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getUintValues(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getUintValues;
            const encodedData = ethersFunction.encode([_variable
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
            const outputAbi = (_.find(self.abi, {name: 'getUintValues'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getStringValues = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getStringValues(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getStringValues;
            const encodedData = ethersFunction.encode([_variable
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
            const outputAbi = (_.find(self.abi, {name: 'getStringValues'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getBytes32Values = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getBytes32Values(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getBytes32Values;
            const encodedData = ethersFunction.encode([_variable
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
            const outputAbi = (_.find(self.abi, {name: 'getBytes32Values'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getAddressValues = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getAddressValues(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAddressValues;
            const encodedData = ethersFunction.encode([_variable
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
            const outputAbi = (_.find(self.abi, {name: 'getAddressValues'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getBytesValues = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getBytesValues(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getBytesValues;
            const encodedData = ethersFunction.encode([_variable
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
            const outputAbi = (_.find(self.abi, {name: 'getBytesValues'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public initialize = {
        async sendTransactionAsync(
            _polymathRegistry: string,
            _owner: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('initialize(address,address)').inputs;
            [_polymathRegistry,
    _owner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
    _owner
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_polymathRegistry,
    _owner
    ]);
            const encodedData = self._lookupEthersInterface('initialize(address,address)').functions.initialize.encode([_polymathRegistry,
    _owner
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.initialize.estimateGasAsync.bind(
                    self,
                    _polymathRegistry,
                    _owner
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _polymathRegistry: string,
            _owner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('initialize(address,address)').inputs;
            [_polymathRegistry,
    _owner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
    _owner
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('initialize(address,address)').functions.initialize.encode([_polymathRegistry,
    _owner
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
            _polymathRegistry: string,
            _owner: string,
        ): string {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('initialize(address,address)').inputs;
            [_polymathRegistry,
    _owner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
    _owner
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('initialize(address,address)').functions.initialize.encode([_polymathRegistry,
    _owner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _polymathRegistry: string,
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'initialize(address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_polymathRegistry,
        _owner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
        _owner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_polymathRegistry,
        _owner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.initialize;
            const encodedData = ethersFunction.encode([_polymathRegistry,
        _owner
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
            const outputAbi = (_.find(self.abi, {name: 'initialize'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public useModule = {
        async sendTransactionAsync(
            _moduleFactory: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('useModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory
    ]);
            const encodedData = self._lookupEthersInterface('useModule(address)').functions.useModule.encode([_moduleFactory
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.useModule.estimateGasAsync.bind(
                    self,
                    _moduleFactory
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _moduleFactory: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('useModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('useModule(address)').functions.useModule.encode([_moduleFactory
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
            _moduleFactory: string,
        ): string {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('useModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('useModule(address)').functions.useModule.encode([_moduleFactory
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _moduleFactory: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'useModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleFactory
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.useModule;
            const encodedData = ethersFunction.encode([_moduleFactory
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
            const outputAbi = (_.find(self.abi, {name: 'useModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public registerModule = {
        async sendTransactionAsync(
            _moduleFactory: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('registerModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory
    ]);
            const encodedData = self._lookupEthersInterface('registerModule(address)').functions.registerModule.encode([_moduleFactory
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.registerModule.estimateGasAsync.bind(
                    self,
                    _moduleFactory
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _moduleFactory: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('registerModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('registerModule(address)').functions.registerModule.encode([_moduleFactory
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
            _moduleFactory: string,
        ): string {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('registerModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('registerModule(address)').functions.registerModule.encode([_moduleFactory
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _moduleFactory: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'registerModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleFactory
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.registerModule;
            const encodedData = ethersFunction.encode([_moduleFactory
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
            const outputAbi = (_.find(self.abi, {name: 'registerModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeModule = {
        async sendTransactionAsync(
            _moduleFactory: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('removeModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory
    ]);
            const encodedData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_moduleFactory
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeModule.estimateGasAsync.bind(
                    self,
                    _moduleFactory
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _moduleFactory: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('removeModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_moduleFactory
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
            _moduleFactory: string,
        ): string {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('removeModule(address)').inputs;
            [_moduleFactory
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_moduleFactory
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _moduleFactory: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'removeModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleFactory
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeModule;
            const encodedData = ethersFunction.encode([_moduleFactory
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
            const outputAbi = (_.find(self.abi, {name: 'removeModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public verifyModule = {
        async sendTransactionAsync(
            _moduleFactory: string,
            _verified: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('verifyModule(address,bool)').inputs;
            [_moduleFactory,
    _verified
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
    _verified
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory,
    _verified
    ]);
            const encodedData = self._lookupEthersInterface('verifyModule(address,bool)').functions.verifyModule.encode([_moduleFactory,
    _verified
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.verifyModule.estimateGasAsync.bind(
                    self,
                    _moduleFactory,
                    _verified
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _moduleFactory: string,
            _verified: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('verifyModule(address,bool)').inputs;
            [_moduleFactory,
    _verified
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
    _verified
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('verifyModule(address,bool)').functions.verifyModule.encode([_moduleFactory,
    _verified
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
            _moduleFactory: string,
            _verified: boolean,
        ): string {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('verifyModule(address,bool)').inputs;
            [_moduleFactory,
    _verified
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
    _verified
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('verifyModule(address,bool)').functions.verifyModule.encode([_moduleFactory,
    _verified
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _moduleFactory: string,
            _verified: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'verifyModule(address,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleFactory,
        _verified
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
        _verified
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory,
        _verified
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyModule;
            const encodedData = ethersFunction.encode([_moduleFactory,
        _verified
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
            const outputAbi = (_.find(self.abi, {name: 'verifyModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getTagsByTypeAndToken = {
        async callAsync(
            _moduleType: number|BigNumber,
            _securityToken: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], string[]]
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getTagsByTypeAndToken(uint8,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleType,
        _securityToken
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleType,
        _securityToken
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleType,
        _securityToken
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTagsByTypeAndToken;
            const encodedData = ethersFunction.encode([_moduleType,
        _securityToken
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
            const outputAbi = (_.find(self.abi, {name: 'getTagsByTypeAndToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getTagsByType = {
        async callAsync(
            _moduleType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], string[]]
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getTagsByType(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTagsByType;
            const encodedData = ethersFunction.encode([_moduleType
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
            const outputAbi = (_.find(self.abi, {name: 'getTagsByType'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getReputationByFactory = {
        async callAsync(
            _factoryAddress: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getReputationByFactory(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_factoryAddress
        ] = BaseContract._formatABIDataItemList(inputAbi, [_factoryAddress
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_factoryAddress
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getReputationByFactory;
            const encodedData = ethersFunction.encode([_factoryAddress
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
            const outputAbi = (_.find(self.abi, {name: 'getReputationByFactory'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getModulesByType = {
        async callAsync(
            _moduleType: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getModulesByType(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleType
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleType
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleType
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModulesByType;
            const encodedData = ethersFunction.encode([_moduleType
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
            const outputAbi = (_.find(self.abi, {name: 'getModulesByType'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getModulesByTypeAndToken = {
        async callAsync(
            _moduleType: number|BigNumber,
            _securityToken: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'getModulesByTypeAndToken(uint8,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleType,
        _securityToken
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleType,
        _securityToken
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleType,
        _securityToken
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModulesByTypeAndToken;
            const encodedData = ethersFunction.encode([_moduleType,
        _securityToken
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
            const outputAbi = (_.find(self.abi, {name: 'getModulesByTypeAndToken'}) as MethodAbi).outputs;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
            const self = this as any as ModuleRegistryContract;
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
    public updateFromRegistry = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('updateFromRegistry()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('updateFromRegistry()').functions.updateFromRegistry.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.updateFromRegistry.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('updateFromRegistry()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('updateFromRegistry()').functions.updateFromRegistry.encode([]);
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
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('updateFromRegistry()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('updateFromRegistry()').functions.updateFromRegistry.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'updateFromRegistry()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.updateFromRegistry;
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
            const outputAbi = (_.find(self.abi, {name: 'updateFromRegistry'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [_newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner
    ]);
            const encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferOwnership.estimateGasAsync.bind(
                    self,
                    _newOwner
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [_newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
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
            _newOwner: string,
        ): string {
            const self = this as any as ModuleRegistryContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [_newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newOwner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'transferOwnership(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_newOwner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferOwnership;
            const encodedData = ethersFunction.encode([_newOwner
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
            const outputAbi = (_.find(self.abi, {name: 'transferOwnership'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'owner()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner;
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
            const outputAbi = (_.find(self.abi, {name: 'owner'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public isPaused = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ModuleRegistryContract;
            const functionSignature = 'isPaused()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isPaused;
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
            const outputAbi = (_.find(self.abi, {name: 'isPaused'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<ModuleRegistryContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return ModuleRegistryContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<ModuleRegistryContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, []);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`ModuleRegistry successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new ModuleRegistryContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('ModuleRegistry', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
