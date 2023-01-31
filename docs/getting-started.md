# Getting started

## Install

Before we start, you will need to install Docker. You can find guides for your platform on the [official documentation](https://docs.docker.com/get-docker/).

Once Docker is installed, you will need to pull the meteornext image from Docker Hub and create a container. You can do it by executing the following command in your command line.

```bash
docker run --name meteornext -dp 1234:80 -v $HOME/meteornext:/root/meteornext/files meteornext/meteornext
```

> The port number `1234` and the mount path `$HOME/meteornext` can be changed to any other desired values.

After starting the Meteor Next container you can check its status by executing the following command:

```bash
docker exec $(docker ps -q --filter name=meteornext) cat /root/meteornext/status
```

And you will get the following message:

```
Meteor Next started. No user-defined configuration detected. Install section enabled.
```

> If after executing the command you receive a message saying "No such file or directory" wait a few seconds and try again. The app may take some time to finish initializing.

## Setup

It's now time to configure the application.

Open a web browser such as Firefox or Google Chrome and go to the following page:

```bash
http://host-ip:1234
```

> Change `host-ip` for the host ip where the meteornext container is running.

> Change `1234` for the chosen port number.

After opening the Meteor Next app webpage, click the `INSTALL` button.

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

- **Install Meteor Next**: Select this option if it's the first time that you install Meteor Next. ⚠️This option will delete and recreate the given database with a fresh installation of Meteor Next.

- **Update Meteor Next**: Select this option if you are performing a Meteor Next update or want to initialize the Meteor Next app to a database containing a Meteor Next installation. Use this option if you want to preserve the data in your Meteor Next database.

![alt text](../assets/introduction/install3.2.png "Install - Server (Options)")

### Amazon S3

After setting up the MySQL credentials, the next step we can decide if we want to use the Amazon S3 storage, so Meteor Next can use it to store all the generated ephemeral files like Deployments results.

![alt text](../assets/introduction/install4.png "Install - Amazon S3")

:::tip
⭐ Meteor Next works better with Amazon S3.
:::


Although Meteor can work without Amazon S3, we strongly recommend choosing this storage engine. You won't have to worry anymore about running out of disk space.

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
                "s3:GetObject",
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


The last step is to modify the Cross-origin resource sharing (CORS) from the bucket that will store the Meteor Next files. The steps are:

1) Click the bucket name that you will use to store the Meteor Next files in the AWS S3 service.
2) Go to the `Permissions` tab.
3) Scroll to the bottom to find the CORS configuration and click the `EDIT` button.
4) Copy the following configuration and paste it to the bucket's CORS.

:::: code-group
::: code-group-item AWS S3 Bucket CORS configuration
```json
[
    {
        "AllowedMethods": ["GET"],
        "AllowedOrigins": ["*"]
    }
]
```
:::
::::

This CORS config is needed to load the results after performing a deployment.

:::tip
If you want to fully secure the CORS configuration, replace the `"*"` value from the `AllowedOrigins` to the domain that Meteor Next will be hosted.

For example:

```json
[
    {
        "AllowedMethods": ["GET"],
        "AllowedOrigins": ["https://meteor.yourdomain.com"]
    }
]
```
:::

---

:::tip ADDITIONAL INFORMATION
If the Amazon S3 storage engine is enabled, mind that mounting the volume (`-v`) will no longer be mandatory, since all the ephemeral data will be stored in S3.

This can be useful if you want to deploy this application in AWS ECS Fargate.
:::

### Admin Account

The last step is to create the admin account by entering the username and password.

![alt text](../assets/introduction/install5.png "Install - Account")

After finishing the installation, the Login page will be shown. Enter the admin account credentials.

![alt text](../assets/introduction/login.png "Login")

After loging in you will be redirected to the Meteor Next Home page. At this point the Installation has been finished and you can start using it.

![alt text](../assets/introduction/home.png "Home")

## Update

To update Meteor Next, you can do it in two different ways:

* Using the graphical user interface.
* Using the command line (recommended).

### Graphical user interface (GUI)

This update method consists of going through all the INSTALL steps and entering again all the License and SQL credentials.

Here are the steps:

**1.** Remove the existing meteornext container and image.

```bash
docker rm -f $(docker ps -q --filter name=meteornext)
docker rmi meteornext/meteornext
```

**2.** Recreate and start a container of the latest Meteor Next version.

```bash
docker run --name meteornext -dp 1234:80 -v $HOME/meteornext:/root/meteornext/files meteornext/meteornext
```

**3.** Enter again in the application.

```bash
http://host-ip:1234
```

> Change `host-ip` for the host ip where the meteornext container is running.

> Change `1234` for the chosen port number.

**4.** Click the `INSTALL` button.

![alt text](../assets/introduction/install1.png "Install - Login")

**5.** Enter a valid license (Access Key & Secret Key).

![alt text](../assets/introduction/install2.png "Install - License")

:::tip
If you get an error saying that this license is in use, go to [https://account.meteornext.io](https://account.meteornext.io) and unregister the license by clicking the `Unregister license` button.
:::

**6.** Enter the same server credentials that you used in the previous Meteor Next application.

![alt text](../assets/introduction/install3.1.png "Install - Server")

**7.** After checking the connection a dialog will open asking us which action to perform. **Choose the second option: `Update Meteor Next`**.

![alt text](../assets/introduction/install3.2.png "Install - Server (Options)")

Finally, we will be redirected to the login page. At this point the Update has been finished and everyone can log in again.

### Command line (CLI)

This update method is the recommended one and consists of starting the Meteor Next container passing all the License and SQL credentials as parameters.

Here are the steps:

**1.** Remove the existing meteornext container and image.

```bash
docker rm -f $(docker ps -q --filter name=meteornext)
docker rmi meteornext/meteornext
```

**2.** Recreate and start a container of the latest Meteor Next version passing all the License and SQL credentials directly into the command line.

```bash
docker run --name meteornext -dp 1234:80 -v $HOME/meteornext:/root/meteornext/files \
-e LIC_ACCESS_KEY="<license_access_key>" \
-e LIC_SECRET_KEY="<license_secret_key>" \
-e SQL_HOST="<sql_host>" \
-e SQL_USER="<sql_user>" \
-e SQL_PASS="<sql_password>" \
-e SQL_PORT="<sql_port>" \
-e SQL_DB="<sql_database>" \
meteornext/meteornext
```

Example:

```bash
docker run --name meteornext -dp 1234:80 -v $HOME/meteornext:/root/meteornext/files \
-e LIC_ACCESS_KEY="0000-0000-0000-0000" \
-e LIC_SECRET_KEY="12345abcd" \
-e SQL_HOST="172.16.2.121" \
-e SQL_USER="meteornext" \
-e SQL_PASS="supersecret" \
-e SQL_PORT="3306" \
-e SQL_DB="meteornext" \
meteornext/meteornext
```

After starting the Meteor Next container you can check its status by executing the following command:

```bash
docker exec $(docker ps -q --filter name=meteornext) cat /root/meteornext/status
```

If you get the following message it means that both License and SQL credencials are valid and the Meteor Next app started correctly.

```
Meteor Next started using user-defined configuration.
```

> If after executing the command you receive a message saying "No such file or directory" wait a few seconds and try again. The app may take some time to finish initializing.

🚀 You can now log in again with your user credentials.

## Docker Environment variables

These are all the environment variables that meteornext supports:

| Argument         | Description |
| ---------------- | :---------- |
| `LIC_ACCESS_KEY` | The license access key |
| `LIC_SECRET_KEY` | The license secret key |
| `SQL_HOST`       | The MySQL server's hostname  |
| `SQL_USER`       | The MySQL server's username |
| `SQL_PASS`       | The MySQL server's password |
| `SQL_PORT`       | The MySQL server's port |
| `SQL_DB`         | The MySQL server's database where meteornext will be stored |
| `SECURE=1`       | Force app to serve all requests over HTTPS (make sure you have previously configured an SSL certificate pointing to the meteornext container before enabling this flag) |
| `MAX_REQUESTS`   | The maximum number of concurrent requests. If this parameter is not set, the default value is 1000. Accepted values are: 1-1000000 |

## Uninstall

To uninstall Meteor Next, execute the following commands:

:::: code-group
::: code-group-item Stop and remove the meteornext container
```bash
docker rm -f $(docker ps -q --filter name=meteornext)
```
:::
::::

:::: code-group
::: code-group-item Remove the meteornext image
```bash
docker rmi meteornext/meteornext
```
:::
::::