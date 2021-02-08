# Coder Quiz
![logo](./frontend/styles/b2a875ea-f9aa-41bf-bfb5-21a0321084d7_200x200.png)
## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [Setup](#setup)

## Description
Coder Quiz is my fourth Flatiron School project. It is a single page application (SPA) built using Javacript, HTML & CSS on the fronted with a Rails Api backend. Users can create an account, log in and quiz themselves on Computer Science and technology topics. 

## Technologies
- Ruby 2.6.1
- Rails 6.0.3
- Javascript
- HTML
- CSS

## Setup

### Install gems
Clone down this repository. Navigate to the project folder, navigate to backend and install the gemfile:<br>
```
$ cd /coder_quiz
$ cd /backend
$ bundle install
```

### Run migrations
To migrate the database and generate seed data run the following commands:<br>
```
$ rails db:migrate
$ rails db:seed
```

### Run the server
To get the application running on your local machine:<br>
```
$ rails server
```
Then navigate to your local host URL in the browser:<br>
`http://localhost:3000/`<br>

