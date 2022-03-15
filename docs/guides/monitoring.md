# Monitoring

The Monitoring section allows to monitor database servers in real-time.

These are the different resources that can be monitored:

- **[Dashboard](#dashboard)**: Monitor server's health and all the events that happened in the past.
- **[Parameters](#parameters)**: Monitor server's parameters and compare it with other servers.
- **[Processlist](#processlist)**: Monitor in real-time all queries that are being executed in a server.
- **[Queries](#queries)**: Track slow queries to be later analyzed.

## Dashboard

This section has been developed with a proactive notification system. Everytime a server changes its status (available, unavailable, restarted, parameters changed) a notification will be sent to the users that have this server added in their monitoring list.

![alt text](../../assets/monitoring/monitoring.png "Monitoring")

You can also click a server to get further details.

![alt text](../../assets/monitoring/monitoring-details.png "Monitoring - Details")

**SETTINGS**

There are some settings that can be defined:

- **Servers per line**: The amount of servers to be displayed per line.
- **Slack Notifications**: Enable to receive an Slack message everytime a server changes its status (available, unavailable, parameters changed, restart).

![alt text](../../assets/monitoring/monitoring-settings.png "Monitoring - Settings")

**SERVERS**

Here we can select which servers of our inventory have to be monitored.

![alt text](../../assets/monitoring/monitoring-servers.png "Monitoring - Servers")

**FILTER**

This option is used to filter the servers in the list. The available options are:

- **All**: Show all monitored servers.
- **Available**: Show all monitored servers that are available.
- **Unavailable**: Show all monitored servers that are unavailable.
- **Loading**: Show all monitored servers that are being loaded (this status happens the first time we choose a server to be monitored).

![alt text](../../assets/monitoring/monitoring-filter.png "Monitoring - Filter")

**EVENTS**

This option shows a dialog with all the events happened in the last 15 days for all servers selected to be monitored.

![alt text](../../assets/monitoring/monitoring-events.png "Monitoring - Events")

## Parameters

This section is used to get the values of MySQL system variables and to compare them with other servers.

![alt text](../../assets/monitoring/parameters-list.png "Parameters - List")

**SERVERS**

Here we can select which servers of our inventory we want to monitor their parameters.

![alt text](../../assets/monitoring/parameters-servers.png "Parameters - Servers")

**FILTER**

This option is used to filter the parameters in the list. The available options are:

- **All**: Show all parameters.
- **Matching**: Show all parameters matching with all selected servers.
- **Not matching**: Show all parameters not matching with all selected servers.

![alt text](../../assets/monitoring/parameters-filter.png "Parameters - Filter")

In the following screenshot we can see an example of filtering with the `Not matching` option.

![alt text](../../assets/monitoring/parameters-filter-applied.png "Parameters - Filter applied")

## Processlist

This section is used to monitor in real-time all the queries that are being executed in the selected servers.

![alt text](../../assets/monitoring/processlist.png "Processlist")

**SERVERS**

Here we can select which servers of our inventory we want to monitor their queries.

![alt text](../../assets/monitoring/processlist-servers.png "Processlist - Servers")

**FILTER**

This option is used to filter the queries in the list. The available options are:

- **All**: Show all queries and sessions.
- **Query**: Show queries being executed.
- **Sleep**: Show iddle sessions.

![alt text](../../assets/monitoring/processlist-filter.png "Processlist - Filter")

## Queries

This section is used to track slow queries to be later analyzed.

![alt text](../../assets/monitoring/queries.png "Queries")

**SETTINGS**

There are some settings that can be defined:

- **Minimum Execution Time (seconds)**: Meteor will track all queries that their execution time is equal or greater than this value.
- **Data Retention (days)**: The maximum number of days to retain the data. All queries that have been executed X days ago, will be deleted from the list.

![alt text](../../assets/monitoring/queries-settings.png "Queries - Settings")

**SERVERS**

Here we can select which servers of our inventory we want to track their slow queries.

![alt text](../../assets/monitoring/queries-servers.png "Queries - Servers")

**FILTER**

This option is used to filter the slow queries in the list.

![alt text](../../assets/monitoring/queries-filter.png "Queries - Filter")

**COLUMNS**

Here we can choose which columns we want to display or hide.

![alt text](../../assets/monitoring/queries-columns.png "Queries - Columns")