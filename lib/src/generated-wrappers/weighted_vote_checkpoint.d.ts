import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type WeightedVoteCheckpointEventArgs = WeightedVoteCheckpointBallotCreatedEventArgs | WeightedVoteCheckpointVoteCastEventArgs | WeightedVoteCheckpointBallotStatusChangedEventArgs | WeightedVoteCheckpointChangedBallotExemptedVotersListEventArgs | WeightedVoteCheckpointChangedDefaultExemptedVotersListEventArgs | WeightedVoteCheckpointPauseEventArgs | WeightedVoteCheckpointUnpauseEventArgs;
export declare enum WeightedVoteCheckpointEvents {
    BallotCreated = "BallotCreated",
    VoteCast = "VoteCast",
    BallotStatusChanged = "BallotStatusChanged",
    ChangedBallotExemptedVotersList = "ChangedBallotExemptedVotersList",
    ChangedDefaultExemptedVotersList = "ChangedDefaultExemptedVotersList",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface WeightedVoteCheckpointBallotCreatedEventArgs extends DecodedLogArgs {
    _ballotId: BigNumber;
    _checkpointId: BigNumber;
    _startTime: BigNumber;
    _endTime: BigNumber;
    _noOfProposals: BigNumber;
    _quorumPercentage: BigNumber;
}
export interface WeightedVoteCheckpointVoteCastEventArgs extends DecodedLogArgs {
    _voter: string;
    _weight: BigNumber;
    _ballotId: BigNumber;
    _proposalId: BigNumber;
}
export interface WeightedVoteCheckpointBallotStatusChangedEventArgs extends DecodedLogArgs {
    _ballotId: BigNumber;
    _isActive: boolean;
}
export interface WeightedVoteCheckpointChangedBallotExemptedVotersListEventArgs extends DecodedLogArgs {
    _ballotId: BigNumber;
    _voter: string;
    _exempt: boolean;
}
export interface WeightedVoteCheckpointChangedDefaultExemptedVotersListEventArgs extends DecodedLogArgs {
    _voter: string;
    _exempt: boolean;
}
export interface WeightedVoteCheckpointPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface WeightedVoteCheckpointUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class WeightedVoteCheckpointContract extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeDefaultExemptedVotersListMulti: {
        sendTransactionAsync(_voters: string[], _exempts: boolean[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_voters: string[], _exempts: boolean[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_voters: string[], _exempts: boolean[]): string;
        callAsync(_voters: string[], _exempts: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getDefaultExemptionVotersList: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_tokenContract: string): string;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeDefaultExemptedVotersList: {
        sendTransactionAsync(_voter: string, _exempt: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_voter: string, _exempt: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_voter: string, _exempt: boolean): string;
        callAsync(_voter: string, _exempt: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    createBallot: {
        sendTransactionAsync(_duration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_duration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_duration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber): string;
        callAsync(_duration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createCustomBallot: {
        sendTransactionAsync(_checkpointId: BigNumber, _quorumPercentage: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _noOfProposals: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_checkpointId: BigNumber, _quorumPercentage: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _noOfProposals: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_checkpointId: BigNumber, _quorumPercentage: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _noOfProposals: BigNumber): string;
        callAsync(_checkpointId: BigNumber, _quorumPercentage: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _noOfProposals: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    castVote: {
        sendTransactionAsync(_ballotId: BigNumber, _proposalId: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _proposalId: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _proposalId: BigNumber): string;
        callAsync(_ballotId: BigNumber, _proposalId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeBallotExemptedVotersList: {
        sendTransactionAsync(_ballotId: BigNumber, _voter: string, _exempt: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _voter: string, _exempt: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string, _exempt: boolean): string;
        callAsync(_ballotId: BigNumber, _voter: string, _exempt: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeBallotExemptedVotersListMulti: {
        sendTransactionAsync(_ballotId: BigNumber, _voters: string[], _exempts: boolean[], txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _voters: string[], _exempts: boolean[], factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _voters: string[], _exempts: boolean[]): string;
        callAsync(_ballotId: BigNumber, _voters: string[], _exempts: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isVoterAllowed: {
        callAsync(_ballotId: BigNumber, _voter: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    changeBallotStatus: {
        sendTransactionAsync(_ballotId: BigNumber, _isActive: boolean, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _isActive: boolean, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _isActive: boolean): string;
        callAsync(_ballotId: BigNumber, _isActive: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getBallotResults: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber, boolean, BigNumber]>;
    };
    getSelectedProposal: {
        callAsync(_ballotId: BigNumber, _voter: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getBallotDetails: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean]>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyToken: string): Promise<WeightedVoteCheckpointContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=weighted_vote_checkpoint.d.ts.map