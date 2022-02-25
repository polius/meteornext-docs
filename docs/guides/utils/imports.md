---
sidebar_position: 1
---

# Imports

This section is used to import SQL files from different sources to any database.

These are the available sources:

- **File**: A file located on a local drive.
- **URL**: An accessible url.
- **[Cloud Key](../inventory/cloud)**: A cloud computing service, such as Amazon Web Services (AWS).

:::info
Accepted file formats: **.sql**, **.gz**, **.tar** and **.tar.gz**
:::

![alt text](../../../assets/utils/imports/utils-imports.png "Imports - List")

These are all the different columns we can choose to show or hide.

![alt text](../../../assets/utils/imports/utils-imports-filter.png "Imports - Filter")

## Sources

### Importing from File

To import a file choose the `File` option from the sources list and then select the desired file from your local drive. 

![alt text](../../../assets/utils/imports/file/utils-imports-file-1.png "Imports (File) - Source")

Then select the server you want to import this file and the database name. If you want to perform a clean import, check the `Recreate database` checkbox. This option deletes the database, creates a new empty one with the same name and then imports all the schema and data from the specified source. 

![alt text](../../../assets/utils/imports/file/utils-imports-file-2.png "Imports (File) - Destination")

The last step is an overview showing all the filled fields. Click the `IMPORT` button to start the import process.

![alt text](../../../assets/utils/imports/file/utils-imports-file-3.png "Imports (File) - Overview")

The import process will start showing us some metrics.

![alt text](../../../assets/utils/imports/file/utils-imports-file-info.png "Imports (File) - Information")

### Importing from URL

To import a file choose the `URL` option from the sources list and then enter the desired url to be imported. Finally select the file format. Select **.sql** if the url is a raw text file. If otherwise the file to be imported is compressed or packaged then choose **.gz**, **.tar** or **.tar.gz**.

![alt text](../../../assets/utils/imports/url/utils-imports-url-1.png "Imports (Url) - Source")

Then select the server you want to import this file and the database name. If you want to perform a clean import, check the Recreate database checkbox. This option deletes the database, creates a new empty one with the same name and then imports all the schema and data from the specified source. 

![alt text](../../../assets/utils/imports/url/utils-imports-url-2.png "Imports (Url) - Destination")

The last step is an overview showing all the filled fields. Click the `IMPORT` button to start the import process.

![alt text](../../../assets/utils/imports/url/utils-imports-url-3.png "Imports (Url) - Overview")

The import process will start showing us some metrics.

![alt text](../../../assets/utils/imports/url/utils-imports-url-info.png "Imports (Url) - Information")

### Importing from Cloud Key

To import a file from a Cloud Key choose the `Cloud Key` option. After that a table will appear showing all the Cloud Keys we have into our inventory. Choose the one you want to access.

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-1.png "Imports (Cloud) - Source 1")

After clicking the Cloud Key, the table will load the buckets containing in the Cloud Key. Choose the bucket that contains the file we want to import.

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-2.png "Imports (Cloud) - Source 2")

After that, we will be able to navigate through the files into the selected bucket. Choose the file to be imported.

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-3.png "Imports (Cloud) - Source 3")

Choose the server and the database name that will be used to import the selected file. If you want to perform a clean import, check the Recreate database checkbox. This option deletes the database, creates a new empty one with the same name and then imports all the schema and data from the specified source. 

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-4.png "Imports (Cloud) - Destination")

Finally a summary will show with all the selected options. Click the `IMPORT` option to start the import process.

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-5.png "Imports (Cloud) - Overview")

After the process starts we will be able to track the process.

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-info.png "Imports (Cloud) - Information")

## Importing .tar & tar.gz files

When a **.tar** or **.tar.gz** file is selected using either URL or Cloud Key as source, we can optionally choose which files (.sql or .gz) contained into the .tar / .tar.gz we would like to import.

This use case is useful if for example we store the database backups as a .tar.gz file that contains one file per table. Thus, we would been able to import just a table on the fly without having to import the entire database.

The following screenshot shows this feature:

![alt text](../../../assets/utils/imports/cloud/utils-imports-cloud-scan.png "Imports (Cloud) - Scan")

## Infrastructure

The underlying process of the Import is similar of how the Deployments work. Basically the import process is performed at the region where the destination server is located. In this way the delay between regions is avoided.

![alt text](../../../assets/deployments/architecture-complex.png "Architecture - Cross Region")

To also reduce drastically the execution time needed to finish an import, all the process is performed in a single pipe. So the file retrieval, the decompression and the import is performed in a single computing unit. Bear in mind also that by using URL or Cloud Key as a source method, the file to be imported is never downloaded to the disk. So you won't have to worry about having as much disk space as your file to be imported.

## Requirements

There are some requirements that have to be fullfilled in order to perform imports.

This requirement only applies for regions that have enabled the `SSH Tunnel` option. All these machines that Meteor will perform an SSH tunnel will need to have installed some binaries:

- **Pipeviewer**: A terminal-based tool for monitoring the progress of data through a pipeline.
- **MySQL Client**: The MySQL Command-Line Client (version >= 5.6).
- **AWS CLI version 2**: The AWS Command Line Interface (CLI) is a unified tool to manage AWS services. 

These are the commands to install these components depending on your Linux distribution.

```bash
# Debian / Ubuntu
apt install pv
apt install mariadb
# Centos / AWS Linux
yum install pv
yum install mariadb
```

Here is the official documentation to install the AWS CLI version 2.

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html