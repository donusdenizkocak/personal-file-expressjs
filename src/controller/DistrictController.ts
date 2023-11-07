import { District } from './../entity/District';
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Country } from "../entity/Country"

export class DistrictController {

    private districtRepository = AppDataSource.getRepository(District)
    private countryRepository = AppDataSource.getRepository(Country)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.districtRepository.find({ relations: {city:true,town:true } })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, cityId } = request.body;

        const city = await  this.countryRepository.findOne({where:{id:cityId}})

        const district = Object.assign(new District(), {
            name,
            city
        })
        return this.districtRepository.save(district)
    }

}