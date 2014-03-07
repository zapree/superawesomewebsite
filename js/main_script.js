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
		}
		
		this.cart_total += item.price;
			
	};
	
	Cart.prototype.removecartitem = function(item) {
		//get rid of the element from the cart list
		delete this.item_list[item.product];
		item.cart_total -= item.line_total;
	};
	
	Cart.prototype.getcartinfo = function() {
		
		for(item in this.item_list){
			console.log(this.item_list[item].product);
			console.log(this.item_list[item].quantity);
			
		}
		
	};	
	
	function CartTable(the_cart){
		this.table = document.getElementById("cart_table");
		this.total_cell = document.getElementById("total_cell");
		this.row_list = {};
		header = this.table.createTHead();
		header_row = header.insertRow();
		footer = this.table.createTFoot();
		footer_row = footer.insertRow(-1);
		cell_list = ["Product", "Price", "Quantity", "Line Total"];
		for(cell in cell_list){
			current_cell = header_row.insertCell(-1);
			current_cell.innerHTML = cell_list[cell];
			console.log(cell_list[cell]);
		}
		for(item in the_cart.item_list){
			this.additemrow(the_cart.item_list[item]);
		}
		cell_list = ['','','Total','$0',]
		for(cell in cell_list){
			current_cell = footer_row.insertCell(-1);
			current_cell.innerHTML = cell_list[cell];
			console.log(cell_list[cell]);
		}
		this.updatetotal(the_cart);
		}
	
	CartTable.prototype.additemrow = function(item) {
		var current_cell;
		this.row_list[item.product] = this.table.insertRow(-1);
		var row = this.row_list[item.product];
		
		cell_list = [item.product, item.price, item.quantity, item.line_total];
		for(cell in cell_list){
			current_cell = row.insertCell(-1);
			current_cell.innerHTML = cell_list[cell];
			console.log(cell_list[cell]);
		}
	};
	
	CartTable.prototype.deleterow = function(item) {
		this.row_list[item.product].delete
	};
	
	CartTable.prototype.updatetotal = function(passed_cart){
		this.total_cell.innerHTML = passed_cart.cart_total;
	};
	
	
	/*
				<tr><td colspan="5"><hr></td></tr>
				<tr>
					<td>Super Awesome Island Yacht</td>
					<td>$1,000,000,000.00</td>
					<td>1</td>
					<td>$1,000,000,000.00</td>
					<td><a href="">remove?</a></td>
				</tr>
				<tr>
					<td>Super Awesome Car</td>
					<td>$150,000.00</td>
					<td>2</td>
					<td>$300,000.00</td>
					<td><a href="">remove?</a></td>
				</tr>
				<tr>
					<td>Super Awesome Tee</td>
					<td>$149.00</td>
					<td>1</td>
					<td>$149.00</td>
					<td><a href="">remove?</a></td>
				</tr>
	*/			
	


