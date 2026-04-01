# Using addendum with itinerary data

`lodging`For more information about theobject parameters and child objects, see  and the specification of the Gate API at.

## Overview

The*financial details addendum*Gate allows you to include so-calledin your payment request you submit to the payment platform. The addendum data is widely used in travel industry and contains detailed booking and itinerary information such as booking number, hotel guest name(s) and check-in and check-out dates. The addendum data are submitted into the payment platform along with the payment request details. Usage of addendum data allows payment providers to make payments more secure and offer more competitive rates to merchants.

Payments with addendum data follow the general processing routine except for some specific requirements:

**Not all MCCs are applicable**Addendum data is used only in travel industry; that is why only merchants with the following MCC codes can initiate payments with hotel booking data: 3501–3999 and 7011.**Addendum data must always be included in the initial checkout request**to you payment providerAny checkout that involves transmission of addendum data must start with a request that contains addendum data. Though, you may omit addendum data in any other requests you send. If you fail to send addendum data in the initial request, and then attempt to use addendum data in any of the subsequent messages, payment platform will refuse to process your request and will return an error message.

Addendum data may be used only in operations that use Visa and Mastercard cards.

`lodginglodgingroomcharges`All the booking itinerary information is included in aobject.  Theobject contains the general booking information while the information about hotel room and charges are included in its child objectsandobject respectively.

## Related links

Specification of the Gate API
