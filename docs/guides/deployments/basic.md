---
sidebar_position: 4
---

# Basic

Basic deployments are used to execute SQL queries through several servers.

![alt text](../../../assets/deployments/basic.png "Deployments - Basic")

<p style={{textAlign:"center", marginTop:"-10px"}}>Basic Deployment</p>

These are the fields needed to be filled before starting an execution:

#### Name

The desired name to identify the current deployment (can be changed afterwards).

#### Release

The [release](releases) to be associated (can be changed afterwards). Only the active Releases will appear.

#### Environment

The [environment](../inventory/environments) to be applied.

#### Databases

The target databases to apply the execution (accepts a list of databases separated by commas and the wildcards "%", "_").

Some examples:

```sql title="One database"
mydatabase1
```

```sql title="Some databases"
mydatabase1, mydatabase2, mydatabase3
```

```sql title="All databases that its name starts with 'mydatabase'"
mydatabase%
```

#### Queries

The list of SQL queries to be executed.

#### Method

The deployment method to be used:
- **Validate**: Tests all server connections (no queries are executed). This method just checks that Meteor Next can reach all the servers with the credentials configured in the Inventory.

- **Test**: A simulation is performed (only SELECTs and SHOWs are executed). For other sentences (apart from selects and shows) the deployment just checks if these sentences would either work or fail if they were executed.

- **Deploy**: All queries are executed.

Note that both `TEST` and `DEPLOY` options also performs the VALIDATE method under the hood.

#### Scheduled

Turn on this option to [schedule](scheduled) the execution.

#### Start execution

Turn on this option to start the execution just after creating the deploy. If you want to create the deploy but to execute it later, do not toggle this checkbox.