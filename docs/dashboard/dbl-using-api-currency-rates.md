# Currency rates data

Requests to retrieve information on currency conversion rates applied to operating and non-operating inflows and outflows in the payment platform should be sent to theendpoint. Conversion rates information is provided for reference use only.

The request to theendpoint must contain the following objects and parameters:

- `token`—a token associated with the specific Dashboard user account  that has permissions to access all required projects.
- `signature`—a request signature generated after all required parameters have been specified (details).
- `filter``merchant97`—an internal identifier of the merchant in the payment platform provided by the Platform technical support upon request (specified as an integer, for example,).`currency`—the code of the required currency in the ISO-4217 alpha-3 format (learn more).`interval``fromYYYY-MM-DD hh:mm:ss`—start date and time of the interval, informat.`toYYYY-MM-DD hh:mm:ss`—end date and time of the interval, informat.`from`If the specified time period is less than one hour (including cases when start and end times match), the retrieved conversion rates data will be relevant for the time specified in theparameter. If the specified time period is invalid (set in the future, for example), the response to such request will not contain conversion rates data.—an object with the specified start and end dates of the time period:—an object with parameters to filter currency conversion rates by:
- `tz+10:30Asia/Singapore`—time zone specified in the UTC offsets format (for example,) or in the IANA Time Zone Database format (for example,).

::: tip
`operations`To obtain information about the actual rates applied to currency conversion in case of specific operations (that can be used for final analysis and reconciliation), refer to regular operating reports from Platform or retrieve operation data via requests to theendpoints.
:::
