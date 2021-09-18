---
sidebar_position: 4
---

# Queries

This section is used to track slow queries to be later analyzed.

![alt text](../../../assets/monitoring/queries.png "Queries")

**SETTINGS**

There are some settings that can be defined:

- **Minimum Execution Time (seconds)**: Meteor will track all queries that their execution time is equal or greater than this value.
- **Data Retention (days)**: The maximum number of days to retain the data. All queries that have been executed X days ago, will be deleted from the list.

![alt text](../../../assets/monitoring/queries-settings.png "Queries - Settings")

**SERVERS**

Here we can select which servers of our inventory we want to track their slow queries.

![alt text](../../../assets/monitoring/queries-servers.png "Queries - Servers")

**FILTER**

This option is used to filter the slow queries in the list.

![alt text](../../../assets/monitoring/queries-filter.png "Queries - Filter")

**COLUMNS**

Here we can choose which columns we want to display or hide.

![alt text](../../../assets/monitoring/queries-columns.png "Queries - Columns")