let db = firebase.firestore();

function getItemRef(upc) {
    return db.collection("inventory").doc(upc.toString())
}

function addItem(name, upc, description, binNumber, consumable, totalStock, inStore, onHand) {
    getItemRef(upc).set(createItem(name, upc, description, binNumber, consumable, totalStock, inStore, onHand))
        .then(function() {
            console.log("Item " + name + " Added Successfully")
        })
        .catch(function (error) {
            console.error("Error Adding Item: ", error)
        })
}

function removeItem(upc) {
    getItemRef(upc).remove()
}

function getItemByID(upc) {
    let item = null;
    let itemRef = getItemRef(upc.toString());

    itemRef.get().then(function(doc) {
        if(doc.exists) {
            item = doc.data();
            console.log(item)
        } else {
            console.error("Item Does not Exist")
        }
    }).catch(function (error) {
        console.error("Error Retrieving Item: " + error)
    });

    return item;
}

function itemExists(upc) {
    return getItemByID(upc) != null
}

function checkOutItem(upc, countToCheckOut) {
    let item = getItemByID(upc);

    if (countToCheckOut > item.inStore) {
        console.log('ERROR: Checkout FAILED - Items inStock not sufficient');
        return false;
    } else {
        getItemRef(upc, 'inStock/').set(item.inStore - countToCheckOut);
        getItemRef(upc, 'onHand/').set(item.onHand + countToCheckOut);
        return true;
    }
}

function checkInItem(upc, countToCheckIn) {
    let item = getItemByID(upc);

    if (countToCheckIn > item.onHand) {
        console.log('ERROR: Check-in FAILED - Items onHand not sufficient');
        return false;
    } else {
        getItemRef(upc, 'inStock/').set(item.inStore + countToCheckIn);
        getItemRef(upc, 'onHand/').set(item.onHand - countToCheckIn);
        return true;
    }
}