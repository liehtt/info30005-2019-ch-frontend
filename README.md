# info30005-2019-ch-frontend
FrontEnd for INFO30005 project

Need to install dependencies specified in package.json beforehand.

Start the app by typing "npm start" without the quotes in the terminal.

# Access to React App
 https://quiet-inlet-43391.herokuapp.com/

# Test login details

User login:

> email: corn@gmail.com <br>
> pw: corn01

Club Login

> email: chair@gmail.com <br>
> pw: chair01

# Functionalities

## Registration/Login

* [User registration](https://quiet-inlet-43391.herokuapp.com/register/user)

This allows an unregistered user to create a profile/account with the application. Their details (username, student ID, email, password) are added to the database as an entity; after registering, a user will be able to log in.


| Routes           | Controllers | Models
| ---------------- | ----------- | ------
| /api/user/create | createUser  | User


* [User login](https://quiet-inlet-43391.herokuapp.com/)

This allows a pre-existing (registered) user to log in by entering their email and corresponding password. After their login details are authenticated, the user is directed to their personalised account / home page. If you are a new user, there is a button redirecting you to the user registration page to create an account first. 

| Routes                 | Controllers       | Models |
| ---------------------- | ----------------- | ------
| /api/user/authenticate | authenticateUser  | User
| /api/user/profile      | isLoggedIn
|                        | sessionUser

* [Club registration](https://quiet-inlet-43391.herokuapp.com/register/club)

This allows a club administrator to register their club within the application. The admin can provide details (club name, description, contact details) about the club, as well as an email and password which are then used to log in as a club.

| Routes            | Controllers | Models |
| ----------------- | ----------- | ------
| /api/club/create  | createClub  | Club

* [Club login](https://quiet-inlet-43391.herokuapp.com/club/login)

This allows a club administrator to log in as a pre-existing club entity using a club email and corresponding password. As with the user login, if the admin represents a new club, there is a button redirecting them to first register the club within the application. 

| Routes                  | Controllers | Models |
| ----------------------- | ----------- | ------
| /api/club/authenticate  |             | Club

## Post-login

The following functionalities are only accessible after logging in as a user or a club. If the URLs are accessed prior to logging in, you will be redirected to the default login page. 

* [Display joined clubs](https://quiet-inlet-43391.herokuapp.com/user/profile)

This is the user's default home-page, which displays clubs that the user has subscribed to. 

| Routes                | Controllers | Models |
| --------------------- | ----------- | ------
| /api/user/profile     | isLoggedIn  | User
| /api/user/:id/clubsub | sessionUser | 
|                       | getUserClubsSubscribed

* [Browse and subscribe to clubs](https://quiet-inlet-43391.herokuapp.com/clubs)

The Browse Clubs page displays a list of clubs which the user has not subscribed to. The user can click "join club" in order to subscribe to a club (the button will display "joined!" upon successful subscription). When returning to their [home page](https://quiet-inlet-43391.herokuapp.com/user/profile), any clubs that have been subscribed to will be displayed there. Once a club has been joined, it will no longer be displayed in the Browse Clubs page. 

| Routes               | Controllers | Models |
| ------------------   | ----------- | ------
| /api/user/profile    | isLoggedIn  | User
| /api/user/addClub    | sessionUser | Club
|                      | addClubToUser 

* [Display individual club information](https://quiet-inlet-43391.herokuapp.com/club/profile)

After a club admin has logged in, they can view the information associated with their own club (i.e. description, contact details).

| Routes            | Controllers | Models |
| ----------------- | ----------- | ------
| /api/club/profile |             | Club


* User/club logout (click logout button after having logged in)

This logs the user out after a session. The user is redirected to the login page, and must re-enter/authenticate their credentials if they wish to log in again. 

| Routes           | Controllers | Models |
| ---------------- | ----------- | ------
| /api/user/logout | isLoggedIn  | User
|                  | logOut

# Notes & known issues
Refreshing or using the back button while navigating the application may trigger some weird behaviour. Insufficient time to implement JSON Web Tokens

