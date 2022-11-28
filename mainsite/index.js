import { foodItem } from './dessert.js'

function displayItems() {
    var biryani = document.getElementById('biryani');
    var paneer = document.getElementById('paneer');;
    var chicken = document.getElementById('chicken');
    var vegetable = document.getElementById('vegetable');
    var chinese = document.getElementById('chinese');
    var southIndian = document.getElementById('south-indian');

    const biryaniData = foodItem.filter((item) => item.category == 'biryani');
    const chickenData = foodItem.filter((item) => item.category == 'chicken');
    const PaneerData = foodItem.filter((item) => item.category == 'paneer');
    const vegetableData = foodItem.filter((item) => item.category == 'vegetable');
    const chineseData = foodItem.filter((item) => item.category == 'chinese');
    const southData = foodItem.filter((item) => item.category == 'south indian');
    biryaniData.map(item => {

        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);

    })


    chickenData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard)

    })

    PaneerData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard)

    })

    vegetableData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);


        vegetable.appendChild(itemCard)

    })

    chineseData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);


        chinese.appendChild(itemCard)

    })

    southData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard)

    })
}
displayItems();


const vegData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
console.log(vegData);

function selectTaste() {
    var categoryList = document.getElementById('category-list');

    vegData.map(item => {
        console.log(item);
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.category;
        listName.setAttribute('href', '#' + item.category)

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        categoryList.appendChild(listCard);

    })
    var button = document.createElement('button');
    button.innerHTML = "Go to Cart";
    button.setAttribute('class', 'cart-btn');
    button.setAttribute('id', 'cart-plus');
    button.addEventListener('click', cartToggle);
    categoryList.appendChild(button);
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
})

var cartData = [];
function addToCart() {

    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);

    var index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
    }
    else if (index > -1) {
        alert("Added to cart!");
    }

    document.getElementById('cart-plus').innerText =
        ' ' + cartData.length + ' Items';
    totalAmount();
    cartItems();
}


function cartItems() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item => {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = ' - ';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = ' + ';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem)
    })
    console.log("item added to cart");
}


function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity += 1;

    currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;
    totalAmount()
    cartItems()
    calculateTotal()
}

var currPrice = 0;
function decrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == itemToInc);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice * decObj.quantity;
    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerText = 'Cart';
        if (cartData.length < 1 && flag) {
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
    calculateTotal()
}

function totalAmount() {
    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('go-to-menu-button').addEventListener('click', cartToggle);

var flag = false;
function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
        console.log(flag)
    }
    else {
        alert("Currently no item in cart!");
    }
}


document.getElementById('add-address').addEventListener('click', addAddress);
function addAddress() {
    var address = prompt('Enter your address', '');
    if (address) {
        document.getElementById('add-address').innerText = ' ' + address;
    }
    else {
        alert("Address not added")
    }
}

document.getElementById('checkout-btn').addEventListener('click', paymentPortalToggle);
function paymentPortalToggle() {
    calculateTotal();
    document.getElementById('payment-page').classList.toggle('payment-toggle');
    console.log('payment portal toggled');
}
function calculateTotal() {
    var sum = 0;
    var del;
    cartData.map(item => {
        sum += item.price;
    });
    document.getElementById('item-count').innerText = 'Item Count : ' + cartData.length;
    document.getElementById('item-payment').innerText = 'Price : $' + sum;
    if (sum >= 40) {
        document.getElementById('delivery-charge').innerText = 'Delivery Charges : $0';
        del = 0;
    } else {
        document.getElementById('delivery-charge').innerText = 'Delivery Charges : $10';
        del = 10;
    }
    var total = sum + del;
    document.getElementById('total-payment').innerHTML = 'Total payment : $' + total;
}

document.getElementById('Pay').addEventListener('click', pay);
function pay() {
    if(cartData.length < 1){
        alert('There is no items in cart');
    }else{
        alert('Thanks for ordering From Candyland!!')
        paymentPortalToggle();
        cartToggle();
        cartData = [];
        var tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';
        document.getElementById('cart-plus').innerText = 'Cart';
        var biryani = document.getElementById('biryani');
        biryani.innerHTML='<p id="category-name">Biryani</p>';
        var paneer = document.getElementById('paneer');
        paneer.innerHTML='<p id="category-name">Chicken Delicious</p>';
        var chicken = document.getElementById('chicken');
        chicken.innerHTML='<p id="category-name">Paneer Mania</p>';
        var vegetable = document.getElementById('vegetable');
        vegetable.innerHTML='<p id="category-name">Pure Veg Dishes</p>';
        var chinese = document.getElementById('chinese');
        chinese.innerHTML='<p id="category-name">Chinese Corner</p>';
        var southIndian = document.getElementById('south-indian');
        southIndian.innerHTML='<p id="category-name">South Indian</p>';
        displayItems();
        document.querySelectorAll('.add-to-cart').forEach(item => {
            item.addEventListener('click', addToCart)
        })
    }
}