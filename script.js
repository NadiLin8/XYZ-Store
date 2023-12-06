function accessElementById(elementId) {
    return document.getElementById(elementId);
}

function validateFirstName(firstName) {
    console.log("Validating first name:", firstName); 
    var upperCasePattern = /[A-Z]/; 
    var alphabeticPattern = /[a-zA-Z]/g; 

    if (!upperCasePattern.test(firstName)) {
        alert("First name must contain an uppercase letter.");
        return false;
    }

    var alphabeticMatch = firstName.match(alphabeticPattern) || []; 
    console.log("Alphabetic characters found:", alphabeticMatch); 

    if (alphabeticMatch.length < 3) {
        alert("First name must contain at least three alphabetic characters.");
        return false;
    }

    return true;
}

function submitForm() {
    let firstName = accessElementById("firstName").value;
    let lastName = accessElementById("lastName").value;
    let email = accessElementById("email").value;

    if (!validateFirstName(firstName)) {
        return; 
    }

    if (!lastName || !email) {
        alert("All fields are required.");
        return; 
    }
    
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
}


