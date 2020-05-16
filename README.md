# Covid Today

I am learning React following Andrei Nagonie's Udemy course [The complete junior to senior web developer roadmap](https://www.udemy.com/course-dashboard-redirect/?course_id=1650610). I built this simple webpage as an exercise.
When a user visits the page, they will see the daily Covid-19 data. 
This page sources data from Johns Hopkins CSSE through [Covid19api](https://covid19api.com").

## Dev Deployment

To build the app using docker container in Dev environment:

```bash
docker build -f Dockerfile.dev -t dev-emotion-theories .
```

### To run the container with no real-time change

```bash
docker run -it -p 3000:3000 dev-emotion-theories
```
