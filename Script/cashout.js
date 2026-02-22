document.getElementById("cashout-btn").addEventListener("click", function () {
    const agentNumber = document.getElementById("agent-number").value;
    const agentAmount = document.getElementById("input-amount").value;
    const CurrentAmount = document.getElementById("balance").innerText;
    console.log(agentNumber, agentAmount);
    console.log(CurrentAmount);

    
    if(agentNumber.length != 11){
        alert("Please enter a valid 11 digit agent number.");
        return;
    }

    const newAmount = Number(CurrentAmount) - Number(agentAmount);
    if (newAmount < 0) {
        alert("You don't have sufficient balance to withdraw this amount.");
        return;
    }


    const cashoutPin = document.getElementById("input-pin");
    const pin = cashoutPin.value;
    if (pin === "1234") {
        alert("Money Withdrawn Successfully.");
        console.log("newAmount:", newAmount);
        document.getElementById("balance").innerText = newAmount;
    } else {
        alert("Incorrect Pin Number. Please try again.");
        return;
    }

})