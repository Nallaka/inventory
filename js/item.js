function createItem(name, upc, description, binNumber, consumable, stock, onHand) {
  return {
    name: name,
    upc: upc,
    description: description,
    binNumber: binNumber,
    consumable: consumable,
    stock: stock,
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

function getItemStock(upc) {
  console.log(getItemByID(upc).stock)
}

function getItemOnHand(upc) {
  console.log(getItemByID(upc).onHand)
}

function isItemConsumable(upc) {
  console.log(getItemByID(upc).consumable)
}