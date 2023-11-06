import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Town } from "../entity/Town"
import { District } from "../entity/District"

export class SearchController {

    private townRepository = AppDataSource.getRepository(Town)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.townRepository.find({ relations: {district:true,address:true  } })
    }

    // async save(request: Request, response: Response, next: NextFunction) {
    //     const { name, lastName, age,phone,city } = request.body;

    //     const user = Object.assign(new District(), {
    //         // firstname:usr.firstname
    //        name,
    //         lastName,
    //         age,
    //         phone,
    //         city
    //     })
    //     return this.townRepository.save(user)
    // }

}