function increaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity').value = value;
    price = '$'+`<span>${p * value}</span>`;
    document.getElementById('product-price').innerHTML=price;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('quantity').value = value;
    price = '$'+`<span>${p * value}</span>`;
    document.getElementById('product-price').innerHTML=price;
  }
  var p='15.49';
  var price = '$'+`<span>${p}</span>`;
  document.getElementById('product-price').innerHTML=price;