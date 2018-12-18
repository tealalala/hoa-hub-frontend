<template>
  <div class="payment">
    <div class="container">
      <h1>Make a Payment</h1>

      <div class="row">
        <div class="col-sm-5">
          <div class="alert alert-primary" role="alert" style="text-align: center;">
            <h3>$500</h3>
            <p>total for 2019</p>
          </div>
          <p>This is your association fee for the entire year. Subject to change dependent on the next year's <a href="/#/budget">budget</a> needs.</p>
        </div>
        <div class="col-sm-7">
          <form>
            <div class="form-group">
              <label>Name on Card</label>
              <input type="text" class="form-control" name="cardholder_name" data-stripe="name"/>
            </div>
            <div class="form-group">
              <label>Credit Card Number</label>
              <input type="text" class="form-control" name="card_number" data-stripe="number"/>
            </div>
            <div class="form-group">
              <label>Expiration Date</label>
              <input type="text" class="form-control" name="expiration" data-stripe="exp"/>
            </div>
            <div class="form-group">
              <label>Security Code</label>
              <input type="text" class="form-control" name="security_code" data-stripe="cvc"/>
            </div>
            <div class="form-group">
              <label>Postal Code</label>
              <input type="text" class="form-control" name="postal_code" data-stripe="address_zip"/>
            </div>
            <div class="form-group">
              <label>Amount Paid</label>
              <input type="text" class="form-control" name="amount" data-stripe="amount" value="$500"/>
            </div>

            <input type="submit" class="btn btn-primary" value="Confirm Payment">
          </form>
        </div>
      </div>


    </div>
  </div>
</template>
