# Signature generation

To verify data integrity and authenticate the messages your application exchange with the Some Platform payment platform, all the messages need to be signed. You must sign all your outgoing messages (for example, checkout request) and check signatures of all the incoming messages (for example, callbacks). Before generating signature, you need to prepare the payment data by packing all the payment parameters into a single string. The string is generated on the client side where you can use sdk_android for this purpose. The signing process requires the secret key provided by Some Platform therefore the signing procedure must be performed on the back end side of your app.

Generate the HMAC value based on the SHA-512 hashing algorithm and your secret key.Encode the result of step1 using Base64.Once you generate the string to sign on the basis of all the payment parameters, do the following:

**Input data**customer_id:5;payment_amount:30;payment_currency:RUB;payment_id:payment1;project_id:115Sample string to sign:`12345`Sample secret key:**Result**pVmAtGFBQJD2NgLToP1B2elR4QROiYGi3IobPD9PFDfrkjBqdSCFgrVSEtebVJUzOUUHX5tPnHQq9RMn61679A==: generated signature:Use the following example to test whether your code correctly generates signatures:

The signature your back end generates based on the sample string and the secret key must be exactly the same as of the sample generated signature.

en_pp_authentication.ditaWe recommend choose specific implementation of the signing algorithm based on the programming environment you use. For the detailed information about signature generation, see.
