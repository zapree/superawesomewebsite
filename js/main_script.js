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
		this.cart_total -= item.line_total;
		delete this.item_list[item.product];
		
	};
	
	Cart.prototype.getcartinfo = function() {
		
		for(item in this.item_list){
			console.log(this.item_list[item].product);
			console.log(this.item_list[item].quantity);
			
		}
		
	};	
	
	function CartTable(the_cart){
		this.table = document.getElementById("cart_table");
		this.row_list = {};
		this.cart = the_cart;
		
		//create header fields
		header = this.table.createTHead();
		header_row = header.insertRow();
		cell_list = ["Product", "Price", "Quantity", "Line Total"];
		for(cell in cell_list){
			current_cell = header_row.insertCell(-1);
			current_cell.innerHTML = cell_list[cell];
		}
		//filler line after header
		filler = this.table.insertRow(-1);
		filler.setAttribute("colspan", "5");
		filler.setAttribute("class", "filler_row");
		filler.setAttribute("required", "true");
		
		//add the items to the cart
		for(item in the_cart.item_list){
			this.additemrow(the_cart.item_list[item]);
		}
		//filler before footer
		filler = this.table.insertRow(-1);
		filler.colspan="5";
		filler.setAttribute("class", "filler_row");
		//create footer with the cart total
		cell_list = ['','','Total'];
		footer = this.table.createTFoot();
		footer_row = footer.insertRow(-1);
		for(cell in cell_list){
			current_cell = footer_row.insertCell(-1);
			current_cell.innerHTML = cell_list[cell];
		}
		this.total_cell = footer_row.insertCell(-1);
		this.updatetotal();
		}
	
	CartTable.prototype.additemrow = function(item) {
		var current_cell;
		this.row_list[item.product] = this.table.insertRow(-1);
		var row = this.row_list[item.product];
		
		cell_list = [item.product, item.price, item.quantity, item.line_total];
		for(cell in cell_list){
			current_cell = row.insertCell(-1);
			if( cell != 1 && cell != 3){
				current_cell.innerHTML = cell_list[cell];
			}
			else current_cell.innerHTML = "$" +cell_list[cell].toString().replace( /(\d)(?=(\d{3})+$)/g, "$1,")+".00";
		}
		current_cell = row.insertCell(-1);
		var butt = document.createElement('input'); // create a button
	    butt.setAttribute('type','button'); // set attributes ...
	    butt.setAttribute('name','javaSubmit');
	    butt.setAttribute('value','Remove');
	    that = this;
	    butt.onclick = function() {
	    	that.deleterow(item);
	    };
	    row.cells[4].appendChild(butt);
		
	};
	CartTable.prototype.deleterow = function(item) {
		console.log("trying to delete");
		num =1;
		for(var key in this.row_list)
		{
			num++;
			
		    if(this.row_list[key]==this.row_list[item.product])
		         break;
		}
		console.log(this.table);
		this.table.deleteRow(num);
		this.cart.removecartitem(item);
		this.updatetotal();
	};
	
	CartTable.prototype.updatetotal = function(){
		this.total_cell.innerHTML = "$"+this.cart.cart_total.toString().replace( /(\d)(?=(\d{3})+$)/g, "$1,"  )+".00";
	};
		
	


