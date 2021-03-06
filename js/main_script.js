	function CartItem(product, price, quantity) {
		
		this.product = product;
		this.price = price;
		this.quantity = quantity;
		this.line_total = quantity*price;
	}
	
	CartItem.prototype.updatelinetotal = function(item) {
		this.line_total = quantity*price;
	};
	
	
	function Cart() {
		
		this.item_list = {};
		this.cart_total = 0;
		
		
	}
	
	Cart.prototype.addcartitem = function(item) {
		//for adding additional amounts of the same item
		if( item.product in this.item_list){
			
		}
		//if item isn't aready in the list, add it
		else if(item.quantity != 0){
			this.item_list[item.product] = item;
			item.line_total = item.quantity*item.price;
		}
		
		this.cart_total += item.line_total;
			
	};
	
	Cart.prototype.removecartitem = function(item) {
		//get rid of the element from the cart list
		this.cart_total -= this.item_list[item].line_total;
		//delete this.item_list[item];
		var index = 0;
		if (item == "Super Awesome Island Yacht")index=0;
		if (item == "Super Awesome Tee")index=1;
		if (item == "Super Awesome Car")index=2;
		if (item == "Super Awesome Penguins")index=3;
		$.post('php/removefromcart.php', { item: index });
		
		
	};
	
	Cart.prototype.getcartinfo = function() {
		
		for(item in this.item_list){
			console.log(this.item_list[item].product);
			console.log(this.item_list[item].quantity);
			
		}
		
	};	


	
var getCommentStatus = 'php/postcomment.php';


function addCommentForm () {
	newEmail = $('#email').val();
	newComment = $('#commentPost').val();
	$.post('control/postcomment.php',{email:newEmail, comment:newComment, blogid:blog_id}, function(data) {
		
		results = jQuery.parseJSON(data);
    	if (results[0].status == 'good') {
    		uname = newEmail.split("@")[0];
	    	commentToAdd = '<div class="comment">';
			commentToAdd += '<div class="commentUser">' + uname + '</div>';
			commentToAdd += '<div class="commentDate">' + new Date() + '</div>';
			commentToAdd += '<div class="commentPost">' + newComment + '</div>';
			commentToAdd += '</div>';
			$('#blog-comments').append(commentToAdd);
			$('#email').val("");
			$('#comment').val("");	
		}
    });	
	return false;
}


function rotateBanner(element, source) {
	$.post(source, {}, function(returnedData) {
		var results = $.parseJSON(returnedData);
			console.log(results);
			var count = 1;
			setInterval(function() {
				if(count > 3)
					count = 0;
				pauseRotate(element, results[count]);
				count++;
			}, 8000);
	});
}

function pauseRotate(element, result) {
	$(".banner").remove();
	$(element).append('<a class="banner" href="' + result.link +
			'"><img id="banner" alt="' + result.alt + '" src="' +
			result.image +'" /></a>' );
	console.log(result + "is the new banner image");
}

function validateForm() {
	var nameRegex = new RegExp("^[A-Za-z][-a-zA-Z ]+$");
	var emailRegex = new RegExp("^[A-Za-z0-9][^\ .@]*@[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})+");
	var cityRegex = new RegExp("((^[a-zA-Z]+$){1,63})");
	var phoneRegex = /^[(]\d{3}[)]\d{3}-\d{4}$/;
	var addressRegex = new RegExp("[A-Za-z0-9 ]{1,63}");
	var radioValid = false;
	
	var name = $("#name");
	var email = $("#email");
	var city = $("#city");
	var phone = $("#phone");
	var address = $("#address");
	var stateList = document.getElementById("stateSelect");
	var state = stateList.options[stateList.selectedIndex].text;
	
	var radios = document.getElementsByName('group1');
	var nextday = $("#nextday");
	var secondday = $("#secondday");
	var ground = $("#ground");
	var shipping;
	
	var flag = true;
	
	var i = 0;
	
	while (!radioValid && i < radios.length) {
        if (radios[i].checked)
        {
        	radioValid = true;
        	console.log("radio checked");
        	shipping = radios[i];
        }
        i++;        
    }
	if(!radioValid) {
		   console.log("shipping radio invalid");
		   nextday.parent().css("background","#FF5050");
		   secondday.parent().css("background","#FF5050");
		   ground.parent().css("background","#FF5050");
		   flag = false;
	}
	else {
		nextday.parent().css("background","none");
		secondday.parent().css("background","none");
		ground.parent().css("background","none");
	}
	
	if (!nameRegex.test(name.val())) {
	   
	   console.log("text name invalid");
	   name.parents('tr').css("background","#FF5050");
	   flag = false;
	}
	else name.parents('tr').css("background","none");

	if (!addressRegex.test(address.val())) {
	   console.log("text address invalid");
	   address.parents('tr').css("background","#FF5050");
	   flag = false;
	}
	else address.parents('tr').css("background","none");
	
	if (!cityRegex.test(city.val())) {
	  console.log("text city invalid");
	  city.parents('tr').css("background","#FF5050");
	  flag = false;
	}
	else city.parents('tr').css("background","none");
	
	if (!emailRegex.test(email.val())) {
	   console.log("text email invalid");
	   email.parents('tr').css("background","#FF5050");
	   flag = false;
	}
	else email.parents('tr').css("background","none");

	
	//if (!phoneRegex.test(phone.val())) {
	  //alert('You have entered an invalid phone.');
	  //console.log("text phone invalid");
	  //phone.parents('tr').css("background","#FF5050");
	  //flag = false;
	//}
	//else phone.parents('tr').css("background","none");
	
	if(!flag)alert('You have invalid entries.');
	$.post('control/postorder.php',
		{theName:name, theAddress:address, theCity:city, theState:state, theEmail:email, thePhone:phone, theShipping:shipping},
		function() {
			results = jQuery.parseJSON(data);
	    	if (results[0].status == 'good'){
	    		console.log("Order posted");
	    	}
	});	

	return flag;
}
