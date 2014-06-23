// PHONE 

var phoneNumber = prompt("Please enter your phone number with dashes. We value your privacy, your number will be protected and not shared with others.")

if(phoneNumber.length !== 12){

	alert= prompt("Please enter your full phone number with three digit area code and dashes.")

}


// DOB

var dob = prompt("Please enter your 8 digit date of birth. Example - 'mm/dd/yyyy'")

if(dob.length !== 10){

	alert= prompt("Please re-enter your 8 digit date of birth. Please use format - 'mm/dd/yyyy'")

}


// zip code



var zipCode = prompt("Please enter your zip code.")

if(zipCode.length !== 5 && zipCode.length !== 10) {

	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
}

// OR THIS WORK BUT IT TERRIBLE :)


// if(zipCode.length < 5){

// 	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
// }

// else if(zipCode.length >10){

// 	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
// }
// else if(zipCode.length === 6){

// 	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
// }

// else if(zipCode.length === 7){

// 	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
// }
// else if(zipCode.length === 8){

// 	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
// }
// else if(zipCode.length === 9){

// 	prompt("Please re-enter your zip code with five digits or nine digits with a dash.")
// }



// State abbv.
var state = prompt("Please enter your state. Example - Georgia would be 'GA'.")


if(state === state.toLowerCase()) {
	prompt("Please re-enter your state with the two letter abbreviation in all caps.");
}


else if(state.length !== 2){

	prompt("Please re-enter your state with the two letter abbreviation in all caps.");
}


// Married Status