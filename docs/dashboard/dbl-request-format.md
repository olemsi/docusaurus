# Request format

## Overview

*requests*Data API SpecificationTo interact with the payment platform via the Data API, all data from the merchant's web service must be passed in—HTTP messages in a specific format—using the POST method. This section covers the general structure of such requests; for the information about the data structure of the specific requests, see the.

## Structure

Each HTTP request to the payment platform must include the following elements in the specified order:

`Host`[HTTP version 1.1](https://tools.ietf.org/html/rfc2616#page-31)In addition to the mandatoryfield, the header may include any other fields supported by. Below you will find a sample HTTP request with the recommended header fields and required parameters. The JSON string is formatted for better readability.

- `POST)v1/operations/getHTTP/1.1`The start line which indicates the HTTP method of the request (, the endpoint in the Data API (for example,), the protocol and its version ().
- `Hostbasic data api text link`The header with thefield which contains the domain name of the Data API ().
- An empty line which serves as a separator between the message header and the body.
- The message body which contains the JSON string encoded in UTF-8 with request data including the signature.

## Addressing parameters

`basic data api text link`The generated requests must include the base and the relative URLs. The base URL for the Data API requests is the domain name, and the relative URL is the path to the target endpoint in the interface according to the specification.

::: tip
`https://{domain name for the Data API requests}/{target endpoint path}https://basic data api text link/v1/balance/get`The absolute URL in this case takes the following format. For example, the absolute URL for the request to retrieve balance information on merchant's projects is. However, absolute URLs are not used for generating POST requests.
:::

## Message body

`"&lt;parameter name>": &lt;parameter value>`The message body must contain the request data in the JSON format. The JSON string follows the format. To prevent data loss as a result of spillage or spoofing when data is transferred to the payment platform, the JSON string must include the token and the signature with the request data, and the TLS 1.2 encryption protocol must be used to secure the data transfer. For more information about generating tokens, see , and to learn more about generating a signature, see .
