# Redirect options

## Overview

, such as banks, payment systems, and providers,. This can be necessary for customer authentication, payment confirmation by customers, and other actions.Customer redirection can look as follows.During payment processing, customer redirection from the payment form pages to the services of third partiescan be required

in an iframe object,(a new tab can be opened automatically or by the click of the button, with the forced redirection once the specified time period expires)Depending on a payment method and considering the special aspects of its use, one of these options is applied in the payment platform by default. At the same time, when setting up a method within a certain project, the merchant can coordinate the application of another option (from the available ones) with the technical support specialists. Finally, for individual payments, it is possible to select the option of redirection in a separate tab by using the parameters for opening Payment Widget.In the Platform payment platform, various options for such redirections are supported: with the pages of the third-party services openedin the current or in a new browser tab.

## Request format

, disregarding the option specified for the method in general`force_acs_new_window10`If for a separate payment, it is required to specify the option of opening the page of a third-party service in a new browser tab, the request should contain the boolean parameterwith the value. (Using this parameter with the valuedoes not affect the redirection options.)

In the following example of a request for purchase processing, the preselected method is Open Banking in Romania and the page of the bank Banca Comerciala Romana, which supports the purchase by using this method, is set to open in a separate tab.

## Related topics

When working with various customer redirections, the following articles can come in handy:

- —with the information about customer redirections from the payment form pages to the web service.
- Methods—with the information about payment methods and the work with them.
- —with the descriptions of parameters that can be used in requests for opening Payment Widget.
