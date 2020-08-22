function checkFormatForUserType(userName, userType) {
    if (userName[0] === userName[0].toUpperCase() && userName.length >= 5 && userName.length <= 10 && userType === "admin" || userType === "manager") {
        console.log("User Name Valid");
    } else {
        console.log("User Name Invalid")
    }
}

checkFormatForUserType("Alfonso123", "admin");



