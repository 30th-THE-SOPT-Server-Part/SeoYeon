//router index file
import { Router } from 'express';
import UserRouter from "./UserRouter";
import ReviewRouter from "./ReviewRouter";
import MovieRouter from './MovieRouter';
const router: Router = Router();

router.use('/user',UserRouter);
router.use('/review',ReviewRouter);
router.use('/movie', MovieRouter);

export default router;