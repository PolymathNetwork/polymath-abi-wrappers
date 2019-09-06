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

export type SecurityTokenEventArgs_3_1_0 =
  | SecurityTokenModuleAddedEventArgs_3_1_0
  | SecurityTokenModuleUpgradedEventArgs_3_1_0
  | SecurityTokenUpdateTokenDetailsEventArgs_3_1_0
  | SecurityTokenUpdateTokenNameEventArgs_3_1_0
  | SecurityTokenGranularityChangedEventArgs_3_1_0
  | SecurityTokenFreezeIssuanceEventArgs_3_1_0
  | SecurityTokenFreezeTransfersEventArgs_3_1_0
  | SecurityTokenCheckpointCreatedEventArgs_3_1_0
  | SecurityTokenSetControllerEventArgs_3_1_0
  | SecurityTokenTreasuryWalletChangedEventArgs_3_1_0
  | SecurityTokenDisableControllerEventArgs_3_1_0
  | SecurityTokenOwnershipTransferredEventArgs_3_1_0
  | SecurityTokenTokenUpgradedEventArgs_3_1_0
  | SecurityTokenModuleArchivedEventArgs_3_1_0
  | SecurityTokenModuleUnarchivedEventArgs_3_1_0
  | SecurityTokenModuleRemovedEventArgs_3_1_0
  | SecurityTokenModuleBudgetChangedEventArgs_3_1_0
  | SecurityTokenTransferByPartitionEventArgs_3_1_0
  | SecurityTokenAuthorizedOperatorEventArgs_3_1_0
  | SecurityTokenRevokedOperatorEventArgs_3_1_0
  | SecurityTokenAuthorizedOperatorByPartitionEventArgs_3_1_0
  | SecurityTokenRevokedOperatorByPartitionEventArgs_3_1_0
  | SecurityTokenIssuedByPartitionEventArgs_3_1_0
  | SecurityTokenRedeemedByPartitionEventArgs_3_1_0
  | SecurityTokenControllerTransferEventArgs_3_1_0
  | SecurityTokenControllerRedemptionEventArgs_3_1_0
  | SecurityTokenDocumentRemovedEventArgs_3_1_0
  | SecurityTokenDocumentUpdatedEventArgs_3_1_0
  | SecurityTokenIssuedEventArgs_3_1_0
  | SecurityTokenRedeemedEventArgs_3_1_0
  | SecurityTokenTransferEventArgs_3_1_0
  | SecurityTokenApprovalEventArgs_3_1_0;

export enum SecurityTokenEvents_3_1_0 {
  ModuleAdded = 'ModuleAdded',
  ModuleUpgraded = 'ModuleUpgraded',
  UpdateTokenDetails = 'UpdateTokenDetails',
  UpdateTokenName = 'UpdateTokenName',
  GranularityChanged = 'GranularityChanged',
  FreezeIssuance = 'FreezeIssuance',
  FreezeTransfers = 'FreezeTransfers',
  CheckpointCreated = 'CheckpointCreated',
  SetController = 'SetController',
  TreasuryWalletChanged = 'TreasuryWalletChanged',
  DisableController = 'DisableController',
  OwnershipTransferred = 'OwnershipTransferred',
  TokenUpgraded = 'TokenUpgraded',
  ModuleArchived = 'ModuleArchived',
  ModuleUnarchived = 'ModuleUnarchived',
  ModuleRemoved = 'ModuleRemoved',
  ModuleBudgetChanged = 'ModuleBudgetChanged',
  TransferByPartition = 'TransferByPartition',
  AuthorizedOperator = 'AuthorizedOperator',
  RevokedOperator = 'RevokedOperator',
  AuthorizedOperatorByPartition = 'AuthorizedOperatorByPartition',
  RevokedOperatorByPartition = 'RevokedOperatorByPartition',
  IssuedByPartition = 'IssuedByPartition',
  RedeemedByPartition = 'RedeemedByPartition',
  ControllerTransfer = 'ControllerTransfer',
  ControllerRedemption = 'ControllerRedemption',
  DocumentRemoved = 'DocumentRemoved',
  DocumentUpdated = 'DocumentUpdated',
  Issued = 'Issued',
  Redeemed = 'Redeemed',
  Transfer = 'Transfer',
  Approval = 'Approval',
}

export interface SecurityTokenModuleAddedEventArgs_3_1_0 extends DecodedLogArgs {
  _types: BigNumber[];
  _name: string;
  _moduleFactory: string;
  _module: string;
  _moduleCost: BigNumber;
  _budget: BigNumber;
  _label: string;
  _archived: boolean;
}
export interface SecurityTokenModuleUpgradedEventArgs_3_1_0 extends DecodedLogArgs {
  _types: BigNumber[];
  _module: string;
}
export interface SecurityTokenUpdateTokenDetailsEventArgs_3_1_0 extends DecodedLogArgs {
  _oldDetails: string;
  _newDetails: string;
}
export interface SecurityTokenUpdateTokenNameEventArgs_3_1_0 extends DecodedLogArgs {
  _oldName: string;
  _newName: string;
}
export interface SecurityTokenGranularityChangedEventArgs_3_1_0 extends DecodedLogArgs {
  _oldGranularity: BigNumber;
  _newGranularity: BigNumber;
}
export interface SecurityTokenFreezeIssuanceEventArgs_3_1_0 extends DecodedLogArgs {}
export interface SecurityTokenFreezeTransfersEventArgs_3_1_0 extends DecodedLogArgs {
  _status: boolean;
}
export interface SecurityTokenCheckpointCreatedEventArgs_3_1_0 extends DecodedLogArgs {
  _checkpointId: BigNumber;
  _investorLength: BigNumber;
}
export interface SecurityTokenSetControllerEventArgs_3_1_0 extends DecodedLogArgs {
  _oldController: string;
  _newController: string;
}
export interface SecurityTokenTreasuryWalletChangedEventArgs_3_1_0 extends DecodedLogArgs {
  _oldTreasuryWallet: string;
  _newTreasuryWallet: string;
}
export interface SecurityTokenDisableControllerEventArgs_3_1_0 extends DecodedLogArgs {}
export interface SecurityTokenOwnershipTransferredEventArgs_3_1_0 extends DecodedLogArgs {
  previousOwner: string;
  newOwner: string;
}
export interface SecurityTokenTokenUpgradedEventArgs_3_1_0 extends DecodedLogArgs {
  _major: BigNumber;
  _minor: BigNumber;
  _patch: BigNumber;
}
export interface SecurityTokenModuleArchivedEventArgs_3_1_0 extends DecodedLogArgs {
  _types: BigNumber[];
  _module: string;
}
export interface SecurityTokenModuleUnarchivedEventArgs_3_1_0 extends DecodedLogArgs {
  _types: BigNumber[];
  _module: string;
}
export interface SecurityTokenModuleRemovedEventArgs_3_1_0 extends DecodedLogArgs {
  _types: BigNumber[];
  _module: string;
}
export interface SecurityTokenModuleBudgetChangedEventArgs_3_1_0 extends DecodedLogArgs {
  _moduleTypes: BigNumber[];
  _module: string;
  _oldBudget: BigNumber;
  _budget: BigNumber;
}
export interface SecurityTokenTransferByPartitionEventArgs_3_1_0 extends DecodedLogArgs {
  _fromPartition: string;
  _operator: string;
  _from: string;
  _to: string;
  _value: BigNumber;
  _data: string;
  _operatorData: string;
}
export interface SecurityTokenAuthorizedOperatorEventArgs_3_1_0 extends DecodedLogArgs {
  operator: string;
  tokenHolder: string;
}
export interface SecurityTokenRevokedOperatorEventArgs_3_1_0 extends DecodedLogArgs {
  operator: string;
  tokenHolder: string;
}
export interface SecurityTokenAuthorizedOperatorByPartitionEventArgs_3_1_0 extends DecodedLogArgs {
  partition: string;
  operator: string;
  tokenHolder: string;
}
export interface SecurityTokenRevokedOperatorByPartitionEventArgs_3_1_0 extends DecodedLogArgs {
  partition: string;
  operator: string;
  tokenHolder: string;
}
export interface SecurityTokenIssuedByPartitionEventArgs_3_1_0 extends DecodedLogArgs {
  partition: string;
  to: string;
  value: BigNumber;
  data: string;
}
export interface SecurityTokenRedeemedByPartitionEventArgs_3_1_0 extends DecodedLogArgs {
  partition: string;
  operator: string;
  from: string;
  value: BigNumber;
  data: string;
  operatorData: string;
}
export interface SecurityTokenControllerTransferEventArgs_3_1_0 extends DecodedLogArgs {
  _controller: string;
  _from: string;
  _to: string;
  _value: BigNumber;
  _data: string;
  _operatorData: string;
}
export interface SecurityTokenControllerRedemptionEventArgs_3_1_0 extends DecodedLogArgs {
  _controller: string;
  _tokenHolder: string;
  _value: BigNumber;
  _data: string;
  _operatorData: string;
}
export interface SecurityTokenDocumentRemovedEventArgs_3_1_0 extends DecodedLogArgs {
  _name: string;
  _uri: string;
  _documentHash: string;
}
export interface SecurityTokenDocumentUpdatedEventArgs_3_1_0 extends DecodedLogArgs {
  _name: string;
  _uri: string;
  _documentHash: string;
}
export interface SecurityTokenIssuedEventArgs_3_1_0 extends DecodedLogArgs {
  _operator: string;
  _to: string;
  _value: BigNumber;
  _data: string;
}
export interface SecurityTokenRedeemedEventArgs_3_1_0 extends DecodedLogArgs {
  _operator: string;
  _from: string;
  _value: BigNumber;
  _data: string;
}
export interface SecurityTokenTransferEventArgs_3_1_0 extends DecodedLogArgs {
  from: string;
  to: string;
  value: BigNumber;
}
export interface SecurityTokenApprovalEventArgs_3_1_0 extends DecodedLogArgs {
  owner: string;
  spender: string;
  value: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class SecurityTokenContract_3_1_0 extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public name = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('name()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('name()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('name()', []);
      return abiEncodedTransactionData;
    },
  };
  public approve = {
    async sendTransactionAsync(
      spender: string,
      value: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('spender', spender);
      assert.isBigNumber('value', value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.approve.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          spender,
          value,
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
      spender: string,
      value: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('spender', spender);
      assert.isBigNumber('value', value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      spender: string,
      value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('spender', spender);
      assert.isBigNumber('value', value);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('approve(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(spender: string, value: BigNumber): string {
      assert.isString('spender', spender);
      assert.isBigNumber('value', value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
      return abiEncodedTransactionData;
    },
  };
  public initialized = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('initialized()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('initialized()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('initialized()', []);
      return abiEncodedTransactionData;
    },
  };
  public totalSupply = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('totalSupply()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('totalSupply()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('totalSupply()', []);
      return abiEncodedTransactionData;
    },
  };
  public holderCount = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('holderCount()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('holderCount()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('holderCount()', []);
      return abiEncodedTransactionData;
    },
  };
  public getterDelegate = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getterDelegate()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getterDelegate()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getterDelegate()', []);
      return abiEncodedTransactionData;
    },
  };
  public decimals = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('decimals()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('decimals()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('decimals()', []);
      return abiEncodedTransactionData;
    },
  };
  public increaseAllowance = {
    async sendTransactionAsync(
      spender: string,
      addedValue: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('spender', spender);
      assert.isBigNumber('addedValue', addedValue);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender, addedValue]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.increaseAllowance.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          spender,
          addedValue,
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
      spender: string,
      addedValue: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('spender', spender);
      assert.isBigNumber('addedValue', addedValue);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender, addedValue]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      spender: string,
      addedValue: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('spender', spender);
      assert.isBigNumber('addedValue', addedValue);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender, addedValue]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('increaseAllowance(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(spender: string, addedValue: BigNumber): string {
      assert.isString('spender', spender);
      assert.isBigNumber('addedValue', addedValue);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [
        spender,
        addedValue,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public currentCheckpointId = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('currentCheckpointId()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('currentCheckpointId()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('currentCheckpointId()', []);
      return abiEncodedTransactionData;
    },
  };
  public granularity = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('granularity()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('granularity()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('granularity()', []);
      return abiEncodedTransactionData;
    },
  };
  public dataStore = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('dataStore()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('dataStore()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('dataStore()', []);
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public balanceOf = {
    async callAsync(owner: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.isString('owner', owner);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('balanceOf(address)', [owner]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('balanceOf(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(owner: string): string {
      assert.isString('owner', owner);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('balanceOf(address)', [owner]);
      return abiEncodedTransactionData;
    },
  };
  public polymathRegistry = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('polymathRegistry()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('polymathRegistry()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('polymathRegistry()', []);
      return abiEncodedTransactionData;
    },
  };
  public controllerDisabled = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerDisabled()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('controllerDisabled()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('controllerDisabled()', []);
      return abiEncodedTransactionData;
    },
  };
  public symbol = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('symbol()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('symbol()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('symbol()', []);
      return abiEncodedTransactionData;
    },
  };
  public decreaseAllowance = {
    async sendTransactionAsync(
      spender: string,
      subtractedValue: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('spender', spender);
      assert.isBigNumber('subtractedValue', subtractedValue);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender, subtractedValue]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.decreaseAllowance.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          spender,
          subtractedValue,
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
      spender: string,
      subtractedValue: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('spender', spender);
      assert.isBigNumber('subtractedValue', subtractedValue);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender, subtractedValue]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      spender: string,
      subtractedValue: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('spender', spender);
      assert.isBigNumber('subtractedValue', subtractedValue);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender, subtractedValue]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('decreaseAllowance(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(spender: string, subtractedValue: BigNumber): string {
      assert.isString('spender', spender);
      assert.isBigNumber('subtractedValue', subtractedValue);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [
        spender,
        subtractedValue,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public moduleRegistry = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('moduleRegistry()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('moduleRegistry()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('moduleRegistry()', []);
      return abiEncodedTransactionData;
    },
  };
  public securityTokenRegistry = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('securityTokenRegistry()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('securityTokenRegistry()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('securityTokenRegistry()', []);
      return abiEncodedTransactionData;
    },
  };
  public tokenDetails = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('tokenDetails()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('tokenDetails()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('tokenDetails()', []);
      return abiEncodedTransactionData;
    },
  };
  public allowance = {
    async callAsync(
      owner: string,
      spender: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('owner', owner);
      assert.isString('spender', spender);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('allowance(address,address)', [owner, spender]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('allowance(address,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(owner: string, spender: string): string {
      assert.isString('owner', owner);
      assert.isString('spender', spender);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('allowance(address,address)', [owner, spender]);
      return abiEncodedTransactionData;
    },
  };
  public transfersFrozen = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transfersFrozen()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('transfersFrozen()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transfersFrozen()', []);
      return abiEncodedTransactionData;
    },
  };
  public tokenFactory = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('tokenFactory()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('tokenFactory()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('tokenFactory()', []);
      return abiEncodedTransactionData;
    },
  };
  public controller = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controller()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('controller()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('controller()', []);
      return abiEncodedTransactionData;
    },
  };
  public initialize = {
    async sendTransactionAsync(
      _getterDelegate: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_getterDelegate', _getterDelegate);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('initialize(address)', [_getterDelegate]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.initialize.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _getterDelegate,
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
      _getterDelegate: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_getterDelegate', _getterDelegate);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('initialize(address)', [_getterDelegate]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _getterDelegate: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_getterDelegate', _getterDelegate);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('initialize(address)', [_getterDelegate]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('initialize(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_getterDelegate: string): string {
      assert.isString('_getterDelegate', _getterDelegate);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('initialize(address)', [_getterDelegate]);
      return abiEncodedTransactionData;
    },
  };
  public isModule = {
    async callAsync(
      _module: string,
      _type: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_module', _module);
      assert.isNumberOrBigNumber('_type', _type);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('isModule(address,uint8)', [_module, _type]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('isModule(address,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_module: string, _type: number | BigNumber): string {
      assert.isString('_module', _module);
      assert.isNumberOrBigNumber('_type', _type);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isModule(address,uint8)', [_module, _type]);
      return abiEncodedTransactionData;
    },
  };
  public addModuleWithLabel = {
    async sendTransactionAsync(
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _label: string,
      _archived: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isString('_label', _label);
      assert.isBoolean('_archived', _archived);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'addModuleWithLabel(address,bytes,uint256,uint256,bytes32,bool)',
        [_moduleFactory, _data, _maxCost, _budget, _label, _archived],
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
        self.addModuleWithLabel.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _moduleFactory,
          _data,
          _maxCost,
          _budget,
          _label,
          _archived,
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
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _label: string,
      _archived: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isString('_label', _label);
      assert.isBoolean('_archived', _archived);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'addModuleWithLabel(address,bytes,uint256,uint256,bytes32,bool)',
        [_moduleFactory, _data, _maxCost, _budget, _label, _archived],
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
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _label: string,
      _archived: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isString('_label', _label);
      assert.isBoolean('_archived', _archived);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'addModuleWithLabel(address,bytes,uint256,uint256,bytes32,bool)',
        [_moduleFactory, _data, _maxCost, _budget, _label, _archived],
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
      const abiEncoder = self._lookupAbiEncoder('addModuleWithLabel(address,bytes,uint256,uint256,bytes32,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _label: string,
      _archived: boolean,
    ): string {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isString('_label', _label);
      assert.isBoolean('_archived', _archived);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'addModuleWithLabel(address,bytes,uint256,uint256,bytes32,bool)',
        [_moduleFactory, _data, _maxCost, _budget, _label, _archived],
      );
      return abiEncodedTransactionData;
    },
  };
  public addModule = {
    async sendTransactionAsync(
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _archived: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isBoolean('_archived', _archived);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('addModule(address,bytes,uint256,uint256,bool)', [
        _moduleFactory,
        _data,
        _maxCost,
        _budget,
        _archived,
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
        self.addModule.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _moduleFactory,
          _data,
          _maxCost,
          _budget,
          _archived,
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
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _archived: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isBoolean('_archived', _archived);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('addModule(address,bytes,uint256,uint256,bool)', [
        _moduleFactory,
        _data,
        _maxCost,
        _budget,
        _archived,
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
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _archived: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isBoolean('_archived', _archived);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('addModule(address,bytes,uint256,uint256,bool)', [
        _moduleFactory,
        _data,
        _maxCost,
        _budget,
        _archived,
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
      const abiEncoder = self._lookupAbiEncoder('addModule(address,bytes,uint256,uint256,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _moduleFactory: string,
      _data: string,
      _maxCost: BigNumber,
      _budget: BigNumber,
      _archived: boolean,
    ): string {
      assert.isString('_moduleFactory', _moduleFactory);
      assert.isString('_data', _data);
      assert.isBigNumber('_maxCost', _maxCost);
      assert.isBigNumber('_budget', _budget);
      assert.isBoolean('_archived', _archived);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('addModule(address,bytes,uint256,uint256,bool)', [
        _moduleFactory,
        _data,
        _maxCost,
        _budget,
        _archived,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public archiveModule = {
    async sendTransactionAsync(
      _module: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('archiveModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.archiveModule.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _module,
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
    async estimateGasAsync(_module: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('archiveModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_module: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_module', _module);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('archiveModule(address)', [_module]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('archiveModule(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_module: string): string {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('archiveModule(address)', [_module]);
      return abiEncodedTransactionData;
    },
  };
  public upgradeModule = {
    async sendTransactionAsync(
      _module: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('upgradeModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.upgradeModule.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _module,
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
    async estimateGasAsync(_module: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('upgradeModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_module: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_module', _module);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('upgradeModule(address)', [_module]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('upgradeModule(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_module: string): string {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('upgradeModule(address)', [_module]);
      return abiEncodedTransactionData;
    },
  };
  public upgradeToken = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('upgradeToken()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.upgradeToken.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('upgradeToken()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('upgradeToken()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('upgradeToken()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('upgradeToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public unarchiveModule = {
    async sendTransactionAsync(
      _module: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('unarchiveModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.unarchiveModule.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _module,
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
    async estimateGasAsync(_module: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('unarchiveModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_module: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_module', _module);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('unarchiveModule(address)', [_module]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('unarchiveModule(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_module: string): string {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('unarchiveModule(address)', [_module]);
      return abiEncodedTransactionData;
    },
  };
  public removeModule = {
    async sendTransactionAsync(
      _module: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('removeModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.removeModule.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _module,
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
    async estimateGasAsync(_module: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('removeModule(address)', [_module]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_module: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_module', _module);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('removeModule(address)', [_module]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('removeModule(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_module: string): string {
      assert.isString('_module', _module);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeModule(address)', [_module]);
      return abiEncodedTransactionData;
    },
  };
  public withdrawERC20 = {
    async sendTransactionAsync(
      _tokenContract: string,
      _value: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_tokenContract', _tokenContract);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('withdrawERC20(address,uint256)', [_tokenContract, _value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.withdrawERC20.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _tokenContract,
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
      _tokenContract: string,
      _value: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_tokenContract', _tokenContract);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('withdrawERC20(address,uint256)', [_tokenContract, _value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_tokenContract', _tokenContract);
      assert.isBigNumber('_value', _value);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('withdrawERC20(address,uint256)', [_tokenContract, _value]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('withdrawERC20(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tokenContract: string, _value: BigNumber): string {
      assert.isString('_tokenContract', _tokenContract);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('withdrawERC20(address,uint256)', [
        _tokenContract,
        _value,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeModuleBudget = {
    async sendTransactionAsync(
      _module: string,
      _change: BigNumber,
      _increase: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_module', _module);
      assert.isBigNumber('_change', _change);
      assert.isBoolean('_increase', _increase);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeModuleBudget(address,uint256,bool)', [
        _module,
        _change,
        _increase,
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
        self.changeModuleBudget.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _module,
          _change,
          _increase,
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
      _module: string,
      _change: BigNumber,
      _increase: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_module', _module);
      assert.isBigNumber('_change', _change);
      assert.isBoolean('_increase', _increase);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeModuleBudget(address,uint256,bool)', [
        _module,
        _change,
        _increase,
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
      _module: string,
      _change: BigNumber,
      _increase: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_module', _module);
      assert.isBigNumber('_change', _change);
      assert.isBoolean('_increase', _increase);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeModuleBudget(address,uint256,bool)', [
        _module,
        _change,
        _increase,
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
      const abiEncoder = self._lookupAbiEncoder('changeModuleBudget(address,uint256,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_module: string, _change: BigNumber, _increase: boolean): string {
      assert.isString('_module', _module);
      assert.isBigNumber('_change', _change);
      assert.isBoolean('_increase', _increase);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeModuleBudget(address,uint256,bool)', [
        _module,
        _change,
        _increase,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public updateTokenDetails = {
    async sendTransactionAsync(
      _newTokenDetails: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_newTokenDetails', _newTokenDetails);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('updateTokenDetails(string)', [_newTokenDetails]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.updateTokenDetails.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _newTokenDetails,
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
      _newTokenDetails: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_newTokenDetails', _newTokenDetails);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('updateTokenDetails(string)', [_newTokenDetails]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _newTokenDetails: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_newTokenDetails', _newTokenDetails);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('updateTokenDetails(string)', [_newTokenDetails]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('updateTokenDetails(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_newTokenDetails: string): string {
      assert.isString('_newTokenDetails', _newTokenDetails);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('updateTokenDetails(string)', [_newTokenDetails]);
      return abiEncodedTransactionData;
    },
  };
  public changeGranularity = {
    async sendTransactionAsync(
      _granularity: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_granularity', _granularity);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeGranularity(uint256)', [_granularity]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.changeGranularity.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _granularity,
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
      _granularity: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_granularity', _granularity);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeGranularity(uint256)', [_granularity]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _granularity: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_granularity', _granularity);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeGranularity(uint256)', [_granularity]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeGranularity(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_granularity: BigNumber): string {
      assert.isBigNumber('_granularity', _granularity);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeGranularity(uint256)', [_granularity]);
      return abiEncodedTransactionData;
    },
  };
  public changeDataStore = {
    async sendTransactionAsync(
      _dataStore: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_dataStore', _dataStore);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeDataStore(address)', [_dataStore]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.changeDataStore.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _dataStore,
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
    async estimateGasAsync(_dataStore: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_dataStore', _dataStore);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeDataStore(address)', [_dataStore]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_dataStore: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_dataStore', _dataStore);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeDataStore(address)', [_dataStore]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeDataStore(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_dataStore: string): string {
      assert.isString('_dataStore', _dataStore);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeDataStore(address)', [_dataStore]);
      return abiEncodedTransactionData;
    },
  };
  public changeName = {
    async sendTransactionAsync(
      _name: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeName(string)', [_name]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.changeName.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
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
    async estimateGasAsync(_name: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_name', _name);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeName(string)', [_name]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_name: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_name', _name);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeName(string)', [_name]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeName(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_name: string): string {
      assert.isString('_name', _name);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeName(string)', [_name]);
      return abiEncodedTransactionData;
    },
  };
  public changeTreasuryWallet = {
    async sendTransactionAsync(
      _wallet: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeTreasuryWallet(address)', [_wallet]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.changeTreasuryWallet.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeTreasuryWallet(address)', [_wallet]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeTreasuryWallet(address)', [_wallet]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeTreasuryWallet(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_wallet: string): string {
      assert.isString('_wallet', _wallet);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeTreasuryWallet(address)', [_wallet]);
      return abiEncodedTransactionData;
    },
  };
  public freezeTransfers = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('freezeTransfers()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.freezeTransfers.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('freezeTransfers()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('freezeTransfers()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('freezeTransfers()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('freezeTransfers()', []);
      return abiEncodedTransactionData;
    },
  };
  public unfreezeTransfers = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('unfreezeTransfers()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.unfreezeTransfers.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('unfreezeTransfers()', []);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('unfreezeTransfers()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('unfreezeTransfers()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('unfreezeTransfers()', []);
      return abiEncodedTransactionData;
    },
  };
  public transfer = {
    async sendTransactionAsync(
      _to: string,
      _value: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [_to, _value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.transfer.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _to,
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
      _to: string,
      _value: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [_to, _value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _to: string,
      _value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [_to, _value]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('transfer(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_to: string, _value: BigNumber): string {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transfer(address,uint256)', [_to, _value]);
      return abiEncodedTransactionData;
    },
  };
  public transferWithData = {
    async sendTransactionAsync(
      _to: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferWithData(address,uint256,bytes)', [_to, _value, _data]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.transferWithData.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _to,
          _value,
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
      _to: string,
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferWithData(address,uint256,bytes)', [_to, _value, _data]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _to: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferWithData(address,uint256,bytes)', [_to, _value, _data]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('transferWithData(address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_to: string, _value: BigNumber, _data: string): string {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferWithData(address,uint256,bytes)', [
        _to,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public transferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _value: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from, _to, _value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.transferFrom.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _from,
          _to,
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
      _from: string,
      _to: string,
      _value: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from, _to, _value]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [_from, _to, _value]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('transferFrom(address,address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [
        _from,
        _to,
        _value,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public transferFromWithData = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferFromWithData(address,address,uint256,bytes)', [
        _from,
        _to,
        _value,
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
        self.transferFromWithData.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _from,
          _to,
          _value,
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
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferFromWithData(address,address,uint256,bytes)', [
        _from,
        _to,
        _value,
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
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferFromWithData(address,address,uint256,bytes)', [
        _from,
        _to,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('transferFromWithData(address,address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'transferFromWithData(address,address,uint256,bytes)',
        [_from, _to, _value, _data],
      );
      return abiEncodedTransactionData;
    },
  };
  public balanceOfByPartition = {
    async callAsync(
      _partition: string,
      _tokenHolder: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('balanceOfByPartition(bytes32,address)', [
        _partition,
        _tokenHolder,
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
      const abiEncoder = self._lookupAbiEncoder('balanceOfByPartition(bytes32,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _tokenHolder: string): string {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('balanceOfByPartition(bytes32,address)', [
        _partition,
        _tokenHolder,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public transferByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _to,
        _value,
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
        self.transferByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _to,
          _value,
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
      _partition: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _to,
        _value,
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
      _partition: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string> {
      assert.isString('_partition', _partition);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _to,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('transferByPartition(bytes32,address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _to: string, _value: BigNumber, _data: string): string {
      assert.isString('_partition', _partition);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'transferByPartition(bytes32,address,uint256,bytes)',
        [_partition, _to, _value, _data],
      );
      return abiEncodedTransactionData;
    },
  };
  public authorizeOperator = {
    async sendTransactionAsync(
      _operator: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('authorizeOperator(address)', [_operator]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.authorizeOperator.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _operator,
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
    async estimateGasAsync(_operator: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('authorizeOperator(address)', [_operator]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_operator: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_operator', _operator);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('authorizeOperator(address)', [_operator]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('authorizeOperator(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_operator: string): string {
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('authorizeOperator(address)', [_operator]);
      return abiEncodedTransactionData;
    },
  };
  public revokeOperator = {
    async sendTransactionAsync(
      _operator: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revokeOperator(address)', [_operator]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.revokeOperator.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _operator,
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
    async estimateGasAsync(_operator: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revokeOperator(address)', [_operator]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_operator: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_operator', _operator);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revokeOperator(address)', [_operator]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('revokeOperator(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_operator: string): string {
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('revokeOperator(address)', [_operator]);
      return abiEncodedTransactionData;
    },
  };
  public authorizeOperatorByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _operator: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('authorizeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
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
        self.authorizeOperatorByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _operator,
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
      _partition: string,
      _operator: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('authorizeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
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
      _partition: string,
      _operator: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('authorizeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
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
      const abiEncoder = self._lookupAbiEncoder('authorizeOperatorByPartition(bytes32,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _operator: string): string {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('authorizeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public revokeOperatorByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _operator: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revokeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
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
        self.revokeOperatorByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _operator,
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
      _partition: string,
      _operator: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revokeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
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
      _partition: string,
      _operator: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revokeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
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
      const abiEncoder = self._lookupAbiEncoder('revokeOperatorByPartition(bytes32,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _operator: string): string {
      assert.isString('_partition', _partition);
      assert.isString('_operator', _operator);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('revokeOperatorByPartition(bytes32,address)', [
        _partition,
        _operator,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public operatorTransferByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'operatorTransferByPartition(bytes32,address,address,uint256,bytes,bytes)',
        [_partition, _from, _to, _value, _data, _operatorData],
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
        self.operatorTransferByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _from,
          _to,
          _value,
          _data,
          _operatorData,
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
      _partition: string,
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'operatorTransferByPartition(bytes32,address,address,uint256,bytes,bytes)',
        [_partition, _from, _to, _value, _data, _operatorData],
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
      _partition: string,
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string> {
      assert.isString('_partition', _partition);
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'operatorTransferByPartition(bytes32,address,address,uint256,bytes,bytes)',
        [_partition, _from, _to, _value, _data, _operatorData],
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
        'operatorTransferByPartition(bytes32,address,address,uint256,bytes,bytes)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _partition: string,
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
    ): string {
      assert.isString('_partition', _partition);
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'operatorTransferByPartition(bytes32,address,address,uint256,bytes,bytes)',
        [_partition, _from, _to, _value, _data, _operatorData],
      );
      return abiEncodedTransactionData;
    },
  };
  public freezeIssuance = {
    async sendTransactionAsync(
      _signature: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_signature', _signature);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('freezeIssuance(bytes)', [_signature]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.freezeIssuance.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
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
    async estimateGasAsync(_signature: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_signature', _signature);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('freezeIssuance(bytes)', [_signature]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_signature: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_signature', _signature);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('freezeIssuance(bytes)', [_signature]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('freezeIssuance(bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_signature: string): string {
      assert.isString('_signature', _signature);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('freezeIssuance(bytes)', [_signature]);
      return abiEncodedTransactionData;
    },
  };
  public issue = {
    async sendTransactionAsync(
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issue(address,uint256,bytes)', [_tokenHolder, _value, _data]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.issue.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _tokenHolder,
          _value,
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
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issue(address,uint256,bytes)', [_tokenHolder, _value, _data]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issue(address,uint256,bytes)', [_tokenHolder, _value, _data]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('issue(address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string): string {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('issue(address,uint256,bytes)', [
        _tokenHolder,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public issueMulti = {
    async sendTransactionAsync(
      _tokenHolders: string[],
      _values: BigNumber[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_tokenHolders', _tokenHolders);
      assert.isArray('_values', _values);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issueMulti(address[],uint256[])', [_tokenHolders, _values]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.issueMulti.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _tokenHolders,
          _values,
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
      _tokenHolders: string[],
      _values: BigNumber[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_tokenHolders', _tokenHolders);
      assert.isArray('_values', _values);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issueMulti(address[],uint256[])', [_tokenHolders, _values]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _tokenHolders: string[],
      _values: BigNumber[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_tokenHolders', _tokenHolders);
      assert.isArray('_values', _values);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issueMulti(address[],uint256[])', [_tokenHolders, _values]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('issueMulti(address[],uint256[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tokenHolders: string[], _values: BigNumber[]): string {
      assert.isArray('_tokenHolders', _tokenHolders);
      assert.isArray('_values', _values);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('issueMulti(address[],uint256[])', [
        _tokenHolders,
        _values,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public issueByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issueByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _tokenHolder,
        _value,
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
        self.issueByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _tokenHolder,
          _value,
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
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issueByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _tokenHolder,
        _value,
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
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('issueByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _tokenHolder,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('issueByPartition(bytes32,address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _value: BigNumber, _data: string): string {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('issueByPartition(bytes32,address,uint256,bytes)', [
        _partition,
        _tokenHolder,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public redeem = {
    async sendTransactionAsync(
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeem(uint256,bytes)', [_value, _data]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.redeem.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _value,
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
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeem(uint256,bytes)', [_value, _data]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeem(uint256,bytes)', [_value, _data]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('redeem(uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_value: BigNumber, _data: string): string {
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('redeem(uint256,bytes)', [_value, _data]);
      return abiEncodedTransactionData;
    },
  };
  public redeemByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeemByPartition(bytes32,uint256,bytes)', [
        _partition,
        _value,
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
        self.redeemByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _value,
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
      _partition: string,
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeemByPartition(bytes32,uint256,bytes)', [
        _partition,
        _value,
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
      _partition: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_partition', _partition);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeemByPartition(bytes32,uint256,bytes)', [
        _partition,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('redeemByPartition(bytes32,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_partition: string, _value: BigNumber, _data: string): string {
      assert.isString('_partition', _partition);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('redeemByPartition(bytes32,uint256,bytes)', [
        _partition,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public operatorRedeemByPartition = {
    async sendTransactionAsync(
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'operatorRedeemByPartition(bytes32,address,uint256,bytes,bytes)',
        [_partition, _tokenHolder, _value, _data, _operatorData],
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
        self.operatorRedeemByPartition.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _partition,
          _tokenHolder,
          _value,
          _data,
          _operatorData,
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
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'operatorRedeemByPartition(bytes32,address,uint256,bytes,bytes)',
        [_partition, _tokenHolder, _value, _data, _operatorData],
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
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'operatorRedeemByPartition(bytes32,address,uint256,bytes,bytes)',
        [_partition, _tokenHolder, _value, _data, _operatorData],
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
      const abiEncoder = self._lookupAbiEncoder('operatorRedeemByPartition(bytes32,address,uint256,bytes,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _partition: string,
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
    ): string {
      assert.isString('_partition', _partition);
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'operatorRedeemByPartition(bytes32,address,uint256,bytes,bytes)',
        [_partition, _tokenHolder, _value, _data, _operatorData],
      );
      return abiEncodedTransactionData;
    },
  };
  public redeemFrom = {
    async sendTransactionAsync(
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeemFrom(address,uint256,bytes)', [
        _tokenHolder,
        _value,
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
        self.redeemFrom.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _tokenHolder,
          _value,
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
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeemFrom(address,uint256,bytes)', [
        _tokenHolder,
        _value,
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
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('redeemFrom(address,uint256,bytes)', [
        _tokenHolder,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('redeemFrom(address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tokenHolder: string, _value: BigNumber, _data: string): string {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('redeemFrom(address,uint256,bytes)', [
        _tokenHolder,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public createCheckpoint = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as SecurityTokenContract_3_1_0;
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
        self.createCheckpoint.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('createCheckpoint()', []);
      return abiEncodedTransactionData;
    },
  };
  public setController = {
    async sendTransactionAsync(
      _controller: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_controller', _controller);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('setController(address)', [_controller]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.setController.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _controller,
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
      _controller: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_controller', _controller);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('setController(address)', [_controller]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_controller: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_controller', _controller);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('setController(address)', [_controller]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('setController(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_controller: string): string {
      assert.isString('_controller', _controller);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setController(address)', [_controller]);
      return abiEncodedTransactionData;
    },
  };
  public disableController = {
    async sendTransactionAsync(
      _signature: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_signature', _signature);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('disableController(bytes)', [_signature]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.disableController.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
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
    async estimateGasAsync(_signature: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_signature', _signature);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('disableController(bytes)', [_signature]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_signature: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_signature', _signature);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('disableController(bytes)', [_signature]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('disableController(bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_signature: string): string {
      assert.isString('_signature', _signature);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('disableController(bytes)', [_signature]);
      return abiEncodedTransactionData;
    },
  };
  public canTransfer = {
    async callAsync(
      _to: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string, string]> {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('canTransfer(address,uint256,bytes)', [_to, _value, _data]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('canTransfer(address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string, string]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_to: string, _value: BigNumber, _data: string): string {
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('canTransfer(address,uint256,bytes)', [
        _to,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public canTransferFrom = {
    async callAsync(
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string, string]> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('canTransferFrom(address,address,uint256,bytes)', [
        _from,
        _to,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('canTransferFrom(address,address,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string, string]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber, _data: string): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('canTransferFrom(address,address,uint256,bytes)', [
        _from,
        _to,
        _value,
        _data,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public canTransferByPartition = {
    async callAsync(
      _from: string,
      _to: string,
      _partition: string,
      _value: BigNumber,
      _data: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string, string, string]> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isString('_partition', _partition);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('canTransferByPartition(address,address,bytes32,uint256,bytes)', [
        _from,
        _to,
        _partition,
        _value,
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
      const abiEncoder = self._lookupAbiEncoder('canTransferByPartition(address,address,bytes32,uint256,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string, string, string]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _partition: string,
      _value: BigNumber,
      _data: string,
    ): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isString('_partition', _partition);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'canTransferByPartition(address,address,bytes32,uint256,bytes)',
        [_from, _to, _partition, _value, _data],
      );
      return abiEncodedTransactionData;
    },
  };
  public setDocument = {
    async sendTransactionAsync(
      _name: string,
      _uri: string,
      _documentHash: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isString('_uri', _uri);
      assert.isString('_documentHash', _documentHash);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('setDocument(bytes32,string,bytes32)', [
        _name,
        _uri,
        _documentHash,
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
        self.setDocument.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _name,
          _uri,
          _documentHash,
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
      _name: string,
      _uri: string,
      _documentHash: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isString('_uri', _uri);
      assert.isString('_documentHash', _documentHash);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('setDocument(bytes32,string,bytes32)', [
        _name,
        _uri,
        _documentHash,
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
      _name: string,
      _uri: string,
      _documentHash: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isString('_uri', _uri);
      assert.isString('_documentHash', _documentHash);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('setDocument(bytes32,string,bytes32)', [
        _name,
        _uri,
        _documentHash,
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
      const abiEncoder = self._lookupAbiEncoder('setDocument(bytes32,string,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_name: string, _uri: string, _documentHash: string): string {
      assert.isString('_name', _name);
      assert.isString('_uri', _uri);
      assert.isString('_documentHash', _documentHash);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setDocument(bytes32,string,bytes32)', [
        _name,
        _uri,
        _documentHash,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public removeDocument = {
    async sendTransactionAsync(
      _name: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('removeDocument(bytes32)', [_name]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.removeDocument.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
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
    async estimateGasAsync(_name: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_name', _name);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('removeDocument(bytes32)', [_name]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(_name: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_name', _name);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('removeDocument(bytes32)', [_name]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('removeDocument(bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_name: string): string {
      assert.isString('_name', _name);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeDocument(bytes32)', [_name]);
      return abiEncodedTransactionData;
    },
  };
  public isControllable = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('isControllable()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('isControllable()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isControllable()', []);
      return abiEncodedTransactionData;
    },
  };
  public controllerTransfer = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerTransfer(address,address,uint256,bytes,bytes)', [
        _from,
        _to,
        _value,
        _data,
        _operatorData,
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
        self.controllerTransfer.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _from,
          _to,
          _value,
          _data,
          _operatorData,
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
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerTransfer(address,address,uint256,bytes,bytes)', [
        _from,
        _to,
        _value,
        _data,
        _operatorData,
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
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerTransfer(address,address,uint256,bytes,bytes)', [
        _from,
        _to,
        _value,
        _data,
        _operatorData,
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
      const abiEncoder = self._lookupAbiEncoder('controllerTransfer(address,address,uint256,bytes,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
    ): string {
      assert.isString('_from', _from);
      assert.isString('_to', _to);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'controllerTransfer(address,address,uint256,bytes,bytes)',
        [_from, _to, _value, _data, _operatorData],
      );
      return abiEncodedTransactionData;
    },
  };
  public controllerRedeem = {
    async sendTransactionAsync(
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerRedeem(address,uint256,bytes,bytes)', [
        _tokenHolder,
        _value,
        _data,
        _operatorData,
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
        self.controllerRedeem.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          _tokenHolder,
          _value,
          _data,
          _operatorData,
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
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerRedeem(address,uint256,bytes,bytes)', [
        _tokenHolder,
        _value,
        _data,
        _operatorData,
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
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('controllerRedeem(address,uint256,bytes,bytes)', [
        _tokenHolder,
        _value,
        _data,
        _operatorData,
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
      const abiEncoder = self._lookupAbiEncoder('controllerRedeem(address,uint256,bytes,bytes)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _tokenHolder: string,
      _value: BigNumber,
      _data: string,
      _operatorData: string,
    ): string {
      assert.isString('_tokenHolder', _tokenHolder);
      assert.isBigNumber('_value', _value);
      assert.isString('_data', _data);
      assert.isString('_operatorData', _operatorData);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('controllerRedeem(address,uint256,bytes,bytes)', [
        _tokenHolder,
        _value,
        _data,
        _operatorData,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public updateFromRegistry = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as SecurityTokenContract_3_1_0;
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
          ...contractDefaults,
        },
        self.updateFromRegistry.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
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
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('updateFromRegistry()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('updateFromRegistry()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('updateFromRegistry()', []);
      return abiEncodedTransactionData;
    },
  };
  public owner = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('owner()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('owner()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('owner()', []);
      return abiEncodedTransactionData;
    },
  };
  public isOwner = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('isOwner()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('isOwner()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isOwner()', []);
      return abiEncodedTransactionData;
    },
  };
  public transferOwnership = {
    async sendTransactionAsync(
      newOwner: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('newOwner', newOwner);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
        self.transferOwnership.estimateGasAsync.bind<SecurityTokenContract_3_1_0, any, Promise<number>>(
          self,
          newOwner,
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
    async estimateGasAsync(newOwner: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('newOwner', newOwner);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
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
    async callAsync(newOwner: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('newOwner', newOwner);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('transferOwnership(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(newOwner: string): string {
      assert.isString('newOwner', newOwner);
      const self = (this as any) as SecurityTokenContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
      return abiEncodedTransactionData;
    },
  };
  public static async deployAsync(
    bytecode: string,
    abi: ContractAbi,
    supportedProvider: SupportedProvider,
    txDefaults: Partial<TxData>,
  ): Promise<SecurityTokenContract_3_1_0> {
    assert.isHexString('bytecode', bytecode);
    assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
      schemas.addressSchema,
      schemas.numberSchema,
      schemas.jsNumber,
    ]);
    const provider = providerUtils.standardizeOrThrow(supportedProvider);
    const constructorAbi = BaseContract._lookupConstructorAbi(abi);
    [] = BaseContract._formatABIDataItemList(constructorAbi.inputs, [], BaseContract._bigNumberToString);
    const iface = new ethers.utils.Interface(abi);
    const deployInfo = iface.deployFunction;
    const txData = deployInfo.encode(bytecode, []);
    const web3Wrapper = new Web3Wrapper(provider);
    const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
      { data: txData },
      txDefaults,
      web3Wrapper.estimateGasAsync.bind(web3Wrapper),
    );
    const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
    logUtils.log(`transactionHash: ${txHash}`);
    const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
    logUtils.log(`SecurityToken successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new SecurityTokenContract_3_1_0(txReceipt.contractAddress as string, provider, txDefaults);
    contractInstance.constructorArgs = [];
    return contractInstance;
  }

  /**
   * @returns The contract ABI
   */
  public static ABI(): ContractAbi {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
          {
            name: '',
            type: 'string',
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
            name: 'spender',
            type: 'address',
          },
          {
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'initialized',
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
        name: 'totalSupply',
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
        name: 'holderCount',
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
        name: 'getterDelegate',
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
        name: 'decimals',
        outputs: [
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
        constant: false,
        inputs: [
          {
            name: 'spender',
            type: 'address',
          },
          {
            name: 'addedValue',
            type: 'uint256',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'currentCheckpointId',
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
        name: 'granularity',
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
        name: 'dataStore',
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
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
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
        name: 'polymathRegistry',
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
        name: 'controllerDisabled',
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
        name: 'symbol',
        outputs: [
          {
            name: '',
            type: 'string',
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
            name: 'spender',
            type: 'address',
          },
          {
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'moduleRegistry',
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
        name: 'securityTokenRegistry',
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
        name: 'tokenDetails',
        outputs: [
          {
            name: '',
            type: 'string',
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
            name: 'owner',
            type: 'address',
          },
          {
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'allowance',
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
        name: 'transfersFrozen',
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
        name: 'tokenFactory',
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
        name: 'controller',
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
        inputs: [],
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
            name: '_types',
            type: 'uint8[]',
            indexed: false,
          },
          {
            name: '_name',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_moduleFactory',
            type: 'address',
            indexed: true,
          },
          {
            name: '_module',
            type: 'address',
            indexed: false,
          },
          {
            name: '_moduleCost',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_budget',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_label',
            type: 'bytes32',
            indexed: false,
          },
          {
            name: '_archived',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ModuleAdded',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_types',
            type: 'uint8[]',
            indexed: false,
          },
          {
            name: '_module',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'ModuleUpgraded',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldDetails',
            type: 'string',
            indexed: false,
          },
          {
            name: '_newDetails',
            type: 'string',
            indexed: false,
          },
        ],
        name: 'UpdateTokenDetails',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldName',
            type: 'string',
            indexed: false,
          },
          {
            name: '_newName',
            type: 'string',
            indexed: false,
          },
        ],
        name: 'UpdateTokenName',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldGranularity',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_newGranularity',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'GranularityChanged',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'FreezeIssuance',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_status',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'FreezeTransfers',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_checkpointId',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_investorLength',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'CheckpointCreated',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldController',
            type: 'address',
            indexed: true,
          },
          {
            name: '_newController',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'SetController',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldTreasuryWallet',
            type: 'address',
            indexed: false,
          },
          {
            name: '_newTreasuryWallet',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'TreasuryWalletChanged',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'DisableController',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'previousOwner',
            type: 'address',
            indexed: true,
          },
          {
            name: 'newOwner',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'OwnershipTransferred',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_major',
            type: 'uint8',
            indexed: false,
          },
          {
            name: '_minor',
            type: 'uint8',
            indexed: false,
          },
          {
            name: '_patch',
            type: 'uint8',
            indexed: false,
          },
        ],
        name: 'TokenUpgraded',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_types',
            type: 'uint8[]',
            indexed: false,
          },
          {
            name: '_module',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'ModuleArchived',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_types',
            type: 'uint8[]',
            indexed: false,
          },
          {
            name: '_module',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'ModuleUnarchived',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_types',
            type: 'uint8[]',
            indexed: false,
          },
          {
            name: '_module',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'ModuleRemoved',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_moduleTypes',
            type: 'uint8[]',
            indexed: false,
          },
          {
            name: '_module',
            type: 'address',
            indexed: false,
          },
          {
            name: '_oldBudget',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_budget',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ModuleBudgetChanged',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_fromPartition',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_operator',
            type: 'address',
            indexed: false,
          },
          {
            name: '_from',
            type: 'address',
            indexed: true,
          },
          {
            name: '_to',
            type: 'address',
            indexed: true,
          },
          {
            name: '_value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_data',
            type: 'bytes',
            indexed: false,
          },
          {
            name: '_operatorData',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'TransferByPartition',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'operator',
            type: 'address',
            indexed: true,
          },
          {
            name: 'tokenHolder',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'AuthorizedOperator',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'operator',
            type: 'address',
            indexed: true,
          },
          {
            name: 'tokenHolder',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'RevokedOperator',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'partition',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: 'operator',
            type: 'address',
            indexed: true,
          },
          {
            name: 'tokenHolder',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'AuthorizedOperatorByPartition',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'partition',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: 'operator',
            type: 'address',
            indexed: true,
          },
          {
            name: 'tokenHolder',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'RevokedOperatorByPartition',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'partition',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: 'to',
            type: 'address',
            indexed: true,
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: 'data',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'IssuedByPartition',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'partition',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: 'operator',
            type: 'address',
            indexed: true,
          },
          {
            name: 'from',
            type: 'address',
            indexed: true,
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: 'data',
            type: 'bytes',
            indexed: false,
          },
          {
            name: 'operatorData',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'RedeemedByPartition',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_controller',
            type: 'address',
            indexed: false,
          },
          {
            name: '_from',
            type: 'address',
            indexed: true,
          },
          {
            name: '_to',
            type: 'address',
            indexed: true,
          },
          {
            name: '_value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_data',
            type: 'bytes',
            indexed: false,
          },
          {
            name: '_operatorData',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'ControllerTransfer',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_controller',
            type: 'address',
            indexed: false,
          },
          {
            name: '_tokenHolder',
            type: 'address',
            indexed: true,
          },
          {
            name: '_value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_data',
            type: 'bytes',
            indexed: false,
          },
          {
            name: '_operatorData',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'ControllerRedemption',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_name',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_uri',
            type: 'string',
            indexed: false,
          },
          {
            name: '_documentHash',
            type: 'bytes32',
            indexed: false,
          },
        ],
        name: 'DocumentRemoved',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_name',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_uri',
            type: 'string',
            indexed: false,
          },
          {
            name: '_documentHash',
            type: 'bytes32',
            indexed: false,
          },
        ],
        name: 'DocumentUpdated',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_operator',
            type: 'address',
            indexed: true,
          },
          {
            name: '_to',
            type: 'address',
            indexed: true,
          },
          {
            name: '_value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_data',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'Issued',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_operator',
            type: 'address',
            indexed: true,
          },
          {
            name: '_from',
            type: 'address',
            indexed: true,
          },
          {
            name: '_value',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_data',
            type: 'bytes',
            indexed: false,
          },
        ],
        name: 'Redeemed',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'from',
            type: 'address',
            indexed: true,
          },
          {
            name: 'to',
            type: 'address',
            indexed: true,
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'Transfer',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: 'owner',
            type: 'address',
            indexed: true,
          },
          {
            name: 'spender',
            type: 'address',
            indexed: true,
          },
          {
            name: 'value',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'Approval',
        outputs: [],
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_getterDelegate',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_module',
            type: 'address',
          },
          {
            name: '_type',
            type: 'uint8',
          },
        ],
        name: 'isModule',
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
            name: '_moduleFactory',
            type: 'address',
          },
          {
            name: '_data',
            type: 'bytes',
          },
          {
            name: '_maxCost',
            type: 'uint256',
          },
          {
            name: '_budget',
            type: 'uint256',
          },
          {
            name: '_label',
            type: 'bytes32',
          },
          {
            name: '_archived',
            type: 'bool',
          },
        ],
        name: 'addModuleWithLabel',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_moduleFactory',
            type: 'address',
          },
          {
            name: '_data',
            type: 'bytes',
          },
          {
            name: '_maxCost',
            type: 'uint256',
          },
          {
            name: '_budget',
            type: 'uint256',
          },
          {
            name: '_archived',
            type: 'bool',
          },
        ],
        name: 'addModule',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_module',
            type: 'address',
          },
        ],
        name: 'archiveModule',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_module',
            type: 'address',
          },
        ],
        name: 'upgradeModule',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'upgradeToken',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_module',
            type: 'address',
          },
        ],
        name: 'unarchiveModule',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_module',
            type: 'address',
          },
        ],
        name: 'removeModule',
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
          {
            name: '_value',
            type: 'uint256',
          },
        ],
        name: 'withdrawERC20',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_module',
            type: 'address',
          },
          {
            name: '_change',
            type: 'uint256',
          },
          {
            name: '_increase',
            type: 'bool',
          },
        ],
        name: 'changeModuleBudget',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_newTokenDetails',
            type: 'string',
          },
        ],
        name: 'updateTokenDetails',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_granularity',
            type: 'uint256',
          },
        ],
        name: 'changeGranularity',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_dataStore',
            type: 'address',
          },
        ],
        name: 'changeDataStore',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_name',
            type: 'string',
          },
        ],
        name: 'changeName',
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
        name: 'changeTreasuryWallet',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'freezeTransfers',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'unfreezeTransfers',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            name: 'success',
            type: 'bool',
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
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'transferWithData',
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
            name: '_value',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            name: '',
            type: 'bool',
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
            name: '_from',
            type: 'address',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'transferFromWithData',
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
        ],
        name: 'balanceOfByPartition',
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
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'transferByPartition',
        outputs: [
          {
            name: '',
            type: 'bytes32',
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
            name: '_operator',
            type: 'address',
          },
        ],
        name: 'authorizeOperator',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_operator',
            type: 'address',
          },
        ],
        name: 'revokeOperator',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_operator',
            type: 'address',
          },
        ],
        name: 'authorizeOperatorByPartition',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_operator',
            type: 'address',
          },
        ],
        name: 'revokeOperatorByPartition',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_from',
            type: 'address',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
          {
            name: '_operatorData',
            type: 'bytes',
          },
        ],
        name: 'operatorTransferByPartition',
        outputs: [
          {
            name: '',
            type: 'bytes32',
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
            name: '_signature',
            type: 'bytes',
          },
        ],
        name: 'freezeIssuance',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tokenHolder',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'issue',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tokenHolders',
            type: 'address[]',
          },
          {
            name: '_values',
            type: 'uint256[]',
          },
        ],
        name: 'issueMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
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
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'issueByPartition',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'redeem',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'redeemByPartition',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
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
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
          {
            name: '_operatorData',
            type: 'bytes',
          },
        ],
        name: 'operatorRedeemByPartition',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tokenHolder',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'redeemFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
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
        constant: false,
        inputs: [
          {
            name: '_controller',
            type: 'address',
          },
        ],
        name: 'setController',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_signature',
            type: 'bytes',
          },
        ],
        name: 'disableController',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'canTransfer',
        outputs: [
          {
            name: '',
            type: 'bytes1',
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
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'canTransferFrom',
        outputs: [
          {
            name: 'reasonCode',
            type: 'bytes1',
          },
          {
            name: 'appCode',
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
            name: '_from',
            type: 'address',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_partition',
            type: 'bytes32',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'canTransferByPartition',
        outputs: [
          {
            name: 'reasonCode',
            type: 'bytes1',
          },
          {
            name: 'appStatusCode',
            type: 'bytes32',
          },
          {
            name: 'toPartition',
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
            name: '_name',
            type: 'bytes32',
          },
          {
            name: '_uri',
            type: 'string',
          },
          {
            name: '_documentHash',
            type: 'bytes32',
          },
        ],
        name: 'setDocument',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_name',
            type: 'bytes32',
          },
        ],
        name: 'removeDocument',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'isControllable',
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
            name: '_from',
            type: 'address',
          },
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
          {
            name: '_operatorData',
            type: 'bytes',
          },
        ],
        name: 'controllerTransfer',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tokenHolder',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
          {
            name: '_data',
            type: 'bytes',
          },
          {
            name: '_operatorData',
            type: 'bytes',
          },
        ],
        name: 'controllerRedeem',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'updateFromRegistry',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
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
        name: 'isOwner',
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
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
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
    super('SecurityToken', SecurityTokenContract_3_1_0.ABI(), address, supportedProvider, txDefaults);
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
