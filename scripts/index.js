let totalPrice = 0;
function handleClick(target){
    const selectedItemContainer = document.getElementById('selected-items')
    const purchaseItem =target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = purchaseItem;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    document.getElementById('total').innerText = totalPrice.toFixed(2);
    const purchaseButton = document.getElementById('purchase-button');
    if (totalPrice > 0) {
        purchaseButton.removeAttribute("disabled");
    }
    else {
        purchaseButton.setAttribute("disabled", "disabled");
    }
    const applyButton = document.getElementById('apply-button');
    if (totalPrice >= 200) {
        applyButton.removeAttribute("disabled");
    }
    else {
        applyButton.setAttribute("disabled", "disabled");
    }
    document.getElementById('apply-button').addEventListener('click', applyCoupon);
    function applyCoupon() {
        const couponInput = document.getElementById('coupon-code');
        const couponCode = couponInput.value.trim();
    
        if (couponCode === 'SELL200' && totalPrice >= 200) {
            discount = totalPrice * 0.2;
            document.getElementById('discount-amount').innerText = discount.toFixed(2);
            finalTotal();
        }
        else{
            alert('Please insert valid coupon');
        }
    }
}