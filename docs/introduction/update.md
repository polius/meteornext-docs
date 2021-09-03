---
sidebar_position: 4
---

# Update

To update Meteor Next, execute the following commands:

```bash title="Stop the meteor2 container"
docker stop $(docker ps -a -q --filter ancestor=meteor2)
```

```bash title="Remove the meteor2 container"
docker rm $(docker ps -a -q --filter ancestor=meteor2)
```

```bash title="Create and Start the meteor2 container with the latest version"
docker run -itd --name meteor2 -p 1234:80 meteor2/meteor2
```

At this point the latest Meteor Next version is up and working. You can access the app again typing:

```bash
http://host-ip:1234
```

## Advanced update

If you want to skip filling again all the `INSTALL` steps, start the meteor2 container using:

```
docker run -itd --name meteor2 -p 1234:80 \
-e LIC_EMAIL=<license_email> \
-e LIC_KEY=<license_key> \
-e SQL_ENGINE=<sql_engine> \
-e SQL_HOST=<sql_host> \
-e SQL_USER=<sql_user> \
-e SQL_PASS=<sql_password> \
-e SQL_PORT=<sql_port> \
-e SQL_DB=<sql_database> \
meteor2/meteor2
```

Example:

```
docker run -itd --name meteor2 -p 1234:80 \
-e LIC_EMAIL=license@test.com \
-e LIC_KEY=12345abcd \
-e SQL_ENGINE=MySQL \
-e SQL_HOST=172.16.2.121 \
-e SQL_USER=meteor2 \
-e SQL_PASS=supersecret \
-e SQL_PORT=3306 \
-e SQL_DB=meteor2 \
meteor2/meteor2
```

🚀 You can now login again with your user credentials.

```bash
http://host-ip:1234
```