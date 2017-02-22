var firstname = document.forms["contactForm"]["contactName"];
        var lastname = document.forms["contactForm"]["lastName"];
      var labname = document.forms["contactForm"]["labname"];
      var residential = document.forms["contactForm"]["residential"];
      var date = document.forms["contactForm"]["date"];
      var cityname = document.forms["contactForm"]["City"];
      var pin = document.forms["contactForm"]["pin"];
      var mobile = document.forms["contactForm"]["mobile"];
      var email = document.forms["contactForm"]["email"];
      var col = document.forms["contactForm"]["col"];
      var hours = document.forms["contactForm"]["hours"];


        //Getting error display objects
      var fname_error = document.getElementById("fname_error");
      var lname_error = document.getElementById("lname_error");
      var labname_error = document.getElementById("labname_error");
      var addr_error = document.getElementById("addr_error");
      var dob_error = document.getElementById("dob_error");
      var city_error = document.getElementById("city_error");
      var pin_errorpin_error = document.getElementById("pin_error");
      var mobileno_error = document.getElementById("mobileno_error");
      var email_error = document.getElementById("email_error");
      var col_error = document.getElementById("col_error");
      var hours_error = document.getElementById("hours_error");


       // Setting Event Listeners
      firstname.addEventListener("blur", fnameVerify, true);
      lastname.addEventListener("blur", lnameVerify, true);
      labname.addEventListener("blur", labnameVerify, true);
      residential.addEventListener("blur", residentialVerify, true);
      date.addEventListener("blur", dateVerify, true);
      City.addEventListener("blur", CityVerify, true);
      pin.addEventListener("blur", pinVerify, true);
      mobile.addEventListener("blur", mobileVerify, true);
      email.addEventListener("blur", emailVerify, true);
      col.addEventListener("blur", colVerify, true);
      hours.addEventListener("blur", hoursVerify, true);


        function SurgeonValidation(){
            var ok = true;
            var errorArray = [];

        var fname = firstname.value;
        var alphaExp = /^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/;
        if(fname == null || fname == ""){
          firstname.style.border = "1px solid red";
          document.getElementById("fname_error").style.color = "red";
          document.getElementById("fname_error").innerHTML="First Name is required";
          errorArray.push(firstname);
          firstname.focus();
          ok = false;
        }
        else{
          firstname.style.border = "0px solid red";
          document.getElementById("fname_error").innerHTML="";
        }
        var lname = lastname.value;
        if(!alphaExp.test(lname)){
          lastname.style.border = "1px solid red";
          document.getElementById("lname_error").style.color = "red";
          document.getElementById("lname_error").innerHTML="Only Alphabets,(dot),(comma) are allowed!";
          errorArray.push(lastname);
          lastname.focus();
          ok = false;
        }

        else{
          lastname.style.border = "0px solid red";
          document.getElementById("lname_error").innerHTML="";
        }

        var dob = date.value;
        if(dob == null || dob == ""){
          date.style.border = "1px solid red";
          document.getElementById("dob_error").style.color = "red";
          document.getElementById("dob_error").innerHTML = "DOB is required";
          errorArray.push(date);
          date.focus();
          ok = false;
          }
          else{
          date.style.border = "0px solid red";
          document.getElementById("dob_error").innerHTML="";
        }
        var labnameValue = labname.value;
        
        if(!alphaExp.test(labnameValue)){
          labname.style.border = "1px solid red";
          document.getElementById("labname_error").style.color = "red";
          document.getElementById("labname_error").innerHTML = "enter valid laboratory name";
          errorArray.push(labname);
          labname.focus();
          ok = false;
        }
        else{
          labname.style.border = "0px solid red";
          document.getElementById("labname_error").innerHTML="";
        }

        var residentialAddr = residential.value;
        if(residentialAddr == ""){
          residential.style.border = "1px solid red";
          document.getElementById("addr_error").style.color = "red";
          document.getElementById("addr_error").innerHTML = "address cannot be empty";
          errorArray.push(residential);
          residential.focus();
          ok = false;

        }
        else{
          residential.style.border = "0px solid red";
          document.getElementById("addr_error").innerHTML="";
        }
        var cityna = cityname.value;
        if(!alphaExp.test(cityna)){
          cityname.style.border = "1px solid red";
          document.getElementById("city_error").style.color = "red";
          document.getElementById("city_error").innerHTML="Enter a valid city";
          errorArray.push(cityname);
          cityname.focus();
          ok = false;
        }
        else{
          cityname.style.border = "0px solid red";
          document.getElementById("city_error").innerHTML="";
        }
        var zipCodeRegex = /^[1-9][0-9]{5}$/;
        var zipCode = pin.value;
        if(!zipCodeRegex.test(zipCode)){
          pin.style.border = "1px solid red";
          document.getElementById("pin_error").style.color = "red";
          document.getElementById("pin_error").innerHTML="Enter valid pincode";
          errorArray.push(pin);
          pin.focus();
          ok = false;
        }
        else{
          pin.style.border = "0px solid red";
          document.getElementById("pin_error").innerHTML="";
        }
        var mobileRegex = /^\d{10}$/;
        var mobileNO = mobile.value;
        if (!mobileRegex.test(mobileNO)){
          mobile.style.border = "1px solid red";
          document.getElementById("mobileno_error").style.color = "red";
          document.getElementById("mobileno_error").innerHTML="Enter valid mobile number";
          errorArray.push(mobile);
          mobile.focus();
          ok = false;
        }
        else{
          mobile.style.border = "0px solid red";
          document.getElementById("mobileno_error").innerHTML="";
        }
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailId = email.value;
        if(!emailRegex.test(emailId)){
          email.style.border = "1px solid red";
          document.getElementById("email_error").style.color = "red";
          document.getElementById("email_error").innerHTML="Enter valid email Id";
          errorArray.push(email);
          email.focus();
          ok = false;
        }
        else{
          email.style.border = "0px solid red";
          document.getElementById("email_error").innerHTML="";
        }

        var hoursValue = hours.value;
        if (hoursValue == null || hoursValue == ""){
          hours.style.border = "1px solid red";
          document.getElementById("hours_error").style.color = "red";
          document.getElementById("hours_error").innerHTML = "working hours cannot be empty";
          errorArray.push(hours);
          hours.focus();
          ok = false;
        }
        else{
          hours.style.border = "0px solid red";
          document.getElementById("hours_error").innerHTML="";
        }
        

        if(errorArray.length>0){
          errorArray[0].focus();
        }
        return ok;
        

        
        }