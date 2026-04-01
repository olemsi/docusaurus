# with card paymentsCascading option

## Overview

Payments could sometimes fail due to different reasons. For example, while a payment is being processed by a provider or a bank, technical issues may occur, or processing of the payment may take too long, or a customer's card limit may have been reached.

In any of the above cases, the cascading option enabled allows the payment that cannot be processed properly by a provider to be rerouted to an alternative provider with no change of the payment method. In card payments, youYouThe Platform payment platform supports cascade payment processing that includes additional attempts to process a payment if your initial attempt to process the payment was unsuccessful.can use the cascading option for both one-step and two-step purchases with authentication by using 3‑D Secure as well as without authentication.

In card payments, a customer may be charged only once for the same payment, that's why it is the payment platform which is required to initiate new additional attempts to process the payment.

Using the cascading option requires to update the merchant web service because the workflow of cascade payment processing includes additional steps that are not included in the workflow of regular payment processing. The following section discusses in more details the workflow of cascade payment processing and how to integrate the option in your web service.

## Setup and configuration

To integrate and enable the cascading option in your web service, you need to do the following:

1. Contact your Platform key account manager and discuss the possibility of implementing the option and updates of your web service that the option requires.Address the organisational interaction issue with Platform.
2. `payment_id`If an additional attempt requires performing 3‑D Secure authentication, notifications are recommended to inform a customer that the initial attempt was unsuccessful and then to ask the customer to confirm one more 3‑D Secure authentication with the same card details. You may use notification as an informational component and a button as an input control. Also if the limit on the number of allowed attempts has been reached, you may ask the customer to use another payment method and then to initiate a new payment with a new payment identifier ().Update your payment widgets with additional user interface elements.`cascading_with_redirect`To support multiple authentication, your web service is required to receive callbacks that contain customer redirection data and the newparameter, and then, if the customer accepts, is required to redirect customer to ACS URL.Support 3‑D Secure authentication more than once for the same payment without updating card details.Update your web service to support the cascading option.
3. Test and deploy cascade payment processing with the Platform technical support.

## Workflow

`success`Payments with the enabled cascading option are initiated in the same way as regular payments. Your web service is required to send a request for purchase to initiate an attempt to process the payment. The payment platform accepts the request, and then the 3‑D Secure authentication may be required. If a customer is charged for this attempt, the payment platform sends a callback with the payment results and thepayment status. If a customer isn't charged for the initial attempt, the payment platform keeps processing the payment that may require one or more additional attempts to process it.

`cascading_with_redirectawaiting_3ds_resultawaiting_redirect_resultprocessing`Until the customer is charged for one of processed additional attempts before the limit on the number of allowed attempts has been reached, the payment platform initiates a new additional attempt. If the new additional attempt doesn't require 3‑D Secure authentication, there is no need any customer and web service involvement. If the 3‑D Secure authentication is required, the payment platform sends another callback with customer redirection data and theparameter. If the customer confirms one more additional attempt to process the payment, the payment platform keeps processing the new additional attempt with new 3‑D Secure authentication. The payment status is set to one of following ones:,or.

`successdecline`Payment processing with the enabled cascading option is completed in the same way as regular payment processing. The payment platform sends a callback with thepayment status, if the customer has been charged for one of processed additional attempts. The payment status is set to, if the customer hasn't been charged for one of processed additional attempts before the limit on the number of allowed attempts has been reached.

The following diagram provides the detailed picture of a one-step purchase processing with the cascade option enabled and the 3‑D Secure authentication included.

* Platform may function as a provider.

## Callback format

`cascading_with_redirect``true`—It means you should ask a customer to confirm one more additional attempt to process the payment because one of previous additional attempts has required 3‑D Secure authentication.`false`—It means you shouldn't ask a customer to confirm one more additional attempt to process the payment because non of previous additional attempts has required 3‑D Secure authentication.In card payments, payment processing with the enabled cascading option uses the standard format for callbacks with payment results (for more information, see ), as well as standard formats for intermediate callbacks with redirection data (for more information, see ). Note that unlike regular payment processing, in payment processing with the enabled cascading option, callbacks with redirection data contain theparameter. The parameter is set to one of the following values:

`messageoperations`The reason the payment is declined is may be specified in theparameter of theobject.

`cascading_with_redirectfalse`In the following example of callback, theparameter is set to, so the merchant web service isn't required to ask the customer to confirm one more additional attempts to process the payment.
