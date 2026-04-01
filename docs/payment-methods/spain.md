# Open Banking in Spain

Use this page if you need the Spain-specific variant of Open Banking and want the shortest path to a working integration.

## What this method is

Open Banking in Spain lets the customer pay from a Spanish bank account in EUR through the bank or provider flow instead of entering card data.

## At a glance

| Item | Value |
| --- | --- |
| Country | Spain |
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

- the Spain Open Banking method is enabled for your project
- your project can process `EUR` payments with this method
- whether you want to launch the flow through [Payment Widget](/payment-page/) or [Host-to-host API](/gate/)
- whether the customer should choose the bank or the bank should be preselected

## Bank selection

Spain Open Banking requires a bank selection step.

You have two common options:

- let the customer choose the bank in Payment Widget
- preselect the bank on your side and pass the bank identifier in the request

If you need the current list of available banks for a sale flow, request it from the Host-to-host API:

```text
POST /v2/info/banks/spain/sale/list
```

Use this endpoint when you build your own bank-selection UI or when you need an up-to-date list instead of a static one in documentation.

## Supported banks

The following banks are commonly used for this method. Treat this table as a reference, not as the source of truth for runtime decisions.

| Bank | ID |
| --- | --- |
| Banco Sabadell | 56611 |
| Bankinter | 56621 |
| Bantierra | 56631 |
| BBVA | 56641 |
| Caixa Bank | 56651 |
| Caixa Popular | 56661 |
| Caixa Rural Benicarlo | 56671 |
| Caja Rural de Asturias | 56681 |
| Caja Rural de Baena | 56691 |
| Caja Rural de Casas Ibanez | 56701 |
| Caja Rural de Extremadura | 56711 |
| Caja Rural de Jaen | 56721 |
| Caja Rural de Navarra | 56731 |
| Caja Rural de Onda | 56741 |
| Caja Rural de Rural Nostra | 56751 |
| Caja Rural de Salamanca | 56761 |
| Caja Rural de San Jose de Almassora | 56771 |
| Caja Rural de Soria | 56781 |
| Caja Rural de Villamalea | 56791 |
| Caja Rural de Zamora | 56801 |
| Caja Siete | 56811 |
| ING | 56821 |
| Kutxabank | 56831 |
| Santander | 56841 |
| Targobank | 56851 |
| Unicaja Banco | 56861 |

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

- [Open Banking overview](./openbanking)
- [Payment Widget docs](/payment-page/)
- [Host-to-host API docs](/gate/)
