import * as express from 'express';
import * as users from "./users";


const router = (router: express.Router) => {
    router.route("/health-check").get((req, res) => res.sendStatus(200));

    router.route("/auth/login").post(users.login);
    router.route("/users").post(users.signUp);



    return router;
};

export default router;