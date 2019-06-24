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

export type CountTransferManagerEventArgs =
    | CountTransferManagerModifyHolderCountEventArgs
    | CountTransferManagerPauseEventArgs
    | CountTransferManagerUnpauseEventArgs;

export enum CountTransferManagerEvents {
    ModifyHolderCount = 'ModifyHolderCount',
    Pause = 'Pause',
    Unpause = 'Unpause',
}

export interface CountTransferManagerModifyHolderCountEventArgs extends DecodedLogArgs {
    _oldHolderCount: BigNumber;
    _newHolderCount: BigNumber;
}

export interface CountTransferManagerPauseEventArgs extends DecodedLogArgs {
    account: string;
}

export interface CountTransferManagerUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class CountTransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public reclaimETH = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CountTransferManagerContract;
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
                self.reclaimETH.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CountTransferManagerContract;
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
    public getTokensByPartition = {
        async callAsync(
            _partition: string,
            _tokenHolder: string,
            index_2: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [_partition,
        _tokenHolder,
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
            const abiEncoder = self._lookupAbiEncoder('getTokensByPartition(bytes32,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
                self.unpause.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('unpause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
                self.pause.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('pause()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
                self.reclaimERC20.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
    public maxHolderCount = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('maxHolderCount()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
            to: self.address,
            ...callData,
            data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('maxHolderCount()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            const self = this as any as CountTransferManagerContract;
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
            _to: string,
            _amount: BigNumber,
            index_3: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [_from,
    _to,
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
                self.executeTransfer.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
                    self,
                    _from,
    _to,
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
            _to: string,
            _amount: BigNumber,
            index_3: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)',
            [_from,
    _to,
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
            _to: string,
            _amount: BigNumber,
            index_3: string,
        ): string {
            const self = this as any as CountTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)',
            [_from,
    _to,
    _amount,
    index_3
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _amount: BigNumber,
            index_3: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [_from,
        _to,
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
            _to: string,
            _amount: BigNumber,
            index_3: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[BigNumber, string]
        > {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [_from,
        _to,
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
    public configure = {
        async sendTransactionAsync(
            _maxHolderCount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('configure(uint256)', [_maxHolderCount
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
                self.configure.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
                    self,
                    _maxHolderCount
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _maxHolderCount: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('configure(uint256)',
            [_maxHolderCount
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
            _maxHolderCount: BigNumber,
        ): string {
            const self = this as any as CountTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('configure(uint256)',
            [_maxHolderCount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _maxHolderCount: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('configure(uint256)', [_maxHolderCount
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
            const abiEncoder = self._lookupAbiEncoder('configure(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeHolderCount = {
        async sendTransactionAsync(
            _maxHolderCount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeHolderCount(uint256)', [_maxHolderCount
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
                self.changeHolderCount.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
                    self,
                    _maxHolderCount
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _maxHolderCount: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeHolderCount(uint256)',
            [_maxHolderCount
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
            _maxHolderCount: BigNumber,
        ): string {
            const self = this as any as CountTransferManagerContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeHolderCount(uint256)',
            [_maxHolderCount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _maxHolderCount: BigNumber,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as CountTransferManagerContract;
            const encodedData = self._strictEncodeArguments('changeHolderCount(uint256)', [_maxHolderCount
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
            const abiEncoder = self._lookupAbiEncoder('changeHolderCount(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
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
            const self = this as any as CountTransferManagerContract;
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
    public getPermissions = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as CountTransferManagerContract;
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
            _polyToken: string,
    ): Promise<CountTransferManagerContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_securityToken,
_polyToken
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_securityToken,
_polyToken
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_securityToken,
_polyToken
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
        logUtils.log(`CountTransferManager successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new CountTransferManagerContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_securityToken,
_polyToken
];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('CountTransferManager', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method