function toFeet() { 
    let feet = document.getElementById("feetValue") 
    feet.value = document.getElementById("milesValue").value * 5280;
    validate777() 
}
function toMiles() { 
    document.getElementById("milesValue").value = document.getElementById("feetValue").value / 5280; 
    // if (document.getElementById("feetValue").value == "777") {
    //     document.getElementById("message").innerHTML = "LUCKY!"
    // }
    // else {
    //     document.getElementById("message").innerHTML = ""
    // }
    validate777()
}

function validate777() {
    
    if (document.getElementById("feetValue").value == "777") {
        document.getElementById("message").innerHTML = "LUCKY!"
    }
    else {
        document.getElementById("message").innerHTML = ""
    }

} 