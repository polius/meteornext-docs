# Getting started

## Install

Before we start, you will need to install Docker. You can find guides for your platform on the [official documentation](https://docs.docker.com/get-docker/).

Once Docker is installed, you will need to pull the meteornext image from Docker Hub and create a container.

```bash
docker run --name meteornext -dp 1234:80 meteornext/meteornext
```

The port number `1234` is not mandatory and can be changed to any other desired value.

---

### Data persistence 

This application supports two different file storage engines:

- **[Local](#local)**: Files are stored inside the docker (into the `/root/files` folder).
- **[Amazon S3 (preferred)](#amazon-s3)**: Files are stored in Amazon S3.

:::tip
⭐ We strongly recommend using the Amazon S3 storage engine over Local
:::

**LOCAL**

This storage engine requires passing an additional parameter (-v) when creating the Meteor Next container.

:::: code-group
::: code-group-item Store all the generated files in the current working directory
```bash
docker run --name meteornext -dp 1234:80 -v "$(pwd):/root/files/" meteornext/meteornext
```
:::
::::

In this way, when you update the Meteor Next app, all generated files (deployments results) will be preserved.

**AMAZON S3**

This file storage is the easiest one to manage, and also it doesn't require passing the `-v` parameter to the `docker run`. To choose this option, read the next [Setup](#setup) section.

## Setup

After starting the meteornext container, it's now time to configure the application.

Open a web browser such as Firefox or Google Chrome and go to the following page:

```bash
http://host-ip:1234
```

> Change `host-ip` for the host ip where the meteornext container is running.

After entering the URL the Login page will be shown. At this point, click the `INSTALL` button.

![alt text](../assets/introduction/install1.png "Install - Login")

### License

The first step is to enter a valid license (Access Key & Secret Key).

![alt text](../assets/introduction/install2.png "Install - License")

:::tip
To get a license key pair, go to [https://account.meteornext.io](https://account.meteornext.io) and create an account.
:::

### MySQL Credentials

After entering a valid license, it's now time to enter the server credentials to store the app's database.

![alt text](../assets/introduction/install3.1.png "Install - Server")

In case the database exists in the server, a dialog will appear with two options:

- **Install Meteor Next**: Select this option if it's the first time that you install Meteor Next. This option will delete and recreate the given database with a fresh installation of Meteor Next.

- **Update Meteor Next**: Select this option if you are performing a Meteor Next update. This option will use the selected database that contains an existing Meteor Next installation.

![alt text](../assets/introduction/install3.2.png "Install - Server (Options)")

### Amazon S3

After setting up the MySQL credentials, the next step we can decide if we want to use the Amazon S3 storage, so Meteor Next can use it to store all the generated ephemeral files like Deployments results.

![alt text](../assets/introduction/install4.png "Install - Amazon S3")

:::tip
⭐ Meteor Next works better with Amazon S3.
:::

Although Meteor can work without Amazon S3, we strongly recommend choosing this storage engine. You won't have to worry any more about the storage left on your machine, and all the ephemeral data will be preserved when you perform a [Meteor update](#update).

The credentials needed to work are an AWS IAM user with Programmatic access with the following IAM Policy attached.

:::: code-group
::: code-group-item AWS IAM Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::yourbucket",
                "arn:aws:s3:::yourbucket/*"
            ]
        }
    ]
}
```
:::
::::

> Replace `yourbucket` to the bucket's name you want to give access.

After creating the AWS IAM Policy, grab the AWS user's credentials that has the policy attached (Access Key and Secret Access Key).

Here's an example:

- **Access Key**: `AKIAIOSFODNN7EXAMPLE` (The AWS user Access Key).
- **Secret Access Key**: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` (The AWS user Secret Access Key).
- **Region**: `eu-west-1` (The AWS region code where the bucket resides).
- **Bucket**: `meteornext-files` (The AWS bucket name to store all Meteor files).

### Admin Account

The last step is to create the admin account by entering the username and password.

![alt text](../assets/introduction/install5.png "Install - Account")

After finishing the installation, the Login page will be shown. Enter the admin account credentials.

![alt text](../assets/introduction/login.png "Login")

ENJOY!

![alt text](../assets/introduction/home.png "Home")

## Update

To update Meteor Next, execute the following commands:

:::: code-group
::: code-group-item Stop and remove the existing meteornext container
```bash
docker rm -f meteornext
```
:::
::::

:::: code-group
::: code-group-item Create and start the meteornext container with the latest version
```bash
docker run --name meteornext -dp 1234:80 meteornext/meteornext
```
:::
::::

At this point, the latest Meteor Next version is up and working. You can access the app again typing:

```bash
http://host-ip:1234
```

### Advanced update

If you want to skip filling again all the `INSTALL` steps, start the meteornext container using:

```bash
docker run --name meteornext -dp 1234:80 \
-e LIC_ACCESS_KEY="<license_access_key>" \
-e LIC_SECRET_KEY="<license_secret_key>" \
-e SQL_ENGINE="<sql_engine>" \
-e SQL_HOST="<sql_host>" \
-e SQL_USER="<sql_user>" \
-e SQL_PASS="<sql_password>" \
-e SQL_PORT="<sql_port>" \
-e SQL_DB="<sql_database>" \
meteornext/meteornext
```

Example:

```bash
docker run --name meteornext -dp 1234:80 \
-e LIC_ACCESS_KEY="0000-0000-0000-0000" \
-e LIC_SECRET_KEY="12345abcd" \
-e SQL_ENGINE="MySQL" \
-e SQL_HOST="172.16.2.121" \
-e SQL_USER="meteornext" \
-e SQL_PASS="supersecret" \
-e SQL_PORT="3306" \
-e SQL_DB="meteornext" \
meteornext/meteornext
```

🚀 You can now log in again with your user credentials.

```bash
http://host-ip:1234
```

## Uninstall

To uninstall Meteor Next, execute the following commands:

:::: code-group
::: code-group-item Stop and remove the meteornext container
```bash
docker rm -f meteornext
```
:::
::::

:::: code-group
::: code-group-item Remove the meteornext image
```bash
docker rmi meteornext
```
:::
::::

## Docker Environment variables

These are all the environment variables that meteornext supports:

| Argument         | Description |
| ---------------- | :---------- |
| `LIC_ACCESS_KEY` | The license access key |
| `LIC_SECRET_KEY` | The license secret key |
| `SQL_ENGINE`     | The server's engine [MySQL \| Amazon Aurora (MySQL)] |
| `SQL_HOST`       | The server's hostname  |
| `SQL_USER`       | The server's username |
| `SQL_PASS`       | The server's password |
| `SQL_PORT`       | The server's port |
| `SQL_DB`         | The server's database where meteornext will be stored |
| `SECURE=1`       | Force app to serve all requests over HTTPS (make sure you have previously configured an SSL certificate pointing to the meteornext container before enabling this flag) |
| `MAX_REQUESTS`   | The maximum number of concurrent requests. If this parameter is not set, the default value is 1000. Accepted values are: 1-1000000 |

Example:

:::: code-group
::: code-group-item Enabling SECURE flag
```bash
docker run --name meteornext -dp 1234:80 -e SECURE=1 meteornext/meteornext
```
:::
::::