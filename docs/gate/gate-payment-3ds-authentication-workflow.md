# Authentication workflows

basicextended, used by default,implemented upon the merchant's request. The latter is supported only for 3‑D Secure 2 and can be relevant when monitoring each step of the authentication procedure is necessary for the merchant's operationIn the Platform payment platform, the 3‑D Secure authentication is implemented in the processing of one-step and two-step purchases made with cards and card verification requests. Along with that, two authentication workflows are available:(a.k.a. proxy)and, (a.k.a. native).

The basic workflow can require less development effort from the merchant, yet it also requires additional customer redirect operations. The extended workflow does not require additional redirection, but it can require more development effort.The merchant can choose either of the workflows. However, extended workflow is preferable as it ensures better user experience and can positively impact payment acceptance rates.

You can switch from basic to extended workflow at any time; no additional coordination with the Platform specialists is necessary. In the payment request pass the parameters required for the extended workflow. They are listed below, in .

| Basic (proxy) workflow | Extended (native) workflow |
| --- | --- |
| Based on the existing 3‑D Secure 1 workflow.Requires less development effort from merchants.Requires multiple customer redirect operations. | Optimized for 3‑D Secure 2.Requires more development effort from merchants.Does not require any intermediate customer redirect operations. |
