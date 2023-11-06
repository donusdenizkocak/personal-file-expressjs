
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Country } from "../entity/Country"


export class CountryController {

    private countryRepository = AppDataSource.getRepository(Country)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.countryRepository.find()
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, districtId } = request.body;

        

        const country = Object.assign(new Country(), {
            name
        })
        return this.countryRepository.save(country)
    }

}