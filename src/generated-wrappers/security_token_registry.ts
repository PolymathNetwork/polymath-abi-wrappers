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

export type SecurityTokenRegistryEventArgs =
    | SecurityTokenRegistryPauseEventArgs
    | SecurityTokenRegistryUnpauseEventArgs
    | SecurityTokenRegistryTickerRemovedEventArgs
    | SecurityTokenRegistryChangeExpiryLimitEventArgs
    | SecurityTokenRegistryChangeSecurityLaunchFeeEventArgs
    | SecurityTokenRegistryChangeTickerRegistrationFeeEventArgs
    | SecurityTokenRegistryOwnershipTransferredEventArgs
    | SecurityTokenRegistryChangeTickerOwnershipEventArgs
    | SecurityTokenRegistryNewSecurityTokenEventArgs
    | SecurityTokenRegistryRegisterTickerEventArgs;

export enum SecurityTokenRegistryEvents {
    Pause = 'Pause',
    Unpause = 'Unpause',
    TickerRemoved = 'TickerRemoved',
    ChangeExpiryLimit = 'ChangeExpiryLimit',
    ChangeSecurityLaunchFee = 'ChangeSecurityLaunchFee',
    ChangeTickerRegistrationFee = 'ChangeTickerRegistrationFee',
    OwnershipTransferred = 'OwnershipTransferred',
    ChangeTickerOwnership = 'ChangeTickerOwnership',
    NewSecurityToken = 'NewSecurityToken',
    RegisterTicker = 'RegisterTicker',
}

export interface SecurityTokenRegistryPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}

export interface SecurityTokenRegistryUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}

export interface SecurityTokenRegistryTickerRemovedEventArgs extends DecodedLogArgs {
    _ticker: string;
    _removedAt: BigNumber;
    _removedBy: string;
}

export interface SecurityTokenRegistryChangeExpiryLimitEventArgs extends DecodedLogArgs {
    _oldExpiry: BigNumber;
    _newExpiry: BigNumber;
}

export interface SecurityTokenRegistryChangeSecurityLaunchFeeEventArgs extends DecodedLogArgs {
    _oldFee: BigNumber;
    _newFee: BigNumber;
}

export interface SecurityTokenRegistryChangeTickerRegistrationFeeEventArgs extends DecodedLogArgs {
    _oldFee: BigNumber;
    _newFee: BigNumber;
}

export interface SecurityTokenRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface SecurityTokenRegistryChangeTickerOwnershipEventArgs extends DecodedLogArgs {
    _ticker: string;
    _oldOwner: string;
    _newOwner: string;
}

export interface SecurityTokenRegistryNewSecurityTokenEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _fromAdmin: boolean;
    _registrationFee: BigNumber;
}

export interface SecurityTokenRegistryRegisterTickerEventArgs extends DecodedLogArgs {
    _owner: string;
    _ticker: string;
    _name: string;
    _registrationDate: BigNumber;
    _expiryDate: BigNumber;
    _fromAdmin: boolean;
    _registrationFee: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class SecurityTokenRegistryContract extends BaseContract {
    public getBytes32Value = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getBytes32Value(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getBytes32Value;
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
            const outputAbi = (_.find(self.abi, {name: 'getBytes32Value'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getBytesValue = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getBytesValue(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getBytesValue;
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
            const outputAbi = (_.find(self.abi, {name: 'getBytesValue'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getAddressValue = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getAddressValue(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAddressValue;
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
            const outputAbi = (_.find(self.abi, {name: 'getAddressValue'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getArrayAddress = {
        async callAsync(
            _key: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getArrayAddress(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_key
        ] = BaseContract._formatABIDataItemList(inputAbi, [_key
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_key
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getArrayAddress;
            const encodedData = ethersFunction.encode([_key
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
            const outputAbi = (_.find(self.abi, {name: 'getArrayAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getBoolValue = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getBoolValue(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getBoolValue;
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
            const outputAbi = (_.find(self.abi, {name: 'getBoolValue'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getStringValue = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getStringValue(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getStringValue;
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
            const outputAbi = (_.find(self.abi, {name: 'getStringValue'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getArrayBytes32 = {
        async callAsync(
            _key: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getArrayBytes32(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_key
        ] = BaseContract._formatABIDataItemList(inputAbi, [_key
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_key
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getArrayBytes32;
            const encodedData = ethersFunction.encode([_key
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
            const outputAbi = (_.find(self.abi, {name: 'getArrayBytes32'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getUintValue = {
        async callAsync(
            _variable: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getUintValue(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_variable
        ] = BaseContract._formatABIDataItemList(inputAbi, [_variable
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_variable
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getUintValue;
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
            const outputAbi = (_.find(self.abi, {name: 'getUintValue'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getArrayUint = {
        async callAsync(
            _key: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getArrayUint(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_key
        ] = BaseContract._formatABIDataItemList(inputAbi, [_key
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_key
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getArrayUint;
            const encodedData = ethersFunction.encode([_key
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
            const outputAbi = (_.find(self.abi, {name: 'getArrayUint'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public initialize = {
        async sendTransactionAsync(
            _polymathRegistry: string,
            _STFactory: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _polyToken: string,
            _owner: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('initialize(address,address,uint256,uint256,address,address)').inputs;
            [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ]);
            const encodedData = self._lookupEthersInterface('initialize(address,address,uint256,uint256,address,address)').functions.initialize.encode([_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.initialize.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _polymathRegistry,
                    _STFactory,
                    _stLaunchFee,
                    _tickerRegFee,
                    _polyToken,
                    _owner
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _polymathRegistry: string,
            _STFactory: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _polyToken: string,
            _owner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('initialize(address,address,uint256,uint256,address,address)').inputs;
            [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('initialize(address,address,uint256,uint256,address,address)').functions.initialize.encode([_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
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
            _STFactory: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _polyToken: string,
            _owner: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('initialize(address,address,uint256,uint256,address,address)').inputs;
            [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('initialize(address,address,uint256,uint256,address,address)').functions.initialize.encode([_polymathRegistry,
    _STFactory,
    _stLaunchFee,
    _tickerRegFee,
    _polyToken,
    _owner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _polymathRegistry: string,
            _STFactory: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _polyToken: string,
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'initialize(address,address,uint256,uint256,address,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_polymathRegistry,
        _STFactory,
        _stLaunchFee,
        _tickerRegFee,
        _polyToken,
        _owner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_polymathRegistry,
        _STFactory,
        _stLaunchFee,
        _tickerRegFee,
        _polyToken,
        _owner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_polymathRegistry,
        _STFactory,
        _stLaunchFee,
        _tickerRegFee,
        _polyToken,
        _owner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.initialize;
            const encodedData = ethersFunction.encode([_polymathRegistry,
        _STFactory,
        _stLaunchFee,
        _tickerRegFee,
        _polyToken,
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
    public registerTicker = {
        async sendTransactionAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('registerTicker(address,string,string)').inputs;
            [_owner,
    _ticker,
    _tokenName
    ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
    _ticker,
    _tokenName
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner,
    _ticker,
    _tokenName
    ]);
            const encodedData = self._lookupEthersInterface('registerTicker(address,string,string)').functions.registerTicker.encode([_owner,
    _ticker,
    _tokenName
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.registerTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _owner,
                    _ticker,
                    _tokenName
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('registerTicker(address,string,string)').inputs;
            [_owner,
    _ticker,
    _tokenName
    ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
    _ticker,
    _tokenName
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('registerTicker(address,string,string)').functions.registerTicker.encode([_owner,
    _ticker,
    _tokenName
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
            _owner: string,
            _ticker: string,
            _tokenName: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('registerTicker(address,string,string)').inputs;
            [_owner,
    _ticker,
    _tokenName
    ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
    _ticker,
    _tokenName
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('registerTicker(address,string,string)').functions.registerTicker.encode([_owner,
    _ticker,
    _tokenName
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'registerTicker(address,string,string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_owner,
        _ticker,
        _tokenName
        ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
        _ticker,
        _tokenName
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner,
        _ticker,
        _tokenName
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.registerTicker;
            const encodedData = ethersFunction.encode([_owner,
        _ticker,
        _tokenName
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
            const outputAbi = (_.find(self.abi, {name: 'registerTicker'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyTicker = {
        async sendTransactionAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('modifyTicker(address,string,string,uint256,uint256,bool)').inputs;
            [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ]);
            const encodedData = self._lookupEthersInterface('modifyTicker(address,string,string,uint256,uint256,bool)').functions.modifyTicker.encode([_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _owner,
                    _ticker,
                    _tokenName,
                    _registrationDate,
                    _expiryDate,
                    _status
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('modifyTicker(address,string,string,uint256,uint256,bool)').inputs;
            [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyTicker(address,string,string,uint256,uint256,bool)').functions.modifyTicker.encode([_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
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
            _owner: string,
            _ticker: string,
            _tokenName: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('modifyTicker(address,string,string,uint256,uint256,bool)').inputs;
            [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyTicker(address,string,string,uint256,uint256,bool)').functions.modifyTicker.encode([_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'modifyTicker(address,string,string,uint256,uint256,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status
        ] = BaseContract._formatABIDataItemList(inputAbi, [_owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyTicker;
            const encodedData = ethersFunction.encode([_owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status
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
            const outputAbi = (_.find(self.abi, {name: 'modifyTicker'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeTicker = {
        async sendTransactionAsync(
            _ticker: string,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('removeTicker(string)').inputs;
            [_ticker
    ] = BaseContract._formatABIDataItemList(inputAbi, [_ticker
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_ticker
    ]);
            const encodedData = self._lookupEthersInterface('removeTicker(string)').functions.removeTicker.encode([_ticker
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _ticker
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _ticker: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('removeTicker(string)').inputs;
            [_ticker
    ] = BaseContract._formatABIDataItemList(inputAbi, [_ticker
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeTicker(string)').functions.removeTicker.encode([_ticker
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
            _ticker: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('removeTicker(string)').inputs;
            [_ticker
    ] = BaseContract._formatABIDataItemList(inputAbi, [_ticker
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeTicker(string)').functions.removeTicker.encode([_ticker
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _ticker: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'removeTicker(string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_ticker
        ] = BaseContract._formatABIDataItemList(inputAbi, [_ticker
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_ticker
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeTicker;
            const encodedData = ethersFunction.encode([_ticker
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
            const outputAbi = (_.find(self.abi, {name: 'removeTicker'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public transferTickerOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            _ticker: string,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('transferTickerOwnership(address,string)').inputs;
            [_newOwner,
    _ticker
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner,
    _ticker
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner,
    _ticker
    ]);
            const encodedData = self._lookupEthersInterface('transferTickerOwnership(address,string)').functions.transferTickerOwnership.encode([_newOwner,
    _ticker
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferTickerOwnership.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newOwner,
                    _ticker
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newOwner: string,
            _ticker: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('transferTickerOwnership(address,string)').inputs;
            [_newOwner,
    _ticker
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner,
    _ticker
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferTickerOwnership(address,string)').functions.transferTickerOwnership.encode([_newOwner,
    _ticker
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
            _ticker: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('transferTickerOwnership(address,string)').inputs;
            [_newOwner,
    _ticker
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner,
    _ticker
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferTickerOwnership(address,string)').functions.transferTickerOwnership.encode([_newOwner,
    _ticker
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newOwner: string,
            _ticker: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'transferTickerOwnership(address,string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_newOwner,
        _ticker
        ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner,
        _ticker
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner,
        _ticker
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferTickerOwnership;
            const encodedData = ethersFunction.encode([_newOwner,
        _ticker
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
            const outputAbi = (_.find(self.abi, {name: 'transferTickerOwnership'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeExpiryLimit = {
        async sendTransactionAsync(
            _newExpiry: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeExpiryLimit(uint256)').inputs;
            [_newExpiry
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newExpiry
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newExpiry
    ]);
            const encodedData = self._lookupEthersInterface('changeExpiryLimit(uint256)').functions.changeExpiryLimit.encode([_newExpiry
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeExpiryLimit.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newExpiry
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newExpiry: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeExpiryLimit(uint256)').inputs;
            [_newExpiry
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newExpiry
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeExpiryLimit(uint256)').functions.changeExpiryLimit.encode([_newExpiry
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
            _newExpiry: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeExpiryLimit(uint256)').inputs;
            [_newExpiry
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newExpiry
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeExpiryLimit(uint256)').functions.changeExpiryLimit.encode([_newExpiry
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newExpiry: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'changeExpiryLimit(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_newExpiry
        ] = BaseContract._formatABIDataItemList(inputAbi, [_newExpiry
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newExpiry
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeExpiryLimit;
            const encodedData = ethersFunction.encode([_newExpiry
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
            const outputAbi = (_.find(self.abi, {name: 'changeExpiryLimit'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getTickersByOwner = {
        async callAsync(
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getTickersByOwner(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_owner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_owner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTickersByOwner;
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
            const outputAbi = (_.find(self.abi, {name: 'getTickersByOwner'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTokensByOwner = {
        async callAsync(
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getTokensByOwner(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_owner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_owner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensByOwner;
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
            const outputAbi = (_.find(self.abi, {name: 'getTokensByOwner'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTickerDetails = {
        async callAsync(
            _ticker: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, BigNumber, BigNumber, string, boolean]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getTickerDetails(string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_ticker
        ] = BaseContract._formatABIDataItemList(inputAbi, [_ticker
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_ticker
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTickerDetails;
            const encodedData = ethersFunction.encode([_ticker
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
            const outputAbi = (_.find(self.abi, {name: 'getTickerDetails'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public generateSecurityToken = {
        async sendTransactionAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('generateSecurityToken(string,string,string,bool)').inputs;
            [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ]);
            const encodedData = self._lookupEthersInterface('generateSecurityToken(string,string,string,bool)').functions.generateSecurityToken.encode([_name,
    _ticker,
    _tokenDetails,
    _divisible
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.generateSecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _name,
                    _ticker,
                    _tokenDetails,
                    _divisible
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('generateSecurityToken(string,string,string,bool)').inputs;
            [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('generateSecurityToken(string,string,string,bool)').functions.generateSecurityToken.encode([_name,
    _ticker,
    _tokenDetails,
    _divisible
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
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('generateSecurityToken(string,string,string,bool)').inputs;
            [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
    _ticker,
    _tokenDetails,
    _divisible
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('generateSecurityToken(string,string,string,bool)').functions.generateSecurityToken.encode([_name,
    _ticker,
    _tokenDetails,
    _divisible
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'generateSecurityToken(string,string,string,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_name,
        _ticker,
        _tokenDetails,
        _divisible
        ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
        _ticker,
        _tokenDetails,
        _divisible
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_name,
        _ticker,
        _tokenDetails,
        _divisible
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.generateSecurityToken;
            const encodedData = ethersFunction.encode([_name,
        _ticker,
        _tokenDetails,
        _divisible
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
            const outputAbi = (_.find(self.abi, {name: 'generateSecurityToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifySecurityToken = {
        async sendTransactionAsync(
            _name: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('modifySecurityToken(string,string,address,address,string,uint256)').inputs;
            [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ]);
            const encodedData = self._lookupEthersInterface('modifySecurityToken(string,string,address,address,string,uint256)').functions.modifySecurityToken.encode([_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifySecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _name,
                    _ticker,
                    _owner,
                    _securityToken,
                    _tokenDetails,
                    _deployedAt
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _name: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('modifySecurityToken(string,string,address,address,string,uint256)').inputs;
            [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifySecurityToken(string,string,address,address,string,uint256)').functions.modifySecurityToken.encode([_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
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
            _name: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('modifySecurityToken(string,string,address,address,string,uint256)').inputs;
            [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifySecurityToken(string,string,address,address,string,uint256)').functions.modifySecurityToken.encode([_name,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _name: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'modifySecurityToken(string,string,address,address,string,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_name,
        _ticker,
        _owner,
        _securityToken,
        _tokenDetails,
        _deployedAt
        ] = BaseContract._formatABIDataItemList(inputAbi, [_name,
        _ticker,
        _owner,
        _securityToken,
        _tokenDetails,
        _deployedAt
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_name,
        _ticker,
        _owner,
        _securityToken,
        _tokenDetails,
        _deployedAt
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifySecurityToken;
            const encodedData = ethersFunction.encode([_name,
        _ticker,
        _owner,
        _securityToken,
        _tokenDetails,
        _deployedAt
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
            const outputAbi = (_.find(self.abi, {name: 'modifySecurityToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public isSecurityToken = {
        async callAsync(
            _securityToken: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'isSecurityToken(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_securityToken
        ] = BaseContract._formatABIDataItemList(inputAbi, [_securityToken
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_securityToken
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.isSecurityToken;
            const encodedData = ethersFunction.encode([_securityToken
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
            const outputAbi = (_.find(self.abi, {name: 'isSecurityToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getSecurityTokenAddress = {
        async callAsync(
            _ticker: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getSecurityTokenAddress(string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_ticker
        ] = BaseContract._formatABIDataItemList(inputAbi, [_ticker
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_ticker
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getSecurityTokenAddress;
            const encodedData = ethersFunction.encode([_ticker
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
            const outputAbi = (_.find(self.abi, {name: 'getSecurityTokenAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getSecurityTokenData = {
        async callAsync(
            _securityToken: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, string, string, BigNumber]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getSecurityTokenData(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_securityToken
        ] = BaseContract._formatABIDataItemList(inputAbi, [_securityToken
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_securityToken
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getSecurityTokenData;
            const encodedData = ethersFunction.encode([_securityToken
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
            const outputAbi = (_.find(self.abi, {name: 'getSecurityTokenData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
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
                self.transferOwnership.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newOwner
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
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
                self.pause.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
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
                self.unpause.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public changeTickerRegistrationFee = {
        async sendTransactionAsync(
            _tickerRegFee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeTickerRegistrationFee(uint256)').inputs;
            [_tickerRegFee
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tickerRegFee
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tickerRegFee
    ]);
            const encodedData = self._lookupEthersInterface('changeTickerRegistrationFee(uint256)').functions.changeTickerRegistrationFee.encode([_tickerRegFee
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeTickerRegistrationFee.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _tickerRegFee
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _tickerRegFee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeTickerRegistrationFee(uint256)').inputs;
            [_tickerRegFee
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tickerRegFee
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeTickerRegistrationFee(uint256)').functions.changeTickerRegistrationFee.encode([_tickerRegFee
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
            _tickerRegFee: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeTickerRegistrationFee(uint256)').inputs;
            [_tickerRegFee
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tickerRegFee
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeTickerRegistrationFee(uint256)').functions.changeTickerRegistrationFee.encode([_tickerRegFee
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tickerRegFee: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'changeTickerRegistrationFee(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_tickerRegFee
        ] = BaseContract._formatABIDataItemList(inputAbi, [_tickerRegFee
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tickerRegFee
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeTickerRegistrationFee;
            const encodedData = ethersFunction.encode([_tickerRegFee
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
            const outputAbi = (_.find(self.abi, {name: 'changeTickerRegistrationFee'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeSecurityLaunchFee = {
        async sendTransactionAsync(
            _stLaunchFee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeSecurityLaunchFee(uint256)').inputs;
            [_stLaunchFee
    ] = BaseContract._formatABIDataItemList(inputAbi, [_stLaunchFee
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_stLaunchFee
    ]);
            const encodedData = self._lookupEthersInterface('changeSecurityLaunchFee(uint256)').functions.changeSecurityLaunchFee.encode([_stLaunchFee
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeSecurityLaunchFee.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _stLaunchFee
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _stLaunchFee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeSecurityLaunchFee(uint256)').inputs;
            [_stLaunchFee
    ] = BaseContract._formatABIDataItemList(inputAbi, [_stLaunchFee
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeSecurityLaunchFee(uint256)').functions.changeSecurityLaunchFee.encode([_stLaunchFee
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
            _stLaunchFee: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('changeSecurityLaunchFee(uint256)').inputs;
            [_stLaunchFee
    ] = BaseContract._formatABIDataItemList(inputAbi, [_stLaunchFee
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeSecurityLaunchFee(uint256)').functions.changeSecurityLaunchFee.encode([_stLaunchFee
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _stLaunchFee: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'changeSecurityLaunchFee(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_stLaunchFee
        ] = BaseContract._formatABIDataItemList(inputAbi, [_stLaunchFee
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_stLaunchFee
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeSecurityLaunchFee;
            const encodedData = ethersFunction.encode([_stLaunchFee
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
            const outputAbi = (_.find(self.abi, {name: 'changeSecurityLaunchFee'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public reclaimERC20 = {
        async sendTransactionAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
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
                self.reclaimERC20.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _tokenContract
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public setProtocolVersion = {
        async sendTransactionAsync(
            _STFactoryAddress: string,
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('setProtocolVersion(address,uint8,uint8,uint8)').inputs;
            [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ] = BaseContract._formatABIDataItemList(inputAbi, [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ]);
            const encodedData = self._lookupEthersInterface('setProtocolVersion(address,uint8,uint8,uint8)').functions.setProtocolVersion.encode([_STFactoryAddress,
    _major,
    _minor,
    _patch
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setProtocolVersion.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _STFactoryAddress,
                    _major,
                    _minor,
                    _patch
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _STFactoryAddress: string,
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('setProtocolVersion(address,uint8,uint8,uint8)').inputs;
            [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ] = BaseContract._formatABIDataItemList(inputAbi, [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setProtocolVersion(address,uint8,uint8,uint8)').functions.setProtocolVersion.encode([_STFactoryAddress,
    _major,
    _minor,
    _patch
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
            _STFactoryAddress: string,
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('setProtocolVersion(address,uint8,uint8,uint8)').inputs;
            [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ] = BaseContract._formatABIDataItemList(inputAbi, [_STFactoryAddress,
    _major,
    _minor,
    _patch
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setProtocolVersion(address,uint8,uint8,uint8)').functions.setProtocolVersion.encode([_STFactoryAddress,
    _major,
    _minor,
    _patch
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _STFactoryAddress: string,
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'setProtocolVersion(address,uint8,uint8,uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_STFactoryAddress,
        _major,
        _minor,
        _patch
        ] = BaseContract._formatABIDataItemList(inputAbi, [_STFactoryAddress,
        _major,
        _minor,
        _patch
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_STFactoryAddress,
        _major,
        _minor,
        _patch
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.setProtocolVersion;
            const encodedData = ethersFunction.encode([_STFactoryAddress,
        _major,
        _minor,
        _patch
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
            const outputAbi = (_.find(self.abi, {name: 'setProtocolVersion'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getSTFactoryAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getSTFactoryAddress()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getSTFactoryAddress;
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
            const outputAbi = (_.find(self.abi, {name: 'getSTFactoryAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getProtocolVersion = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getProtocolVersion()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getProtocolVersion;
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
            const outputAbi = (_.find(self.abi, {name: 'getProtocolVersion'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public updatePolyTokenAddress = {
        async sendTransactionAsync(
            _newAddress: string,
            txData: Partial<TxData> = {},
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('updatePolyTokenAddress(address)').inputs;
            [_newAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newAddress
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newAddress
    ]);
            const encodedData = self._lookupEthersInterface('updatePolyTokenAddress(address)').functions.updatePolyTokenAddress.encode([_newAddress
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.updatePolyTokenAddress.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newAddress
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newAddress: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('updatePolyTokenAddress(address)').inputs;
            [_newAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newAddress
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('updatePolyTokenAddress(address)').functions.updatePolyTokenAddress.encode([_newAddress
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
            _newAddress: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const inputAbi = self._lookupAbi('updatePolyTokenAddress(address)').inputs;
            [_newAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newAddress
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('updatePolyTokenAddress(address)').functions.updatePolyTokenAddress.encode([_newAddress
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newAddress: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'updatePolyTokenAddress(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_newAddress
        ] = BaseContract._formatABIDataItemList(inputAbi, [_newAddress
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newAddress
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.updatePolyTokenAddress;
            const encodedData = ethersFunction.encode([_newAddress
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
            const outputAbi = (_.find(self.abi, {name: 'updatePolyTokenAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getSecurityTokenLaunchFee = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getSecurityTokenLaunchFee()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getSecurityTokenLaunchFee;
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
            const outputAbi = (_.find(self.abi, {name: 'getSecurityTokenLaunchFee'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getTickerRegistrationFee = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getTickerRegistrationFee()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTickerRegistrationFee;
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
            const outputAbi = (_.find(self.abi, {name: 'getTickerRegistrationFee'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getExpiryLimit = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const functionSignature = 'getExpiryLimit()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getExpiryLimit;
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
            const outputAbi = (_.find(self.abi, {name: 'getExpiryLimit'}) as MethodAbi).outputs;
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
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
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('SecurityTokenRegistry', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
