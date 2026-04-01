# Specifying booking data

## Overview

`booking_infobooking_info`Theparameter allows you to keep track of booking information relevant to a certain payment and receive this information in callbacks from the payment platform. In comparison to specifying the addendum with itinerary data (details) utilised in certain branches of travel industry, this capability can be applied in a wider range of use cases (for example, to specify information about booking concert tickets) and with more flexibility as there are no restrictions by MCC (). At the same time, using theparameter may not offer the advantages that are available for addendum data capabilities, so if you have more questions concerning the use of these capabilities, refer to your Platform account manager for more details.

`booking_info`Click to Pay,made with cards, Apple Pay,and Google PayTheparameter can be used for processing almost all types of payments: it includes performing such actions as purchase processing, placing authorisation holds, registering unscheduled COF purchases, and payment instrument verification.

::: warning
`booking_infostart_dateend_date`In order to enhance the quality of payment processing and ensure compliance with industry standards, starting from January 15, 2026, merchants in certain business categories must specify theparameter containing information about the start and end dates of the booked service (in theandparameters), for each initiated card purchase. This requirement applies to merchants with Merchant Category Codes (MCC) 3000–3999, 4411, 4511, 4722, 5962, 6513, 7011, 7012, 7512, 7519, and 7922.
:::

## Use case

Here is an example of a use case when a merchant in the music festival industry needs to:

For this purpose, the following workflow is set up:

- collect and process data about music festival tickets booked by the customers.
- Provide the company's employees with the timely access to such information about each customer.

1. `booking_info`The following parameters can be included:`firstname`—the name of the customer provided at the time of booking`surname`—the last name of the customer provided at the time of booking`email`—the email provided at the time of booking`start_date`—starting date of the booked service`end_date`—ending date of the booked service`description`—a free-form description of the booked service`total`—the total cost of the booking`pax`—the number of people per booking`reference`—the booking reference, which can be the URL, the name of the booked service or its code in the merchant web service`id`—the identifier of the booking, unique in the merchant web serviceEach request for opening Payment Widget for which specifying booking information is available contains such information in theparameter. The value of this parameter is a string containing a Base64 encoded JSON object with the booking parameters.
2. `booking_info`The JSON object can include the following data.`bookers``first_name`—the name of the customer provided at the time of booking`last_name`—the last name of the customer provided at the time of booking`email`—the email provided at the time of bookingThearray with the information about the customers for whom the service is booked. Each element of this array contains:`items``description`—description of the service included in the booking`start_date`—starting date of the service included in the booking`end_date`—ending date of the service included in the bookingThearray with the information about separate services included in the booking. Each element of this array contains:`start_date`—starting date of the booked service`end_date`—ending date of the booked service`description`—a free-form description of the booked service`total`—the total cost of the booking`pax`—the number of people per booking`reference`—the booking reference, which can be the URL, the name of the booked service, or its code in the merchant web service`id`—the identifier of the booking, unique in the merchant web service`start_dateend_datestart_dateend_dateitems`Keep in mind that the standalone parametersandincluded in the JSON object are intended for specifying the starting and ending dates of the booking as a whole, while parametersandof thearray are intended for specifying the starting and ending dates of the separate services included in the booking.`totalpax0`The value of parametersandmust be greater than.Parameters with other details of the booking:Each request for opening Payment Widget sent from the web service contains booking information in theparameter. The value of this parameter is a string containing a Base64 encoded JSON object.
3. `booking_info`and can be viewed in the payment information tab in DashboardWhen a relevant operation has been processed, the information specified in theparameter is passed to the merchant web service in the final callback.
4. The web service processes this information as needed together with the rest of the operation data.

## Setup

`booking_info`The capability of using theparameter in requests and receiving booking information in callbacks (with standard format) is available by default and does not require any specific setup.

## Data format

`booking_infobooking_info`Theparameter can be specified in requests for opening Payment Widget as a string containing the Base64 encoded JSON object () with the necessary booking parameters.

| Parameter | Description |
| --- | --- |
| `firstname`string | Name of the customer provided at the time of booking |
| `surname`string | Last name of the customer provided at the time of booking |
| `email`string | Email provided at the time of booking |
| `start_date`string | `DD-MM-YYYY`Starting date of the booked service, in theformat |
| `end_date`string | `DD-MM-YYYY`Ending date of the booked service, in theformat |
| `description`string | Free-form description of the booked service |
| `total`integer | Total cost of the booking |
| `pax`integer | Number of people per booking |
| `reference`string | Booking reference, which can be the URL, the name of the booked service, or its code in the merchant web service |
| `id`string | Identifier of the booking, unique in the merchant web service |

| Parameter | Description |  |
| --- | --- | --- |
| `bookers`array | Array with the information about the customers for whom the service is booked | 1 |
| `first_name`string | Name of the customer provided at the time of booking | 1-11 |
| `last_name`string | Last name of the customer provided at the time of booking | 1-21 |
| `email`string | Email provided at the time of booking | 1-31 |
| `items`array | Array with the information about separate services included in the booking | 2 |
| `description`string | Description of the service included in the booking | 2-12 |
| `start_date`string | `DD-MM-YYYY`Starting date of the service included in the booking, in theformat | 2-22 |
| `end_date`string | `DD-MM-YYYY`Ending date of the service included in the booking, in theformat | 2-32 |
| `start_date`string | `DD-MM-YYYY`Starting date of the booked service, in theformat | 3 |
| `end_date`string | `DD-MM-YYYY`Ending date of the booked service, in theformat | 4 |
| `description`string | Free-form description of the booked service | 5 |
| `total`integer | `0`Total cost of the booking. Must be greater than | 6 |
| `pax`integer | `0`Number of people per booking. Must be greater than | 7 |
| `reference`string | Booking reference, which can be the URL, the name of the booked service, or its code in the merchant web service | 8 |
| `id`string | Identifier of the booking, unique in the merchant web service | 9 |
