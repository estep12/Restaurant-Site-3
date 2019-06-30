function validateContact() {
    var contactName = document.getElementById("contact-name").value;
    var contactEmail = document.getElementById("email").value;
    var contactNumber = document.getElementById("number").value;
    var contactReason = document.getElementById("reason").value;
    var checkbox = document.querySelectorAll("input.checkbox:checked");
    var validNum = /^\d{10}$/.test(contactNumber);



    if (contactName == " " || contactEmail == " " || contactNumber == " " || checkbox.lenght === 0 || validNum === false) {
        alert("Please fill in required information.")
    } else {
        alert("Thank you for contacting  us. We will be in touch shortly")
    }
}