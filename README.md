# GithubUsers

# Clone the repo

git clone git@github.com:darya-yankouskaya/github-users.git

# Change directory to the repo

cd github-users

## Technologies

- node: v18.15.0
- Angular Version: 16.0.0
- Angular Material: 16.0.1
- Typescript: 5.0.2

# Install the repo with npm

npm install

# Start the server

npm start

go to [https://localhost:4200](http://localhost:4200) in your browser

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Environment

Add your Github token in enviroment files in case you want to make more requests per hour.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Commits

The app uses lefthook before files committing. It runs in parallel 'npx prettier' and 'npx eslint' for staged files and 'npm run test'. Ensure you follow all the prettier and eslint rules to commit the files.

## Demo URL

https://github-users-search-cc587.web.app
