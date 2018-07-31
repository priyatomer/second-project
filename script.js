var x = "";

function loadCurrencies() {
 
	var baseCurrency=document.querySelector("#baseCurrency").value;
	
	let queryURL= `https://exchangeratesapi.io/api/latest?base=${baseCurrency}`;
	
	fetch(queryURL)
		.then(function (response) {
			return response.json();
		})
		.then(function (result) {
			console.log(result);
			displayCurrencyResult(result);
		})
		.catch(function (error) {
			alert("Something went wrong,  check internet connectivity or invalid currency");
			console.log(error.message);
		});
}

function displayCurrencyResult(result) {
	let outputDiv = document.querySelector("#output");
	
	for (a in result.rates) {

		x += `<div class="jumbotron text-center"> <h1> ` + a + ` = ` + result.rates[a] + `</h1> </div>`;

	}
 
	$('#output').append(x);

}







	/*
	let div=document.querySelector("#rates");
	
	div.innerHTML ="";
	msgDiv.innerHTML = <div class ="">
	*/