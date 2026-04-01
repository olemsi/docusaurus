# Format of callbacks with payment results

To communicate the payment result, the payment platform sends a callback to the web service. The callback is arranged in a standard format described in .

3‑D Secure3‑D Secure 2`mpi_result`If payment processing involves theauthentication, callbacks may contain theobject with the following parameters:

These parameters are not passed by default. To add them to the callbacks you receive, contact the technical support at support@platform.dev.

`operationnon_3ds_reasontra, lve`If the authentication was not performed due to an applied exemption, theobject of the callback can also contain theparameter with the value.

- `mpi_operation_id`—operation identifier on the 3DS Server side
- `ds_operation_id`—operation identifier on the Directory Server side of the global card scheme
- `acs_operation_id`—operation identifier on the issuer's Access Control Server side
- `mpi_timestamp`—authentication time and date
- `cardholder_info`—the message you are recommended to display when notifying the customer about the payment result
- `authentication_flow0102`—authentication flow indicator:for the frictionless flow,for the challenge flow.
