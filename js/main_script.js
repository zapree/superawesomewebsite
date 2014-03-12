	function CartItem(product, price, quantity) {
		
		this.product = product;
		this.price = price;
		this.quantity = quantity;
		this.line_total = quantity*price;
	}
	
	
	function Cart() {
		
		this.item_list = {};
		
		
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
		}
			
	};
	
	Cart.prototype.removecartitem = function(item) {
		//get rid of the element from the cart list
		delete this.item_list[item.product];
	};
	
	Cart.prototype.getcartinfo = function() {
		
		for(item in this.item_list){
			console.log(this.item_list[item].product);
			console.log(this.item_list[item].quantity);
			
		}
		
	};
	/*
	function cartline(){
		product
		price
		quantity
		line_total
		<tr>
					<td>Super Awesome Island Yacht</td>
					<td>$1,000,000,000.00</td>
					<td>1</td>
					<td>$1,000,000,000.00</td>
					<td><a href="">remove?</a></td>
				</tr>
	}
	*/
	
	
var getCommentStatus = 'php/postcomment.php';
var getCommentLocation = 'control/postgetchat.php';
var addCommentLocation = 'control/postaddtochat.php';
	
function addComment () {
	var commentUser = (document.getElementById('commentEmail').value).split('@')[0];
	var comment = document.getElementById('commentPost').value;
	
	sendComment(commentUser, comment, addCommentLocation);
}

function sendComment(theUser, theComment, theLocation) {
	$.post(getCommentStatus, { status: "good" },
		function(tempData) {
			var result = $.parseJSON(tempData);
			if(result[0].status == 'good') {
				$("#blog-comments").val('');
				
				$.post(theLocation, {user: theUser, message: theComment}, 
					function (returnedData) {
						var results = $.parseJSON(returnedData);
						
					});
				postComment();
			}
			else {
				alert("Comment status not good");
			}
	});
}

function postComment() {
	$.post(getCommentLocation, {}, function (returnedData) {
		var results = $.parseJSON(returnedData);
		$.each(results, function() {
			$("#blog-comments").append('<div class="comment"><div class="commentUser">'
					+ this.user + '</div><div class="commentDate">'
					+ this.postdatetime + '</div><div class="commentPost">'
					+ this.message + '</div></div>');
		});
	});
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
