# How to Run the Project

Follow these steps to set up and run the project:

1. **Install Node.js**
   - Download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
   
2. **Verify Node.js Installation**
   - Open your terminal.
   - Run the command `node -v` to ensure Node.js is installed successfully.

3. **Navigate to Project Directory**
   - Open the terminal.
   - Change directory to your project folder using `cd path/to/project-directory`.

4. **Install Dependencies**
   - Run `npm install` to install all required dependencies listed in the `package.json` file.

5. **Start the Development Server**
   - Execute `npm run dev` to start the development server.

## Troubleshooting

- If you encounter the error `sh: vite: command not found` when running `npm run dev`, follow these steps:
    1. Delete the `package-lock.json` file.
    2. Rerun `npm install` to reinstall the dependencies.
    3. Try `npm run dev` again.



I followed this guide to create the website
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
