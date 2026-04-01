# Managing authorisation holds

## Debiting of authorised amount

The request is sent by using POST (HTTP) method to the following endpointand must contain the following objects and parameters:

Thus, the correct request for debiting of authorised amount must include project and payment IDs and signature.

`2,000.00 USDcustomer_12541333******001942`The following is the example of a callback with the information about the successfuldebiting customer account theinitiated the payment cardin theproject.

- `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general request identification information:
- If required, you can also add any other additional parameters.

```json
{
    "general": {
        "project_id": 42,
        "payment_id": "456789",
        "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm...=="
    }
}
```

## Release of authorised amount

The request is sent by using POST (HTTP) method to the following endpointand must contain the following objects and parameters:

`2,000.00 USD541333******001942`The following is the example of a callback with the information about the successful cancelling of theauthorisation hold for the payment cardin theproject.

- `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general request identification information:
- If required, you can also add any other additional parameters.

```json
{
    "general": {
        "project_id": 42,
        "payment_id": "456789",
        "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm...=="
    }
}
```
