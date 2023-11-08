import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { City } from "../entity/City"
import { Country } from "../entity/Country"
import { Address } from "../entity/Address"
import { User } from "../entity/User"
import { District } from "../entity/District"
import { Town } from "../entity/Town"

export class AddressController {

    private addressRepository = AppDataSource.getRepository(Address)
    private countryRepository = AppDataSource.getRepository(Country)
    private userRepestory = AppDataSource.getRepository(User)
    private districtRepository =AppDataSource.getRepository(District)
    private townRepository =AppDataSource.getRepository(Town)
    private cityRepository =AppDataSource.getRepository(City)


    async all(request: Request, response: Response, next: NextFunction) {
        return this.addressRepository.find({ relations: { city: true, district: true, town: true, country: true } })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { 
            addressType,
            addressLine,
            street,
            post_code,
            location,
            userId,
            countryId,
            cityId,
            districtId,
            townId
        } = request.body;

        const user=this.userRepestory.findOneBy({id:userId})
        const country = this.countryRepository.findOneBy({id:countryId})
        const city = this.cityRepository.findOneBy({id:cityId})
        const district= this.districtRepository.findOneBy({id:districtId})
        const town = this.townRepository.findOneBy({id:townId})


        const address = Object.assign(new Address(), {
            addressType,
            addressLine,
            street,
            post_code,
            location,
            user,
            country,
            city,
            district,
            town
        })
        return this.addressRepository.save(address)
    }


}