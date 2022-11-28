import {Request, Response} from "express";
import router from "./router";
import database from "../database";
import { Blob } from '../models/blob'
import { Error } from '../models/error'

router.route('/blobs')
    .get((req: Request, res: Response) => {
        // Return blob list
        const blobs = database.list();
        res.json({ blobs });
    })
    .post((req: Request, res: Response) => {
        const newBlob : Blob = req.body
        
        console.log('createBlob')
        const result = database.add(newBlob)
        if (result) {
            res.status((result as Error).status).json(result.message)
        } else {
            res.status(201).json(null)
        }
    });

router.route('/blobs/:id')
    .get((req: Request, res: Response) => {
        const r = database.get(req.params.id)
        if (r) {
            console.log('fetch getby id ok')
            res.status(200).json(r)
        }
        else 
          res.status(404).json('not found')
    })
    .put((req: Request, res: Response) => {
        console.log('update blob')
        const newBlob : Blob = req.body
        database.update(newBlob)
        res.status(200).json(null)
        
    })
    .delete((req: Request, res: Response) => {
        console.log('delete ok')
        database.remove(req.params.id)
        res.status(200).json(null)
    });

export default router;
