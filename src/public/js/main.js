var socket = io();

socket.on('all prices', function(data) {
  var initialPrices = JSON.parse(data);
  console.log(initialPrices);
  loadInitialPrice('CAD', initialPrices);
  loadInitialPrice('USD', initialPrices);
  loadInitialPrice('CLP', initialPrices);
  loadInitialTime('time', initialPrices);
});

socket.on('updated prices', function(data) {
  var latestPrices = JSON.parse(data);
  updatePrices('CAD', latestPrices);
  updatePrices('USD', latestPrices);
  updatePrices('CLP', latestPrices);
});

function loadInitialPrice(currency, initialPrices) {
  var initialPrice = initialPrices[currency];
  var priceElement = document.getElementById(currency);
  priceElement.innerHTML = '$' + initialPrice;
}

function updatePrices(currency, latestPrices) {
  var newPrice = latestPrices['new_val'][currency];
  var newPriceElement = document.getElementById(currency);
  newPriceElement.innerHTML = '$' + newPrice;
}

function loadInitialTime(key, initialPrices) {
  var initialTime = initialPrices[key];
  var timeElement = document.getElementById(key);
  timeElement.innerHTML = 'Last updated: ' + initialTime;
}