# Amount modification

In some payment methods, customers can enter or edit the payment amount so that it will be different from the amount initially specified in the purchase request. Under certain circumstances, the provider service might successfully process this payment, consequently, the final callback will contain the amount that the customer actually paid, even though it differs from the amount in the initial request. To prevent any potential financial losses, you should  correctly accept and process such callbacks.

This section covers possible processing scenarios for such payments and includes request and callback examples and follow-up recommendations.

To check whether customers can change the payment amount when using a specific payment method, see this method's section in Payment methods.

## Payment processing scenarios after the customer changed the payment amount

If the customer intentionally or accidentally enters a payment amount which is different from the one in the initial request, there are three possible processing scenarios:

In the last scenario, it is crucial to remember that the amount specified in the final callback is the actual sum of money you will receive from your customer. Note that it is your responsibility to handle such situations.

Ask your Platform key account manager what scenario is relevant to you.

- the provider service declines the payment;
- the provider service approves the payment, but the payment platform assigns it an intermediate status, and then the  conflict is resolved manually by Platform technical support specialists
- the provider service completes the payment, the payment platform processes it successfully and sends you the final callback with the new amount entered by the customer.

## Sample purchase request and callback for payments with changed amount

Let's say you specified 100,00 USD as the payment amount in the following request:

If the customer specifies the 90,00 USD amount when paying, and the payment is successfully processed by the provider and the platform, the platform will respond with the following callback. Note that the callback includes the actual amount paid by the customer (highlighted in bold in the following example) which is different from the initial amount in the payment request.

## What to do when the actual paid amount differs from the initially requested one

Aforementioned scenarios might lead to financial losses. For instance, you might not notice that your customer paid less than was due and deliver the ordered goods and services or make a larger deposit to their account.

To prevent possible losses:

- always check whether the amount in the initial payment request matches the amount in the final callback returned by the payment platform;
- ensure that your system correctly processes the callbacks with changed amounts;
- make sure your system interprets the changed amount correctly. For example, credit the customer account exactly for the sum the customer actually paid.

## Related topics

- — a section with information on processing of payments implemented through Payment Widget.
