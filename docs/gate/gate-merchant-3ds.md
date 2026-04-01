# 3‑D Secure authentication on merchant side

## General information

Customer 3‑D Secure authentication can be performed either on the Platform payment platform side or on the merchant side. If authentication is performed on the merchant's side, the authentication result must be sent to the payment platform in order to make a payment. Repeated authentication on the payment platform side will not occur.

To enable the capability, contact technical support (support@platform.dev).

## Sending the 3‑D Secure authentication result

`authentication_data`Information about the 3‑D Secure authentication result is passed in theobject in a request for performing a one-time purchase, including purchases that use a token or saved card data, or a request for card verification. Data is passed in the following parameters:

| Parameter | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `cavv` | string | `authentication_status=Y or A`Mandatory if | Cardholder authentication verification value (base64 encoded, 20 bytes in a decoded form) |
| `ds_operation_id` | string | `threeds_version=3ds_2`Mandatory if | . Supported for 3‑D Secure 2The unique operation identifier assigned by the Directory Servers |
| `eci` | string | `authentication_status=Y or A`Mandatory if | The electronic commerce indicator, for more information, see the section |
| `threeds_version` | string | Optional | 3‑D Secure3‑D Secure 1 or 3‑D Secure 2`3ds_1``3ds_2``non_3ds`Indicator of theauthentication: |
| `threeds_full_version` | string | Optional | 2.3.1, for exampleThe version of the 3‑D Secure protocol |
| `xid` | string | Mandatory | Transaction identifier resulting from authentication processing (base64 encoded, 20 bytes in a decoded form) |
| `enrollement_status` | string | Optional | `YNU`The enrollment response from the VERes message from the Directory Server :,,. Supported for 3‑D Secure 1 |
| `authentication_status` | string | `enrollement_status=N or U`Mandatory, except if | Cardholder authentication status. Possible values are:`Y`—the cardholder was successfully authenticated by their card issuer`A`—the cardholder authentication was attempted`U`—the card issuer was unavailable during the authentication attempt |
| `authentication_status_reason_code` | string | Optional | Code of the authentication status reason |
| `authentication_flow` | string | Optional | . Supported for 3‑D Secure 2`Frictionless`,`Challenge`Scenario of 3‑D Secure authentication |

## Related topics

The following topics can be useful when implementing payments through Gate:
