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
    console.log(getItemByID(upc).name)
}

function getItemUpc(upc) {
    console.log(getItemByID(upc).upc)
}

function getItemDescription(upc) {
    console.log(getItemByID(upc).description)
}

function getItemBinNumber(upc) {
    console.log(getItemByID(upc).binNumber)
}

function getItemTotalStock(upc) {
    console.log(getItemByID(upc).totalStock)
}

function getItemInStore(upc) {
    console.log(getItemByID(upc).inStore)
}

function getItemOnHand(upc) {
    console.log(getItemByID(upc).onHand)
}

function isItemConsumable(upc) {
    console.log(getItemByID(upc).consumable)
}