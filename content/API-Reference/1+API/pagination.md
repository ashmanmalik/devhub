---
title: Pagination
description: A quick explanation of how pagination works on queries that support it
order: 2

arguments:
- size
- page

types:
- int
- int

defaults:
- Default is set to 10
- Default is set to 0
---

# Pagination
Most of our list queries support pagination to make fetching large sets of data responsive and fast. Examples of such queries are [cars](/API-Reference/Cars/query-cars), [stations](/API-Reference/Stations/query-stations), [operators](/API-Reference/Stations/query-operators) and [reviews](/API-Reference/Stations/query-station-reviews). 

Implementing pagination isn't hard because a common structure is in place. Each list query has a `size` and `page` argument. The `size` argument sets the number of items you will get per `page`. The `page` argument is a pointer that incrementally fetches new data. Both are of type `int`.

## Limits & defaults
To keep up the performance of our API and prevent overfetching, size limits are in place. By default the limit is set to a maximum of 100. Exceptions to this rule are the car and review query. These both accept a maximum of 1000. If you send a size that's over the maximum, it will be set to the maximum.

Next to limits, the following defaults will be used when they are not set on the query;

### Default values
<c-table :argument="arguments" :type="types" :default="defaults"></c-table>