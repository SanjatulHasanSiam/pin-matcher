let countDown = 4;
//Generate Button
document.getElementById('generatorButton').addEventListener('click', function() {
    countDown = 4;
    document.getElementById('countDown').innerHTML = countDown;
    document.getElementById("matcherDisplay").value = '';
    document.getElementById('notMatched').style.display = "none";
    document.getElementById('matched').style.display = "none";
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generatorDisplay').value = randomNumber;
});

//Taking pin input
let display = document.getElementById("matcherDisplay");
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.value = '';
                break;
            case "<":
                if (display.value) {
                    display.value = display.value.slice(0, -1);
                }
                break;

            default:
                display.value += e.target.innerText;
        }
    });
});
//Submit button to match the input with pin
document.getElementById('submitBtn').addEventListener("click", function() {

    document.getElementById('notMatched').style.display = "none";
    document.getElementById('matched').style.display = "none";
    let pin = document.getElementById("generatorDisplay").value;
    let pintoMatch = document.getElementById("matcherDisplay").value;

    if (pin == pintoMatch) {
        document.getElementById('matched').style.display = "block";
        document.getElementsByClassName('action-left').style.display = 'none';

    } else {
        countDown--;
        if (countDown > 0) {
            console.log(countDown);
            document.getElementById('countDown').innerHTML = countDown;
            document.getElementById('notMatched').style.display = "block";
        } else {
            //For count down of remaining attempts
            countDown = 4;
            document.getElementById('notMatched').style.display = "none";
            document.getElementById('matched').style.display = "none";
            document.getElementById("matcherDisplay").value = '';
            document.getElementById("generatorDisplay").value = '';
            document.getElementById('countDown').innerHTML = countDown;
        }

    }

});