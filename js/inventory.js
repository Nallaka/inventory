var inventory = firebase.database();

function addItem(name, upc, description, binNumber, consumable, stock, onHand) {
  inventory.ref('inventory/' + upc.toString()).set(createItem(name, upc, description, binNumber, consumable, stock, onHand))
}

function removeItem(upc) {
  inventory.ref('inventory/' + upc.toString()).remove()
}

function getItemByID(upc) {
  var item = null;
  inventory.ref('inventory/' + upc.toString() + "/").on('value',
      function (dataSnapshot) {
        console.log(dataSnapshot.val());
        item = dataSnapshot.val()
      });

  return item;
}

function checkOutItemByID() {

}

function checkOutItemByName() {

}