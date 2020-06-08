# Pharmacy_Management_System

Website which is used to manage the pharmacy shop with billing facility and manage stocks !!

## How To Run?

To run this website run this command on command prompt on root folder.

```
npm start or node app.js
```

It will run under the url http://127.0.0.1:3000/


## Login Details

Email and Password for Website:<br>

Admin :<br>
Email :admin@cq.com<br>
Password: admincq<br>

Vendor :<br>
Email :vendor@cq.com<br>
Password: admincq<br>

Shopkeeper:<br>
Email : shopkeeper@cq.com<br>
Password: admincq<br>

## Features

- Dynamic Data by mongoose database
- Different View For Shopkeeper, Admin and Vendor
- Manage Billings
- Manage Stocks
- Responsive Layout
- Mobile Friendly
- Open Source

## How to Use ?
<ol type="number">
<li> Use mongorestore command to add database to your Local Machine.</li>
<li>Run Mongo Server</li>
<li>Run Server File app.js</li>
<li>Run local host on port number 8000</li>
</ol>

## Pre-requisites

- Node JS (Tested on v12.14.0)
- Mongoose
- Pre-requisites or Dependencies(Below)

## Dependencies :

<ul>
  <li>Mongoose</li>
  <li>Express</li>
  <li>Express-Session</li>
  <li>PATH</li>
  <li>EJS</li>
  <li>Bcrypt</li>
  <li>HTTP</li>
</ul>

- Express

```
npm install express
```

- EJS

```
npm install ejs
```

- Express-Session

```
npm install express-session
```

- Mongoose

```
npm install mongoose
```

- Dotenv

```
npm install dotenv
```

- Bcrpty

```
npm install bcrpty  / npm i bcrpty
```


## Schema

<h4><b>User Schema</b></h4>

| Name         | Type     | Required | Unique | Encrpyted |
| ------------ | -------- | -------- | ------ | --------- |
| Name         | String   | Yes      | No     | No        |
| Email        | String   | Yes      | Yes    | No        |
| Password     | String   | Yes      | No     | Yes       |
| DOB          | String   | Yes      | No     | No        |
| Role         | String   | Yes      | No     | No        |
| billDetails  | ObjectId | No       | No     | No        |
| userdetails  | ObjectId | No       | No     | No        |

<h4><b>Stock Schema</b></h4>

| Name          | Type   |
| ------------- | ------ |
| User          | ObjectId |
| MedicineType  | ObjectId |
| NoofStock     | Number |
| Price         | Number  |
| isActive      | Boolean |
