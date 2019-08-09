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
export interface VolumeRestrictionTMDefaultRestrictionRemovedEventArgs extends DecodedLogArgs {}
export interface VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs extends DecodedLogArgs {}
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
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as VolumeRestrictionTMContract;
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
        self.reclaimETH.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as VolumeRestrictionTMContract;
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
        self.unpause.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as VolumeRestrictionTMContract;
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
        self.pause.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
        self.reclaimERC20.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
        self.executeTransfer.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        index_1,
        _amount,
        index_3,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeExemptWalletList = {
    async sendTransactionAsync(
      _wallet: string,
      _exempted: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_wallet', _wallet);
      assert.isBoolean('_exempted', _exempted);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('changeExemptWalletList(address,bool)', [_wallet, _exempted]);
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
        self.changeExemptWalletList.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _wallet,
          _exempted,
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
      _wallet: string,
      _exempted: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_wallet', _wallet);
      assert.isBoolean('_exempted', _exempted);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('changeExemptWalletList(address,bool)', [_wallet, _exempted]);
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
      _wallet: string,
      _exempted: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_wallet', _wallet);
      assert.isBoolean('_exempted', _exempted);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('changeExemptWalletList(address,bool)', [_wallet, _exempted]);
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
      const abiEncoder = self._lookupAbiEncoder('changeExemptWalletList(address,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_wallet: string, _exempted: boolean): string {
      assert.isString('_wallet', _wallet);
      assert.isBoolean('_exempted', _exempted);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeExemptWalletList(address,bool)', [
        _wallet,
        _exempted,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public addIndividualRestriction = {
    async sendTransactionAsync(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
        self.addIndividualRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holder,
          _allowedTokens,
          _startTime,
          _rollingPeriodInDays,
          _endTime,
          _restrictionType,
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
        'addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public addIndividualDailyRestriction = {
    async sendTransactionAsync(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
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
        self.addIndividualDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holder,
          _allowedTokens,
          _startTime,
          _endTime,
          _restrictionType,
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
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
      const abiEncoder = self._lookupAbiEncoder('addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public addIndividualDailyRestrictionMulti = {
    async sendTransactionAsync(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
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
        self.addIndividualDailyRestrictionMulti.estimateGasAsync.bind<
          VolumeRestrictionTMContract,
          any,
          Promise<number>
        >(self, _holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
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
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
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
        'addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
    ): string {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
      );
      return abiEncodedTransactionData;
    },
  };
  public addIndividualRestrictionMulti = {
    async sendTransactionAsync(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
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
        self.addIndividualRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holders,
          _allowedTokens,
          _startTimes,
          _rollingPeriodInDays,
          _endTimes,
          _restrictionTypes,
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
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
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
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
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
        'addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
    ): string {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
      );
      return abiEncodedTransactionData;
    },
  };
  public addDefaultRestriction = {
    async sendTransactionAsync(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType,
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
        self.addDefaultRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _allowedTokens,
          _startTime,
          _rollingPeriodInDays,
          _endTime,
          _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _rollingPeriodInDays,
        _endTime,
        _restrictionType,
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
      const abiEncoder = self._lookupAbiEncoder('addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public addDefaultDailyRestriction = {
    async sendTransactionAsync(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType,
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
        self.addDefaultDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _allowedTokens,
          _startTime,
          _endTime,
          _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType,
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
      const abiEncoder = self._lookupAbiEncoder('addDefaultDailyRestriction(uint256,uint256,uint256,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addDefaultDailyRestriction(uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public removeIndividualRestriction = {
    async sendTransactionAsync(
      _holder: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_holder', _holder);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualRestriction(address)', [_holder]);
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
        self.removeIndividualRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holder,
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
    async estimateGasAsync(_holder: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_holder', _holder);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualRestriction(address)', [_holder]);
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
    async callAsync(_holder: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_holder', _holder);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualRestriction(address)', [_holder]);
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
      const abiEncoder = self._lookupAbiEncoder('removeIndividualRestriction(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_holder: string): string {
      assert.isString('_holder', _holder);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualRestriction(address)', [_holder]);
      return abiEncodedTransactionData;
    },
  };
  public removeIndividualRestrictionMulti = {
    async sendTransactionAsync(
      _holders: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_holders', _holders);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])', [_holders]);
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
        self.removeIndividualRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holders,
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
    async estimateGasAsync(_holders: string[], factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isArray('_holders', _holders);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])', [_holders]);
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
    async callAsync(_holders: string[], callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isArray('_holders', _holders);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])', [_holders]);
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
      const abiEncoder = self._lookupAbiEncoder('removeIndividualRestrictionMulti(address[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_holders: string[]): string {
      assert.isArray('_holders', _holders);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualRestrictionMulti(address[])', [
        _holders,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public removeIndividualDailyRestriction = {
    async sendTransactionAsync(
      _holder: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_holder', _holder);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)', [_holder]);
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
        self.removeIndividualDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holder,
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
    async estimateGasAsync(_holder: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_holder', _holder);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)', [_holder]);
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
    async callAsync(_holder: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_holder', _holder);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)', [_holder]);
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
      const abiEncoder = self._lookupAbiEncoder('removeIndividualDailyRestriction(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_holder: string): string {
      assert.isString('_holder', _holder);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeIndividualDailyRestriction(address)', [
        _holder,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public removeIndividualDailyRestrictionMulti = {
    async sendTransactionAsync(
      _holders: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_holders', _holders);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])', [_holders]);
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
        self.removeIndividualDailyRestrictionMulti.estimateGasAsync.bind<
          VolumeRestrictionTMContract,
          any,
          Promise<number>
        >(self, _holders, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(_holders: string[], factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isArray('_holders', _holders);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])', [_holders]);
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
    async callAsync(_holders: string[], callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isArray('_holders', _holders);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeIndividualDailyRestrictionMulti(address[])', [_holders]);
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
      const abiEncoder = self._lookupAbiEncoder('removeIndividualDailyRestrictionMulti(address[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_holders: string[]): string {
      assert.isArray('_holders', _holders);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'removeIndividualDailyRestrictionMulti(address[])',
        [_holders],
      );
      return abiEncodedTransactionData;
    },
  };
  public removeDefaultRestriction = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as VolumeRestrictionTMContract;
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
          ...contractDefaults,
        },
        self.removeDefaultRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeDefaultRestriction()', []);
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
      const abiEncoder = self._lookupAbiEncoder('removeDefaultRestriction()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeDefaultRestriction()', []);
      return abiEncodedTransactionData;
    },
  };
  public removeDefaultDailyRestriction = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as VolumeRestrictionTMContract;
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
          ...contractDefaults,
        },
        self.removeDefaultDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('removeDefaultDailyRestriction()', []);
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
      const abiEncoder = self._lookupAbiEncoder('removeDefaultDailyRestriction()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeDefaultDailyRestriction()', []);
      return abiEncodedTransactionData;
    },
  };
  public modifyIndividualRestriction = {
    async sendTransactionAsync(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
        self.modifyIndividualRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holder,
          _allowedTokens,
          _startTime,
          _rollingPeriodInDays,
          _endTime,
          _restrictionType,
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
        'modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyIndividualRestriction(address,uint256,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyIndividualDailyRestriction = {
    async sendTransactionAsync(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
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
        self.modifyIndividualDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holder,
          _allowedTokens,
          _startTime,
          _endTime,
          _restrictionType,
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
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
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
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
        'modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holder: string,
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isString('_holder', _holder);
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyIndividualDailyRestriction(address,uint256,uint256,uint256,uint8)',
        [_holder, _allowedTokens, _startTime, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyIndividualDailyRestrictionMulti = {
    async sendTransactionAsync(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
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
        self.modifyIndividualDailyRestrictionMulti.estimateGasAsync.bind<
          VolumeRestrictionTMContract,
          any,
          Promise<number>
        >(self, _holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
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
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
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
        'modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
    ): string {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyIndividualDailyRestrictionMulti(address[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _endTimes, _restrictionTypes],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyIndividualRestrictionMulti = {
    async sendTransactionAsync(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
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
        self.modifyIndividualRestrictionMulti.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _holders,
          _allowedTokens,
          _startTimes,
          _rollingPeriodInDays,
          _endTimes,
          _restrictionTypes,
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
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
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
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
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
        'modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _holders: string[],
      _allowedTokens: BigNumber[],
      _startTimes: BigNumber[],
      _rollingPeriodInDays: BigNumber[],
      _endTimes: BigNumber[],
      _restrictionTypes: Array<number | BigNumber>,
    ): string {
      assert.isArray('_holders', _holders);
      assert.isArray('_allowedTokens', _allowedTokens);
      assert.isArray('_startTimes', _startTimes);
      assert.isArray('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isArray('_endTimes', _endTimes);
      assert.isArray('_restrictionTypes', _restrictionTypes);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyIndividualRestrictionMulti(address[],uint256[],uint256[],uint256[],uint256[],uint8[])',
        [_holders, _allowedTokens, _startTimes, _rollingPeriodInDays, _endTimes, _restrictionTypes],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyDefaultRestriction = {
    async sendTransactionAsync(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
        self.modifyDefaultRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _allowedTokens,
          _startTime,
          _rollingPeriodInDays,
          _endTime,
          _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments(
        'modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
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
      const abiEncoder = self._lookupAbiEncoder('modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _rollingPeriodInDays: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_rollingPeriodInDays', _rollingPeriodInDays);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyDefaultRestriction(uint256,uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _rollingPeriodInDays, _endTime, _restrictionType],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyDefaultDailyRestriction = {
    async sendTransactionAsync(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType,
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
        self.modifyDefaultDailyRestriction.estimateGasAsync.bind<VolumeRestrictionTMContract, any, Promise<number>>(
          self,
          _allowedTokens,
          _startTime,
          _endTime,
          _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType,
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
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)', [
        _allowedTokens,
        _startTime,
        _endTime,
        _restrictionType,
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
      const abiEncoder = self._lookupAbiEncoder('modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _allowedTokens: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _restrictionType: number | BigNumber,
    ): string {
      assert.isBigNumber('_allowedTokens', _allowedTokens);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isNumberOrBigNumber('_restrictionType', _restrictionType);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyDefaultDailyRestriction(uint256,uint256,uint256,uint8)',
        [_allowedTokens, _startTime, _endTime, _restrictionType],
      );
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [
        _partition,
        _tokenHolder,
        _additionalBalance,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getIndividualBucketDetailsToUser = {
    async callAsync(
      _user: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isString('_user', _user);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getIndividualBucketDetailsToUser(address)', [_user]);
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
      const abiEncoder = self._lookupAbiEncoder('getIndividualBucketDetailsToUser(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_user: string): string {
      assert.isString('_user', _user);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getIndividualBucketDetailsToUser(address)', [
        _user,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getDefaultBucketDetailsToUser = {
    async callAsync(
      _user: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isString('_user', _user);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getDefaultBucketDetailsToUser(address)', [_user]);
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
      const abiEncoder = self._lookupAbiEncoder('getDefaultBucketDetailsToUser(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_user: string): string {
      assert.isString('_user', _user);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDefaultBucketDetailsToUser(address)', [_user]);
      return abiEncodedTransactionData;
    },
  };
  public getTotalTradedByUser = {
    async callAsync(
      _user: string,
      _at: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_user', _user);
      assert.isBigNumber('_at', _at);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getTotalTradedByUser(address,uint256)', [_user, _at]);
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
      const abiEncoder = self._lookupAbiEncoder('getTotalTradedByUser(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_user: string, _at: BigNumber): string {
      assert.isString('_user', _user);
      assert.isBigNumber('_at', _at);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTotalTradedByUser(address,uint256)', [
        _user,
        _at,
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInitFunction()', []);
      return abiEncodedTransactionData;
    },
  };
  public getExemptAddress = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getExemptAddress()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getExemptAddress()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getExemptAddress()', []);
      return abiEncodedTransactionData;
    },
  };
  public getIndividualRestriction = {
    async callAsync(
      _investor: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isString('_investor', _investor);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getIndividualRestriction(address)', [_investor]);
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
      const abiEncoder = self._lookupAbiEncoder('getIndividualRestriction(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string): string {
      assert.isString('_investor', _investor);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getIndividualRestriction(address)', [_investor]);
      return abiEncodedTransactionData;
    },
  };
  public getIndividualDailyRestriction = {
    async callAsync(
      _investor: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isString('_investor', _investor);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getIndividualDailyRestriction(address)', [_investor]);
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
      const abiEncoder = self._lookupAbiEncoder('getIndividualDailyRestriction(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string): string {
      assert.isString('_investor', _investor);
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getIndividualDailyRestriction(address)', [
        _investor,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getDefaultRestriction = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getDefaultRestriction()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getDefaultRestriction()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDefaultRestriction()', []);
      return abiEncodedTransactionData;
    },
  };
  public getDefaultDailyRestriction = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getDefaultDailyRestriction()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getDefaultDailyRestriction()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDefaultDailyRestriction()', []);
      return abiEncodedTransactionData;
    },
  };
  public getRestrictionData = {
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
      const self = (this as any) as VolumeRestrictionTMContract;
      const encodedData = self._strictEncodeArguments('getRestrictionData()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getRestrictionData()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as VolumeRestrictionTMContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getRestrictionData()', []);
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
      const self = (this as any) as VolumeRestrictionTMContract;
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
  ): Promise<VolumeRestrictionTMContract> {
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
    logUtils.log(`VolumeRestrictionTM successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new VolumeRestrictionTMContract(txReceipt.contractAddress as string, provider, txDefaults);
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
            name: '_wallet',
            type: 'address',
            indexed: true,
          },
          {
            name: '_exempted',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ChangedExemptWalletList',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
            indexed: true,
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'AddIndividualRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
            indexed: true,
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'AddIndividualDailyRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
            indexed: true,
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'ModifyIndividualRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
            indexed: true,
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'ModifyIndividualDailyRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'AddDefaultRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'AddDefaultDailyRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'ModifyDefaultRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_typeOfRestriction',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'ModifyDefaultDailyRestriction',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'IndividualRestrictionRemoved',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'IndividualDailyRestrictionRemoved',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'DefaultRestrictionRemoved',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'DefaultDailyRestrictionRemoved',
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
            name: 'success',
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
            name: '_wallet',
            type: 'address',
          },
          {
            name: '_exempted',
            type: 'bool',
          },
        ],
        name: 'changeExemptWalletList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'addIndividualRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'addIndividualDailyRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holders',
            type: 'address[]',
          },
          {
            name: '_allowedTokens',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_endTimes',
            type: 'uint256[]',
          },
          {
            name: '_restrictionTypes',
            type: 'uint8[]',
          },
        ],
        name: 'addIndividualDailyRestrictionMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holders',
            type: 'address[]',
          },
          {
            name: '_allowedTokens',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256[]',
          },
          {
            name: '_endTimes',
            type: 'uint256[]',
          },
          {
            name: '_restrictionTypes',
            type: 'uint8[]',
          },
        ],
        name: 'addIndividualRestrictionMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'addDefaultRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'addDefaultDailyRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
          },
        ],
        name: 'removeIndividualRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holders',
            type: 'address[]',
          },
        ],
        name: 'removeIndividualRestrictionMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
          },
        ],
        name: 'removeIndividualDailyRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holders',
            type: 'address[]',
          },
        ],
        name: 'removeIndividualDailyRestrictionMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'removeDefaultRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'removeDefaultDailyRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'modifyIndividualRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holder',
            type: 'address',
          },
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'modifyIndividualDailyRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holders',
            type: 'address[]',
          },
          {
            name: '_allowedTokens',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_endTimes',
            type: 'uint256[]',
          },
          {
            name: '_restrictionTypes',
            type: 'uint8[]',
          },
        ],
        name: 'modifyIndividualDailyRestrictionMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_holders',
            type: 'address[]',
          },
          {
            name: '_allowedTokens',
            type: 'uint256[]',
          },
          {
            name: '_startTimes',
            type: 'uint256[]',
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256[]',
          },
          {
            name: '_endTimes',
            type: 'uint256[]',
          },
          {
            name: '_restrictionTypes',
            type: 'uint8[]',
          },
        ],
        name: 'modifyIndividualRestrictionMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_rollingPeriodInDays',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'modifyDefaultRestriction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_allowedTokens',
            type: 'uint256',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_restrictionType',
            type: 'uint8',
          },
        ],
        name: 'modifyDefaultDailyRestriction',
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
        inputs: [
          {
            name: '_user',
            type: 'address',
          },
        ],
        name: 'getIndividualBucketDetailsToUser',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
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
            name: '_user',
            type: 'address',
          },
        ],
        name: 'getDefaultBucketDetailsToUser',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
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
            name: '_user',
            type: 'address',
          },
          {
            name: '_at',
            type: 'uint256',
          },
        ],
        name: 'getTotalTradedByUser',
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
        name: 'getExemptAddress',
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
        inputs: [
          {
            name: '_investor',
            type: 'address',
          },
        ],
        name: 'getIndividualRestriction',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint8',
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
            name: '_investor',
            type: 'address',
          },
        ],
        name: 'getIndividualDailyRestriction',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint8',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getDefaultRestriction',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint8',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getDefaultDailyRestriction',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint8',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getRestrictionData',
        outputs: [
          {
            name: 'allAddresses',
            type: 'address[]',
          },
          {
            name: 'allowedTokens',
            type: 'uint256[]',
          },
          {
            name: 'startTime',
            type: 'uint256[]',
          },
          {
            name: 'rollingPeriodInDays',
            type: 'uint256[]',
          },
          {
            name: 'endTime',
            type: 'uint256[]',
          },
          {
            name: 'typeOfRestriction',
            type: 'uint8[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getPermissions',
        outputs: [
          {
            name: 'allPermissions',
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
    const abi = VolumeRestrictionTMContract.ABI();
    super('VolumeRestrictionTM', abi, address, supportedProvider, txDefaults);
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
