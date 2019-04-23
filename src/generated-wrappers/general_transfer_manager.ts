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
    _defaultCanSendAfter: BigNumber;
    _defaultCanReceiveAfter: BigNumber;
}

export interface GeneralTransferManagerModifyWhitelistEventArgs extends DecodedLogArgs {
    _investor: string;
    _dateAdded: BigNumber;
    _addedBy: string;
    _canSendAfter: BigNumber;
    _canReceiveAfter: BigNumber;
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
    private _defaultEstimateGasFactor: number;
    public allowAllBurnTransfers = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('allowAllBurnTransfers()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('allowAllBurnTransfers()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public WHITELIST = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('WHITELIST()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('WHITELIST()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public allowAllWhitelistTransfers = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('allowAllWhitelistTransfers()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('allowAllWhitelistTransfers()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
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
                self.unpause.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('unpause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
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
    public investors = {
        async callAsync(
            index_0: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('investors(uint256)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('investors(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
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
            const self = this as any as GeneralTransferManagerContract;
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
    public takeFee = {
        async sendTransactionAsync(
            _amount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('takeFee(uint256)', [_amount
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
                self.takeFee.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('takeFee(uint256)',
            [_amount
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
            _amount: BigNumber,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('takeFee(uint256)',
            [_amount
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
            const encodedData = self._strictEncodeArguments('takeFee(uint256)', [_amount
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
            const abiEncoder = self._lookupAbiEncoder('takeFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
                self.pause.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('pause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
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
    public FLAGS = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('FLAGS()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('FLAGS()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public whitelist = {
        async callAsync(
            index_0: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('whitelist(address)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('whitelist(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public nonceMap = {
        async callAsync(
            index_0: string,
            index_1: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('nonceMap(address,uint256)', [index_0,
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
            const abiEncoder = self._lookupAbiEncoder('nonceMap(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public allowAllTransfers = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('allowAllTransfers()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('allowAllTransfers()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public signingAddress = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('signingAddress()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('signingAddress()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public issuanceAddress = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('issuanceAddress()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('issuanceAddress()');
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
            const self = this as any as GeneralTransferManagerContract;
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
            const self = this as any as GeneralTransferManagerContract;
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
    public FEE_ADMIN = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('FEE_ADMIN()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('FEE_ADMIN()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public allowAllWhitelistIssuances = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('allowAllWhitelistIssuances()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('allowAllWhitelistIssuances()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public defaults = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('defaults()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('defaults()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]
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
            const self = this as any as GeneralTransferManagerContract;
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
    public changeDefaults = {
        async sendTransactionAsync(
            _defaultCanSendAfter: BigNumber,
            _defaultCanReceiveAfter: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeDefaults(uint64,uint64)', [_defaultCanSendAfter,
    _defaultCanReceiveAfter
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
                self.changeDefaults.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _defaultCanSendAfter,
    _defaultCanReceiveAfter
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _defaultCanSendAfter: BigNumber,
            _defaultCanReceiveAfter: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeDefaults(uint64,uint64)',
            [_defaultCanSendAfter,
    _defaultCanReceiveAfter
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
            _defaultCanSendAfter: BigNumber,
            _defaultCanReceiveAfter: BigNumber,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeDefaults(uint64,uint64)',
            [_defaultCanSendAfter,
    _defaultCanReceiveAfter
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _defaultCanSendAfter: BigNumber,
            _defaultCanReceiveAfter: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeDefaults(uint64,uint64)', [_defaultCanSendAfter,
        _defaultCanReceiveAfter
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
            const abiEncoder = self._lookupAbiEncoder('changeDefaults(uint64,uint64)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeIssuanceAddress = {
        async sendTransactionAsync(
            _issuanceAddress: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeIssuanceAddress(address)', [_issuanceAddress
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
                self.changeIssuanceAddress.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _issuanceAddress
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _issuanceAddress: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeIssuanceAddress(address)',
            [_issuanceAddress
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
            _issuanceAddress: string,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeIssuanceAddress(address)',
            [_issuanceAddress
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
            const encodedData = self._strictEncodeArguments('changeIssuanceAddress(address)', [_issuanceAddress
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
            const abiEncoder = self._lookupAbiEncoder('changeIssuanceAddress(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeSigningAddress = {
        async sendTransactionAsync(
            _signingAddress: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeSigningAddress(address)', [_signingAddress
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
                self.changeSigningAddress.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _signingAddress
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _signingAddress: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeSigningAddress(address)',
            [_signingAddress
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
            _signingAddress: string,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeSigningAddress(address)',
            [_signingAddress
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
            const encodedData = self._strictEncodeArguments('changeSigningAddress(address)', [_signingAddress
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
            const abiEncoder = self._lookupAbiEncoder('changeSigningAddress(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeAllowAllTransfers = {
        async sendTransactionAsync(
            _allowAllTransfers: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllTransfers(bool)', [_allowAllTransfers
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
                self.changeAllowAllTransfers.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _allowAllTransfers
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowAllTransfers: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllTransfers(bool)',
            [_allowAllTransfers
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
            _allowAllTransfers: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeAllowAllTransfers(bool)',
            [_allowAllTransfers
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
            const encodedData = self._strictEncodeArguments('changeAllowAllTransfers(bool)', [_allowAllTransfers
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
            const abiEncoder = self._lookupAbiEncoder('changeAllowAllTransfers(bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeAllowAllWhitelistTransfers = {
        async sendTransactionAsync(
            _allowAllWhitelistTransfers: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllWhitelistTransfers(bool)', [_allowAllWhitelistTransfers
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
                self.changeAllowAllWhitelistTransfers.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _allowAllWhitelistTransfers
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowAllWhitelistTransfers: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllWhitelistTransfers(bool)',
            [_allowAllWhitelistTransfers
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
            _allowAllWhitelistTransfers: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeAllowAllWhitelistTransfers(bool)',
            [_allowAllWhitelistTransfers
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
            const encodedData = self._strictEncodeArguments('changeAllowAllWhitelistTransfers(bool)', [_allowAllWhitelistTransfers
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
            const abiEncoder = self._lookupAbiEncoder('changeAllowAllWhitelistTransfers(bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeAllowAllWhitelistIssuances = {
        async sendTransactionAsync(
            _allowAllWhitelistIssuances: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllWhitelistIssuances(bool)', [_allowAllWhitelistIssuances
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
                self.changeAllowAllWhitelistIssuances.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _allowAllWhitelistIssuances
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowAllWhitelistIssuances: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllWhitelistIssuances(bool)',
            [_allowAllWhitelistIssuances
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
            _allowAllWhitelistIssuances: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeAllowAllWhitelistIssuances(bool)',
            [_allowAllWhitelistIssuances
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
            const encodedData = self._strictEncodeArguments('changeAllowAllWhitelistIssuances(bool)', [_allowAllWhitelistIssuances
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
            const abiEncoder = self._lookupAbiEncoder('changeAllowAllWhitelistIssuances(bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeAllowAllBurnTransfers = {
        async sendTransactionAsync(
            _allowAllBurnTransfers: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllBurnTransfers(bool)', [_allowAllBurnTransfers
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
                self.changeAllowAllBurnTransfers.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _allowAllBurnTransfers
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _allowAllBurnTransfers: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeAllowAllBurnTransfers(bool)',
            [_allowAllBurnTransfers
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
            _allowAllBurnTransfers: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeAllowAllBurnTransfers(bool)',
            [_allowAllBurnTransfers
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
            const encodedData = self._strictEncodeArguments('changeAllowAllBurnTransfers(bool)', [_allowAllBurnTransfers
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
            const abiEncoder = self._lookupAbiEncoder('changeAllowAllBurnTransfers(bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public verifyTransfer = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes,bool)', [_from,
    _to,
    index_2,
    index_3,
    index_4
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
                self.verifyTransfer.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _from,
    _to,
    index_2,
    index_3,
    index_4
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
            _to: string,
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes,bool)',
            [_from,
    _to,
    index_2,
    index_3,
    index_4
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
            _to: string,
            index_2: BigNumber,
            index_3: string,
            index_4: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes,bool)',
            [_from,
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
            const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes,bool)', [_from,
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
            const abiEncoder = self._lookupAbiEncoder('verifyTransfer(address,address,uint256,bytes,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifyWhitelist = {
        async sendTransactionAsync(
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelist(address,uint256,uint256,uint256,bool)', [_investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO
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
                self.modifyWhitelist.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelist(address,uint256,uint256,uint256,bool)',
            [_investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO
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
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyWhitelist(address,uint256,uint256,uint256,bool)',
            [_investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelist(address,uint256,uint256,uint256,bool)', [_investor,
        _canSendAfter,
        _canReceiveAfter,
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
            const abiEncoder = self._lookupAbiEncoder('modifyWhitelist(address,uint256,uint256,uint256,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifyWhitelistMulti = {
        async sendTransactionAsync(
            _investors: string[],
            _canSendAfters: BigNumber[],
            _canReceiveAfters: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])', [_investors,
    _canSendAfters,
    _canReceiveAfters,
    _expiryTimes,
    _canBuyFromSTO
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
                self.modifyWhitelistMulti.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _investors,
    _canSendAfters,
    _canReceiveAfters,
    _expiryTimes,
    _canBuyFromSTO
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
            _canSendAfters: BigNumber[],
            _canReceiveAfters: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])',
            [_investors,
    _canSendAfters,
    _canReceiveAfters,
    _expiryTimes,
    _canBuyFromSTO
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
            _investors: string[],
            _canSendAfters: BigNumber[],
            _canReceiveAfters: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
        ): string {
            const self = this as any as GeneralTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])',
            [_investors,
    _canSendAfters,
    _canReceiveAfters,
    _expiryTimes,
    _canBuyFromSTO
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _investors: string[],
            _canSendAfters: BigNumber[],
            _canReceiveAfters: BigNumber[],
            _expiryTimes: BigNumber[],
            _canBuyFromSTO: boolean[],
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])', [_investors,
        _canSendAfters,
        _canReceiveAfters,
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
            const abiEncoder = self._lookupAbiEncoder('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifyWhitelistSigned = {
        async sendTransactionAsync(
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            _validFrom: BigNumber,
            _validTo: BigNumber,
            _nonce: BigNumber,
            _v: number|BigNumber,
            _r: string,
            _s: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)', [_investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
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
                self.modifyWhitelistSigned.estimateGasAsync.bind<GeneralTransferManagerContract, any, Promise<number>>(
                    self,
                    _investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
            _expiryTime: BigNumber,
            _canBuyFromSTO: boolean,
            _validFrom: BigNumber,
            _validTo: BigNumber,
            _nonce: BigNumber,
            _v: number|BigNumber,
            _r: string,
            _s: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)',
            [_investor,
    _canSendAfter,
    _canReceiveAfter,
    _expiryTime,
    _canBuyFromSTO,
    _validFrom,
    _validTo,
    _nonce,
    _v,
    _r,
    _s
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
            _investor: string,
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
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
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)',
            [_investor,
    _canSendAfter,
    _canReceiveAfter,
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
            _canSendAfter: BigNumber,
            _canReceiveAfter: BigNumber,
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
            const encodedData = self._strictEncodeArguments('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)', [_investor,
        _canSendAfter,
        _canReceiveAfter,
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
            const abiEncoder = self._lookupAbiEncoder('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getInvestors = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('getInvestors()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getInvestors()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getAllInvestorsData = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], boolean[]]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('getAllInvestorsData()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getAllInvestorsData()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber[], BigNumber[], BigNumber[], boolean[]]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getInvestorsData = {
        async callAsync(
            _investors: string[],
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber[], BigNumber[], BigNumber[], boolean[]]
        > {
            const self = this as any as GeneralTransferManagerContract;
            const encodedData = self._strictEncodeArguments('getInvestorsData(address[])', [_investors
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
            const abiEncoder = self._lookupAbiEncoder('getInvestorsData(address[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[], BigNumber[], boolean[]]
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
            const self = this as any as GeneralTransferManagerContract;
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
    ): Promise<GeneralTransferManagerContract> {
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
        logUtils.log(`GeneralTransferManager successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new GeneralTransferManagerContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_securityToken,
_polyAddress
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('GeneralTransferManager', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method