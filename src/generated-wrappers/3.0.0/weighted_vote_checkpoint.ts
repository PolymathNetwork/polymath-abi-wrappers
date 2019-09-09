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

export type WeightedVoteCheckpointEventArgs_3_0_0 =
  | WeightedVoteCheckpointBallotCreatedEventArgs_3_0_0
  | WeightedVoteCheckpointVoteCastEventArgs_3_0_0
  | WeightedVoteCheckpointBallotStatusChangedEventArgs_3_0_0
  | WeightedVoteCheckpointChangedBallotExemptedVotersListEventArgs_3_0_0
  | WeightedVoteCheckpointChangedDefaultExemptedVotersListEventArgs_3_0_0
  | WeightedVoteCheckpointPauseEventArgs_3_0_0
  | WeightedVoteCheckpointUnpauseEventArgs_3_0_0;

export enum WeightedVoteCheckpointEvents_3_0_0 {
  BallotCreated = 'BallotCreated',
  VoteCast = 'VoteCast',
  BallotStatusChanged = 'BallotStatusChanged',
  ChangedBallotExemptedVotersList = 'ChangedBallotExemptedVotersList',
  ChangedDefaultExemptedVotersList = 'ChangedDefaultExemptedVotersList',
  Pause = 'Pause',
  Unpause = 'Unpause',
}

export interface WeightedVoteCheckpointBallotCreatedEventArgs_3_0_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _checkpointId: BigNumber;
  _startTime: BigNumber;
  _endTime: BigNumber;
  _noOfProposals: BigNumber;
  _quorumPercentage: BigNumber;
}
export interface WeightedVoteCheckpointVoteCastEventArgs_3_0_0 extends DecodedLogArgs {
  _voter: string;
  _weight: BigNumber;
  _ballotId: BigNumber;
  _proposalId: BigNumber;
}
export interface WeightedVoteCheckpointBallotStatusChangedEventArgs_3_0_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _isActive: boolean;
}
export interface WeightedVoteCheckpointChangedBallotExemptedVotersListEventArgs_3_0_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _voter: string;
  _exempt: boolean;
}
export interface WeightedVoteCheckpointChangedDefaultExemptedVotersListEventArgs_3_0_0 extends DecodedLogArgs {
  _voter: string;
  _exempt: boolean;
}
export interface WeightedVoteCheckpointPauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}
export interface WeightedVoteCheckpointUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
  account: string;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class WeightedVoteCheckpointContract_3_0_0 extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public reclaimETH = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
        self.reclaimETH.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('reclaimETH()', []);
      return abiEncodedTransactionData;
    },
  };
  public changeDefaultExemptedVotersListMulti = {
    async sendTransactionAsync(
      _voters: string[],
      _exempts: boolean[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaultExemptedVotersListMulti(address[],bool[])', [
        _voters,
        _exempts,
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
        self.changeDefaultExemptedVotersListMulti.estimateGasAsync.bind<
          WeightedVoteCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _voters, _exempts, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _voters: string[],
      _exempts: boolean[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaultExemptedVotersListMulti(address[],bool[])', [
        _voters,
        _exempts,
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
      _voters: string[],
      _exempts: boolean[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaultExemptedVotersListMulti(address[],bool[])', [
        _voters,
        _exempts,
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
      const abiEncoder = self._lookupAbiEncoder('changeDefaultExemptedVotersListMulti(address[],bool[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_voters: string[], _exempts: boolean[]): string {
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeDefaultExemptedVotersListMulti(address[],bool[])',
        [_voters, _exempts],
      );
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
        self.unpause.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('paused()', []);
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('polyToken()', []);
      return abiEncodedTransactionData;
    },
  };
  public getDefaultExemptionVotersList = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string[]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getDefaultExemptionVotersList()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getDefaultExemptionVotersList()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDefaultExemptionVotersList()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
        self.pause.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
        self.reclaimERC20.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('OPERATOR()', []);
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('factory()', []);
      return abiEncodedTransactionData;
    },
  };
  public changeDefaultExemptedVotersList = {
    async sendTransactionAsync(
      _voter: string,
      _exempt: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaultExemptedVotersList(address,bool)', [
        _voter,
        _exempt,
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
        self.changeDefaultExemptedVotersList.estimateGasAsync.bind<
          WeightedVoteCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _voter, _exempt, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _voter: string,
      _exempt: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaultExemptedVotersList(address,bool)', [
        _voter,
        _exempt,
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
      _voter: string,
      _exempt: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeDefaultExemptedVotersList(address,bool)', [
        _voter,
        _exempt,
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
      const abiEncoder = self._lookupAbiEncoder('changeDefaultExemptedVotersList(address,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_voter: string, _exempt: boolean): string {
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeDefaultExemptedVotersList(address,bool)', [
        _voter,
        _exempt,
      ]);
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getInitFunction()', []);
      return abiEncodedTransactionData;
    },
  };
  public createBallot = {
    async sendTransactionAsync(
      _duration: BigNumber,
      _noOfProposals: BigNumber,
      _quorumPercentage: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_duration', _duration);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createBallot(uint256,uint256,uint256)', [
        _duration,
        _noOfProposals,
        _quorumPercentage,
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
        self.createBallot.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _duration,
          _noOfProposals,
          _quorumPercentage,
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
      _duration: BigNumber,
      _noOfProposals: BigNumber,
      _quorumPercentage: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_duration', _duration);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createBallot(uint256,uint256,uint256)', [
        _duration,
        _noOfProposals,
        _quorumPercentage,
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
      _duration: BigNumber,
      _noOfProposals: BigNumber,
      _quorumPercentage: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_duration', _duration);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createBallot(uint256,uint256,uint256)', [
        _duration,
        _noOfProposals,
        _quorumPercentage,
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
      const abiEncoder = self._lookupAbiEncoder('createBallot(uint256,uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _duration: BigNumber,
      _noOfProposals: BigNumber,
      _quorumPercentage: BigNumber,
    ): string {
      assert.isBigNumber('_duration', _duration);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('createBallot(uint256,uint256,uint256)', [
        _duration,
        _noOfProposals,
        _quorumPercentage,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public createCustomBallot = {
    async sendTransactionAsync(
      _checkpointId: BigNumber,
      _quorumPercentage: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _noOfProposals: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createCustomBallot(uint256,uint256,uint256,uint256,uint256)', [
        _checkpointId,
        _quorumPercentage,
        _startTime,
        _endTime,
        _noOfProposals,
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
        self.createCustomBallot.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _checkpointId,
          _quorumPercentage,
          _startTime,
          _endTime,
          _noOfProposals,
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
      _checkpointId: BigNumber,
      _quorumPercentage: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _noOfProposals: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createCustomBallot(uint256,uint256,uint256,uint256,uint256)', [
        _checkpointId,
        _quorumPercentage,
        _startTime,
        _endTime,
        _noOfProposals,
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
      _checkpointId: BigNumber,
      _quorumPercentage: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _noOfProposals: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('createCustomBallot(uint256,uint256,uint256,uint256,uint256)', [
        _checkpointId,
        _quorumPercentage,
        _startTime,
        _endTime,
        _noOfProposals,
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
      const abiEncoder = self._lookupAbiEncoder('createCustomBallot(uint256,uint256,uint256,uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _checkpointId: BigNumber,
      _quorumPercentage: BigNumber,
      _startTime: BigNumber,
      _endTime: BigNumber,
      _noOfProposals: BigNumber,
    ): string {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isBigNumber('_quorumPercentage', _quorumPercentage);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_endTime', _endTime);
      assert.isBigNumber('_noOfProposals', _noOfProposals);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCustomBallot(uint256,uint256,uint256,uint256,uint256)',
        [_checkpointId, _quorumPercentage, _startTime, _endTime, _noOfProposals],
      );
      return abiEncodedTransactionData;
    },
  };
  public castVote = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _proposalId: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBigNumber('_proposalId', _proposalId);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('castVote(uint256,uint256)', [_ballotId, _proposalId]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.castVote.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _ballotId,
          _proposalId,
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
      _ballotId: BigNumber,
      _proposalId: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBigNumber('_proposalId', _proposalId);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('castVote(uint256,uint256)', [_ballotId, _proposalId]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _ballotId: BigNumber,
      _proposalId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBigNumber('_proposalId', _proposalId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('castVote(uint256,uint256)', [_ballotId, _proposalId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('castVote(uint256,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _proposalId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBigNumber('_proposalId', _proposalId);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('castVote(uint256,uint256)', [
        _ballotId,
        _proposalId,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeBallotExemptedVotersList = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _voter: string,
      _exempt: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersList(uint256,address,bool)', [
        _ballotId,
        _voter,
        _exempt,
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
        self.changeBallotExemptedVotersList.estimateGasAsync.bind<
          WeightedVoteCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _ballotId, _voter, _exempt, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _ballotId: BigNumber,
      _voter: string,
      _exempt: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersList(uint256,address,bool)', [
        _ballotId,
        _voter,
        _exempt,
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
      _ballotId: BigNumber,
      _voter: string,
      _exempt: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersList(uint256,address,bool)', [
        _ballotId,
        _voter,
        _exempt,
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
      const abiEncoder = self._lookupAbiEncoder('changeBallotExemptedVotersList(uint256,address,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string, _exempt: boolean): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeBallotExemptedVotersList(uint256,address,bool)',
        [_ballotId, _voter, _exempt],
      );
      return abiEncodedTransactionData;
    },
  };
  public changeBallotExemptedVotersListMulti = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _voters: string[],
      _exempts: boolean[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersListMulti(uint256,address[],bool[])', [
        _ballotId,
        _voters,
        _exempts,
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
        self.changeBallotExemptedVotersListMulti.estimateGasAsync.bind<
          WeightedVoteCheckpointContract_3_0_0,
          any,
          Promise<number>
        >(self, _ballotId, _voters, _exempts, estimateGasFactor),
      );
      if (txDataWithDefaults.from !== undefined) {
        txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
      }

      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);

      return new PolyResponse(txHash, receipt);
    },
    async estimateGasAsync(
      _ballotId: BigNumber,
      _voters: string[],
      _exempts: boolean[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersListMulti(uint256,address[],bool[])', [
        _ballotId,
        _voters,
        _exempts,
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
      _ballotId: BigNumber,
      _voters: string[],
      _exempts: boolean[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersListMulti(uint256,address[],bool[])', [
        _ballotId,
        _voters,
        _exempts,
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
      const abiEncoder = self._lookupAbiEncoder('changeBallotExemptedVotersListMulti(uint256,address[],bool[])');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _voters: string[], _exempts: boolean[]): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_voters', _voters);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeBallotExemptedVotersListMulti(uint256,address[],bool[])',
        [_ballotId, _voters, _exempts],
      );
      return abiEncodedTransactionData;
    },
  };
  public isVoterAllowed = {
    async callAsync(
      _ballotId: BigNumber,
      _voter: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('isVoterAllowed(uint256,address)', [_ballotId, _voter]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('isVoterAllowed(uint256,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isVoterAllowed(uint256,address)', [
        _ballotId,
        _voter,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public changeBallotStatus = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _isActive: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBoolean('_isActive', _isActive);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotStatus(uint256,bool)', [_ballotId, _isActive]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.changeBallotStatus.estimateGasAsync.bind<WeightedVoteCheckpointContract_3_0_0, any, Promise<number>>(
          self,
          _ballotId,
          _isActive,
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
      _ballotId: BigNumber,
      _isActive: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBoolean('_isActive', _isActive);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotStatus(uint256,bool)', [_ballotId, _isActive]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _ballotId: BigNumber,
      _isActive: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBoolean('_isActive', _isActive);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('changeBallotStatus(uint256,bool)', [_ballotId, _isActive]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('changeBallotStatus(uint256,bool)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _isActive: boolean): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isBoolean('_isActive', _isActive);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeBallotStatus(uint256,bool)', [
        _ballotId,
        _isActive,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getBallotResults = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber[], BigNumber[], BigNumber, boolean, BigNumber]> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getBallotResults(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getBallotResults(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[], BigNumber, boolean, BigNumber]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getBallotResults(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getSelectedProposal = {
    async callAsync(
      _ballotId: BigNumber,
      _voter: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getSelectedProposal(uint256,address)', [_ballotId, _voter]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getSelectedProposal(uint256,address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_voter', _voter);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getSelectedProposal(uint256,address)', [
        _ballotId,
        _voter,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getBallotDetails = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean]> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const encodedData = self._strictEncodeArguments('getBallotDetails(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getBallotDetails(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getBallotDetails(uint256)', [_ballotId]);
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
      const self = (this as any) as WeightedVoteCheckpointContract_3_0_0;
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
  ): Promise<WeightedVoteCheckpointContract_3_0_0> {
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
    logUtils.log(`WeightedVoteCheckpoint successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new WeightedVoteCheckpointContract_3_0_0(
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
        constant: false,
        inputs: [
          {
            name: '_voters',
            type: 'address[]',
          },
          {
            name: '_exempts',
            type: 'bool[]',
          },
        ],
        name: 'changeDefaultExemptedVotersListMulti',
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
        inputs: [],
        name: 'getDefaultExemptionVotersList',
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
        constant: false,
        inputs: [
          {
            name: '_voter',
            type: 'address',
          },
          {
            name: '_exempt',
            type: 'bool',
          },
        ],
        name: 'changeDefaultExemptedVotersList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
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
            name: '_ballotId',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_checkpointId',
            type: 'uint256',
            indexed: true,
          },
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
          {
            name: '_noOfProposals',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_quorumPercentage',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'BallotCreated',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_voter',
            type: 'address',
            indexed: true,
          },
          {
            name: '_weight',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_ballotId',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_proposalId',
            type: 'uint256',
            indexed: true,
          },
        ],
        name: 'VoteCast',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_isActive',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'BallotStatusChanged',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_voter',
            type: 'address',
            indexed: true,
          },
          {
            name: '_exempt',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ChangedBallotExemptedVotersList',
        outputs: [],
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            name: '_voter',
            type: 'address',
            indexed: true,
          },
          {
            name: '_exempt',
            type: 'bool',
            indexed: false,
          },
        ],
        name: 'ChangedDefaultExemptedVotersList',
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
            name: '_duration',
            type: 'uint256',
          },
          {
            name: '_noOfProposals',
            type: 'uint256',
          },
          {
            name: '_quorumPercentage',
            type: 'uint256',
          },
        ],
        name: 'createBallot',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_checkpointId',
            type: 'uint256',
          },
          {
            name: '_quorumPercentage',
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
            name: '_noOfProposals',
            type: 'uint256',
          },
        ],
        name: 'createCustomBallot',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
          },
          {
            name: '_proposalId',
            type: 'uint256',
          },
        ],
        name: 'castVote',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
          },
          {
            name: '_voter',
            type: 'address',
          },
          {
            name: '_exempt',
            type: 'bool',
          },
        ],
        name: 'changeBallotExemptedVotersList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
          },
          {
            name: '_voters',
            type: 'address[]',
          },
          {
            name: '_exempts',
            type: 'bool[]',
          },
        ],
        name: 'changeBallotExemptedVotersListMulti',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
          },
          {
            name: '_voter',
            type: 'address',
          },
        ],
        name: 'isVoterAllowed',
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
            name: '_ballotId',
            type: 'uint256',
          },
          {
            name: '_isActive',
            type: 'bool',
          },
        ],
        name: 'changeBallotStatus',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getBallotResults',
        outputs: [
          {
            name: 'voteWeighting',
            type: 'uint256[]',
          },
          {
            name: 'tieWith',
            type: 'uint256[]',
          },
          {
            name: 'winningProposal',
            type: 'uint256',
          },
          {
            name: 'isVotingSucceed',
            type: 'bool',
          },
          {
            name: 'totalVotes',
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
            name: '_ballotId',
            type: 'uint256',
          },
          {
            name: '_voter',
            type: 'address',
          },
        ],
        name: 'getSelectedProposal',
        outputs: [
          {
            name: 'proposalId',
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
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getBallotDetails',
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
    super('WeightedVoteCheckpoint', WeightedVoteCheckpointContract_3_0_0.ABI(), address, supportedProvider, txDefaults);
    this._defaultEstimateGasFactor = defaultEstimateGasFactor === undefined ? 1.1 : defaultEstimateGasFactor;
    classUtils.bindAll(this, [
      '_abiEncoderByFunctionSignature',
      'address',
      '_web3Wrapper',
      '_defaultEstimateGasFactor',
    ]);
  }
}

export function isWeightedVoteCheckpointContract_3_0_0(
  contract: any,
): contract is WeightedVoteCheckpointContract_3_0_0 {
  return isEqual(WeightedVoteCheckpointContract_3_0_0.ABI(), contract.abi);
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
