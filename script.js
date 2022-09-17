function getCurrentDate() {
    let today = new Date().toLocaleDateString()
    document.getElementById("current_date").innerHTML = "Date: " + today
}

getCurrentDate()
