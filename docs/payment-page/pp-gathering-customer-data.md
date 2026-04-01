# Collecting customer data

## Overview

In some cases, along with data mandatory for payment processing, you may need to collect additional information from your customers, for example, their phone numbers or email addresses. Collecting such data can be useful as it allows merchants to:

The capability of collecting additional data is supported directly in the Payment Widget payment form and, for certain payment methods, in the associated payment services (such as Apple Pay, for example).Keep in mind that collecting additional data increases the number of actions required from the customer to make a payment and can negatively affect the payment form conversion. Therefore, this capability should be used only when it is clearly necessary. In most cases, the optimal solution is to submit previously collected information about customers in the requests for opening Payment Widget.

or in the third-party servicesTo work with additional data provided by customers on the payment form, you can use payment information tabs in the Dashboard interface and final callbacks with the information about operation processing. To set up passing customer data in callbacks, contact the Platform technical support.

- Provide an extra layer of payment security by collecting and verifying customer information.
- payment providers,, and banksImprove user scenarios by avoiding the necessity to submit additional payment information (when it is requested bypayment systemsduring payment processing—learn more).

## User scenarios

A number of fields can be used to collect additional customer data on the payment form. These fields can be displayed at all times or only when necessary and can be required or optional. Along with that, the placement of these fields can differ: they can be located on the page where customers enter payment information or on the separate page that follows (depending on the total number of fields).

The way each field is displayed depends on its specific properties and what data is submitted in the request for opening Payment Widget. The following display options are available for each of the additional fields:

The field display option is determined as follows.

Apple PayTo collect additional data via third-party services such as Apple Pay and Google Pay, the interfaces provided by these services are used. Depending on their specifics, requesting customer data may involve, for example, using information previously saved by the customer or other special features of interaction. Note that all requested details must be provided and data requests can be configured both via project-level properties and through individual request parameters. For instance, you can set collecting customer email addresses as a default via project properties and collect other types of data when necessary through request parameters (learn more in the articles on payment methodsand). The data collected thereby can be sent to the merchant's web service in the payment result callbacks. To enable this functionality, contact the Platform technical support specialists.

- `1`—the field is displayed with the prefilled value that was specified in the request. The customer can change this value.
- `2`—the field is displayed and is left blank, but contains a name of the field.
- `3`—the field is not displayed. The field value can be submitted to the payment platform only via a request.

| This parameter is required | + | + | + | + | – | – | – | – |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| This field must be displayed | + | + | – | – | + | + | – | – |
| The field value is passed in the request | + | – | + | – | + | – | + | – |
| **Field display option** | **`1`** | **`2`** | **`3`** | **`2`** | **`1`** | **`2`** | **`3`** | **`3`** |

## Setup

To have the capability of collecting customer data enabled, you should:

1. and which payment methodssee belowThe field can be required or optional to fill in and/or display.*the name of the country*To use a dropdown input field, for example, to collect, you should provide the support specialists with all possible values for this list or coordinate and approve the use of definitions from the reference sources provided by Platform.It is a text or dropdown input field.If you would like to add customised field names, provide the support specialists with the translations into all languages used for the project.Its name: by default standard names are provided by Platform; however, customisation is available.Decide which projectssupported for these projects may warrant the collection of additional customer data. For each case, determine what data needs to be requested and define the properties of the fields in question. Additional customer data may include a range of parameters (to learn more,) while the properties of each field are the following:
2. Make sure that the technical support specialists have all the details about customer data to be collected as well as the information whether any of these parameters specified by customers on the payment form should be passed in final callbacks.
3. Get notified by the Platform specialists that the requested functionality has been enabled and test the work of the payment form with this capability if necessary.

## Collected data

The following parameters can be used for collecting customer data.

If you need to use parameters not listed in the table above, contact the Platform specialists.

| Parameter | Description |
| --- | --- |
| customer_addressstring | `29 Arlington Avenue, Islington`The name of the street and the house number (including any additional parts of the address such as building indicators and apartment numbers) in the customer's address, separated by a comma. A string, must not exceed 255 characters. Example: |
| customer_birthplacestring | `Cambridge`Customer's place of birth A string, must not exceed 255 characters. Example: |
| customer_citystring | `London`Customer's city of residence. A string, must not exceed 255 characters. Example: |
| customer_countrystring | `GB`Code of the customer's country in ISO 3166-1 alpha-2 format. Example: |
| customer_day_of_birthstring | `DD-MM-YYYY11-03-1952`Customer's date of birth informat. Example: |
| customer_emailstring | `dna@douglasadams.com`Customer's email address. A string, must not exceed 255 characters, must contain two parts: the username and the domain name separated by the @ symbol. Example: |
| customer_first_namestring | `Douglas`Customer's first name. A string, must not exceed 255 characters. Example: |
| customer_last_namestring | `Adams`Customer's last name. A string, must not exceed 255 characters. Example: |
| customer_middle_namestring | `Noel`Customer's middle name or patronymic. A string, must not exceed 255 characters. Example: |
| customer_phonestring | `443031237300`Customer's full phone number, with the country code. Technically, the number must include from 4 to 24 digits,and if it is allowed within the project and payment method used, punctuation marks and special symbols may be used while specifying the number (such cases are usually mentioned separately). Examples: |
| customer_ssninteger | `4942`Last four digits of the Social Security number used for taxpayer identification, income reporting, and record-keeping purposes in the USA. Example: |
| customer_statestring | `London`Customer's region or state. A string, must not exceed 255 characters. Example: |
| customer_zipstring | `N17BL`Customer's postal code. A string, must not exceed 10 characters. Example: |
| billing_addressstring | `Arlington Avenue`Street of the customer's billing address. A string, must not exceed 255 characters. Example: |
| billing_citystring | `London`City of the customer's billing address. A string, must not exceed 255 characters. Example: |
| billing_countrystring | `GB`Code of the country associated with the customer's billing address in ISO 3166-1 alpha-2 format. Example: |
| billing_postalstring | `N17BL`Postal code of the customer's billing address. A string, must not exceed 16 characters. Example: |
| billing_regionstring | `London`Region or state of the customer's billing address. A string, must not exceed 255 characters. Example: |
| billing_region_codestring | `LND`Code of the region associated with the customer's billing address in ISO 3166-2 format. Example: |

| Parameter | Description |
| --- | --- |
| customer_addressstring | `29 Arlington Avenue, Islington`The name of the street and the house number in the customer's address. Example: |
| customer_birthplacestring | `Cambridge`Customer's place of birth. Example: |
| customer_citystring | `London`Customer's city of residence. Example: |
| customer_countrystring | `GB`Code of the customer's country in ISO 3166-1 alpha-2 format. Example: |
| customer_day_of_birthstring | `DD-MM-YYYY11-03-1952`Customer's date of birth informat. Example: |
| customer_emailstring | `dna@douglasadams.com`Customer's email address. Example: |
| customer_first_namestring | `Douglas`Customer's first name. Example: |
| customer_last_namestring | `Adams`Customer's last name. Example: |
| customer_middle_namestring | `Noel`Customer's middle name or patronymic. Example: |
| customer_phonestring | `443031237300`Customer's phone number. Example: |
| customer_ssninteger | `4942`Last four digits of the Social Security number used for taxpayer identification, income reporting, and record-keeping purposes in the USA. Example: |
| customer_statestring | `London`Customer's region or state. Example: |
| customer_zipstring | `N17BL`Customer's postal code. Example: |
| billing_addressstring | `Arlington Avenue`Street of the customer's billing address. Example: |
| billing_citystring | `London`City of the customer's billing address. Example: |
| billing_countrystring | `GB`Code of the country associated with the customer's billing address in ISO 3166-1 alpha-2 format. Example: |
| billing_postalstring | `N17BL`Postal code of the customer's billing address. Example: |
| billing_regionstring | `London`Region or state of the customer's billing address. Example: |
| billing_region_codestring | `LND`Code of the region associated with the customer's billing address in ISO 3166-2 format. Example: |
