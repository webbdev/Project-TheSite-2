// Clickable/toggleable Dropdown menu

$(document).ready(function() {

     $(".dropbtn-xs").click(function() {
      $(".dropdown-content-xs").slideToggle();
    });

    $("#toggle").click(function() {
      $(".dropdown-menu2").slideToggle("slow");
    });

    // Change arrow icon on click dropdown 
    $("#toggle").on('click', function () {
        $("i").toggleClass("fa fa-angle-double-down fa fa-angle-double-up");
    });
    
});


/* JS: Form Validation */

// First Name Validation
function validFname() {  
  var x = document.getElementById("fName").value;
  var errfname = document.getElementById("errfname");

    if (x.length === 0 || x === "") {
      /* Changing CSS Properties from Javascript */
      // Using style
      errfname.style.display = "block";
      document.getElementById('fName').style.borderColor = "#d3135a";
      document.getElementById('errfname').innerHTML = '! Please fill out this filed.';
      return false;

    } else if (x.length < 2) {  
      errfname.style.display = "block";
      document.getElementById('fName').style.borderColor = "#d3135a";
      document.getElementById('errfname').innerHTML = '* First name cannot be less than 2 characters.';
      return false;

    } else if (/[^a-zA-Z\-]/.test(x)) {  
      errfname.style.display = "block";
      document.getElementById('fName').style.borderColor = "#d3135a";
      document.getElementById('errfname').innerHTML='* First name can only contain alphabet characters and hypehns(-)';
      return false;

    } else { 
      errfname.style.display = "none";
      document.getElementById('fName').style.borderColor = "";
      document.getElementById('errfname').innerHTML = ""; 
      return true;
    }
} 

// Last name validation
function validLname() {

  var y = document.getElementById("lName").value;
  var errlname = document.getElementById("errlname");

  if (y.length === 0 || y === "") {
    errlname.style.display = "block";
    document.getElementById('lName').style.borderColor = "#d3135a";
    document.getElementById('errlname').innerHTML = '! Please fill out this filed.';
  return false;
  
  } else if (y.length < 2) {   
    errlname.style.display = "block";
    document.getElementById('lName').style.borderColor = "#d3135a";
    document.getElementById('errlname').innerHTML = '* Last name cannot be less than 2 characters.';
    return false;
  
  } else if (/[^a-zA-Z\-]/.test(y)) {  
    errlname.style.display = "block";
    document.getElementById('lName').style.borderColor = "#d3135a";
    document.getElementById('errlname').innerHTML = '* Last name can only contain alphabet characters and hyphens(-).';
    return false;
  
  } else {
    errlname.style.display = "none";
    document.getElementById('lName').style.borderColor = "";
    document.getElementById('errlname').innerHTML = "";
    return true;
  }
}

// Validation comments
function validMessage(){
  
  var errmessage = document.getElementById("errmessage");
  var z = document.getElementById("message").value;
  var required = 10;
  var msg = required - z.length;

  if(z.length === 0 || z === "") {
    errmessage.style.display = "block";
    document.getElementById('message').style.borderColor = "#d3135a";
    document.getElementById('errmessage').innerHTML = '! Please fill out this filed.';
    return false;
  
  } else  if(msg > 0) {
    errmessage.style.display = "block";
    document.getElementById('message').style.borderColor = "#d3135a";
    document.getElementById('errmessage').innerHTML = '* Message content must have no less than 10 characters.';
    return false;
  
  } else {
    errmessage.style.display = "none";
    document.getElementById('message').style.borderColor = "#d3135a";
    document.getElementById('errmessage').innerHTML = '';
    return true;
  }
}

function validateForm() {
  var errsubmit = document.getElementById("errsubmit");

  if (!validFname() || !validLname() || !validMessage()) {    
    errsubmit.style.display = "block";
    document.getElementById('errsubmit').innerHTML = '! Form must be valid for submit.';
    return false;
  } else {
    errsubmit.style.display = "none";
    return true;
  }    
}
