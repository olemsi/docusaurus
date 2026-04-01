# Interaction models

*synchronousasynchronous*The Platform payment platform and merchant's web service interact by exchanging request and reply messages in the HTTP format: the web service issues requests and the payment platform responds to those requests. This interaction model supports two interaction models:and. If the payment platform is able to respond to request without resorting to any third parties such as customer or external payment system, it uses the synchronous model; otherwise the payment platform uses the asynchronous model.

## Synchronous model

*the synchronous interaction model*The payment platform useswhen it can generate the response by using only its own data and resources, for instance to return the current status of payment. Synchronous interaction is performed in a single HTTP session and allows you to send only one response. Normally, the time between the payment platform receives the request issued by the web service and the payment platform sends out the response is less than 100 ms.

## Asynchronous model

*The asynchronous interaction model*is used when to generate response, the payment platform needs to communicate with third parties, for instance when it processes payment which requires input from customer and/or payment system.

*and*In this model, the payment platform sends the following to merchant web service: acknowledgement that initial request is accepted and successfully validatedthe callback with final result (in case initial request is successfully validated). The model may also include exchange of messages with intermediate results between those two responses, for instance the payment platform may issue redirect to a form exposed by payment system.

Normally, the time between web service issues the initial request and the Platform payment platform sends out the first response is less than 100 ms; though, the time between request receiving and callback sending may vary depending on third parties that are involved in request processing.

To ensure correct asynchronous interaction with the payment platform, you need to properly implement reaction to callbacks you obtain from the payment platform. The reaction to the callbacks with intermediate results depends on the information the callbacks contain while the reaction to the callback with final result require send the receipt acknowledgement HTTP response:

`200 OK`The payment platform sends callbacks while web service returns theresponse.

- `200 OK`If the callback was successfully processed, specify HTTPstatus code. The response may not include a response body.
- If an error was detected while handling a callback, specify HTTP error status code. It is recommended to provide  one that are clearly defined the type of error and registered in the HTTP specification.
