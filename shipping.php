<?php $title = "Shipping of Awesome" ?>
<?php include('header.php'); ?>
		<h2>Shipping Information</h2>
		<form action="total.php" method="post">
			<fieldset id="shipping">
				<legend>Shipping Information</legend>
				<table class="shippingtable">
					<tr>
						<td>Name</td>
						<td> </td>
						<td><input id="name" type="text" /></td>
					</tr>
					<tr>
						<td>Address</td>
						<td> </td>
						<td><input id="address" type="text" /></td>
					</tr>
					<tr>
						<td>City</td>
						<td> </td>
						<td><input id="city" type="text" /></td>
					</tr>
					<tr>
						<td>State</td>
						<td> </td>
						<td>
							<select id="stateSelect" name="state">
								<option value="CA">CA</option>
								<option value="AZ">AZ</option>
								<option value="AK">AK</option>
								<option value="CO">CO</option>
								<option value="NV">NV</option>
								<option value="WA">WA</option>
								<option value="OR">OR</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>Email</td>
						<td> </td>
						<td><input id="email" type="email" /></td>
					</tr>
					<tr>
						<td>Phone</td>
						<td> </td>
						<td><input id="phone" type="tel" /></td>
					</tr>
				</table>
				<table class="shippingtable2">
					<tr>
						<td> </td>
						<td><input class="shippingradio" type="radio" name="group1" value="nextday" id="nextday" />
						<label for="nextday">Next Day</label></td>
					</tr>
					<tr>
						<td> </td>
						<td><input class="shippingradio" type="radio" name="group1" value="secondday" id="secondday" />
						<label for="secondday">Second Day</label></td>
					</tr>
					<tr>
						<td> </td>
						<td><input class="shippingradio" type="radio" name="group1" value="ground" id="ground" />
						<label for="ground">Ground</label></td>
					</tr>
					<tr>
						<td> </td>
						<td>
							<button type="submit" class="button" onclick="return validateForm();">Submit</button>
						</td>
					</tr>
				</table>
			</fieldset>
		</form>
<?php include('footer.php'); ?>
