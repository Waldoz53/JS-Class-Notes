// pop up a confirm window, and set the users response into a variable called response.
// A variable is a block of data. Here, it is holding the value from the confirm box popup.

var response = window.confirm('Do you like the Edmonton Oilers?');

//use an 'if' statement to check the response
// then respond back to the user accordingly

if(response == true) {
    //if they click yes or OK then show this message
    alert('YOU ARE A TRAITOR!!!!');
}

if(response == false) {
    //if they click no or cancel then show this message
    alert('YOURE A GOOD BOY!');
}
//
