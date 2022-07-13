// movie collection에 대한 정의. Movie모델에 대한 타입 지정.

import mongoose from "mongoose";

export interface MovieInfo {
    title:string;
    director:string;
    startDate:Date;
    thumbnail:string;
    story:string;
    comments: MovieCommentInfo[];
}

export interface MovieCommentInfo {
    writer: mongoose.Types.ObjectId | string;
    comment: string;
}