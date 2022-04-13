require('dotenv').config()
module.exports = {
  apps: [
    {
      name: 'dev-portal',
      env: {
        NODE_ENV: 'staging',
        CHARGETRIP_API_URL: process.env.CHARGETRIP_API_URL,
        ALGOLIA_API_SECRET_KEY: process.env.ALGOLIA_API_SECRET_KEY,
        ALGOLIA_API_PUBLIC_KEY: process.env.ALGOLIA_API_PUBLIC_KEY,
        ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
        FATHOM_ID: process.env.FATHOM_ID,
        EDIT_GITHUB_URL: process.env.EDIT_GITHUB_URL,
        EDIT_API_URL: process.env.EDIT_API_URL,
      },
      script: '',
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-130-129-10.eu-west-2.compute.amazonaws.com',
      key: '~/.ssh/dev-portal.pem',
      ref: 'origin/main',
      repo: 'git@github.com:chargetrip/chargetrip-developers.git',
      path: '/home/ubuntu/dev-portal',
      'post-deploy': `git checkout main && git pull origin main && git branch -D fix/dev-portal/content-edit && git checkout -b fix/dev-portal/content-edit && npm install && pm2 restart all`,
    },
  },
}
