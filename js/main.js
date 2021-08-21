
// memory cost
document.getElementById('memoryBtn-1').addEventListener('click', function () {
    //8GB Cost
    const memoryCost = document.getElementById('extraMemoryCost');
    memoryCost.innerText = 0;
    total();
})

document.getElementById('memoryBtn-2').addEventListener('click', function () {
    // 16GB Cost
    const memoryCost = document.getElementById('extraMemoryCost');
    memoryCost.innerText = 180;
    total();
})


// storage
document.getElementById('storageBtn-1').addEventListener('click', function () {

    // 256GB SSD
    const storage = document.getElementById('storageCost');
    storage.innerText = 0;
    total();
})
document.getElementById('storageBtn-2').addEventListener('click', function () {

    // 512GB SSD
    const storage = document.getElementById('storageCost');
    storage.innerText = 100;
    total();
})
document.getElementById('storageBtn-3').addEventListener('click', function () {

    // 1TB SSD
    const storage = document.getElementById('storageCost');
    storage.innerText = 180;
    total();
})

/* delivery getElement */
const delivery = document.getElementById('deliveryCost');

//delivery
document.getElementById('deliveryBtn-1').addEventListener('click', function () {

    //free delivery
    const delivery = document.getElementById('deliveryCost');
    delivery.innerText = 0;
    total();
})
document.getElementById('deliveryBtn-2').addEventListener('click', function () {

    //premium delivery
    const delivery = document.getElementById('deliveryCost');
    delivery.innerText = 20;
    total();
})

/* total getElement */
let priceTotal = document.getElementById('totalPrice');
// total price
function total() {

    const memoryCost = document.getElementById('extraMemoryCost');
    const storage = document.getElementById('storageCost');
    let priceTotal = document.getElementById('totalPrice');
    const bestAmount = document.getElementById('bestPrice');

    const bestAmountText = parseInt(bestAmount.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storage.innerText);
    const deliveryPrice = parseInt(delivery.innerText);

    // price update

    const sum = memoryPrice + storagePrice + bestAmountText + deliveryPrice;
    priceTotal.innerText = sum;


    // grandTotal
    document.getElementById('subTotal').innerText = sum;

}

// cuponCode
document.getElementById('cuponApply').addEventListener('click', function () {
    let grandTotal = document.getElementById('subTotal');
    let totalAmount = Number(grandTotal.innerText)
    let cupon = document.getElementById('cuponInput');
    let cuponValue = cupon.value;



    if (cuponValue == 'stevekaku') {
        let discount = (totalAmount / 100) * 20;
        grandTotal.innerText = totalAmount - discount;
    }
    cupon.value = '';
})