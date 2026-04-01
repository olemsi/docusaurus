# Automatic payment currency selection

## Overview

This type of payment currency selection is available for all payment methods.The capability of automatic payment currency selection does not allow the customer to select the currency to perform the payment.Automatic payment currency selection uses exchange rates set by Platform. To learn more about exchange rates, contact your account manager.

- [European Central Bank](http://www.ecb.europa.eu)
- [Central Bank of Russia](http://www.cbr.ru/)
- [Currencylayer service](https://currencylayer.com/)

## Setup

You do not need to update your web service to support automatic payment currency selection.

## Use

Automatic payment currency selection does not require any additional actions on your part and is automatically performed during the payment procedure.

`operationsum_initialsum_converted`Currency conversion information is included in payment result callbacks: theobject contains theobject that specifies the amount and the initial currency and theobject that specifies the amount and the currency after the conversion operation. For more information about these objects, see .

`100 USD519.41 PHP`The following example shows information about a purchase with a conversion operation in whichare converted into.
