# SW_secure_mobile_payment_system
Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js (version X.X.X or later)
You have installed npm (comes with Node.js)
You have a working internet connection
Installation
To install the project, follow these steps:

Clone the repository : git clone https://github.com/AnasMBajawi/SW_secure_mobile_payment_system.git


Navigate to the project directory
cd your-repository

Install the dependencies : npm install  

To run the project, follow these steps:

Ensure you are in the project directory

cd your-repository

to start the application
npm start or npm run dev

Running Tests
To run tests, use the following command:
npm test

Scripts:
Here are some useful npm scripts you can use:
npm start: Starts the application
npm run dev: Starts the application in development mode
npm test: Runs the tests
npm run build: Builds the project for production



for the registrtion API : 
http://localhost:5000/user/register
payload: {
     "firstName": "ismail",
    "lastName": "bajawi",
    "date_of_birth":"2001-04-23",
    "phone_number": "777582933",
    "email": "ibajawi@mail.com",
    "password": "ANas@2001"
}


for the login API : 
http://localhost:5000/user/login
payload: {
    "email": "ibajawi@mail.com",
    "password": "ANas@2001"
}

for the post product API:
http://localhost:5000/product/
payload : {
        "name": "iphone14",
    "description": "the new iphone 14",
    "images": "",
    "catagory" : "phone",
    "price": "550"
}
and you should copy the token from login response in order to be able to post and place it in Authorization -> then choose bearer Token and paste it there

for the checkout you should be autheintacted too so you should copy the token from login response in order to be able to post and place it in Authorization -> then choose bearer Token and paste it there :
http://localhost:5000/product/cart/checkout
payload : {
    "name": "nepdate for 805",
    "price": 30
}