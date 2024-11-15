#Todo Application



#This is a simple todo application where users can use to manage their todos.

# Feature Overview
  -Create, Read, Update and Delete Todos.
  -Mark Todos as pending or completed.
  -Filter todos based on their status.

# Tech stack 
  -FrontEnd........React
  -BackEnd.........Laravel

# Getting Started
## Required 
- Composer 
- PHP >=8
- MYSQL >=5
- React >=17
## Installation | Laravel
### Step 1
Clone this repository
``` bash 
git clone git@github.com:Abelmalu/Medhanit_toddo.git 
```
### Step 2
Go to cloned directory
```bash 
cd medhanit_toddo
```
and install required packeges
```bash
composer install 
```
>optional 
>```bash
>npm install
>```

###  Step 3
Create ``.env`` file and copy everything from ``.env.example`` to ``.env`` file 
for linux 
```bash
cat .env.example >> .env
```
and generate ``APP_KEY``
```bash
php artisan key:generate
```

### Step 4
Create database named ``medhanit_todo`` and migrate the database files
```bash 
php artisan migrate
```
### Step 5
Start the server and explore!
```bash
php artisan serve
```

## Installation | React 

### step 1
go to the react folder
```bash
cd react
```
### step 2 

install necessary packages 
...bash
npm install

### step 3

Start the server and explore!
....bash 
npm run dev

http://127.0.0.1:3000


# Sample photos












