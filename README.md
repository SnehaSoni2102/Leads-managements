# LeadsMangements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.
##
To set up an Angular project, you'll need to follow a series of commands. Here’s a step-by-step guide:
##
## 1. Installed Node.js and npm

Angular requires Node.js and npm (Node Package Manager). Check if they're installed using:
##
node -v
##
npm -v
##

## 2. Installed Angular CLI

The Angular Command Line Interface (CLI) is a tool to initialize, develop, and maintain Angular applications.
##
npm install -g @angular/cli
##
## Created a New Angular Project

ng new leads-management
##

## 4. Navigate to the Project Directory

cd leads-management
##

## 5. Serve the Application

ng serve
##
## Login component added
##  
- command to add Login Component
##
   -- ng generate component login 
## 
# Installed Tailwind CSS

## Steps 

- Install Tailwind CSS
##
Install tailwindcss via npm, and then run the init command to generate a tailwind.config.js file.
## 
npm install -D tailwindcss postcss autoprefixer
##
npx tailwindcss init
##
- Configure your template paths
##
Add the paths to all of your template files in your tailwind.config.js file.
##
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
##
- Add the Tailwind directives to your CSS
##
Add the @tailwind directives for each of Tailwind’s layers to your ./src/styles.css file.
##
@tailwind base;
##
@tailwind components;
##
@tailwind utilities;
##
## Login page route
- { path: '', component: LoginComponent }
##
## Login Page created
- added elements - Login page contains Logo, Image, Text email, password, Login Button, Forgot password text
##
## Added validation for email and password
- Displayed appropriate error messages for incorrect credentials
##

## Leads component added
##  
- command to add Login Component
##
   -- ng generate component leads 
## 

## Navigate to Leads Page
- On Click on Login button its Navigate to Leads Page
##
   Router injected to login.component.ts Page - private router: Router 
   ##
   -if all credentials are correct
       -- this.router.navigate(['/leads']);  // Adjust the path as needed


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
