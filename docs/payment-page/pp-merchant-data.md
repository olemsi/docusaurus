# Extended purchase data

## Overview

`merchant_data`In addition to specifying required and provider-recommended parameters in the requests, merchants sometimes need to pass data (related to specific payments and their statuses) that can be subsequently used by them at their discretion. For this purpose, the parameters for opening Payment Widget include theparameter that allows passing various data as a string and then receiving these data together with other information in final callbacks with payment results.

`merchant_datapayment_descriptionreceipt_data`Theparameter can be used for keeping track of extended information about the order, applying promotions and bonus points, and other relevant data. In addition, the value of this parameter can be combined with the information passed in theparameter and the receipt information passed in theobject. As a result, all necessary data can be provided in callbacks without passing certain pieces of information multiple times in different parameters.

::: tip
`datamerchant`When processing payments via Gate, you can utilise theparameter passed in theobject (learn more).
:::

## Use case

Here is an example of a use case when a merchant in the video game industry needs to:

Merchant specialists in charge of the integration inform the Platform account manager about these requirements. As a result, the following workflow is devised and set up:

- collect and process data about add-on services that the gamers purchase as they play.
- Provide the company's employees with the timely access to such information about each customer.

1. `merchant_data``merchant_data`Thestring includes the following:`itemsskudescriptioncount`Thearray in which each element contains the SKU (), the description (), and the number of the purchased services ().`total_count`Theparameter with the total number of the purchased services or goods items.`user_id`Theparameter with the internal identifier of the customer.Each request for opening Payment Widget sent from the merchant web service contains information about the purchased services—passed as a JSON object in theparameter.
2. `merchant_data`When a payment has been processed, the information specified in thestring is passed to the merchant web service in the final callback and can be viewed in the payment information tab in Dashboard.
3. The web service processes this information as needed together with the rest of the payment data.

## Overview

`merchant_datareceipt_data`In addition to specifying required and provider-recommended parameters in the requests, merchants sometimes need to pass data (related to specific payments and their statuses) that can be subsequently used by them at their discretion. For this purpose, the Payment Widget API includes parametersand. They allow merchants to pass various data as a string and then receive these data together with other information in final callbacks with payment results while also ensuring that necessary information is shown on the payment form and specified in the receipts.

- `merchant_datapayment_description`Theparameter can be used for keeping track of extended information about the order, applying promotions and bonus points, and other relevant data. In addition, the value of this parameter can be combined with the information passed in theparameter. As a result, all necessary data can be provided in callbacks without passing certain pieces of information multiple times in different parameters.
- `receipt_data`Theparameter can be used for passing information about line items in the order (currently in progress), so that these details can be subsequently shown on the payment form and specified in the receipt sent to the customer's email.

::: tip
You can use similar capabilities when processing payments via Gate (learn more).
:::

## Use case

Here is an example of a use case when a merchant in the video game industry needs to:

Merchant specialists in charge of the integration inform the Platform account manager about these requirements. As a result, the following workflow is devised and set up:

- collect and process data about add-on services that the gamers purchase as they play.
- Display said information on the payment form while the order is being processed and then send this information to the customer's email in the receipt.
- Provide the company's employees with the timely access to such information about each customer.

1. `merchant_datareceipt_data``merchant_data``itemsskudescriptioncount`Thearray in which each element contains the SKU (), the description (), and the number of the purchased services ().`total_count`Theparameter with the total number of the purchased services or goods items.`user_id`Theparameter with the internal identifier of the customer.Thestring includes the following:`receipt_datapositionsdescriptionamountquantity`Thestring includes thearray where every item contains its description in theparameter, the total cost of purchased items in theparameter, and the number of purchased items in theparameter.Each request for opening Payment Widget sent from the merchant web service contains information about the purchased services—passed as a JSON object in parametersand.
2. `receipt_data`The information specified in theparameter is displayed to the customer on the payment form, and once the payment has been processed, is sent to the customer's email in the receipt.
3. `merchant_data`When the payment has been processed, the information specified in thestring is passed to the merchant web service in the final callback and can be viewed in the payment information tab in Dashboard.
4. The web service processes this information as needed together with the rest of the payment data.

## Setup

`merchant_data`To use the capability of passing information in theparameter, contact your account manager. The capability is set up in the payment platform by the Platform specialists who will subsequently inform you that it is ready to be used and that the extended information is now available in callbacks and in the Dashboard interface.

`receipt_data`To use the capability of passing information in theparameter, no additional communication with the Platform specialists is required.

## Data format

`merchant_data"\`In requests for opening Payment Widget to process payments, the data specified in theparameter must be passed as a JSON object. However, because this parameter is a string  (string), to pass the JSON object in it when using the HTTP POST method, you need to escape thecharacter (quotation mark, U+0022) by adding(backlash or reverse solidus, U+005C) in front of it. It is necessary in order to distinguish on the level of programmatic interaction which quotation marks close the string and which quotations marks are part of the JSON contents within the string. At the same time, when sending HTTP GET requests, there is no need to use escape sequences if you pass a JSON object (the string is going to be interpreted correctly in this case even without escaping).

`merchant_datadatamerchant`In final callbacks with payment results, the data specified in theparameter is passed in theparameter of theobject.

In the following examples, the contents of the parameter are split into several lines for the reader's convenience.
