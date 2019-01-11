function createItem(name, upc, description, binNumber, consumable, totalStock, inStore, onHand) {
    return {
        name: name,
        upc: upc,
        description: description,
        binNumber: binNumber,
        consumable: consumable,
        totalStock: totalStock,
        inStore: inStore,
        onHand: onHand
    }
}

function getItemName(upc) {
    console.log(getItemByID(upc.toString()).name);
    return getItemByID(upc.toString())
}

function getItemUpc(upc) {
    console.log(getItemByID(upc.toString()).upc);
    return getItemByID(upc.toString()).upc;
}

function getItemDescription(upc) {
    console.log(getItemByID(upc.toString()).description);
    return getItemByID(upc.toString()).description;
}

function getItemBinNumber(upc) {
    console.log(getItemByID(upc.toString()).binNumber);
    return getItemByID(upc.toString()).binNumber;
}

function getItemTotalStock(upc) {
    console.log(getItemByID(upc.toString()).totalStock);
    return getItemByID(upc.toString()).totalStock;
}

function getItemInStore(upc) {
    console.log(getItemByID(upc.toString()).inStore);
    return getItemByID(upc.toString()).inStore;
}

function getItemOnHand(upc) {
    console.log(getItemByID(upc.toString()).onHand);
    return getItemByID(upc.toString()).onHand;
}

function isItemConsumable(upc) {
    console.log(getItemByID(upc.toString()).consumable);
    return getItemByID(upc.toString()).consumable
}