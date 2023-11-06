import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Town } from "../entity/Town"
import { District } from "../entity/District"

export class TownController {

    private townRepository = AppDataSource.getRepository(Town)
    private districtRepository = AppDataSource.getRepository(District)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.townRepository.find()
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, districtId } = request.body;

        console.log(request.body)
        
        const district= await this.districtRepository.findOne({where:{id:districtId}})

        const town = Object.assign(new District(), {
            name,
            district,
        })
        return this.townRepository.save(town)
    }

}