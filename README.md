# physics-tutors-webapp-files

A static website for physics tutoring, featuring multiple HTML pages, CSS styling, images, PDFs, and favicon. The site is served using NGINX in a Docker container and deployed on an AWS EC2 instance with CI/CD automation via GitHub Actions.

# Physics Tutors Web App Structure
# Physics Tutors Web App Structure

```
Physics-Tutors-Webapp-Files/
├── .github/
│   └── workflows/
│       └── docker-deploy.yml       # ✅ GitHub Actions CI/CD workflow
├── html/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── feedback.html
│   ├── about.html
│   └── homeworkhelpsubmission.html # ✅ All your HTML pages
├── styles/
│   └── style.css                   # ✅ CSS styling
├── images/
│   └── ...                         # ✅ Images: logo, background, etc.
├── pdf/
│   └── sample.pdf                  # ✅ Static PDF file(s)
├── favicon.ico                     # ✅ Favicon for the browser tab
├── Dockerfile                      # ✅ NGINX-based Docker config
└── README.md                       # ✅ Project description (optional)
```

## Features

- Multiple static HTML pages for user interaction and information
- Custom CSS for styling
- Image and PDF asset support
- Dockerized with NGINX for efficient static site serving
- CI/CD pipeline using GitHub Actions to build and push Docker images
- Deployment target: AWS EC2 instance

## Getting Started

### Prerequisites

- Docker installed locally (optional for testing)
- AWS EC2 instance for hosting
- DockerHub account (for image storage)
- GitHub repository with secrets configured:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`

### Build and Run Locally

```bash
docker build -t physicstutors-nginx .
docker run -d -p 80:80 --name physicstutors-site physicstutors-nginx
