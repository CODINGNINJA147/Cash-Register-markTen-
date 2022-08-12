var billAmount = document.querySelector('#text-input')
var cashGiven = document.querySelector('#cash-given')
var btnCheck = document.querySelector('#btn-check')
// var message = document.querySelector('#error-message')
var notesNew = document.querySelectorAll(".new")
var output = document.querySelector(".output")
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

btnCheck.addEventListener("click", function validateBillAndCash() {

    if (billAmount.value > 0) {

        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
            
            function calculateChange(amountToBeReturned) {
                for (let i = 0; i < availableNotes.length; i++){
                    const noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
                    amountToBeReturned = amountToBeReturned % availableNotes[i]
                    notesNew[i].innerText = noOfNotes;
                    console.log(noOfNotes)
                }
            }

        } else {
            output.innerText = 'Do you wanna wash plates?'
        }
    } 
    else {
        output.innerText = 'Invalid input'
    }
})