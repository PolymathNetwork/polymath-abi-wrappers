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

export type SecurityTokenRegistryEventArgs =
    | SecurityTokenRegistryPauseEventArgs
    | SecurityTokenRegistryUnpauseEventArgs
    | SecurityTokenRegistryTickerRemovedEventArgs
    | SecurityTokenRegistryChangeExpiryLimitEventArgs
    | SecurityTokenRegistryChangeSecurityLaunchFeeEventArgs
    | SecurityTokenRegistryChangeTickerRegistrationFeeEventArgs
    | SecurityTokenRegistryChangeFeeCurrencyEventArgs
    | SecurityTokenRegistryOwnershipTransferredEventArgs
    | SecurityTokenRegistryChangeTickerOwnershipEventArgs
    | SecurityTokenRegistryNewSecurityTokenEventArgs
    | SecurityTokenRegistryRegisterTickerEventArgs
    | SecurityTokenRegistrySecurityTokenRefreshedEventArgs
    | SecurityTokenRegistryProtocolFactorySetEventArgs
    | SecurityTokenRegistryLatestVersionSetEventArgs
    | SecurityTokenRegistryProtocolFactoryRemovedEventArgs;

export enum SecurityTokenRegistryEvents {
    Pause = 'Pause',
    Unpause = 'Unpause',
    TickerRemoved = 'TickerRemoved',
    ChangeExpiryLimit = 'ChangeExpiryLimit',
    ChangeSecurityLaunchFee = 'ChangeSecurityLaunchFee',
    ChangeTickerRegistrationFee = 'ChangeTickerRegistrationFee',
    ChangeFeeCurrency = 'ChangeFeeCurrency',
    OwnershipTransferred = 'OwnershipTransferred',
    ChangeTickerOwnership = 'ChangeTickerOwnership',
    NewSecurityToken = 'NewSecurityToken',
    RegisterTicker = 'RegisterTicker',
    SecurityTokenRefreshed = 'SecurityTokenRefreshed',
    ProtocolFactorySet = 'ProtocolFactorySet',
    LatestVersionSet = 'LatestVersionSet',
    ProtocolFactoryRemoved = 'ProtocolFactoryRemoved',
}

export interface SecurityTokenRegistryPauseEventArgs extends DecodedLogArgs {
    account: string;
}

export interface SecurityTokenRegistryUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}

export interface SecurityTokenRegistryTickerRemovedEventArgs extends DecodedLogArgs {
    _ticker: string;
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

export interface SecurityTokenRegistryChangeFeeCurrencyEventArgs extends DecodedLogArgs {
    _isFeeInPoly: boolean;
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
    _usdFee: BigNumber;
    _polyFee: BigNumber;
    _protocolVersion: BigNumber;
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
    _registrationDate: BigNumber;
    _expiryDate: BigNumber;
    _fromAdmin: boolean;
    _registrationFeePoly: BigNumber;
    _registrationFeeUsd: BigNumber;
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

export interface SecurityTokenRegistrySecurityTokenRefreshedEventArgs extends DecodedLogArgs {
    _ticker: string;
    _name: string;
    _securityTokenAddress: string;
    _owner: string;
    _addedAt: BigNumber;
    _registrant: string;
    _protocolVersion: BigNumber;
}

export interface SecurityTokenRegistryProtocolFactorySetEventArgs extends DecodedLogArgs {
    _STFactory: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}

export interface SecurityTokenRegistryLatestVersionSetEventArgs extends DecodedLogArgs {
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}

export interface SecurityTokenRegistryProtocolFactoryRemovedEventArgs extends DecodedLogArgs {
    _STFactory: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class SecurityTokenRegistryContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public getBytes32Value = {
        async callAsync(
            _variable: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getBytes32Value(bytes32)', [_variable
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
            const abiEncoder = self._lookupAbiEncoder('getBytes32Value(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getBytesValue = {
        async callAsync(
            _variable: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getBytesValue(bytes32)', [_variable
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
            const abiEncoder = self._lookupAbiEncoder('getBytesValue(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getAddressValue = {
        async callAsync(
            _variable: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getAddressValue(bytes32)', [_variable
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
            const abiEncoder = self._lookupAbiEncoder('getAddressValue(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getArrayAddress = {
        async callAsync(
            _key: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getArrayAddress(bytes32)', [_key
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
            const abiEncoder = self._lookupAbiEncoder('getArrayAddress(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getBoolValue = {
        async callAsync(
            _variable: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getBoolValue(bytes32)', [_variable
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
            const abiEncoder = self._lookupAbiEncoder('getBoolValue(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getStringValue = {
        async callAsync(
            _variable: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getStringValue(bytes32)', [_variable
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
            const abiEncoder = self._lookupAbiEncoder('getStringValue(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getArrayBytes32 = {
        async callAsync(
            _key: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getArrayBytes32(bytes32)', [_key
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
            const abiEncoder = self._lookupAbiEncoder('getArrayBytes32(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getUintValue = {
        async callAsync(
            _variable: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getUintValue(bytes32)', [_variable
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
            const abiEncoder = self._lookupAbiEncoder('getUintValue(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getArrayUint = {
        async callAsync(
            _key: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getArrayUint(bytes32)', [_key
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
            const abiEncoder = self._lookupAbiEncoder('getArrayUint(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public initialize = {
        async sendTransactionAsync(
            _polymathRegistry: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _owner: string,
            _getterContract: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('initialize(address,uint256,uint256,address,address)', [_polymathRegistry,
    _stLaunchFee,
    _tickerRegFee,
    _owner,
    _getterContract
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
                self.initialize.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _polymathRegistry,
    _stLaunchFee,
    _tickerRegFee,
    _owner,
    _getterContract
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _polymathRegistry: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _owner: string,
            _getterContract: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('initialize(address,uint256,uint256,address,address)',
            [_polymathRegistry,
    _stLaunchFee,
    _tickerRegFee,
    _owner,
    _getterContract
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
            _polymathRegistry: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _owner: string,
            _getterContract: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('initialize(address,uint256,uint256,address,address)',
            [_polymathRegistry,
    _stLaunchFee,
    _tickerRegFee,
    _owner,
    _getterContract
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _polymathRegistry: string,
            _stLaunchFee: BigNumber,
            _tickerRegFee: BigNumber,
            _owner: string,
            _getterContract: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('initialize(address,uint256,uint256,address,address)', [_polymathRegistry,
        _stLaunchFee,
        _tickerRegFee,
        _owner,
        _getterContract
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
            const abiEncoder = self._lookupAbiEncoder('initialize(address,uint256,uint256,address,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public updateFromRegistry = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('updateFromRegistry()', []);
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
                self.updateFromRegistry.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('updateFromRegistry()',
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
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('updateFromRegistry()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('updateFromRegistry()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('updateFromRegistry()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getFees = {
        async sendTransactionAsync(
            _feeType: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getFees(bytes32)', [_feeType
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
                self.getFees.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _feeType
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _feeType: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getFees(bytes32)',
            [_feeType
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
            _feeType: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getFees(bytes32)',
            [_feeType
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _feeType: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, BigNumber]
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getFees(bytes32)', [_feeType
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
            const abiEncoder = self._lookupAbiEncoder('getFees(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getSecurityTokenLaunchFee = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getSecurityTokenLaunchFee()', []);
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
                self.getSecurityTokenLaunchFee.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getSecurityTokenLaunchFee()',
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
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getSecurityTokenLaunchFee()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getSecurityTokenLaunchFee()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getSecurityTokenLaunchFee()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public getTickerRegistrationFee = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getTickerRegistrationFee()', []);
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
                self.getTickerRegistrationFee.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getTickerRegistrationFee()',
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
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getTickerRegistrationFee()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('getTickerRegistrationFee()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getTickerRegistrationFee()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public setGetterRegistry = {
        async sendTransactionAsync(
            _getterContract: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setGetterRegistry(address)', [_getterContract
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
                self.setGetterRegistry.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _getterContract
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _getterContract: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setGetterRegistry(address)',
            [_getterContract
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
            _getterContract: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setGetterRegistry(address)',
            [_getterContract
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _getterContract: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setGetterRegistry(address)', [_getterContract
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
            const abiEncoder = self._lookupAbiEncoder('setGetterRegistry(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public registerNewTicker = {
        async sendTransactionAsync(
            _owner: string,
            _ticker: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('registerNewTicker(address,string)', [_owner,
    _ticker
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
                self.registerNewTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _owner,
    _ticker
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _owner: string,
            _ticker: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('registerNewTicker(address,string)',
            [_owner,
    _ticker
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
            _owner: string,
            _ticker: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('registerNewTicker(address,string)',
            [_owner,
    _ticker
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _owner: string,
            _ticker: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('registerNewTicker(address,string)', [_owner,
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
            const abiEncoder = self._lookupAbiEncoder('registerNewTicker(address,string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public registerTicker = {
        async sendTransactionAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('registerTicker(address,string,string)', [_owner,
    _ticker,
    _tokenName
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
                self.registerTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _owner,
    _ticker,
    _tokenName
    ,
                    estimateGasFactor,
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
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('registerTicker(address,string,string)',
            [_owner,
    _ticker,
    _tokenName
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
            _owner: string,
            _ticker: string,
            _tokenName: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('registerTicker(address,string,string)',
            [_owner,
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
            const encodedData = self._strictEncodeArguments('registerTicker(address,string,string)', [_owner,
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
            const abiEncoder = self._lookupAbiEncoder('registerTicker(address,string,string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifyExistingTicker = {
        async sendTransactionAsync(
            _owner: string,
            _ticker: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)', [_owner,
    _ticker,
    _registrationDate,
    _expiryDate,
    _status
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
                self.modifyExistingTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _owner,
    _ticker,
    _registrationDate,
    _expiryDate,
    _status
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _owner: string,
            _ticker: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)',
            [_owner,
    _ticker,
    _registrationDate,
    _expiryDate,
    _status
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
            _owner: string,
            _ticker: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)',
            [_owner,
    _ticker,
    _registrationDate,
    _expiryDate,
    _status
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _owner: string,
            _ticker: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)', [_owner,
        _ticker,
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
            const abiEncoder = self._lookupAbiEncoder('modifyExistingTicker(address,string,uint256,uint256,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifyTicker = {
        async sendTransactionAsync(
            _owner: string,
            _ticker: string,
            _tokenName: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)', [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
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
                self.modifyTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
    ,
                    estimateGasFactor,
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
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)',
            [_owner,
    _ticker,
    _tokenName,
    _registrationDate,
    _expiryDate,
    _status
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
            _owner: string,
            _ticker: string,
            _tokenName: string,
            _registrationDate: BigNumber,
            _expiryDate: BigNumber,
            _status: boolean,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)',
            [_owner,
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
            const encodedData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)', [_owner,
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
            const abiEncoder = self._lookupAbiEncoder('modifyTicker(address,string,string,uint256,uint256,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeTicker = {
        async sendTransactionAsync(
            _ticker: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('removeTicker(string)', [_ticker
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
                self.removeTicker.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _ticker
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _ticker: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('removeTicker(string)',
            [_ticker
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
            _ticker: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeTicker(string)',
            [_ticker
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
            const encodedData = self._strictEncodeArguments('removeTicker(string)', [_ticker
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
            const abiEncoder = self._lookupAbiEncoder('removeTicker(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public tickerAvailable = {
        async callAsync(
            _ticker: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('tickerAvailable(string)', [_ticker
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
            const abiEncoder = self._lookupAbiEncoder('tickerAvailable(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public transferTickerOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            _ticker: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('transferTickerOwnership(address,string)', [_newOwner,
    _ticker
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
                self.transferTickerOwnership.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newOwner,
    _ticker
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
            _ticker: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('transferTickerOwnership(address,string)',
            [_newOwner,
    _ticker
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
            _ticker: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferTickerOwnership(address,string)',
            [_newOwner,
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
            const encodedData = self._strictEncodeArguments('transferTickerOwnership(address,string)', [_newOwner,
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
            const abiEncoder = self._lookupAbiEncoder('transferTickerOwnership(address,string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeExpiryLimit = {
        async sendTransactionAsync(
            _newExpiry: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeExpiryLimit(uint256)', [_newExpiry
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
                self.changeExpiryLimit.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newExpiry
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newExpiry: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeExpiryLimit(uint256)',
            [_newExpiry
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
            _newExpiry: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeExpiryLimit(uint256)',
            [_newExpiry
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
            const encodedData = self._strictEncodeArguments('changeExpiryLimit(uint256)', [_newExpiry
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
            const abiEncoder = self._lookupAbiEncoder('changeExpiryLimit(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public generateSecurityToken = {
        async sendTransactionAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)', [_name,
    _ticker,
    _tokenDetails,
    _divisible
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
                self.generateSecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _name,
    _ticker,
    _tokenDetails,
    _divisible
    ,
                    estimateGasFactor,
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
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)',
            [_name,
    _ticker,
    _tokenDetails,
    _divisible
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
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)',
            [_name,
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
            const encodedData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)', [_name,
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
            const abiEncoder = self._lookupAbiEncoder('generateSecurityToken(string,string,string,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public generateNewSecurityToken = {
        async sendTransactionAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            _treasuryWallet: string,
            _protocolVersion: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('generateNewSecurityToken(string,string,string,bool,address,uint256)', [_name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet,
    _protocolVersion
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
                self.generateNewSecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet,
    _protocolVersion
    ,
                    estimateGasFactor,
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
            _treasuryWallet: string,
            _protocolVersion: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('generateNewSecurityToken(string,string,string,bool,address,uint256)',
            [_name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet,
    _protocolVersion
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
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            _treasuryWallet: string,
            _protocolVersion: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('generateNewSecurityToken(string,string,string,bool,address,uint256)',
            [_name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet,
    _protocolVersion
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            _treasuryWallet: string,
            _protocolVersion: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('generateNewSecurityToken(string,string,string,bool,address,uint256)', [_name,
        _ticker,
        _tokenDetails,
        _divisible,
        _treasuryWallet,
        _protocolVersion
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
            const abiEncoder = self._lookupAbiEncoder('generateNewSecurityToken(string,string,string,bool,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public refreshSecurityToken = {
        async sendTransactionAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            _treasuryWallet: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)', [_name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet
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
                self.refreshSecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet
    ,
                    estimateGasFactor,
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
            _treasuryWallet: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)',
            [_name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet
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
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            _treasuryWallet: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)',
            [_name,
    _ticker,
    _tokenDetails,
    _divisible,
    _treasuryWallet
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _name: string,
            _ticker: string,
            _tokenDetails: string,
            _divisible: boolean,
            _treasuryWallet: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)', [_name,
        _ticker,
        _tokenDetails,
        _divisible,
        _treasuryWallet
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
            const abiEncoder = self._lookupAbiEncoder('refreshSecurityToken(string,string,string,bool,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifyExistingSecurityToken = {
        async sendTransactionAsync(
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyExistingSecurityToken(string,address,address,string,uint256)', [_ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
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
                self.modifyExistingSecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifyExistingSecurityToken(string,address,address,string,uint256)',
            [_ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
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
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifyExistingSecurityToken(string,address,address,string,uint256)',
            [_ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
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
            const encodedData = self._strictEncodeArguments('modifyExistingSecurityToken(string,address,address,string,uint256)', [_ticker,
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
            const abiEncoder = self._lookupAbiEncoder('modifyExistingSecurityToken(string,address,address,string,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public modifySecurityToken = {
        async sendTransactionAsync(
            index_0: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifySecurityToken(string,string,address,address,string,uint256)', [index_0,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
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
                self.modifySecurityToken.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    index_0,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            index_0: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('modifySecurityToken(string,string,address,address,string,uint256)',
            [index_0,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
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
            index_0: string,
            _ticker: string,
            _owner: string,
            _securityToken: string,
            _tokenDetails: string,
            _deployedAt: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('modifySecurityToken(string,string,address,address,string,uint256)',
            [index_0,
    _ticker,
    _owner,
    _securityToken,
    _tokenDetails,
    _deployedAt
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            index_0: string,
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
            const encodedData = self._strictEncodeArguments('modifySecurityToken(string,string,address,address,string,uint256)', [index_0,
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
            const abiEncoder = self._lookupAbiEncoder('modifySecurityToken(string,string,address,address,string,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public isSecurityToken = {
        async callAsync(
            _securityToken: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('isSecurityToken(address)', [_securityToken
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
            const abiEncoder = self._lookupAbiEncoder('isSecurityToken(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
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
            const self = this as any as SecurityTokenRegistryContract;
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
                self.transferOwnership.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
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
                self.pause.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('pause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
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
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
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
                self.unpause.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('unpause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
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
    public changeTickerRegistrationFee = {
        async sendTransactionAsync(
            _tickerRegFee: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)', [_tickerRegFee
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
                self.changeTickerRegistrationFee.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _tickerRegFee
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _tickerRegFee: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)',
            [_tickerRegFee
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
            _tickerRegFee: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)',
            [_tickerRegFee
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
            const encodedData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)', [_tickerRegFee
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
            const abiEncoder = self._lookupAbiEncoder('changeTickerRegistrationFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeSecurityLaunchFee = {
        async sendTransactionAsync(
            _stLaunchFee: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)', [_stLaunchFee
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
                self.changeSecurityLaunchFee.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _stLaunchFee
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _stLaunchFee: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)',
            [_stLaunchFee
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
            _stLaunchFee: BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)',
            [_stLaunchFee
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
            const encodedData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)', [_stLaunchFee
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
            const abiEncoder = self._lookupAbiEncoder('changeSecurityLaunchFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeFeesAmountAndCurrency = {
        async sendTransactionAsync(
            _tickerRegFee: BigNumber,
            _stLaunchFee: BigNumber,
            _isFeeInPoly: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)', [_tickerRegFee,
    _stLaunchFee,
    _isFeeInPoly
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
                self.changeFeesAmountAndCurrency.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _tickerRegFee,
    _stLaunchFee,
    _isFeeInPoly
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _tickerRegFee: BigNumber,
            _stLaunchFee: BigNumber,
            _isFeeInPoly: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)',
            [_tickerRegFee,
    _stLaunchFee,
    _isFeeInPoly
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
            _tickerRegFee: BigNumber,
            _stLaunchFee: BigNumber,
            _isFeeInPoly: boolean,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)',
            [_tickerRegFee,
    _stLaunchFee,
    _isFeeInPoly
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tickerRegFee: BigNumber,
            _stLaunchFee: BigNumber,
            _isFeeInPoly: boolean,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)', [_tickerRegFee,
        _stLaunchFee,
        _isFeeInPoly
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
            const abiEncoder = self._lookupAbiEncoder('changeFeesAmountAndCurrency(uint256,uint256,bool)');
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
            const self = this as any as SecurityTokenRegistryContract;
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
                self.reclaimERC20.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public setProtocolFactory = {
        async sendTransactionAsync(
            _STFactoryAddress: string,
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)', [_STFactoryAddress,
    _major,
    _minor,
    _patch
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
                self.setProtocolFactory.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _STFactoryAddress,
    _major,
    _minor,
    _patch
    ,
                    estimateGasFactor,
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
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)',
            [_STFactoryAddress,
    _major,
    _minor,
    _patch
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
            _STFactoryAddress: string,
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)',
            [_STFactoryAddress,
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
            const encodedData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)', [_STFactoryAddress,
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
            const abiEncoder = self._lookupAbiEncoder('setProtocolFactory(address,uint8,uint8,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public removeProtocolFactory = {
        async sendTransactionAsync(
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)', [_major,
    _minor,
    _patch
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
                self.removeProtocolFactory.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _major,
    _minor,
    _patch
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)',
            [_major,
    _minor,
    _patch
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
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)',
            [_major,
    _minor,
    _patch
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)', [_major,
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
            const abiEncoder = self._lookupAbiEncoder('removeProtocolFactory(uint8,uint8,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public setLatestVersion = {
        async sendTransactionAsync(
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)', [_major,
    _minor,
    _patch
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
                self.setLatestVersion.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _major,
    _minor,
    _patch
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)',
            [_major,
    _minor,
    _patch
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
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)',
            [_major,
    _minor,
    _patch
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _major: number|BigNumber,
            _minor: number|BigNumber,
            _patch: number|BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)', [_major,
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
            const abiEncoder = self._lookupAbiEncoder('setLatestVersion(uint8,uint8,uint8)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public updatePolyTokenAddress = {
        async sendTransactionAsync(
            _newAddress: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('updatePolyTokenAddress(address)', [_newAddress
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
                self.updatePolyTokenAddress.estimateGasAsync.bind<SecurityTokenRegistryContract, any, Promise<number>>(
                    self,
                    _newAddress
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newAddress: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('updatePolyTokenAddress(address)',
            [_newAddress
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
            _newAddress: string,
        ): string {
            const self = this as any as SecurityTokenRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('updatePolyTokenAddress(address)',
            [_newAddress
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
            const encodedData = self._strictEncodeArguments('updatePolyTokenAddress(address)', [_newAddress
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
            const abiEncoder = self._lookupAbiEncoder('updatePolyTokenAddress(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public isPaused = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as SecurityTokenRegistryContract;
            const encodedData = self._strictEncodeArguments('isPaused()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('isPaused()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
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
            const self = this as any as SecurityTokenRegistryContract;
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
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<SecurityTokenRegistryContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
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
        logUtils.log(`SecurityTokenRegistry successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new SecurityTokenRegistryContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('SecurityTokenRegistry', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method