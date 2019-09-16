
let partial = "";
let multiCustomers = [];

const getCustomers = (entry) => {

	let letter = [entry];

	fetch("/isCustomer", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(letter)
	})
	.then(fetchError)
	.then(res => res.json())
	.then(reply => {
//		console.log(reply);	
		if (reply.length === 0) {
			addCustomerNote();
		} else if (reply.length === 1) {
			document.getElementById("who").value = reply[0];
		} else {
			document.getElementById("who").value = entry.toUpperCase();
			multiCustomers = [...reply];
		}
	})
	.catch(error => {
		document.getElementById("who").value = "Some kind of error happened";		
		console.error(error);
	});
};

const addCustomerNote = () => {
	document.getElementById("who").style.fontSize = "1rem";
	document.getElementById("who").value = "add as new customer";
	document.getElementById("addNew").style.backgroundColor = "orange";
};

const findCustomer = () => {
	partial = document.getElementById("who").value;
	if (partial.length === 1) {
		getCustomers(partial);
	} else {
//		console.log(multiCustomers);
		let multi = multiCustomers.length;
		let strg = partial.length;

		if (partial.slice(-1) === " " && partial.slice(-2, -1) !== ",") {
			let front = partial.slice(0, -1);
			partial = front + ", ";
		}

		if (partial.slice(-2).charAt(0) === " ") {
			let last = partial.slice(-1).toUpperCase();
			partial = partial.slice(0, -1);
			partial += last;	
		}

		for (let i = 1 ; i <= multi ; i++) {
			if (multiCustomers[multi - i].charAt(strg - 1) !== partial[strg - 1]) {			
				multiCustomers.splice((multi - i), 1);
			}
		}
		if (multiCustomers.length > 1) {
			document.getElementById("who").value = partial;
		} else if (multiCustomers.length === 1) {
			document.getElementById("who").value = multiCustomers[0];
		} else if (multiCustomers.length === 0) {
			addCustomerNote();	
		}
//		console.log(multiCustomers);		
	}
};

const postCustomer = (alias) => {
	let newCustomer = {name: alias};

	fetch("/addCustomer", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newCustomer)
	})
	.then(fetchError)
	.then(res => res.text())
	.then(text => {
		document.getElementById("who").value = text;
	})
	.catch(error => {
		document.getElementById("who").value = "Some kind of error happened";		
		console.error(error);
	});

	document.getElementById("submitNew").style.backgroundColor = "peru";
	document.getElementById("who").addEventListener("input", findCustomer);
};


document.getElementById("who").addEventListener("input", findCustomer);

document.getElementById("addNew").addEventListener("click", () => {
	event.preventDefault();
	document.getElementById("who").removeEventListener("input", findCustomer);
	if (partial.length === 1){
		partial = partial.toUpperCase();
	}
//	getLetter = partial.toUpperCase();
	document.getElementById("who").value = "";
	document.getElementById("who").value = partial;
	document.getElementById("addNew").style.backgroundColor = "peru";
	document.getElementById("submitNew").style.backgroundColor = "orange";	
});

document.getElementById("submitNew").addEventListener("click", () => {
//	event.preventDefault();

	let name = document.getElementById("who").value;
	let spacePos = name.indexOf(" ");
	let capFirstName = name.charAt(spacePos + 1).toUpperCase();

	if (spacePos !== -1) {

		if ((name.charAt(spacePos - 1)) !== ",") {
			let front = name.slice(0, spacePos);
			let back = name.slice(spacePos + 1);
			name = front + ", " + back;
			spacePos = name.indexOf(" ");			
		}

		if (capFirstName !== name.charAt(spacePos + 2)) {
			let front = name.slice(0, spacePos + 1);
			let back = name.slice(spacePos + 2);
			name = front + capFirstName + back;
		}
		postCustomer(name);
	} else {
		document.getElementById("who").value = "Please make this a two part name.";
	}
});


document.getElementById("dateWanted").flatpickr(
{
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});
