# Dough

Dough is an example reactjs and rails api app for managing personal 
finances. The goal is to build a reactjs and rails app that is 
wrapped as a single app and for the app to use the JSON APIs and
token based authentication for calling the app similar to a SPA or 
a mobile app.

* Rails APi w/ JSON responses
* Token based authentication w/ devise_token_auth
* Reactjs UI that calls APIs
* React Router for routing requests
* Bootstrap for CSS styling

## To Do
1. Implement React Router
   a.) BUG: If I manually type in the /about route then I get an error that 
       there isn't a route the matches GET "/about"
2. Add basic page styling
3. Add APIs
4. Add Token based authentication

## Articles
The following articles helped me setup the environment:

* [Goodbye Sprockets. Hello Webpacker](https://medium.com/@coorasse/goodbye-sprockets-welcome-webpacker-3-0-ff877fb8fa79)

* [Create a Ruby on Rails 5.1 application with Webpack, React 16, and React Router](https://blog.grillwork.io/create-a-ruby-on-rails-5-1-application-with-webpack-react-16-and-react-router-e2c16d267f73)

# Notes
Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
