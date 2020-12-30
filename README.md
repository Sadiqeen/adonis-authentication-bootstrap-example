# Adonis authentication with bootstrap example

## Setup

Clone this project to your workscpace

```bash
git clone https://github.com/Sadiqeen/adonis-authentication-bootstrap-excample.git
```
Change directory to project and install dependency

```bash
cd adonis-authentication-bootstrap-excample
npm install
```

then copy .env.example to .env and generate application key

```bash
copy .env.example .env
adonis key:generate
```

open .env and chage db config

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

and seed

```js
adonis seed
```

### Run project

```bash
adonis serve --dev
```

Default administrator account
email : admin@admin.com
password : password
