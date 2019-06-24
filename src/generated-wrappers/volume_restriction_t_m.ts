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
    _exempted: boolean;
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
    account: string;
}

export interface VolumeRestrictionTMUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class VolumeRestrictionTMContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public reclaimETH = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('reclaimETH()', []);
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
                self.reclaimETH.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
            const encodedData = self._strictEncodeArguments('reclaimETH()',
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
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('reclaimETH()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('reclaimETH()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public ADMIN = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('ADMIN()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('ADMIN()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('unpause()', []);
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
            const encodedData = self._strictEncodeArguments('unpause()',
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
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('unpause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('unpause()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('unpause()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public paused = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('paused()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('paused()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public UNLOCKED = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('UNLOCKED()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('UNLOCKED()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
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
            const self = this as any as VolumeRestrictionTMContract;
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
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('pause()', []);
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
            const encodedData = self._strictEncodeArguments('pause()',
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
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('pause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('pause()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('pause()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public reclaimERC20 = {
        async sendTransactionAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract
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
                self.reclaimERC20.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _tokenContract
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _tokenContract: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('reclaimERC20(address)',
            [_tokenContract
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
            _tokenContract: string,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('reclaimERC20(address)',
            [_tokenContract
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tokenContract: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract
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
            const abiEncoder = self._lookupAbiEncoder('reclaimERC20(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public OPERATOR = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('OPERATOR()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('OPERATOR()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public LOCKED = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('LOCKED()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('LOCKED()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public securityToken = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('securityToken()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('securityToken()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public factory = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('factory()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('factory()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getDataStore = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getDataStore()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getDataStore()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public executeTransfer = {
        async sendTransactionAsync(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [_from,
    index_1,
    _amount,
    index_3
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
                self.executeTransfer.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _from,
    index_1,
    _amount,
    index_3
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
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)',
            [_from,
    index_1,
    _amount,
    index_3
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
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)',
            [_from,
    index_1,
    _amount,
    index_3
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [_from,
        index_1,
        _amount,
        index_3
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
            const abiEncoder = self._lookupAbiEncoder('executeTransfer(address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public verifyTransfer = {
        async callAsync(
            _from: string,
            index_1: string,
            _amount: BigNumber,
            index_3: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, string]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [_from,
        index_1,
        _amount,
        index_3
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
            const abiEncoder = self._lookupAbiEncoder('verifyTransfer(address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, string]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeExemptWalletList = {
        async sendTransactionAsync(
            _wallet: string,
            _exempted: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('changeExemptWalletList(address,bool)', [_wallet,
    _exempted
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
                self.changeExemptWalletList.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
                    self,
                    _wallet,
    _exempted
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
            _exempted: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('changeExemptWalletList(address,bool)',
            [_wallet,
    _exempted
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
            _wallet: string,
            _exempted: boolean,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeExemptWalletList(address,bool)',
            [_wallet,
    _exempted
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _wallet: string,
            _exempted: boolean,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('changeExemptWalletList(address,bool)', [_wallet,
        _exempted
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
            const abiEncoder = self._lookupAbiEncoder('changeExemptWalletList(address,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)', [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
            [_holder,
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
            const encodedData = self._strictEncodeArguments('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)', [_holder,
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
            const abiEncoder = self._lookupAbiEncoder('addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)', [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
            [_holder,
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
            const encodedData = self._strictEncodeArguments('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)', [_holder,
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
            const abiEncoder = self._lookupAbiEncoder('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])', [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
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
            const encodedData = self._strictEncodeArguments('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
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
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
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
            const encodedData = self._strictEncodeArguments('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])', [_holders,
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
            const abiEncoder = self._lookupAbiEncoder('addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])', [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
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
            const encodedData = self._strictEncodeArguments('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
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
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
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
            const encodedData = self._strictEncodeArguments('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])', [_holders,
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
            const abiEncoder = self._lookupAbiEncoder('addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
            [_allowedTokens,
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
            const encodedData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [_allowedTokens,
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
            const abiEncoder = self._lookupAbiEncoder('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)',
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)',
            [_allowedTokens,
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
            const encodedData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [_allowedTokens,
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
            const abiEncoder = self._lookupAbiEncoder('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeIndividualRestriction = {
        async sendTransactionAsync(
            _holder: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeIndividualRestriction(address)', [_holder
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
            const encodedData = self._strictEncodeArguments('removeIndividualRestriction(address)',
            [_holder
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
            _holder: string,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualRestriction(address)',
            [_holder
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
            const encodedData = self._strictEncodeArguments('removeIndividualRestriction(address)', [_holder
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
            const abiEncoder = self._lookupAbiEncoder('removeIndividualRestriction(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeIndividualRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])', [_holders
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
            const encodedData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])',
            [_holders
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
            _holders: string[],
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])',
            [_holders
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
            const encodedData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])', [_holders
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
            const abiEncoder = self._lookupAbiEncoder('removeIndividualRestrictionMulti(address[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeIndividualDailyRestriction = {
        async sendTransactionAsync(
            _holder: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)', [_holder
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
            const encodedData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)',
            [_holder
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
            _holder: string,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)',
            [_holder
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
            const encodedData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)', [_holder
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
            const abiEncoder = self._lookupAbiEncoder('removeIndividualDailyRestriction(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeIndividualDailyRestrictionMulti = {
        async sendTransactionAsync(
            _holders: string[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])', [_holders
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
            const encodedData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])',
            [_holders
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
            _holders: string[],
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])',
            [_holders
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
            const encodedData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])', [_holders
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
            const abiEncoder = self._lookupAbiEncoder('removeIndividualDailyRestrictionMulti(address[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeDefaultRestriction = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeDefaultRestriction()', []);
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
            const encodedData = self._strictEncodeArguments('removeDefaultRestriction()',
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
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeDefaultRestriction()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeDefaultRestriction()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('removeDefaultRestriction()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeDefaultDailyRestriction = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeDefaultDailyRestriction()', []);
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
            const encodedData = self._strictEncodeArguments('removeDefaultDailyRestriction()',
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
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeDefaultDailyRestriction()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('removeDefaultDailyRestriction()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('removeDefaultDailyRestriction()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)', [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
            [_holder,
    _allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
            [_holder,
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
            const encodedData = self._strictEncodeArguments('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)', [_holder,
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
            const abiEncoder = self._lookupAbiEncoder('modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)', [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
            [_holder,
    _allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            _holder: string,
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
            [_holder,
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
            const encodedData = self._strictEncodeArguments('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)', [_holder,
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
            const abiEncoder = self._lookupAbiEncoder('modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])', [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
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
            const encodedData = self._strictEncodeArguments('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
    _allowedTokens,
    _startTimes,
    _endTimes,
    _restrictionTypes
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
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
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
            const encodedData = self._strictEncodeArguments('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])', [_holders,
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
            const abiEncoder = self._lookupAbiEncoder('modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])', [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
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
            const encodedData = self._strictEncodeArguments('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
    _allowedTokens,
    _startTimes,
    _rollingPeriodInDays,
    _endTimes,
    _restrictionTypes
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
            _holders: string[],
            _allowedTokens: BigNumber[],
            _startTimes: BigNumber[],
            _rollingPeriodInDays: BigNumber[],
            _endTimes: BigNumber[],
            _restrictionTypes: Array<number|BigNumber>,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
            [_holders,
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
            const encodedData = self._strictEncodeArguments('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])', [_holders,
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
            const abiEncoder = self._lookupAbiEncoder('modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
            [_allowedTokens,
    _startTime,
    _rollingPeriodInDays,
    _endTime,
    _restrictionType
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
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _rollingPeriodInDays: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
            [_allowedTokens,
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
            const encodedData = self._strictEncodeArguments('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [_allowedTokens,
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
            const abiEncoder = self._lookupAbiEncoder('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
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
            const encodedData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            const encodedData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)',
            [_allowedTokens,
    _startTime,
    _endTime,
    _restrictionType
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
            _allowedTokens: BigNumber,
            _startTime: BigNumber,
            _endTime: BigNumber,
            _restrictionType: number|BigNumber,
        ): string {
            const self = this as any as VolumeRestrictionTMContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)',
            [_allowedTokens,
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
            const encodedData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [_allowedTokens,
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
            const abiEncoder = self._lookupAbiEncoder('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getTokensByPartition = {
        async callAsync(
            _partition: string,
            _tokenHolder: string,
            _additionalBalance: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [_partition,
        _tokenHolder,
        _additionalBalance
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
            const abiEncoder = self._lookupAbiEncoder('getTokensByPartition(bytes32,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getIndividualBucketDetailsToUser = {
        async callAsync(
            _user: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getIndividualBucketDetailsToUser(address)', [_user
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
            const abiEncoder = self._lookupAbiEncoder('getIndividualBucketDetailsToUser(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getDefaultBucketDetailsToUser = {
        async callAsync(
            _user: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getDefaultBucketDetailsToUser(address)', [_user
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
            const abiEncoder = self._lookupAbiEncoder('getDefaultBucketDetailsToUser(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getTotalTradedByUser = {
        async callAsync(
            _user: string,
            _at: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getTotalTradedByUser(address,uint256)', [_user,
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
            const abiEncoder = self._lookupAbiEncoder('getTotalTradedByUser(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getInitFunction = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getInitFunction()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getInitFunction()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getExemptAddress = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getExemptAddress()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getExemptAddress()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getIndividualRestriction = {
        async callAsync(
            _investor: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getIndividualRestriction(address)', [_investor
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
            const abiEncoder = self._lookupAbiEncoder('getIndividualRestriction(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getIndividualDailyRestriction = {
        async callAsync(
            _investor: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getIndividualDailyRestriction(address)', [_investor
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
            const abiEncoder = self._lookupAbiEncoder('getIndividualDailyRestriction(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getDefaultRestriction = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getDefaultRestriction()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getDefaultRestriction()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getDefaultDailyRestriction = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getDefaultDailyRestriction()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getDefaultDailyRestriction()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getRestrictionData = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getRestrictionData()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getRestrictionData()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getPermissions = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as VolumeRestrictionTMContract;
            const encodedData = self._strictEncodeArguments('getPermissions()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getPermissions()');
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
            _securityToken: string,
            _polyAddress: string,
    ): Promise<VolumeRestrictionTMContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
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
        logUtils.log(`VolumeRestrictionTM successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new VolumeRestrictionTMContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_securityToken,
_polyAddress
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('VolumeRestrictionTM', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method