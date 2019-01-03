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

export type GeneralTransferManagerEventArgs =
    | GeneralTransferManagerChangeIssuanceAddressEventArgs
    | GeneralTransferManagerAllowAllTransfersEventArgs
    | GeneralTransferManagerAllowAllWhitelistTransfersEventArgs
    | GeneralTransferManagerAllowAllWhitelistIssuancesEventArgs
    | GeneralTransferManagerAllowAllBurnTransfersEventArgs
    | GeneralTransferManagerChangeSigningAddressEventArgs
    | GeneralTransferManagerChangeDefaultsEventArgs
    | GeneralTransferManagerModifyWhitelistEventArgs
    | GeneralTransferManagerPauseEventArgs
    | GeneralTransferManagerUnpauseEventArgs;

export enum GeneralTransferManagerEvents {
    ChangeIssuanceAddress = 'ChangeIssuanceAddress',
    AllowAllTransfers = 'AllowAllTransfers',
    AllowAllWhitelistTransfers = 'AllowAllWhitelistTransfers',
    AllowAllWhitelistIssuances = 'AllowAllWhitelistIssuances',
    AllowAllBurnTransfers = 'AllowAllBurnTransfers',
    ChangeSigningAddress = 'ChangeSigningAddress',
    ChangeDefaults = 'ChangeDefaults',
    ModifyWhitelist = 'ModifyWhitelist',
    Pause = 'Pause',
    Unpause = 'Unpause',
}

export interface GeneralTransferManagerChangeIssuanceAddressEventArgs extends DecodedLogArgs {
    _issuanceAddress: string;
}

export interface GeneralTransferManagerAllowAllTransfersEventArgs extends DecodedLogArgs {
    _allowAllTransfers: boolean;
}

export interface GeneralTransferManagerAllowAllWhitelistTransfersEventArgs extends DecodedLogArgs {
    _allowAllWhitelistTransfers: boolean;
}

export interface GeneralTransferManagerAllowAllWhitelistIssuancesEventArgs extends DecodedLogArgs {
    _allowAllWhitelistIssuances: boolean;
}

export interface GeneralTransferManagerAllowAllBurnTransfersEventArgs extends DecodedLogArgs {
    _allowAllBurnTransfers: boolean;
}

export interface GeneralTransferManagerChangeSigningAddressEventArgs extends DecodedLogArgs {
    _signingAddress: string;
}

export interface GeneralTransferManagerChangeDefaultsEventArgs extends DecodedLogArgs {
    _defaultFromTime: BigNumber;
    _defaultToTime: BigNumber;
}

export interface GeneralTransferManagerModifyWhitelistEventArgs extends DecodedLogArgs {
    _investor: string;
    _dateAdded: BigNumber;
    _addedBy: string;
    _fromTime: BigNumber;
    _toTime: BigNumber;
    _expiryTime: BigNumber;
    _canBuyFromSTO: boolean;
}

export interface GeneralTransferManagerPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}

export interface GeneralTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class GeneralTransferManagerContract extends BaseContract {
    public allowAllBurnTransfers = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'allowAllBurnTransfers()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllBurnTransfers;
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
            const outputAbi = (_.find(self.abi, {name: 'allowAllBurnTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public WHITELIST = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'WHITELIST()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.WHITELIST;
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
            const outputAbi = (_.find(self.abi, {name: 'WHITELIST'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public allowAllWhitelistTransfers = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'allowAllWhitelistTransfers()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllWhitelistTransfers;
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
            const outputAbi = (_.find(self.abi, {name: 'allowAllWhitelistTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public investors = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'investors(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.investors;
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
            const outputAbi = (_.find(self.abi, {name: 'investors'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public FLAGS = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'FLAGS()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.FLAGS;
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
            const outputAbi = (_.find(self.abi, {name: 'FLAGS'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public whitelist = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'whitelist(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.whitelist;
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
            const outputAbi = (_.find(self.abi, {name: 'whitelist'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public nonceMap = {
        async callAsync(
            index_0: string,
            index_1: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'nonceMap(address,uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0,
        index_1
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0,
        index_1
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
        index_1
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.nonceMap;
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
            const outputAbi = (_.find(self.abi, {name: 'nonceMap'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public allowAllTransfers = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'allowAllTransfers()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllTransfers;
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
            const outputAbi = (_.find(self.abi, {name: 'allowAllTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public signingAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'signingAddress()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.signingAddress;
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
            const outputAbi = (_.find(self.abi, {name: 'signingAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public issuanceAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'issuanceAddress()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.issuanceAddress;
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
            const outputAbi = (_.find(self.abi, {name: 'issuanceAddress'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public allowAllWhitelistIssuances = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'allowAllWhitelistIssuances()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllWhitelistIssuances;
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
            const outputAbi = (_.find(self.abi, {name: 'allowAllWhitelistIssuances'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public defaults = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'defaults()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.defaults;
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
            const outputAbi = (_.find(self.abi, {name: 'defaults'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public changeDefaults = {
        async sendTransactionAsync(
            _defaultFromTime: BigNumber,
            _defaultToTime: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeDefaults(uint64,uint64)').inputs;
            [_defaultFromTime,
    _defaultToTime
    ] = BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
    _defaultToTime
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_defaultFromTime,
    _defaultToTime
    ]);
            const encodedData = self._lookupEthersInterface('changeDefaults(uint64,uint64)').functions.changeDefaults.encode([_defaultFromTime,
    _defaultToTime
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeDefaults.estimateGasAsync.bind(
                    self,
                    _defaultFromTime,
                    _defaultToTime
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _defaultFromTime: BigNumber,
            _defaultToTime: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeDefaults(uint64,uint64)').inputs;
            [_defaultFromTime,
    _defaultToTime
    ] = BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
    _defaultToTime
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeDefaults(uint64,uint64)').functions.changeDefaults.encode([_defaultFromTime,
    _defaultToTime
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
            _defaultFromTime: BigNumber,
            _defaultToTime: BigNumber,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeDefaults(uint64,uint64)').inputs;
            [_defaultFromTime,
    _defaultToTime
    ] = BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
    _defaultToTime
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeDefaults(uint64,uint64)').functions.changeDefaults.encode([_defaultFromTime,
    _defaultToTime
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _defaultFromTime: BigNumber,
            _defaultToTime: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeDefaults(uint64,uint64)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_defaultFromTime,
        _defaultToTime
        ] = BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
        _defaultToTime
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_defaultFromTime,
        _defaultToTime
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeDefaults;
            const encodedData = ethersFunction.encode([_defaultFromTime,
        _defaultToTime
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
            const outputAbi = (_.find(self.abi, {name: 'changeDefaults'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeIssuanceAddress = {
        async sendTransactionAsync(
            _issuanceAddress: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeIssuanceAddress(address)').inputs;
            [_issuanceAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_issuanceAddress
    ]);
            const encodedData = self._lookupEthersInterface('changeIssuanceAddress(address)').functions.changeIssuanceAddress.encode([_issuanceAddress
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeIssuanceAddress.estimateGasAsync.bind(
                    self,
                    _issuanceAddress
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _issuanceAddress: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeIssuanceAddress(address)').inputs;
            [_issuanceAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeIssuanceAddress(address)').functions.changeIssuanceAddress.encode([_issuanceAddress
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
            _issuanceAddress: string,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeIssuanceAddress(address)').inputs;
            [_issuanceAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeIssuanceAddress(address)').functions.changeIssuanceAddress.encode([_issuanceAddress
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _issuanceAddress: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeIssuanceAddress(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_issuanceAddress
        ] = BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_issuanceAddress
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeIssuanceAddress;
            const encodedData = ethersFunction.encode([_issuanceAddress
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
            const outputAbi = (_.find(self.abi, {name: 'changeIssuanceAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeSigningAddress = {
        async sendTransactionAsync(
            _signingAddress: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeSigningAddress(address)').inputs;
            [_signingAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_signingAddress
    ]);
            const encodedData = self._lookupEthersInterface('changeSigningAddress(address)').functions.changeSigningAddress.encode([_signingAddress
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeSigningAddress.estimateGasAsync.bind(
                    self,
                    _signingAddress
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _signingAddress: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeSigningAddress(address)').inputs;
            [_signingAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeSigningAddress(address)').functions.changeSigningAddress.encode([_signingAddress
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
            _signingAddress: string,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeSigningAddress(address)').inputs;
            [_signingAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeSigningAddress(address)').functions.changeSigningAddress.encode([_signingAddress
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _signingAddress: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeSigningAddress(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_signingAddress
        ] = BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_signingAddress
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeSigningAddress;
            const encodedData = ethersFunction.encode([_signingAddress
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
            const outputAbi = (_.find(self.abi, {name: 'changeSigningAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeAllowAllTransfers = {
        async sendTransactionAsync(
            _allowAllTransfers: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllTransfers(bool)').inputs;
            [_allowAllTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllTransfers
    ]);
            const encodedData = self._lookupEthersInterface('changeAllowAllTransfers(bool)').functions.changeAllowAllTransfers.encode([_allowAllTransfers
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeAllowAllTransfers.estimateGasAsync.bind(
                    self,
                    _allowAllTransfers
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _allowAllTransfers: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllTransfers(bool)').inputs;
            [_allowAllTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAllowAllTransfers(bool)').functions.changeAllowAllTransfers.encode([_allowAllTransfers
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
            _allowAllTransfers: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllTransfers(bool)').inputs;
            [_allowAllTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllTransfers(bool)').functions.changeAllowAllTransfers.encode([_allowAllTransfers
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowAllTransfers: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeAllowAllTransfers(bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowAllTransfers
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllTransfers
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllTransfers;
            const encodedData = ethersFunction.encode([_allowAllTransfers
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
            const outputAbi = (_.find(self.abi, {name: 'changeAllowAllTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeAllowAllWhitelistTransfers = {
        async sendTransactionAsync(
            _allowAllWhitelistTransfers: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllWhitelistTransfers(bool)').inputs;
            [_allowAllWhitelistTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistTransfers
    ]);
            const encodedData = self._lookupEthersInterface('changeAllowAllWhitelistTransfers(bool)').functions.changeAllowAllWhitelistTransfers.encode([_allowAllWhitelistTransfers
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeAllowAllWhitelistTransfers.estimateGasAsync.bind(
                    self,
                    _allowAllWhitelistTransfers
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _allowAllWhitelistTransfers: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllWhitelistTransfers(bool)').inputs;
            [_allowAllWhitelistTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAllowAllWhitelistTransfers(bool)').functions.changeAllowAllWhitelistTransfers.encode([_allowAllWhitelistTransfers
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
            _allowAllWhitelistTransfers: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllWhitelistTransfers(bool)').inputs;
            [_allowAllWhitelistTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllWhitelistTransfers(bool)').functions.changeAllowAllWhitelistTransfers.encode([_allowAllWhitelistTransfers
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowAllWhitelistTransfers: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeAllowAllWhitelistTransfers(bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowAllWhitelistTransfers
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistTransfers
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllWhitelistTransfers;
            const encodedData = ethersFunction.encode([_allowAllWhitelistTransfers
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
            const outputAbi = (_.find(self.abi, {name: 'changeAllowAllWhitelistTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeAllowAllWhitelistIssuances = {
        async sendTransactionAsync(
            _allowAllWhitelistIssuances: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllWhitelistIssuances(bool)').inputs;
            [_allowAllWhitelistIssuances
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistIssuances
    ]);
            const encodedData = self._lookupEthersInterface('changeAllowAllWhitelistIssuances(bool)').functions.changeAllowAllWhitelistIssuances.encode([_allowAllWhitelistIssuances
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeAllowAllWhitelistIssuances.estimateGasAsync.bind(
                    self,
                    _allowAllWhitelistIssuances
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _allowAllWhitelistIssuances: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllWhitelistIssuances(bool)').inputs;
            [_allowAllWhitelistIssuances
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAllowAllWhitelistIssuances(bool)').functions.changeAllowAllWhitelistIssuances.encode([_allowAllWhitelistIssuances
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
            _allowAllWhitelistIssuances: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllWhitelistIssuances(bool)').inputs;
            [_allowAllWhitelistIssuances
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllWhitelistIssuances(bool)').functions.changeAllowAllWhitelistIssuances.encode([_allowAllWhitelistIssuances
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowAllWhitelistIssuances: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeAllowAllWhitelistIssuances(bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowAllWhitelistIssuances
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistIssuances
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllWhitelistIssuances;
            const encodedData = ethersFunction.encode([_allowAllWhitelistIssuances
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
            const outputAbi = (_.find(self.abi, {name: 'changeAllowAllWhitelistIssuances'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public changeAllowAllBurnTransfers = {
        async sendTransactionAsync(
            _allowAllBurnTransfers: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllBurnTransfers(bool)').inputs;
            [_allowAllBurnTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllBurnTransfers
    ]);
            const encodedData = self._lookupEthersInterface('changeAllowAllBurnTransfers(bool)').functions.changeAllowAllBurnTransfers.encode([_allowAllBurnTransfers
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.changeAllowAllBurnTransfers.estimateGasAsync.bind(
                    self,
                    _allowAllBurnTransfers
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _allowAllBurnTransfers: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllBurnTransfers(bool)').inputs;
            [_allowAllBurnTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAllowAllBurnTransfers(bool)').functions.changeAllowAllBurnTransfers.encode([_allowAllBurnTransfers
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
            _allowAllBurnTransfers: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('changeAllowAllBurnTransfers(bool)').inputs;
            [_allowAllBurnTransfers
    ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllBurnTransfers(bool)').functions.changeAllowAllBurnTransfers.encode([_allowAllBurnTransfers
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _allowAllBurnTransfers: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'changeAllowAllBurnTransfers(bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_allowAllBurnTransfers
        ] = BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllBurnTransfers
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllBurnTransfers;
            const encodedData = ethersFunction.encode([_allowAllBurnTransfers
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
            const outputAbi = (_.find(self.abi, {name: 'changeAllowAllBurnTransfers'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public verifyTransfer = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    _to,
    index_2,
    index_3,
    index_4
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    index_2,
    index_3,
    index_4
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _to,
    index_2,
    index_3,
    index_4
    ]);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    _to,
    index_2,
    index_3,
    index_4
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
                    index_2,
                    index_3,
                    index_4
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    _to,
    index_2,
    index_3,
    index_4
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    index_2,
    index_3,
    index_4
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    _to,
    index_2,
    index_3,
    index_4
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
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    _to,
    index_2,
    index_3,
    index_4
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    index_2,
    index_3,
    index_4
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    _to,
    index_2,
    index_3,
    index_4
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'verifyTransfer(address,address,uint256,bytes,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _to,
        index_2,
        index_3,
        index_4
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _to,
        index_2,
        index_3,
        index_4
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _to,
        index_2,
        index_3,
        index_4
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
            const encodedData = ethersFunction.encode([_from,
        _to,
        index_2,
        index_3,
        index_4
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
    public modifyWhitelist = {
        async sendTransactionAsync(
            _investor: string,
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelist(address,uint256,uint256,uint256,bool)').inputs;
            [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ]);
            const encodedData = self._lookupEthersInterface('modifyWhitelist(address,uint256,uint256,uint256,bool)').functions.modifyWhitelist.encode([_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyWhitelist.estimateGasAsync.bind(
                    self,
                    _investor,
                    _fromTime,
                    _toTime,
                    _expiryTime,
                    _canBuyFromSTO
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investor: string,
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelist(address,uint256,uint256,uint256,bool)').inputs;
            [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyWhitelist(address,uint256,uint256,uint256,bool)').functions.modifyWhitelist.encode([_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
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
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelist(address,uint256,uint256,uint256,bool)').inputs;
            [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyWhitelist(address,uint256,uint256,uint256,bool)').functions.modifyWhitelist.encode([_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investor: string,
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'modifyWhitelist(address,uint256,uint256,uint256,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyWhitelist;
            const encodedData = ethersFunction.encode([_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO
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
            const outputAbi = (_.find(self.abi, {name: 'modifyWhitelist'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyWhitelistMulti = {
        async sendTransactionAsync(
            _investors: string[],
            _fromTimes: BigNumber[],
            _toTimes: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').inputs;
            [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ]);
            const encodedData = self._lookupEthersInterface('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').functions.modifyWhitelistMulti.encode([_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyWhitelistMulti.estimateGasAsync.bind(
                    self,
                    _investors,
                    _fromTimes,
                    _toTimes,
                    _expiryTimes,
                    _canBuyFromSTO
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investors: string[],
            _fromTimes: BigNumber[],
            _toTimes: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').inputs;
            [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').functions.modifyWhitelistMulti.encode([_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
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
            _fromTimes: BigNumber[],
            _toTimes: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').inputs;
            [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').functions.modifyWhitelistMulti.encode([_investors,
    _fromTimes,
    _toTimes,
    _expiryTimes,
    _canBuyFromSTO
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _fromTimes: BigNumber[],
            _toTimes: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors,
        _fromTimes,
        _toTimes,
        _expiryTimes,
        _canBuyFromSTO
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors,
        _fromTimes,
        _toTimes,
        _expiryTimes,
        _canBuyFromSTO
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
        _fromTimes,
        _toTimes,
        _expiryTimes,
        _canBuyFromSTO
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyWhitelistMulti;
            const encodedData = ethersFunction.encode([_investors,
        _fromTimes,
        _toTimes,
        _expiryTimes,
        _canBuyFromSTO
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
            const outputAbi = (_.find(self.abi, {name: 'modifyWhitelistMulti'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public modifyWhitelistSigned = {
        async sendTransactionAsync(
            _investor: string,
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            _validFrom: BigNumber,
            _validTo: BigNumber,
            _nonce: BigNumber,
            _v: number|BigNumber,
            _r: string,
            _s: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').inputs;
            [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ]);
            const encodedData = self._lookupEthersInterface('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').functions.modifyWhitelistSigned.encode([_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.modifyWhitelistSigned.estimateGasAsync.bind(
                    self,
                    _investor,
                    _fromTime,
                    _toTime,
                    _expiryTime,
                    _canBuyFromSTO,
                    _validFrom,
                    _validTo,
                    _nonce,
                    _v,
                    _r,
                    _s
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _investor: string,
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            _validFrom: BigNumber,
            _validTo: BigNumber,
            _nonce: BigNumber,
            _v: number|BigNumber,
            _r: string,
            _s: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').inputs;
            [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').functions.modifyWhitelistSigned.encode([_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
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
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            _validFrom: BigNumber,
            _validTo: BigNumber,
            _nonce: BigNumber,
            _v: number|BigNumber,
            _r: string,
            _s: string,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const inputAbi = self._lookupAbi('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').inputs;
            [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').functions.modifyWhitelistSigned.encode([_investor,
    _fromTime,
    _toTime,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investor: string,
            _fromTime: BigNumber,
            _toTime: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            _validFrom: BigNumber,
            _validTo: BigNumber,
            _nonce: BigNumber,
            _v: number|BigNumber,
            _r: string,
            _s: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO,
        _validFrom,
        _validTo,
        _nonce,
        _v,
        _r,
        _s
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO,
        _validFrom,
        _validTo,
        _nonce,
        _v,
        _r,
        _s
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO,
        _validFrom,
        _validTo,
        _nonce,
        _v,
        _r,
        _s
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyWhitelistSigned;
            const encodedData = ethersFunction.encode([_investor,
        _fromTime,
        _toTime,
        _expiryTime,
        _canBuyFromSTO,
        _validFrom,
        _validTo,
        _nonce,
        _v,
        _r,
        _s
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
            const outputAbi = (_.find(self.abi, {name: 'modifyWhitelistSigned'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public getAllInvestorsData = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], boolean[]]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'getAllInvestorsData()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAllInvestorsData;
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
            const outputAbi = (_.find(self.abi, {name: 'getAllInvestorsData'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getInvestorsData = {
        async callAsync(
            _investors: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber[], BigNumber[], BigNumber[], boolean[]]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const functionSignature = 'getInvestorsData(address[])';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_investors
        ] = BaseContract._formatABIDataItemList(inputAbi, [_investors
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestorsData;
            const encodedData = ethersFunction.encode([_investors
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
            const outputAbi = (_.find(self.abi, {name: 'getInvestorsData'}) as MethodAbi).outputs;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
            _securityToken: string,
            _polyAddress: string,
    ): Promise<GeneralTransferManagerContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return GeneralTransferManagerContract.deployAsync(bytecode, abi, provider, txDefaults, _securityToken,
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
    ): Promise<GeneralTransferManagerContract> {
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
        logUtils.log(`GeneralTransferManager successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new GeneralTransferManagerContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_securityToken,
_polyAddress
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super('GeneralTransferManager', abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
