console.log("loging functionality coming soon....")

document.getElementById("input-pin")

document.getElementById("login-btn").addEventListener("click", function(){
    const inputNumber = document.getElementById("input-number").value
    const inputPin = document.getElementById("input-pin").value
    console.log(inputNumber, inputPin)

    if(inputNumber == "01860024584" && inputPin == "1234"){
        alert("login successfull")

        // 3 way to redirect to another page

        // link
        // window.location.href= "./home.html" 
        // // replace method login page will not be in the history stack
        // window.location.replace("./home.html")
        // assign method login page will be in the history stack
        window.location.assign("./home.html")

    }else{
        alert("Invalid credentials")
        return;
    }


} )