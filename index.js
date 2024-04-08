var quantityInput = document.getElementById('quantityInput');
var increaseButton = document.getElementById('increaseButton');
var decreaseButton = document.getElementById('decreaseButton');
var addToCartButton = document.getElementById('addToCartButton');

increaseButton.addEventListener('click', function() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseButton.addEventListener('click', function() {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

addToCartButton.addEventListener('click', function() {
    alert('تمت إضافة المنتج إلى السلة!');
});
var whatsappIcon = document.querySelector('.whatsapp-icon i');

whatsappIcon.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
});

whatsappIcon.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});