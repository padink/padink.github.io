var firstname = document.forms["contactForm"]["contactName"];
      var lastname = document.forms["contactForm"]["lastName"];
      var aadhaar = document.forms["contactForm"]["aadhaar"];
      var residential = document.forms["contactForm"]["residential"];
      var date = document.forms["contactForm"]["date"];
      var cityname = document.forms["contactForm"]["City"];
      var pin = document.forms["contactForm"]["pin"];
      var mobile = document.forms["contactForm"]["mobile"];
      var email = document.forms["contactForm"]["email"];
      var ans1 = document.forms["contactForm"]["answer"];
      var ans2 = document.forms["contactForm"]["answer2"];
      var ques1 = document.forms["contactForm"]["sec1"];
      var ques2 = document.forms["contactForm"]["sec2"];




      //Getting error display objects
      var fname_error = document.getElementById("fname_error");
      var lname_error = document.getElementById("lname_error");
      var aadhaar_error = document.getElementById("aadhaar_error");
      var addr_error = document.getElementById("addr_error");
      var dob_error = document.getElementById("dob_error");
      var city_error = document.getElementById("city_error");
      var pin_errorpin_error = document.getElementById("pin_error");
      var mobileno_error = document.getElementById("mobileno_error");
      var email_error = document.getElementById("email_error");
      var ans1_error = document.getElementById("ans1_error");
      var ans2_error = document.getElementById("ans2_error");
      var ques1_error = document.getElementById("ques1_error");
      var ques2_error = document.getElementById("ques2_error");

      // Setting Event Listeners
      firstname.addEventListener("blur", fnameVerify, true);
      lastname.addEventListener("blur", lnameVerify, true);
      aadhaar.addEventListener("blur", aadhaarVerify, true);
      residential.addEventListener("blur", residentialVerify, true);
      date.addEventListener("blur", dateVerify, true);
      City.addEventListener("blur", CityVerify, true);
      pin.addEventListener("blur", pinVerify, true);
      mobile.addEventListener("blur", mobileVerify, true);
      email.addEventListener("blur", emailVerify, true);
      ans1.addEventListener("blur", ans1Verify, true);
      ans2.addEventListener("blur", ans2Verify, true);
      ques1.addEventListener("blur", ques1Verify, true);
      ques2.addEventListener("blur", ques2Verify, true);

      // Validation Function
      function PatientValidate(){
        //error array
       var errorArray = [];
        var ok = true;

        var fname = firstname.value;
        var alphaExp = /^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/;
        if(fname == null || fname == ""){
          firstname.style.border = "1px solid red";
          document.getElementById("fname_error").style.color = "red";
          document.getElementById("fname_error").innerHTML="First Name is required";
          
          firstname.focus();
          ok = false;
        }
        else{
          firstname.style.border = "0px solid red";
          document.getElementById("fname_error").innerHTML="";
        }
        if(!alphaExp.test(fname)){
          firstname.style.border = "1px solid red";
          document.getElementById("fname_error").style.color = "red";
        document.getElementById("fname_error").innerHTML="Only Alphabets,(dot),(comma) are allowed!";
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
        var aadhaarno = aadhaar.value;
        var aadhaarRegex = /^\d{4}\s\d{4}\s\d{4}$/;
        if(!aadhaarRegex.test(aadhaarno)){
          aadhaar.style.border = "1px solid red";
          document.getElementById("aadhaar_error").style.color = "red";
          document.getElementById("aadhaar_error").innerHTML = "enter valid aadhaar number";
          errorArray.push(aadhaar);
          aadhaar.focus();
          ok = false;
        }
        else{
          aadhaar.style.border = "0px solid red";
          document.getElementById("aadhaar_error").innerHTML="";
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
          errorArray.push(mobile);
          email.focus();
          ok = false;
        }
        else{
          email.style.border = "0px solid red";
          document.getElementById("email_error").innerHTML="";
        }
        var answer1Value = ans1.value;
        if(answer1Value == null || answer1Value == ""){
          ans1.style.border = "1px solid red";
          document.getElementById("ans1_error").style.color = "red";
          document.getElementById("ans1_error").innerHTML="answer cannot be empty";
          errorArray.push(ans1);
          ans1.focus();
          ok = false;
        }
        else{
          ans1.style.border = "0px solid red";
          document.getElementById("ans1_error").innerHTML="";
        }
        var answer2Value = ans2.value;
        if(answer2Value == null || answer2Value == ""){
          ans2.style.border = "1px solid red";
          document.getElementById("ans2_error").style.color = "red";
          document.getElementById("ans2_error").innerHTML="answer cannot be empty";
          errorArray.push(ans2);
          ans2.focus();
          ok = false;
        }
        else{
          ans2.style.border = "0px solid red";
          document.getElementById("ans2_error").innerHTML="";
        }
        var ques1Value = ques1.value;
        
        if(ques1Value == ""){
          ques1.style.border = "1px solid red";
          document.getElementById("ques1_error").style.color = "red";
          document.getElementById("ques1_error").innerHTML="select anyone question";
          errorArray.push(ques1);
          ques1.focus();
          ok = false;
        }
        else{
          ques1.style.border = "0px solid red";
          document.getElementById("ques1_error").innerHTML="";
        }
        var ques2Value = ques2.value;
        if(ques2Value == ""){
          ques2.style.border = "1px solid red";
          document.getElementById("ques2_error").style.color = "red";
          document.getElementById("ques2_error").innerHTML="select anyone question";
          errorArray.push(ques2);
          ques2.focus();
          ok = false;
        }
        else{
          ques2.style.border = "0px solid red";
          document.getElementById("ques2_error").innerHTML="";
        }
        if(errorArray.length>0){
          errorArray[0].focus();
        }




        return ok;
}


