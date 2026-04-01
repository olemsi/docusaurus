# Request format

## Overview

*requests*When using Payment Widget, you pass all data from web service inwhich are HTTP-messages with special structure. The data format and addressing differ depends on how you want to open the payment form.

This section describes supported methods for submitting requests to open Payment Widget, data formats, and addressing.

## Submission methods

Both POST and GET methods are supported for all Payment Widget invocation method. The payment in no way restricts invocation method and it is up to the web service to choose Payment Widget invocation method. If an HTTP request does not specify request method it defaults to GET. Though, it is recommended to use POST method because of limitations imposed by some browsers on length of address string.

The main properties of POST and GET methods are presented in the following table.

*Data size is limited by URL length.

|  | POST | GET |
| --- | --- | --- |
| Security | More secure because parameters are contained in request body | Less secure because parameters are included in URL string |
| Submission of all possible parameters supported by the Payment Widget API | + | * |
| Submission as a link | – | + |
| Request parameters modification in address string | – | + |

## Addressing parameters

When you plan to open Payment Widget in a new tab, the Payment Widget URL is created as follows:

You do not need to specify any URL when you open Payment Widget in an iframe element or in a modal window.

- or, if necessary, domen PP altIf you use the GET method, use Payment Widget base URL as the domain name (https://paymentpage.platform.dev) while the relative URL consists the target URL, question sign (?) and parameter “name-value” pairs delimited by ampersand sign (&amp;). Name and value in each “name-value” pair are separated by an equal sign (=).// Target URL for Payment Widget
/payment

// Data string
payment_currency=EUR&amp;project_id=42&amp;payment_amount=1000&amp;customer_id=123&amp;payment_id=4438&amp;signature=AE5hmtzdP0Dt7qGTg%3D%3D

// Complete URL
https://paymentpage.platform.dev/payment?payment_currency=EUR&amp;project_id=42&amp;payment_amount=1000&amp;customer_id=123&amp;payment_id=4438&amp;signature=AE5hmtzdP0Dt7qGTg%3D%3D
- If you use the POST method, use Payment Widget base URL as the domain name (https://paymentpage.platform.dev) while the relative URL consists of the target URL used to initiate target activities in Payment Widget. The parameters are located in request body.
