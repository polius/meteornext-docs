## Local Development

```console
cd /home/ec2-user/git/meteor2-docs/docs
npx vuepress dev --port 3000
```

## Update

```console
npm update
```

## Build & Deployment

```
cd /home/ec2-user/git/meteor2-docs/docs
npx vuepress build
python3 /home/ec2-user/git/meteor2-docs/transfer.py
```