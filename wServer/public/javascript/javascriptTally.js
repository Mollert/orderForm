
const tallyCosts = () => {
	let cherryTotal = document.getElementById("cherryTotal").textContent;
	let blueberryTotal = document.getElementById("blueberryTotal").textContent;
	let pumpkinTotal = document.getElementById("pumpkinTotal").textContent;

	let subTotal = parseFloat(cherryTotal) + parseFloat(blueberryTotal) + parseFloat(pumpkinTotal);
	let taxTotal = subTotal * 0.07;
	let allTotal = parseFloat(subTotal) + parseFloat(taxTotal);

	document.getElementById("subTotal").textContent = subTotal.toFixed(2);
	document.getElementById("taxTotal").textContent = taxTotal.toFixed(2);
	document.getElementById("allTotal").textContent = allTotal.toFixed(2);
};

//const pies = ["cherry", "blueberry", "pumpkin"];
let holder = {};

document.getElementById("submitButton").addEventListener("click", () => {
	event.preventDefault();
	holder.customer = document.getElementById("who").value;
	holder.deliveryDate = document.getElementById("dateWanted").value;

	for (let i = 0 ; i < pies.length ; i++) {
		let amount = document.getElementById(pies[i].concat("Qty")).textContent;	
		if (amount !== "0") {
			holder[pies[i]] = amount;
		}
	}

	fetch("/pieOrder", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(holder)
	})
	.then(fetchError)
	.then(res => res.text())
	.then(text => {
		document.getElementById("submitText").textContent = text;
	})
	.catch(error => {
		console.error(error);
	});
//	console.log(holder);
});


document.getElementById("receiptButton").addEventListener("click", () => {
	window.print();
});