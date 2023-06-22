function hrefFunction(){
    windows.location.href="contact.htm";
}

function submit(){
    windows.location.href="OFOcontact.htm";
};

function calc(){
const num3=parseInt(document.getElementById('num3').value);
const num4=parseInt(document.getElementById('num4').value);

result= num3*num4;

document.getElementById("heading").innerHTML="This is your BMI"+ result;
};


