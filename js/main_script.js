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
		
		if( item.product in this.item_list){
			item.quantity ++;
		}
		
		else{
			this.item_list[item.product] = item;
			item.quantity = 1;
		}
			
	};
	
	Cart.prototype.getcartinfo = function() {
		
		for(item in this.item_list){
			console.log(this.item_list[item].product);
			console.log(this.item_list[item].quantity);
			
		}
		
	};