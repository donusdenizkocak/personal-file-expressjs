
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Country } from "../entity/Country"


export class CountryController {

    private countryRepository = AppDataSource.getRepository(Country)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.countryRepository.find({ relations: { address: true, city:{ district:{town:true} }} })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name } = request.body;

        const country = Object.assign(new Country(), {
            name
        })
        return this.countryRepository.save(country)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        const { name } = request.body

        const country = await this.countryRepository.update({
            id
        }, {
            name
        })

        if (country.affected)
            return country
        else
            return false
    }

}