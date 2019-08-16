// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
import { BaseContract } from '@0x/base-contract';
import { schemas } from '@0x/json-schemas';
import {
  BlockParam,
  BlockParamLiteral,
  CallData,
  ContractAbi,
  ContractArtifact,
  DecodedLogArgs,
  MethodAbi,
  TransactionReceiptWithDecodedLogs,
  TxData,
  TxDataPayable,
  SupportedProvider,
  AbiDefinition,
} from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { assert } from '@0x/assert';
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
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as CountTransferManagerContract;
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
          ...contractDefaults,
        },
        self.reclaimETH.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,

          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      const self = (this as any) as CountTransferManagerContract;
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('reclaimETH()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('reclaimETH()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTokensByPartition = {
    async callAsync(
      _partition: string,
      _tokenHolder: string,
      index_2: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('index_2', index_2);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [
        _partition,
        _tokenHolder,
        index_2,
      ]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTokensByPartition(bytes32,address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _tokenHolder: string, index_2: BigNumber): string {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('index_2', index_2);
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [
        _partition,
        _tokenHolder,
        index_2,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public ADMIN = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('ADMIN()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('ADMIN()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as CountTransferManagerContract;
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
          ...contractDefaults,
        },
        self.unpause.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,

          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      const self = (this as any) as CountTransferManagerContract;
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('unpause()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('unpause()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('unpause()', []);
      return abiEncodedTransactionData;
    },
  };
  public paused = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('paused()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('paused()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('paused()', []);
      return abiEncodedTransactionData;
    },
  };
  public UNLOCKED = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('UNLOCKED()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('UNLOCKED()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('UNLOCKED()', []);
      return abiEncodedTransactionData;
    },
  };
  public polyToken = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('polyToken()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('polyToken()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as CountTransferManagerContract;
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
          ...contractDefaults,
        },
        self.pause.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,

          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      const self = (this as any) as CountTransferManagerContract;
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('pause()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('pause()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('pause()', []);
      return abiEncodedTransactionData;
    },
  };
  public reclaimERC20 = {
    async sendTransactionAsync(
      _tokenContract: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_tokenContract', _tokenContract);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
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
          ...contractDefaults,
        },
        self.reclaimERC20.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,
          _tokenContract,
          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _tokenContract: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_tokenContract', _tokenContract);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(
      _tokenContract: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_tokenContract', _tokenContract);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('reclaimERC20(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tokenContract: string): string {
      assert.isString('_tokenContract', _tokenContract);
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
      return abiEncodedTransactionData;
    },
  };
  public OPERATOR = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('OPERATOR()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('OPERATOR()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('OPERATOR()', []);
      return abiEncodedTransactionData;
    },
  };
  public LOCKED = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('LOCKED()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('LOCKED()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('LOCKED()', []);
      return abiEncodedTransactionData;
    },
  };
  public maxHolderCount = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('maxHolderCount()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('maxHolderCount()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('maxHolderCount()', []);
      return abiEncodedTransactionData;
    },
  };
  public securityToken = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('securityToken()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('securityToken()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('securityToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public factory = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('factory()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('factory()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('factory()', []);
      return abiEncodedTransactionData;
    },
  };
  public getDataStore = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getDataStore()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getDataStore()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDataStore()', []);
      return abiEncodedTransactionData;
    },
  };
  public executeTransfer = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _amount: BigNumber,
      index_3: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        _amount,
        index_3,
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
          ...contractDefaults,
        },
        self.executeTransfer.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,
          _from,
          _to,
          _amount,
          index_3,
          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

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
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        _amount,
        index_3,
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(
      _from: string,
      _to: string,
      _amount: BigNumber,
      index_3: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        _amount,
        index_3,
      ]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('executeTransfer(address,address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        _amount,
        index_3,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public verifyTransfer = {
    async callAsync(
      _from: string,
      _to: string,
      _amount: BigNumber,
      index_3: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, string]> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        _amount,
        index_3,
      ]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('verifyTransfer(address,address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, string]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_from: string, _to: string, _amount: BigNumber, index_3: string): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        _amount,
        index_3,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public configure = {
    async sendTransactionAsync(
      _maxHolderCount: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('configure(uint256)', [_maxHolderCount]);
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
          ...contractDefaults,
        },
        self.configure.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,
          _maxHolderCount,
          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _maxHolderCount: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('configure(uint256)', [_maxHolderCount]);
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(
      _maxHolderCount: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('configure(uint256)', [_maxHolderCount]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('configure(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_maxHolderCount: BigNumber): string {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('configure(uint256)', [_maxHolderCount]);
      return abiEncodedTransactionData;
    },
  };
  public changeHolderCount = {
    async sendTransactionAsync(
      _maxHolderCount: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('changeHolderCount(uint256)', [_maxHolderCount]);
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
          ...contractDefaults,
        },
        self.changeHolderCount.estimateGasAsync.bind<CountTransferManagerContract, any, Promise<number>>(
          self,
          _maxHolderCount,
          estimateGasFactor,
        ),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _maxHolderCount: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('changeHolderCount(uint256)', [_maxHolderCount]);
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
          ...contractDefaults,
        },
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
      const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
      const _factor = factor === undefined ? self._defaultEstimateGasFactor : factor;
      const _safetyGasEstimation = Math.round(_factor * gas);
      return _safetyGasEstimation > networkGasLimit ? networkGasLimit : _safetyGasEstimation;
    },
    async callAsync(
      _maxHolderCount: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('changeHolderCount(uint256)', [_maxHolderCount]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeHolderCount(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_maxHolderCount: BigNumber): string {
      assert.isBigNumber('_maxHolderCount', _maxHolderCount);
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeHolderCount(uint256)', [_maxHolderCount]);
      return abiEncodedTransactionData;
    },
  };
  public getInitFunction = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getInitFunction()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getInitFunction()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInitFunction()', []);
      return abiEncodedTransactionData;
    },
  };
  public getPermissions = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as CountTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getPermissions()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getPermissions()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as CountTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getPermissions()', []);
      return abiEncodedTransactionData;
    },
  };
  public static async deployAsync(
    bytecode: string,
    abi: ContractAbi,
    supportedProvider: SupportedProvider,
    txDefaults: Partial<TxData>,
    _securityToken: string,
    _polyToken: string,
  ): Promise<CountTransferManagerContract> {
    assert.isHexString('bytecode', bytecode);
    assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
      schemas.addressSchema,
      schemas.numberSchema,
      schemas.jsNumber,
    ]);
    const provider = providerUtils.standardizeOrThrow(supportedProvider);
    const constructorAbi = BaseContract._lookupConstructorAbi(abi);
    [_securityToken, _polyToken] = BaseContract._formatABIDataItemList(
      constructorAbi.inputs,
      [_securityToken, _polyToken],
      BaseContract._bigNumberToString,
    );
    const iface = new ethers.utils.Interface(abi);
    const deployInfo = iface.deployFunction;
    const txData = deployInfo.encode(bytecode, [_securityToken, _polyToken]);
    const web3Wrapper = new Web3Wrapper(provider);
    const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
      { data: txData },
      txDefaults,
      web3Wrapper.estimateGasAsync.bind(web3Wrapper),
    );
    const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
    logUtils.log(`transactionHash: ${txHash}`);
    const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
    logUtils.log(`CountTransferManager successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new CountTransferManagerContract(
      txReceipt.contractAddress as string,
      provider,
      txDefaults,
    );
    contractInstance.constructorArgs = [_securityToken, _polyToken];
    return contractInstance;
  }

  /**
   * @returns The contract ABI
   */
  public static ABI(): ContractAbi {
    const abi = [
      {
        constant: false,
        inputs: [],
        name: 'reclaimETH',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_tokenHolder',
            type: 'address',
          },
          {
            name: 'index_2',
            type: 'uint256',
          },
        ],
        name: 'getTokensByPartition',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'ADMIN',
        outputs: [
          {
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'unpause',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'paused',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'UNLOCKED',
        outputs: [
          {
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'polyToken',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'pause',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tokenContract',
            type: 'address',
          },
        ],
        name: 'reclaimERC20',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'OPERATOR',
        outputs: [
          {
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'LOCKED',
        outputs: [
          {
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'maxHolderCount',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'securityToken',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'factory',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getDataStore',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            name: '_securityToken',
            type: 'address',
          },
          {
            name: '_polyToken',
            type: 'address',
          },
        ],
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldHolderCount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_newHolderCount',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ModifyHolderCount',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'account',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'Pause',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'account',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'Unpause',
        outputs: [],
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_from',
            type: 'address',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
          {
            name: 'index_3',
            type: 'bytes',
          },
        ],
        name: 'executeTransfer',
        outputs: [
          {
            name: '',
            type: 'uint8',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_from',
            type: 'address',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
          {
            name: 'index_3',
            type: 'bytes',
          },
        ],
        name: 'verifyTransfer',
        outputs: [
          {
            name: '',
            type: 'uint8',
          },
          {
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_maxHolderCount',
            type: 'uint256',
          },
        ],
        name: 'configure',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_maxHolderCount',
            type: 'uint256',
          },
        ],
        name: 'changeHolderCount',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getInitFunction',
        outputs: [
          {
            name: '',
            type: 'bytes4',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getPermissions',
        outputs: [
          {
            name: '',
            type: 'bytes32[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ] as ContractAbi;
    return abi;
  }

  /**
   * To add ABIs to the decoder to decode every event log emmited
   */
  public addABItoDecoder(abiArray: AbiDefinition[], contractName?: string): void {
    this._web3Wrapper.abiDecoder.addABI(abiArray, contractName);
  }

  constructor(
    address: string,
    supportedProvider: SupportedProvider,
    txDefaults?: Partial<TxData>,
    defaultEstimateGasFactor?: number,
  ) {
    super('CountTransferManager', CountTransferManagerContract.ABI(), address, supportedProvider, txDefaults);
    this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
    classUtils.bindAll(this, [
      '_abiEncoderByFunctionSignature',
      'address',
      '_web3Wrapper',
      '_defaultEstimateGasFactor',
    ]);
  }
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
