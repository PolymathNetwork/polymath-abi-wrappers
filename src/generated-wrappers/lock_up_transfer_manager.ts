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
} from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { assert } from '@0x/assert';
import { PolyResponse } from '../polyResponse';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

export type LockUpTransferManagerEventArgs =
  | LockUpTransferManagerAddLockUpToUserEventArgs
  | LockUpTransferManagerRemoveLockUpFromUserEventArgs
  | LockUpTransferManagerModifyLockUpTypeEventArgs
  | LockUpTransferManagerAddNewLockUpTypeEventArgs
  | LockUpTransferManagerRemoveLockUpTypeEventArgs
  | LockUpTransferManagerPauseEventArgs
  | LockUpTransferManagerUnpauseEventArgs;

export enum LockUpTransferManagerEvents {
  AddLockUpToUser = 'AddLockUpToUser',
  RemoveLockUpFromUser = 'RemoveLockUpFromUser',
  ModifyLockUpType = 'ModifyLockUpType',
  AddNewLockUpType = 'AddNewLockUpType',
  RemoveLockUpType = 'RemoveLockUpType',
  Pause = 'Pause',
  Unpause = 'Unpause',
}

export interface LockUpTransferManagerAddLockUpToUserEventArgs extends DecodedLogArgs {
  _userAddress: string;
  _lockupName: string;
}
export interface LockUpTransferManagerRemoveLockUpFromUserEventArgs extends DecodedLogArgs {
  _userAddress: string;
  _lockupName: string;
}
export interface LockUpTransferManagerModifyLockUpTypeEventArgs extends DecodedLogArgs {
  _lockupAmount: BigNumber;
  _startTime: BigNumber;
  _lockUpPeriodSeconds: BigNumber;
  _releaseFrequencySeconds: BigNumber;
  _lockupName: string;
}
export interface LockUpTransferManagerAddNewLockUpTypeEventArgs extends DecodedLogArgs {
  _lockupName: string;
  _lockupAmount: BigNumber;
  _startTime: BigNumber;
  _lockUpPeriodSeconds: BigNumber;
  _releaseFrequencySeconds: BigNumber;
}
export interface LockUpTransferManagerRemoveLockUpTypeEventArgs extends DecodedLogArgs {
  _lockupName: string;
}
export interface LockUpTransferManagerPauseEventArgs extends DecodedLogArgs {
  account: string;
}
export interface LockUpTransferManagerUnpauseEventArgs extends DecodedLogArgs {
  account: string;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class LockUpTransferManagerContract extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public reclaimETH = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as LockUpTransferManagerContract;
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
        self.reclaimETH.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()', []);
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public lockups = {
    async callAsync(
      index_0: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isString('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('lockups(bytes32)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('lockups(bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string): string {
      assert.isString('index_0', index_0);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('lockups(bytes32)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as LockUpTransferManagerContract;
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
        self.unpause.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as LockUpTransferManagerContract;
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
        self.pause.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
        self.reclaimERC20.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('LOCKED()', []);
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDataStore()', []);
      return abiEncodedTransactionData;
    },
  };
  public executeTransfer = {
    async sendTransactionAsync(
      _from: string,
      index_1: string,
      _amount: BigNumber,
      index_3: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_from', _from);
      assert.isString('index_1', index_1);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
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
        self.executeTransfer.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _from,
          index_1,
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
      index_1: string,
      _amount: BigNumber,
      index_3: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_from', _from);
      assert.isString('index_1', index_1);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
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
      index_1: string,
      _amount: BigNumber,
      index_3: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_from', _from);
      assert.isString('index_1', index_1);
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
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
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
    getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string {
      assert.isString('_from', _from);
      assert.isString('index_1', index_1);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
        _amount,
        index_3,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public verifyTransfer = {
    async callAsync(
      _from: string,
      index_1: string,
      _amount: BigNumber,
      index_3: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, string]> {
      assert.isString('_from', _from);
      assert.isString('index_1', index_1);
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
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
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
    getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string {
      assert.isString('_from', _from);
      assert.isString('index_1', index_1);
      assert.isBigNumber('_amount', _amount);
      assert.isString('index_3', index_3);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
        _amount,
        index_3,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public addNewLockUpType = {
    async sendTransactionAsync(
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addNewLockUpType(uint256,uint256,uint256,uint256,bytes32)', [
        _lockupAmount,
        _startTime,
        _lockUpPeriodSeconds,
        _releaseFrequencySeconds,
        _lockupName,
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
        self.addNewLockUpType.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _lockupAmount,
          _startTime,
          _lockUpPeriodSeconds,
          _releaseFrequencySeconds,
          _lockupName,
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
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addNewLockUpType(uint256,uint256,uint256,uint256,bytes32)', [
        _lockupAmount,
        _startTime,
        _lockUpPeriodSeconds,
        _releaseFrequencySeconds,
        _lockupName,
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
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addNewLockUpType(uint256,uint256,uint256,uint256,bytes32)', [
        _lockupAmount,
        _startTime,
        _lockUpPeriodSeconds,
        _releaseFrequencySeconds,
        _lockupName,
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
      const abiEncoder = self._lookupAbiEncoder('addNewLockUpType(uint256,uint256,uint256,uint256,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
    ): string {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addNewLockUpType(uint256,uint256,uint256,uint256,bytes32)',
        [_lockupAmount, _startTime, _lockUpPeriodSeconds, _releaseFrequencySeconds, _lockupName],
      );
      return abiEncodedTransactionData;
    },
  };
  public addNewLockUpTypeMulti = {
    async sendTransactionAsync(
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
        self.addNewLockUpTypeMulti.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _lockupAmounts,
          _startTimes,
          _lockUpPeriodsSeconds,
          _releaseFrequenciesSeconds,
          _lockupNames,
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
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
      const abiEncoder = self._lookupAbiEncoder(
        'addNewLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
    ): string {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addNewLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
      return abiEncodedTransactionData;
    },
  };
  public addLockUpByName = {
    async sendTransactionAsync(
      _userAddress: string,
      _lockupName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addLockUpByName(address,bytes32)', [_userAddress, _lockupName]);
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
        self.addLockUpByName.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _userAddress,
          _lockupName,
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
      _userAddress: string,
      _lockupName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addLockUpByName(address,bytes32)', [_userAddress, _lockupName]);
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
      _userAddress: string,
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addLockUpByName(address,bytes32)', [_userAddress, _lockupName]);
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
      const abiEncoder = self._lookupAbiEncoder('addLockUpByName(address,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_userAddress: string, _lockupName: string): string {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('addLockUpByName(address,bytes32)', [
        _userAddress,
        _lockupName,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public addLockUpByNameMulti = {
    async sendTransactionAsync(
      _userAddresses: string[],
      _lockupNames: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addLockUpByNameMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
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
        self.addLockUpByNameMulti.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _userAddresses,
          _lockupNames,
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
      _userAddresses: string[],
      _lockupNames: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addLockUpByNameMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
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
      _userAddresses: string[],
      _lockupNames: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('addLockUpByNameMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
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
      const abiEncoder = self._lookupAbiEncoder('addLockUpByNameMulti(address[],bytes32[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_userAddresses: string[], _lockupNames: string[]): string {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('addLockUpByNameMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public addNewLockUpToUser = {
    async sendTransactionAsync(
      _userAddress: string,
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_userAddress', _userAddress);
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpToUser(address,uint256,uint256,uint256,uint256,bytes32)',
        [_userAddress, _lockupAmount, _startTime, _lockUpPeriodSeconds, _releaseFrequencySeconds, _lockupName],
      );
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
        self.addNewLockUpToUser.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _userAddress,
          _lockupAmount,
          _startTime,
          _lockUpPeriodSeconds,
          _releaseFrequencySeconds,
          _lockupName,
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
      _userAddress: string,
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_userAddress', _userAddress);
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpToUser(address,uint256,uint256,uint256,uint256,bytes32)',
        [_userAddress, _lockupAmount, _startTime, _lockUpPeriodSeconds, _releaseFrequencySeconds, _lockupName],
      );
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
      _userAddress: string,
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_userAddress', _userAddress);
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpToUser(address,uint256,uint256,uint256,uint256,bytes32)',
        [_userAddress, _lockupAmount, _startTime, _lockUpPeriodSeconds, _releaseFrequencySeconds, _lockupName],
      );
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
      const abiEncoder = self._lookupAbiEncoder('addNewLockUpToUser(address,uint256,uint256,uint256,uint256,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _userAddress: string,
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
    ): string {
      assert.isString('_userAddress', _userAddress);
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addNewLockUpToUser(address,uint256,uint256,uint256,uint256,bytes32)',
        [_userAddress, _lockupAmount, _startTime, _lockUpPeriodSeconds, _releaseFrequencySeconds, _lockupName],
      );
      return abiEncodedTransactionData;
    },
  };
  public addNewLockUpToUserMulti = {
    async sendTransactionAsync(
      _userAddresses: string[],
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpToUserMulti(address[],uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_userAddresses, _lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
        self.addNewLockUpToUserMulti.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _userAddresses,
          _lockupAmounts,
          _startTimes,
          _lockUpPeriodsSeconds,
          _releaseFrequenciesSeconds,
          _lockupNames,
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
      _userAddresses: string[],
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpToUserMulti(address[],uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_userAddresses, _lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
      _userAddresses: string[],
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'addNewLockUpToUserMulti(address[],uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_userAddresses, _lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
      const abiEncoder = self._lookupAbiEncoder(
        'addNewLockUpToUserMulti(address[],uint256[],uint256[],uint256[],uint256[],bytes32[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _userAddresses: string[],
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
    ): string {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addNewLockUpToUserMulti(address[],uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_userAddresses, _lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
      return abiEncodedTransactionData;
    },
  };
  public removeLockUpFromUser = {
    async sendTransactionAsync(
      _userAddress: string,
      _lockupName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockUpFromUser(address,bytes32)', [
        _userAddress,
        _lockupName,
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
        self.removeLockUpFromUser.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _userAddress,
          _lockupName,
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
      _userAddress: string,
      _lockupName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockUpFromUser(address,bytes32)', [
        _userAddress,
        _lockupName,
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
      _userAddress: string,
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockUpFromUser(address,bytes32)', [
        _userAddress,
        _lockupName,
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
      const abiEncoder = self._lookupAbiEncoder('removeLockUpFromUser(address,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_userAddress: string, _lockupName: string): string {
      assert.isString('_userAddress', _userAddress);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeLockUpFromUser(address,bytes32)', [
        _userAddress,
        _lockupName,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public removeLockupType = {
    async sendTransactionAsync(
      _lockupName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockupType(bytes32)', [_lockupName]);
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
        self.removeLockupType.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _lockupName,
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
      _lockupName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockupType(bytes32)', [_lockupName]);
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
    async callAsync(_lockupName: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockupType(bytes32)', [_lockupName]);
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
      const abiEncoder = self._lookupAbiEncoder('removeLockupType(bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_lockupName: string): string {
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeLockupType(bytes32)', [_lockupName]);
      return abiEncodedTransactionData;
    },
  };
  public removeLockupTypeMulti = {
    async sendTransactionAsync(
      _lockupNames: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockupTypeMulti(bytes32[])', [_lockupNames]);
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
        self.removeLockupTypeMulti.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _lockupNames,
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
      _lockupNames: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockupTypeMulti(bytes32[])', [_lockupNames]);
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
      _lockupNames: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_lockupNames', _lockupNames);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockupTypeMulti(bytes32[])', [_lockupNames]);
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
      const abiEncoder = self._lookupAbiEncoder('removeLockupTypeMulti(bytes32[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_lockupNames: string[]): string {
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeLockupTypeMulti(bytes32[])', [_lockupNames]);
      return abiEncodedTransactionData;
    },
  };
  public removeLockUpFromUserMulti = {
    async sendTransactionAsync(
      _userAddresses: string[],
      _lockupNames: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockUpFromUserMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
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
        self.removeLockUpFromUserMulti.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _userAddresses,
          _lockupNames,
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
      _userAddresses: string[],
      _lockupNames: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockUpFromUserMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
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
      _userAddresses: string[],
      _lockupNames: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('removeLockUpFromUserMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
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
      const abiEncoder = self._lookupAbiEncoder('removeLockUpFromUserMulti(address[],bytes32[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_userAddresses: string[], _lockupNames: string[]): string {
      assert.isArray('_userAddresses', _userAddresses);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeLockUpFromUserMulti(address[],bytes32[])', [
        _userAddresses,
        _lockupNames,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyLockUpType = {
    async sendTransactionAsync(
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('modifyLockUpType(uint256,uint256,uint256,uint256,bytes32)', [
        _lockupAmount,
        _startTime,
        _lockUpPeriodSeconds,
        _releaseFrequencySeconds,
        _lockupName,
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
        self.modifyLockUpType.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _lockupAmount,
          _startTime,
          _lockUpPeriodSeconds,
          _releaseFrequencySeconds,
          _lockupName,
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
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('modifyLockUpType(uint256,uint256,uint256,uint256,bytes32)', [
        _lockupAmount,
        _startTime,
        _lockUpPeriodSeconds,
        _releaseFrequencySeconds,
        _lockupName,
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
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('modifyLockUpType(uint256,uint256,uint256,uint256,bytes32)', [
        _lockupAmount,
        _startTime,
        _lockUpPeriodSeconds,
        _releaseFrequencySeconds,
        _lockupName,
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
      const abiEncoder = self._lookupAbiEncoder('modifyLockUpType(uint256,uint256,uint256,uint256,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _lockupAmount: BigNumber,
      _startTime: BigNumber,
      _lockUpPeriodSeconds: BigNumber,
      _releaseFrequencySeconds: BigNumber,
      _lockupName: string,
    ): string {
      assert.isBigNumber('_lockupAmount', _lockupAmount);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_lockUpPeriodSeconds', _lockUpPeriodSeconds);
      assert.isBigNumber('_releaseFrequencySeconds', _releaseFrequencySeconds);
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyLockUpType(uint256,uint256,uint256,uint256,bytes32)',
        [_lockupAmount, _startTime, _lockUpPeriodSeconds, _releaseFrequencySeconds, _lockupName],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyLockUpTypeMulti = {
    async sendTransactionAsync(
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'modifyLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
        self.modifyLockUpTypeMulti.estimateGasAsync.bind<LockUpTransferManagerContract, any, Promise<number>>(
          self,
          _lockupAmounts,
          _startTimes,
          _lockUpPeriodsSeconds,
          _releaseFrequenciesSeconds,
          _lockupNames,
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
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'modifyLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments(
        'modifyLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
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
      const abiEncoder = self._lookupAbiEncoder(
        'modifyLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _lockupAmounts: BigNumber[],
      _startTimes: BigNumber[],
      _lockUpPeriodsSeconds: BigNumber[],
      _releaseFrequenciesSeconds: BigNumber[],
      _lockupNames: string[],
    ): string {
      assert.isArray('_lockupAmounts', _lockupAmounts);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_lockUpPeriodsSeconds', _lockUpPeriodsSeconds);
      assert.isArray('_releaseFrequenciesSeconds', _releaseFrequenciesSeconds);
      assert.isArray('_lockupNames', _lockupNames);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyLockUpTypeMulti(uint256[],uint256[],uint256[],uint256[],bytes32[])',
        [_lockupAmounts, _startTimes, _lockUpPeriodsSeconds, _releaseFrequenciesSeconds, _lockupNames],
      );
      return abiEncodedTransactionData;
    },
  };
  public getLockUp = {
    async callAsync(
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getLockUp(bytes32)', [_lockupName]);
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
      const abiEncoder = self._lookupAbiEncoder('getLockUp(bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_lockupName: string): string {
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getLockUp(bytes32)', [_lockupName]);
      return abiEncodedTransactionData;
    },
  };
  public getAllLockupData = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getAllLockupData()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAllLockupData()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllLockupData()', []);
      return abiEncodedTransactionData;
    },
  };
  public getListOfAddresses = {
    async callAsync(
      _lockupName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string[]> {
      assert.isString('_lockupName', _lockupName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getListOfAddresses(bytes32)', [_lockupName]);
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
      const abiEncoder = self._lookupAbiEncoder('getListOfAddresses(bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_lockupName: string): string {
      assert.isString('_lockupName', _lockupName);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getListOfAddresses(bytes32)', [_lockupName]);
      return abiEncodedTransactionData;
    },
  };
  public getAllLockups = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getAllLockups()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAllLockups()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllLockups()', []);
      return abiEncodedTransactionData;
    },
  };
  public getLockupsNamesToUser = {
    async callAsync(_user: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.isString('_user', _user);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getLockupsNamesToUser(address)', [_user]);
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
      const abiEncoder = self._lookupAbiEncoder('getLockupsNamesToUser(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_user: string): string {
      assert.isString('_user', _user);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getLockupsNamesToUser(address)', [_user]);
      return abiEncodedTransactionData;
    },
  };
  public getLockedTokenToUser = {
    async callAsync(
      _userAddress: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_userAddress', _userAddress);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getLockedTokenToUser(address)', [_userAddress]);
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
      const abiEncoder = self._lookupAbiEncoder('getLockedTokenToUser(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_userAddress: string): string {
      assert.isString('_userAddress', _userAddress);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getLockedTokenToUser(address)', [_userAddress]);
      return abiEncodedTransactionData;
    },
  };
  public getTokensByPartition = {
    async callAsync(
      _partition: string,
      _tokenHolder: string,
      _additionalBalance: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_additionalBalance', _additionalBalance);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as LockUpTransferManagerContract;
      const encodedData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [
        _partition,
        _tokenHolder,
        _additionalBalance,
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
    getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber): string {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_additionalBalance', _additionalBalance);
      const self = (this as any) as LockUpTransferManagerContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [
        _partition,
        _tokenHolder,
        _additionalBalance,
      ]);
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
      const self = (this as any) as LockUpTransferManagerContract;
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
    _polyAddress: string,
  ): Promise<LockUpTransferManagerContract> {
    assert.isHexString('bytecode', bytecode);
    assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
      schemas.addressSchema,
      schemas.numberSchema,
      schemas.jsNumber,
    ]);
    const provider = providerUtils.standardizeOrThrow(supportedProvider);
    const constructorAbi = BaseContract._lookupConstructorAbi(abi);
    [_securityToken, _polyAddress] = BaseContract._formatABIDataItemList(
      constructorAbi.inputs,
      [_securityToken, _polyAddress],
      BaseContract._bigNumberToString,
    );
    const iface = new ethers.utils.Interface(abi);
    const deployInfo = iface.deployFunction;
    const txData = deployInfo.encode(bytecode, [_securityToken, _polyAddress]);
    const web3Wrapper = new Web3Wrapper(provider);
    const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
      { data: txData },
      txDefaults,
      web3Wrapper.estimateGasAsync.bind(web3Wrapper),
    );
    const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
    logUtils.log(`transactionHash: ${txHash}`);
    const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
    logUtils.log(`LockUpTransferManager successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new LockUpTransferManagerContract(
      txReceipt.contractAddress as string,
      provider,
      txDefaults,
    );
    contractInstance.constructorArgs = [_securityToken, _polyAddress];
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
        constant: true,
        inputs: [
          {
            name: 'index_0',
            type: 'bytes32',
          },
        ],
        name: 'lockups',
        outputs: [
          {
            name: 'lockupAmount',
            type: 'uint256',
          },
          {
            name: 'startTime',
            type: 'uint256',
          },
          {
            name: 'lockUpPeriodSeconds',
            type: 'uint256',
          },
          {
            name: 'releaseFrequencySeconds',
            type: 'uint256',
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
            name: '_polyAddress',
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
            name: '_userAddress',
            type: 'address',
            indexed: true,
          },
          {
            name: '_lockupName',
            type: 'bytes32',
            indexed: true,
          },
        ],
        name: 'AddLockUpToUser',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_userAddress',
            type: 'address',
            indexed: true,
          },
          {
            name: '_lockupName',
            type: 'bytes32',
            indexed: true,
          },
        ],
        name: 'RemoveLockUpFromUser',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_lockupAmount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_lockUpPeriodSeconds',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_releaseFrequencySeconds',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_lockupName',
            type: 'bytes32',
            indexed: true,
          },
        ],
        name: 'ModifyLockUpType',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_lockupName',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_lockupAmount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_lockUpPeriodSeconds',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_releaseFrequencySeconds',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'AddNewLockUpType',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_lockupName',
            type: 'bytes32',
            indexed: true,
          },
        ],
        name: 'RemoveLockUpType',
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
            name: 'index_1',
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
            name: 'index_1',
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
            name: '_lockupAmount',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_lockUpPeriodSeconds',
            type: 'uint256',
          },
          {
            name: '_releaseFrequencySeconds',
            type: 'uint256',
          },
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'addNewLockUpType',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_lockupAmounts',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_lockUpPeriodsSeconds',
            type: 'uint256[]',
          },
          {
            name: '_releaseFrequenciesSeconds',
            type: 'uint256[]',
          },
          {
            name: '_lockupNames',
            type: 'bytes32[]',
          },
        ],
        name: 'addNewLockUpTypeMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_userAddress',
            type: 'address',
          },
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'addLockUpByName',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_userAddresses',
            type: 'address[]',
          },
          {
            name: '_lockupNames',
            type: 'bytes32[]',
          },
        ],
        name: 'addLockUpByNameMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_userAddress',
            type: 'address',
          },
          {
            name: '_lockupAmount',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_lockUpPeriodSeconds',
            type: 'uint256',
          },
          {
            name: '_releaseFrequencySeconds',
            type: 'uint256',
          },
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'addNewLockUpToUser',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_userAddresses',
            type: 'address[]',
          },
          {
            name: '_lockupAmounts',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_lockUpPeriodsSeconds',
            type: 'uint256[]',
          },
          {
            name: '_releaseFrequenciesSeconds',
            type: 'uint256[]',
          },
          {
            name: '_lockupNames',
            type: 'bytes32[]',
          },
        ],
        name: 'addNewLockUpToUserMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_userAddress',
            type: 'address',
          },
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'removeLockUpFromUser',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'removeLockupType',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_lockupNames',
            type: 'bytes32[]',
          },
        ],
        name: 'removeLockupTypeMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_userAddresses',
            type: 'address[]',
          },
          {
            name: '_lockupNames',
            type: 'bytes32[]',
          },
        ],
        name: 'removeLockUpFromUserMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_lockupAmount',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_lockUpPeriodSeconds',
            type: 'uint256',
          },
          {
            name: '_releaseFrequencySeconds',
            type: 'uint256',
          },
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'modifyLockUpType',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_lockupAmounts',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_lockUpPeriodsSeconds',
            type: 'uint256[]',
          },
          {
            name: '_releaseFrequenciesSeconds',
            type: 'uint256[]',
          },
          {
            name: '_lockupNames',
            type: 'bytes32[]',
          },
        ],
        name: 'modifyLockUpTypeMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'getLockUp',
        outputs: [
          {
            name: 'lockupAmount',
            type: 'uint256',
          },
          {
            name: 'startTime',
            type: 'uint256',
          },
          {
            name: 'lockUpPeriodSeconds',
            type: 'uint256',
          },
          {
            name: 'releaseFrequencySeconds',
            type: 'uint256',
          },
          {
            name: 'unlockedAmount',
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
        name: 'getAllLockupData',
        outputs: [
          {
            name: 'lockupNames',
            type: 'bytes32[]',
          },
          {
            name: 'lockupAmounts',
            type: 'uint256[]',
          },
          {
            name: 'startTimes',
            type: 'uint256[]',
          },
          {
            name: 'lockUpPeriodSeconds',
            type: 'uint256[]',
          },
          {
            name: 'releaseFrequencySeconds',
            type: 'uint256[]',
          },
          {
            name: 'unlockedAmounts',
            type: 'uint256[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_lockupName',
            type: 'bytes32',
          },
        ],
        name: 'getListOfAddresses',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getAllLockups',
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
      {
        constant: true,
        inputs: [
          {
            name: '_user',
            type: 'address',
          },
        ],
        name: 'getLockupsNamesToUser',
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
      {
        constant: true,
        inputs: [
          {
            name: '_userAddress',
            type: 'address',
          },
        ],
        name: 'getLockedTokenToUser',
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
            name: '_additionalBalance',
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
  constructor(
    address: string,
    supportedProvider: SupportedProvider,
    txDefaults?: Partial<TxData>,
    defaultEstimateGasFactor?: number,
  ) {
    const abi = LockUpTransferManagerContract.ABI();
    super('LockUpTransferManager', abi, address, supportedProvider, txDefaults);
    this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
    this._web3Wrapper.abiDecoder.addABI(abi);
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
