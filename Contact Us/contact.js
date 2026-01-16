function checkinginput(event){
    event.preventDefault();

    let usernameInput = document.getElementById("username_input").value;
    let surnameInput = document.getElementById("surname_input").value;
    let contactInput = document.getElementById("contact_input").value;
    let subjectInput = document.getElementById("subject_input").value;
    let commentInput = document.getElementById("comment_input").value;

    if ((usernameInput == "") || (subjectInput == "") || (surnameInput == "") || (contactInput == "") || (commentInput == "")){
        alert("You on weed on smth bro? Type that shit in")
    }



}