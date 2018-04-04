$(document).ready(function() {



	$("#feedback-form").validate({
		rules: {

			email: {

				required:true,
				email: true
			},
			
			message :{
				
				required : true
				
			},
		
			name:{
				
				required:true,
				minlength:5
			}
			
		},
		messages: {

			email: {

				required: 'Please enter an email',
				email: 'Please enter a valid email'
			},
			
			message :{
				
				required: 'Please enter the comments'
			},
			
			name :{
				
				required: 'Please enter your name',
				minlength: 'Please enter atleast 5 characters'
			}
		},
		
		submitHandler: function(form){
			
			alert('form submitted successfully');
			$('input[type=text]').val("");
			$('input[type=email]').val("");
			$('textarea').val("");
			
		}
});


   
});

