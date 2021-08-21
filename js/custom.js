// unified Memory
function getMemoryPrice(addExtra) {
    let memoryPrice = document.getElementById('memory-cost');
    if (addExtra == false) {
        memoryPrice.innerText = '0';

    }
    else {
        memoryPrice.innerText = '180';

    }
}

//storage function
function getStoragePrice(isAddStorage) {
    let storageField = document.getElementById('storage-cost');
    if (isAddStorage == false) {
        storageField.innerText = '0';
    }
    else if (isAddStorage == true) {
        storageField.innerText = '100';
    }
    else {
        storageField.innerText = '180';
    }
}

//Choose Delivery function
function getDeliveryCharge(isAddDelivery) {
    let deliveryCharge = document.getElementById('delivery-cost');
    if (isAddDelivery == false) {
        deliveryCharge.innerText = '0';
    }
    else {
        deliveryCharge.innerText = '20';
    }

}

//Total Price

function updateTotal(memoryPrice = "0", storagePrice = "0", deliveryCharge = "0") {

    const total = document.getElementById('total');
    const memoryCost = parseInt(memoryPrice.innerText);
    const storageCost = parseInt(storagePrice.innerText);
    const deliveryCost = parseInt(deliveryCharge.innerText);
    const totalCost = 1299 + memoryCost + storageCost + deliveryCost;
    total.innerText = totalCost;
}


//Handle Memory
document.getElementById('memory-one').addEventListener('click', function () {
    getMemoryPrice(false);
    updateTotal();

})
document.getElementById('memory-two').addEventListener('click', function () {
    getMemoryPrice(true);
    updateTotal();

})
//Handle Storage part
document.getElementById('storage-one').addEventListener('click', function () {
    getStoragePrice(false);
    updateTotal();

});
document.getElementById('storage-two').addEventListener('click', function () {
    getStoragePrice(true);
    updateTotal();

});
document.getElementById('storage-three').addEventListener('click', function () {
    getStoragePrice();
    updateTotal();

});

//Handle Choose delivery part
document.getElementById('delivery').addEventListener('click', function () {
    getDeliveryCharge(false);
    updateTotal();
})
document.getElementById('express-delivery').addEventListener('click', function () {
    getDeliveryCharge(true);
    updateTotal();

});

