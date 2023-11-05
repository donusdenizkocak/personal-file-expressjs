import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { City } from "../entity/City"

export class CityController {

    private cityRepository = AppDataSource.getRepository(City)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cityRepository.find({ relations: { address: true,district:true } })
    }
}