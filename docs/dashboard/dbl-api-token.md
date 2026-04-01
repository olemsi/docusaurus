# Data access model

## Overview

When the Data API is used, access rights are managed with the help of API tokens.

Each of these tokens is generated in the Dashboard interface and is associated with a specific user account and its permissions which regulate access to the merchant's projects. Alongside the token, a secret key is generated to be used for signing requests together with this token and for verifying responses to these requests (to learn more, see ).

In the payment platform, managing tokens of the Dashboard user accounts is carried out in compliance with the following requirements:

In the merchant's web service, managing tokens and keys may require additional regulations, in compliance with the company's security policies.

- Each token is a string, 30 characters long, encoded in UTF-8.
- Each token is valid from the moment of its generation and till the moment when the new token has been generated or when this token has been deactivated. Keep in mind that a deactivated token cannot be reactivated.
- Any number of tokens can be generated for one user account; however, the only vaild token is the one which has been generated last.
- A valid token can be used any number of times without any restrictions imposed on its lifetime.
- In the payment platform, the token inherits the permissions of the user account it is associated with, thanks to which if the permissions granted to a certain user account are modified, generating a new token is not necessary.
- Users authorized to manage tokens can generate and deactivate tokens for their user accounts without any specific constrains.
- `401 Authorization Required`If the user account is deleted, the token is not deactivated automatically. However, the data access rights this token has inherited are revoked; hence, if the request is sent with this token, the platform returns the response stating that the access has been denied ().

## Granting permissions to manage tokens

**Merchant admin**Similarly to other cases of granting permissions to work with Dashboard, only the user whose user account has been assigned therole can grant and withdraw permissions to manage tokens.

To grant the right to manage tokens, the user with the Merchant admin role should:

**My teamManage API tokens**To withdraw the right to manage tokens, the user should go tosection, open the tab of the target user account, uncheck the box, save changes and make sure that they have been applied. In this case, the permission to generate a new token and to deactivate the token which is currently valid is no longer available for this user account; however, the permission to use the valid one remains available.

1. **My team**Go to thesection.
2. Open the tab of the target user account by clicking thebutton in the corresponding row of the registry.
3. **Manage API tokensSave changes**Check the boxand click thebutton thereby confirming the changes that were made.
4. **Manage API tokens**Make sure that the appropriate permissions were granted: the user account tab should now have the boxchecked.

## Generating and deactivating tokens

Generating and deactivating tokens is available only for the user accounts authorized to manage tokens.

To generate a token and a secret key, the user whose user account has the appropriate permissions should:

**DeleteAPI Tokens**To deactivate a token, in the user account profile the user should click thebutton on thepanel. Afterwards, the token is no longer valid and cannot be used to access the Data API.

1. **My profileMy profile**Go to thesection by clicking the user account name on the right in the main menu of the interface and selecting.
2. **New tokenAPI Tokens****New token**If thebutton is absent, it means that this user account was not granted the permission to manage tokens.Click thebutton on thepanel.
3. The secret key is displayed explicitly only until the page is updated following which it gets hidden and is no longer available. If necessary, when the secret key was lost or compromised, for example, a new token-key pair should be generated.Copy and save the value of the token and the secret key in accordance with the internal informational security guidelines of the merchant.
