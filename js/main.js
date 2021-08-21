/* memory getElement */
const memoryCost = document.getElementById('extraMemoryCost');

// memory cost
document.getElementById('memoryBtn-1').addEventListener('click', function () {
    //8GB Cost
    memoryCost.innerText = 0;
    total();
})

document.getElementById('memoryBtn-2').addEventListener('click', function () {
    // 16GB Cost
    memoryCost.innerText = 180;
    total();
})

/* storage getElement */
const storage = document.getElementById('storageCost');

// storage
document.getElementById('storageBtn-1').addEventListener('click', function () {

    // 256GB SSD
    storage.innerText = 0;
    total();
})
document.getElementById('storageBtn-2').addEventListener('click', function () {

    // 512GB SSD
    storage.innerText = 100;
    total();
})
document.getElementById('storageBtn-3').addEventListener('click', function () {

    // 1TB SSD
    storage.innerText = 180;
    total();
})

/* delivery getElement */
const delivery = document.getElementById('deliveryCost');

//delivery
document.getElementById('deliveryBtn-1').addEventListener('click', function () {

    //free delivery
    delivery.innerText = 0;
    total();
})
document.getElementById('deliveryBtn-2').addEventListener('click', function () {

    //premium delivery
    delivery.innerText = 20;
    total();
})

/* total getElement */
const priceTotal = document.getElementById('totalPrice');
// total price
function total() {

    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storage.innerText);
    const deliveryPrice = Number(delivery.innerText);

    // price update
    const price = Number(priceTotal.innerText);

    // console.log(memoryPrice + storagePrice + price);
    const sum = memoryPrice + storagePrice + deliveryPrice + price;
    priceTotal.innerText = sum;
}

// cuponCode
document.getElementById('cuponApply').addEventListener('click', function () {

    const cupon = document.getElementById('cuponInput');
})

// grandTotal
