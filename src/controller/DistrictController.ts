import { District } from './../entity/District';
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Country } from "../entity/Country"
import { Address } from '../entity/Address';

export class DistrictController {

    private districtRepository = AppDataSource.getRepository(District)
    private countryRepository = AppDataSource.getRepository(Country)
    private addressRepository = AppDataSource.getRepository(Address)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.districtRepository.find({ relations: {city:true,town:true } })
    }

    async districtUser(request: Request, response: Response, next: NextFunction){
        const districtId=parseInt(request.params.districtId)

        const district= await this.districtRepository.findOne({where:{id:districtId}})

        if(!district){
            return "şehir bulunamadı"
        }

        const address= await this.addressRepository.find({where:{district}})

        if(!address){
            return "address bulunamadı"
        }

        return address
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
    async update(request: Request, response: Response, next: NextFunction) {
        const id=parseInt(request.params.id)
        const { name, cityId } = request.body;

        const city = await  this.countryRepository.findOne({where:{id:cityId}})

        if(city)
          return this.districtRepository.update({id},{name,city})
        else
        return false
    }

}