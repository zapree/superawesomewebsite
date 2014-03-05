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