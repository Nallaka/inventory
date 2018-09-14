var inventory = firebase.database();

function getInvRef(upc, children) {
    return inventory.ref('inventory/' + upc.toString() + '/' + children)
}

function addItem(name, upc, description, binNumber, consumable, totalStock, inStock, onHand) {
    getInvRef(upc, '').set(createItem(name, upc, description, binNumber, consumable, totalStock, inStock, onHand))
}

function removeItem(upc) {
    getInvRef(upc, '').remove()
}

function getItemByID(upc) {
    var item = null;
    getInvRef(upc, '').on('value',
        function (dataSnapshot) {
            console.log(dataSnapshot.val());
            item = dataSnapshot.val()
        });

    return item;
}

function checkOutItem(upc, countToCheckOut) {
    var item = getItemByID(upc);

    if (countToCheckOut > item.inStock) {
        console.log('ERROR: Checkout FAILED - Items inStock not sufficient');
        return false;
    } else {
        getInvRef(upc, 'inStock/').set(item.inStock - countToCheckOut);
        getInvRef(upc, 'onHand/').set(item.onHand + countToCheckOut);
        return true;
    }
}

function checkInItem(upc, countToCheckIn) {
    var item = getItemByID(upc);

    if (countToCheckIn > item.onHand) {
        console.log('ERROR: Check-in FAILED - Items onHand not sufficient');
        return false;
    } else {
        getInvRef(upc, 'inStock/').set(item.inStock + countToCheckIn);
        getInvRef(upc, 'onHand/').set(item.onHand - countToCheckIn);
        return true;
    }
}