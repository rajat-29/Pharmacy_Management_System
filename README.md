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

| Name          | Type     |
| ------------- | -------- |
| User          | ObjectId |
| MedicineType  | ObjectId |
| NoofStock     | Number   |
| Price         | Number   |
| isActive      | Boolean  |


<h4><b>ShopItem Schema</b></h4>

| Name          | Type     |
| ------------- | -------- |
| User          | ObjectId |
| MedicineType  | ObjectId |
| NoofStock     | Number   |
| Price         | Number   |
| boughtFrom    | Boolean  |


<h4><b>PlacedOrder Schema</b></h4>

| Name          | Type     |
| ------------- | -------- |
| CustomerName  | String   |
| DoctorName    | String   |
| Contact       | String   |
| Address       | String   |
| Items         | Array    |

<h4><b>Medicine Schema</b></h4>

| Name          | Type     |
| ------------- | -------- |
| Name          | String   |

<h4><b>PlacedOrder Schema</b></h4>

| Name          | Type     |
| ------------- | -------- |
| CustomerName  | String   |
| DoctorName    | String   |
| Contact       | String   |
| Items         | Array    |
| Total         | Number   |


## Directory

```bash
|___ Root
|   |--- app.js
|   |
|   |--- Controller
|   |    |--- billing.js
|   |    |--- index.js
|   |    |--- medicine.js
|   |    |--- shopitem.js
|   |    |--- stock-shopitem.js
|   |    |--- user.js
|   |    |--- user-details.js
|   |
|   |
|   |--- Middlewares
|   |    |--- middleware.js
|   |
|   |--- Models
|   |    |--- billingSchema.js
|   |    |--- medSchema.js
|   |    |--- placedOrderSchema.js
|   |    |--- shopSchema.js
|   |    |--- stockSchema.js
|   |    |--- userDetailsSchema.js
|   |    |--- UserSchema.js
|   |
|   |--- Public
|   |    |--- css (Static)
|   |    |--- images (Static)
|   |    |--- script (Static)
|   |
|   |--- Routes
|   |    |--- Handlers
|   |    |    |--- admin.js
|   |    |    |--- shopkeeper.js
|   |    |    |--- user.js
|   |    |    |--- login.js
|   |    |--- index.js
|   |
|   |--- viwes
|   |    |--- partials
|   |    |    |--- sidebar.ejs
|   |    |--- addMedicine.ejs
|   |    |--- addStock.ejs
|   |    |--- billingLogs.ejs
|   |    |--- buystock.ejs
|   |    |--- changepassword.ejs
|   |    |--- dashboard.ejs
|   |    |--- login.ejs
|   |    |--- manageMedicines.ejs
|   |    |--- orderMedicines.ejs
|   |    |--- profile.ejs
|   |    |--- recentOrders.ejs
|   |    |--- shopkeeperstable.ejs
|   |    |--- stockdetails.ejs
|   |    |--- vendorstable.ejs
|   |    |--- vendorstock.ejs
```
