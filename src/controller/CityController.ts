import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { City } from "../entity/City"
import { Country } from "../entity/Country"

export class CityController {

    private cityRepository = AppDataSource.getRepository(City)
    private countryRepository = AppDataSource.getRepository(Country)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cityRepository.find({ relations: { address: true,district:true } })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, countryId } = request.body;

        const country = await  this.countryRepository.findOne({where:{id:countryId}})

        const city = Object.assign(new City(), {
            name,
            country
        })
        return this.cityRepository.save(city)
    }
    async update(request: Request, response: Response, next: NextFunction){
        const id =parseInt(request.params.id);
        const {name,countryId} =request.body

        const country = await this.countryRepository.findOne({where: {id:countryId}})

        if(country)
           return this.cityRepository.update({id},{name})
        else
          return false
    }

}