
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


let holder = {};
let pies = ["placeholder", "Cherry", "Blueberry", "Pumpkin"];
document.getElementById("submitButton").addEventListener("click", () => {
	event.preventDefault();	
	let customer = document.getElementById("who").value;
	holder.cusomer = customer;
	let deliveryDate = document.getElementById("dateWanted").value;	
	holder.deliveryDate = deliveryDate;

	for ( let i = 1 ; i < 4 ; i++) {
		let which = document.getElementById("qty" + i).textContent;	
		if ( which !== "0" ) {
			holder[pies[i]] = which;
		}
	}
	console.log(holder);	
});

document.getElementById("receiptButton").addEventListener("click", () => {
	window.print();
});



/*
const  possible = document.querySelectorAll(".subAdd");

possible.forEach((any) => {
	any.addEventListener('click', function(event) {
		let whichSign = event.target.textContent;
		let addition = (event.target.id).slice(-1);			
		let amount = document.getElementById("qty" + addition).textContent;
		amount = parseInt(amount);		
		(whichSign === "+") ? amount = amount + 1 : amount = amount - 1	
		document.getElementById("qty" + addition).textContent = amount;
	});
});
*/


