
$(function () {
    $("#name_error").hide();
    $("#fname_error").hide();
    $("#number_error").hide();
    $("#email_error").hide();
    $("#address_error").hide();

    var error_name = false;
    var error_fname = false;
    var error_number = false;
    var error_email = false;
    var error_address = false;

    $("#name").focusout(function () {
        check_name();
    });
    $("#father").focusout(function () {
        check_fname();
    });
    $("#number").focusout(function () {
        check_number();
    });
    $("#email").focusout(function () {
        check_email();
    });
    $("#address").focusout(function () {
        check_address();
    });


/*************************************Validate Name***********************************/
    function check_name() {
        var pattern = /^[a-xA-Z]*$/;
        var fname = $("#name").val();
        var firstname = fname.split(" ");
        if (pattern.test(fname) && fname != "" && firstname.length < 2) {
            $("#name_error").hide();
            $("#name").css("border", "2px solid green");
        } else {
            $("#name_error").html("Should contain Only Characters...");
            $("#name_error").show();
            $("#name").css("border", "2px solid red");
            error_name = true;
        }
    }


/*************************************Validate FatherName***********************************/

    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fathername = $("#father").val();
        if (pattern.test(fathername) && fathername != "") {
            $("#fname_error").hide();
            $("#father").css("border", "2px solid green");
        } else {
            $("#fname_error").html("Should contain only Characters...");
            $("#fname_error").show();
            $("#father").css("border", "2px solid red");
            error_fname = true;
        }
    }


/*************************************Validate Number***********************************/

    function check_number() {
        var pattern = /^\d*(?:\.\d{1,2})?$/;
        var nbr = $("#number").val();
        if (pattern.test(nbr) && nbr != "" && nbr.length == 10) {
            $("#number_error").hide();
            $("#number").css("border", "2px solid green");
        } else {
            $("#number_error").html("Should contain only number and Number Should 10 digit...");
            $("#number_error").show();
            $("#number").css("border", "2px solid red");
            error_number = true;
        }
    }


/*************************************Validate Email***********************************/

    function check_email() {
        var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var email = $("#email").val();
        if (pattern.test(email) && email != "") {
            $("#email_error").hide();
            $("#email").css("border", "2px solid green");
        } else {
            $("#email_error").html("Should be in pattern < abc@gmail.com >");
            $("#email_error").show();
            $("#email").css("border", "2px solid red");
            error_email = true;
        }
    }


/*************************************Validate address***********************************/

    function check_address() {
        var addre = $("#address").val();
        var add = addre.split(" ");
        if (add.length > 4 && add != " ") {
            $("#address_error").hide();
            $("#address").css("border", "2px solid green");
        } else {
            $("#address_error").html("Should be greater than 4 wordrs");
            $("#address_error").show();
            $("#address").css("border", "2px solid red");
            error_address = true;
        }
    }



/*************************************Validate On Submit Form***********************************/

    $("#register").submit(function () {
    var name= document.getElementById("name").value;
	var father = document.getElementById("father").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var number = document.getElementById("number").value;


/*************************************Set data On Local Storage***********************************/

	localStorage.setItem("name",name);
	localStorage.setItem("father",father);
	localStorage.setItem("email",email);
	localStorage.setItem("address",address);
	localStorage.setItem("number",number);
	

	
        error_name = false;
        error_fname = false;
        error_number = false;
        error_email = false;
        error_address = false;

        check_name();
        check_fname();
        check_number();
        check_email();
        check_address();

        if (error_name === false && error_fname === false && error_number === false && error_email === false && error_address === false) {
            alert("Registration Successfull......");
            return true;
        } else {
            alert("Please fill The Form Correctly.....");
            return false;
        }
    });

    
});


/*************************************Set local Storage Data on other Page***********************************/

function FlowData(){
    document.getElementById("name1").innerHTML = localStorage.getItem("name");
	document.getElementById("faname").innerHTML = localStorage.getItem("father");
	document.getElementById("email1").innerHTML = localStorage.getItem("email");
	document.getElementById("add").innerHTML = localStorage.getItem("address");
	document.getElementById("num").innerHTML = localStorage.getItem("number");
}