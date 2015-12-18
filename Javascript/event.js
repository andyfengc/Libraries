// add "focusout" event to "checkout_shipping_address_address1" input element
function addAddressFocusOut(func) {
  var address1 = document.getElementById("checkout_shipping_address_address1");
  var oldFocusOut = address1.onfocusout;
  if (typeof address1.onfocusout != "function") {
    address1.onfocusout = func;
  } else {
    address1.onfocusout = function() {
      oldFocusOut();
      func();
    }
  }
}

// is printable key
function isPrintableKey(e) {
  var keycode = e.keyCode;
  var valid =
    (keycode > 47 && keycode < 58) || // number keys
    keycode == 32 || // spacebar
    (keycode > 64 && keycode < 91) || // letter keys
    (keycode > 95 && keycode < 112) || // numpad keys
    (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
    (keycode > 218 && keycode < 223); // [\]' (in order)
  return valid;
}

// is Control, Shift, Alt, BackSpace, etc
function isNonPrintableKey(e) {
  return !isPrintableKey(e);
}

// if ctrl/alt/shift/meta key pressed
function isCombinationKeyPressed(e) {
  return e.ctrlKey || e.altKey || e.shiftKey || e.metaKey;
}

// add load event function
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

// add an event to form
function addSubmitEvent(form, func){
    var oldSubmit = form.onsubmit;
    if (typeof oldSubmit != "function"){
      form.onsubmit = func;
    }
    else{
      form.onsubmit = function(){
        oldSubmit();
        func();
      }
    }
}

// add a click event
function addClickEvent(element, func){
    var oldClick = element.onclick;
    if (typeof oldClick != "function"){
      element.onclick = func;
    }
    else{
      element.onclick = function(e){
        oldClick(e);
        func(e);
      }
    }
}