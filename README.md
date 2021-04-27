# symfony-apiPlatform-vuejs

A starter application with:
- Symfony 5 and ApiPlatform as backend
- Vue.js, Vuex and VueRouter for the frontend
- Tailwind CSS with Heroicons

## Features
- JWT Authentication using LexikJWT
- Vue.js components to display a list of users and a single user

## Installation
1. After cloning this repository, run ```composer install``` and ```npm install && npm run dev```
2. Create a database (example: ```touch var/database.sqlite```) and run ```php bin/console doctrine:schema:update --force```
3. Start adding users and enjoy!
