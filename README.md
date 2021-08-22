# Image Optimizer Frontend

Image Optimizer Frontend is a frontend application for [image optimizer](https://github.com/dekiakbar/image-optimizer) API. Build by [Next Js](https://nextjs.org/)

## Installation

this project created use the following tool
> node version : v16.6.1

> npm version : 7.20.5

### Backend
You must install [image optimizer](https://github.com/dekiakbar/image-optimizer) backend.

### Frontend (this repo)
Clone this repository

```bash
git clone https://github.com/dekiakbar/image-optimizer-fe
```

Navigate to project dir

```bash
cd image-optimizer-fe
```

Install node modules and dependencies

```bash
npm install
```
## Environment Variable

Copy `env.example` to `.env`

```bash
cp .env.example .env
```

Fill `NEXT_PUBLIC_API_SERVER_URL` and `NEXT_PUBLIC_API_CONFIG_URL`
```bash
# Created by Vercel CLI
VERCEL="1"
VERCEL_ENV="development"
VERCEL_URL=""
VERCEL_GIT_PROVIDER=""
VERCEL_GIT_REPO_SLUG=""
VERCEL_GIT_REPO_OWNER=""
VERCEL_GIT_REPO_ID=""
VERCEL_GIT_COMMIT_REF=""
VERCEL_GIT_COMMIT_SHA=""
VERCEL_GIT_COMMIT_MESSAGE=""
VERCEL_GIT_COMMIT_AUTHOR_LOGIN=""
VERCEL_GIT_COMMIT_AUTHOR_NAME=""
NEXT_PUBLIC_API_SERVER_URL="<YOUR_BACKEND_URL_FOR_OPTIMIZE_IMAGE>"
NEXT_PUBLIC_API_CONFIG_URL="<YOUR_BACKEND_URL_FOR_CONFIG>"
```

## Development
run this project :
```bash
npx next dev
```

## License
[MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)