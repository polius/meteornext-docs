---
sidebar_position: 9
---

# Processlist

The Processlist view shows a list of all the queries that are being currently executing in the server.

By right clicking a row you can either kill a query or to perform an EXPLAIN to analyze its performance.

![alt text](../../../assets/client/client-processlist.png "Client - Processlist")

The following screenshot shows an example of killing a query. If the "Terminate the connection" option is enabled, all other queries being executed into the same connection will also be terminated.

![alt text](../../../assets/client/client-processlist-kill.png "Client - Processlist Kill")

The following screenshot shows an example of explaining a query. Only SELECTs can be explained.

![alt text](../../../assets/client/client-processlist-explain.png "Client - Processlist Explain")