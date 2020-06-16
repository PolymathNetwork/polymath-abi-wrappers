// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
import { BaseContract } from '@0x/base-contract';
import { schemas } from '@0x/json-schemas';
import {
  BlockParam,
  CallData,
  ContractAbi,
  DecodedLogArgs,
  TxData,
  SupportedProvider,
  AbiDefinition,
} from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { assert } from '@0x/assert';
import { PolyResponse } from '../../PolyResponse';
import { isEqual } from 'lodash';
import { utils as ethersUtils } from 'ethers';
// tslint:enable:no-unused-variable

export type AdvancedPLCRVotingCheckpointEventArgs_3_1_0 =
  | AdvancedPLCRVotingCheckpointStatutoryBallotCreatedEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointCumulativeBallotCreatedEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointVotersExemptedEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointVoteCommitEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointVoteRevealedEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointBallotCancelledEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointChangedBallotExemptedVotersListEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointChangedDefaultExemptedVotersListEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointPauseEventArgs_3_1_0
  | AdvancedPLCRVotingCheckpointUnpauseEventArgs_3_1_0;

export enum AdvancedPLCRVotingCheckpointEvents_3_1_0 {
  StatutoryBallotCreated = 'StatutoryBallotCreated',
  CumulativeBallotCreated = 'CumulativeBallotCreated',
  VotersExempted = 'VotersExempted',
  VoteCommit = 'VoteCommit',
  VoteRevealed = 'VoteRevealed',
  BallotCancelled = 'BallotCancelled',
  ChangedBallotExemptedVotersList = 'ChangedBallotExemptedVotersList',
  ChangedDefaultExemptedVotersList = 'ChangedDefaultExemptedVotersList',
  Pause = 'Pause',
  Unpause = 'Unpause',
}

export interface AdvancedPLCRVotingCheckpointStatutoryBallotCreatedEventArgs_3_1_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _checkpointId: BigNumber;
  _name: string;
  _startTime: BigNumber;
  _commitDuration: BigNumber;
  _revealDuration: BigNumber;
  _details: string;
  _noOfChoices: BigNumber;
  _proposalTitle: string;
  _choices: string;
}
export interface AdvancedPLCRVotingCheckpointCumulativeBallotCreatedEventArgs_3_1_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _checkpointId: BigNumber;
  _name: string;
  _startTime: BigNumber;
  _commitDuration: BigNumber;
  _revealDuration: BigNumber;
  _details: string[];
  _noOfChoices: BigNumber[];
  _proposalTitle: string;
  _choices: string;
}
export interface AdvancedPLCRVotingCheckpointVotersExemptedEventArgs_3_1_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _exemptedAddresses: string[];
}
export interface AdvancedPLCRVotingCheckpointVoteCommitEventArgs_3_1_0 extends DecodedLogArgs {
  _voter: string;
  _weight: BigNumber;
  _ballotId: BigNumber;
  _secretHash: string;
}
export interface AdvancedPLCRVotingCheckpointVoteRevealedEventArgs_3_1_0 extends DecodedLogArgs {
  _voter: string;
  _weight: BigNumber;
  _ballotId: BigNumber;
  _choices: BigNumber[];
  _salt: BigNumber;
}
export interface AdvancedPLCRVotingCheckpointBallotCancelledEventArgs_3_1_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
}
export interface AdvancedPLCRVotingCheckpointChangedBallotExemptedVotersListEventArgs_3_1_0 extends DecodedLogArgs {
  _ballotId: BigNumber;
  _exemptedAddress: string;
  _exempt: boolean;
}
export interface AdvancedPLCRVotingCheckpointChangedDefaultExemptedVotersListEventArgs_3_1_0 extends DecodedLogArgs {
  _voter: string;
  _exempt: boolean;
}
export interface AdvancedPLCRVotingCheckpointPauseEventArgs_3_1_0 extends DecodedLogArgs {
  account: string;
}
export interface AdvancedPLCRVotingCheckpointUnpauseEventArgs_3_1_0 extends DecodedLogArgs {
  account: string;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class AdvancedPLCRVotingCheckpointContract_3_1_0 extends BaseContract {
  private _defaultEstimateGasFactor: number;
  public reclaimETH = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
        self.reclaimETH.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('ADMIN()', []);
      return abiEncodedTransactionData;
    },
  };
  public unpause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
        self.unpause.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDefaultExemptionVotersList()', []);
      return abiEncodedTransactionData;
    },
  };
  public pause = {
    async sendTransactionAsync(
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
        self.pause.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
        self.reclaimERC20.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getDataStore()', []);
      return abiEncodedTransactionData;
    },
  };
  public createStatutoryBallot = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256)',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitle, _details, _choices, _noOfChoices],
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
        self.createStatutoryBallot.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256)',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitle, _details, _choices, _noOfChoices],
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256)',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitle, _details, _choices, _noOfChoices],
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
        'createStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256)',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitle, _details, _choices, _noOfChoices],
      );
      return abiEncodedTransactionData;
    },
  };
  public createCustomStatutoryBallot = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
        self.createCustomStatutoryBallot.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
        'createCustomStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCustomStatutoryBallot(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public createCustomCumulativeBallot = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
        self.createCustomCumulativeBallot.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
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
        'createCustomCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256)',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCustomCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256)',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public createCumulativeBallot = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[])',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitles, _details, _choices, _noOfChoices],
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
        self.createCumulativeBallot.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[])',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitles, _details, _choices, _noOfChoices],
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[])',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitles, _details, _choices, _noOfChoices],
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
        'createCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCumulativeBallot(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[])',
        [_name, _startTime, _commitDuration, _revealDuration, _proposalTitles, _details, _choices, _noOfChoices],
      );
      return abiEncodedTransactionData;
    },
  };
  public createCustomCumulativeBallotWithExemption = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
        self.createCustomCumulativeBallotWithExemption.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
        'createCustomCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256,address[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCustomCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public createCumulativeBallotWithExemption = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _exemptedAddresses: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
        self.createCumulativeBallotWithExemption.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _exemptedAddresses: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _exemptedAddresses: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
        'createCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],address[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitles: string,
      _details: string[],
      _choices: string,
      _noOfChoices: BigNumber[],
      _exemptedAddresses: string[],
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitles', _proposalTitles);
      assert.isArray('_details', _details);
      assert.isString('_choices', _choices);
      assert.isArray('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCumulativeBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32[],string,uint256[],address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitles,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public createStatutoryBallotWithExemption = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _exemptedAddresses: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
        self.createStatutoryBallotWithExemption.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _exemptedAddresses: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _exemptedAddresses: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
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
        'createStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,address[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _exemptedAddresses: string[],
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _exemptedAddresses,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public createCustomStatutoryBallotWithExemption = {
    async sendTransactionAsync(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
        self.createCustomStatutoryBallotWithExemption.estimateGasAsync.bind<
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(
          self,
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments(
        'createCustomStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
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
        'createCustomStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256,address[])',
      );
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(
      _name: string,
      _startTime: BigNumber,
      _commitDuration: BigNumber,
      _revealDuration: BigNumber,
      _proposalTitle: string,
      _details: string,
      _choices: string,
      _noOfChoices: BigNumber,
      _checkpointId: BigNumber,
      _exemptedAddresses: string[],
    ): string {
      assert.isString('_name', _name);
      assert.isBigNumber('_startTime', _startTime);
      assert.isBigNumber('_commitDuration', _commitDuration);
      assert.isBigNumber('_revealDuration', _revealDuration);
      assert.isString('_proposalTitle', _proposalTitle);
      assert.isString('_details', _details);
      assert.isString('_choices', _choices);
      assert.isBigNumber('_noOfChoices', _noOfChoices);
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'createCustomStatutoryBallotWithExemption(bytes32,uint256,uint256,uint256,string,bytes32,string,uint256,uint256,address[])',
        [
          _name,
          _startTime,
          _commitDuration,
          _revealDuration,
          _proposalTitle,
          _details,
          _choices,
          _noOfChoices,
          _checkpointId,
          _exemptedAddresses,
        ],
      );
      return abiEncodedTransactionData;
    },
  };
  public commitVote = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _secretVote: string,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_secretVote', _secretVote);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('commitVote(uint256,bytes32)', [_ballotId, _secretVote]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.commitVote.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
          self,
          _ballotId,
          _secretVote,
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
      _secretVote: string,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_secretVote', _secretVote);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('commitVote(uint256,bytes32)', [_ballotId, _secretVote]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
      _secretVote: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_secretVote', _secretVote);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('commitVote(uint256,bytes32)', [_ballotId, _secretVote]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('commitVote(uint256,bytes32)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _secretVote: string): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_secretVote', _secretVote);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('commitVote(uint256,bytes32)', [
        _ballotId,
        _secretVote,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public revealVote = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _choices: BigNumber[],
      _salt: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_choices', _choices);
      assert.isBigNumber('_salt', _salt);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revealVote(uint256,uint256[],uint256)', [
        _ballotId,
        _choices,
        _salt,
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
        self.revealVote.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
          self,
          _ballotId,
          _choices,
          _salt,
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
      _choices: BigNumber[],
      _salt: BigNumber,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_choices', _choices);
      assert.isBigNumber('_salt', _salt);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revealVote(uint256,uint256[],uint256)', [
        _ballotId,
        _choices,
        _salt,
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
      _choices: BigNumber[],
      _salt: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_choices', _choices);
      assert.isBigNumber('_salt', _salt);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('revealVote(uint256,uint256[],uint256)', [
        _ballotId,
        _choices,
        _salt,
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
      const abiEncoder = self._lookupAbiEncoder('revealVote(uint256,uint256[],uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber, _choices: BigNumber[], _salt: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_choices', _choices);
      assert.isBigNumber('_salt', _salt);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('revealVote(uint256,uint256[],uint256)', [
        _ballotId,
        _choices,
        _salt,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public cancelBallot = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('cancelBallot(uint256)', [_ballotId]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        {
          from: defaultFromAddress,
          ...contractDefaults,
        },
        self.cancelBallot.estimateGasAsync.bind<AdvancedPLCRVotingCheckpointContract_3_1_0, any, Promise<number>>(
          self,
          _ballotId,
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
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('cancelBallot(uint256)', [_ballotId]);
      const contractDefaults = self._web3Wrapper.getContractDefaults();
      const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
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
    async callAsync(_ballotId: BigNumber, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('cancelBallot(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('cancelBallot(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('cancelBallot(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public changeBallotExemptedVotersList = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _exemptedAddress: string,
      _exempt: boolean,
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_exemptedAddress', _exemptedAddress);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersList(uint256,address,bool)', [
        _ballotId,
        _exemptedAddress,
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
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(self, _ballotId, _exemptedAddress, _exempt, estimateGasFactor),
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
      _exemptedAddress: string,
      _exempt: boolean,
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_exemptedAddress', _exemptedAddress);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersList(uint256,address,bool)', [
        _ballotId,
        _exemptedAddress,
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
      _exemptedAddress: string,
      _exempt: boolean,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_exemptedAddress', _exemptedAddress);
      assert.isBoolean('_exempt', _exempt);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersList(uint256,address,bool)', [
        _ballotId,
        _exemptedAddress,
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
    getABIEncodedTransactionData(_ballotId: BigNumber, _exemptedAddress: string, _exempt: boolean): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isString('_exemptedAddress', _exemptedAddress);
      assert.isBoolean('_exempt', _exempt);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeBallotExemptedVotersList(uint256,address,bool)',
        [_ballotId, _exemptedAddress, _exempt],
      );
      return abiEncodedTransactionData;
    },
  };
  public changeBallotExemptedVotersListMulti = {
    async sendTransactionAsync(
      _ballotId: BigNumber,
      _exemptedAddresses: string[],
      _exempts: boolean[],
      txData?: Partial<TxData> | undefined,
      estimateGasFactor?: number,
    ): Promise<PolyResponse> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersListMulti(uint256,address[],bool[])', [
        _ballotId,
        _exemptedAddresses,
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
          AdvancedPLCRVotingCheckpointContract_3_1_0,
          any,
          Promise<number>
        >(self, _ballotId, _exemptedAddresses, _exempts, estimateGasFactor),
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
      _exemptedAddresses: string[],
      _exempts: boolean[],
      factor?: number,
      txData?: Partial<TxData> | undefined,
    ): Promise<number> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersListMulti(uint256,address[],bool[])', [
        _ballotId,
        _exemptedAddresses,
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
      _exemptedAddresses: string[],
      _exempts: boolean[],
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<void> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.isArray('_exempts', _exempts);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('changeBallotExemptedVotersListMulti(uint256,address[],bool[])', [
        _ballotId,
        _exemptedAddresses,
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
    getABIEncodedTransactionData(_ballotId: BigNumber, _exemptedAddresses: string[], _exempts: boolean[]): string {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.isArray('_exemptedAddresses', _exemptedAddresses);
      assert.isArray('_exempts', _exempts);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeBallotExemptedVotersListMulti(uint256,address[],bool[])',
        [_ballotId, _exemptedAddresses, _exempts],
      );
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
          AdvancedPLCRVotingCheckpointContract_3_1_0,
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('changeDefaultExemptedVotersList(address,bool)', [
        _voter,
        _exempt,
      ]);
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
          AdvancedPLCRVotingCheckpointContract_3_1_0,
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments(
        'changeDefaultExemptedVotersListMulti(address[],bool[])',
        [_voters, _exempts],
      );
      return abiEncodedTransactionData;
    },
  };
  public getCheckpointData = {
    async callAsync(
      _checkpointId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[string[], BigNumber[]]> {
      assert.isBigNumber('_checkpointId', _checkpointId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_checkpointId: BigNumber): string {
      assert.isBigNumber('_checkpointId', _checkpointId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getCheckpointData(uint256)', [_checkpointId]);
      return abiEncodedTransactionData;
    },
  };
  public getPendingInvestorToVote = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string[]> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getPendingInvestorToVote(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getPendingInvestorToVote(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getPendingInvestorToVote(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getCommitedVoteCount = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getCommitedVoteCount(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getCommitedVoteCount(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getCommitedVoteCount(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getAllowedVotersByBallot = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string[]> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getAllowedVotersByBallot(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getAllowedVotersByBallot(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllowedVotersByBallot(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getAllBallots = {
    async callAsync(
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber[], string[], BigNumber[], BigNumber[], boolean[]]> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getAllBallots()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getAllBallots()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], string[], BigNumber[], BigNumber[], boolean[]]>(
        rawCallResult,
      );
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getAllBallots()', []);
      return abiEncodedTransactionData;
    },
  };
  public getExemptedVotersByBallot = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<string[]> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getExemptedVotersByBallot(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getExemptedVotersByBallot(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<string[]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getExemptedVotersByBallot(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public pendingBallots = {
    async callAsync(
      _voter: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber[], BigNumber[]]> {
      assert.isString('_voter', _voter);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('pendingBallots(address)', [_voter]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('pendingBallots(address)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_voter: string): string {
      assert.isString('_voter', _voter);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('pendingBallots(address)', [_voter]);
      return abiEncodedTransactionData;
    },
  };
  public getCurrentBallotStage = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getCurrentBallotStage(uint256)', [_ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getCurrentBallotStage(uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getCurrentBallotStage(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getVoteTokenCount = {
    async callAsync(
      _voter: string,
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      assert.isString('_voter', _voter);
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getVoteTokenCount(address,uint256)', [_voter, _ballotId]);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getVoteTokenCount(address,uint256)');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_voter: string, _ballotId: BigNumber): string {
      assert.isString('_voter', _voter);
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getVoteTokenCount(address,uint256)', [
        _voter,
        _ballotId,
      ]);
      return abiEncodedTransactionData;
    },
  };
  public getBallotResults = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<[BigNumber[], BigNumber[], string[]]> {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const result = abiEncoder.strictDecodeReturnValue<[BigNumber[], BigNumber[], string[]]>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getBallotResults(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getBallotDetails = {
    async callAsync(
      _ballotId: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        string[],
        BigNumber[],
      ]
    > {
      assert.isBigNumber('_ballotId', _ballotId);
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
        [
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean,
          BigNumber,
          string[],
          BigNumber[],
        ]
      >(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(_ballotId: BigNumber): string {
      assert.isBigNumber('_ballotId', _ballotId);
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getBallotDetails(uint256)', [_ballotId]);
      return abiEncodedTransactionData;
    },
  };
  public getBallotsArrayLength = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
        schemas.addressSchema,
        schemas.numberSchema,
        schemas.jsNumber,
      ]);
      if (defaultBlock !== undefined) {
        assert.isBlockParam('defaultBlock', defaultBlock);
      }
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const encodedData = self._strictEncodeArguments('getBallotsArrayLength()', []);
      const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...callData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
      );
      callDataWithDefaults.from = callDataWithDefaults.from
        ? callDataWithDefaults.from.toLowerCase()
        : callDataWithDefaults.from;

      const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
      BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
      const abiEncoder = self._lookupAbiEncoder('getBallotsArrayLength()');
      // tslint:disable boolean-naming
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
    getABIEncodedTransactionData(): string {
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('getBallotsArrayLength()', []);
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
      const abiEncodedTransactionData = self._strictEncodeArguments('isVoterAllowed(uint256,address)', [
        _ballotId,
        _voter,
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
      const self = (this as any) as AdvancedPLCRVotingCheckpointContract_3_1_0;
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
  ): Promise<AdvancedPLCRVotingCheckpointContract_3_1_0> {
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
    const iface = new ethersUtils.Interface(abi);
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
    logUtils.log(`AdvancedPLCRVotingCheckpoint successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new AdvancedPLCRVotingCheckpointContract_3_1_0(
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
            name: '_name',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_commitDuration',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_revealDuration',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_details',
            type: 'bytes32',
            indexed: false,
          },
          {
            name: '_noOfChoices',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_proposalTitle',
            type: 'string',
            indexed: false,
          },
          {
            name: '_choices',
            type: 'string',
            indexed: false,
          },
        ],
        name: 'StatutoryBallotCreated',
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
            name: '_checkpointId',
            type: 'uint256',
            indexed: true,
          },
          {
            name: '_name',
            type: 'bytes32',
            indexed: true,
          },
          {
            name: '_startTime',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_commitDuration',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_revealDuration',
            type: 'uint256',
            indexed: false,
          },
          {
            name: '_details',
            type: 'bytes32[]',
            indexed: false,
          },
          {
            name: '_noOfChoices',
            type: 'uint256[]',
            indexed: false,
          },
          {
            name: '_proposalTitle',
            type: 'string',
            indexed: false,
          },
          {
            name: '_choices',
            type: 'string',
            indexed: false,
          },
        ],
        name: 'CumulativeBallotCreated',
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
            name: '_exemptedAddresses',
            type: 'address[]',
            indexed: false,
          },
        ],
        name: 'VotersExempted',
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
            indexed: false,
          },
          {
            name: '_secretHash',
            type: 'bytes32',
            indexed: false,
          },
        ],
        name: 'VoteCommit',
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
            name: '_choices',
            type: 'uint256[]',
            indexed: false,
          },
          {
            name: '_salt',
            type: 'uint256',
            indexed: false,
          },
        ],
        name: 'VoteRevealed',
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
        ],
        name: 'BallotCancelled',
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
            name: '_exemptedAddress',
            type: 'address',
            indexed: false,
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
        constant: false,
        inputs: [
          {
            name: '_name',
            type: 'bytes32',
          },
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitle',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256',
          },
        ],
        name: 'createStatutoryBallot',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitle',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256',
          },
          {
            name: '_checkpointId',
            type: 'uint256',
          },
        ],
        name: 'createCustomStatutoryBallot',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitles',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32[]',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256[]',
          },
          {
            name: '_checkpointId',
            type: 'uint256',
          },
        ],
        name: 'createCustomCumulativeBallot',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitles',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32[]',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256[]',
          },
        ],
        name: 'createCumulativeBallot',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitles',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32[]',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256[]',
          },
          {
            name: '_checkpointId',
            type: 'uint256',
          },
          {
            name: '_exemptedAddresses',
            type: 'address[]',
          },
        ],
        name: 'createCustomCumulativeBallotWithExemption',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitles',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32[]',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256[]',
          },
          {
            name: '_exemptedAddresses',
            type: 'address[]',
          },
        ],
        name: 'createCumulativeBallotWithExemption',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitle',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256',
          },
          {
            name: '_exemptedAddresses',
            type: 'address[]',
          },
        ],
        name: 'createStatutoryBallotWithExemption',
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
          {
            name: '_startTime',
            type: 'uint256',
          },
          {
            name: '_commitDuration',
            type: 'uint256',
          },
          {
            name: '_revealDuration',
            type: 'uint256',
          },
          {
            name: '_proposalTitle',
            type: 'string',
          },
          {
            name: '_details',
            type: 'bytes32',
          },
          {
            name: '_choices',
            type: 'string',
          },
          {
            name: '_noOfChoices',
            type: 'uint256',
          },
          {
            name: '_checkpointId',
            type: 'uint256',
          },
          {
            name: '_exemptedAddresses',
            type: 'address[]',
          },
        ],
        name: 'createCustomStatutoryBallotWithExemption',
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
            name: '_secretVote',
            type: 'bytes32',
          },
        ],
        name: 'commitVote',
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
            name: '_choices',
            type: 'uint256[]',
          },
          {
            name: '_salt',
            type: 'uint256',
          },
        ],
        name: 'revealVote',
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
        ],
        name: 'cancelBallot',
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
            name: '_exemptedAddress',
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
            name: '_exemptedAddresses',
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
        name: 'getPendingInvestorToVote',
        outputs: [
          {
            name: 'pendingInvestors',
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
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getCommitedVoteCount',
        outputs: [
          {
            name: 'commitedVoteCount',
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
        name: 'getAllowedVotersByBallot',
        outputs: [
          {
            name: 'voters',
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
        name: 'getAllBallots',
        outputs: [
          {
            name: 'ballotIds',
            type: 'uint256[]',
          },
          {
            name: 'names',
            type: 'bytes32[]',
          },
          {
            name: 'totalProposals',
            type: 'uint256[]',
          },
          {
            name: 'currentStages',
            type: 'uint8[]',
          },
          {
            name: 'isCancelled',
            type: 'bool[]',
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
        name: 'getExemptedVotersByBallot',
        outputs: [
          {
            name: 'exemptedVoters',
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
            name: '_voter',
            type: 'address',
          },
        ],
        name: 'pendingBallots',
        outputs: [
          {
            name: 'commitBallots',
            type: 'uint256[]',
          },
          {
            name: 'revealBallots',
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
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getCurrentBallotStage',
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
        constant: true,
        inputs: [
          {
            name: '_voter',
            type: 'address',
          },
          {
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getVoteTokenCount',
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
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getBallotResults',
        outputs: [
          {
            name: 'choicesWeighting',
            type: 'uint256[]',
          },
          {
            name: 'noOfChoicesInProposal',
            type: 'uint256[]',
          },
          {
            name: 'voters',
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
            name: '_ballotId',
            type: 'uint256',
          },
        ],
        name: 'getBallotDetails',
        outputs: [
          {
            name: 'name',
            type: 'bytes32',
          },
          {
            name: 'totalSupplyAtCheckpoint',
            type: 'uint256',
          },
          {
            name: 'checkpointId',
            type: 'uint256',
          },
          {
            name: 'startTime',
            type: 'uint256',
          },
          {
            name: 'commitDuration',
            type: 'uint256',
          },
          {
            name: 'revealDuration',
            type: 'uint256',
          },
          {
            name: 'totalProposals',
            type: 'uint256',
          },
          {
            name: 'totalVoters',
            type: 'uint256',
          },
          {
            name: 'commitedVoteCount',
            type: 'uint256',
          },
          {
            name: 'isCancelled',
            type: 'bool',
          },
          {
            name: 'currentStage',
            type: 'uint8',
          },
          {
            name: 'proposalDetails',
            type: 'bytes32[]',
          },
          {
            name: 'proposalChoicesCounts',
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
        name: 'getBallotsArrayLength',
        outputs: [
          {
            name: 'length',
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
        constant: true,
        inputs: [],
        name: 'getInitFunction',
        outputs: [
          {
            name: 'initFunction',
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
            name: 'permissions',
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
    super(
      'AdvancedPLCRVotingCheckpoint',
      AdvancedPLCRVotingCheckpointContract_3_1_0.ABI(),
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

export function isAdvancedPLCRVotingCheckpointContract_3_1_0(
  contract: any,
): contract is AdvancedPLCRVotingCheckpointContract_3_1_0 {
  return isEqual(AdvancedPLCRVotingCheckpointContract_3_1_0.ABI(), contract.abi);
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
