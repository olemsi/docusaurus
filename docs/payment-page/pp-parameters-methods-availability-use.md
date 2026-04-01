# Use

*by the currency*`payment_currency`Once the functionality of filtering payment methodsis set up, no actions by the web service are required since the payment currency (passed in theparameter) is a required parameter for invoking Payment Widget. Filtering by this parameter will be carried out automatically.

*by the country*`region_code`Once the functionality of filtering payment methodsis set up, the web service needs to be configured in order to pass in the requests for opening Payment Widget relevant country codes (the customer's country is specified in theparameter), according to the reference. If the country code is specified in the request, filtering by this parameter will be carried out automatically. If not, payment methods will be filtered by the country associated with an IP-address of the customer's device.
