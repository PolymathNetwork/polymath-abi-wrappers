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

export type PolymathRegistryEventArgs =
    | PolymathRegistryChangeAddressEventArgs
    | PolymathRegistryOwnershipRenouncedEventArgs
    | PolymathRegistryOwnershipTransferredEventArgs;

export enum PolymathRegistryEvents {
    ChangeAddress = 'ChangeAddress',
    OwnershipRenounced = 'OwnershipRenounced',
    OwnershipTransferred = 'OwnershipTransferred',
}

export interface PolymathRegistryChangeAddressEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _oldAddress: string;
    _newAddress: string;
}

export interface PolymathRegistryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}

export interface PolymathRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class PolymathRegistryContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public storedAddresses = {
        async callAsync(
            index_0: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolymathRegistryContract;
            const encodedData = self._strictEncodeArguments('storedAddresses(bytes32)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('storedAddresses(bytes32)');
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
            const self = this as any as PolymathRegistryContract;
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
                self.renounceOwnership.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
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
            const self = this as any as PolymathRegistryContract;
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
            const self = this as any as PolymathRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('renounceOwnership()',
            []);
            return abiEncodedTransactionData;
        },
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as PolymathRegistryContract;
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
    public reclaimERC20 = {
        async sendTransactionAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
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
                self.reclaimERC20.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
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
            const self = this as any as PolymathRegistryContract;
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
            const self = this as any as PolymathRegistryContract;
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
            const self = this as any as PolymathRegistryContract;
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
    public owner = {
        async callAsync(
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolymathRegistryContract;
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
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
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
                self.transferOwnership.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
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
            const self = this as any as PolymathRegistryContract;
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
            const self = this as any as PolymathRegistryContract;
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
            const self = this as any as PolymathRegistryContract;
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
    public getAddress = {
        async callAsync(
            _nameKey: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolymathRegistryContract;
            const encodedData = self._strictEncodeArguments('getAddress(string)', [_nameKey
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
            const abiEncoder = self._lookupAbiEncoder('getAddress(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public changeAddress = {
        async sendTransactionAsync(
            _nameKey: string,
            _newAddress: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
            const encodedData = self._strictEncodeArguments('changeAddress(string,address)', [_nameKey,
    _newAddress
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
                self.changeAddress.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
                    self,
                    _nameKey,
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
            _nameKey: string,
            _newAddress: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolymathRegistryContract;
            const encodedData = self._strictEncodeArguments('changeAddress(string,address)',
            [_nameKey,
    _newAddress
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
            _nameKey: string,
            _newAddress: string,
        ): string {
            const self = this as any as PolymathRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('changeAddress(string,address)',
            [_nameKey,
    _newAddress
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _nameKey: string,
            _newAddress: string,
        callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as PolymathRegistryContract;
            const encodedData = self._strictEncodeArguments('changeAddress(string,address)', [_nameKey,
        _newAddress
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
            const abiEncoder = self._lookupAbiEncoder('changeAddress(string,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<PolymathRegistryContract> {
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
        logUtils.log(`PolymathRegistry successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new PolymathRegistryContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('PolymathRegistry', abi, address, supportedProvider, txDefaults);
        this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method