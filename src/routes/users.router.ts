import * as express from "express";
import UsersController from "../controllers/users.controller";
import Router from "../interfaces/routers.interface";

class UsersRouter implements Router {
    public expressRouter: express.Router = express.Router();

    constructor() {
        const userController = new UsersController();
        this.initializeRoutes(userController);
    }

    public initializeRoutes(controller) {
        const path: string = "/users";

        this.expressRouter.get(path, controller.getAll);
        this.expressRouter.get(`${path}/:id`, controller.getById);
        this.expressRouter.post(path, controller.create);
        this.expressRouter.put(`${path}/:id`, controller.updateById);
        this.expressRouter.delete(`${path}/:id`, controller.deleteById);
    }
}

export default UsersRouter;
