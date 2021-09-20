---
sidebar_position: 1
---

# Restore

This section is used to import SQL files from different sources to any database.

These are the available sources:

- **File**: A file located on a local drive.
- **URL**: An accessible url.
- **[Cloud Key](../inventory/cloud)**: A cloud computing service, such as Amazon Web Services (AWS).

The different available file formats accepted are SQL, GZ and TAR.

![alt text](../../../assets/utils/restore/restore.png "Restore - List")

Here we can chose which columns we want to show or hide.

![alt text](../../../assets/utils/restore/restore-columns.png "Restore - Columns")

## Examples

### Importing from File

To import a file choose the `File` option from the sources list and then select the desired file from your local drive. 

![alt text](../../../assets/utils/restore/restore-new-file-source.png "Restore - New File Source")

Then select the server you want to import this file and the database name.

![alt text](../../../assets/utils/restore/restore-new-file-destination.png "Restore - New File Destination")

The last step is an overview showing all the filled fields. Click the `RESTORE` button to start the restoring process.

![alt text](../../../assets/utils/restore/restore-new-file-overview.png "Restore - New File Overview")

The restore process will start showing us some metrics.

![alt text](../../../assets/utils/restore/restore-info-file.png "Restore - File Information")

### Importing from Cloud Key

To import a file from a Cloud Key choose the `Cloud Key` option. After that a table will appear showing all the Cloud Keys we have into our inventory. Choose the one you want to access.

![alt text](../../../assets/utils/restore/restore-new-cloud1.png "Restore - New Cloud1")

After clicking the Cloud Key, the table will load the buckets containing in the Cloud Key. Choose the bucket that contains the file we want to restore.

![alt text](../../../assets/utils/restore/restore-new-cloud2.png "Restore - New Cloud2")

After that, we will be able to navigate through the files into the selected bucket. Choose the file to be restored.

![alt text](../../../assets/utils/restore/restore-new-cloud3.png "Restore - New Cloud3")

Choose the server and the database name that will be used to restore the selected file from the previous step.

![alt text](../../../assets/utils/restore/restore-new-file-destination.png "Restore - New File Destination")

Finally a summary will show with all the selected options. Click the `RESTORE` option to start the restore process.

![alt text](../../../assets/utils/restore/restore-new-cloud4.png "Restore - New Cloud4")

After the process starts we will be able to track the process.

![alt text](../../../assets/utils/restore/restore-info-cloud.png "Restore - Cloud Information")

### Importing .tar / tar.gz files

When a .tar / .tar.gz file is selected using either URL or Cloud Key as source, a new process automatically starts and a new table is shown with all the files that are contained inside the one we selected.

At this point we can select any .sql or .gz files and Meteor will only restore the desired files. This use case is useful if for example we store the database backups as a .tar.gz file that contains one file per table. Thus, we are able to restore just a table on the fly without having to restore the entire database.

![alt text](../../../assets/utils/restore/restore-new-cloud-scan.png "Restore - New Cloud Scan")

## Infrastructure

The underlying process of the Restore is similar of how the Deployments work. Basically the restoring process is performed at the region where the destination server is located. In this way the delay between regions is avoided.

![alt text](../../../assets/deployments/architecture-complex.png "Architecture - Cross Region")

To also reduce drastically the execution time needed to finish a restore, all the process is performed in a single pipe. So the file retrieval, the decompression and the restore is performed in a single computing unit. Bear in mind also that by using URL or Cloud Key as a source method, the file to be restored is never downloaded to the disk. So you won't have to worry about having as much disk space as your file to be restored.

## Requirements

There are some requirements that have to be fullfilled in order to perform restores in different regions.

This behaviour happens when we want to do a restore in a server which its region has the `SSH Tunnel` option enabled. In this case we will have to install some components in that SSH machine before starting the restore.

- **Pipeviewer**: A terminal-based tool for monitoring the progress of data through a pipeline.
- **MySQL Client**: The MySQL Command-Line Client.

These are the commands to install these components depending on your Linux distribution.

```bash
# Debian / Ubuntu
apt install pv
apt install default-mysql-client
# Centos / AWS Linux
yum install pv
yum install mysql
```