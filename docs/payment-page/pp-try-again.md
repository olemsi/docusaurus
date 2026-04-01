# Payment retries

## Overview

—for example, when there are insufficient funds on the payment card the customer is using to make the purchaseWhen making payments using Payment Widget, customers usually need one attempt to complete the payment, but sometimes they have to repeat the procedure. In such cases, the Platform payment platform provides the capability of retry attempts to make one payment (a&#160;payment with the same identifier) during a single session on Payment Widget.

Generally, if the payment has been declined, the final page of the payment form with an error message is displayed to the customer. In this case, without the functionality of payment retries, the Payment Widget session is completed, and, to repeat the attempt, the customer has to go back to the web service to initiate a new payment. With the capability of retry attempts set up, if the payment fails, it can be attempted again within a single session; in this case, the error message and the button for retrying the payment are displayed on the final page of the payment form.

This also applies to cases when payment methods or method groups are preselected.Since all retry attempts are made within a single Payment Widget session, the parameters specified in the request for opening Payment Widget remain unchanged for all subsequent attempts.

Overall, when the payment retries functionality is used, the options of payment method selection are determined as follows.

The number of attempts and the time allocated for executing these attempts are limited. These restrictions can be configured upon coordination with your account manager and apply to all payments within a project for which the functionality of payment retries is set up.

| &lt;iframe width="320" height="616" data-cookieconsent="marketing"   data-cookieblock-src="en_pp_try_again_embed_1.html" frameborder="0" allowfullscreen="true">                 &lt;/iframe> |
| --- |

| &lt;iframe width="320" height="616" src="en_pp_try_again_embed_01.html" frameborder="0" allowfullscreen="true">                 &lt;/iframe> |
| --- |

| &lt;iframe width="320" height="616" data-cookieconsent="marketing"   data-cookieblock-src="en_pp_try_again_embed_2.html" frameborder="0" allowfullscreen="true">                 &lt;/iframe> | &lt;iframe width="320" height="616" data-cookieconsent="marketing"   data-cookieblock-src="en_pp_try_again_embed_3.html" frameborder="0" allowfullscreen="true">                 &lt;/iframe> |
| --- | --- |

| &lt;iframe width="320" height="616" src="en_pp_try_again_embed_4.html" frameborder="0" allowfullscreen="true">                 &lt;/iframe> | &lt;iframe width="320" height="616" src="en_pp_try_again_embed_5.html" frameborder="0" allowfullscreen="true">                 &lt;/iframe> |
| --- | --- |

| Preselected payment method or method group | First attempt | Each retry attempt |
| --- | --- | --- |
| (none)– | any payment method available | processing a purchase—any of the payment methods available for making a purchase`auth`placing an authorisation hold—any of the payment methods available for performing anoperationdepending on the action performed during the first attempt: |
| card payments | card payments | card payments or (if agreed upon and set up) Apple Pay or Google Pay |
| (group of methods)alternative payment method | (group of methods)specified method | (group of methods)specified method |

::: tip
Cookies are required for the emulator to function properly. The emulator will not load without cookies.
:::

::: tip
`authsale`If the payment method has not been preselected, should the customer decide to retry the payment, they can choose one of the payment methods that support the type of the operation performed during the first attempt. For example, if the first attempt involved placing an authorisation hold as part of performing a two-step purchase (), then for every subsequent attempt the customer can select the method for which two-step purchases are supported, so that the authorisation hold is performed instead of the withdrawal of funds ().If card payments are preselected and such option has been set up for the project, the customer can choose to retry the payment not only with the card but also with Apple Pay or Google Pay. This option is set up separately, upon agreement with your Platform account manager.If you specify one of the alternative payment methods in a payment request, all subsequent retry attempts are performed with the use of this method. Another payment method cannot be selected.If you provide a payment card token in a payment request, all subsequent retry attempts are performed with the use of this token. Another payment method or payment instrument cannot be selected.Keep in mind the following considerations for payment method selection when using the functionality:
:::

## Usage scenario

The following steps present the customer procedure of making a purchase with the capability of retry attempts:

1. The customer confirms the purchase in the merchant web service.
2. The customer is redirected to Payment Widget which is generated according to the parameters specified in the request for opening Payment Widget. The customer performs the required actions and waits for the purchase result.
3. After the purchase has failed, the final page of the payment form with the button for retrying the payment is displayed to the customer. Upon clicking the button, the customer is redirected to step&#160;2.
4. After the payment has been completed, the information is displayed on the standard final page of the payment form (without the button for retrying the payment).

## Special aspects

If you want to set up the functionality of payment retries, consider the following aspects:

- *The requirement to display the final page of the payment form.*With the functionality of payment retries, the final page with the payment result must be displayed to the customer. If automatic customer redirection to the web service is set up, the customer cannot retry the payment. For more information, see .
- *Support for Payment Widget customisation.*If the payment form design is implemented on the basis of another interface model (not the basic one), coordinate with the Platform account manager the implementation of an additional element on the payment form—the button for redirecting the customer to a payment attempt—and, if necessary, provide the corresponding template layout to the technical support specialists.
- *The time limit for repeating payment attempts.*However, if there is a time limit for making this payment via Payment Widget (details), the customer can see the timer counting down the amount of time allowed for this payment. At this point, the time restriction on the payment attempts is ignored. In any of the above cases, ifIf there have been no successful retry attempts over the time allocated for using Payment Widget, the payment is declined, and the final page with the corresponding notification is displayed on the payment form.The countdown for all retry attempts begins at the moment when the payment failure is registered in the payment platform for the first time. In this case, the timer is not displayed on Payment Widget.

## Setup

To have the capability of retry attempts set up, merchants should complete the following steps:

1. Coordinate the process with your Platform account manager: discuss the setup procedure and whether it is necessary to test the functionality. Also consider the restrictions on the number of attempts and the time allocated for making the attempts. These limits apply to all payments within the project and can be configured by the Platform specialists according to the needs of merchants. Usually, such restrictions are set to 5 attempts that must be performed within 10 minutes.
2. If it was agreed that testing is required, wait to be notified by the Platform specialists when the functionality is ready, then test the payment form workflow with the new capability. After that inform the account manager that you are ready to launch the functionality in your production environment.
3. Receive the notification from the Platform specialists about the completion of the capability setup.

## Workflow

The following diagram illustrates the payment retries workflow:

When payment retries are processed, the payment status can vary:

All possible payment statuses used within the platform are described in .

- `processing`—checking for the availability of retry attempts in case the purchase fails (when step&#160;1 on the diagram is performed) or upon receiving payment data from the customer within the scope of the current retry attempt (after step&#160;6 is performed).
- `awaiting customerdecline`—waiting for the customer actions. The status remains from the moment when the availability of retry attempts is identified within the payment platform (at step&#160;1) and until the customer payment data is received (after step&#160;6 is performed) or until the attempt time limit expires (in this case, the payment gets thestatus).
- `success`or authorisation hold—the required action has been completed (one of the retries has resulted in the debiting of funds).
- `decline`or hold on funds—all the possible retries have failed (none has led to the debiting of funds) or the time allowed for the attempts has expired. The same status is assigned when the customer declines to repeat the attempt.

## Callbacks

During the process of payment retries, intermediate and final callbacks are sent from the payment platform to the web service.

*Intermediate callbacks.*`is_new_attempts_availabletimeout_attemptsss`If the purchase has failed and the availability of retry attempts has been identified, an intermediate callback is sent from the payment platform to the web service. This callback contains information about the availability of retry attempts (specified in theparameter) and the remaining time allowed for these attempts (specified in theparameter in seconds—).

`is_new_attempts_availabletrue`In the intermediate callbacks, theparameter is set to, which implies that all of the following conditions have been met:

`100028024is_new_attempts_available = trueattempts_timeout&#160;=&#160;600`In the following example of the callback body, you can see that for the purchase with the identifierrepeating payment attempts is allowed () and the time limit for the attempts is set to ten minutes ().

*Final callbacks.*`is_new_attempts_availablefalse`If the payment has been completed or cannot be completed within the session, a final callback is sent from the payment platform to the web service. In this case, theparameter is set todue to one of the following conditions:

In the following example of the callback body, you can see that the time for performing retries has expired and the purchase has been declined.
