# Whitelists and blacklists

When operations are validated, their parameters are checked in the platform against various rules, including whitelists and blacklists. These lists can be common for all merchants or specific to an individual project of the merchant.

The following considerations are applied when assessing the risks of processing specific operations:

- Whitelist is a list of criteria matching any of which indicates that an operation is trustworthy.
- Blacklist is a list of criteria matching any of which flags an operation as fraudulent.

1. **Customer IDAccount numberE-mail**If at least one of the operation parameters is blacklisted and the blacklist category is,, or, then the blacklist takes precedence over the whitelist and the operation is flagged as fraudulent.
2. **IPBIN**If the condition described above does not apply, but the operation has parameters that are found in theandlists (one parameter can be blacklisted, the other can be whitelisted, in either combination), then the whitelist has higher priority and the operation is deemed trustworthy.
3. If the operation is deemed untrustworthy following the AML (Anti-Money Laundering; matching the person included in the sanctions list) and Compliance (matching the country in the prohibited country list) checks, it is declined even if some of the operation parameters are whitelisted.
