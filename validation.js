function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var province = document.getElementById("province").value;
    var validProvinces = ["QC", "ON", "MN", "SK", "AB", "BC"];
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (validProvinces.indexOf(province) === -1) {
        alert("Please select a valid province.");
        return false;
    }
    
    alert("Thanks for registering with our website, your customer record was created successfully.");
    return true;
}
