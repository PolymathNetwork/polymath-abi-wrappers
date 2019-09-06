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
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

export type ERC20DividendCheckpointEventArgs_3_0_0 =
  | ERC20DividendCheckpointERC20DividendDepositedEventArgs_3_0_0
  | ERC20DividendCheckpointERC20DividendClaimedEventArgs_3_0_0
  | ERC20DividendCheckpointERC20DividendReclaimedEventArgs_3_0_0
  | ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs_3_0_0
  | ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs_3_0_0
  | ERC20DividendCheckpointSetWithholdingEventArgs_3_0_0
  | ERC20DividendCheckpointSetWithholdingFixedEventArgs_3_0_0
  | ERC20DividendCheckpointSetWalletEventArgs_3_0_0
  | ERC20DividendCheckpointUpdateDividendDatesEventArgs_3_0_0
  | ERC20DividendCheckpointPauseEventArgs_3_0_0
  | ERC20DividendCheckpointUnpauseEventArgs_3_0_0;

export enum ERC20DividendCheckpointEvents_3_0_0 {
  ERC20DividendDeposited = 'ERC20DividendDeposited',
  ERC20DividendClaimed = 'ERC20DividendClaimed',
  ERC20DividendReclaimed = 'ERC20DividendReclaimed',
  ERC20DividendWithholdingWithdrawn = 'ERC20DividendWithholdingWithdrawn',
  SetDefaultExcludedAddresses = 'SetDefaultExcludedAddresses',
  SetWithholding = 'SetWithholding',
  SetWithholdingFixed = 'SetWithholdingFixed',
  SetWallet = 'SetWallet',
  UpdateDividendDates = 'UpdateDividendDates',
  Pause = 'Pause',
  Unpause = 'Unpause',
}

export interface ERC20DividendCheckpointERC20DividendDepositedEventArgs_3_0_0 extends DecodedLogArgs {
  _depositor: string;
  _checkpointId: BigNumber;
  _maturity: BigNumber;
  _expiry: BigNumber;
  _token: string;
  _amount: BigNumber;
  _totalSupply: BigNumber;
  _dividendIndex: BigNumber;
  _name: string;
}
export interface ERC20DividendCheckpointERC20DividendClaimedEventArgs_3_0_0 extends DecodedLogArgs {
  _payee: string;
  _dividendIndex: BigNumber;
  _token: string;
  _amount: BigNumber;
  _withheld: BigNumber;
}
export interface ERC20DividendCheckpointERC20DividendReclaimedEventArgs_3_0_0 extends DecodedLogArgs {
  _claimer: string;
  _dividendIndex: BigNumber;
  _token: string;
  _claimedAmount: BigNumber;
}
export interface ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs_3_0_0 extends DecodedLogArgs {
  _claimer: string;
  _dividendIndex: BigNumber;
  _token: string;
  _withheldAmount: BigNumber;
}
export interface ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs_3_0_0 extends DecodedLogArgs {
  _excluded: string[];
}
export interface ERC20DividendCheckpointSetWithholdingEventArgs_3_0_0 extends DecodedLogArgs {
  _investors: string[];
  _withholding: BigNumber[];
}
export interface ERC20DividendCheckpointSetWithholdingFixedEventArgs_3_0_0 extends DecodedLogArgs {
  _investors: string[];
  _withholding: BigNumber;
}
export interface ERC20DividendCheckpointSetWalletEventArgs_3_0_0 extends DecodedLogArgs {
  _oldWallet: string;
  _newWallet: string;
}
export interface ERC20DividendCheckpointUpdateDividendDatesEventArgs_3_0_0 extends DecodedLogArgs {
  _dividendIndex: BigNumber;
  _maturity: BigNumber;
  _expiry: BigNumber;
}
export interface ERC20DividendCheckpointPauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}
export interface ERC20DividendCheckpointUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ERC20DividendCheckpointContract_3_0_0 extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public setWithholdingFixed = {
    async sendTransactionAsync(
      _investors: string[],
      _withholding: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_investors', _investors);
      assert.isBigNumber('_withholding', _withholding);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setWithholdingFixed(address[],uint256)', [
        _investors,
        _withholding,
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
        self.setWithholdingFixed.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _investors,
          _withholding,
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
      _withholding: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_investors', _investors);
      assert.isBigNumber('_withholding', _withholding);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setWithholdingFixed(address[],uint256)', [
        _investors,
        _withholding,
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
      _withholding: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_investors', _investors);
      assert.isBigNumber('_withholding', _withholding);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setWithholdingFixed(address[],uint256)', [
        _investors,
        _withholding,
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
      const abiEncoder = self._lookupAbiEncoder('setWithholdingFixed(address[],uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber): string {
      assert.isArray('_investors', _investors);
      assert.isBigNumber('_withholding', _withholding);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setWithholdingFixed(address[],uint256)', [
        _investors,
        _withholding,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public EXCLUDED_ADDRESS_LIMIT = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('EXCLUDED_ADDRESS_LIMIT()', []);
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
      const abiEncoder = self._lookupAbiEncoder('EXCLUDED_ADDRESS_LIMIT()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('EXCLUDED_ADDRESS_LIMIT()', []);
      return abiEncodedTransactionData;
    },
  };
  public reclaimETH = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
        self.reclaimETH.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()', []);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInitFunction()', []);
      return abiEncodedTransactionData;
    },
  };
  public getDividendData = {
    async callAsync(
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getDividendData(uint256)', [_dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('getDividendData(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDividendData(uint256)', [_dividendIndex]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTreasuryWallet = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTreasuryWallet()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getTreasuryWallet()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTreasuryWallet()', []);
      return abiEncodedTransactionData;
    },
  };
  public pullDividendPayment = {
    async sendTransactionAsync(
      _dividendIndex: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pullDividendPayment(uint256)', [_dividendIndex]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.pullDividendPayment.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _dividendIndex,
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
      _dividendIndex: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pullDividendPayment(uint256)', [_dividendIndex]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pullDividendPayment(uint256)', [_dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('pullDividendPayment(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('pullDividendPayment(uint256)', [_dividendIndex]);
      return abiEncodedTransactionData;
    },
  };
  public investorWithheld = {
    async callAsync(index_0: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.isString('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('investorWithheld(address)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('investorWithheld(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string): string {
      assert.isString('index_0', index_0);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('investorWithheld(address)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
        self.unpause.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('unpause()', []);
      return abiEncodedTransactionData;
    },
  };
  public pushDividendPaymentToAddresses = {
    async sendTransactionAsync(
      _dividendIndex: BigNumber,
      _payees: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isArray('_payees', _payees);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pushDividendPaymentToAddresses(uint256,address[])', [
        _dividendIndex,
        _payees,
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
        self.pushDividendPaymentToAddresses.estimateGasAsync.bind<
          ERC20DividendCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _dividendIndex, _payees, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _dividendIndex: BigNumber,
      _payees: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isArray('_payees', _payees);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pushDividendPaymentToAddresses(uint256,address[])', [
        _dividendIndex,
        _payees,
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
      _dividendIndex: BigNumber,
      _payees: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isArray('_payees', _payees);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pushDividendPaymentToAddresses(uint256,address[])', [
        _dividendIndex,
        _payees,
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
      const abiEncoder = self._lookupAbiEncoder('pushDividendPaymentToAddresses(uint256,address[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber, _payees: string[]): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isArray('_payees', _payees);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'pushDividendPaymentToAddresses(uint256,address[])',
        [_dividendIndex, _payees],
      );
      return abiEncodedTransactionData;
    },
  };
  public wallet = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('wallet()', []);
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
      const abiEncoder = self._lookupAbiEncoder('wallet()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('wallet()', []);
      return abiEncodedTransactionData;
    },
  };
  public isClaimed = {
    async callAsync(
      _investor: string,
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('isClaimed(address,uint256)', [_investor, _dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('isClaimed(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string, _dividendIndex: BigNumber): string {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isClaimed(address,uint256)', [
        _investor,
        _dividendIndex,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public calculateDividend = {
    async callAsync(
      _dividendIndex: BigNumber,
      _payee: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber]> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isString('_payee', _payee);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('calculateDividend(uint256,address)', [_dividendIndex, _payee]);
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
      const abiEncoder = self._lookupAbiEncoder('calculateDividend(uint256,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber, _payee: string): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isString('_payee', _payee);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('calculateDividend(uint256,address)', [
        _dividendIndex,
        _payee,
      ]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('paused()', []);
      return abiEncodedTransactionData;
    },
  };
  public getDividendIndex = {
    async callAsync(
      _checkpointId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber[]> {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getDividendIndex(uint256)', [_checkpointId]);
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
      const abiEncoder = self._lookupAbiEncoder('getDividendIndex(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_checkpointId: BigNumber): string {
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDividendIndex(uint256)', [_checkpointId]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public updateDividendDates = {
    async sendTransactionAsync(
      _dividendIndex: BigNumber,
      _maturity: BigNumber,
      _expiry: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('updateDividendDates(uint256,uint256,uint256)', [
        _dividendIndex,
        _maturity,
        _expiry,
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
        self.updateDividendDates.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _dividendIndex,
          _maturity,
          _expiry,
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
      _dividendIndex: BigNumber,
      _maturity: BigNumber,
      _expiry: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('updateDividendDates(uint256,uint256,uint256)', [
        _dividendIndex,
        _maturity,
        _expiry,
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
      _dividendIndex: BigNumber,
      _maturity: BigNumber,
      _expiry: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('updateDividendDates(uint256,uint256,uint256)', [
        _dividendIndex,
        _maturity,
        _expiry,
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
      const abiEncoder = self._lookupAbiEncoder('updateDividendDates(uint256,uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber, _maturity: BigNumber, _expiry: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('updateDividendDates(uint256,uint256,uint256)', [
        _dividendIndex,
        _maturity,
        _expiry,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public configure = {
    async sendTransactionAsync(
      _wallet: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('configure(address)', [_wallet]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.configure.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _wallet,
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
    async estimateGasAsync(_wallet: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('configure(address)', [_wallet]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_wallet: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_wallet', _wallet);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('configure(address)', [_wallet]);
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
      const abiEncoder = self._lookupAbiEncoder('configure(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_wallet: string): string {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('configure(address)', [_wallet]);
      return abiEncodedTransactionData;
    },
  };
  public withholdingTax = {
    async callAsync(index_0: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.isString('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('withholdingTax(address)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('withholdingTax(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string): string {
      assert.isString('index_0', index_0);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('withholdingTax(address)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public getCheckpointData = {
    async callAsync(
      _checkpointId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string[], BigNumber[], BigNumber[]]> {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getCheckpointData(uint256)', [_checkpointId]);
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
      const abiEncoder = self._lookupAbiEncoder('getCheckpointData(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber[], BigNumber[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_checkpointId: BigNumber): string {
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getCheckpointData(uint256)', [_checkpointId]);
      return abiEncodedTransactionData;
    },
  };
  public dividends = {
    async callAsync(
      index_0: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        string,
      ]
    > {
      assert.isBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('dividends(uint256)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('dividends(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean,
          BigNumber,
          BigNumber,
          string,
        ]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: BigNumber): string {
      assert.isBigNumber('index_0', index_0);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('dividends(uint256)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public isExcluded = {
    async callAsync(
      _investor: string,
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('isExcluded(address,uint256)', [_investor, _dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('isExcluded(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investor: string, _dividendIndex: BigNumber): string {
      assert.isString('_investor', _investor);
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isExcluded(address,uint256)', [
        _investor,
        _dividendIndex,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
        self.pause.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('pause()', []);
      return abiEncodedTransactionData;
    },
  };
  public setWithholding = {
    async sendTransactionAsync(
      _investors: string[],
      _withholding: BigNumber[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_investors', _investors);
      assert.isArray('_withholding', _withholding);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setWithholding(address[],uint256[])', [
        _investors,
        _withholding,
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
        self.setWithholding.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _investors,
          _withholding,
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
      _withholding: BigNumber[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_investors', _investors);
      assert.isArray('_withholding', _withholding);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setWithholding(address[],uint256[])', [
        _investors,
        _withholding,
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
      _withholding: BigNumber[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_investors', _investors);
      assert.isArray('_withholding', _withholding);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setWithholding(address[],uint256[])', [
        _investors,
        _withholding,
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
      const abiEncoder = self._lookupAbiEncoder('setWithholding(address[],uint256[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investors: string[], _withholding: BigNumber[]): string {
      assert.isArray('_investors', _investors);
      assert.isArray('_withholding', _withholding);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setWithholding(address[],uint256[])', [
        _investors,
        _withholding,
      ]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
        self.reclaimERC20.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
      return abiEncodedTransactionData;
    },
  };
  public dividendTokens = {
    async callAsync(index_0: BigNumber, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.isBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('dividendTokens(uint256)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('dividendTokens(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: BigNumber): string {
      assert.isBigNumber('index_0', index_0);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('dividendTokens(uint256)', [index_0]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('OPERATOR()', []);
      return abiEncodedTransactionData;
    },
  };
  public changeWallet = {
    async sendTransactionAsync(
      _wallet: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeWallet(address)', [_wallet]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.changeWallet.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _wallet,
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
    async estimateGasAsync(_wallet: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeWallet(address)', [_wallet]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_wallet: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_wallet', _wallet);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeWallet(address)', [_wallet]);
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
      const abiEncoder = self._lookupAbiEncoder('changeWallet(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_wallet: string): string {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeWallet(address)', [_wallet]);
      return abiEncodedTransactionData;
    },
  };
  public getDividendsData = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], string[]]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getDividendsData()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getDividendsData()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], string[]]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDividendsData()', []);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('securityToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public excluded = {
    async callAsync(index_0: BigNumber, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.isBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('excluded(uint256)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('excluded(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: BigNumber): string {
      assert.isBigNumber('index_0', index_0);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('excluded(uint256)', [index_0]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getPermissions()', []);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('factory()', []);
      return abiEncodedTransactionData;
    },
  };
  public setDefaultExcluded = {
    async sendTransactionAsync(
      _excluded: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_excluded', _excluded);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setDefaultExcluded(address[])', [_excluded]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.setDefaultExcluded.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _excluded,
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
      _excluded: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_excluded', _excluded);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setDefaultExcluded(address[])', [_excluded]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_excluded: string[], callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isArray('_excluded', _excluded);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setDefaultExcluded(address[])', [_excluded]);
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
      const abiEncoder = self._lookupAbiEncoder('setDefaultExcluded(address[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_excluded: string[]): string {
      assert.isArray('_excluded', _excluded);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setDefaultExcluded(address[])', [_excluded]);
      return abiEncodedTransactionData;
    },
  };
  public pushDividendPayment = {
    async sendTransactionAsync(
      _dividendIndex: BigNumber,
      _start: BigNumber,
      _end: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_start', _start);
      assert.isBigNumber('_end', _end);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pushDividendPayment(uint256,uint256,uint256)', [
        _dividendIndex,
        _start,
        _end,
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
        self.pushDividendPayment.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _dividendIndex,
          _start,
          _end,
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
      _dividendIndex: BigNumber,
      _start: BigNumber,
      _end: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_start', _start);
      assert.isBigNumber('_end', _end);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pushDividendPayment(uint256,uint256,uint256)', [
        _dividendIndex,
        _start,
        _end,
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
      _dividendIndex: BigNumber,
      _start: BigNumber,
      _end: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_start', _start);
      assert.isBigNumber('_end', _end);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('pushDividendPayment(uint256,uint256,uint256)', [
        _dividendIndex,
        _start,
        _end,
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
      const abiEncoder = self._lookupAbiEncoder('pushDividendPayment(uint256,uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber, _start: BigNumber, _end: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.isBigNumber('_start', _start);
      assert.isBigNumber('_end', _end);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('pushDividendPayment(uint256,uint256,uint256)', [
        _dividendIndex,
        _start,
        _end,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getDefaultExcluded = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getDefaultExcluded()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getDefaultExcluded()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDefaultExcluded()', []);
      return abiEncodedTransactionData;
    },
  };
  public getDividendProgress = {
    async callAsync(
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string[], boolean[], boolean[], BigNumber[], BigNumber[], BigNumber[]]> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getDividendProgress(uint256)', [_dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('getDividendProgress(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [string[], boolean[], boolean[], BigNumber[], BigNumber[], BigNumber[]]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDividendProgress(uint256)', [_dividendIndex]);
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDataStore()', []);
      return abiEncodedTransactionData;
    },
  };
  public createCheckpoint = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createCheckpoint()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.createCheckpoint.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createCheckpoint()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createCheckpoint()', []);
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
      const abiEncoder = self._lookupAbiEncoder('createCheckpoint()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('createCheckpoint()', []);
      return abiEncodedTransactionData;
    },
  };
  public createDividend = {
    async sendTransactionAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _name: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createDividend(uint256,uint256,address,uint256,bytes32)', [
        _maturity,
        _expiry,
        _token,
        _amount,
        _name,
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
        self.createDividend.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _maturity,
          _expiry,
          _token,
          _amount,
          _name,
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
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _name: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createDividend(uint256,uint256,address,uint256,bytes32)', [
        _maturity,
        _expiry,
        _token,
        _amount,
        _name,
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
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _name: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isString('_name', _name);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createDividend(uint256,uint256,address,uint256,bytes32)', [
        _maturity,
        _expiry,
        _token,
        _amount,
        _name,
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
      const abiEncoder = self._lookupAbiEncoder('createDividend(uint256,uint256,address,uint256,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _name: string,
    ): string {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createDividend(uint256,uint256,address,uint256,bytes32)',
        [_maturity, _expiry, _token, _amount, _name],
      );
      return abiEncodedTransactionData;
    },
  };
  public createDividendWithCheckpoint = {
    async sendTransactionAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _name: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithCheckpoint(uint256,uint256,address,uint256,uint256,bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _name],
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
        self.createDividendWithCheckpoint.estimateGasAsync.bind<
          ERC20DividendCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _maturity, _expiry, _token, _amount, _checkpointId, _name, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _name: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithCheckpoint(uint256,uint256,address,uint256,uint256,bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _name],
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
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _name: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isString('_name', _name);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithCheckpoint(uint256,uint256,address,uint256,uint256,bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _name],
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
        'createDividendWithCheckpoint(uint256,uint256,address,uint256,uint256,bytes32)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _name: string,
    ): string {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createDividendWithCheckpoint(uint256,uint256,address,uint256,uint256,bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _name],
      );
      return abiEncodedTransactionData;
    },
  };
  public createDividendWithExclusions = {
    async sendTransactionAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _excluded: string[],
      _name: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithExclusions(uint256,uint256,address,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _excluded, _name],
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
        self.createDividendWithExclusions.estimateGasAsync.bind<
          ERC20DividendCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _maturity, _expiry, _token, _amount, _excluded, _name, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _excluded: string[],
      _name: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithExclusions(uint256,uint256,address,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _excluded, _name],
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
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _excluded: string[],
      _name: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithExclusions(uint256,uint256,address,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _excluded, _name],
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
        'createDividendWithExclusions(uint256,uint256,address,uint256,address[],bytes32)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _excluded: string[],
      _name: string,
    ): string {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createDividendWithExclusions(uint256,uint256,address,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _excluded, _name],
      );
      return abiEncodedTransactionData;
    },
  };
  public createDividendWithCheckpointAndExclusions = {
    async sendTransactionAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _excluded: string[],
      _name: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithCheckpointAndExclusions(uint256,uint256,address,uint256,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _excluded, _name],
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
        self.createDividendWithCheckpointAndExclusions.estimateGasAsync.bind<
          ERC20DividendCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _maturity, _expiry, _token, _amount, _checkpointId, _excluded, _name, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _excluded: string[],
      _name: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithCheckpointAndExclusions(uint256,uint256,address,uint256,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _excluded, _name],
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
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _excluded: string[],
      _name: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'createDividendWithCheckpointAndExclusions(uint256,uint256,address,uint256,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _excluded, _name],
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
        'createDividendWithCheckpointAndExclusions(uint256,uint256,address,uint256,uint256,address[],bytes32)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _maturity: BigNumber,
      _expiry: BigNumber,
      _token: string,
      _amount: BigNumber,
      _checkpointId: BigNumber,
      _excluded: string[],
      _name: string,
    ): string {
      assert.isBigNumber('_maturity', _maturity);
      assert.isBigNumber('_expiry', _expiry);
      assert.isString('_token', _token);
      assert.isBigNumber('_amount', _amount);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_excluded', _excluded);
      assert.isString('_name', _name);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createDividendWithCheckpointAndExclusions(uint256,uint256,address,uint256,uint256,address[],bytes32)',
        [_maturity, _expiry, _token, _amount, _checkpointId, _excluded, _name],
      );
      return abiEncodedTransactionData;
    },
  };
  public reclaimDividend = {
    async sendTransactionAsync(
      _dividendIndex: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('reclaimDividend(uint256)', [_dividendIndex]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.reclaimDividend.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _dividendIndex,
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
      _dividendIndex: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('reclaimDividend(uint256)', [_dividendIndex]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('reclaimDividend(uint256)', [_dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('reclaimDividend(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimDividend(uint256)', [_dividendIndex]);
      return abiEncodedTransactionData;
    },
  };
  public withdrawWithholding = {
    async sendTransactionAsync(
      _dividendIndex: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('withdrawWithholding(uint256)', [_dividendIndex]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.withdrawWithholding.estimateGasAsync.bind<ERC20DividendCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _dividendIndex,
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
      _dividendIndex: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('withdrawWithholding(uint256)', [_dividendIndex]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _dividendIndex: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('withdrawWithholding(uint256)', [_dividendIndex]);
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
      const abiEncoder = self._lookupAbiEncoder('withdrawWithholding(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dividendIndex: BigNumber): string {
      assert.isBigNumber('_dividendIndex', _dividendIndex);
      const self = (this as any) as ERC20DividendCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('withdrawWithholding(uint256)', [_dividendIndex]);
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
  ): Promise<ERC20DividendCheckpointContract_3_0_0> {
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
    logUtils.log(`ERC20DividendCheckpoint successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new ERC20DividendCheckpointContract_3_0_0(
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
        inputs: [
          {
            name: '_investors',
            type: 'address[]',
          },
          {
            name: '_withholding',
            type: 'uint256',
          },
        ],
        name: 'setWithholdingFixed',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'EXCLUDED_ADDRESS_LIMIT',
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
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'getDividendData',
        outputs: [
          {
            name: 'created',
            type: 'uint256',
          },
          {
            name: 'maturity',
            type: 'uint256',
          },
          {
            name: 'expiry',
            type: 'uint256',
          },
          {
            name: 'amount',
            type: 'uint256',
          },
          {
            name: 'claimedAmount',
            type: 'uint256',
          },
          {
            name: 'name',
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
        constant: true,
        inputs: [],
        name: 'getTreasuryWallet',
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
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'pullDividendPayment',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'index_0',
            type: 'address',
          },
        ],
        name: 'investorWithheld',
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
        constant: false,
        inputs: [],
        name: 'unpause',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
          {
            name: '_payees',
            type: 'address[]',
          },
        ],
        name: 'pushDividendPaymentToAddresses',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'wallet',
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
        inputs: [
          {
            name: '_investor',
            type: 'address',
          },
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'isClaimed',
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
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
          {
            name: '_payee',
            type: 'address',
          },
        ],
        name: 'calculateDividend',
        outputs: [
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
        inputs: [
          {
            name: '_checkpointId',
            type: 'uint256',
          },
        ],
        name: 'getDividendIndex',
        outputs: [
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
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
          {
            name: '_maturity',
            type: 'uint256',
          },
          {
            name: '_expiry',
            type: 'uint256',
          },
        ],
        name: 'updateDividendDates',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_wallet',
            type: 'address',
          },
        ],
        name: 'configure',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'index_0',
            type: 'address',
          },
        ],
        name: 'withholdingTax',
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
            name: '_checkpointId',
            type: 'uint256',
          },
        ],
        name: 'getCheckpointData',
        outputs: [
          {
            name: 'investors',
            type: 'address[]',
          },
          {
            name: 'balances',
            type: 'uint256[]',
          },
          {
            name: 'withholdings',
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
            name: 'index_0',
            type: 'uint256',
          },
        ],
        name: 'dividends',
        outputs: [
          {
            name: 'checkpointId',
            type: 'uint256',
          },
          {
            name: 'created',
            type: 'uint256',
          },
          {
            name: 'maturity',
            type: 'uint256',
          },
          {
            name: 'expiry',
            type: 'uint256',
          },
          {
            name: 'amount',
            type: 'uint256',
          },
          {
            name: 'claimedAmount',
            type: 'uint256',
          },
          {
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            name: 'reclaimed',
            type: 'bool',
          },
          {
            name: 'totalWithheld',
            type: 'uint256',
          },
          {
            name: 'totalWithheldWithdrawn',
            type: 'uint256',
          },
          {
            name: 'name',
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
            name: '_investor',
            type: 'address',
          },
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'isExcluded',
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
            name: '_investors',
            type: 'address[]',
          },
          {
            name: '_withholding',
            type: 'uint256[]',
          },
        ],
        name: 'setWithholding',
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
        inputs: [
          {
            name: 'index_0',
            type: 'uint256',
          },
        ],
        name: 'dividendTokens',
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
        constant: false,
        inputs: [
          {
            name: '_wallet',
            type: 'address',
          },
        ],
        name: 'changeWallet',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getDividendsData',
        outputs: [
          {
            name: 'createds',
            type: 'uint256[]',
          },
          {
            name: 'maturitys',
            type: 'uint256[]',
          },
          {
            name: 'expirys',
            type: 'uint256[]',
          },
          {
            name: 'amounts',
            type: 'uint256[]',
          },
          {
            name: 'claimedAmounts',
            type: 'uint256[]',
          },
          {
            name: 'names',
            type: 'bytes32[]',
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
        inputs: [
          {
            name: 'index_0',
            type: 'uint256',
          },
        ],
        name: 'excluded',
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
        constant: false,
        inputs: [
          {
            name: '_excluded',
            type: 'address[]',
          },
        ],
        name: 'setDefaultExcluded',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
          {
            name: '_start',
            type: 'uint256',
          },
          {
            name: '_end',
            type: 'uint256',
          },
        ],
        name: 'pushDividendPayment',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getDefaultExcluded',
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
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'getDividendProgress',
        outputs: [
          {
            name: 'investors',
            type: 'address[]',
          },
          {
            name: 'resultClaimed',
            type: 'bool[]',
          },
          {
            name: 'resultExcluded',
            type: 'bool[]',
          },
          {
            name: 'resultWithheld',
            type: 'uint256[]',
          },
          {
            name: 'resultAmount',
            type: 'uint256[]',
          },
          {
            name: 'resultBalance',
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
        constant: false,
        inputs: [],
        name: 'createCheckpoint',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
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
            name: '_depositor',
            type: 'address',
            indexed: true,
          },
          {
            name: '_checkpointId',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_maturity',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_expiry',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_token',
            type: 'address',
            indexed: true,
          },
          {
            name: '_amount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_totalSupply',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_dividendIndex',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_name',
            type: 'bytes32',
            indexed: true,
          },
        ],
        name: 'ERC20DividendDeposited',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_payee',
            type: 'address',
            indexed: true,
          },
          {
            name: '_dividendIndex',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_token',
            type: 'address',
            indexed: true,
          },
          {
            name: '_amount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_withheld',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ERC20DividendClaimed',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_claimer',
            type: 'address',
            indexed: true,
          },
          {
            name: '_dividendIndex',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_token',
            type: 'address',
            indexed: true,
          },
          {
            name: '_claimedAmount',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ERC20DividendReclaimed',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_claimer',
            type: 'address',
            indexed: true,
          },
          {
            name: '_dividendIndex',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_token',
            type: 'address',
            indexed: true,
          },
          {
            name: '_withheldAmount',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ERC20DividendWithholdingWithdrawn',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_excluded',
            type: 'address[]',
            indexed: false,
          },
        ],
        name: 'SetDefaultExcludedAddresses',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_investors',
            type: 'address[]',
            indexed: false,
          },
          {
            name: '_withholding',
            type: 'uint256[]',
            indexed: false,
          },
        ],
        name: 'SetWithholding',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_investors',
            type: 'address[]',
            indexed: false,
          },
          {
            name: '_withholding',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'SetWithholdingFixed',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldWallet',
            type: 'address',
            indexed: true,
          },
          {
            name: '_newWallet',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'SetWallet',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_maturity',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_expiry',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'UpdateDividendDates',
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
            name: '_maturity',
            type: 'uint256',
          },
          {
            name: '_expiry',
            type: 'uint256',
          },
          {
            name: '_token',
            type: 'address',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
          {
            name: '_name',
            type: 'bytes32',
          },
        ],
        name: 'createDividend',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_maturity',
            type: 'uint256',
          },
          {
            name: '_expiry',
            type: 'uint256',
          },
          {
            name: '_token',
            type: 'address',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
          {
            name: '_checkpointId',
            type: 'uint256',
          },
          {
            name: '_name',
            type: 'bytes32',
          },
        ],
        name: 'createDividendWithCheckpoint',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_maturity',
            type: 'uint256',
          },
          {
            name: '_expiry',
            type: 'uint256',
          },
          {
            name: '_token',
            type: 'address',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
          {
            name: '_excluded',
            type: 'address[]',
          },
          {
            name: '_name',
            type: 'bytes32',
          },
        ],
        name: 'createDividendWithExclusions',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_maturity',
            type: 'uint256',
          },
          {
            name: '_expiry',
            type: 'uint256',
          },
          {
            name: '_token',
            type: 'address',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
          {
            name: '_checkpointId',
            type: 'uint256',
          },
          {
            name: '_excluded',
            type: 'address[]',
          },
          {
            name: '_name',
            type: 'bytes32',
          },
        ],
        name: 'createDividendWithCheckpointAndExclusions',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'reclaimDividend',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_dividendIndex',
            type: 'uint256',
          },
        ],
        name: 'withdrawWithholding',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
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
    super(
      'ERC20DividendCheckpoint',
      ERC20DividendCheckpointContract_3_0_0.ABI(),
      address,
      supportedProvider,
      txDefaults,
    );
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
