# Micro Frontends Proof of Concept 

## Goals
* application where we can stitch more than one frontend framework in the fragment of a page (fragment : header, side navigation bar and content area)
* side navigation bar will have links that open sub-applications
* each sub-application can be implemented in different technology (like Angular 5, React 15 and React 16)
* we can render single sub-application in single page
* we can render many sub-applications in a single page
* each sub-application can be deployed independently and hosted on different servers
* CSS stylesheets are independent
* communication between sub-applications is possible


## Modules

### sub-app-angular    
Angular 5 application. It a sub-application of the portal.
    
### sub-app-react16
React 16 application. It a sub-application of the portal.

### main-app
 React 15 application. It is a template application, which aggregates **sub-app-angular** and **sub-app-react16** as a portal.

## Deployment
### sub-app-angular
~~~~
cd sub-app-angular
npm install
npm run build
npm run serve
~~~~
Now bundles are available here: http://localhost:3001
### sub-app-react16
~~~~
cd sub-app-react16
npm install
npm run build
npm run serve
~~~~
Now bundles are available here: http://localhost:3002
### main-app
~~~~
cd main-app
npm install
npm run build
npm run serve
~~~~
Now the application is available here: [http://localhost:3000](http://localhost:3000)

### PS - In windows you may get this error ": Filename too long"
To resolve this issue, please run the following command from GitBash or the Git CMD prompt:
~~~~
git config --system core.longpaths true
~~~~
