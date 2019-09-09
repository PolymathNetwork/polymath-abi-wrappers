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
import { PolyResponse } from '../../PolyResponse';
import { isEqual } from 'lodash';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

export type GeneralTransferManagerEventArgs_3_0_0 =
  | GeneralTransferManagerChangeIssuanceAddressEventArgs_3_0_0
  | GeneralTransferManagerChangeDefaultsEventArgs_3_0_0
  | GeneralTransferManagerModifyKYCDataEventArgs_3_0_0
  | GeneralTransferManagerModifyInvestorFlagEventArgs_3_0_0
  | GeneralTransferManagerModifyTransferRequirementsEventArgs_3_0_0
  | GeneralTransferManagerPauseEventArgs_3_0_0
  | GeneralTransferManagerUnpauseEventArgs_3_0_0;

export enum GeneralTransferManagerEvents_3_0_0 {
  ChangeIssuanceAddress = 'ChangeIssuanceAddress',
  ChangeDefaults = 'ChangeDefaults',
  ModifyKYCData = 'ModifyKYCData',
  ModifyInvestorFlag = 'ModifyInvestorFlag',
  ModifyTransferRequirements = 'ModifyTransferRequirements',
  Pause = 'Pause',
  Unpause = 'Unpause',
}

export interface GeneralTransferManagerChangeIssuanceAddressEventArgs_3_0_0 extends DecodedLogArgs {
  _issuanceAddress: string;
}
export interface GeneralTransferManagerChangeDefaultsEventArgs_3_0_0 extends DecodedLogArgs {
  _defaultCanSendAfter: BigNumber;
  _defaultCanReceiveAfter: BigNumber;
}
export interface GeneralTransferManagerModifyKYCDataEventArgs_3_0_0 extends DecodedLogArgs {
  _investor: string;
  _addedBy: string;
  _canSendAfter: BigNumber;
  _canReceiveAfter: BigNumber;
  _expiryTime: BigNumber;
}
export interface GeneralTransferManagerModifyInvestorFlagEventArgs_3_0_0 extends DecodedLogArgs {
  _investor: string;
  _flag: BigNumber;
  _value: boolean;
}
export interface GeneralTransferManagerModifyTransferRequirementsEventArgs_3_0_0 extends DecodedLogArgs {
  _transferType: BigNumber;
  _fromValidKYC: boolean;
  _toValidKYC: boolean;
  _fromRestricted: boolean;
  _toRestricted: boolean;
}
export interface GeneralTransferManagerPauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}
export interface GeneralTransferManagerUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class GeneralTransferManagerContract_3_0_0 extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public reclaimETH = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
        self.reclaimETH.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()', []);
      return abiEncodedTransactionData;
    },
  };
  public WHITELIST = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('WHITELIST()', []);
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
      const abiEncoder = self._lookupAbiEncoder('WHITELIST()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('WHITELIST()', []);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
        self.unpause.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('paused()', []);
      return abiEncodedTransactionData;
    },
  };
  public INVESTORFLAGS = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('INVESTORFLAGS()', []);
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
      const abiEncoder = self._lookupAbiEncoder('INVESTORFLAGS()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('INVESTORFLAGS()', []);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
        self.pause.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
        self.reclaimERC20.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('OPERATOR()', []);
      return abiEncodedTransactionData;
    },
  };
  public nonceMap = {
    async callAsync(
      index_0: string,
      index_1: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('index_0', index_0);
      assert.isBigNumber('index_1', index_1);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('nonceMap(address,uint256)', [index_0, index_1]);
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
      const abiEncoder = self._lookupAbiEncoder('nonceMap(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string, index_1: BigNumber): string {
      assert.isString('index_0', index_0);
      assert.isBigNumber('index_1', index_1);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('nonceMap(address,uint256)', [index_0, index_1]);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('LOCKED()', []);
      return abiEncodedTransactionData;
    },
  };
  public issuanceAddress = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('issuanceAddress()', []);
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
      const abiEncoder = self._lookupAbiEncoder('issuanceAddress()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('issuanceAddress()', []);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('securityToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public INVESTORSKEY = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('INVESTORSKEY()', []);
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
      const abiEncoder = self._lookupAbiEncoder('INVESTORSKEY()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('INVESTORSKEY()', []);
      return abiEncodedTransactionData;
    },
  };
  public transferRequirements = {
    async callAsync(
      index_0: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[boolean, boolean, boolean, boolean]> {
      assert.isNumberOrBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferRequirements(uint8)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('transferRequirements(uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[boolean, boolean, boolean, boolean]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: number | BigNumber): string {
      assert.isNumberOrBigNumber('index_0', index_0);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferRequirements(uint8)', [index_0]);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('factory()', []);
      return abiEncodedTransactionData;
    },
  };
  public defaults = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<[BigNumber, BigNumber]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('defaults()', []);
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
      const abiEncoder = self._lookupAbiEncoder('defaults()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('defaults()', []);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDataStore()', []);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInitFunction()', []);
      return abiEncodedTransactionData;
    },
  };
  public changeDefaults = {
    async sendTransactionAsync(
      _defaultCanSendAfter: BigNumber,
      _defaultCanReceiveAfter: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_defaultCanSendAfter', _defaultCanSendAfter);
      assert.isBigNumber('_defaultCanReceiveAfter', _defaultCanReceiveAfter);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaults(uint64,uint64)', [
        _defaultCanSendAfter,
        _defaultCanReceiveAfter,
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
        self.changeDefaults.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _defaultCanSendAfter,
          _defaultCanReceiveAfter,
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
      _defaultCanSendAfter: BigNumber,
      _defaultCanReceiveAfter: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_defaultCanSendAfter', _defaultCanSendAfter);
      assert.isBigNumber('_defaultCanReceiveAfter', _defaultCanReceiveAfter);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaults(uint64,uint64)', [
        _defaultCanSendAfter,
        _defaultCanReceiveAfter,
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
      _defaultCanSendAfter: BigNumber,
      _defaultCanReceiveAfter: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_defaultCanSendAfter', _defaultCanSendAfter);
      assert.isBigNumber('_defaultCanReceiveAfter', _defaultCanReceiveAfter);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaults(uint64,uint64)', [
        _defaultCanSendAfter,
        _defaultCanReceiveAfter,
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
      const abiEncoder = self._lookupAbiEncoder('changeDefaults(uint64,uint64)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_defaultCanSendAfter: BigNumber, _defaultCanReceiveAfter: BigNumber): string {
      assert.isBigNumber('_defaultCanSendAfter', _defaultCanSendAfter);
      assert.isBigNumber('_defaultCanReceiveAfter', _defaultCanReceiveAfter);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeDefaults(uint64,uint64)', [
        _defaultCanSendAfter,
        _defaultCanReceiveAfter,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeIssuanceAddress = {
    async sendTransactionAsync(
      _issuanceAddress: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_issuanceAddress', _issuanceAddress);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeIssuanceAddress(address)', [_issuanceAddress]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.changeIssuanceAddress.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _issuanceAddress,
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
      _issuanceAddress: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_issuanceAddress', _issuanceAddress);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeIssuanceAddress(address)', [_issuanceAddress]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _issuanceAddress: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_issuanceAddress', _issuanceAddress);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeIssuanceAddress(address)', [_issuanceAddress]);
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
      const abiEncoder = self._lookupAbiEncoder('changeIssuanceAddress(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_issuanceAddress: string): string {
      assert.isString('_issuanceAddress', _issuanceAddress);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeIssuanceAddress(address)', [
        _issuanceAddress,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public executeTransfer = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      index_2: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('index_2', index_2);
      assert.isString('_data', _data);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        index_2,
        _data,
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
        self.executeTransfer.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _from,
          _to,
          index_2,
          _data,
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
      index_2: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('index_2', index_2);
      assert.isString('_data', _data);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        index_2,
        _data,
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
      index_2: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('index_2', index_2);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        index_2,
        _data,
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
    getABIEncodedTransactionData(_from: string, _to: string, index_2: BigNumber, _data: string): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('index_2', index_2);
      assert.isString('_data', _data);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('executeTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        index_2,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public verifyTransfer = {
    async callAsync(
      _from: string,
      _to: string,
      index_2: BigNumber,
      index_3: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, string]> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('index_2', index_2);
      assert.isString('index_3', index_3);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        index_2,
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
    getABIEncodedTransactionData(_from: string, _to: string, index_2: BigNumber, index_3: string): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('index_2', index_2);
      assert.isString('index_3', index_3);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('verifyTransfer(address,address,uint256,bytes)', [
        _from,
        _to,
        index_2,
        index_3,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyTransferRequirements = {
    async sendTransactionAsync(
      _transferType: number | BigNumber,
      _fromValidKYC: boolean,
      _toValidKYC: boolean,
      _fromRestricted: boolean,
      _toRestricted: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_transferType', _transferType);
      assert.isBoolean('_fromValidKYC', _fromValidKYC);
      assert.isBoolean('_toValidKYC', _toValidKYC);
      assert.isBoolean('_fromRestricted', _fromRestricted);
      assert.isBoolean('_toRestricted', _toRestricted);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyTransferRequirements(uint8,bool,bool,bool,bool)', [
        _transferType,
        _fromValidKYC,
        _toValidKYC,
        _fromRestricted,
        _toRestricted,
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
        self.modifyTransferRequirements.estimateGasAsync.bind<
          GeneralTransferManagerContract_3_0_0,
          any,
          Promise<number>
        >(self, _transferType, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _transferType: number | BigNumber,
      _fromValidKYC: boolean,
      _toValidKYC: boolean,
      _fromRestricted: boolean,
      _toRestricted: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_transferType', _transferType);
      assert.isBoolean('_fromValidKYC', _fromValidKYC);
      assert.isBoolean('_toValidKYC', _toValidKYC);
      assert.isBoolean('_fromRestricted', _fromRestricted);
      assert.isBoolean('_toRestricted', _toRestricted);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyTransferRequirements(uint8,bool,bool,bool,bool)', [
        _transferType,
        _fromValidKYC,
        _toValidKYC,
        _fromRestricted,
        _toRestricted,
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
      _transferType: number | BigNumber,
      _fromValidKYC: boolean,
      _toValidKYC: boolean,
      _fromRestricted: boolean,
      _toRestricted: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isNumberOrBigNumber('_transferType', _transferType);
      assert.isBoolean('_fromValidKYC', _fromValidKYC);
      assert.isBoolean('_toValidKYC', _toValidKYC);
      assert.isBoolean('_fromRestricted', _fromRestricted);
      assert.isBoolean('_toRestricted', _toRestricted);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyTransferRequirements(uint8,bool,bool,bool,bool)', [
        _transferType,
        _fromValidKYC,
        _toValidKYC,
        _fromRestricted,
        _toRestricted,
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
      const abiEncoder = self._lookupAbiEncoder('modifyTransferRequirements(uint8,bool,bool,bool,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _transferType: number | BigNumber,
      _fromValidKYC: boolean,
      _toValidKYC: boolean,
      _fromRestricted: boolean,
      _toRestricted: boolean,
    ): string {
      assert.isNumberOrBigNumber('_transferType', _transferType);
      assert.isBoolean('_fromValidKYC', _fromValidKYC);
      assert.isBoolean('_toValidKYC', _toValidKYC);
      assert.isBoolean('_fromRestricted', _fromRestricted);
      assert.isBoolean('_toRestricted', _toRestricted);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyTransferRequirements(uint8,bool,bool,bool,bool)',
        [_transferType, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyTransferRequirementsMulti = {
    async sendTransactionAsync(
      _transferTypes: Array<number | BigNumber>,
      _fromValidKYC: boolean[],
      _toValidKYC: boolean[],
      _fromRestricted: boolean[],
      _toRestricted: boolean[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_transferTypes', _transferTypes);
      assert.isArray('_fromValidKYC', _fromValidKYC);
      assert.isArray('_toValidKYC', _toValidKYC);
      assert.isArray('_fromRestricted', _fromRestricted);
      assert.isArray('_toRestricted', _toRestricted);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyTransferRequirementsMulti(uint8[],bool[],bool[],bool[],bool[])',
        [_transferTypes, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted],
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
        self.modifyTransferRequirementsMulti.estimateGasAsync.bind<
          GeneralTransferManagerContract_3_0_0,
          any,
          Promise<number>
        >(self, _transferTypes, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _transferTypes: Array<number | BigNumber>,
      _fromValidKYC: boolean[],
      _toValidKYC: boolean[],
      _fromRestricted: boolean[],
      _toRestricted: boolean[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_transferTypes', _transferTypes);
      assert.isArray('_fromValidKYC', _fromValidKYC);
      assert.isArray('_toValidKYC', _toValidKYC);
      assert.isArray('_fromRestricted', _fromRestricted);
      assert.isArray('_toRestricted', _toRestricted);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyTransferRequirementsMulti(uint8[],bool[],bool[],bool[],bool[])',
        [_transferTypes, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted],
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
      _transferTypes: Array<number | BigNumber>,
      _fromValidKYC: boolean[],
      _toValidKYC: boolean[],
      _fromRestricted: boolean[],
      _toRestricted: boolean[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_transferTypes', _transferTypes);
      assert.isArray('_fromValidKYC', _fromValidKYC);
      assert.isArray('_toValidKYC', _toValidKYC);
      assert.isArray('_fromRestricted', _fromRestricted);
      assert.isArray('_toRestricted', _toRestricted);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyTransferRequirementsMulti(uint8[],bool[],bool[],bool[],bool[])',
        [_transferTypes, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted],
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
      const abiEncoder = self._lookupAbiEncoder('modifyTransferRequirementsMulti(uint8[],bool[],bool[],bool[],bool[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _transferTypes: Array<number | BigNumber>,
      _fromValidKYC: boolean[],
      _toValidKYC: boolean[],
      _fromRestricted: boolean[],
      _toRestricted: boolean[],
    ): string {
      assert.isArray('_transferTypes', _transferTypes);
      assert.isArray('_fromValidKYC', _fromValidKYC);
      assert.isArray('_toValidKYC', _toValidKYC);
      assert.isArray('_fromRestricted', _fromRestricted);
      assert.isArray('_toRestricted', _toRestricted);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyTransferRequirementsMulti(uint8[],bool[],bool[],bool[],bool[])',
        [_transferTypes, _fromValidKYC, _toValidKYC, _fromRestricted, _toRestricted],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyKYCData = {
    async sendTransactionAsync(
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyKYCData(address,uint64,uint64,uint64)', [
        _investor,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
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
        self.modifyKYCData.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _investor,
          _canSendAfter,
          _canReceiveAfter,
          _expiryTime,
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
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyKYCData(address,uint64,uint64,uint64)', [
        _investor,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
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
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyKYCData(address,uint64,uint64,uint64)', [
        _investor,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
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
      const abiEncoder = self._lookupAbiEncoder('modifyKYCData(address,uint64,uint64,uint64)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
    ): string {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyKYCData(address,uint64,uint64,uint64)', [
        _investor,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyKYCDataMulti = {
    async sendTransactionAsync(
      _investors: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_investors', _investors);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyKYCDataMulti(address[],uint64[],uint64[],uint64[])', [
        _investors,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
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
        self.modifyKYCDataMulti.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _investors,
          _canSendAfter,
          _canReceiveAfter,
          _expiryTime,
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
      _investors: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_investors', _investors);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyKYCDataMulti(address[],uint64[],uint64[],uint64[])', [
        _investors,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
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
      _investors: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_investors', _investors);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyKYCDataMulti(address[],uint64[],uint64[],uint64[])', [
        _investors,
        _canSendAfter,
        _canReceiveAfter,
        _expiryTime,
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
      const abiEncoder = self._lookupAbiEncoder('modifyKYCDataMulti(address[],uint64[],uint64[],uint64[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _investors: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
    ): string {
      assert.isArray('_investors', _investors);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyKYCDataMulti(address[],uint64[],uint64[],uint64[])',
        [_investors, _canSendAfter, _canReceiveAfter, _expiryTime],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyInvestorFlag = {
    async sendTransactionAsync(
      _investor: string,
      _flag: number | BigNumber,
      _value: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_investor', _investor);
      assert.isNumberOrBigNumber('_flag', _flag);
      assert.isBoolean('_value', _value);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyInvestorFlag(address,uint8,bool)', [
        _investor,
        _flag,
        _value,
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
        self.modifyInvestorFlag.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _investor,
          _flag,
          _value,
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
      _investor: string,
      _flag: number | BigNumber,
      _value: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_investor', _investor);
      assert.isNumberOrBigNumber('_flag', _flag);
      assert.isBoolean('_value', _value);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyInvestorFlag(address,uint8,bool)', [
        _investor,
        _flag,
        _value,
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
      _investor: string,
      _flag: number | BigNumber,
      _value: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_investor', _investor);
      assert.isNumberOrBigNumber('_flag', _flag);
      assert.isBoolean('_value', _value);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyInvestorFlag(address,uint8,bool)', [
        _investor,
        _flag,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('modifyInvestorFlag(address,uint8,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string, _flag: number | BigNumber, _value: boolean): string {
      assert.isString('_investor', _investor);
      assert.isNumberOrBigNumber('_flag', _flag);
      assert.isBoolean('_value', _value);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyInvestorFlag(address,uint8,bool)', [
        _investor,
        _flag,
        _value,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyInvestorFlagMulti = {
    async sendTransactionAsync(
      _investors: string[],
      _flag: Array<number | BigNumber>,
      _value: boolean[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_investors', _investors);
      assert.isArray('_flag', _flag);
      assert.isArray('_value', _value);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyInvestorFlagMulti(address[],uint8[],bool[])', [
        _investors,
        _flag,
        _value,
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
        self.modifyInvestorFlagMulti.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _investors,
          _flag,
          _value,
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
      _investors: string[],
      _flag: Array<number | BigNumber>,
      _value: boolean[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_investors', _investors);
      assert.isArray('_flag', _flag);
      assert.isArray('_value', _value);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyInvestorFlagMulti(address[],uint8[],bool[])', [
        _investors,
        _flag,
        _value,
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
      _investors: string[],
      _flag: Array<number | BigNumber>,
      _value: boolean[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_investors', _investors);
      assert.isArray('_flag', _flag);
      assert.isArray('_value', _value);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyInvestorFlagMulti(address[],uint8[],bool[])', [
        _investors,
        _flag,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('modifyInvestorFlagMulti(address[],uint8[],bool[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investors: string[], _flag: Array<number | BigNumber>, _value: boolean[]): string {
      assert.isArray('_investors', _investors);
      assert.isArray('_flag', _flag);
      assert.isArray('_value', _value);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyInvestorFlagMulti(address[],uint8[],bool[])',
        [_investors, _flag, _value],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyKYCDataSigned = {
    async sendTransactionAsync(
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyKYCDataSigned(address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
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
        self.modifyKYCDataSigned.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _investor,
          _canSendAfter,
          _canReceiveAfter,
          _expiryTime,
          _validFrom,
          _validTo,
          _nonce,
          _signature,
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
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyKYCDataSigned(address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
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
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyKYCDataSigned(address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
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
        'modifyKYCDataSigned(address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _investor: string,
      _canSendAfter: BigNumber,
      _canReceiveAfter: BigNumber,
      _expiryTime: BigNumber,
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
    ): string {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_canSendAfter', _canSendAfter);
      assert.isBigNumber('_canReceiveAfter', _canReceiveAfter);
      assert.isBigNumber('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyKYCDataSigned(address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyKYCDataSignedMulti = {
    async sendTransactionAsync(
      _investor: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_investor', _investor);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyKYCDataSignedMulti(address[],uint256[],uint256[],uint256[],uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
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
        self.modifyKYCDataSignedMulti.estimateGasAsync.bind<GeneralTransferManagerContract_3_0_0, any, Promise<number>>(
          self,
          _investor,
          _canSendAfter,
          _canReceiveAfter,
          _expiryTime,
          _validFrom,
          _validTo,
          _nonce,
          _signature,
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
      _investor: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_investor', _investor);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyKYCDataSignedMulti(address[],uint256[],uint256[],uint256[],uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
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
      _investor: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_investor', _investor);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyKYCDataSignedMulti(address[],uint256[],uint256[],uint256[],uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
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
        'modifyKYCDataSignedMulti(address[],uint256[],uint256[],uint256[],uint256,uint256,uint256,bytes)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _investor: string[],
      _canSendAfter: BigNumber[],
      _canReceiveAfter: BigNumber[],
      _expiryTime: BigNumber[],
      _validFrom: BigNumber,
      _validTo: BigNumber,
      _nonce: BigNumber,
      _signature: string,
    ): string {
      assert.isArray('_investor', _investor);
      assert.isArray('_canSendAfter', _canSendAfter);
      assert.isArray('_canReceiveAfter', _canReceiveAfter);
      assert.isArray('_expiryTime', _expiryTime);
      assert.isBigNumber('_validFrom', _validFrom);
      assert.isBigNumber('_validTo', _validTo);
      assert.isBigNumber('_nonce', _nonce);
      assert.isString('_signature', _signature);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyKYCDataSignedMulti(address[],uint256[],uint256[],uint256[],uint256,uint256,uint256,bytes)',
        [_investor, _canSendAfter, _canReceiveAfter, _expiryTime, _validFrom, _validTo, _nonce, _signature],
      );
      return abiEncodedTransactionData;
    },
  };
  public getAllInvestors = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getAllInvestors()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAllInvestors()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllInvestors()', []);
      return abiEncodedTransactionData;
    },
  };
  public getInvestors = {
    async callAsync(
      _fromIndex: BigNumber,
      _toIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string[]> {
      assert.isBigNumber('_fromIndex', _fromIndex);
      assert.isBigNumber('_toIndex', _toIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getInvestors(uint256,uint256)', [_fromIndex, _toIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('getInvestors(uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fromIndex: BigNumber, _toIndex: BigNumber): string {
      assert.isBigNumber('_fromIndex', _fromIndex);
      assert.isBigNumber('_toIndex', _toIndex);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInvestors(uint256,uint256)', [
        _fromIndex,
        _toIndex,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getAllInvestorFlags = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<[string[], BigNumber[]]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getAllInvestorFlags()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAllInvestorFlags()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllInvestorFlags()', []);
      return abiEncodedTransactionData;
    },
  };
  public getInvestorFlag = {
    async callAsync(
      _investor: string,
      _flag: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_investor', _investor);
      assert.isNumberOrBigNumber('_flag', _flag);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getInvestorFlag(address,uint8)', [_investor, _flag]);
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
      const abiEncoder = self._lookupAbiEncoder('getInvestorFlag(address,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string, _flag: number | BigNumber): string {
      assert.isString('_investor', _investor);
      assert.isNumberOrBigNumber('_flag', _flag);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInvestorFlag(address,uint8)', [
        _investor,
        _flag,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getInvestorFlags = {
    async callAsync(
      _investor: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_investor', _investor);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getInvestorFlags(address)', [_investor]);
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
      const abiEncoder = self._lookupAbiEncoder('getInvestorFlags(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string): string {
      assert.isString('_investor', _investor);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInvestorFlags(address)', [_investor]);
      return abiEncodedTransactionData;
    },
  };
  public getAllKYCData = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string[], BigNumber[], BigNumber[], BigNumber[]]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getAllKYCData()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAllKYCData()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber[], BigNumber[], BigNumber[]]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllKYCData()', []);
      return abiEncodedTransactionData;
    },
  };
  public getKYCData = {
    async callAsync(
      _investors: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber[], BigNumber[], BigNumber[]]> {
      assert.isArray('_investors', _investors);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getKYCData(address[])', [_investors]);
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
      const abiEncoder = self._lookupAbiEncoder('getKYCData(address[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[], BigNumber[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investors: string[]): string {
      assert.isArray('_investors', _investors);
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getKYCData(address[])', [_investors]);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getPermissions()', []);
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
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
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensByPartition(bytes32,address,uint256)', [
        _partition,
        _tokenHolder,
        _additionalBalance,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getAddressBytes32 = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getAddressBytes32()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAddressBytes32()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as GeneralTransferManagerContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAddressBytes32()', []);
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
  ): Promise<GeneralTransferManagerContract_3_0_0> {
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
    logUtils.log(`GeneralTransferManager successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new GeneralTransferManagerContract_3_0_0(
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
        inputs: [],
        name: 'WHITELIST',
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
        name: 'INVESTORFLAGS',
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
        inputs: [
          {
            name: 'index_0',
            type: 'address',
          },
          {
            name: 'index_1',
            type: 'uint256',
          },
        ],
        name: 'nonceMap',
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
        name: 'issuanceAddress',
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
        name: 'INVESTORSKEY',
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
            type: 'uint8',
          },
        ],
        name: 'transferRequirements',
        outputs: [
          {
            name: 'fromValidKYC',
            type: 'bool',
          },
          {
            name: 'toValidKYC',
            type: 'bool',
          },
          {
            name: 'fromRestricted',
            type: 'bool',
          },
          {
            name: 'toRestricted',
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
        name: 'defaults',
        outputs: [
          {
            name: 'canSendAfter',
            type: 'uint64',
          },
          {
            name: 'canReceiveAfter',
            type: 'uint64',
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
            name: '_issuanceAddress',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'ChangeIssuanceAddress',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_defaultCanSendAfter',
            type: 'uint64',
            indexed: false,
          },
          {
            name: '_defaultCanReceiveAfter',
            type: 'uint64',
            indexed: false,
          },
        ],
        name: 'ChangeDefaults',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_investor',
            type: 'address',
            indexed: true,
          },
          {
            name: '_addedBy',
            type: 'address',
            indexed: true,
          },
          {
            name: '_canSendAfter',
            type: 'uint64',
            indexed: false,
          },
          {
            name: '_canReceiveAfter',
            type: 'uint64',
            indexed: false,
          },
          {
            name: '_expiryTime',
            type: 'uint64',
            indexed: false,
          },
        ],
        name: 'ModifyKYCData',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_investor',
            type: 'address',
            indexed: true,
          },
          {
            name: '_flag',
            type: 'uint8',
            indexed: true,
          },
          {
            name: '_value',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ModifyInvestorFlag',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_transferType',
            type: 'uint8',
            indexed: true,
          },
          {
            name: '_fromValidKYC',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_toValidKYC',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_fromRestricted',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_toRestricted',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ModifyTransferRequirements',
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
        constant: false,
        inputs: [
          {
            name: '_defaultCanSendAfter',
            type: 'uint64',
          },
          {
            name: '_defaultCanReceiveAfter',
            type: 'uint64',
          },
        ],
        name: 'changeDefaults',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_issuanceAddress',
            type: 'address',
          },
        ],
        name: 'changeIssuanceAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
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
            name: 'index_2',
            type: 'uint256',
          },
          {
            name: '_data',
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
            name: 'index_2',
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
            name: '_transferType',
            type: 'uint8',
          },
          {
            name: '_fromValidKYC',
            type: 'bool',
          },
          {
            name: '_toValidKYC',
            type: 'bool',
          },
          {
            name: '_fromRestricted',
            type: 'bool',
          },
          {
            name: '_toRestricted',
            type: 'bool',
          },
        ],
        name: 'modifyTransferRequirements',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_transferTypes',
            type: 'uint8[]',
          },
          {
            name: '_fromValidKYC',
            type: 'bool[]',
          },
          {
            name: '_toValidKYC',
            type: 'bool[]',
          },
          {
            name: '_fromRestricted',
            type: 'bool[]',
          },
          {
            name: '_toRestricted',
            type: 'bool[]',
          },
        ],
        name: 'modifyTransferRequirementsMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_investor',
            type: 'address',
          },
          {
            name: '_canSendAfter',
            type: 'uint64',
          },
          {
            name: '_canReceiveAfter',
            type: 'uint64',
          },
          {
            name: '_expiryTime',
            type: 'uint64',
          },
        ],
        name: 'modifyKYCData',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_investors',
            type: 'address[]',
          },
          {
            name: '_canSendAfter',
            type: 'uint64[]',
          },
          {
            name: '_canReceiveAfter',
            type: 'uint64[]',
          },
          {
            name: '_expiryTime',
            type: 'uint64[]',
          },
        ],
        name: 'modifyKYCDataMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_investor',
            type: 'address',
          },
          {
            name: '_flag',
            type: 'uint8',
          },
          {
            name: '_value',
            type: 'bool',
          },
        ],
        name: 'modifyInvestorFlag',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_investors',
            type: 'address[]',
          },
          {
            name: '_flag',
            type: 'uint8[]',
          },
          {
            name: '_value',
            type: 'bool[]',
          },
        ],
        name: 'modifyInvestorFlagMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_investor',
            type: 'address',
          },
          {
            name: '_canSendAfter',
            type: 'uint256',
          },
          {
            name: '_canReceiveAfter',
            type: 'uint256',
          },
          {
            name: '_expiryTime',
            type: 'uint256',
          },
          {
            name: '_validFrom',
            type: 'uint256',
          },
          {
            name: '_validTo',
            type: 'uint256',
          },
          {
            name: '_nonce',
            type: 'uint256',
          },
          {
            name: '_signature',
            type: 'bytes',
          },
        ],
        name: 'modifyKYCDataSigned',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_investor',
            type: 'address[]',
          },
          {
            name: '_canSendAfter',
            type: 'uint256[]',
          },
          {
            name: '_canReceiveAfter',
            type: 'uint256[]',
          },
          {
            name: '_expiryTime',
            type: 'uint256[]',
          },
          {
            name: '_validFrom',
            type: 'uint256',
          },
          {
            name: '_validTo',
            type: 'uint256',
          },
          {
            name: '_nonce',
            type: 'uint256',
          },
          {
            name: '_signature',
            type: 'bytes',
          },
        ],
        name: 'modifyKYCDataSignedMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getAllInvestors',
        outputs: [
          {
            name: 'investors',
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
            name: '_fromIndex',
            type: 'uint256',
          },
          {
            name: '_toIndex',
            type: 'uint256',
          },
        ],
        name: 'getInvestors',
        outputs: [
          {
            name: 'investors',
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
        name: 'getAllInvestorFlags',
        outputs: [
          {
            name: 'investors',
            type: 'address[]',
          },
          {
            name: 'flags',
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
            name: '_investor',
            type: 'address',
          },
          {
            name: '_flag',
            type: 'uint8',
          },
        ],
        name: 'getInvestorFlag',
        outputs: [
          {
            name: 'value',
            type: 'bool',
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
        name: 'getInvestorFlags',
        outputs: [
          {
            name: 'flags',
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
        name: 'getAllKYCData',
        outputs: [
          {
            name: 'investors',
            type: 'address[]',
          },
          {
            name: 'canSendAfters',
            type: 'uint256[]',
          },
          {
            name: 'canReceiveAfters',
            type: 'uint256[]',
          },
          {
            name: 'expiryTimes',
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
            name: '_investors',
            type: 'address[]',
          },
        ],
        name: 'getKYCData',
        outputs: [
          {
            name: '',
            type: 'uint256[]',
          },
          {
            name: '',
            type: 'uint256[]',
          },
          {
            name: '',
            type: 'uint256[]',
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
        name: 'getAddressBytes32',
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
    super('GeneralTransferManager', GeneralTransferManagerContract_3_0_0.ABI(), address, supportedProvider, txDefaults);
    this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
    classUtils.bindAll(this, [
      '_abiEncoderByFunctionSignature',
      'address',
      '_web3Wrapper',
      '_defaultEstimateGasFactor',
    ]);
  }
}

export function isGeneralTransferManagerContract_3_0_0(
  contract: any,
): contract is GeneralTransferManagerContract_3_0_0 {
  return isEqual(GeneralTransferManagerContract_3_0_0.ABI(), contract.abi);
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
