# Types of saved card payments

## Definition

*COF purchase*for instance,is a payment type in which customer authorizes merchant to store customer's payment credentials for subsequent use for one or more later transfers of funds from customer to merchant. In COF purchases, no payment instrument verification (card CVV entry) is required.

*debiting*In COF purchases, fund transfers from customer to merchant are called.

## Overview

COF purchase support may be useful for building long-term customer loyalty when you need to offer your customers easy and hassle-free checkout.

The payment platform supports the following COF payment types:

In any COF purchase, storage of payment credentials must be authorised by customer; customer is also required to agree to specific credential usage terms.

*initialisedprocessing options*detailsdetailsor migrating information about COF purchases from an external acquirer (details)Any COF purchase needs to be. You can do it in a variety of ways which includes performing the first debiting or payment instrument verification with the use of the corresponding request with appropriate parameters (). Once the COF purchase is registered, you can selectfor it.

- *One-click purchase*is initiated by customer occasionally without any schedule or amount limitation or terms. For instance, customer can make a one-click purchase of a movie to view it online.
- *Autopurchase*is initiated by merchant without any schedule or amount limitation or terms. For example, when customer's mobile phone account balance falls below specific threshold, merchant may automatically top up the account.
- *Regular purchase*is initiated by merchant based on specific schedule and fixed amount. The debiting terms may be stored either on the payment platform or in your web service. For example, weekly online subscription may be regularly debited to customer's account.

## Processing options

*debiting by requestdebiting by requestautomatic debiting*For one-click purchases and autopurchases, the Platform platform supports onlyoption while for regular purchases two options are available:and.

Regardless of processing option, you can perform COF purchases by using either basic scenario or scenario with submission of additional purchase information. The following sections describe the basic scenario:

- .
- .
