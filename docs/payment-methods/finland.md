# Open Banking in Finland

Use this page if you need the Finland-specific variant of Open Banking and want the shortest path to a working integration.

## What this method is

Open Banking in Finland lets the customer pay from a Finnish bank account in EUR through the bank or provider flow instead of entering card data.

## At a glance

| Item | Value |
| --- | --- |
| Country | Finland |
| Currency | EUR |
| Payment instrument | Bank account |
| One-time purchases | Supported |
| Refunds | Not supported as a standard flow |
| Payouts | Not supported as a standard flow |
| Typical customer flow | Redirect to provider or bank |

## What matters technically

- the customer must select a bank unless you preselect it
- the payment continues on the provider or bank side
- iframe mode is not suitable for the bank redirection step
- final payment confirmation can take longer than for card payments

If your integration needs a strict final result, rely on callbacks and payment status checks instead of assuming the first redirect result is final.

## What you need before integration

Before implementation, confirm:

- the Finland Open Banking method is enabled for your project
- your project can process `EUR` payments with this method
- whether you want to launch the flow through [Payment Widget](/payment-page/) or [Host-to-host API](/gate/)
- whether the customer should choose the bank or the bank should be preselected

## Bank selection

Finland Open Banking requires a bank selection step.

You have two common options:

- let the customer choose the bank in Payment Widget
- preselect the bank on your side and pass the bank identifier in the request

If you need the current list of available banks for a sale flow, request it from the Host-to-host API:

```text
POST /v2/info/banks/finland/sale/list
```

Use this endpoint when you build your own bank-selection UI or when you need an up-to-date list instead of a static one in documentation.

## Supported banks

The following banks are commonly used for this method. Treat this table as a reference, not as the source of truth for runtime decisions.

| Bank | ID |
| --- | --- |
| Aktia Bank | 4971 |
| Alandsbanken | 55361 |
| Danske Bank | 55321 |
| Handelsbanken | 4981 |
| N26 | 4961 |
| Nordea Bank | 4991 |
| OmaSp | 55331 |
| OP Bank | 5001 |
| POP Pankki | 55341 |
| Saastopankki | 55351 |
| S-Pankki | 55371 |

## Integration path

Choose the path based on the checkout experience you want:

- use [Payment Widget](/payment-page/) if you want a hosted flow where the customer can choose the bank in the payment form
- use [Host-to-host API](/gate/) if you want to assemble the payload on your backend and control the flow yourself

## Payment Widget path

Start here:

- [Payment Widget quickstart](/payment-page/pp-quickstart-overview)
- [Payment Widget basic implementation](/payment-page/pp-quickstart-basic-implementation)

## Host-to-host API path

Start here:

- [Host-to-host API quickstart](/gate/gate-quickstart)
- [Host-to-host API basic implementation](/gate/gate-quickstart-basic-implementation)

## Implementation notes

- Do not open the bank step in an iframe.
- Treat redirects as part of the customer journey, not as the final payment result.
- Handle callbacks on the backend and update payment state there.
- If you preselect a bank, always use the current bank identifier list for the target flow.

## Read next

- [Open Banking overview](./openbanking.md)
- [Payment Widget docs](/payment-page/)
- [Host-to-host API docs](/gate/)
