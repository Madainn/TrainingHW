var produceContainer = $('.produce-container');
var submit = $('.produce-submit');

submit.on("click", appendProduce);

function appendProduce() {
  var produce = $('.produce-name').val();

  produceContainer.append(`<p> ${produce} </p>`);

  $('.produce-name').val("");
}

var dairyContainer = $('.dairy-container');
var submit = $('.dairy-submit');

submit.on("click", appendDairy);

function appendDairy() {
  var dairy = $('.dairy-name').val();

  dairyContainer.append(`<p> ${dairy} </p>`);

  $('.dairy-name').val("");
}

var meatContainer = $('.meat-container');
var submit = $('.meat-submit');

submit.on("click", appendMeat);

function appendMeat() {
  var meat = $('.meat-name').val();

  meatContainer.append(`<p> ${meat} </p>`);

  $('.meat-name').val("");
}

var cerealContainer = $('.cereal-container');
var submit = $('.cereal-submit');

submit.on("click", appendCereal);

function appendCereal() {
  var cereal = $('.cereal-name').val();

  cerealContainer.append(`<p> ${cereal} </p>`);

  $('.cereal-name').val("");
}
