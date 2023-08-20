let totalPrice = 0;
function handleClick(target){
    const selectedItemContainer = document.getElementById('selected-items')
    const purchaseItem =target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = purchaseItem;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById('total-price').innerText = totalPrice;
    const total = document.getElementById('total').innerText = totalPrice;
    return total;
}