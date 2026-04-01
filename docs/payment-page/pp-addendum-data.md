# Using addendum with itinerary data

*financial detail addendum*Payment Widget allows you to include so-calledin your payment request you submit to the payment platform. The addendum data is widely used in travel industry and contains detailed booking and itinerary information such as booking number, hotel guest name(s) and check-in and check-out dates. The addendum data are submitted into the payment platform along with the payment request details. Usage of addendum data allows payment providers to make payments more secure and offer more competitive rates.

Payments with addendum data follow the general processing routine except for some specific requirements:

**Not all MCCs are applicable**Addendum data is used only in travel industry; that is why only merchants with the following  MCC codes can initiate payments with hotel booking data: 3501–3999 and 7011.**Addendum data must always be included in the initial checkout request**to you payment providerAny checkout that involves transmission of addendum data must start with a request that contains addendum data. Though, you may omit addendum data in any other requests you send. If you fail to send addendum data in the initial request, and then attempt to use addendum data in any of the subsequent messages, payment platform will refuse to process your request and will return an error message.

Addendum data may be used only in operations that use Visa and Mastercard cards.

addendum_dataaddendum_dataAll the booking itinerary information is packed into a single value, included in theparameter which in its turn is added in checkout request as an optional parameter, along all the other checkout parameters. The following section describes how to calculate theparameter value on the basis of all the booking itinerary data.

## addendum_dataHow to obtain theparameter value?

addendum_dataaddendum_dataTheparameter can contain only one value, which must incorporate all the booking itinerary information. The following instructions describe how to calculate theparameter value based on booking itinerary information.

*is*addendum_dataActually, thisthe value you need to set theparameter to.

addendum_data*well before*EPayWidget.run(
    { payment_id: 'X01254',     // Payment ID
      payment_amount: 20000,    // Amount
      payment_currency: 'USD',  // Currency
      project_id: 258,          // Merchant ID
      customer_id: '123',       // Customer ID
      addendum_data: "ewogImxvZGdpbmciOiB7CiAgImN1c3Rv...==" // Addendum data
      signature: "kUi2x9dKHAVNU0FYlSCQ9vySO\/RLCvhtT...=="   // Signature
    }
)You are required to include theparameter in checkout request parameters, required and optional ones,signing the request. Here is example of opening the Payment Widget payment form for checkout with addendum data (for simplicity some values are abbreviated):

1. `lodginglodging``lodging`Here is and example of theobject with hotel booking itinerary:Example of a JSON object with hotel booking details{
  "lodging": {
    "customer_service_toll_free_number": "18005553535", // Customer service phone 
    "guest_name": "John Smith",        // Guest name
    "check_in_date": "10-12-2019",     // Checkin date
    "check_out_date": "22-12-2019",    // Checkout date
    "folio_number": "56265655ABC",     // Booking ID
    "fire_safety_act_indicator": true, // Fire safety compliance indicator
    "room": {            // Object with the room details
        "rate": 12,                 // Daily room rate
        "number_of_nights": "12"    // Booked nights number
    },
    "charges": {            // Object with the charges details
        "transportation": 1200,       // Transportation charges
        "internet_access": 4500       //  Internet access charges
    }
  }
}Convert all the booking itinerary data in theJSON object. For more information about the child objects of, see .
2. `lodging`Encode theJSON object with the itinerary data by using the Base64 encoding algorithm.ewogImxvZGdpbmciOiB7CiAgImN1c3RvbWVyX3NlcnZpY2VfdG9sbF9mcmVlX251bWJlciI6ICIx
ODAwNTU1MzUzNSIsCiAgImd1ZXN0X25hbWUiOiAiSm9obiBTbWl0aCIsICAgCiAgImNoZWNrX2lu
X2RhdGUiOiAiMTAtMTItMjAxOSIsICAgICAKICAiY2hlY2tfb3V0X2RhdGUiOiAiMjItMTItMjAx
OSIsCiAgImZvbGlvX251bWJlciI6ICI1NjI2NTY1NUFCQyIsCiAgImZpcmVfc2FmZXR5X2FjdF9p
bmRpY2F0b3IiOiB0cnVlLAogICJyb29tIjogeyAgICAgICAKICAicmF0ZSI6IDEyLCAgCiAgIm51
bWJlcl9vZl9uaWdodHMiOiAiMTIiIAogIH0sCiAgImNoYXJnZXMiOiB7ICAgICAgCiAgInRyYW5z
cG9ydGF0aW9uIjogMTIwMCwgICAKICAiaW50ZXJuZXRfYWNjZXNzIjogNDUwMCAgCiAgfQogfQp9Here is Base64-encoded representation of the JSON object from step 1 (before encoding, all comments were deleted):

## Related links
