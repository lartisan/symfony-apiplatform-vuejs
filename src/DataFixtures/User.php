<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class User extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $user = new \App\Entity\User();
        $user->setUsername('admin');
        $user->setEmail('admin@example.com');
        $user->setPassword('$argon2id$v=19$m=65536,t=4,p=1$NldaZTRHMEpJV1NtOE9VQw$OwlcKgcyzRXvzj9PNZRqZAaUDv56JehZ/fZUppB5S70'); // secret
        $user->setRoles(['ROLE_ADMIN']);

        $manager->persist($user);
        $manager->flush();
    }
}
