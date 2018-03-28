function boolFunct1(){
    let txt;
    let r = confirm("Is JavaScript is more fun than HTML?");
    if (r == true) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo1").innerHTML = txt;
}
function boolFunct2(){
    let txt;
    let r = confirm("Is JavaScript is more fun than HTML?");
    txt= (r) ? "You pressed OK!":"You pressed Cancel!";
    document.getElementById("demo2").innerHTML = txt;
}
function numPrompt(){
    let num = prompt("Please enter an integer.");
   console.log(num);
    switch (num) {
        case "":
            alert("You did not enter a number!")
            break;
        case null:
            alert("You pressed Cancel!")
            break;            
        default:
            if(isNaN(num)){
            alert("That is not a number!");}
            else{
            alert("You chose the number " + num + "!");}
            break;
       
    }

}

function Contact(first, last, phone) {
    this.firstName = first;
    this.lastName = last;
    this.phoneNum = phone;
    this.wholeName = newName(first, last); 
}
function newName(first, last){
    let newName  = first + last;
    return newName;
}
// Create a Person object
let myContact = new Contact("Professor", "Farnsworth", "555-555-5555 ");


function newContact(mN){
    const myNewContact = Object.assign({}, myContact);
    this.marriedName = mN;
    console.log("My new contact ", myNewContact.firstName + " " + myNewContact.lastName + " " + myNewContact.phoneNum + myNewContact.wholeName + marriedName)

}




