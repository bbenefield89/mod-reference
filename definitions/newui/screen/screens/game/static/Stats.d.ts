import { UiApi } from "newui/INewUi";
import QuadrantElement, { Quadrant } from "newui/screen/screens/game/element/QuadrantElement";
import { IPlayer } from "player/IPlayer";
export default class Stats extends QuadrantElement {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private readonly player;
    constructor(uiApi: UiApi, player: IPlayer);
    private refresh();
    /**
     * Returns an object containing iterables for all stats that exist on the player and have a description,
     * separated by how a given stat should be displayed
     */
    private getStatsIterables();
    /**
     * Returns how the stat on an entity should be displayed.
     */
    private getStatDisplayType(entity, stat);
}