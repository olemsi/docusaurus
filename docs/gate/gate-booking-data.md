# Specifying booking data

## Overview

`booking_infobooking_info`Theobject allows you to keep track of booking information relevant to a certain payment and receive this information in callbacks from the payment platform. In comparison to specifying the addendum with itinerary data (details) utilised in certain branches of travel industry, this capability can be applied in a wider range of use cases (for example, to specify information about booking concert tickets) and with more flexibility as there are no restrictions by MCC (). At the same time, using theobject may not offer the advantages that are available for addendum data capabilities, so if you have more questions concerning the use of these capabilities, refer to your Platform account manager for more details.

`booking_info`Click to Pay,made with cards, Apple Pay,and Google PayTheobject can be used for almost all types of payments, including one-time purchases, unscheduled COF purchases, and payment instrument verification.

::: warning
`booking_infostart_dateend_date`In order to enhance the quality of payment processing and ensure compliance with industry standards, starting from January 15, 2026, merchants in certain business categories must specify theobject containing information about the start and end dates of the booked service (in theandparameters), for each initiated card purchase. This requirement applies to merchants with Merchant Category Codes (MCC) 3000–3999, 4411, 4511, 4722, 5962, 6513, 7011, 7012, 7512, 7519, and 7922.
:::

## Use case

Here is an example of a use case when a merchant in the music festival industry needs to:

For this purpose, the following workflow is set up:

- collect and process data about music festival tickets booked by the customers.
- Provide the company's employees with the timely access to such information about each customer.

1. `booking_info`The object can include the following parameters:`firstname`—the name of the customer provided at the time of booking`surname`—the last name of the customer provided at the time of booking`email`—the email provided at the time of booking`start_date`—starting date of the booked service`end_date`—ending date of the booked service`description`—a free-form description of the booked service`total`—the total cost of the booking`pax`—the number of people per booking`reference`—the booking reference, which can be the URL, the name of the booked service or its code in the merchant web service`id`—the identifier of the booking, unique in the merchant web serviceEach request to Gate for which specifying booking information is available contains such information—passed in theobject.
2. `booking_info``bookers``first_name`—the name of the customer provided at the time of booking`last_name`—the last name of the customer provided at the time of booking`email`—the email provided at the time of bookingThearray with the information about the customers for whom the service is booked. Each element of this array contains:`items``description`—description of the service included in the booking`start_date`—starting date of the service included in the booking`end_date`—ending date of the service included in the bookingThearray with the information about separate services included in the booking. Each element of this array contains:`start_date`—starting date of the booked service`end_date`—ending date of the booked service`description`—a free-form description of the booked service`total`—the total cost of the booking`pax`—the number of people per booking`reference`—the booking reference, which can be the URL, the name of the booked service, or its code in the merchant web service`id`—the identifier of the booking, unique in the merchant web service`start_dateend_datebooking_infostart_dateend_dateitems`Keep in mind that the standalone parametersandof theobject are intended for specifying the starting and ending dates of the booking as a whole, while parametersandof thearray are intended for specifying the starting and ending dates of the separate services included in the booking.`totalpax0`The value of parametersandmust be greater than.Parameters with other details of the booking:Each request to Gate sent from the web service contains the following information in theobject.
3. `booking_info`and can be viewed in the payment information tab in DashboardWhen a relevant operation has been processed, the information specified in theobject is passed to the merchant web service in the final callback.
4. The web service processes this information as needed together with the rest of the operation data.

## Setup

`booking_info`The capability of using theobject in requests and receiving booking information in callbacks (with standard format) is available by default and does not require any specific setup.

## Data format

`booking_info`Theobject can be specified in requests to different endpoints and callbacks with operation results. Its structure is provided in theschema and its location in the request structure can be found in a particular endpoint specification.

`booking_infobooking info`In final callbacks with the operation result information, the data that was specified in theobject of the request is passed in theobject.
