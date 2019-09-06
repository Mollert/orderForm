
const pies = ["cherry", "blueberry", "pumpkin"];

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


/*
// Cherry Pie
document.getElementById(pies[0]).addEventListener("click", () => {

	let htmlId = document.getElementById(pies[0]);
	let htmlIdCost = document.getElementById(pies[0].concat("Cost"));	
	let htmlIdQty = document.getElementById(pies[0].concat("Qty"));
	let htmlIdTotal = document.getElementById(pies[0].concat("Total"));

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

document.getElementById(pies[0].concat("Minus")).addEventListener("click", () => {

	let htmlId = document.getElementById(pies[0]);
	let htmlIdCost = document.getElementById(pies[0].concat("Cost"));	
	let htmlIdQty = document.getElementById(pies[0].concat("Qty"));
	let htmlIdTotal = document.getElementById(pies[0].concat("Total"));

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

document.getElementById(pies[0].concat("Plus")).addEventListener("click", () => {

	let htmlId = document.getElementById(pies[0]);
	let htmlIdCost = document.getElementById(pies[0].concat("Cost"));	
	let htmlIdQty = document.getElementById(pies[0].concat("Qty"));
	let htmlIdTotal = document.getElementById(pies[0].concat("Total"));

	if (htmlId.name === "clicked") {
		let costTotal = parseFloat(htmlIdTotal.textContent) + parseFloat(htmlIdCost.textContent);
		htmlIdTotal.textContent = costTotal.toFixed(2);
		let amount = htmlIdQty.textContent;
		amount = parseInt(amount) + 1;
		htmlIdQty.textContent = amount;
	}
	tallyCosts();
});

// Blueberry Pie
document.getElementById("blueberry").addEventListener("click", () => {
	let name = document.getElementById("blueberry").name;
	let costEach = document.getElementById("blueberryCost").textContent;
	if (name === "none") {
		document.getElementById("blueberry").src = "./image/pieClicked.png";
		document.getElementById("blueberry").name = "clicked";
		document.getElementById("blueberryQty").textContent = 1;
		document.getElementById("blueberryTotal").textContent = costEach;				
	} else {
		document.getElementById("blueberry").src = "./image/pieNone.png"
		document.getElementById("blueberry").name = "none";
		document.getElementById("blueberryQty").textContent = 0;
		document.getElementById("blueberryTotal").textContent = "0.00";			
	}
	tallyCosts();	
});

document.getElementById("blueberryMinus").addEventListener("click", () => {
	let name = document.getElementById("blueberry").name;
	if (name === "clicked") {
		let costEach = document.getElementById("blueberryCost").textContent;
		let costTotal = document.getElementById("blueberryTotal").textContent;
		costTotal = parseFloat(costTotal) - parseFloat(costEach);
		if (costTotal >= 0.00) {
			document.getElementById("blueberryTotal").textContent = costTotal.toFixed(2);
		} else {
			document.getElementById("blueberryTotal").textContent = "0.00";
		}
		let amount = document.getElementById("blueberryQty").textContent;
		amount = parseInt(amount) - 1;
		if (amount >= 0){
			document.getElementById("blueberryQty").textContent = amount;
		} else {
			document.getElementById("blueberryQty").textContent = 0;
		}
	}
	tallyCosts();
});

document.getElementById("blueberryPlus").addEventListener("click", () => {
	let name = document.getElementById("blueberry").name;
	if (name === "clicked") {
		let costEach = document.getElementById("blueberryCost").textContent;
		let costTotal = document.getElementById("blueberryTotal").textContent;
		costTotal = parseFloat(costTotal) + parseFloat(costEach);
		document.getElementById("blueberryTotal").textContent = costTotal.toFixed(2);	
		let amount = document.getElementById("blueberryQty").textContent;
		amount = parseInt(amount) + 1;
		document.getElementById("blueberryQty").textContent = amount;
	}
	tallyCosts();
});

// Pumpkin Pie
document.getElementById("pumpkin").addEventListener("click", () => {
	let name = document.getElementById("pumpkin").name;
	let costEach = document.getElementById("pumpkinCost").textContent;
	if (name === "none") {
		document.getElementById("pumpkin").src = "./image/pieClicked.png";
		document.getElementById("pumpkin").name = "clicked";
		document.getElementById("pumpkinQty").textContent = 1;
		document.getElementById("pumpkinTotal").textContent = costEach;				
	} else {
		document.getElementById("pumpkin").src = "./image/pieNone.png"
		document.getElementById("pumpkin").name = "none";
		document.getElementById("pumpkinQty").textContent = 0;
		document.getElementById("pumpkinTotal").textContent = "0.00";			
	}
	tallyCosts();
});

document.getElementById("pumpkinMinus").addEventListener("click", () => {
	let name = document.getElementById("pumpkin").name;
	if (name === "clicked") {
		let costEach = document.getElementById("pumpkinCost").textContent;
		let costTotal = document.getElementById("pumpkinTotal").textContent;
		costTotal = parseFloat(costTotal) - parseFloat(costEach);
		if (costTotal >= 0.00) {
			document.getElementById("pumpkinTotal").textContent = costTotal.toFixed(2);
		} else {
			document.getElementById("pumpkinTotal").textContent = "0.00";
		}
		let amount = document.getElementById("pumpkinQty").textContent;
		amount = parseInt(amount) - 1;
		if (amount >= 0){
			document.getElementById("pumpkinQty").textContent = amount;
		} else {
			document.getElementById("pumpkinQty").textContent = 0;
		}
	}
	tallyCosts();
});

document.getElementById("pumpkinPlus").addEventListener("click", () => {
	let name = document.getElementById("pumpkin").name;
	if (name === "clicked") {
		let costEach = document.getElementById("pumpkinCost").textContent;
		let costTotal = document.getElementById("pumpkinTotal").textContent;
		costTotal = parseFloat(costTotal) + parseFloat(costEach);
		document.getElementById("pumpkinTotal").textContent = costTotal.toFixed(2);	
		let amount = document.getElementById("pumpkinQty").textContent;
		amount = parseInt(amount) + 1;
		document.getElementById("pumpkinQty").textContent = amount;
	}
	tallyCosts();
});
*/