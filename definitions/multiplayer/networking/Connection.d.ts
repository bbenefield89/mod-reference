import { ConnectionState } from "Enums";
import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
export declare abstract class Connection implements IConnection {
    playerIdentifier: string;
    matchmakingIdentifier: string;
    pid?: number;
    queuedPackets: IPacket[];
    buffer?: Uint8Array;
    bufferOffset?: number;
    bufferPacketId?: number;
    lastPacketNumberSent?: number;
    lastPacketNumberReceived?: number;
    protected _matchmakingInfo: IMatchmakingInfo | undefined;
    private _state;
    private _timeoutId;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined);
    addTimeout(milliseconds: number, callback: () => void): void;
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    close(): void;
    abstract isConnected(): boolean;
    abstract send(data: ArrayBuffer): void;
    abstract processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private _clearTimeout();
}
