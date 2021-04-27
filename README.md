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
3. Run the User fixture ```php bin/console doctrine:fixtures:load``` with the default data or create your own credentials.
4. Run the php server ```php -S localhost:8000 -t public/``` (if you'll be using a different port, don't forget to update the *baseURL* in ```./assets/js/api.js```)
5. Head to the login page: http://localhost:8000/login and use the newly created credentials
5. Enjoy!
