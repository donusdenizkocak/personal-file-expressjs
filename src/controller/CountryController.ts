
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Country } from "../entity/Country"
import { User } from "../entity/User"
import { Address } from "../entity/Address"


export class CountryController {

    private countryRepository = AppDataSource.getRepository(Country)
    private userRepository= AppDataSource.getRepository(User)
    private addressRepository= AppDataSource.getRepository(Address)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.countryRepository.find({ relations: { address: true, city:{ district:{town:true} }} })
    }

    async countryUser(request:Request,response:Response,next:NextFunction){
        const countryId=parseInt(request.params.countryId)

        const country = await this.countryRepository.findOne({where:{id:countryId}})

        if(!country){
            return "ülke bulunamadu-ı"
        }
        const address= await this.addressRepository.find({where:{country}})

        if(!address){
            return "address bulunamadı"
        }
        return address

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