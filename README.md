# How to run (tested on macOS):
    install node js

    https://nodejs.org/en/download

    open terminal

    run "node -v" to ensure node.js is installed
    
    open the terminal and cd into the project directory
    
    run "npm install" 
    
    run "npm run dev"
    
        (TROUBLESHOOTING:
        If the "npm run dev" command spits out the error message "sh: vite: command not found", try deleting the package-lock.json folder, rerun "npm install" first, and then run "npm run dev" again)
    
you are now running a local server in the terminal

allow google chrome to open the webpage if necessary

all changes (once saved) will be automatically update on the website
    
        
    



I followed this guide to create the website
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

We should probably use babel and/or other build tools to get the site to work on older browsers and get a faster runtime 
