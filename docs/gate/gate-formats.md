# Data formats

## Overview

This article covers general information about the ways to encode data and about the formats of data which is used in the scope of interaction with the Platform payment platform.

in the Gate API specificationin the articleInformation about general approaches to generating requests, responses, and callbacks is provided in the  article, information about service codes that identify elements of different registers—in the  section, detailed information about special cases of data formats—in the articles about different capabilities and. Besides, you can also contact our technical support specialists with any questions that arise.

::: tip
This article is planned to be removed from the documentation with time.
:::

## Data encoding

the Gate API, including the articleandspecification.The generation of requests sent to the platform and the processing of responses and callbacks received from the platform must be carried out with the use of the UTF-8 encoding. Besides that, in certain cases, it is required to use other encoding methods, including Base64. Such cases are stipulated in this documentation

## Dates and times

`YYYY-MM-DDThh:mm:ss±hhmmYYYY-MM-DDThh:mm:sshhmm2025-05-25T15:30:25+0000`[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)In the scope of interaction with the platform, dates and times are usually represented in the following format(according to therequirements), whereis a date,is a separating character,is a time,is a UTC (Coordinated Universal Time) offset. For example,.

the Gate API, including the articleandspecification.Along with that, in certain cases, the date and time format can differ from the described one. Such cases are stipulated in this documentation

## Amounts

In the scope of interaction with the platform, payment and operation amounts are specified in the smallest currency units and with no decimal separator, For example, 100 dollars are represented in cents and specified as 10000 (but neither as 100 nor as 100.00). The examples of other currencies representation are provided in the table.

[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)The number of fractional digits of different currencies is defined according to thestandard and provided in the currency reference.

| Currency | Amount | Representation |
| --- | --- | --- |
| EUR | 39.95 | `3995` |
| GBP | 450.66 | `45066` |
| JPY | 200 | `200` |
| KWD | 150.155 | `150155` |

## Currency, country, and language codes

In the scope of interaction with the Platform payment platform, the following codes can be used:

and language codes, which should be defined individuallyThese codes, except territory codes, are provided in the references.

- *currency codes*[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)three-letter—according to thestandard
- *country codes*[ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html)two-letter—according to thestandard
- *territory codes*[ISO 3166-2](https://www.iso.org/iso-3166-country-codes.html)single-, two-, and three-character(such as states, provinces, and regions)—according to thestandard
- *language codes*[ISO 639-1](https://www.iso.org/iso-639-language-codes.html)two-letter—according to thestandard
- *language codes*[ISO 639-1](https://www.iso.org/iso-639-language-codes.html)—containing two letters, according to thestandard, or another number of letters, which can be coordinated with the Platform specialists and used, for example, for opening the payment form with texts in a certain dialect of a language
