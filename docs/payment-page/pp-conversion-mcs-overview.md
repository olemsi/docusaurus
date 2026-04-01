# Selecting from the pre-defined set

## Overview

The pre-defined selection set includes the following currencies: EUR, USD, GBP, and RUB. When your project is configured, you can choose to include all of these currencies or only some of them. In case of standard currency selection, the exchange rate is defined by Platform's partner.

`USD`The list of currencies for the customer to select from is displayed on Payment Widget only if the payment request contains the code of the currency from the pre-defined set. In this case, the payment amount will be denominated in the currency which is specified in the request. For example, if you specifyin your payment request, the US dollar will be selected on Payment Widget and the payment amount will be denominated in US dollar.

The customer can use the default currency or select a different currency. If the customer selects a different currency, the payment form displays the exchange rate and the amount in the selected currency. This information is updated every five minutes.

`95,00 USD87,26 EUR`For example, if the payment amount isand the customer selects EUR as the payment currency, the payment form displays the exchange rate for the USD/EUR pair and the amount in euros, which in this example is equal to.

Upon completion of the payment procedure, the payment form shows to the customer the amount in the initial currency, amount converted to the currency the customer selected, and the exchange rate used for the conversion operation. In the example used here, the following information is displayed:

The same information is displayed on the payment form if the payment with the currency conversion is declined.

- `87,26 EUR`amount in the currency the customer selected:
- `95,00 USD`amount in the initial currency:
- exchange rate for the USD/EUR pair

## Setup

To learn more about the option when the customer selects payment currency and to set up this functionality, contact your Platform account manager.

## Use

You do not need to update your web service to support payment currency selection by customer. The following is a workflow of a one-step purchase which requires conversion to the currency selected by the customer out of the pre-defined set.

`operationsum_initialsum_converted`Currency conversion information is included in payment result callbacks:  theobject contains theobject that specifies the amount and the initial currency and theobject that specifies the amount and the currency after the conversion operation. For more information about these objects, see .

`mcs`If required, callbacks may also include exchange rates in theobject:

If you want callbacks to contain exchange rates, contact technical support service at support@platform.dev.

`95 USD87,26 EUR1.08876`The following is an example of the payment with a conversion operation in whichare converted intoat the exchange rate of(for this currency pair).

- `currency_pairEURUSD`—currency codes of the currency pair combined together without any separators (for example,)
- `rate1.08876`—the corresponding exchange rate (for example,).
