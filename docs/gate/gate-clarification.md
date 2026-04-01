# Additional payment info

## Overview

Normally, when performing payment, mandatory parameters that are required to initiate the payment provide enough information. A payment system or the payment platform may require your web service to submit some optional parameters that otherwise are not required, this may be due to regional or country-specific requirements or additional fraud testing procedures. The additional payment information submission procedure implemented on the payment platform allows you to handle these cases. When performing the procedure, the payment platform require your web service to provide additional mandatory data and waits for the data to be submitted. Also, the payment platform is flexible as to the ways this additional information is requested and accepted from the web service.

The payment platformIf the payment is performed by using payment cards, the payment platformIf the payment is performed by using alternative payment method, the payment platform may request any optional parameters of the initial payment request.`avs_datacustomer`Additional information the payment platform requests typically concerns the customer and the payment method.may request the parameters of the—Address Verification Service requirements, AVS—or any parameters of theobjects.

If you provide all the mandatory and optional parameters in each payment initiation request, you will never be required to submit additional information. Otherwise, you should implement the scenario in which during the payment processing, the payment platform requests additional information and you submit the information.

Additional information may include one-time verification codes required for customer authentication. Since these codes cannot be received in advance, you should configure your web service to respond properly in such cases.

The following sections provides more details about the workflow.

## The workflow

The payment platform or provider, as well as a payment system may require additional payment information.

*callbacks and responses*There are two ways the payment platform requests any additional information:. Normally, the payment platform requests additional data in callbacks; in which case you are not required to issue any additional requests. Alternatively, you can issue a request for payment status and have the payment platform respond with a response that specifies what additional information is required.

*the request*Then, the web service needs to generate and sendthat contains additional information. After the payment platform discovers that additional information is required, it waits for submission of the additional information for 30 minutes. If the payment platform does not receive the request with the additional information within these 30 minutes, the payment is automatically declined. Although, your web service can resend the request with partial or even empty additional data, in this case, the 30-minutes time-out is reset. This way, you can prolong payment processing, if you need more time to collect all the additional data. Note though, that you can not prolong payment processing beyond the payment processing threshold.

*The parameter set*`additional_data200 OKadditional_data`inside the request body may vary—you can specify all the parameters, part of the parameters, or no parameters at all, but you always must specify theobject inside the request. If the request the payment system receives does not contain the object, the payment system considers the request incorrect and sends an error response. If the request contains all the required parameters, the payment platform responds with theresponse. If the request contains theobject with no the required parameters or only a part of required parameters, the payment platform responds with a callback or a response that lists with the rest of the required parameters.

As soon as the payment platform obtains all the required information, the payment platform continues to process payment.

During interaction with the payment platform, your web service is required to do the following:

`200 OK`*step 1*The payment platform responds with theresponse when payment platform receives all the required parameters with correct values. If not, the payment platform requests additional data again starting at.

The information about the format of a callback and a response that may list with parameters and the request format are covered in greater details below.

1. `clarification_fields`Receive a callback or a response with theobject that lists the required parameters.
2. `additional_data`*and*Send the request that contains all the required objects and parameters including theobjectsignature to theendpoint by using POST HTTP method.
3. `200 OK`Receive and handle theresponse.

## Callback and response format

There are two ways the payment platform requests any additional information: callbacks and responses to a request for payment status.

*The callbacks*`clarification_fields`when payment processing by using payment cardThe following is the example of the callback that is used to request the customer postal code and address that AVS requires.that the payment platform sends to request additional payment information use the standard format described in . Note that in this case, the callbacks contain theobject that lists with required parameters.

*The responses*The following is the example of the response to the request that a merchant web service sends to theendpoint. The response is used to request the customer email, first and last name, billing address, and the day of birth.that the payment platform sends to request additional payment information use the same format that the callbacks use.

## Request format

Your web service needs to submit the requested additional payment information in a request to theendpoint by using POST HTTP method. The request must contain the following:

In the following example, the requested additional information includes the customer postal code and address that the payment platform requests in the callback example above.Thus, a correct request must include project and payment IDs, signature and additional payment information.

The following is the example that contains two request bodies. In this way, a merchant web service prolongs payment processing, when it needs more than 30 minutes to collect all the additional data. In the example, a merchant web service sends the first request with empty additional data just to prolong payment processing. Then, a merchant web service resends the request with all the requested additional data that includes the customer email address, first and last name, billing address and date of birth that the payment platform requests in the response example above.

- `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, see .—object that contains general request identification information:
- `additional_data``interface_type`Theobject is optional.— object that contains additional payment information that payment platform requests. The object may list all the parameters, part of the parameters, or no parameters at all.
