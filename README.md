```
# as always
npm start
```

## Running in development

`gatsby develop`

_built with Gatsby_


Recently had some terribly annoying trouble getting this to build and deploy
- `sharp` npm module wouldn't install. I could only get it installed using node@10.x
- `scroll-into-view` npm module was tripping up Uglify during build. Had to manually install v1.15.0 instead of v1.16.0
- can't use vercel github integration then because that requires at least node@14.x

Deploying manually via Vercel (account is my email address drbaker2@gmail.com)

Do the build locally first `npm run build`

```
# for this project, I would have nvm set to use node v10, but vercel needs a newer version of node running 
nvm use stable # v14 or something

# manually change the version of node version in package.json, otherwise vercel complains

# be aware that the vercel build and install commands are noops because I am just deploying the public build folder, which I am now adding to git because fuck it.
vercel --prod
```