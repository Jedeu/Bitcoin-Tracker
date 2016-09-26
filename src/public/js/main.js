var socket = io();

socket.on('all prices', function(data) {
  var initialPrices = JSON.parse(data);
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
  updateTime('time', latestPrices);
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

function updateTime(key, latestPrices) {
  var updatedTime = latestPrices['new_val'][key];
  var newTimeElement = document.getElementById(key);
  newTimeElement.innerHTML = 'Last updated: ' + updatedTime;
}