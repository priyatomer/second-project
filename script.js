function loadCurrencies() {
 
	let baseCurrency=document.getElementById("basecurrency").value;
	
	let queryURL=https://exchangeratesapi.io/api/latest?base${baseCurrency};
	
	fetch(queryURL)
		.then(function (response) {
			return response.json();
		}}
		.then(function (result) {
			console.log(result);
			displayCurrencyResult(result);
		}}
		.catch(function (error) {
			alert("Something went wrong,  check internet connectivity or invalid currency");
			console.log(error.message);
		}};
}

function displayCurrencyResult(result) {
	let msgDiv = document.querySelector("#message");
	
	let div=document.querySelector("#rates");
	
	div.innerHTML ="";
	msgDiv.innerHTML = <div class ="">