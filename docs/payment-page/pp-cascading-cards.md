# with card paymentsCascading option

## Overview

Payments could sometimes fail due to different reasons. For example, while a payment is being processed by a provider or a bank, technical issues may occur, or processing of the payment may take too long, or a customer's card limit may have been reached.

with no change of the payment method. In card payments, you can use the cascading option for both one-step and two-step purchases with authentication by using 3‑D Secure as well as without authenticationThe Platform payment platform supports cascade payment processing that includes additional attempts to process a payment if your initial attempt to process the payment was unsuccessful. In any of the above cases, the cascading option enabled allows the payment that cannot be processed properly by a provider to be rerouted to an alternative provider.

In card payments, a customer may be charged only once for the same payment, that's why it is the payment platform which is required to initiate new additional attempts to process the payment.

Using the cascading option doesn't require to update the merchant web service because workflows of cascade payment processing and regular payment processing are the same for the merchant web service. The following section discusses in more details the workflow of cascade payment processing.

## Setup and configuration

To implement the cascading option in your web service you need to contact your Platform key account manager and discuss the possibility of implementing the option, and then test and deploy cascade payment processing with the Platform technical support.

## Workflow

`success`Payments with the enabled cascading option are initiated in the same way as regular payments. Your web service is required to send a request for purchase to initiate an attempt to process the payment by using Payment Widget. When the payment platform accepts the request, Payment Widget is displaying to a customer for entering card details. The payment platform processes the initial attempt to process the payment, and in addition the 3‑D Secure authentication may be required. If the customer is charged for this attempt, the payment platform sends a callback with the payment results and thepayment status. If the customer isn't charged for the initial attempt, the payment platform keeps processing the payment that may contain one or more additional attempts to process it.

**Retry**`awaiting_3ds_resultawaiting_redirect_resultprocessing`Until the customer is charged for one of processed additional attempts before the limit on the number of allowed attempts has been reached, the payment platform initiates a new additional attempt. If the new additional attempt doesn't require 3‑D Secure authentication, there is no need any customer and web service involvement. If the 3‑D Secure authentication is required, Payment Widget displays a page with customer card detailes, information about unsuccessfull attempt andbutton. If the customer confirms one more additional attempt to process the payment, the payment platform keeps processing the new additional attempt with new 3‑D Secure authentication. The payment status is set to one of following ones:,or.

`successdecline`Payment processing with the enabled cascading option is completed in the same way as regular payment processing. The payment platform sends a callback with thepayment status, if the customer has been charged for one of processed additional attempts. The payment status is set to, if the customer hasn't been charged for one of processed additional attempts before the limit on the number of allowed attempts has been reached.

The following diagram provides the detailed picture of a one-step purchase processing with the cascade option enabled and 3‑D Secure authentication included.

* Platform may function as a provider.

## Callback format

In card payments, payment processing with enabled cascading option uses the standard format for callbacks with payment results. For more information, see .
