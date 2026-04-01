# Customer currency selection

## Overview

, Apple Pay, and Google PayCurrency conversion when the customer selects the payment currency is supported for cardpayments. It has the following characteristics:

Currencies available for the customer to select are displayed on Payment Widget in a drop-down list with currency codes. If the payment request contains a code of the currency from this list, this currency is shown as preselected.

Selecting from all available currencies is supported for one-time purchases, including scenarios when payment retries are used.

`10.00 USD95.00 USD57.60 BRL582.00 BRL485.00 BRL`with taxesThe customer can confirm the payment in the initial currency of the request or select another. When a different currency is selected, the payment form displays the amount in the selected currency instead of the initial payment amount. Let's say the payment amount isand the customer selects to pay in Brazilian reals, then the payment form will display the amount converted to reals—for example,.

`10.00 USD95.00 USD57.60 BRL582.00 BRL485.00 BRL`Following this step, the customer can see the amount in the selected currency on all pages of the payment form including the payment result page. Thus, in our example with the initial payment amount of, the customer is shown the amount in the selected currency—.

- The customer selects the currency out of all available.For card payments, the currency availability can be limited by filtering all available currencies by those relevant for the country where the card was issued (determined by the card number) and a specific currency passed in the request. For example, if the customer uses the card issued in Brazil, the available currencies can be the initial currency specified in the request and the Brazilian real. However, if the currency relevant for the card country cannot be used as operational, the option to filter all available currencies can either be removed, or the list can be reset to all available. Thus, the list of available currencies can differ depending on the project, payment method, and payment instrument.Available currencies encompass all currencies supported as operational for the merchant's project in question and also available for performing conversion within the initiated payment session.
- The merchant receives the funds in the currency selected by the customer: dollars, euros, or pounds sterling.If the customer selects to pay in euros, US dollars, or pounds sterling, and the payment is processed in the selected currency, the merchant receives the funds in this currency. If the Bulgarian lev is selected, then the merchant receives the funds in euros (for Visa payments) or in dollars (for Mastercard payments). In all other cases, the merchant receives the funds in dollars.
- You can contact your account manager to learn more about exchange rates and the specifics of how they are applied.This option uses exchange rates set by
                    Platform.
- if for the project in question these buttons are shown on the page to enter card details, this currency selection option is not available.For Apple Pay and Google Pay payments, this currency selection option is supported if the buttons to select these methods are shown on the payment method selection page.

## Setup

To set up the functionality of currency conversion when the customer selects the currency:

1. , whether testing is necessary, what payment methods and relevant currencies are required, and whether you need the option to filter all available currencies by the customer's card countryWith your Platform account manager, discuss and agree upon setting up this functionality for specific projects.
2. If you need testing, get notified by the Platform specialists that the payment form is ready for being used in test mode, test this functionality, and inform Platform that everything is ready to launch.
3. Get notified by the Platform specialists that the functionality has been added and fully set up.

## Use

You do not need to update your web service to support payment currency selection by customer. The following is a workflow of a one-step purchase with saved card data which requires conversion to the currency selected by the customer.

`operationsum_initialsum_convertedsum_customer`Currency conversion information is included in payment result callbacks: theobject contains theobject that specifies the initial amount and the currency of the request and theobject that specifies the amount and the currency after the conversion operation. In addition, theobject contains the following information about the customer's currency selection:

However, the currency selection information is not specified in a callback if the information about the currency selected by the customer is passed in the initial payment request.

`10.00 USD95.00 USD57.60 BRL485.00 BRLBRL`with taxes`57.60 BRL582.00 BRL485.00 BRL`and the amount the customer actually paidis equal toThe following is an example of the payment with a conversion operation in whichare converted intoas the customer selected to pay in.

- `amount`—operation amount in the currency selected by the customer
- `currency`—code of the currency selected by the customer
