---
sidebar_position: 5
---

# Uninstall

To uninstall Meteor Next, execute the following commands:

```bash title="Stop the meteor2 container"
docker stop $(docker ps -a -q --filter ancestor=meteor2)
```

```bash title="Remove the meteor2 container"
docker rm $(docker ps -a -q --filter ancestor=meteor2)
```

```bash title="Remove the meteor2 image"
docker rmi meteor2
```