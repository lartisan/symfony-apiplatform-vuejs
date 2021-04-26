<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/{vueRouter}", requirements={"vueRouting"="^(?!api|_(profiler|wdt)).*"}, name="app")
     */
    public function __invoke(): Response
    {
        return $this->render('app/index.html.twig');
    }
}
