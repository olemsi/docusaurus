# General information

*Parametric filtering*ensures automatic hiding of those payment methods that are available within the current project but are not relevant for the country or currency of a particular payment. With this filtering option, the page for selecting payment methods displays to the customer only relevant payment methods with relevancy determined by the specific criteria.

`PLN`For example, if within the current project payment method availability is determined by currency, and in general situations, standard card payments, , , and  are usually available, when the request for opening Payment Widget specifies the currency of Polish zloty (), then the customer will be shown the selection of standard card payments and the  payment methods.

You can choose which parameter will be used for filtering (country or currency) and how to filter individual methods depending on their specific characteristics and the characteristics of the web service, following which filtering will be configured accordingly. Keep in mind that once set up, the option to filter payment methods by currency is applied each time when Payment Widget is invoked.Other than the aforementioned considerations, no actions are required once this functionality is set up.
