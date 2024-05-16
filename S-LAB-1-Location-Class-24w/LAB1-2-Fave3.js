/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS
class faveFriend {
	constructor(inputName, inputNumber) {
		this.name = inputName;
		this.number = inputNumber;
	}
	name = "";
	number = 0;
}


window.onload = function () {
	//Variables
	var faveThree = [];//FAVE 3 ARRAY
	var formHandle = document.forms.fave_form;
	var faveBlock = document.getElementById("faveBlock");
	var faveList = document.getElementById("faveList");

	//Listeners
	formHandle.onsubmit = processForm;

	//Functions
	function processForm() {
		//Validation goes here

		faveThree[0] = new faveFriend(formHandle.n_1.value, formHandle.p_1.value);
		faveThree[1] = new faveFriend(formHandle.n_2.value, formHandle.p_2.value);
		faveThree[2] = new faveFriend(formHandle.n_3.value, formHandle.p_3.value);

		//hide form and display output
		formHandle.style.display = "none";
		faveBlock.style.display = "block";

		//loop to display output
		for (var i = 0; i < faveThree.length; i++) {
			faveList.innerHTML += "<li>" + faveThree[i].name + "</li>";
		}
		return false;
	}
}//END OF onload FUNCTION