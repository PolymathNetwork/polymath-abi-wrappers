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

export type ISecurityTokenRegistryEventArgs_3_0_0 =
  | ISecurityTokenRegistryPauseEventArgs_3_0_0
  | ISecurityTokenRegistryUnpauseEventArgs_3_0_0
  | ISecurityTokenRegistryTickerRemovedEventArgs_3_0_0
  | ISecurityTokenRegistryChangeExpiryLimitEventArgs_3_0_0
  | ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs_3_0_0
  | ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs_3_0_0
  | ISecurityTokenRegistryChangeFeeCurrencyEventArgs_3_0_0
  | ISecurityTokenRegistryOwnershipTransferredEventArgs_3_0_0
  | ISecurityTokenRegistryChangeTickerOwnershipEventArgs_3_0_0
  | ISecurityTokenRegistryNewSecurityTokenEventArgs_3_0_0
  | ISecurityTokenRegistryNewSecurityTokenEventArgs_3_0_0
  | ISecurityTokenRegistryRegisterTickerEventArgs_3_0_0
  | ISecurityTokenRegistryRegisterTickerEventArgs_3_0_0
  | ISecurityTokenRegistrySecurityTokenRefreshedEventArgs_3_0_0
  | ISecurityTokenRegistryProtocolFactorySetEventArgs_3_0_0
  | ISecurityTokenRegistryLatestVersionSetEventArgs_3_0_0
  | ISecurityTokenRegistryProtocolFactoryRemovedEventArgs_3_0_0;

export enum ISecurityTokenRegistryEvents_3_0_0 {
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

export interface ISecurityTokenRegistryPauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}
export interface ISecurityTokenRegistryUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}
export interface ISecurityTokenRegistryTickerRemovedEventArgs_3_0_0 extends DecodedLogArgs {
  _ticker: string;
  _removedBy: string;
}
export interface ISecurityTokenRegistryChangeExpiryLimitEventArgs_3_0_0 extends DecodedLogArgs {
  _oldExpiry: BigNumber;
  _newExpiry: BigNumber;
}
export interface ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs_3_0_0 extends DecodedLogArgs {
  _oldFee: BigNumber;
  _newFee: BigNumber;
}
export interface ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs_3_0_0 extends DecodedLogArgs {
  _oldFee: BigNumber;
  _newFee: BigNumber;
}
export interface ISecurityTokenRegistryChangeFeeCurrencyEventArgs_3_0_0 extends DecodedLogArgs {
  _isFeeInPoly: boolean;
}
export interface ISecurityTokenRegistryOwnershipTransferredEventArgs_3_0_0 extends DecodedLogArgs {
  previousOwner: string;
  newOwner: string;
}
export interface ISecurityTokenRegistryChangeTickerOwnershipEventArgs_3_0_0 extends DecodedLogArgs {
  _ticker: string;
  _oldOwner: string;
  _newOwner: string;
}
export interface ISecurityTokenRegistryNewSecurityTokenEventArgs_3_0_0 extends DecodedLogArgs {
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
export interface ISecurityTokenRegistryNewSecurityTokenEventArgs_3_0_0 extends DecodedLogArgs {
  _ticker: string;
  _name: string;
  _securityTokenAddress: string;
  _owner: string;
  _addedAt: BigNumber;
  _registrant: string;
  _fromAdmin: boolean;
  _registrationFee: BigNumber;
}
export interface ISecurityTokenRegistryRegisterTickerEventArgs_3_0_0 extends DecodedLogArgs {
  _owner: string;
  _ticker: string;
  _registrationDate: BigNumber;
  _expiryDate: BigNumber;
  _fromAdmin: boolean;
  _registrationFeePoly: BigNumber;
  _registrationFeeUsd: BigNumber;
}
export interface ISecurityTokenRegistryRegisterTickerEventArgs_3_0_0 extends DecodedLogArgs {
  _owner: string;
  _ticker: string;
  _name: string;
  _registrationDate: BigNumber;
  _expiryDate: BigNumber;
  _fromAdmin: boolean;
  _registrationFee: BigNumber;
}
export interface ISecurityTokenRegistrySecurityTokenRefreshedEventArgs_3_0_0 extends DecodedLogArgs {
  _ticker: string;
  _name: string;
  _securityTokenAddress: string;
  _owner: string;
  _addedAt: BigNumber;
  _registrant: string;
  _protocolVersion: BigNumber;
}
export interface ISecurityTokenRegistryProtocolFactorySetEventArgs_3_0_0 extends DecodedLogArgs {
  _STFactory: string;
  _major: BigNumber;
  _minor: BigNumber;
  _patch: BigNumber;
}
export interface ISecurityTokenRegistryLatestVersionSetEventArgs_3_0_0 extends DecodedLogArgs {
  _major: BigNumber;
  _minor: BigNumber;
  _patch: BigNumber;
}
export interface ISecurityTokenRegistryProtocolFactoryRemovedEventArgs_3_0_0 extends DecodedLogArgs {
  _STFactory: string;
  _major: BigNumber;
  _minor: BigNumber;
  _patch: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ISecurityTokenRegistryContract_3_0_0 extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public generateSecurityToken = {
    async sendTransactionAsync(
      _name: string,
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)', [
        _name,
        _ticker,
        _tokenDetails,
        _divisible,
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
        self.generateSecurityToken.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _name,
          _ticker,
          _tokenDetails,
          _divisible,
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
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)', [
        _name,
        _ticker,
        _tokenDetails,
        _divisible,
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
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('generateSecurityToken(string,string,string,bool)', [
        _name,
        _ticker,
        _tokenDetails,
        _divisible,
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
      const abiEncoder = self._lookupAbiEncoder('generateSecurityToken(string,string,string,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_name: string, _ticker: string, _tokenDetails: string, _divisible: boolean): string {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'generateSecurityToken(string,string,string,bool)',
        [_name, _ticker, _tokenDetails, _divisible],
      );
      return abiEncodedTransactionData;
    },
  };
  public generateNewSecurityToken = {
    async sendTransactionAsync(
      _name: string,
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      _protocolVersion: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isBigNumber('_protocolVersion', _protocolVersion);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'generateNewSecurityToken(string,string,string,bool,address,uint256)',
        [_name, _ticker, _tokenDetails, _divisible, _treasuryWallet, _protocolVersion],
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
        self.generateNewSecurityToken.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _name,
          _ticker,
          _tokenDetails,
          _divisible,
          _treasuryWallet,
          _protocolVersion,
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
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      _protocolVersion: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isBigNumber('_protocolVersion', _protocolVersion);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'generateNewSecurityToken(string,string,string,bool,address,uint256)',
        [_name, _ticker, _tokenDetails, _divisible, _treasuryWallet, _protocolVersion],
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
      _name: string,
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      _protocolVersion: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isBigNumber('_protocolVersion', _protocolVersion);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'generateNewSecurityToken(string,string,string,bool,address,uint256)',
        [_name, _ticker, _tokenDetails, _divisible, _treasuryWallet, _protocolVersion],
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
      const abiEncoder = self._lookupAbiEncoder('generateNewSecurityToken(string,string,string,bool,address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      _protocolVersion: BigNumber,
    ): string {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.isBigNumber('_protocolVersion', _protocolVersion);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'generateNewSecurityToken(string,string,string,bool,address,uint256)',
        [_name, _ticker, _tokenDetails, _divisible, _treasuryWallet, _protocolVersion],
      );
      return abiEncodedTransactionData;
    },
  };
  public refreshSecurityToken = {
    async sendTransactionAsync(
      _name: string,
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)', [
        _name,
        _ticker,
        _tokenDetails,
        _divisible,
        _treasuryWallet,
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
        self.refreshSecurityToken.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _name,
          _ticker,
          _tokenDetails,
          _divisible,
          _treasuryWallet,
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
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)', [
        _name,
        _ticker,
        _tokenDetails,
        _divisible,
        _treasuryWallet,
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
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('refreshSecurityToken(string,string,string,bool,address)', [
        _name,
        _ticker,
        _tokenDetails,
        _divisible,
        _treasuryWallet,
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
      const abiEncoder = self._lookupAbiEncoder('refreshSecurityToken(string,string,string,bool,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _ticker: string,
      _tokenDetails: string,
      _divisible: boolean,
      _treasuryWallet: string,
    ): string {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBoolean('_divisible', _divisible);
      assert.isString('_treasuryWallet', _treasuryWallet);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'refreshSecurityToken(string,string,string,bool,address)',
        [_name, _ticker, _tokenDetails, _divisible, _treasuryWallet],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifySecurityToken = {
    async sendTransactionAsync(
      _name: string,
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifySecurityToken(string,string,address,address,string,uint256)',
        [_name, _ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
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
        self.modifySecurityToken.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _name,
          _ticker,
          _owner,
          _securityToken,
          _tokenDetails,
          _deployedAt,
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
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifySecurityToken(string,string,address,address,string,uint256)',
        [_name, _ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
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
      _name: string,
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifySecurityToken(string,string,address,address,string,uint256)',
        [_name, _ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
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
      const abiEncoder = self._lookupAbiEncoder('modifySecurityToken(string,string,address,address,string,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
    ): string {
      assert.isString('_name', _name);
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifySecurityToken(string,string,address,address,string,uint256)',
        [_name, _ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyExistingSecurityToken = {
    async sendTransactionAsync(
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyExistingSecurityToken(string,address,address,string,uint256)',
        [_ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
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
        self.modifyExistingSecurityToken.estimateGasAsync.bind<
          ISecurityTokenRegistryContract_3_0_0,
          any,
          Promise<number>
        >(self, _ticker, _owner, _securityToken, _tokenDetails, _deployedAt, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

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
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyExistingSecurityToken(string,address,address,string,uint256)',
        [_ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
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
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments(
        'modifyExistingSecurityToken(string,address,address,string,uint256)',
        [_ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
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
      const abiEncoder = self._lookupAbiEncoder('modifyExistingSecurityToken(string,address,address,string,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _ticker: string,
      _owner: string,
      _securityToken: string,
      _tokenDetails: string,
      _deployedAt: BigNumber,
    ): string {
      assert.isString('_ticker', _ticker);
      assert.isString('_owner', _owner);
      assert.isString('_securityToken', _securityToken);
      assert.isString('_tokenDetails', _tokenDetails);
      assert.isBigNumber('_deployedAt', _deployedAt);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyExistingSecurityToken(string,address,address,string,uint256)',
        [_ticker, _owner, _securityToken, _tokenDetails, _deployedAt],
      );
      return abiEncodedTransactionData;
    },
  };
  public modifyExistingTicker = {
    async sendTransactionAsync(
      _owner: string,
      _ticker: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)', [
        _owner,
        _ticker,
        _registrationDate,
        _expiryDate,
        _status,
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
        self.modifyExistingTicker.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _owner,
          _ticker,
          _registrationDate,
          _expiryDate,
          _status,
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
      _owner: string,
      _ticker: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)', [
        _owner,
        _ticker,
        _registrationDate,
        _expiryDate,
        _status,
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
      _owner: string,
      _ticker: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyExistingTicker(address,string,uint256,uint256,bool)', [
        _owner,
        _ticker,
        _registrationDate,
        _expiryDate,
        _status,
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
      const abiEncoder = self._lookupAbiEncoder('modifyExistingTicker(address,string,uint256,uint256,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _owner: string,
      _ticker: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
    ): string {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyExistingTicker(address,string,uint256,uint256,bool)',
        [_owner, _ticker, _registrationDate, _expiryDate, _status],
      );
      return abiEncodedTransactionData;
    },
  };
  public registerTicker = {
    async sendTransactionAsync(
      _owner: string,
      _ticker: string,
      _tokenName: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('registerTicker(address,string,string)', [
        _owner,
        _ticker,
        _tokenName,
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
        self.registerTicker.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _owner,
          _ticker,
          _tokenName,
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
      _owner: string,
      _ticker: string,
      _tokenName: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('registerTicker(address,string,string)', [
        _owner,
        _ticker,
        _tokenName,
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
      _owner: string,
      _ticker: string,
      _tokenName: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('registerTicker(address,string,string)', [
        _owner,
        _ticker,
        _tokenName,
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
      const abiEncoder = self._lookupAbiEncoder('registerTicker(address,string,string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_owner: string, _ticker: string, _tokenName: string): string {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('registerTicker(address,string,string)', [
        _owner,
        _ticker,
        _tokenName,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public registerNewTicker = {
    async sendTransactionAsync(
      _owner: string,
      _ticker: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('registerNewTicker(address,string)', [_owner, _ticker]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.registerNewTicker.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _owner,
          _ticker,
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
      _owner: string,
      _ticker: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('registerNewTicker(address,string)', [_owner, _ticker]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _owner: string,
      _ticker: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('registerNewTicker(address,string)', [_owner, _ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('registerNewTicker(address,string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_owner: string, _ticker: string): string {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('registerNewTicker(address,string)', [
        _owner,
        _ticker,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public isSecurityToken = {
    async callAsync(
      _securityToken: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isString('_securityToken', _securityToken);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('isSecurityToken(address)', [_securityToken]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('isSecurityToken(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_securityToken: string): string {
      assert.isString('_securityToken', _securityToken);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isSecurityToken(address)', [_securityToken]);
      return abiEncodedTransactionData;
    },
  };
  public transferOwnership = {
    async sendTransactionAsync(
      _newOwner: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_newOwner', _newOwner);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.transferOwnership.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _newOwner,
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
    async estimateGasAsync(_newOwner: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_newOwner', _newOwner);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
    async callAsync(_newOwner: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_newOwner', _newOwner);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
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
    getABIEncodedTransactionData(_newOwner: string): string {
      assert.isString('_newOwner', _newOwner);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)', [_newOwner]);
      return abiEncodedTransactionData;
    },
  };
  public getSecurityTokenAddress = {
    async callAsync(_ticker: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getSecurityTokenAddress(string)', [_ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getSecurityTokenAddress(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ticker: string): string {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSecurityTokenAddress(string)', [_ticker]);
      return abiEncodedTransactionData;
    },
  };
  public getSecurityTokenData = {
    async callAsync(
      _securityToken: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string, string, string, BigNumber]> {
      assert.isString('_securityToken', _securityToken);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getSecurityTokenData(address)', [_securityToken]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getSecurityTokenData(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string, string, string, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_securityToken: string): string {
      assert.isString('_securityToken', _securityToken);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSecurityTokenData(address)', [_securityToken]);
      return abiEncodedTransactionData;
    },
  };
  public getSTFactoryAddress = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getSTFactoryAddress()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getSTFactoryAddress()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSTFactoryAddress()', []);
      return abiEncodedTransactionData;
    },
  };
  public getSTFactoryAddressOfVersion = {
    async callAsync(
      _protocolVersion: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string> {
      assert.isBigNumber('_protocolVersion', _protocolVersion);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getSTFactoryAddressOfVersion(uint256)', [_protocolVersion]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getSTFactoryAddressOfVersion(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_protocolVersion: BigNumber): string {
      assert.isBigNumber('_protocolVersion', _protocolVersion);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSTFactoryAddressOfVersion(uint256)', [
        _protocolVersion,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getLatestProtocolVersion = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getLatestProtocolVersion()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getLatestProtocolVersion()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getLatestProtocolVersion()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTickersByOwner = {
    async callAsync(_owner: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.isString('_owner', _owner);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTickersByOwner(address)', [_owner]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTickersByOwner(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_owner: string): string {
      assert.isString('_owner', _owner);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTickersByOwner(address)', [_owner]);
      return abiEncodedTransactionData;
    },
  };
  public getTokensByOwner = {
    async callAsync(_owner: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.isString('_owner', _owner);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTokensByOwner(address)', [_owner]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTokensByOwner(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_owner: string): string {
      assert.isString('_owner', _owner);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensByOwner(address)', [_owner]);
      return abiEncodedTransactionData;
    },
  };
  public getTokens = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTokens()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTokens()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokens()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTickerDetails = {
    async callAsync(
      _ticker: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string, BigNumber, BigNumber, string, boolean]> {
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTickerDetails(string)', [_ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTickerDetails(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[string, BigNumber, BigNumber, string, boolean]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ticker: string): string {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTickerDetails(string)', [_ticker]);
      return abiEncodedTransactionData;
    },
  };
  public modifyTicker = {
    async sendTransactionAsync(
      _owner: string,
      _ticker: string,
      _tokenName: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)', [
        _owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status,
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
        self.modifyTicker.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _owner,
          _ticker,
          _tokenName,
          _registrationDate,
          _expiryDate,
          _status,
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
      _owner: string,
      _ticker: string,
      _tokenName: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)', [
        _owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status,
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
      _owner: string,
      _ticker: string,
      _tokenName: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('modifyTicker(address,string,string,uint256,uint256,bool)', [
        _owner,
        _ticker,
        _tokenName,
        _registrationDate,
        _expiryDate,
        _status,
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
      const abiEncoder = self._lookupAbiEncoder('modifyTicker(address,string,string,uint256,uint256,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _owner: string,
      _ticker: string,
      _tokenName: string,
      _registrationDate: BigNumber,
      _expiryDate: BigNumber,
      _status: boolean,
    ): string {
      assert.isString('_owner', _owner);
      assert.isString('_ticker', _ticker);
      assert.isString('_tokenName', _tokenName);
      assert.isBigNumber('_registrationDate', _registrationDate);
      assert.isBigNumber('_expiryDate', _expiryDate);
      assert.isBoolean('_status', _status);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'modifyTicker(address,string,string,uint256,uint256,bool)',
        [_owner, _ticker, _tokenName, _registrationDate, _expiryDate, _status],
      );
      return abiEncodedTransactionData;
    },
  };
  public removeTicker = {
    async sendTransactionAsync(
      _ticker: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('removeTicker(string)', [_ticker]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.removeTicker.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _ticker,
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
    async estimateGasAsync(_ticker: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('removeTicker(string)', [_ticker]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
    async callAsync(_ticker: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('removeTicker(string)', [_ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('removeTicker(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ticker: string): string {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeTicker(string)', [_ticker]);
      return abiEncodedTransactionData;
    },
  };
  public transferTickerOwnership = {
    async sendTransactionAsync(
      _newOwner: string,
      _ticker: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_newOwner', _newOwner);
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferTickerOwnership(address,string)', [_newOwner, _ticker]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.transferTickerOwnership.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _newOwner,
          _ticker,
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
      _newOwner: string,
      _ticker: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_newOwner', _newOwner);
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferTickerOwnership(address,string)', [_newOwner, _ticker]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _newOwner: string,
      _ticker: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_newOwner', _newOwner);
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('transferTickerOwnership(address,string)', [_newOwner, _ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('transferTickerOwnership(address,string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_newOwner: string, _ticker: string): string {
      assert.isString('_newOwner', _newOwner);
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferTickerOwnership(address,string)', [
        _newOwner,
        _ticker,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeExpiryLimit = {
    async sendTransactionAsync(
      _newExpiry: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_newExpiry', _newExpiry);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeExpiryLimit(uint256)', [_newExpiry]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.changeExpiryLimit.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _newExpiry,
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
      _newExpiry: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_newExpiry', _newExpiry);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeExpiryLimit(uint256)', [_newExpiry]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
    async callAsync(_newExpiry: BigNumber, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isBigNumber('_newExpiry', _newExpiry);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeExpiryLimit(uint256)', [_newExpiry]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeExpiryLimit(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_newExpiry: BigNumber): string {
      assert.isBigNumber('_newExpiry', _newExpiry);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeExpiryLimit(uint256)', [_newExpiry]);
      return abiEncodedTransactionData;
    },
  };
  public changeTickerRegistrationFee = {
    async sendTransactionAsync(
      _tickerRegFee: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)', [_tickerRegFee]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.changeTickerRegistrationFee.estimateGasAsync.bind<
          ISecurityTokenRegistryContract_3_0_0,
          any,
          Promise<number>
        >(self, _tickerRegFee, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _tickerRegFee: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)', [_tickerRegFee]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _tickerRegFee: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)', [_tickerRegFee]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeTickerRegistrationFee(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tickerRegFee: BigNumber): string {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeTickerRegistrationFee(uint256)', [
        _tickerRegFee,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeSecurityLaunchFee = {
    async sendTransactionAsync(
      _stLaunchFee: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)', [_stLaunchFee]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.changeSecurityLaunchFee.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _stLaunchFee,
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
      _stLaunchFee: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)', [_stLaunchFee]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _stLaunchFee: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)', [_stLaunchFee]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeSecurityLaunchFee(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_stLaunchFee: BigNumber): string {
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeSecurityLaunchFee(uint256)', [_stLaunchFee]);
      return abiEncodedTransactionData;
    },
  };
  public changeFeesAmountAndCurrency = {
    async sendTransactionAsync(
      _tickerRegFee: BigNumber,
      _stLaunchFee: BigNumber,
      _isFeeInPoly: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      assert.isBoolean('_isFeeInPoly', _isFeeInPoly);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)', [
        _tickerRegFee,
        _stLaunchFee,
        _isFeeInPoly,
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
        self.changeFeesAmountAndCurrency.estimateGasAsync.bind<
          ISecurityTokenRegistryContract_3_0_0,
          any,
          Promise<number>
        >(self, _tickerRegFee, _stLaunchFee, _isFeeInPoly, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _tickerRegFee: BigNumber,
      _stLaunchFee: BigNumber,
      _isFeeInPoly: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      assert.isBoolean('_isFeeInPoly', _isFeeInPoly);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)', [
        _tickerRegFee,
        _stLaunchFee,
        _isFeeInPoly,
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
      _tickerRegFee: BigNumber,
      _stLaunchFee: BigNumber,
      _isFeeInPoly: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      assert.isBoolean('_isFeeInPoly', _isFeeInPoly);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeFeesAmountAndCurrency(uint256,uint256,bool)', [
        _tickerRegFee,
        _stLaunchFee,
        _isFeeInPoly,
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
      const abiEncoder = self._lookupAbiEncoder('changeFeesAmountAndCurrency(uint256,uint256,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_tickerRegFee: BigNumber, _stLaunchFee: BigNumber, _isFeeInPoly: boolean): string {
      assert.isBigNumber('_tickerRegFee', _tickerRegFee);
      assert.isBigNumber('_stLaunchFee', _stLaunchFee);
      assert.isBoolean('_isFeeInPoly', _isFeeInPoly);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeFeesAmountAndCurrency(uint256,uint256,bool)',
        [_tickerRegFee, _stLaunchFee, _isFeeInPoly],
      );
      return abiEncodedTransactionData;
    },
  };
  public setProtocolFactory = {
    async sendTransactionAsync(
      _STFactoryAddress: string,
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_STFactoryAddress', _STFactoryAddress);
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)', [
        _STFactoryAddress,
        _major,
        _minor,
        _patch,
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
        self.setProtocolFactory.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _STFactoryAddress,
          _major,
          _minor,
          _patch,
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
      _STFactoryAddress: string,
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_STFactoryAddress', _STFactoryAddress);
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)', [
        _STFactoryAddress,
        _major,
        _minor,
        _patch,
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
      _STFactoryAddress: string,
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_STFactoryAddress', _STFactoryAddress);
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)', [
        _STFactoryAddress,
        _major,
        _minor,
        _patch,
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
      const abiEncoder = self._lookupAbiEncoder('setProtocolFactory(address,uint8,uint8,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _STFactoryAddress: string,
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
    ): string {
      assert.isString('_STFactoryAddress', _STFactoryAddress);
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setProtocolFactory(address,uint8,uint8,uint8)', [
        _STFactoryAddress,
        _major,
        _minor,
        _patch,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public removeProtocolFactory = {
    async sendTransactionAsync(
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)', [
        _major,
        _minor,
        _patch,
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
        self.removeProtocolFactory.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _major,
          _minor,
          _patch,
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
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)', [
        _major,
        _minor,
        _patch,
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
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)', [
        _major,
        _minor,
        _patch,
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
      const abiEncoder = self._lookupAbiEncoder('removeProtocolFactory(uint8,uint8,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
    ): string {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('removeProtocolFactory(uint8,uint8,uint8)', [
        _major,
        _minor,
        _patch,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public setLatestVersion = {
    async sendTransactionAsync(
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)', [_major, _minor, _patch]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.setLatestVersion.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _major,
          _minor,
          _patch,
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
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)', [_major, _minor, _patch]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)', [_major, _minor, _patch]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('setLatestVersion(uint8,uint8,uint8)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _major: number | BigNumber,
      _minor: number | BigNumber,
      _patch: number | BigNumber,
    ): string {
      assert.isNumberOrBigNumber('_major', _major);
      assert.isNumberOrBigNumber('_minor', _minor);
      assert.isNumberOrBigNumber('_patch', _patch);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setLatestVersion(uint8,uint8,uint8)', [
        _major,
        _minor,
        _patch,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public updatePolyTokenAddress = {
    async sendTransactionAsync(
      _newAddress: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_newAddress', _newAddress);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('updatePolyTokenAddress(address)', [_newAddress]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.updatePolyTokenAddress.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _newAddress,
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
      _newAddress: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_newAddress', _newAddress);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('updatePolyTokenAddress(address)', [_newAddress]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
    async callAsync(_newAddress: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isString('_newAddress', _newAddress);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('updatePolyTokenAddress(address)', [_newAddress]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('updatePolyTokenAddress(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_newAddress: string): string {
      assert.isString('_newAddress', _newAddress);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('updatePolyTokenAddress(address)', [_newAddress]);
      return abiEncodedTransactionData;
    },
  };
  public updateFromRegistry = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
        self.updateFromRegistry.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('updateFromRegistry()', []);
      return abiEncodedTransactionData;
    },
  };
  public getSecurityTokenLaunchFee = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
          ...contractDefaults,
        },
        self.getSecurityTokenLaunchFee.estimateGasAsync.bind<
          ISecurityTokenRegistryContract_3_0_0,
          any,
          Promise<number>
        >(
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getSecurityTokenLaunchFee()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getSecurityTokenLaunchFee()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSecurityTokenLaunchFee()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTickerRegistrationFee = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
          ...contractDefaults,
        },
        self.getTickerRegistrationFee.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTickerRegistrationFee()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTickerRegistrationFee()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTickerRegistrationFee()', []);
      return abiEncodedTransactionData;
    },
  };
  public setGetterRegistry = {
    async sendTransactionAsync(
      _getterContract: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_getterContract', _getterContract);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setGetterRegistry(address)', [_getterContract]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.setGetterRegistry.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _getterContract,
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
      _getterContract: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_getterContract', _getterContract);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setGetterRegistry(address)', [_getterContract]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _getterContract: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_getterContract', _getterContract);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('setGetterRegistry(address)', [_getterContract]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('setGetterRegistry(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_getterContract: string): string {
      assert.isString('_getterContract', _getterContract);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('setGetterRegistry(address)', [_getterContract]);
      return abiEncodedTransactionData;
    },
  };
  public getFees = {
    async sendTransactionAsync(
      _feeType: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_feeType', _feeType);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getFees(bytes32)', [_feeType]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.getFees.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
          self,
          _feeType,
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
    async estimateGasAsync(_feeType: string, factor?: number, txData?: Partial<TxData> | undefined): Promise<number> {
      assert.isString('_feeType', _feeType);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getFees(bytes32)', [_feeType]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _feeType: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber]> {
      assert.isString('_feeType', _feeType);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getFees(bytes32)', [_feeType]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getFees(bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber, BigNumber]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_feeType: string): string {
      assert.isString('_feeType', _feeType);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getFees(bytes32)', [_feeType]);
      return abiEncodedTransactionData;
    },
  };
  public getTokensByDelegate = {
    async callAsync(_delegate: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.isString('_delegate', _delegate);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTokensByDelegate(address)', [_delegate]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTokensByDelegate(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_delegate: string): string {
      assert.isString('_delegate', _delegate);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTokensByDelegate(address)', [_delegate]);
      return abiEncodedTransactionData;
    },
  };
  public getExpiryLimit = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getExpiryLimit()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getExpiryLimit()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getExpiryLimit()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTickerStatus = {
    async callAsync(_ticker: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTickerStatus(string)', [_ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTickerStatus(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ticker: string): string {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTickerStatus(string)', [_ticker]);
      return abiEncodedTransactionData;
    },
  };
  public getIsFeeInPoly = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getIsFeeInPoly()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getIsFeeInPoly()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getIsFeeInPoly()', []);
      return abiEncodedTransactionData;
    },
  };
  public getTickerOwner = {
    async callAsync(_ticker: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getTickerOwner(string)', [_ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getTickerOwner(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ticker: string): string {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getTickerOwner(string)', [_ticker]);
      return abiEncodedTransactionData;
    },
  };
  public isPaused = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('isPaused()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('isPaused()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isPaused()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
        self.pause.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('pause()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
        self.unpause.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('unpause()', []);
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
        self.reclaimERC20.estimateGasAsync.bind<ISecurityTokenRegistryContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimERC20(address)', [_tokenContract]);
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
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
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('owner()', []);
      return abiEncodedTransactionData;
    },
  };
  public tickerAvailable = {
    async callAsync(_ticker: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<boolean> {
      assert.isString('_ticker', _ticker);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const encodedData = self._strictEncodeArguments('tickerAvailable(string)', [_ticker]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('tickerAvailable(string)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ticker: string): string {
      assert.isString('_ticker', _ticker);
      const self = (this as any) as ISecurityTokenRegistryContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('tickerAvailable(string)', [_ticker]);
      return abiEncodedTransactionData;
    },
  };
  public static async deployAsync(
    bytecode: string,
    abi: ContractAbi,
    supportedProvider: SupportedProvider,
    txDefaults: Partial<TxData>,
  ): Promise<ISecurityTokenRegistryContract_3_0_0> {
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
    logUtils.log(`ISecurityTokenRegistry successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new ISecurityTokenRegistryContract_3_0_0(
      txReceipt.contractAddress as string,
      provider,
      txDefaults,
    );
    contractInstance.constructorArgs = [];
    return contractInstance;
  }

  /**
   * @returns The contract ABI
   */
  public static ABI(): ContractAbi {
    const abi = [
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
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_removedBy',
            type: 'address',
            indexed: false,
          },
        ],
        name: 'TickerRemoved',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldExpiry',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_newExpiry',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ChangeExpiryLimit',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldFee',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_newFee',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ChangeSecurityLaunchFee',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_oldFee',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_newFee',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'ChangeTickerRegistrationFee',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_isFeeInPoly',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ChangeFeeCurrency',
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
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_oldOwner',
            type: 'address',
            indexed: true,
          },
          {
            name: '_newOwner',
            type: 'address',
            indexed: true,
          },
        ],
        name: 'ChangeTickerOwnership',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_name',
            type: 'string',
            indexed: false,
          },
          {
            name: '_securityTokenAddress',
            type: 'address',
            indexed: true,
          },
          {
            name: '_owner',
            type: 'address',
            indexed: true,
          },
          {
            name: '_addedAt',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_registrant',
            type: 'address',
            indexed: false,
          },
          {
            name: '_fromAdmin',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_usdFee',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_polyFee',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_protocolVersion',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'NewSecurityToken',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_name',
            type: 'string',
            indexed: false,
          },
          {
            name: '_securityTokenAddress',
            type: 'address',
            indexed: true,
          },
          {
            name: '_owner',
            type: 'address',
            indexed: true,
          },
          {
            name: '_addedAt',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_registrant',
            type: 'address',
            indexed: false,
          },
          {
            name: '_fromAdmin',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_registrationFee',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'NewSecurityToken',
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
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_registrationDate',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_expiryDate',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_fromAdmin',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_registrationFeePoly',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_registrationFeeUsd',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'RegisterTicker',
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
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_name',
            type: 'string',
            indexed: false,
          },
          {
            name: '_registrationDate',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_expiryDate',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_fromAdmin',
            type: 'bool',
            indexed: false,
          },
          {
            name: '_registrationFee',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'RegisterTicker',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_ticker',
            type: 'string',
            indexed: false,
          },
          {
            name: '_name',
            type: 'string',
            indexed: false,
          },
          {
            name: '_securityTokenAddress',
            type: 'address',
            indexed: true,
          },
          {
            name: '_owner',
            type: 'address',
            indexed: true,
          },
          {
            name: '_addedAt',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_registrant',
            type: 'address',
            indexed: false,
          },
          {
            name: '_protocolVersion',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'SecurityTokenRefreshed',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_STFactory',
            type: 'address',
            indexed: true,
          },
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
        name: 'ProtocolFactorySet',
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
        name: 'LatestVersionSet',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_STFactory',
            type: 'address',
            indexed: true,
          },
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
        name: 'ProtocolFactoryRemoved',
        outputs: [],
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_name',
            type: 'string',
          },
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_tokenDetails',
            type: 'string',
          },
          {
            name: '_divisible',
            type: 'bool',
          },
        ],
        name: 'generateSecurityToken',
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
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_tokenDetails',
            type: 'string',
          },
          {
            name: '_divisible',
            type: 'bool',
          },
          {
            name: '_treasuryWallet',
            type: 'address',
          },
          {
            name: '_protocolVersion',
            type: 'uint256',
          },
        ],
        name: 'generateNewSecurityToken',
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
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_tokenDetails',
            type: 'string',
          },
          {
            name: '_divisible',
            type: 'bool',
          },
          {
            name: '_treasuryWallet',
            type: 'address',
          },
        ],
        name: 'refreshSecurityToken',
        outputs: [
          {
            name: 'securityToken',
            type: 'address',
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
            name: '_name',
            type: 'string',
          },
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: '_securityToken',
            type: 'address',
          },
          {
            name: '_tokenDetails',
            type: 'string',
          },
          {
            name: '_deployedAt',
            type: 'uint256',
          },
        ],
        name: 'modifySecurityToken',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: '_securityToken',
            type: 'address',
          },
          {
            name: '_tokenDetails',
            type: 'string',
          },
          {
            name: '_deployedAt',
            type: 'uint256',
          },
        ],
        name: 'modifyExistingSecurityToken',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_registrationDate',
            type: 'uint256',
          },
          {
            name: '_expiryDate',
            type: 'uint256',
          },
          {
            name: '_status',
            type: 'bool',
          },
        ],
        name: 'modifyExistingTicker',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_tokenName',
            type: 'string',
          },
        ],
        name: 'registerTicker',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'registerNewTicker',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_securityToken',
            type: 'address',
          },
        ],
        name: 'isSecurityToken',
        outputs: [
          {
            name: 'isValid',
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
            name: '_newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'getSecurityTokenAddress',
        outputs: [
          {
            name: 'tokenAddress',
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
            name: '_securityToken',
            type: 'address',
          },
        ],
        name: 'getSecurityTokenData',
        outputs: [
          {
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            name: 'tokenAddress',
            type: 'address',
          },
          {
            name: 'tokenDetails',
            type: 'string',
          },
          {
            name: 'tokenTime',
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
        name: 'getSTFactoryAddress',
        outputs: [
          {
            name: 'stFactoryAddress',
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
            name: '_protocolVersion',
            type: 'uint256',
          },
        ],
        name: 'getSTFactoryAddressOfVersion',
        outputs: [
          {
            name: 'stFactory',
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
        name: 'getLatestProtocolVersion',
        outputs: [
          {
            name: 'protocolVersion',
            type: 'uint8[]',
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
            name: '_owner',
            type: 'address',
          },
        ],
        name: 'getTickersByOwner',
        outputs: [
          {
            name: 'tickers',
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
            name: '_owner',
            type: 'address',
          },
        ],
        name: 'getTokensByOwner',
        outputs: [
          {
            name: 'tokens',
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
        name: 'getTokens',
        outputs: [
          {
            name: 'tokens',
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
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'getTickerDetails',
        outputs: [
          {
            name: 'tickerOwner',
            type: 'address',
          },
          {
            name: 'tickerRegistration',
            type: 'uint256',
          },
          {
            name: 'tickerExpiry',
            type: 'uint256',
          },
          {
            name: 'tokenName',
            type: 'string',
          },
          {
            name: 'tickerStatus',
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
            name: '_owner',
            type: 'address',
          },
          {
            name: '_ticker',
            type: 'string',
          },
          {
            name: '_tokenName',
            type: 'string',
          },
          {
            name: '_registrationDate',
            type: 'uint256',
          },
          {
            name: '_expiryDate',
            type: 'uint256',
          },
          {
            name: '_status',
            type: 'bool',
          },
        ],
        name: 'modifyTicker',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'removeTicker',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_newOwner',
            type: 'address',
          },
          {
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'transferTickerOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_newExpiry',
            type: 'uint256',
          },
        ],
        name: 'changeExpiryLimit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tickerRegFee',
            type: 'uint256',
          },
        ],
        name: 'changeTickerRegistrationFee',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_stLaunchFee',
            type: 'uint256',
          },
        ],
        name: 'changeSecurityLaunchFee',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_tickerRegFee',
            type: 'uint256',
          },
          {
            name: '_stLaunchFee',
            type: 'uint256',
          },
          {
            name: '_isFeeInPoly',
            type: 'bool',
          },
        ],
        name: 'changeFeesAmountAndCurrency',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_STFactoryAddress',
            type: 'address',
          },
          {
            name: '_major',
            type: 'uint8',
          },
          {
            name: '_minor',
            type: 'uint8',
          },
          {
            name: '_patch',
            type: 'uint8',
          },
        ],
        name: 'setProtocolFactory',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_major',
            type: 'uint8',
          },
          {
            name: '_minor',
            type: 'uint8',
          },
          {
            name: '_patch',
            type: 'uint8',
          },
        ],
        name: 'removeProtocolFactory',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_major',
            type: 'uint8',
          },
          {
            name: '_minor',
            type: 'uint8',
          },
          {
            name: '_patch',
            type: 'uint8',
          },
        ],
        name: 'setLatestVersion',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_newAddress',
            type: 'address',
          },
        ],
        name: 'updatePolyTokenAddress',
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
        constant: false,
        inputs: [],
        name: 'getSecurityTokenLaunchFee',
        outputs: [
          {
            name: 'fee',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'getTickerRegistrationFee',
        outputs: [
          {
            name: 'fee',
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
            name: '_getterContract',
            type: 'address',
          },
        ],
        name: 'setGetterRegistry',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_feeType',
            type: 'bytes32',
          },
        ],
        name: 'getFees',
        outputs: [
          {
            name: 'usdFee',
            type: 'uint256',
          },
          {
            name: 'polyFee',
            type: 'uint256',
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
            name: '_delegate',
            type: 'address',
          },
        ],
        name: 'getTokensByDelegate',
        outputs: [
          {
            name: 'tokens',
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
        name: 'getExpiryLimit',
        outputs: [
          {
            name: 'expiry',
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
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'getTickerStatus',
        outputs: [
          {
            name: 'status',
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
        name: 'getIsFeeInPoly',
        outputs: [
          {
            name: 'isInPoly',
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
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'getTickerOwner',
        outputs: [
          {
            name: 'owner',
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
        name: 'isPaused',
        outputs: [
          {
            name: 'paused',
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
        name: 'owner',
        outputs: [
          {
            name: 'ownerAddress',
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
            name: '_ticker',
            type: 'string',
          },
        ],
        name: 'tickerAvailable',
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
    super('ISecurityTokenRegistry', ISecurityTokenRegistryContract_3_0_0.ABI(), address, supportedProvider, txDefaults);
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
