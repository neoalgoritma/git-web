
$(document).ready(function(){
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    M.updateTextFields();
  });

var logoImage = "${resource['images/neoalgoritma-new.png']}";

redirectToMain = function(){
	swal({
	    title: "Account created!",
	    text: "Please login with your new account",
	    icon: "success",
	    }).then(function() {
	    window.location = "/initium-pos/web/secured/index.xhtml";
	});
	
}

redirectToMainLogin = function(){
	swal({
	    title: "Login successful",
	    text: "We will redirect you to the point of sales system",
	    icon: "success",
	    timer: 3000
	    
	}).then(function() {
	    window.location = "/initium-pos/web/secured/index.xhtml";
	});
	
}

redirectToMainUnableToEdit = function(url){
	swal({
	    title: "Login successful",
	    text: "We will redirect you to the point of sales system",
	    icon: "success",
	    timer: 3000
	    
	}).then(function() {
	    window.location = url;
	});
	
}
