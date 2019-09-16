
const fetchError = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};

const loadListeners = (pies) => {

	pies.forEach(type => {

		let htmlId = document.getElementById(type);
		let htmlIdCost = document.getElementById(type.concat("Cost"));	
		let htmlIdQty = document.getElementById(type.concat("Qty"));
		let htmlIdTotal = document.getElementById(type.concat("Total"));

		document.getElementById(type).addEventListener("click", () => {
			if (htmlId.name === "none") {
				htmlId.src = "./image/pieClicked.png";
				htmlId.name = "clicked";
				htmlIdQty.textContent = 1;
				htmlIdTotal.textContent = htmlIdCost.textContent;
			} else {	
				htmlId.src = "./image/pieNone.png";
				htmlId.name = "none";
				htmlIdQty.textContent = 0;
				htmlIdTotal.textContent = "0.00";
			}
			tallyCosts();
		});

		document.getElementById(type.concat("Minus")).addEventListener("click", () => {
			if (htmlId.name === "clicked") {	
				let costTotal = parseFloat(htmlIdTotal.textContent) - parseFloat(htmlIdCost.textContent);
				if (costTotal >= 0.00) {
					htmlIdTotal.textContent = costTotal.toFixed(2);
				} else {
					htmlIdTotal.textContent = "0.00";
				}
				let amount = htmlIdQty.textContent;
				amount = parseInt(amount) - 1;
				if (amount >= 0){
					htmlIdQty.textContent = amount;
				} else {
					htmlIdQty.textContent = 0;			
				}
			}
			tallyCosts();
		});

		document.getElementById(type.concat("Plus")).addEventListener("click", () => {
			if (htmlId.name === "clicked") {
				let costTotal = parseFloat(htmlIdTotal.textContent) + parseFloat(htmlIdCost.textContent);
				htmlIdTotal.textContent = costTotal.toFixed(2);
				let amount = htmlIdQty.textContent;
				amount = parseInt(amount) + 1;
				htmlIdQty.textContent = amount;
			}
			tallyCosts();
		});
	});
};



fetch("/pieType")
	.then(fetchError)
	.then(response => {
		return response.json();
	}).then(reply => {
		loadListeners(reply);
		pies = reply;	
	}).catch(error => {
		console.error(error);
	});

