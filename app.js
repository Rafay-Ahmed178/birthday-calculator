document.getElementById("birthday-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
     

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    var daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    var reminder = document.getElementById("reminder");
    reminder.innerHTML = "";
    if (daysUntilBirthday === 0) {
        reminder.innerHTML = "Happy birthday, " + name + "!";
    } else {
        reminder.innerHTML = "Hello, " + name + "! Your birthday is in " + daysUntilBirthday + " days.";
    }
});