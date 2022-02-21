import {Request, Response} from "express";
import router from "./router";
import database from "../database";

router.route('/blobs')
    .get((req: Request, res: Response) => {
        // Return blob list
        const blobs = database.list();
        res.json({ blobs });
    })
    .post((req: Request, res: Response) => {
        // TODO: Create new blob
    });

router.route('/blobs/{id}')
    .get((req: Request, res: Response) => {
        // TODO: Get blob by id
    })
    .put((req: Request, res: Response) => {
        // TODO: Update blob
    })
    .delete((req: Request, res: Response) => {
        // TODO: Delete blob
    });

export default router;
