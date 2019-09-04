
// Cherry Pie
document.getElementById("cherry").addEventListener("click", () => {
	let name = document.getElementById("cherry").name;
	let costEach = document.getElementById("cherryCost").textContent;
	if (name === "none") {
		document.getElementById("cherry").src = "./image/pieClicked.png";
		document.getElementById("cherry").name = "clicked";
		document.getElementById("qty1").textContent = 1;
		document.getElementById("cherryTotal").textContent = costEach;
	} else {
		document.getElementById("cherry").src = "./image/pieNone.png"
		document.getElementById("cherry").name = "none";
		document.getElementById("qty1").textContent = 0;
		document.getElementById("cherryTotal").textContent = "0.00";			
	}
	tallyCosts();
});

document.getElementById("minus1").addEventListener("click", () => {
	let name = document.getElementById("cherry").name;
	if (name === "clicked") {
		let costEach = document.getElementById("cherryCost").textContent;
		let costTotal = document.getElementById("cherryTotal").textContent;
		costTotal = parseFloat(costTotal) - parseFloat(costEach);
		if (costTotal >= 0.00) {
			document.getElementById("cherryTotal").textContent = costTotal.toFixed(2);
		} else {
			document.getElementById("cherryTotal").textContent = "0.00";
		}
		let amount = document.getElementById("qty1").textContent;
		amount = parseInt(amount) - 1;
		if (amount >= 0){
			document.getElementById("qty1").textContent = amount;
		} else {
			document.getElementById("qty1").textContent = 0;
		}
	}
	tallyCosts();
});

document.getElementById("plus1").addEventListener("click", () => {
	let name = document.getElementById("cherry").name;
	if (name === "clicked") {
		let costEach = document.getElementById("cherryCost").textContent;
		let costTotal = document.getElementById("cherryTotal").textContent;
		costTotal = parseFloat(costTotal) + parseFloat(costEach);
		document.getElementById("cherryTotal").textContent = costTotal.toFixed(2);	
		let amount = document.getElementById("qty1").textContent;
		amount = parseInt(amount) + 1;
		document.getElementById("qty1").textContent = amount;
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
		document.getElementById("qty2").textContent = 1;
		document.getElementById("blueberryTotal").textContent = costEach;				
	} else {
		document.getElementById("blueberry").src = "./image/pieNone.png"
		document.getElementById("blueberry").name = "none";
		document.getElementById("qty2").textContent = 0;
		document.getElementById("blueberryTotal").textContent = "0.00";			
	}
	tallyCosts();	
});

document.getElementById("minus2").addEventListener("click", () => {
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
		let amount = document.getElementById("qty2").textContent;
		amount = parseInt(amount) - 1;
		if (amount >= 0){
			document.getElementById("qty2").textContent = amount;
		} else {
			document.getElementById("qty2").textContent = 0;
		}
	}
	tallyCosts();
});

document.getElementById("plus2").addEventListener("click", () => {
	let name = document.getElementById("blueberry").name;
	if (name === "clicked") {
		let costEach = document.getElementById("blueberryCost").textContent;
		let costTotal = document.getElementById("blueberryTotal").textContent;
		costTotal = parseFloat(costTotal) + parseFloat(costEach);
		document.getElementById("blueberryTotal").textContent = costTotal.toFixed(2);	
		let amount = document.getElementById("qty2").textContent;
		amount = parseInt(amount) + 1;
		document.getElementById("qty2").textContent = amount;
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
		document.getElementById("qty3").textContent = 1;
		document.getElementById("pumpkinTotal").textContent = costEach;				
	} else {
		document.getElementById("pumpkin").src = "./image/pieNone.png"
		document.getElementById("pumpkin").name = "none";
		document.getElementById("qty3").textContent = 0;
		document.getElementById("pumpkinTotal").textContent = "0.00";			
	}
	tallyCosts();
});

document.getElementById("minus3").addEventListener("click", () => {
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
		let amount = document.getElementById("qty3").textContent;
		amount = parseInt(amount) - 1;
		if (amount >= 0){
			document.getElementById("qty3").textContent = amount;
		} else {
			document.getElementById("qty3").textContent = 0;
		}
	}
	tallyCosts();
});

document.getElementById("plus3").addEventListener("click", () => {
	let name = document.getElementById("pumpkin").name;
	if (name === "clicked") {
		let costEach = document.getElementById("pumpkinCost").textContent;
		let costTotal = document.getElementById("pumpkinTotal").textContent;
		costTotal = parseFloat(costTotal) + parseFloat(costEach);
		document.getElementById("pumpkinTotal").textContent = costTotal.toFixed(2);	
		let amount = document.getElementById("qty3").textContent;
		amount = parseInt(amount) + 1;
		document.getElementById("qty3").textContent = amount;
	}
	tallyCosts();
});
