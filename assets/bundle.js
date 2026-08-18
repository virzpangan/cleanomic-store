$(document).ready(function() {
  $('#btn-sea-2mo').on('click',function(e){
	        e.preventDefault();
    Shopify.clear(function(cart) {
		addItemToCart(32351223775319, 1, "1", "Months");
  	});

  });
});

function addItemToCart(variant_id, qty, frequency, unit_type) {
    data = {
        "id": variant_id,
        "quantity": qty,
        "properties": {
            "shipping_interval_frequency": frequency,
            "shipping_interval_unit_type": unit_type
        }
    }
    jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: data,
        dataType: 'json',
        success: function () {
            window.location.href = '/cart';
        }
    });
    window.location = '/checkout';
}
