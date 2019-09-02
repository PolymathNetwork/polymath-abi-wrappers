import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
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
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    changeDefaultExemptedVotersListMulti: {
        sendTransactionAsync(_voters: string[], _exempts: boolean[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_voters: string[], _exempts: boolean[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_voters: string[], _exempts: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_voters: string[], _exempts: boolean[]): string;
    };
    ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getDefaultExemptionVotersList: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    changeDefaultExemptedVotersList: {
        sendTransactionAsync(_voter: string, _exempt: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_voter: string, _exempt: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_voter: string, _exempt: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_voter: string, _exempt: boolean): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    createBallot: {
        sendTransactionAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber): string;
    };
    createCustomBallot: {
        sendTransactionAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_commitDuration: BigNumber, _revealDuration: BigNumber, _noOfProposals: BigNumber, _quorumPercentage: BigNumber, _checkpointId: BigNumber, _startTime: BigNumber): string;
    };
    commitVote: {
        sendTransactionAsync(_ballotId: BigNumber, _secretVote: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _secretVote: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ballotId: BigNumber, _secretVote: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _secretVote: string): string;
    };
    revealVote: {
        sendTransactionAsync(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _choiceOfProposal: BigNumber, _salt: BigNumber): string;
    };
    changeBallotExemptedVotersList: {
        sendTransactionAsync(_ballotId: BigNumber, _voter: string, _exempt: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _voter: string, _exempt: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ballotId: BigNumber, _voter: string, _exempt: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string, _exempt: boolean): string;
    };
    changeBallotExemptedVotersListMulti: {
        sendTransactionAsync(_ballotId: BigNumber, _voters: string[], _exempts: boolean[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _voters: string[], _exempts: boolean[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ballotId: BigNumber, _voters: string[], _exempts: boolean[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _voters: string[], _exempts: boolean[]): string;
    };
    isVoterAllowed: {
        callAsync(_ballotId: BigNumber, _voter: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string): string;
    };
    changeBallotStatus: {
        sendTransactionAsync(_ballotId: BigNumber, _isActive: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_ballotId: BigNumber, _isActive: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_ballotId: BigNumber, _isActive: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _isActive: boolean): string;
    };
    getCurrentBallotStage: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_ballotId: BigNumber): string;
    };
    getBallotResults: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[], BigNumber, boolean, BigNumber]>;
        getABIEncodedTransactionData(_ballotId: BigNumber): string;
    };
    getSelectedProposal: {
        callAsync(_ballotId: BigNumber, _voter: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_ballotId: BigNumber, _voter: string): string;
    };
    getBallotDetails: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean]>;
        getABIEncodedTransactionData(_ballotId: BigNumber): string;
    };
    getBallotCommitRevealDuration: {
        callAsync(_ballotId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_ballotId: BigNumber): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<PLCRVotingCheckpointContract>;
    /**
     * @returns The contract ABI
     */
    static ABI(): ContractAbi;
    /**
     * To add ABIs to the decoder to decode every event log emmited
     */
    addABItoDecoder(abiArray: AbiDefinition[], contractName?: string): void;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=p_l_c_r_voting_checkpoint.d.ts.map