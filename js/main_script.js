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
			item.quantity ++;
		}
		//if item isn't aready in the list, add it
		else{
			this.item_list[item.product] = item;
			item.quantity = 1;
			item.line_total = item.quantity*item.price;
		}
		
		this.cart_total += item.price;
			
	};
	
	Cart.prototype.removecartitem = function(item) {
		//get rid of the element from the cart list
		this.cart_total -= this.item_list[item].line_total;
		delete this.item_list[item];
		
	};
	
	Cart.prototype.getcartinfo = function() {
		
		for(item in this.item_list){
			console.log(this.item_list[item].product);
			console.log(this.item_list[item].quantity);
			
		}
		
	};	


	
var getCommentStatus = 'php/postcomment.php';
	
function addComment () {
	var commentUser = (document.getElementById('commentEmail').value).split('@')[0];
	var comment = document.getElementById('commentPost').value;
	
	sendComment(commentUser, comment);
}

function sendComment(theUser, theComment) {
	$.post(getCommentStatus, { status: "good" },
		function(tempData) {
			var result = $.parseJSON(tempData);
			if(result[0].status == 'good') {
				$("#blog-comments").val('');
				
				postComment(theUser, theComment);
			}
			else {
				alert("Comment status not good");
			}
	});
}

function postComment(theUser, theComment) {
	$("#blog-comments").append('<div class="comment"><div class="commentUser">'
			+ theUser + '</div><div class="commentDate">'
			+ new Date() + '</div><div class="commentPost">'
			+ theComment + '</div></div>');
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
	var emailRegex = new RegExp("^[A-Za-z0-9][^\.@]*@[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})+");
	var cityRegex = new RegExp("[a-zA-Z ]{1,63}");
	var phoneRegex = new RegExp("^[(]\d{3}[)]\d{3}-\d{4}");
	var addressRegex = new RegExp("[A-Za-z0-9 ]{1,63}");
	var radioValid = false;
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var city = document.getElementById("city").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;
//	var radios = document.getElementsByName("yesno").value;
	
	var flag = true;
	
//	while (!radioValid && i < radios.length) {
//        if (radios[i].checked) radioValid = true;
//        i++;        
//    }
	
	if (!nameRegex.test(name)) {
	   alert('You have entered an invalid name.');
	   flag = false;
	}
	
	if (!emailRegex.test(email)) {
	   alert('You have entered an invalid email.');
	   flag = false;
	}
	
	if (!cityRegex.test(city)) {
	  alert('You have entered an invalid city.');
	  flag = false;
	}
	
	if (!phoneRegex.test(phone)) {
	  alert('You have entered an invalid phone.');
	  flag = false;
	}
	
	if (!addressRegex.test(address)) {
	   alert('You have entered an invalid address.');
	   flag = false;
	}
	
	return flag;
}


