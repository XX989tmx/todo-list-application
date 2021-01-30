import express,{Request,Response,NextFunction} from 'express'

export const homePage = (req:Request,res:Response,next:NextFunction) => {
    res.status(200).json({r:'homepage'})
}