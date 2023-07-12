function validate() {
    
    let formValue = document.forms["form"];

    let name = formValue["name"].value;
    let comment = formValue["comment"].value;
    let gender = formValue["gender"].value;    

    if (name === '' || trimfield(comment) === '' || gender === '') {
        alert("All fields are compulsory");

        if(name === '')
        var a = document.getElementById("name").focus();

        else if(trimfield(comment) === '')
        document.getElementById("comment").focus();

        return false;
    }
    return true;
}

function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}