# Requirements

There are some requirements that have to be fulfilled in order to use some sections of Meteor Next.

## Deployments

This requirement only applies for regions that have the `SSH Tunnel` option enabled. All these machines that Meteor will perform an SSH tunnel to perform deployments will need to have the following Python libraries installed.

- boto3
- requests
- sentry_sdk
- pymysql
- sqlparse
- paramiko
- sshtunnel

The following commands will install these dependencies:

```bash
python3 -m pip install --no-cache-dir --break-system-packages boto3 && \
python3 -m pip install --no-cache-dir --break-system-packages requests && \
python3 -m pip install --no-cache-dir --break-system-packages sentry_sdk && \
python3 -m pip install --no-cache-dir --break-system-packages pymysql && \
python3 -m pip install --no-cache-dir --break-system-packages sqlparse && \
python3 -m pip install --no-cache-dir --break-system-packages paramiko && \
python3 -m pip install --no-cache-dir --break-system-packages sshtunnel
```

## Monitoring

There are no requirements to be fulfilled.

## Utils

This requirement only applies for regions that have the `SSH Tunnel` option enabled. All these machines that Meteor will perform an SSH tunnel will need to have installed some binaries:

- **Pipeviewer**: A terminal-based tool for monitoring the progress of data through a pipeline.
- **MySQL Client**: The MySQL Command-Line Client (version >= 5.6).
- **AWS CLI version 2**: The AWS Command Line Interface (CLI) is a unified tool to manage AWS services. 

These are the commands to install these components, depending on your Linux distribution.

```bash
# Debian / Ubuntu
apt install pv
apt install mariadb
# Centos / AWS Linux
yum install pv
yum install mariadb
```

Here is the official documentation to install the AWS CLI version 2.

[https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

In order to perform Exports and Clones there is another requirement to be fulfilled. It is needed to have a valid `Amazon S3` account configured in the Administration Panel --> Amazon S3.

The advantage of using the Amazon S3 is that we won't have to worry about of running out of disk space or by exhausting the bandwidth.

## Client

There are no requirements to be fulfilled.
