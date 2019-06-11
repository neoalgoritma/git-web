
$(window).bind('beforeunload', function() {
	PF('statusDialog').show();
});

redirectTo = function(title,text,type,redirectURL){
	Swal.fire({
	    title: title,
	    text: text,
	    type: type,
	    buttonsStyling:"btn waves-effect waves-light right",
	    confirmButtonColor:"#ff4081",
	    timer: 3000
	    
	}).then(function() {
	    window.location = redirectURL;
	});
	
}

redirectToPosSetting = function(){
	Swal.fire({
	    title: "Subscription Activated",
	    text: "Please setup your point of sales system.",
	    type: "success",
	    buttonsStyling:"btn waves-effect waves-light right",
	    confirmButtonColor:"#ff4081",
	    timer: 3000
	    
	}).then(function() {
	    window.location = "../secured/pos/pos-setting.xhtml";
	});
	
}

redirectToMainRegister = function(){
	Swal.fire({
	    title: "Register successful",
	    text: "Thank you.",
	    type: "success",
	    buttonsStyling:"btn waves-effect waves-light right",
	    confirmButtonColor:"#ff4081",
	    timer: 3000
	    
	}).then(function() {
	    window.location = "../secured/index.xhtml";
	});
	
}
redirectToMainLogin = function(){
	Swal.fire({
	    title: "Login successful",
	    text: "We will redirect you to the point of sales system",
	    type: "success",
	    buttonsStyling:"btn waves-effect waves-light right",
	    confirmButtonColor:"#ff4081",
	    timer: 3000
	    
	}).then(function() {
	    window.location = "../secured/index.xhtml";
	});
	
}

redirectToMainUnableToEdit = function(url){
	Swal.fire({
	    title: "You are not authorised to access this url",
	    text: "We will redirect you to your panel",
	    buttonsStyling:"btn waves-effect waves-light right",
	    confirmButtonColor:"#ff4081",
	    type: "error",
	    timer: 5000
	    
	}).then(function() {
	    window.location = url;
	});
	
}
