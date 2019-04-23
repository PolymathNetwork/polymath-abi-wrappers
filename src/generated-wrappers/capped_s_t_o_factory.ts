// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { PolyResponse } from '../polyResponse';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

export type CappedSTOFactoryEventArgs =
    | CappedSTOFactoryOwnershipRenouncedEventArgs
    | CappedSTOFactoryOwnershipTransferredEventArgs
    | CappedSTOFactoryChangeFactorySetupFeeEventArgs
    | CappedSTOFactoryChangeFactoryUsageFeeEventArgs
    | CappedSTOFactoryChangeFactorySubscriptionFeeEventArgs
    | CappedSTOFactoryGenerateModuleFromFactoryEventArgs
    | CappedSTOFactoryChangeSTVersionBoundEventArgs;

export enum CappedSTOFactoryEvents {
    OwnershipRenounced = 'OwnershipRenounced',
    OwnershipTransferred = 'OwnershipTransferred',
    ChangeFactorySetupFee = 'ChangeFactorySetupFee',
    ChangeFactoryUsageFee = 'ChangeFactoryUsageFee',
    ChangeFactorySubscriptionFee = 'ChangeFactorySubscriptionFee',
    GenerateModuleFromFactory = 'GenerateModuleFromFactory',
    ChangeSTVersionBound = 'ChangeSTVersionBound',
}

export interface CappedSTOFactoryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}

export interface CappedSTOFactoryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface CappedSTOFactoryChangeFactorySetupFeeEventArgs extends DecodedLogArgs {
    _oldSetupCost: BigNumber;
    _newSetupCost: BigNumber;
    _moduleFactory: string;
}

export interface CappedSTOFactoryChangeFactoryUsageFeeEventArgs extends DecodedLogArgs {
    _oldUsageCost: BigNumber;
    _newUsageCost: BigNumber;
    _moduleFactory: string;
}

export interface CappedSTOFactoryChangeFactorySubscriptionFeeEventArgs extends DecodedLogArgs {
    _oldSubscriptionCost: BigNumber;
    _newMonthlySubscriptionCost: BigNumber;
    _moduleFactory: string;
}

export interface CappedSTOFactoryGenerateModuleFromFactoryEventArgs extends DecodedLogArgs {
    _module: string;
    _moduleName: string;
    _moduleFactory: string;
    _creator: string;
    _setupCost: BigNumber;
    _timestamp: BigNumber;
}

export interface CappedSTOFactoryChangeSTVersionBoundEventArgs extends DecodedLogArgs {
    _boundType: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class CappedSTOFactoryContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public monthlySubscriptionCost = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('monthlySubscriptionCost()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('monthlySubscriptionCost()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public name = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('name()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('name()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getName = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getName()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getName()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeTitle = {
        async sendTransactionAsync(
            _newTitle: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeTitle(string)', [_newTitle
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeTitle.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newTitle
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newTitle: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeTitle(string)',
            [_newTitle
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newTitle: string,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeTitle(string)',
            [_newTitle
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newTitle: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeTitle(string)', [_newTitle
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
            const abiEncoder = self._lookupAbiEncoder('changeTitle(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeFactorySubscriptionFee = {
        async sendTransactionAsync(
            _newSubscriptionCost: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactorySubscriptionFee(uint256)', [_newSubscriptionCost
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeFactorySubscriptionFee.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newSubscriptionCost
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newSubscriptionCost: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactorySubscriptionFee(uint256)',
            [_newSubscriptionCost
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newSubscriptionCost: BigNumber,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeFactorySubscriptionFee(uint256)',
            [_newSubscriptionCost
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newSubscriptionCost: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactorySubscriptionFee(uint256)', [_newSubscriptionCost
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
            const abiEncoder = self._lookupAbiEncoder('changeFactorySubscriptionFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public title = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('title()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('title()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public version = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('version()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('version()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeFactorySetupFee = {
        async sendTransactionAsync(
            _newSetupCost: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactorySetupFee(uint256)', [_newSetupCost
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeFactorySetupFee.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newSetupCost
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newSetupCost: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactorySetupFee(uint256)',
            [_newSetupCost
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newSetupCost: BigNumber,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeFactorySetupFee(uint256)',
            [_newSetupCost
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newSetupCost: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactorySetupFee(uint256)', [_newSetupCost
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
            const abiEncoder = self._lookupAbiEncoder('changeFactorySetupFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeVersion = {
        async sendTransactionAsync(
            _newVersion: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeVersion(string)', [_newVersion
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeVersion.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newVersion
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newVersion: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeVersion(string)',
            [_newVersion
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newVersion: string,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeVersion(string)',
            [_newVersion
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newVersion: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeVersion(string)', [_newVersion
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
            const abiEncoder = self._lookupAbiEncoder('changeVersion(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public polyToken = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('polyToken()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('polyToken()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public renounceOwnership = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('renounceOwnership()', []);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.renounceOwnership.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
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
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('renounceOwnership()',
            []);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('renounceOwnership()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('renounceOwnership()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('renounceOwnership()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public description = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('description()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('description()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public setupCost = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('setupCost()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('setupCost()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getLowerSTVersionBounds = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getLowerSTVersionBounds()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getLowerSTVersionBounds()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeName = {
        async sendTransactionAsync(
            _newName: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeName(bytes32)', [_newName
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeName.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newName
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newName: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeName(bytes32)',
            [_newName
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newName: string,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeName(bytes32)',
            [_newName
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newName: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeName(bytes32)', [_newName
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
            const abiEncoder = self._lookupAbiEncoder('changeName(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public owner = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('owner()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('owner()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getSetupCost = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getSetupCost()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getSetupCost()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeFactoryUsageFee = {
        async sendTransactionAsync(
            _newUsageCost: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactoryUsageFee(uint256)', [_newUsageCost
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeFactoryUsageFee.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newUsageCost
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newUsageCost: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactoryUsageFee(uint256)',
            [_newUsageCost
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newUsageCost: BigNumber,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeFactoryUsageFee(uint256)',
            [_newUsageCost
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newUsageCost: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeFactoryUsageFee(uint256)', [_newUsageCost
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
            const abiEncoder = self._lookupAbiEncoder('changeFactoryUsageFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public usageCost = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('usageCost()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('usageCost()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeDescription = {
        async sendTransactionAsync(
            _newDesc: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeDescription(string)', [_newDesc
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeDescription.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newDesc
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newDesc: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeDescription(string)',
            [_newDesc
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newDesc: string,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeDescription(string)',
            [_newDesc
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newDesc: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeDescription(string)', [_newDesc
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
            const abiEncoder = self._lookupAbiEncoder('changeDescription(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.transferOwnership.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _newOwner
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newOwner: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)',
            [_newOwner
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _newOwner: string,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)',
            [_newOwner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newOwner: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner
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
            const abiEncoder = self._lookupAbiEncoder('transferOwnership(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getUpperSTVersionBounds = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getUpperSTVersionBounds()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getUpperSTVersionBounds()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeSTVersionBounds = {
        async sendTransactionAsync(
            _boundType: string,
            _newVersion: Array<number|BigNumber>,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeSTVersionBounds(string,uint8[])', [_boundType,
    _newVersion
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.changeSTVersionBounds.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _boundType,
    _newVersion
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _boundType: string,
            _newVersion: Array<number|BigNumber>,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeSTVersionBounds(string,uint8[])',
            [_boundType,
    _newVersion
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _boundType: string,
            _newVersion: Array<number|BigNumber>,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeSTVersionBounds(string,uint8[])',
            [_boundType,
    _newVersion
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _boundType: string,
            _newVersion: Array<number|BigNumber>,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('changeSTVersionBounds(string,uint8[])', [_boundType,
        _newVersion
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
            const abiEncoder = self._lookupAbiEncoder('changeSTVersionBounds(string,uint8[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public deploy = {
        async sendTransactionAsync(
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('deploy(bytes)', [_data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
                self.deploy.estimateGasAsync.bind<CappedSTOFactoryContract, any, Promise<number>>(
                    self,
                    _data
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _data: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('deploy(bytes)',
            [_data
    ]);
            const contractDefaults = self._web3Wrapper.getContractDefaults();
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                {
                    from: defaultFromAddress,
                    ...contractDefaults
                },
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _data: string,
        ): string {
            const self = this as any as CappedSTOFactoryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('deploy(bytes)',
            [_data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _data: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('deploy(bytes)', [_data
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
            const abiEncoder = self._lookupAbiEncoder('deploy(bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getTypes = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getTypes()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getTypes()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getInstructions = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getInstructions()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getInstructions()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getTags = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as CappedSTOFactoryContract;
            const encodedData = self._strictEncodeArguments('getTags()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getTags()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _polyAddress: string,
            _setupCost: BigNumber,
            _usageCost: BigNumber,
            _subscriptionCost: BigNumber,
    ): Promise<CappedSTOFactoryContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_polyAddress,
_setupCost,
_usageCost,
_subscriptionCost
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_polyAddress,
_setupCost,
_usageCost,
_subscriptionCost
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_polyAddress,
_setupCost,
_usageCost,
_subscriptionCost
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
        logUtils.log(`CappedSTOFactory successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new CappedSTOFactoryContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_polyAddress,
_setupCost,
_usageCost,
_subscriptionCost
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('CappedSTOFactory', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method