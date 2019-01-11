let db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

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

async function getItemByID(upc) {
    let item = null;
    let docRef = db.collection("inventory").doc(upc.toString());
    await docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Doc Retrieved");
            document = doc.data();
            return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    return item;
}

async function test(docRef) {
   await docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Doc Retrieved");
            return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
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