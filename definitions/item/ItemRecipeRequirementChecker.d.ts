import { IContainer, IItem, IItemArray, IRecipe } from "item/IItem";
import IPlayer from "player/IPlayer";
export default class ItemRecipeRequirementChecker {
    private readonly player;
    private readonly recipe;
    private readonly trackItems;
    itemBaseComponent: IItem;
    itemComponentsRequired: IItemArray;
    itemComponentsConsumed: IItemArray;
    numComponentsNeeded: number;
    totalComponentsNeeded: number;
    private readonly baseComponent;
    private readonly components;
    constructor(player: IPlayer, recipe: IRecipe, trackItems: boolean);
    amountNeededForComponent(componentIndex: number): number;
    requirementsMet(): boolean;
    /**
     * Looks inside the container and its subcontainers.
     * @param container The container
     * @returns true if the recipe's requirements are satisfied by items in the container.
     */
    process(container: IContainer, allowProtectedCraftingItems?: boolean): boolean;
    isDiscovered(): boolean;
    private processItem(item);
}
