
const customers = ["Johnson, Millie", "Heathcoat, Joseph", "Newland, Henrietta", "Reasling, William", "Connelly, Patricia", "Bittermist, Katrina", "Nesbed, Joyce", "Iman, Betty", "Turnly, Hommer", "Westly, Kenneth"];

let letter = "";
let carrier = [];
let partName = "";

const findCustomer = (event) => {
	event.preventDefault();

	letter = event.key;

	if (document.getElementById("who").value === "") {
		letter = letter.toUpperCase();
		customers.forEach(customer => {
			if (customer.charAt(0) === letter) {
				carrier.push(customer);
			}
		});
		partName = letter;		
	} else {
		partName = document.getElementById("who").value;
		partName = partName + letter;
		let nameLength = (partName.length - 1);
		for (let i = 0 ; i < carrier.length ; i++) {
			if (carrier[i].charAt(nameLength) !== letter) {
				carrier.splice(i, 1);
			}			
		}
	}
	if (carrier.length === 0) {
		document.getElementById("who").style.fontSize = "1rem";
		document.getElementById("who").value = "add as new customer";
		document.getElementById("addNew").style.backgroundColor = "orange";
	} else if (carrier.length === 1) {
		document.getElementById("who").value = carrier[0];
	} else {
		document.getElementById("who").value = partName;		
	}
};

document.getElementById("who").addEventListener("keydown", findCustomer);

document.getElementById("addNew").addEventListener("click", () => {
	event.preventDefault();
	document.getElementById("who").removeEventListener("keydown", findCustomer);
	getLetter = letter.toUpperCase();
	document.getElementById("who").value = getLetter;
	document.getElementById("addNew").style.backgroundColor = "peru";
	document.getElementById("submitNew").style.backgroundColor = "orange";	
});

document.getElementById("submitNew").addEventListener("click", () => {
	event.preventDefault();
	let newCustomer = document.getElementById("who").value;
	customers.push(newCustomer);
	document.getElementById("who").value = "Added: " + newCustomer;
	document.getElementById("submitNew").style.backgroundColor = "peru";
	document.getElementById("who").addEventListener("keydown", findCustomer);
});


document.getElementById("dateWanted").flatpickr(
{
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});