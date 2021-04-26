<?php

namespace App\Controller\Api;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class AuthUserController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    /**
     * @Route(
     *     name="auth_user",
     *     path="api/user",
     *     methods={"GET"},
     *     defaults={
     *         "_api_resource_class"=User::class,
     *         "_api_collection_operation_name"="get_me"
     *     }
     * )
     */
    public function __invoke(): \Symfony\Component\HttpFoundation\JsonResponse
    {
        return $this->json($this->security->getUser());
    }
}
