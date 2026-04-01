# Addendum parameters in the Gate API

## Overview

This section describes the addendum data parameters of the itinerary that are submitted to the Platform payment platform along with the payment request details. You can use these parameters in messages you send to Gate. For each parameter, the following information is provided:

**Name**— name of the object or parameter;**Type**— type of parameter;**Description**— the itinerary information the parameter or object contains as well as parameter format and length or allowed values, if applicable.

`"10000"`All the amounts are denominated in the payment currency by using the minor currency units with no decimal point. For example, 100 USD is submitted as.

| Name | Description | tree |
| --- | --- | --- |
| lodgingobject, optional | This is a root object that contains general booking parameters and several child objects containing parameters of specific booking components, for example room properties or charge properties. | 1 |
| customer_service_toll_free_numberstring, required | The customer service phone number used to resolve cardholder questions and disputes.Alphanumeric, maximum 17 characters. | 1-11 |
| check_in_datestring, required | *dd-mm-yyyy*Cardholder check-in date in theformat. | 1-21 |
| check_out_datestring, required | *dd-mm-yyyy*Cardholder check-out date in theformat. | 1-31 |
| folio_numberstring, required | The card acceptor’s internal invoice or billing ID reference number.Alphanumeric, maximum 25 characters. | 1-41 |
| roomobject, required | `chargeslodging`The object that contains the information about the room properties. Theobject is a child object of theobject. | 2 |
| taxinteger, optional | Total tax amount for the room.Numeric, maximum 12 digits. | 2-12 |
| rateinteger, optional | The daily room charges exclusive of taxes and fees.Numeric, maximum 12 digits. | 2-22 |
| number_of_nightsinteger, optional | The total number of nights for which a room was contracted during a lodging stay.Numeric, maximum two digits. | 2-32 |
| fire_safety_act_indicatorboolean, required | Boolean value indicating whether the facility complies with the Motel Fire Safety Act of 1990 (PL101-391) or similar legislation. | 2-42 |
| guest_namestring, optional | Customer name.Alphanumeric, maximum 40 characters. | 2-52 |
| guest_numberstring, optional | The number assigned to the lodging customer.Alphanumeric, maximum 25 characters. | 2-52 |
| billing_adjustmentstring, optional | Any additional charges incurred after the cardholder departure.Alphanumeric, maximum 12 characters. | 2-72 |
| property_phone_numberstring, optional | Specific lodging property location by its local phone number.Alphanumeric, maximum 17 characters. | 2-82 |
| no_show_indicatorstring, optional | Boolean value indicating whether the customer did not show up after making a reservation for a lodging.`false`Default value:. | 2-92 |
| prepaid_expensesinteger, optional | The amount of deposit or other prepaid amounts for the lodging stay.Numeric, maximum 12 digits. | 2-102 |
| total_taxinteger, optional | , Visa Electron and MaestroThe amount of all the taxes associated with the lodging. Applicable only to the Visacards. Not applicable for Mastercard.Numeric, maximum 12 digits. | 2-112 |
| chargesobject, optional | `chargeslodging`The object that contains the information about all the charges for hotel services. Theobject is a child object of theobject. | 3 |
| room_serviceinteger, optional | Room service charges.Numeric, maximum 12 digits | 3-13 |
| bar_or_loungeinteger, optional | The amount of the lounge or bar charges.Numeric, maximum 12 digits | 3-23 |
| transportationinteger, optional | The amount of the transportation charges.Numeric, maximum 12 digits | 3-33 |
| gratuityinteger, optional | The amount of the gratuity charges.Numeric, maximum 12 digits | 3-43 |
| conference_roominteger, optional | The amount of the charges associated with conference room use.Numeric, maximum 12 digits. | 3-53 |
| audio_or_visualinteger, optional | The amount of the audiovisual equipment charges.Numeric, maximum 12 digits. | 3-63 |
| banquetinteger, optional | The amount of the banquet charges.Numeric, maximum 12 digits. | 3-13 |
| internet_accessinteger, optional | The amount of the Internet access charges.Numeric, maximum 12 digits | 3-73 |
| early_departureinteger, optional | The amount charged because of early departure.Numeric, maximum 12 digits | 3-13 |
| phoneinteger, optional | The total amount of charges for all phone calls.Numeric, maximum 12 digits | 3-83 |
| restaurantinteger, optional | The total amount of all restaurant charges.Numeric, maximum 12 digits | 3-93 |
| minibarinteger, optional | The total amount of in-room “mini-bar” service charges.Numeric, maximum 12 digits | 3-103 |
| gift_shopinteger, optional | The total amount of all gift shop and specialty shop charges.Numeric, maximum 12 digits | 3-113 |
| laundry_or_cleaninginteger, optional | The total amount of cleaning charges.Numeric, maximum 12 digits | 3-123 |
| valetinteger, optional | The charges associated with the use of valet services.Numeric, maximum 12 digits | 3-133 |
| movieinteger, optional | The amount charged for in-room movies.Numeric, maximum 12 digits. | 3-143 |
| business_centerinteger, optional | The amount charged for business center use and supplies.Numeric, maximum 12 digits. | 3-153 |
| health_clubinteger, optional | The amount charged for health club use and supplies.Numeric, maximum 12 digits. | 3-163 |

## Related links
