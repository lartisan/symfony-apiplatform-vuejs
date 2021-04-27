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
2. Follow the installation steps to setup [Lexik JWT Authentication](https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#installation)
3. Create a database (example: ```touch var/database.sqlite```) and run ```php bin/console doctrine:schema:update --force```
4. Run the User fixture ```php bin/console doctrine:fixtures:load``` with the default data or create your own credentials.
5. Run the php local server ```php -S localhost:8000 -t public/``` (if you'll be using a different port, don't forget to update the *baseURL* in ```./assets/js/api.js```)
6. Head to the login page: http://localhost:8000/login and login using the newly created credentials
7. Enjoy!
