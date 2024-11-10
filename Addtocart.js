const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood)

function loadFood()
{
    loadContent(); 
}

function loadContent()
{
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((btn)=>{
        btn.addEventListener('change',changeQty);
    });

    let cartBtns=document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addcart);
    });

    updateTotal();
}

function removeItem(){
    if(confirm('Are your Sure to Remove'))
{
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent()
}
}

function changeQty()
{
    if(isNaN(this.value)|| this.value<1){
        this.value=1;
    }
    loadContent();x
}

let itemList=[];

function addcart()
{
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let imgsrc=food.querySelector('.food-img').src;
    let newProduct={title,price,imgsrc} 
    if(itemList.find((el)=>el.title==newProduct.title))
{
    alert("Product Already added in Cart");
    return;
}
else{
    itemList.push(newProduct);
}
    let newProductElement= createCartProduct(title,price,imgsrc);
    let element=document.createElement('div');
    element.innerHTML=newProductElement;
    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
 } 

function createCartProduct(title,price,imgsrc){
    return `
    <div class="cart-box">
            <img src="${imgsrc}" alt="img" class="cart-img" style="width: 100px; height: 100px;">
            <div class="detail-box">
                <div class="cart-food-title">${title}</div>
                <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <ion-icon name="trash-outline" class="cart-remove"></ion-icon>
        </div>
    `;
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-box');  // Corrected 'cartIteams' to 'cartItems'
    const totalValue = document.querySelector('.total-price');

        let total = 0;

     cartItems.forEach(product => {
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
    let qty = product.querySelector('.cart-quantity').value;
    total += (price * qty);
    product.querySelector('.cart-amt').innerText = "Rs. " + (price * qty);
});

totalValue.innerHTML = 'Rs. ' + total;
const cartCount=document.querySelector('.cart-count');
let count=itemList.length;
cartCount.innerHTML=count;
}

