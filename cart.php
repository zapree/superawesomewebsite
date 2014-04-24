<?php $title = "Cart of Awesome" ?>
<?php include('header.php'); ?>
		<h2>Shopping Cart</h2>
		<form action="shipping.php" method="post">
			<table id="cart_table" class="altgreen" cellspacing="0">
				<tr id='submit_row'>
					<td> </td>
					<td><input class="button" id='shopping_button' type="submit" value="Continue" /></td>
					<td> </td>
					<td> </td>
					<td> </td>
				</tr>
			</table>
		</form>

		<script>
			<?php 
			
				session_start(); 
				if (!isset($_SESSION['cart'])) { 
					$_SESSION['cart'] = array(0,0,0,0); 
				}
			
				if(isset($_GET['product_type'])){
					$_SESSION['cart'][$_GET['product_type']-1]+=$_GET['productquantity'];
					
				}
			?>
			
			cart_products = {
			yacht : new CartItem("Super Awesome Island Yacht", 1000000000.00, <?php echo $_SESSION['cart'][0] ?>),
			tee : new CartItem("Super Awesome Tee", 20.00, <?php echo $_SESSION['cart'][1] ?>),
			car : new CartItem("Super Awesome Car", 300000.00, <?php echo $_SESSION['cart'][2] ?>),
			penguin : new CartItem("Super Awesome Penguins", 400000.00, <?php echo $_SESSION['cart'][3] ?>)
			};
			
			var the_cart = new Cart();
			for(product in cart_products){
				
				the_cart.addcartitem(cart_products[product]);
			}
			the_cart.getcartinfo();
			
		
			var table = $('#cart_table');
			var header = $("<tr></tr>");
			header.attr("id", "header_row");
			$('<th></th>').text("Product").appendTo(header);
			$('<th></th>').text("Price").appendTo(header);
			$('<th></th>').text("Quantity").appendTo(header);
			$('<th></th>').text("Line Total").appendTo(header);
			$('<th></th>').text("").appendTo(header);
			header.insertBefore($("#submit_row"));
			var total_line = $("<tr></tr>");
			total_line.attr("id", "total_line");
			$('<td></td>').text(" ").appendTo(total_line);
			$('<td></td>').text(" ").appendTo(total_line);
			$('<td></td>').text("Total").appendTo(total_line);
			var total = $('<td></td>');
			total.attr("id", "total");
			total.text("$"+the_cart.cart_total.toString().replace( /(\d)(?=(\d{3})+$)/g, "$1,"  )+".00");
			total_line.append(total);
			total_line.insertBefore($("#submit_row"));
			
			
			
			for(item_num in the_cart.item_list){
				var new_row = $("<tr></tr>");
				var item = the_cart.item_list[item_num];
				cell_list = [item.product, item.price, item.quantity, item.line_total];
				for(cell in cell_list){
					if( cell != 1 && cell != 3){
						$('<td></td>').text(cell_list[cell]).appendTo(new_row);
					}
					else  $('<td></td>').text("$" +cell_list[cell].toString().replace( /(\d)(?=(\d{3})+$)/g, "$1,")+".00").appendTo(new_row);
				}
				var butt = $('<input></input>');
				butt.attr({'type':'button','name':'javaSubmit','value':'Remove'});
				butt.click(function() {
					$(this).parent('tr').remove();
					the_cart.removecartitem($(this).parent('tr').find('td:first').text());
					$("#total").text("$"+the_cart.cart_total.toString().replace( /(\d)(?=(\d{3})+$)/g, "$1,"  )+".00");
					$("#total").parent('tr').css("background", "none");
  				});
				new_row.append(butt);
				new_row.insertBefore($("#total_line"));
				
			}
			$("#header_row").css("border", "thin");
			$("#header_row").css("border-bottom", "black");
			//table.children('tr').css("padding", "10px 33px");
			
				
			
		</script>
<?php include('footer.php'); ?>