// set option of select
$("#checkout_shipping_address_country").val(country).trigger("change");
$("#checkout_shipping_address_country option:contains('"+country+"')").prop("selected", true).trigger("change");
$("#checkout_shipping_address_country").find("option:contains('"+country+"')").prop("selected", true).trigger("change");

// select a option
// e.g. selectItemByValue(document.getElementById("checkout_shipping_address_country"), countryName);
function selectItemByValue(select, value){

  for(var i=0; i < select.options.length; i++)
  {
    if(select.options[i].value === value) {
      select.selectedIndex = i;
      break;
    }
  }
}