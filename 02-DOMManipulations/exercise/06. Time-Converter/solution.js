function attachEventsListeners() {
 
    let buttons = document.querySelectorAll('input[type="button"]');
 
    for (let btn of buttons) {
        btn.addEventListener("click", convert);
    }
 
    function convert(event) {
        
        let inputElement = event.target.parentElement.children[1];
        let type = inputElement.id;
        let value = Number(inputElement.value);
 
        let seconds = 0;
 
        switch (type) {
            case "days":
                seconds = value * 24 * 60 * 60;
                break;
            case "hours":
                seconds = value * 60 * 60;
                break;
            case "minutes":
                seconds = value * 60;
                break;
            case "seconds":
                seconds = value;
                break;
        }
 
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
 
        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}
