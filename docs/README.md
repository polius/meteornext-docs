# Introduction

Meteor Next is a multiplatform web application that fully automatizes MySQL database workload operations in a Production ready environment.

## Features

- 🚀 **Deployments**: Execute thousands or millions of SQL queries to multiple servers/databases in a secured and automated way, getting a detailed summary.
- 🖥️ **Monitoring**: Perform active monitoring in all the database servers (server metrics, parameters and queries).
- 💾 **Utils**: A suite of different apps to perform massive data transfer operations.
- ⚡ **Client**: A complete MySQL Client.

### 🚀 Deployments

Execute thousands or millions of SQL queries to multiple servers/databases in a secured and automated way, getting a detailed summary.

![alt text](../assets/deployments/deployments.png "Deployments - List")

<p style="text-align:center; margin-top:-10px">Deployments - List</p>

![alt text](../assets/deployments/execution.png "Deployments - Execution")

<p style="text-align:center; margin-top:-10px">Deployments - Execution</p>

![alt text](../assets/deployments/results.png "Deployments - Results")

<p style="text-align:center; margin-top:-10px">Deployments - Results</p>

### 🖥️ Monitoring

Perform active monitoring in all the database servers (server metrics, parameters and queries).

![alt text](../assets/monitoring/monitoring.png "Monitoring")

<p style="text-align:center; margin-top:-10px">Monitoring - List</p>

### 💾 Utils

A suite of different apps to perform massive data transfer operations.

- **IMPORTS**

Perform imports from files (on the local drive, URL or directly from Amazon S3) in any server/database.

![alt text](../assets/utils/imports/utils-imports.png "Utils (Imports) - List")

<p style="text-align:center; margin-top:-10px">Utils (Imports) - List</p>

![alt text](../assets/utils/imports/file/utils-imports-file-info.png "Utils (Imports/File) - Information")

<p style="text-align:center; margin-top:-10px">Utils (Imports) - Execution</p>

- **EXPORTS**

Perform exports from any server/database.

![alt text](../assets/utils/exports/utils-exports.png "Utils (Exports) - List")

<p style="text-align:center; margin-top:-10px">Utils (Exports) - List</p>

![alt text](../assets/utils/exports/utils-exports-full-information.png "Utils (Exports) - Information")

<p style="text-align:center; margin-top:-10px">Utils (Exports) - Execution</p>

- **CLONES**

Perform copies of databases/tables from any server/database in another server/database.

![alt text](../assets/utils/clones/utils-clones.png "Utils (Clones) - List")

<p style="text-align:center; margin-top:-10px">Utils (Clones) - List</p>

![alt text](../assets/utils/clones/utils-clones-full-information.png "Utils (Clones) - Information")

<p style="text-align:center; margin-top:-10px">Utils (Clones) - Execution</p>

### ⚡ Client

A complete MySQL Client.

![alt text](../assets/client/client.png "Client")

<p style="text-align:center; margin-top:-10px">Client - Executing a query</p>

## Security

Meteor Next has been built to be secure and reliable. Here are some aspects to take into account:

- Meteor Next does NOT collect any kind of data. All data stored in your database stays in your database.
- Meteor Next can work offline without needing internet connection with one exception. The application needs connection to https://license.meteornext.io to be able to check if the license is either activated or expired.
- Meteor Next has been audited by Ackcent to guarantee that there's no security vulnerabilities.
- All stored user passwords created by the app are encrypted.
- Meteor Next supports up to two MFA methods: Virtual 2FA Device and Security Keys.
- Be able to define a customized password policy to enforce that all users have a strong password and decide the password age.
- Be able to force that all users have the MFA enabled.
- Be able to restrict the access to the administration panel only to a specific IP address or domain.
