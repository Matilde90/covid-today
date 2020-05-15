# Philosophy-emotion-theories

React app that illustrate existing theories of emotions

## Dev Deployment

To build the app using docker container in Dev environment:

```bash
docker build -f Dockerfile.dev -t dev-emotion-theories .
```

Or, using docker-compose up command:

```bash
docker-compose up
```

### To run the container with no real-time change

```bash
docker run -it -p 3000:3000 dev-emotion-theories
```

### Using docker volumes to map folder in your computer to folder in docker

```bash
docker run -it -p 3000:3000 -v $(pwd):/app dev-emotion-theories
```

### To run test on deployment

```bash
docker run -it dev-emotion-theories npm run tests
```

If you want tests to update in real time do the following:

1. docker compose up
2. get the docker id
3. docker exec -it dev-emotion-theories npm run test
attach to the existing container

*ALTERNATIVELY*
- Add a new service to the dockerfile.dev:

```yml
  tests:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app
```

---
git push -u origin HEAD

## Example of interactive code using api:
  
  ```js
  componentDidMount() {
        this.setState({ theories: theories })
        fetch("https://api.covid19api.com/summary")
            .then(response => response.json())
            .then((response) => console.log(response.Global.NewConfirmed))
    }
  ```
