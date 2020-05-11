# Philosophy-emotion-theories

React app that illustrate existing theories of emotions

## Deployment

To build the app using docker container in Dev environment:

```bash
docker build -f Dockerfile.dev -t dev-emotion-theories .
```

### To run the container with no real-time change

```bash
docker run -it -p 3000:3000 dev-emotion-theories
```

### Using docker volumes to map folder in your computer to folder in docker

```bash
docker run -it -p 3000:3000 -v $(pwd):/app dev-emotion-theories
```

See the app deployed locally here: http://localhost:3000