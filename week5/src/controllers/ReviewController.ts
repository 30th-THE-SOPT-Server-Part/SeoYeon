import express, {Request, Response} from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { validationResult } from "express-validator";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import ReviewService from "../services/ReviewService";

/**
 * @route POST /review/movies/:movieId
 * @description Create Review
 * @access Public
 */
/* 계층 간 이동은 dto통해서 함. 작성한다는건 post api만들기에 request body가 들어옴. 
request body에 대한 dto 만들어줘야함. interface의 review폴더에 review를 create할 수 있는 dto만들어줌*/
const createReview = async(req:Request, res:Response)=>{
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }

    const reviewCreateDto: ReviewCreateDto = req.body;
    const {movieId} = req.params;

    try{
        const data = await ReviewService.createReview(movieId, reviewCreateDto);

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route GET /review/movies/:movieId
 * @description GET Review
 * @access Public
 */
const getReviews = async (req: Request, res: Response)=>{
    const {movieId} = req.params;

    try{
        const data = await ReviewService.getReviews(movieId);

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data));
    } catch (error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createReview,
    getReviews
}