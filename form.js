function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors)
    {
        item.innerHTML = "";
        
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;

    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if (name.length<5) {
        seterror("name", "*Length of name is short");
        returnval = false;
    }
    if (name.length==0) {
        seterror("name", "*Lenth of name cannot be zero");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15) {
        seterror("email", "*Email length is loo tong");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length!=10) {
        seterror("phone", "*Phone no. should be of 10 digits only");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length<6) {
        seterror("pass", "*Password should be atlest 6 characters long");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password mismatched");
        returnval = false;
    }
    return returnval;
}