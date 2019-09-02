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

export type USDTieredSTOEventArgs =
  | USDTieredSTOSetAllowBeneficialInvestmentsEventArgs
  | USDTieredSTOSetNonAccreditedLimitEventArgs
  | USDTieredSTOTokenPurchaseEventArgs
  | USDTieredSTOFundsReceivedEventArgs
  | USDTieredSTOReserveTokenMintEventArgs
  | USDTieredSTOSetAddressesEventArgs
  | USDTieredSTOSetLimitsEventArgs
  | USDTieredSTOSetTimesEventArgs
  | USDTieredSTOSetTiersEventArgs
  | USDTieredSTOSetTreasuryWalletEventArgs
  | USDTieredSTOPauseEventArgs
  | USDTieredSTOUnpauseEventArgs
  | USDTieredSTOSetFundRaiseTypesEventArgs;

export enum USDTieredSTOEvents {
  SetAllowBeneficialInvestments = 'SetAllowBeneficialInvestments',
  SetNonAccreditedLimit = 'SetNonAccreditedLimit',
  TokenPurchase = 'TokenPurchase',
  FundsReceived = 'FundsReceived',
  ReserveTokenMint = 'ReserveTokenMint',
  SetAddresses = 'SetAddresses',
  SetLimits = 'SetLimits',
  SetTimes = 'SetTimes',
  SetTiers = 'SetTiers',
  SetTreasuryWallet = 'SetTreasuryWallet',
  Pause = 'Pause',
  Unpause = 'Unpause',
  SetFundRaiseTypes = 'SetFundRaiseTypes',
}

export interface USDTieredSTOSetAllowBeneficialInvestmentsEventArgs extends DecodedLogArgs {
  _allowed: boolean;
}
export interface USDTieredSTOSetNonAccreditedLimitEventArgs extends DecodedLogArgs {
  _investor: string;
  _limit: BigNumber;
}
export interface USDTieredSTOTokenPurchaseEventArgs extends DecodedLogArgs {
  _purchaser: string;
  _beneficiary: string;
  _tokens: BigNumber;
  _usdAmount: BigNumber;
  _tierPrice: BigNumber;
  _tier: BigNumber;
}
export interface USDTieredSTOFundsReceivedEventArgs extends DecodedLogArgs {
  _purchaser: string;
  _beneficiary: string;
  _usdAmount: BigNumber;
  _fundRaiseType: BigNumber;
  _receivedValue: BigNumber;
  _spentValue: BigNumber;
  _rate: BigNumber;
}
export interface USDTieredSTOReserveTokenMintEventArgs extends DecodedLogArgs {
  _owner: string;
  _wallet: string;
  _tokens: BigNumber;
  _latestTier: BigNumber;
}
export interface USDTieredSTOSetAddressesEventArgs extends DecodedLogArgs {
  _wallet: string;
  _usdTokens: string[];
}
export interface USDTieredSTOSetLimitsEventArgs extends DecodedLogArgs {
  _nonAccreditedLimitUSD: BigNumber;
  _minimumInvestmentUSD: BigNumber;
}
export interface USDTieredSTOSetTimesEventArgs extends DecodedLogArgs {
  _startTime: BigNumber;
  _endTime: BigNumber;
}
export interface USDTieredSTOSetTiersEventArgs extends DecodedLogArgs {
  _ratePerTier: BigNumber[];
  _ratePerTierDiscountPoly: BigNumber[];
  _tokensPerTierTotal: BigNumber[];
  _tokensPerTierDiscountPoly: BigNumber[];
}
export interface USDTieredSTOSetTreasuryWalletEventArgs extends DecodedLogArgs {
  _oldWallet: string;
  _newWallet: string;
}
export interface USDTieredSTOPauseEventArgs extends DecodedLogArgs {
  account: string;
}
export interface USDTieredSTOUnpauseEventArgs extends DecodedLogArgs {
  account: string;
}
export interface USDTieredSTOSetFundRaiseTypesEventArgs extends DecodedLogArgs {
  _fundRaiseTypes: BigNumber[];
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class USDTieredSTOContract extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public tiers = {
    async callAsync(
      index_0: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]> {
      assert.isBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('tiers(uint256)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('tiers(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: BigNumber): string {
      assert.isBigNumber('index_0', index_0);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('tiers(uint256)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public reclaimETH = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as USDTieredSTOContract;
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
        self.reclaimETH.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public allowBeneficialInvestments = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('allowBeneficialInvestments()', []);
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
      const abiEncoder = self._lookupAbiEncoder('allowBeneficialInvestments()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('allowBeneficialInvestments()', []);
      return abiEncodedTransactionData;
    },
  };
  public endTime = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('endTime()', []);
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
      const abiEncoder = self._lookupAbiEncoder('endTime()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('endTime()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as USDTieredSTOContract;
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
        self.unpause.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('unpause()', []);
      return abiEncodedTransactionData;
    },
  };
  public treasuryWallet = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('treasuryWallet()', []);
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
      const abiEncoder = self._lookupAbiEncoder('treasuryWallet()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('treasuryWallet()', []);
      return abiEncodedTransactionData;
    },
  };
  public nonAccreditedLimitUSD = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('nonAccreditedLimitUSD()', []);
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
      const abiEncoder = self._lookupAbiEncoder('nonAccreditedLimitUSD()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('nonAccreditedLimitUSD()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('wallet()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('paused()', []);
      return abiEncodedTransactionData;
    },
  };
  public totalTokensSold = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('totalTokensSold()', []);
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
      const abiEncoder = self._lookupAbiEncoder('totalTokensSold()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('totalTokensSold()', []);
      return abiEncodedTransactionData;
    },
  };
  public finalAmountReturned = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('finalAmountReturned()', []);
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
      const abiEncoder = self._lookupAbiEncoder('finalAmountReturned()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('finalAmountReturned()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public stableCoinsRaised = {
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
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('stableCoinsRaised(address)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('stableCoinsRaised(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string): string {
      assert.isString('index_0', index_0);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('stableCoinsRaised(address)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public startTime = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('startTime()', []);
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
      const abiEncoder = self._lookupAbiEncoder('startTime()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('startTime()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as USDTieredSTOContract;
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
        self.pause.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('pause()', []);
      return abiEncodedTransactionData;
    },
  };
  public investorInvested = {
    async callAsync(
      index_0: string,
      index_1: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('index_0', index_0);
      assert.isNumberOrBigNumber('index_1', index_1);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('investorInvested(address,uint8)', [index_0, index_1]);
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
      const abiEncoder = self._lookupAbiEncoder('investorInvested(address,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string, index_1: number | BigNumber): string {
      assert.isString('index_0', index_0);
      assert.isNumberOrBigNumber('index_1', index_1);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('investorInvested(address,uint8)', [
        index_0,
        index_1,
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
      const self = (this as any) as USDTieredSTOContract;
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
        self.reclaimERC20.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
      return abiEncodedTransactionData;
    },
  };
  public isFinalized = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('isFinalized()', []);
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
      const abiEncoder = self._lookupAbiEncoder('isFinalized()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('isFinalized()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('OPERATOR()', []);
      return abiEncodedTransactionData;
    },
  };
  public getRaised = {
    async callAsync(
      _fundRaiseType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getRaised(uint8)', [_fundRaiseType]);
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
      const abiEncoder = self._lookupAbiEncoder('getRaised(uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getRaised(uint8)', [_fundRaiseType]);
      return abiEncodedTransactionData;
    },
  };
  public pausedTime = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('pausedTime()', []);
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
      const abiEncoder = self._lookupAbiEncoder('pausedTime()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('pausedTime()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('factory()', []);
      return abiEncodedTransactionData;
    },
  };
  public fundsRaised = {
    async callAsync(
      index_0: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isNumberOrBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('fundsRaised(uint8)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('fundsRaised(uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: number | BigNumber): string {
      assert.isNumberOrBigNumber('index_0', index_0);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('fundsRaised(uint8)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public investorInvestedUSD = {
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
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('investorInvestedUSD(address)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('investorInvestedUSD(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string): string {
      assert.isString('index_0', index_0);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('investorInvestedUSD(address)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public fundRaiseTypes = {
    async callAsync(
      index_0: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isNumberOrBigNumber('index_0', index_0);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('fundRaiseTypes(uint8)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('fundRaiseTypes(uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: number | BigNumber): string {
      assert.isNumberOrBigNumber('index_0', index_0);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('fundRaiseTypes(uint8)', [index_0]);
      return abiEncodedTransactionData;
    },
  };
  public currentTier = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('currentTier()', []);
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
      const abiEncoder = self._lookupAbiEncoder('currentTier()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('currentTier()', []);
      return abiEncodedTransactionData;
    },
  };
  public investorCount = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('investorCount()', []);
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
      const abiEncoder = self._lookupAbiEncoder('investorCount()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('investorCount()', []);
      return abiEncodedTransactionData;
    },
  };
  public nonAccreditedLimitUSDOverride = {
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
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('nonAccreditedLimitUSDOverride(address)', [index_0]);
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
      const abiEncoder = self._lookupAbiEncoder('nonAccreditedLimitUSDOverride(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(index_0: string): string {
      assert.isString('index_0', index_0);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('nonAccreditedLimitUSDOverride(address)', [
        index_0,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public minimumInvestmentUSD = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('minimumInvestmentUSD()', []);
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
      const abiEncoder = self._lookupAbiEncoder('minimumInvestmentUSD()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('minimumInvestmentUSD()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDataStore()', []);
      return abiEncodedTransactionData;
    },
  };
  public fundsRaisedUSD = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('fundsRaisedUSD()', []);
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
      const abiEncoder = self._lookupAbiEncoder('fundsRaisedUSD()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('fundsRaisedUSD()', []);
      return abiEncodedTransactionData;
    },
  };
  public configure = {
    async sendTransactionAsync(
      _startTime: BigNumber,
      _endTime: BigNumber,
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      _fundRaiseTypes: Array<number | BigNumber>,
      _wallet: string,
      _treasuryWallet: string,
      _usdTokens: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments(
        'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])',
        [
          _startTime,
          _endTime,
          _ratePerTier,
          _ratePerTierDiscountPoly,
          _tokensPerTierTotal,
          _tokensPerTierDiscountPoly,
          _nonAccreditedLimitUSD,
          _minimumInvestmentUSD,
          _fundRaiseTypes,
          _wallet,
          _treasuryWallet,
          _usdTokens,
        ],
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
        self.configure.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _startTime,
          _endTime,
          _ratePerTier,
          _ratePerTierDiscountPoly,
          _tokensPerTierTotal,
          _tokensPerTierDiscountPoly,
          _nonAccreditedLimitUSD,
          _minimumInvestmentUSD,
          _fundRaiseTypes,
          _wallet,
          _treasuryWallet,
          _usdTokens,
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
      _startTime: BigNumber,
      _endTime: BigNumber,
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      _fundRaiseTypes: Array<number | BigNumber>,
      _wallet: string,
      _treasuryWallet: string,
      _usdTokens: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments(
        'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])',
        [
          _startTime,
          _endTime,
          _ratePerTier,
          _ratePerTierDiscountPoly,
          _tokensPerTierTotal,
          _tokensPerTierDiscountPoly,
          _nonAccreditedLimitUSD,
          _minimumInvestmentUSD,
          _fundRaiseTypes,
          _wallet,
          _treasuryWallet,
          _usdTokens,
        ],
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
      _startTime: BigNumber,
      _endTime: BigNumber,
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      _fundRaiseTypes: Array<number | BigNumber>,
      _wallet: string,
      _treasuryWallet: string,
      _usdTokens: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments(
        'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])',
        [
          _startTime,
          _endTime,
          _ratePerTier,
          _ratePerTierDiscountPoly,
          _tokensPerTierTotal,
          _tokensPerTierDiscountPoly,
          _nonAccreditedLimitUSD,
          _minimumInvestmentUSD,
          _fundRaiseTypes,
          _wallet,
          _treasuryWallet,
          _usdTokens,
        ],
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
        'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _startTime: BigNumber,
      _endTime: BigNumber,
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      _fundRaiseTypes: Array<number | BigNumber>,
      _wallet: string,
      _treasuryWallet: string,
      _usdTokens: string[],
    ): string {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])',
        [
          _startTime,
          _endTime,
          _ratePerTier,
          _ratePerTierDiscountPoly,
          _tokensPerTierTotal,
          _tokensPerTierDiscountPoly,
          _nonAccreditedLimitUSD,
          _minimumInvestmentUSD,
          _fundRaiseTypes,
          _wallet,
          _treasuryWallet,
          _usdTokens,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyFunding = {
    async sendTransactionAsync(
      _fundRaiseTypes: Array<number | BigNumber>,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyFunding(uint8[])', [_fundRaiseTypes]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.modifyFunding.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _fundRaiseTypes,
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
      _fundRaiseTypes: Array<number | BigNumber>,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyFunding(uint8[])', [_fundRaiseTypes]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _fundRaiseTypes: Array<number | BigNumber>,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyFunding(uint8[])', [_fundRaiseTypes]);
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
      const abiEncoder = self._lookupAbiEncoder('modifyFunding(uint8[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseTypes: Array<number | BigNumber>): string {
      assert.isArray('_fundRaiseTypes', _fundRaiseTypes);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyFunding(uint8[])', [_fundRaiseTypes]);
      return abiEncodedTransactionData;
    },
  };
  public modifyLimits = {
    async sendTransactionAsync(
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyLimits(uint256,uint256)', [
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
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
        self.modifyLimits.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _nonAccreditedLimitUSD,
          _minimumInvestmentUSD,
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
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyLimits(uint256,uint256)', [
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
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
      _nonAccreditedLimitUSD: BigNumber,
      _minimumInvestmentUSD: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyLimits(uint256,uint256)', [
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
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
      const abiEncoder = self._lookupAbiEncoder('modifyLimits(uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_nonAccreditedLimitUSD: BigNumber, _minimumInvestmentUSD: BigNumber): string {
      assert.isBigNumber('_nonAccreditedLimitUSD', _nonAccreditedLimitUSD);
      assert.isBigNumber('_minimumInvestmentUSD', _minimumInvestmentUSD);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyLimits(uint256,uint256)', [
        _nonAccreditedLimitUSD,
        _minimumInvestmentUSD,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyTiers = {
    async sendTransactionAsync(
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyTiers(uint256[],uint256[],uint256[],uint256[])', [
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
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
        self.modifyTiers.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _ratePerTier,
          _ratePerTierDiscountPoly,
          _tokensPerTierTotal,
          _tokensPerTierDiscountPoly,
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
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyTiers(uint256[],uint256[],uint256[],uint256[])', [
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
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
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyTiers(uint256[],uint256[],uint256[],uint256[])', [
        _ratePerTier,
        _ratePerTierDiscountPoly,
        _tokensPerTierTotal,
        _tokensPerTierDiscountPoly,
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
      const abiEncoder = self._lookupAbiEncoder('modifyTiers(uint256[],uint256[],uint256[],uint256[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _ratePerTier: BigNumber[],
      _ratePerTierDiscountPoly: BigNumber[],
      _tokensPerTierTotal: BigNumber[],
      _tokensPerTierDiscountPoly: BigNumber[],
    ): string {
      assert.isArray('_ratePerTier', _ratePerTier);
      assert.isArray('_ratePerTierDiscountPoly', _ratePerTierDiscountPoly);
      assert.isArray('_tokensPerTierTotal', _tokensPerTierTotal);
      assert.isArray('_tokensPerTierDiscountPoly', _tokensPerTierDiscountPoly);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyTiers(uint256[],uint256[],uint256[],uint256[])',
        [_ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyTimes = {
    async sendTransactionAsync(
      _startTime: BigNumber,
      _endTime: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyTimes(uint256,uint256)', [_startTime, _endTime]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.modifyTimes.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _startTime,
          _endTime,
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
      _startTime: BigNumber,
      _endTime: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyTimes(uint256,uint256)', [_startTime, _endTime]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _startTime: BigNumber,
      _endTime: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyTimes(uint256,uint256)', [_startTime, _endTime]);
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
      const abiEncoder = self._lookupAbiEncoder('modifyTimes(uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_startTime: BigNumber, _endTime: BigNumber): string {
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyTimes(uint256,uint256)', [
        _startTime,
        _endTime,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyAddresses = {
    async sendTransactionAsync(
      _wallet: string,
      _treasuryWallet: string,
      _usdTokens: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyAddresses(address,address,address[])', [
        _wallet,
        _treasuryWallet,
        _usdTokens,
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
        self.modifyAddresses.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _wallet,
          _treasuryWallet,
          _usdTokens,
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
      _treasuryWallet: string,
      _usdTokens: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyAddresses(address,address,address[])', [
        _wallet,
        _treasuryWallet,
        _usdTokens,
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
      _wallet: string,
      _treasuryWallet: string,
      _usdTokens: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyAddresses(address,address,address[])', [
        _wallet,
        _treasuryWallet,
        _usdTokens,
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
      const abiEncoder = self._lookupAbiEncoder('modifyAddresses(address,address,address[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_wallet: string, _treasuryWallet: string, _usdTokens: string[]): string {
      assert.isString('_wallet', _wallet);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isArray('_usdTokens', _usdTokens);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyAddresses(address,address,address[])', [
        _wallet,
        _treasuryWallet,
        _usdTokens,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public modifyOracle = {
    async sendTransactionAsync(
      _fundRaiseType: number | BigNumber,
      _oracleAddress: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isString('_oracleAddress', _oracleAddress);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyOracle(uint8,address)', [_fundRaiseType, _oracleAddress]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.modifyOracle.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _fundRaiseType,
          _oracleAddress,
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
      _fundRaiseType: number | BigNumber,
      _oracleAddress: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isString('_oracleAddress', _oracleAddress);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyOracle(uint8,address)', [_fundRaiseType, _oracleAddress]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _fundRaiseType: number | BigNumber,
      _oracleAddress: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isString('_oracleAddress', _oracleAddress);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('modifyOracle(uint8,address)', [_fundRaiseType, _oracleAddress]);
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
      const abiEncoder = self._lookupAbiEncoder('modifyOracle(uint8,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _oracleAddress: string): string {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isString('_oracleAddress', _oracleAddress);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('modifyOracle(uint8,address)', [
        _fundRaiseType,
        _oracleAddress,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public finalize = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('finalize()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.finalize.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
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
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('finalize()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('finalize()', []);
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
      const abiEncoder = self._lookupAbiEncoder('finalize()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('finalize()', []);
      return abiEncodedTransactionData;
    },
  };
  public changeNonAccreditedLimit = {
    async sendTransactionAsync(
      _investors: string[],
      _nonAccreditedLimit: BigNumber[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_investors', _investors);
      assert.isArray('_nonAccreditedLimit', _nonAccreditedLimit);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('changeNonAccreditedLimit(address[],uint256[])', [
        _investors,
        _nonAccreditedLimit,
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
        self.changeNonAccreditedLimit.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _investors,
          _nonAccreditedLimit,
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
      _nonAccreditedLimit: BigNumber[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_investors', _investors);
      assert.isArray('_nonAccreditedLimit', _nonAccreditedLimit);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('changeNonAccreditedLimit(address[],uint256[])', [
        _investors,
        _nonAccreditedLimit,
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
      _nonAccreditedLimit: BigNumber[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_investors', _investors);
      assert.isArray('_nonAccreditedLimit', _nonAccreditedLimit);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('changeNonAccreditedLimit(address[],uint256[])', [
        _investors,
        _nonAccreditedLimit,
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
      const abiEncoder = self._lookupAbiEncoder('changeNonAccreditedLimit(address[],uint256[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_investors: string[], _nonAccreditedLimit: BigNumber[]): string {
      assert.isArray('_investors', _investors);
      assert.isArray('_nonAccreditedLimit', _nonAccreditedLimit);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeNonAccreditedLimit(address[],uint256[])', [
        _investors,
        _nonAccreditedLimit,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getAccreditedData = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string[], boolean[], BigNumber[]]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getAccreditedData()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getAccreditedData()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string[], boolean[], BigNumber[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAccreditedData()', []);
      return abiEncodedTransactionData;
    },
  };
  public changeAllowBeneficialInvestments = {
    async sendTransactionAsync(
      _allowBeneficialInvestments: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBoolean('_allowBeneficialInvestments', _allowBeneficialInvestments);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('changeAllowBeneficialInvestments(bool)', [
        _allowBeneficialInvestments,
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
        self.changeAllowBeneficialInvestments.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _allowBeneficialInvestments,
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
      _allowBeneficialInvestments: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBoolean('_allowBeneficialInvestments', _allowBeneficialInvestments);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('changeAllowBeneficialInvestments(bool)', [
        _allowBeneficialInvestments,
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
      _allowBeneficialInvestments: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBoolean('_allowBeneficialInvestments', _allowBeneficialInvestments);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('changeAllowBeneficialInvestments(bool)', [
        _allowBeneficialInvestments,
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
      const abiEncoder = self._lookupAbiEncoder('changeAllowBeneficialInvestments(bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_allowBeneficialInvestments: boolean): string {
      assert.isBoolean('_allowBeneficialInvestments', _allowBeneficialInvestments);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeAllowBeneficialInvestments(bool)', [
        _allowBeneficialInvestments,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public buyWithETH = {
    async sendTransactionAsync(
      _beneficiary: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_beneficiary', _beneficiary);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithETH(address)', [_beneficiary]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.buyWithETH.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _beneficiary,
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
      _beneficiary: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_beneficiary', _beneficiary);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithETH(address)', [_beneficiary]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _beneficiary: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      assert.isString('_beneficiary', _beneficiary);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithETH(address)', [_beneficiary]);
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
      const abiEncoder = self._lookupAbiEncoder('buyWithETH(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_beneficiary: string): string {
      assert.isString('_beneficiary', _beneficiary);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('buyWithETH(address)', [_beneficiary]);
      return abiEncodedTransactionData;
    },
  };
  public buyWithPOLY = {
    async sendTransactionAsync(
      _beneficiary: string,
      _investedPOLY: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithPOLY(address,uint256)', [_beneficiary, _investedPOLY]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.buyWithPOLY.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _beneficiary,
          _investedPOLY,
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
      _beneficiary: string,
      _investedPOLY: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithPOLY(address,uint256)', [_beneficiary, _investedPOLY]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _beneficiary: string,
      _investedPOLY: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithPOLY(address,uint256)', [_beneficiary, _investedPOLY]);
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
      const abiEncoder = self._lookupAbiEncoder('buyWithPOLY(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber): string {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('buyWithPOLY(address,uint256)', [
        _beneficiary,
        _investedPOLY,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public buyWithUSD = {
    async sendTransactionAsync(
      _beneficiary: string,
      _investedSC: BigNumber,
      _usdToken: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isString('_usdToken', _usdToken);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithUSD(address,uint256,address)', [
        _beneficiary,
        _investedSC,
        _usdToken,
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
        self.buyWithUSD.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _beneficiary,
          _investedSC,
          _usdToken,
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
      _beneficiary: string,
      _investedSC: BigNumber,
      _usdToken: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isString('_usdToken', _usdToken);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithUSD(address,uint256,address)', [
        _beneficiary,
        _investedSC,
        _usdToken,
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
      _beneficiary: string,
      _investedSC: BigNumber,
      _usdToken: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isString('_usdToken', _usdToken);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithUSD(address,uint256,address)', [
        _beneficiary,
        _investedSC,
        _usdToken,
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
      const abiEncoder = self._lookupAbiEncoder('buyWithUSD(address,uint256,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_beneficiary: string, _investedSC: BigNumber, _usdToken: string): string {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isString('_usdToken', _usdToken);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('buyWithUSD(address,uint256,address)', [
        _beneficiary,
        _investedSC,
        _usdToken,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public buyWithETHRateLimited = {
    async sendTransactionAsync(
      _beneficiary: string,
      _minTokens: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_minTokens', _minTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithETHRateLimited(address,uint256)', [
        _beneficiary,
        _minTokens,
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
        self.buyWithETHRateLimited.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _beneficiary,
          _minTokens,
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
      _beneficiary: string,
      _minTokens: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_minTokens', _minTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithETHRateLimited(address,uint256)', [
        _beneficiary,
        _minTokens,
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
      _beneficiary: string,
      _minTokens: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_minTokens', _minTokens);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithETHRateLimited(address,uint256)', [
        _beneficiary,
        _minTokens,
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
      const abiEncoder = self._lookupAbiEncoder('buyWithETHRateLimited(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_beneficiary: string, _minTokens: BigNumber): string {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_minTokens', _minTokens);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('buyWithETHRateLimited(address,uint256)', [
        _beneficiary,
        _minTokens,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public buyWithPOLYRateLimited = {
    async sendTransactionAsync(
      _beneficiary: string,
      _investedPOLY: BigNumber,
      _minTokens: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      assert.isBigNumber('_minTokens', _minTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithPOLYRateLimited(address,uint256,uint256)', [
        _beneficiary,
        _investedPOLY,
        _minTokens,
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
        self.buyWithPOLYRateLimited.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _beneficiary,
          _investedPOLY,
          _minTokens,
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
      _beneficiary: string,
      _investedPOLY: BigNumber,
      _minTokens: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      assert.isBigNumber('_minTokens', _minTokens);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithPOLYRateLimited(address,uint256,uint256)', [
        _beneficiary,
        _investedPOLY,
        _minTokens,
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
      _beneficiary: string,
      _investedPOLY: BigNumber,
      _minTokens: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      assert.isBigNumber('_minTokens', _minTokens);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithPOLYRateLimited(address,uint256,uint256)', [
        _beneficiary,
        _investedPOLY,
        _minTokens,
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
      const abiEncoder = self._lookupAbiEncoder('buyWithPOLYRateLimited(address,uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_beneficiary: string, _investedPOLY: BigNumber, _minTokens: BigNumber): string {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedPOLY', _investedPOLY);
      assert.isBigNumber('_minTokens', _minTokens);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('buyWithPOLYRateLimited(address,uint256,uint256)', [
        _beneficiary,
        _investedPOLY,
        _minTokens,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public buyWithUSDRateLimited = {
    async sendTransactionAsync(
      _beneficiary: string,
      _investedSC: BigNumber,
      _minTokens: BigNumber,
      _usdToken: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isBigNumber('_minTokens', _minTokens);
      assert.isString('_usdToken', _usdToken);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithUSDRateLimited(address,uint256,uint256,address)', [
        _beneficiary,
        _investedSC,
        _minTokens,
        _usdToken,
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
        self.buyWithUSDRateLimited.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _beneficiary,
          _investedSC,
          _minTokens,
          _usdToken,
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
      _beneficiary: string,
      _investedSC: BigNumber,
      _minTokens: BigNumber,
      _usdToken: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isBigNumber('_minTokens', _minTokens);
      assert.isString('_usdToken', _usdToken);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithUSDRateLimited(address,uint256,uint256,address)', [
        _beneficiary,
        _investedSC,
        _minTokens,
        _usdToken,
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
      _beneficiary: string,
      _investedSC: BigNumber,
      _minTokens: BigNumber,
      _usdToken: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isBigNumber('_minTokens', _minTokens);
      assert.isString('_usdToken', _usdToken);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('buyWithUSDRateLimited(address,uint256,uint256,address)', [
        _beneficiary,
        _investedSC,
        _minTokens,
        _usdToken,
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
      const abiEncoder = self._lookupAbiEncoder('buyWithUSDRateLimited(address,uint256,uint256,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _beneficiary: string,
      _investedSC: BigNumber,
      _minTokens: BigNumber,
      _usdToken: string,
    ): string {
      assert.isString('_beneficiary', _beneficiary);
      assert.isBigNumber('_investedSC', _investedSC);
      assert.isBigNumber('_minTokens', _minTokens);
      assert.isString('_usdToken', _usdToken);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'buyWithUSDRateLimited(address,uint256,uint256,address)',
        [_beneficiary, _investedSC, _minTokens, _usdToken],
      );
      return abiEncodedTransactionData;
    },
  };
  public isOpen = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('isOpen()', []);
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
      const abiEncoder = self._lookupAbiEncoder('isOpen()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('isOpen()', []);
      return abiEncodedTransactionData;
    },
  };
  public capReached = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('capReached()', []);
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
      const abiEncoder = self._lookupAbiEncoder('capReached()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('capReached()', []);
      return abiEncodedTransactionData;
    },
  };
  public getRate = {
    async sendTransactionAsync(
      _fundRaiseType: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getRate(uint8)', [_fundRaiseType]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.getRate.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _fundRaiseType,
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
      _fundRaiseType: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getRate(uint8)', [_fundRaiseType]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _fundRaiseType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getRate(uint8)', [_fundRaiseType]);
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
      const abiEncoder = self._lookupAbiEncoder('getRate(uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getRate(uint8)', [_fundRaiseType]);
      return abiEncodedTransactionData;
    },
  };
  public convertToUSD = {
    async sendTransactionAsync(
      _fundRaiseType: number | BigNumber,
      _amount: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('convertToUSD(uint8,uint256)', [_fundRaiseType, _amount]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.convertToUSD.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _fundRaiseType,
          _amount,
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
      _fundRaiseType: number | BigNumber,
      _amount: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('convertToUSD(uint8,uint256)', [_fundRaiseType, _amount]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _fundRaiseType: number | BigNumber,
      _amount: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('convertToUSD(uint8,uint256)', [_fundRaiseType, _amount]);
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
      const abiEncoder = self._lookupAbiEncoder('convertToUSD(uint8,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _amount: BigNumber): string {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('convertToUSD(uint8,uint256)', [
        _fundRaiseType,
        _amount,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public convertFromUSD = {
    async sendTransactionAsync(
      _fundRaiseType: number | BigNumber,
      _amount: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('convertFromUSD(uint8,uint256)', [_fundRaiseType, _amount]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.convertFromUSD.estimateGasAsync.bind<USDTieredSTOContract, any, Promise<number>>(
          self,
          _fundRaiseType,
          _amount,
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
      _fundRaiseType: number | BigNumber,
      _amount: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('convertFromUSD(uint8,uint256)', [_fundRaiseType, _amount]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _fundRaiseType: number | BigNumber,
      _amount: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('convertFromUSD(uint8,uint256)', [_fundRaiseType, _amount]);
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
      const abiEncoder = self._lookupAbiEncoder('convertFromUSD(uint8,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseType: number | BigNumber, _amount: BigNumber): string {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.isBigNumber('_amount', _amount);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('convertFromUSD(uint8,uint256)', [
        _fundRaiseType,
        _amount,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getTokensSold = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getTokensSold()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getTokensSold()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensSold()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTokensMinted = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getTokensMinted()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getTokensMinted()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensMinted()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTokensSoldFor = {
    async callAsync(
      _fundRaiseType: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getTokensSoldFor(uint8)', [_fundRaiseType]);
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
      const abiEncoder = self._lookupAbiEncoder('getTokensSoldFor(uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_fundRaiseType: number | BigNumber): string {
      assert.isNumberOrBigNumber('_fundRaiseType', _fundRaiseType);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensSoldFor(uint8)', [_fundRaiseType]);
      return abiEncodedTransactionData;
    },
  };
  public getTokensMintedByTier = {
    async callAsync(
      _tier: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber[]> {
      assert.isBigNumber('_tier', _tier);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getTokensMintedByTier(uint256)', [_tier]);
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
      const abiEncoder = self._lookupAbiEncoder('getTokensMintedByTier(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tier: BigNumber): string {
      assert.isBigNumber('_tier', _tier);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensMintedByTier(uint256)', [_tier]);
      return abiEncodedTransactionData;
    },
  };
  public getTokensSoldByTier = {
    async callAsync(_tier: BigNumber, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.isBigNumber('_tier', _tier);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getTokensSoldByTier(uint256)', [_tier]);
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
      const abiEncoder = self._lookupAbiEncoder('getTokensSoldByTier(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tier: BigNumber): string {
      assert.isBigNumber('_tier', _tier);
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensSoldByTier(uint256)', [_tier]);
      return abiEncodedTransactionData;
    },
  };
  public getNumberOfTiers = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getNumberOfTiers()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getNumberOfTiers()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getNumberOfTiers()', []);
      return abiEncodedTransactionData;
    },
  };
  public getUsdTokens = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getUsdTokens()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getUsdTokens()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getUsdTokens()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getPermissions()', []);
      return abiEncodedTransactionData;
    },
  };
  public getSTODetails = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[], BigNumber, BigNumber, BigNumber, boolean[]]
    > {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as USDTieredSTOContract;
      const encodedData = self._strictEncodeArguments('getSTODetails()', []);
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
      const abiEncoder = self._lookupAbiEncoder('getSTODetails()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[], BigNumber, BigNumber, BigNumber, boolean[]]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSTODetails()', []);
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
      const self = (this as any) as USDTieredSTOContract;
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
      const self = (this as any) as USDTieredSTOContract;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInitFunction()', []);
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
  ): Promise<USDTieredSTOContract> {
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
    logUtils.log(`USDTieredSTO successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new USDTieredSTOContract(txReceipt.contractAddress as string, provider, txDefaults);
    contractInstance.constructorArgs = [_securityToken, _polyAddress];
    return contractInstance;
  }

  /**
   * @returns The contract ABI
   */
  public static ABI(): ContractAbi {
    const abi = [
      {
        constant: true,
        inputs: [
          {
            name: 'index_0',
            type: 'uint256',
          },
        ],
        name: 'tiers',
        outputs: [
          {
            name: 'rate',
            type: 'uint256',
          },
          {
            name: 'rateDiscountPoly',
            type: 'uint256',
          },
          {
            name: 'tokenTotal',
            type: 'uint256',
          },
          {
            name: 'tokensDiscountPoly',
            type: 'uint256',
          },
          {
            name: 'mintedTotal',
            type: 'uint256',
          },
          {
            name: 'mintedDiscountPoly',
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
        name: 'allowBeneficialInvestments',
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
        name: 'endTime',
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
        constant: true,
        inputs: [],
        name: 'treasuryWallet',
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
        name: 'nonAccreditedLimitUSD',
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
        name: 'totalTokensSold',
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
        name: 'finalAmountReturned',
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
        constant: true,
        inputs: [
          {
            name: 'index_0',
            type: 'address',
          },
        ],
        name: 'stableCoinsRaised',
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
        name: 'startTime',
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
        name: 'pause',
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
          {
            name: 'index_1',
            type: 'uint8',
          },
        ],
        name: 'investorInvested',
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
        name: 'isFinalized',
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
            name: '_fundRaiseType',
            type: 'uint8',
          },
        ],
        name: 'getRaised',
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
        name: 'pausedTime',
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
        inputs: [
          {
            name: 'index_0',
            type: 'uint8',
          },
        ],
        name: 'fundsRaised',
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
            name: 'index_0',
            type: 'address',
          },
        ],
        name: 'investorInvestedUSD',
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
            name: 'index_0',
            type: 'uint8',
          },
        ],
        name: 'fundRaiseTypes',
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
        name: 'currentTier',
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
        name: 'investorCount',
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
            name: 'index_0',
            type: 'address',
          },
        ],
        name: 'nonAccreditedLimitUSDOverride',
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
        name: 'minimumInvestmentUSD',
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
        constant: true,
        inputs: [],
        name: 'fundsRaisedUSD',
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
        inputs: [],
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'fallback',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_allowed',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'SetAllowBeneficialInvestments',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_investor',
            type: 'address',
            indexed: false,
          },
          {
            name: '_limit',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'SetNonAccreditedLimit',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_purchaser',
            type: 'address',
            indexed: true,
          },
          {
            name: '_beneficiary',
            type: 'address',
            indexed: true,
          },
          {
            name: '_tokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_usdAmount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_tierPrice',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_tier',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'TokenPurchase',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_purchaser',
            type: 'address',
            indexed: true,
          },
          {
            name: '_beneficiary',
            type: 'address',
            indexed: true,
          },
          {
            name: '_usdAmount',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_fundRaiseType',
            type: 'uint8',
            indexed: false,
          },
          {
            name: '_receivedValue',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_spentValue',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_rate',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'FundsReceived',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
            indexed: true,
          },
          {
            name: '_wallet',
            type: 'address',
            indexed: true,
          },
          {
            name: '_tokens',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_latestTier',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ReserveTokenMint',
        outputs: [],
        type: 'event',
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
            name: '_usdTokens',
            type: 'address[]',
            indexed: false,
          },
        ],
        name: 'SetAddresses',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_nonAccreditedLimitUSD',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_minimumInvestmentUSD',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'SetLimits',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_endTime',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'SetTimes',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_ratePerTier',
            type: 'uint256[]',
            indexed: false,
          },
          {
            name: '_ratePerTierDiscountPoly',
            type: 'uint256[]',
            indexed: false,
          },
          {
            name: '_tokensPerTierTotal',
            type: 'uint256[]',
            indexed: false,
          },
          {
            name: '_tokensPerTierDiscountPoly',
            type: 'uint256[]',
            indexed: false,
          },
        ],
        name: 'SetTiers',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldWallet',
            type: 'address',
            indexed: false,
          },
          {
            name: '_newWallet',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'SetTreasuryWallet',
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
        anonymous: false,
        inputs: [
          {
            name: '_fundRaiseTypes',
            type: 'uint8[]',
            indexed: false,
          },
        ],
        name: 'SetFundRaiseTypes',
        outputs: [],
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
          {
            name: '_ratePerTier',
            type: 'uint256[]',
          },
          {
            name: '_ratePerTierDiscountPoly',
            type: 'uint256[]',
          },
          {
            name: '_tokensPerTierTotal',
            type: 'uint256[]',
          },
          {
            name: '_tokensPerTierDiscountPoly',
            type: 'uint256[]',
          },
          {
            name: '_nonAccreditedLimitUSD',
            type: 'uint256',
          },
          {
            name: '_minimumInvestmentUSD',
            type: 'uint256',
          },
          {
            name: '_fundRaiseTypes',
            type: 'uint8[]',
          },
          {
            name: '_wallet',
            type: 'address',
          },
          {
            name: '_treasuryWallet',
            type: 'address',
          },
          {
            name: '_usdTokens',
            type: 'address[]',
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
            name: '_fundRaiseTypes',
            type: 'uint8[]',
          },
        ],
        name: 'modifyFunding',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_nonAccreditedLimitUSD',
            type: 'uint256',
          },
          {
            name: '_minimumInvestmentUSD',
            type: 'uint256',
          },
        ],
        name: 'modifyLimits',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_ratePerTier',
            type: 'uint256[]',
          },
          {
            name: '_ratePerTierDiscountPoly',
            type: 'uint256[]',
          },
          {
            name: '_tokensPerTierTotal',
            type: 'uint256[]',
          },
          {
            name: '_tokensPerTierDiscountPoly',
            type: 'uint256[]',
          },
        ],
        name: 'modifyTiers',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_endTime',
            type: 'uint256',
          },
        ],
        name: 'modifyTimes',
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
          {
            name: '_treasuryWallet',
            type: 'address',
          },
          {
            name: '_usdTokens',
            type: 'address[]',
          },
        ],
        name: 'modifyAddresses',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_fundRaiseType',
            type: 'uint8',
          },
          {
            name: '_oracleAddress',
            type: 'address',
          },
        ],
        name: 'modifyOracle',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'finalize',
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
            name: '_nonAccreditedLimit',
            type: 'uint256[]',
          },
        ],
        name: 'changeNonAccreditedLimit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getAccreditedData',
        outputs: [
          {
            name: 'investors',
            type: 'address[]',
          },
          {
            name: 'accredited',
            type: 'bool[]',
          },
          {
            name: 'overrides',
            type: 'uint256[]',
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
            name: '_allowBeneficialInvestments',
            type: 'bool',
          },
        ],
        name: 'changeAllowBeneficialInvestments',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_beneficiary',
            type: 'address',
          },
        ],
        name: 'buyWithETH',
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
        ],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_beneficiary',
            type: 'address',
          },
          {
            name: '_investedPOLY',
            type: 'uint256',
          },
        ],
        name: 'buyWithPOLY',
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
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_beneficiary',
            type: 'address',
          },
          {
            name: '_investedSC',
            type: 'uint256',
          },
          {
            name: '_usdToken',
            type: 'address',
          },
        ],
        name: 'buyWithUSD',
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
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_beneficiary',
            type: 'address',
          },
          {
            name: '_minTokens',
            type: 'uint256',
          },
        ],
        name: 'buyWithETHRateLimited',
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
        ],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_beneficiary',
            type: 'address',
          },
          {
            name: '_investedPOLY',
            type: 'uint256',
          },
          {
            name: '_minTokens',
            type: 'uint256',
          },
        ],
        name: 'buyWithPOLYRateLimited',
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
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_beneficiary',
            type: 'address',
          },
          {
            name: '_investedSC',
            type: 'uint256',
          },
          {
            name: '_minTokens',
            type: 'uint256',
          },
          {
            name: '_usdToken',
            type: 'address',
          },
        ],
        name: 'buyWithUSDRateLimited',
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
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'isOpen',
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
        name: 'capReached',
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
        inputs: [
          {
            name: '_fundRaiseType',
            type: 'uint8',
          },
        ],
        name: 'getRate',
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
        constant: false,
        inputs: [
          {
            name: '_fundRaiseType',
            type: 'uint8',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'convertToUSD',
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
        constant: false,
        inputs: [
          {
            name: '_fundRaiseType',
            type: 'uint8',
          },
          {
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'convertFromUSD',
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
        constant: true,
        inputs: [],
        name: 'getTokensSold',
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
        name: 'getTokensMinted',
        outputs: [
          {
            name: 'tokensMinted',
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
            name: '_fundRaiseType',
            type: 'uint8',
          },
        ],
        name: 'getTokensSoldFor',
        outputs: [
          {
            name: 'tokensSold',
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
            name: '_tier',
            type: 'uint256',
          },
        ],
        name: 'getTokensMintedByTier',
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
        inputs: [
          {
            name: '_tier',
            type: 'uint256',
          },
        ],
        name: 'getTokensSoldByTier',
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
        name: 'getNumberOfTiers',
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
        name: 'getUsdTokens',
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
      {
        constant: true,
        inputs: [],
        name: 'getSTODetails',
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
            type: 'uint256[]',
          },
          {
            name: '',
            type: 'uint256[]',
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
            type: 'bool[]',
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
    super('USDTieredSTO', USDTieredSTOContract.ABI(), address, supportedProvider, txDefaults);
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
