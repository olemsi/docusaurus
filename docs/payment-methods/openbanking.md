# Open Banking

Open Banking is a group of bank-payment methods where the customer pays from a bank account through the bank or provider flow instead of entering card data.

## What this page helps you do

Use this page if you want to quickly understand:

- what Open Banking means in this documentation
- which countries are covered
- what is different from card payments
- where to go next for country-specific setup

## What is different about Open Banking

Compared with card payments, the main integration differences are:

- the customer is redirected to a bank or provider flow
- the available banks depend on country, provider, currency, and project setup
- iframe mode is generally not suitable for provider and bank redirections
- payment confirmation may take longer than for standard card flows

## Supported countries

The country-specific method pages are:

- [Austria](./austria.md)
- [Belgium](./belgium.md)
- [Estonia](./estonia.md)
- [Finland](./finland.md)
- [France](./france.md)
- [Germany](./germany.md)
- [Greece](./greece.md)
- [Hungary](./hungary.md)
- [Latvia](./latvia.md)
- [Lithuania](./lithuania.md)
- [Netherlands](./netherlands.md)
- [Norway](./norway.md)
- [Poland](./poland.md)
- [Portugal](./portugal.md)
- [Romania](./romania.md)
- [Spain](./spain.md)
- [Sweden](./sweden.md)
- [UK](./uk.md)

## What you usually need before integration

For the first implementation, you typically need:

- the target country or countries
- the target currency
- confirmation that the relevant Open Banking methods are enabled for your project
- a decision whether the flow will be launched through Payment Widget or Host-to-host API

If the exact availability matrix for your project is unclear, confirm it with your Platform account manager before implementation.

## Integration path

Choose the path based on the interface you use:

- use [Payment Widget](/payment-page/) if you want the hosted checkout form to handle method and bank selection
- use [Host-to-host API](/gate/) if you want to build and control the flow from your own backend and frontend

## What to expect in the payment flow

In the normal Open Banking flow:

1. The customer starts payment in your checkout or in Payment Widget.
2. The customer selects a bank, unless the bank is preselected.
3. The customer is redirected to the provider or bank service.
4. The customer confirms the payment there.
5. The platform sends the result back through callbacks.

Because the customer leaves your interface during the bank step, redirect handling and callback processing are the core technical parts to get right.

## Read next

Start with the country page you actually need. For example:

- [Germany](./germany.md)
- [Netherlands](./netherlands.md)
- [Poland](./poland.md)

Then move to your integration interface:

- [Payment Widget docs](/payment-page/)
- [Host-to-host API docs](/gate/)
