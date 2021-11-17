var data = [];
function formValidation() {
    let userName = document.getElementById("name").value;
    let userEmailId = document.getElementById("email").value;

    if (userName == "" || userEmailId == "") {
        alert('Please fill the field')
    }
    else {

        var regX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmailId);

        if (regX) {
            data.push({ name: userName, email: userEmailId, timpeStamp: new Date() })

            document.getElementById('name').value="";
            document.getElementById('email').value="";

        
        }
        else {
            alert('Invalid Email Id')
        }
    }


}
function showUser() {
    var showUser = "";
    for (let i = 0; i < data.length; i++) {
        showUser = showUser + data[i].name + " " + data[i].email +" "+data[i].timpeStamp+ "<br>"
    }
    document.getElementById('result').innerHTML = showUser;
}
