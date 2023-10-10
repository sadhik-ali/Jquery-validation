  $("document").ready(function () {
    $("#first_name").blur(function () {
      let fname = $(this).val()

      if (fname.length < 5 || fname === "") {
        $(this).css('border-color', 'red');
        $("#error1").show()
      }
      else {
        $("#error1").hide()
        $(this).css('border-color', 'green');
      }
    })
    $("#last_name").blur(function () {
      var lname = $(this).val()
      if (lname.length < 5 || lname === "") {
        $(this).css('border-color', 'red');
        $("#error2").show()

      }
      else {
        $("#error2").hide()
        $(this).css('border-color', 'green');
      }
    })

    $("#email").blur(function () {
      var email = $(this).val()
      if (email.length < 6 || email === "") {
        $(this).css('border-color', 'red');
        $("#error3").show()
      }
      else {
        $("#error3").hide()
        $(this).css('border-color', 'green');
      }
    })
    $("#password").blur(function () {
      var password = $(this).val()
      if (password.length < 8 || password === "") {
        $(this).css('border-color', 'red');
        $("#error4").show()
      }
      else {
        $("#error4").hide()
        $(this).css('border-color', 'green');
      }
    })
    $("#inputState1").blur(function () {
      rules: {
     required:true
    }
      // var input1 = $(this).val()
      // if (input1 === 'Please Select') {
      //   $(this).css('border-color', 'red')
      //   $("#error5").show()
      // }
      // else {
      //   $("#error5").hide()
      //   $(this).css('border-color', 'green')
      // }
    })
    $("#inputState2").blur(function () {
      var input2 = $(this).val()
      if (input2 === "Please Select") {
        $(this).css('border-color', 'red');
        $("#error6").show()
      }
      else {
        $("#error6").hide()
        $(this).css('border-color', 'green');
      }
    })

    $("#inputState3").blur(function () {
      var input3 = $(this).val()
      if (input3 === "Please Select") {
        $(this).css('border-color', 'red');
        $("#error7").show()
      }
      else {
        $("#error7").hide()
        $(this).css('border-color', 'green');
      }
    })
    $("#inputState4").blur(function () {
      var input4 = $(this).val()
      if (input4 === "Please Select") {
        $(this).css('border-color', 'red');
        $("#error8").show()
      }
      else {
        $("#error8").hide()
        $(this).css('border-color', 'green');
      }
    })
 
    $("#btn").click(function () {
      var fname = $("#first_name").val()
      var lname = $("#last_name").val()
      var email = $("#email").val()
      var password = $("#password").val()
      var input1 = $("#inputState1").val()
      var input2 = $("#inputState2").val()
      var input3 = $("#inputState3").val()
      var input4 = $("#inputState4").val()
        if( fname.length < 5 && fname === ""){
          $("#error1").show()
          $("#first_name").css('border-color', 'red');
      }
      if( lname.length < 5 && lname === ""){
          $("#error2").show()
          $("#last_name").css('border-color', 'red');
      }
      if( email.length < 6 && email === ""){
        $("#error3").show() 
        $("#email").css('border-color', 'red');
      }
      if(password.length < 8 && password === ""){
        $("#error4").show()
        $("#password").css('border-color', 'red');
      }
      if(input1 === 'Please Select'){
        $("#error5").show()
        $("#inputState1").css('border-color', 'red');
      }
      if(input2 === 'Please Select'){
        $("#error6").show()
        $("#inputState2").css('border-color', 'red');
      }
      if(input3 === 'Please Select'){
        $("#error7").show()
        $("#inputState3").css('border-color', 'red');
      }
      if(input4 === 'Please Select'){
        $("#error8").show()
        $("#inputState4").css('border-color', 'red');
      }
      else{
      swal.fire({
          icon: 'success',
          title: 'submitted successfully',
        })
      }
    })
  })
