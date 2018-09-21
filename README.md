# I'm Not Lovin' It

**[I'm Not Lovin' It] (https://imnotlovinit.com)** is the landing page for the I'm Not Lovin' It campaign. There are several pages including:
  1. ('/')
    - Main campaign page with info about the campaign, an action slider, twitter feed, and media resources.
  2. ('/artgallery') 
    - Art gallery submission page with PDF download of submission instructions.
  3. ('/contestrules)
    - Art show official rules page with PDF download of official rules.
  4. ('/franchise')
    - Franchise page detailing how McDonald's franchise owners can get involved with the campaign.
  5. ('/volunteertoolkit')
    - Volunteer tool kit page with PDF download of volunteer tool kit.

The site is built with the [Gatsby](https://www.gatsbyjs.org/) static site generator. For deployment and hosting, this project uses [Netlify](https://netlify.com).

## Development

Install dependencies in the root folder:

```
npm install
```

Run the server

```
gatsby develop
```

Open at:

```
http://localhost:8000
```

## Deploy

Make sure files build without errors:

```
gatsby build
```

Always make changes in a tweak (`tw`), feature (`ft`), or bugfix (`bf`) branch and then push the branch to the remote repository. 

Continuous deployment is configured for this repo. All pushed branches will trigger a Netlify production branch under the Netlify site: [imnotlovinit](https://app.netlify.com/sites/imnotlovinit/)

When it's time to deploy them, create a pull request for review. If the PR is approved by a majority of teammates, merge it into `master` to trigger the build and deploy process on Netlify. That's all there is to it!





