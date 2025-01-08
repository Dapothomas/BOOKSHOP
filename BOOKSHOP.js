if(document.readyState =='loading') {
    document.addEventListener('DOMContentLoaded', ready)
}   else {
    ready()
}
var addToCartButtons = document.querySelector('.cart')


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quant')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

   
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()

}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){

    }
    updateCartTotal()
}

const cartRows = document.querySelector('.cart-rows')
const test = document.querySelector('.test-add')


let items = [
    {
        id: 1,
        price: '$13.99',
        shopItem:"'Harry Potter and The Philosopher's Stone",
        imageSrc: 'img'
    },
    {
        id: 2,
        price: '$13.99',
        shopItem:"'Harry Potter and The Philosopher's Stone",
        imageSrc: 'img'
    },
    {
        id: 3,
        price: '$13.99',
        shopItem:"'Harry Potter and The Philosopher's Stone",
        imageSrc: 'img'
    },
   
]

addToCartButtons.addEventListener('click' , (event)=>{
    
     var button = event.target
    var shopItem = button.parentElement.previousElementSibling.innerText
    var price = button.previousElementSibling.innerText
    var imageSrc = button.parentElement.parentElement.previousElementSibling.src
    console.log(shopItem, price, imageSrc)
   
    items = [...items , {shopItem , price , imageSrc}]
    console.log(items)
    console.log( {shopItem , price , imageSrc})
    items.map((val)=>{
        cartRows.innerHTML += `

        <div class="cart-flex2">
        <div class="cart-item">
            <img src="1.jpg">
            <p class="itemtxt">${val.shopItem}</p>
        </div>
            <p class="cart-price"> ${val.price} </p>
        <div class="quantfl">
            <input class="cart-quant" type="number" value="2">
            <button class="btn-danger">Remove</button>
        </div>
    </div>
    
        `
    })
   
})





function addToCartClicked(event) {
    console.log(event)
    
}
function addItemToCart(shopItem, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.innerText = shopItem
    var cartItems = document.getElementsByClassName('cart-flex2')[0]
    cartItems.append(cartRow)
}

function updateCartTotal() {
    var cartItemContatiner = document.getElementsByClassName('cart-rows')[0]
    var cartRows = cartItemContatiner.getElementsByClassName('cart-flex2')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quant')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
