$(function() {
    $('.error').hide();
    $("#submit").click(function() {
      // validate and process form here
      
      $('.error').hide();
  	  var name = $("input#name").val();
  		if (name == "") {
        $("label#name_error").show();
        $("input#name").focus();
        return false;
      }
  		var email = $("input#email").val();
  		if (email == "") {
        $("label#email_error").show();
        $("input#email").focus();
        return false;
      }
  		var phone = $("input#message").val();
  		if (phone == "") {
        $("label#message_error").show();
        $("input#message").focus();
        return false;
      }
      
    });
  });

  var dataString = 'name='+ name + '&email=' + email + 'message=' + phone;
  //alert (dataString);return false;
  $.ajax({
    type: "POST",
    url: "sendEmail.php",
    data: dataString,
    success: function() {
     alert("OK!");
    }
  });
  return false;