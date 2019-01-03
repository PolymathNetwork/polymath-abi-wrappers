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

export type SecurityTokenEventArgs =
    | SecurityTokenModuleAddedEventArgs
    | SecurityTokenUpdateTokenDetailsEventArgs
    | SecurityTokenGranularityChangedEventArgs
    | SecurityTokenModuleArchivedEventArgs
    | SecurityTokenModuleUnarchivedEventArgs
    | SecurityTokenModuleRemovedEventArgs
    | SecurityTokenModuleBudgetChangedEventArgs
    | SecurityTokenFreezeTransfersEventArgs
    | SecurityTokenCheckpointCreatedEventArgs
    | SecurityTokenFreezeMintingEventArgs
    | SecurityTokenMintedEventArgs
    | SecurityTokenBurntEventArgs
    | SecurityTokenSetControllerEventArgs
    | SecurityTokenForceTransferEventArgs
    | SecurityTokenForceBurnEventArgs
    | SecurityTokenDisableControllerEventArgs
    | SecurityTokenOwnershipRenouncedEventArgs
    | SecurityTokenOwnershipTransferredEventArgs
    | SecurityTokenApprovalEventArgs
    | SecurityTokenTransferEventArgs;

export enum SecurityTokenEvents {
    ModuleAdded = 'ModuleAdded',
    UpdateTokenDetails = 'UpdateTokenDetails',
    GranularityChanged = 'GranularityChanged',
    ModuleArchived = 'ModuleArchived',
    ModuleUnarchived = 'ModuleUnarchived',
    ModuleRemoved = 'ModuleRemoved',
    ModuleBudgetChanged = 'ModuleBudgetChanged',
    FreezeTransfers = 'FreezeTransfers',
    CheckpointCreated = 'CheckpointCreated',
    FreezeMinting = 'FreezeMinting',
    Minted = 'Minted',
    Burnt = 'Burnt',
    SetController = 'SetController',
    ForceTransfer = 'ForceTransfer',
    ForceBurn = 'ForceBurn',
    DisableController = 'DisableController',
    OwnershipRenounced = 'OwnershipRenounced',
    OwnershipTransferred = 'OwnershipTransferred',
    Approval = 'Approval',
    Transfer = 'Transfer',
}

export interface SecurityTokenModuleAddedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _name: string;
    _moduleFactory: string;
    _module: string;
    _moduleCost: BigNumber;
    _budget: BigNumber;
    _timestamp: BigNumber;
}

export interface SecurityTokenUpdateTokenDetailsEventArgs extends DecodedLogArgs {
    _oldDetails: string;
    _newDetails: string;
}

export interface SecurityTokenGranularityChangedEventArgs extends DecodedLogArgs {
    _oldGranularity: BigNumber;
    _newGranularity: BigNumber;
}

export interface SecurityTokenModuleArchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
    _timestamp: BigNumber;
}

export interface SecurityTokenModuleUnarchivedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
    _timestamp: BigNumber;
}

export interface SecurityTokenModuleRemovedEventArgs extends DecodedLogArgs {
    _types: BigNumber[];
    _module: string;
    _timestamp: BigNumber;
}

export interface SecurityTokenModuleBudgetChangedEventArgs extends DecodedLogArgs {
    _moduleTypes: BigNumber[];
    _module: string;
    _oldBudget: BigNumber;
    _budget: BigNumber;
}

export interface SecurityTokenFreezeTransfersEventArgs extends DecodedLogArgs {
    _status: boolean;
    _timestamp: BigNumber;
}

export interface SecurityTokenCheckpointCreatedEventArgs extends DecodedLogArgs {
    _checkpointId: BigNumber;
    _timestamp: BigNumber;
}

export interface SecurityTokenFreezeMintingEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}

export interface SecurityTokenMintedEventArgs extends DecodedLogArgs {
    _to: string;
    _value: BigNumber;
}

export interface SecurityTokenBurntEventArgs extends DecodedLogArgs {
    _from: string;
    _value: BigNumber;
}

export interface SecurityTokenSetControllerEventArgs extends DecodedLogArgs {
    _oldController: string;
    _newController: string;
}

export interface SecurityTokenForceTransferEventArgs extends DecodedLogArgs {
    _controller: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _verifyTransfer: boolean;
    _data: string;
}

export interface SecurityTokenForceBurnEventArgs extends DecodedLogArgs {
    _controller: string;
    _from: string;
    _value: BigNumber;
    _verifyTransfer: boolean;
    _data: string;
}

export interface SecurityTokenDisableControllerEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}

export interface SecurityTokenOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}

export interface SecurityTokenOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface SecurityTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}

export interface SecurityTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class SecurityTokenContract extends BaseContract {
    public name = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
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
            _spender: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public totalSupply = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public currentCheckpointId = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'currentCheckpointId()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentCheckpointId;
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
            const outputAbi = (_.find(self.abi, {name: 'currentCheckpointId'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public granularity = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'granularity()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.granularity;
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
            const outputAbi = (_.find(self.abi, {name: 'granularity'}) as MethodAbi).outputs;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public polyToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
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
    public balanceOf = {
        async callAsync(
            _owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
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
    public renounceOwnership = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('renounceOwnership()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.renounceOwnership.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('renounceOwnership()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
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
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('renounceOwnership()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'renounceOwnership()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.renounceOwnership;
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
            const outputAbi = (_.find(self.abi, {name: 'renounceOwnership'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public polymathRegistry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'polymathRegistry()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.polymathRegistry;
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
            const outputAbi = (_.find(self.abi, {name: 'polymathRegistry'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public controllerDisabled = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'controllerDisabled()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.controllerDisabled;
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
            const outputAbi = (_.find(self.abi, {name: 'controllerDisabled'}) as MethodAbi).outputs;
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
            const self = this as any as SecurityTokenContract;
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
    public symbol = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
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
    public mintingFrozen = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'mintingFrozen()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.mintingFrozen;
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
            const outputAbi = (_.find(self.abi, {name: 'mintingFrozen'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public moduleRegistry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'moduleRegistry()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.moduleRegistry;
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
            const outputAbi = (_.find(self.abi, {name: 'moduleRegistry'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public featureRegistry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'featureRegistry()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.featureRegistry;
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
            const outputAbi = (_.find(self.abi, {name: 'featureRegistry'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public securityTokenRegistry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'securityTokenRegistry()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.securityTokenRegistry;
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
            const outputAbi = (_.find(self.abi, {name: 'securityTokenRegistry'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public tokenDetails = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'tokenDetails()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.tokenDetails;
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
            const outputAbi = (_.find(self.abi, {name: 'tokenDetails'}) as MethodAbi).outputs;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public allowance = {
        async callAsync(
            _owner: string,
            _spender: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
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
    public transfersFrozen = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'transfersFrozen()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transfersFrozen;
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
            const outputAbi = (_.find(self.abi, {name: 'transfersFrozen'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public updateFromRegistry = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public controller = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'controller()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.controller;
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
            const outputAbi = (_.find(self.abi, {name: 'controller'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public addModule = {
        async sendTransactionAsync(
            _moduleFactory: string,
            _data: string,
            _maxCost: BigNumber,
            _budget: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('addModule(address,bytes,uint256,uint256)').inputs;
            [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ]);
            const encodedData = self._lookupEthersInterface('addModule(address,bytes,uint256,uint256)').functions.addModule.encode([_moduleFactory,
    _data,
    _maxCost,
    _budget
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.addModule.estimateGasAsync.bind(
                    self,
                    _moduleFactory,
                    _data,
                    _maxCost,
                    _budget
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _moduleFactory: string,
            _data: string,
            _maxCost: BigNumber,
            _budget: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('addModule(address,bytes,uint256,uint256)').inputs;
            [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('addModule(address,bytes,uint256,uint256)').functions.addModule.encode([_moduleFactory,
    _data,
    _maxCost,
    _budget
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
            _data: string,
            _maxCost: BigNumber,
            _budget: BigNumber,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('addModule(address,bytes,uint256,uint256)').inputs;
            [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
    _data,
    _maxCost,
    _budget
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('addModule(address,bytes,uint256,uint256)').functions.addModule.encode([_moduleFactory,
    _data,
    _maxCost,
    _budget
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _moduleFactory: string,
            _data: string,
            _maxCost: BigNumber,
            _budget: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'addModule(address,bytes,uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_moduleFactory,
        _data,
        _maxCost,
        _budget
        ] = BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
        _data,
        _maxCost,
        _budget
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory,
        _data,
        _maxCost,
        _budget
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.addModule;
            const encodedData = ethersFunction.encode([_moduleFactory,
        _data,
        _maxCost,
        _budget
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
            const outputAbi = (_.find(self.abi, {name: 'addModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public archiveModule = {
        async sendTransactionAsync(
            _module: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('archiveModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
    ]);
            const encodedData = self._lookupEthersInterface('archiveModule(address)').functions.archiveModule.encode([_module
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.archiveModule.estimateGasAsync.bind(
                    self,
                    _module
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _module: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('archiveModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('archiveModule(address)').functions.archiveModule.encode([_module
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
            _module: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('archiveModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('archiveModule(address)').functions.archiveModule.encode([_module
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _module: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'archiveModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_module
        ] = BaseContract._formatABIDataItemList(inputAbi, [_module
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.archiveModule;
            const encodedData = ethersFunction.encode([_module
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
            const outputAbi = (_.find(self.abi, {name: 'archiveModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public unarchiveModule = {
        async sendTransactionAsync(
            _module: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('unarchiveModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
    ]);
            const encodedData = self._lookupEthersInterface('unarchiveModule(address)').functions.unarchiveModule.encode([_module
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.unarchiveModule.estimateGasAsync.bind(
                    self,
                    _module
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _module: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('unarchiveModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('unarchiveModule(address)').functions.unarchiveModule.encode([_module
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
            _module: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('unarchiveModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('unarchiveModule(address)').functions.unarchiveModule.encode([_module
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _module: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'unarchiveModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_module
        ] = BaseContract._formatABIDataItemList(inputAbi, [_module
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.unarchiveModule;
            const encodedData = ethersFunction.encode([_module
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
            const outputAbi = (_.find(self.abi, {name: 'unarchiveModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public removeModule = {
        async sendTransactionAsync(
            _module: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('removeModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
    ]);
            const encodedData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_module
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
                    _module
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _module: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('removeModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_module
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
            _module: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('removeModule(address)').inputs;
            [_module
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_module
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _module: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'removeModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_module
        ] = BaseContract._formatABIDataItemList(inputAbi, [_module
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeModule;
            const encodedData = ethersFunction.encode([_module
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
    public getModule = {
        async callAsync(
            _module: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, string, string, boolean, BigNumber[]]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getModule(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_module
        ] = BaseContract._formatABIDataItemList(inputAbi, [_module
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModule;
            const encodedData = ethersFunction.encode([_module
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
            const outputAbi = (_.find(self.abi, {name: 'getModule'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getModulesByName = {
        async callAsync(
            _name: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getModulesByName(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_name
        ] = BaseContract._formatABIDataItemList(inputAbi, [_name
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_name
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModulesByName;
            const encodedData = ethersFunction.encode([_name
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
            const outputAbi = (_.find(self.abi, {name: 'getModulesByName'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getModulesByType = {
        async callAsync(
            _type: number|BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getModulesByType(uint8)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_type
        ] = BaseContract._formatABIDataItemList(inputAbi, [_type
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_type
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModulesByType;
            const encodedData = ethersFunction.encode([_type
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
    public withdrawERC20 = {
        async sendTransactionAsync(
            _tokenContract: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('withdrawERC20(address,uint256)').inputs;
            [_tokenContract,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
    _value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract,
    _value
    ]);
            const encodedData = self._lookupEthersInterface('withdrawERC20(address,uint256)').functions.withdrawERC20.encode([_tokenContract,
    _value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.withdrawERC20.estimateGasAsync.bind(
                    self,
                    _tokenContract,
                    _value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _tokenContract: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('withdrawERC20(address,uint256)').inputs;
            [_tokenContract,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
    _value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('withdrawERC20(address,uint256)').functions.withdrawERC20.encode([_tokenContract,
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
            _tokenContract: string,
            _value: BigNumber,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('withdrawERC20(address,uint256)').inputs;
            [_tokenContract,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
    _value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('withdrawERC20(address,uint256)').functions.withdrawERC20.encode([_tokenContract,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tokenContract: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'withdrawERC20(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_tokenContract,
        _value
        ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
        _value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract,
        _value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.withdrawERC20;
            const encodedData = ethersFunction.encode([_tokenContract,
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
            const outputAbi = (_.find(self.abi, {name: 'withdrawERC20'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeModuleBudget = {
        async sendTransactionAsync(
            _module: string,
            _change: BigNumber,
            _increase: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('changeModuleBudget(address,uint256,bool)').inputs;
            [_module,
    _change,
    _increase
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module,
    _change,
    _increase
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module,
    _change,
    _increase
    ]);
            const encodedData = self._lookupEthersInterface('changeModuleBudget(address,uint256,bool)').functions.changeModuleBudget.encode([_module,
    _change,
    _increase
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeModuleBudget.estimateGasAsync.bind(
                    self,
                    _module,
                    _change,
                    _increase
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _module: string,
            _change: BigNumber,
            _increase: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('changeModuleBudget(address,uint256,bool)').inputs;
            [_module,
    _change,
    _increase
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module,
    _change,
    _increase
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeModuleBudget(address,uint256,bool)').functions.changeModuleBudget.encode([_module,
    _change,
    _increase
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
            _module: string,
            _change: BigNumber,
            _increase: boolean,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('changeModuleBudget(address,uint256,bool)').inputs;
            [_module,
    _change,
    _increase
    ] = BaseContract._formatABIDataItemList(inputAbi, [_module,
    _change,
    _increase
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeModuleBudget(address,uint256,bool)').functions.changeModuleBudget.encode([_module,
    _change,
    _increase
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _module: string,
            _change: BigNumber,
            _increase: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'changeModuleBudget(address,uint256,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_module,
        _change,
        _increase
        ] = BaseContract._formatABIDataItemList(inputAbi, [_module,
        _change,
        _increase
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_module,
        _change,
        _increase
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeModuleBudget;
            const encodedData = ethersFunction.encode([_module,
        _change,
        _increase
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
            const outputAbi = (_.find(self.abi, {name: 'changeModuleBudget'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public updateTokenDetails = {
        async sendTransactionAsync(
            _newTokenDetails: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('updateTokenDetails(string)').inputs;
            [_newTokenDetails
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newTokenDetails
    ]);
            const encodedData = self._lookupEthersInterface('updateTokenDetails(string)').functions.updateTokenDetails.encode([_newTokenDetails
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.updateTokenDetails.estimateGasAsync.bind(
                    self,
                    _newTokenDetails
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _newTokenDetails: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('updateTokenDetails(string)').inputs;
            [_newTokenDetails
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('updateTokenDetails(string)').functions.updateTokenDetails.encode([_newTokenDetails
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
            _newTokenDetails: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('updateTokenDetails(string)').inputs;
            [_newTokenDetails
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('updateTokenDetails(string)').functions.updateTokenDetails.encode([_newTokenDetails
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newTokenDetails: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'updateTokenDetails(string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_newTokenDetails
        ] = BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newTokenDetails
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.updateTokenDetails;
            const encodedData = ethersFunction.encode([_newTokenDetails
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
            const outputAbi = (_.find(self.abi, {name: 'updateTokenDetails'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeGranularity = {
        async sendTransactionAsync(
            _granularity: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('changeGranularity(uint256)').inputs;
            [_granularity
    ] = BaseContract._formatABIDataItemList(inputAbi, [_granularity
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_granularity
    ]);
            const encodedData = self._lookupEthersInterface('changeGranularity(uint256)').functions.changeGranularity.encode([_granularity
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeGranularity.estimateGasAsync.bind(
                    self,
                    _granularity
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _granularity: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('changeGranularity(uint256)').inputs;
            [_granularity
    ] = BaseContract._formatABIDataItemList(inputAbi, [_granularity
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeGranularity(uint256)').functions.changeGranularity.encode([_granularity
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
            _granularity: BigNumber,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('changeGranularity(uint256)').inputs;
            [_granularity
    ] = BaseContract._formatABIDataItemList(inputAbi, [_granularity
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeGranularity(uint256)').functions.changeGranularity.encode([_granularity
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _granularity: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'changeGranularity(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_granularity
        ] = BaseContract._formatABIDataItemList(inputAbi, [_granularity
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_granularity
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeGranularity;
            const encodedData = ethersFunction.encode([_granularity
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
            const outputAbi = (_.find(self.abi, {name: 'changeGranularity'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getInvestors = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getInvestors()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestors;
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
            const outputAbi = (_.find(self.abi, {name: 'getInvestors'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getInvestorsAt = {
        async callAsync(
            _checkpointId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getInvestorsAt(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_checkpointId
        ] = BaseContract._formatABIDataItemList(inputAbi, [_checkpointId
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_checkpointId
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestorsAt;
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
            const outputAbi = (_.find(self.abi, {name: 'getInvestorsAt'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public iterateInvestors = {
        async callAsync(
            _start: BigNumber,
            _end: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'iterateInvestors(uint256,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_start,
        _end
        ] = BaseContract._formatABIDataItemList(inputAbi, [_start,
        _end
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_start,
        _end
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.iterateInvestors;
            const encodedData = ethersFunction.encode([_start,
        _end
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
            const outputAbi = (_.find(self.abi, {name: 'iterateInvestors'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getInvestorCount = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getInvestorCount()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestorCount;
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
            const outputAbi = (_.find(self.abi, {name: 'getInvestorCount'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public freezeTransfers = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('freezeTransfers()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('freezeTransfers()').functions.freezeTransfers.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.freezeTransfers.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('freezeTransfers()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('freezeTransfers()').functions.freezeTransfers.encode([]);
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
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('freezeTransfers()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('freezeTransfers()').functions.freezeTransfers.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'freezeTransfers()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.freezeTransfers;
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
            const outputAbi = (_.find(self.abi, {name: 'freezeTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public unfreezeTransfers = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('unfreezeTransfers()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('unfreezeTransfers()').functions.unfreezeTransfers.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.unfreezeTransfers.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('unfreezeTransfers()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('unfreezeTransfers()').functions.unfreezeTransfers.encode([]);
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
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('unfreezeTransfers()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('unfreezeTransfers()').functions.unfreezeTransfers.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'unfreezeTransfers()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.unfreezeTransfers;
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
            const outputAbi = (_.find(self.abi, {name: 'unfreezeTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public transfer = {
        async sendTransactionAsync(
            _to: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public transferWithData = {
        async sendTransactionAsync(
            _to: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('transferWithData(address,uint256,bytes)').inputs;
            [_to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
    _value,
    _data
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
    _value,
    _data
    ]);
            const encodedData = self._lookupEthersInterface('transferWithData(address,uint256,bytes)').functions.transferWithData.encode([_to,
    _value,
    _data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferWithData.estimateGasAsync.bind(
                    self,
                    _to,
                    _value,
                    _data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _to: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('transferWithData(address,uint256,bytes)').inputs;
            [_to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferWithData(address,uint256,bytes)').functions.transferWithData.encode([_to,
    _value,
    _data
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
            _data: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('transferWithData(address,uint256,bytes)').inputs;
            [_to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferWithData(address,uint256,bytes)').functions.transferWithData.encode([_to,
    _value,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _to: string,
            _value: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'transferWithData(address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_to,
        _value,
        _data
        ] = BaseContract._formatABIDataItemList(inputAbi, [_to,
        _value,
        _data
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
        _value,
        _data
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferWithData;
            const encodedData = ethersFunction.encode([_to,
        _value,
        _data
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
            const outputAbi = (_.find(self.abi, {name: 'transferWithData'}) as MethodAbi).outputs;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public transferFromWithData = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('transferFromWithData(address,address,uint256,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _to,
    _value,
    _data
    ]);
            const encodedData = self._lookupEthersInterface('transferFromWithData(address,address,uint256,bytes)').functions.transferFromWithData.encode([_from,
    _to,
    _value,
    _data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferFromWithData.estimateGasAsync.bind(
                    self,
                    _from,
                    _to,
                    _value,
                    _data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('transferFromWithData(address,address,uint256,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferFromWithData(address,address,uint256,bytes)').functions.transferFromWithData.encode([_from,
    _to,
    _value,
    _data
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
            _data: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('transferFromWithData(address,address,uint256,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferFromWithData(address,address,uint256,bytes)').functions.transferFromWithData.encode([_from,
    _to,
    _value,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'transferFromWithData(address,address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _to,
        _value,
        _data
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _to,
        _value,
        _data
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _to,
        _value,
        _data
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferFromWithData;
            const encodedData = ethersFunction.encode([_from,
        _to,
        _value,
        _data
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
            const outputAbi = (_.find(self.abi, {name: 'transferFromWithData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public verifyTransfer = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _to,
    _value,
    _data
    ]);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes)').functions.verifyTransfer.encode([_from,
    _to,
    _value,
    _data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.verifyTransfer.estimateGasAsync.bind(
                    self,
                    _from,
                    _to,
                    _value,
                    _data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes)').functions.verifyTransfer.encode([_from,
    _to,
    _value,
    _data
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
            _data: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes)').functions.verifyTransfer.encode([_from,
    _to,
    _value,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'verifyTransfer(address,address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _to,
        _value,
        _data
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _to,
        _value,
        _data
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _to,
        _value,
        _data
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
            const encodedData = ethersFunction.encode([_from,
        _to,
        _value,
        _data
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
    public freezeMinting = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('freezeMinting()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('freezeMinting()').functions.freezeMinting.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.freezeMinting.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('freezeMinting()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('freezeMinting()').functions.freezeMinting.encode([]);
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
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('freezeMinting()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('freezeMinting()').functions.freezeMinting.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'freezeMinting()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.freezeMinting;
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
            const outputAbi = (_.find(self.abi, {name: 'freezeMinting'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public mint = {
        async sendTransactionAsync(
            _investor: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
            [_investor,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _value
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
    _value
    ]);
            const encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint.encode([_investor,
    _value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.mint.estimateGasAsync.bind(
                    self,
                    _investor,
                    _value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investor: string,
            _value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
            [_investor,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _value
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint.encode([_investor,
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
            _investor: string,
            _value: BigNumber,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
            [_investor,
    _value
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _value
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('mint(address,uint256)').functions.mint.encode([_investor,
    _value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investor: string,
            _value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'mint(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _value
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _value
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _value
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.mint;
            const encodedData = ethersFunction.encode([_investor,
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
            const outputAbi = (_.find(self.abi, {name: 'mint'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public mintWithData = {
        async sendTransactionAsync(
            _investor: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mintWithData(address,uint256,bytes)').inputs;
            [_investor,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _value,
    _data
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
    _value,
    _data
    ]);
            const encodedData = self._lookupEthersInterface('mintWithData(address,uint256,bytes)').functions.mintWithData.encode([_investor,
    _value,
    _data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.mintWithData.estimateGasAsync.bind(
                    self,
                    _investor,
                    _value,
                    _data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investor: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mintWithData(address,uint256,bytes)').inputs;
            [_investor,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('mintWithData(address,uint256,bytes)').functions.mintWithData.encode([_investor,
    _value,
    _data
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
            _investor: string,
            _value: BigNumber,
            _data: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mintWithData(address,uint256,bytes)').inputs;
            [_investor,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('mintWithData(address,uint256,bytes)').functions.mintWithData.encode([_investor,
    _value,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investor: string,
            _value: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'mintWithData(address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _value,
        _data
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _value,
        _data
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _value,
        _data
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.mintWithData;
            const encodedData = ethersFunction.encode([_investor,
        _value,
        _data
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
            const outputAbi = (_.find(self.abi, {name: 'mintWithData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public mintMulti = {
        async sendTransactionAsync(
            _investors: string[],
            _values: BigNumber[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mintMulti(address[],uint256[])').inputs;
            [_investors,
    _values
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _values
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
    _values
    ]);
            const encodedData = self._lookupEthersInterface('mintMulti(address[],uint256[])').functions.mintMulti.encode([_investors,
    _values
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.mintMulti.estimateGasAsync.bind(
                    self,
                    _investors,
                    _values
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investors: string[],
            _values: BigNumber[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mintMulti(address[],uint256[])').inputs;
            [_investors,
    _values
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _values
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('mintMulti(address[],uint256[])').functions.mintMulti.encode([_investors,
    _values
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
            _values: BigNumber[],
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('mintMulti(address[],uint256[])').inputs;
            [_investors,
    _values
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _values
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('mintMulti(address[],uint256[])').functions.mintMulti.encode([_investors,
    _values
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _values: BigNumber[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'mintMulti(address[],uint256[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors,
        _values
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
        _values
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
        _values
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.mintMulti;
            const encodedData = ethersFunction.encode([_investors,
        _values
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
            const outputAbi = (_.find(self.abi, {name: 'mintMulti'}) as MethodAbi).outputs;
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
            const self = this as any as SecurityTokenContract;
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
    public burnWithData = {
        async sendTransactionAsync(
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('burnWithData(uint256,bytes)').inputs;
            [_value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_value,
    _data
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_value,
    _data
    ]);
            const encodedData = self._lookupEthersInterface('burnWithData(uint256,bytes)').functions.burnWithData.encode([_value,
    _data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.burnWithData.estimateGasAsync.bind(
                    self,
                    _value,
                    _data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('burnWithData(uint256,bytes)').inputs;
            [_value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_value,
    _data
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('burnWithData(uint256,bytes)').functions.burnWithData.encode([_value,
    _data
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
            _value: BigNumber,
            _data: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('burnWithData(uint256,bytes)').inputs;
            [_value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_value,
    _data
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('burnWithData(uint256,bytes)').functions.burnWithData.encode([_value,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _value: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'burnWithData(uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_value,
        _data
        ] = BaseContract._formatABIDataItemList(inputAbi, [_value,
        _data
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_value,
        _data
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.burnWithData;
            const encodedData = ethersFunction.encode([_value,
        _data
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
            const outputAbi = (_.find(self.abi, {name: 'burnWithData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public burnFromWithData = {
        async sendTransactionAsync(
            _from: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('burnFromWithData(address,uint256,bytes)').inputs;
            [_from,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _value,
    _data
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _value,
    _data
    ]);
            const encodedData = self._lookupEthersInterface('burnFromWithData(address,uint256,bytes)').functions.burnFromWithData.encode([_from,
    _value,
    _data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.burnFromWithData.estimateGasAsync.bind(
                    self,
                    _from,
                    _value,
                    _data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _value: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('burnFromWithData(address,uint256,bytes)').inputs;
            [_from,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('burnFromWithData(address,uint256,bytes)').functions.burnFromWithData.encode([_from,
    _value,
    _data
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
            _value: BigNumber,
            _data: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('burnFromWithData(address,uint256,bytes)').inputs;
            [_from,
    _value,
    _data
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _value,
    _data
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('burnFromWithData(address,uint256,bytes)').functions.burnFromWithData.encode([_from,
    _value,
    _data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _value: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'burnFromWithData(address,uint256,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _value,
        _data
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _value,
        _data
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _value,
        _data
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.burnFromWithData;
            const encodedData = ethersFunction.encode([_from,
        _value,
        _data
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
            const outputAbi = (_.find(self.abi, {name: 'burnFromWithData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public createCheckpoint = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('createCheckpoint()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.createCheckpoint.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('createCheckpoint()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
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
            const self = this as any as SecurityTokenContract;
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
            const self = this as any as SecurityTokenContract;
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
    public getCheckpointTimes = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getCheckpointTimes()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getCheckpointTimes;
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
            const outputAbi = (_.find(self.abi, {name: 'getCheckpointTimes'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public totalSupplyAt = {
        async callAsync(
            _checkpointId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'totalSupplyAt(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_checkpointId
        ] = BaseContract._formatABIDataItemList(inputAbi, [_checkpointId
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_checkpointId
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalSupplyAt;
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
            const outputAbi = (_.find(self.abi, {name: 'totalSupplyAt'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public balanceOfAt = {
        async callAsync(
            _investor: string,
            _checkpointId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'balanceOfAt(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _checkpointId
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _checkpointId
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _checkpointId
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOfAt;
            const encodedData = ethersFunction.encode([_investor,
        _checkpointId
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
            const outputAbi = (_.find(self.abi, {name: 'balanceOfAt'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public setController = {
        async sendTransactionAsync(
            _controller: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('setController(address)').inputs;
            [_controller
    ] = BaseContract._formatABIDataItemList(inputAbi, [_controller
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_controller
    ]);
            const encodedData = self._lookupEthersInterface('setController(address)').functions.setController.encode([_controller
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setController.estimateGasAsync.bind(
                    self,
                    _controller
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _controller: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('setController(address)').inputs;
            [_controller
    ] = BaseContract._formatABIDataItemList(inputAbi, [_controller
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setController(address)').functions.setController.encode([_controller
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
            _controller: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('setController(address)').inputs;
            [_controller
    ] = BaseContract._formatABIDataItemList(inputAbi, [_controller
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setController(address)').functions.setController.encode([_controller
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _controller: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'setController(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_controller
        ] = BaseContract._formatABIDataItemList(inputAbi, [_controller
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_controller
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.setController;
            const encodedData = ethersFunction.encode([_controller
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
            const outputAbi = (_.find(self.abi, {name: 'setController'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public disableController = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('disableController()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('disableController()').functions.disableController.encode([]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.disableController.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('disableController()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('disableController()').functions.disableController.encode([]);
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
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('disableController()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('disableController()').functions.disableController.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'disableController()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.disableController;
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
            const outputAbi = (_.find(self.abi, {name: 'disableController'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public forceTransfer = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            _log: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('forceTransfer(address,address,uint256,bytes,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data,
    _log
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data,
    _log
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _to,
    _value,
    _data,
    _log
    ]);
            const encodedData = self._lookupEthersInterface('forceTransfer(address,address,uint256,bytes,bytes)').functions.forceTransfer.encode([_from,
    _to,
    _value,
    _data,
    _log
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.forceTransfer.estimateGasAsync.bind(
                    self,
                    _from,
                    _to,
                    _value,
                    _data,
                    _log
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            _log: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('forceTransfer(address,address,uint256,bytes,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data,
    _log
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data,
    _log
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('forceTransfer(address,address,uint256,bytes,bytes)').functions.forceTransfer.encode([_from,
    _to,
    _value,
    _data,
    _log
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
            _data: string,
            _log: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('forceTransfer(address,address,uint256,bytes,bytes)').inputs;
            [_from,
    _to,
    _value,
    _data,
    _log
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _value,
    _data,
    _log
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('forceTransfer(address,address,uint256,bytes,bytes)').functions.forceTransfer.encode([_from,
    _to,
    _value,
    _data,
    _log
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _value: BigNumber,
            _data: string,
            _log: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'forceTransfer(address,address,uint256,bytes,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _to,
        _value,
        _data,
        _log
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _to,
        _value,
        _data,
        _log
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _to,
        _value,
        _data,
        _log
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.forceTransfer;
            const encodedData = ethersFunction.encode([_from,
        _to,
        _value,
        _data,
        _log
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
            const outputAbi = (_.find(self.abi, {name: 'forceTransfer'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public forceBurn = {
        async sendTransactionAsync(
            _from: string,
            _value: BigNumber,
            _data: string,
            _log: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('forceBurn(address,uint256,bytes,bytes)').inputs;
            [_from,
    _value,
    _data,
    _log
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _value,
    _data,
    _log
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _value,
    _data,
    _log
    ]);
            const encodedData = self._lookupEthersInterface('forceBurn(address,uint256,bytes,bytes)').functions.forceBurn.encode([_from,
    _value,
    _data,
    _log
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.forceBurn.estimateGasAsync.bind(
                    self,
                    _from,
                    _value,
                    _data,
                    _log
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _value: BigNumber,
            _data: string,
            _log: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('forceBurn(address,uint256,bytes,bytes)').inputs;
            [_from,
    _value,
    _data,
    _log
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _value,
    _data,
    _log
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('forceBurn(address,uint256,bytes,bytes)').functions.forceBurn.encode([_from,
    _value,
    _data,
    _log
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
            _value: BigNumber,
            _data: string,
            _log: string,
        ): string {
            const self = this as any as SecurityTokenContract;
            const inputAbi = self._lookupAbi('forceBurn(address,uint256,bytes,bytes)').inputs;
            [_from,
    _value,
    _data,
    _log
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _value,
    _data,
    _log
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('forceBurn(address,uint256,bytes,bytes)').functions.forceBurn.encode([_from,
    _value,
    _data,
    _log
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _value: BigNumber,
            _data: string,
            _log: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'forceBurn(address,uint256,bytes,bytes)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _value,
        _data,
        _log
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _value,
        _data,
        _log
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _value,
        _data,
        _log
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.forceBurn;
            const encodedData = ethersFunction.encode([_from,
        _value,
        _data,
        _log
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
            const outputAbi = (_.find(self.abi, {name: 'forceBurn'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getVersion = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as SecurityTokenContract;
            const functionSignature = 'getVersion()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getVersion;
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
            const outputAbi = (_.find(self.abi, {name: 'getVersion'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _name: string,
            _symbol: string,
            _decimals: number|BigNumber,
            _granularity: BigNumber,
            _tokenDetails: string,
            _polymathRegistry: string,
    ): Promise<SecurityTokenContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return SecurityTokenContract.deployAsync(bytecode, abi, provider, txDefaults, _name,
_symbol,
_decimals,
_granularity,
_tokenDetails,
_polymathRegistry
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _name: string,
            _symbol: string,
            _decimals: number|BigNumber,
            _granularity: BigNumber,
            _tokenDetails: string,
            _polymathRegistry: string,
    ): Promise<SecurityTokenContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_name,
_symbol,
_decimals,
_granularity,
_tokenDetails,
_polymathRegistry
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_name,
_symbol,
_decimals,
_granularity,
_tokenDetails,
_polymathRegistry
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_name,
_symbol,
_decimals,
_granularity,
_tokenDetails,
_polymathRegistry
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
        logUtils.log(`SecurityToken successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new SecurityTokenContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_name,
_symbol,
_decimals,
_granularity,
_tokenDetails,
_polymathRegistry
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('SecurityToken', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
