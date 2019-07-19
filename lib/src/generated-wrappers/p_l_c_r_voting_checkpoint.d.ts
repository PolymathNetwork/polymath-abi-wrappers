import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type PLCRVotingCheckpointEventArgs = PLCRVotingCheckpointVoteCommitEventArgs | PLCRVotingCheckpointVoteRevealedEventArgs | PLCRVotingCheckpointBallotCreatedEventArgs | PLCRVotingCheckpointBallotStatusChangedEventArgs | PLCRVotingCheckpointChangedBallotExemptedVotersListEventArgs | PLCRVotingCheckpointChangedDefaultExemptedVotersListEventArgs | PLCRVotingCheckpointPauseEventArgs | PLCRVotingCheckpointUnpauseEventArgs;
export declare enum PLCRVotingCheckpointEvents {
    VoteCommit = "VoteCommit",
    VoteRevealed = "VoteRevealed",
    BallotCreated = "BallotCreated",
    BallotStatusChanged = "BallotStatusChanged",
    ChangedBallotExemptedVotersList = "ChangedBallotExemptedVotersList",
    ChangedDefaultExemptedVotersList = "ChangedDefaultExemptedVotersList",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface PLCRVotingCheckpointVoteCommitEventArgs extends DecodedLogArgs {
    _voter: string;
    _weight: BigNumber;
    _ballotId: BigNumber;
    _secretVote: string;
}
export interface PLCRVotingCheckpointVoteRevealedEventArgs extends DecodedLogArgs {
    _voter: string;
    _weight: BigNumber;
    _ballotId: BigNumber;
    _choiceOfProposal: BigNumber;
    _salt: BigNumber;
    _secretVote: string;
}
export interface PLCRVotingCheckpointBallotCreatedEventArgs extends DecodedLogArgs {
    _ballotId: BigNumber;
    _checkpointId: BigNumber;
    _startTime: BigNumber;
    _commitDuration: BigNumber;
    _revealDuration: BigNumber;
    _noOfProposals: BigNumber;
    _quorumPercentage: BigNumber;
}
export interface PLCRVotingCheckpointBallotStatusChangedEventArgs extends DecodedLogArgs {
    _ballotId: BigNumber;
    _newStatus: boolean;
}
export interface PLCRVotingCheckpointChangedBallotExemptedVotersListEventArgs extends DecodedLogArgs {
    _ballotId: BigNumber;
    _voter: string;
    _exempt: boolean;
}
export interface PLCRVotingCheckpointChangedDefaultExemptedVotersListEventArgs extends DecodedLogArgs {
    _voter: string;
    _exempt: boolean;
}
export interface PLCRVotingCheckpointPauseEventArgs extends DecodedLogArgs {
    account: string;
}
export interface PLCRVotingCheckpointUnpauseEventArgs extends DecodedLogArgs {
    account: string;
}
export declare class PLCRVotingCheckpointContract extends BaseContract {
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
    createBallot: {
        sendTransactionAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber): string;
        callAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    createCustomBallot: {
        sendTransactionAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber): string;
        callAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    commitVote: {
        sendTransactionAsync(_ballotId: BigNumber, _secretVote: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _secretVote: string, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _secretVote: string): string;
        callAsync(_ballotId: BigNumber, _secretVote: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    revealVote: {
        sendTransactionAsync(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber, factor?: number | undefined, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber): string;
        callAsync(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
    getCurrentBallotStage: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
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
    getBallotCommitRevealDuration: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<PLCRVotingCheckpointContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=p_l_c_r_voting_checkpoint.d.ts.map