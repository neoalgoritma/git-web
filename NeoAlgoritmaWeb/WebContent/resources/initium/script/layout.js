
$(window).bind('beforeunload', function() {
	PF('statusDialog').show();
});



redirectToMainLogin = function(){
	Swal.fire({
	    title: "Login successful",
	    text: "We will redirect you to the point of sales system",
	    type: "success",
	    buttonsStyling:"btn waves-effect waves-light right",
	    confirmButtonColor:"#ff4081",
	    timer: 3000
	    
	}).then(function() {
	    window.location = "/initium-pos/web/secured/index.xhtml";
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
