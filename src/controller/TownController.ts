import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Town } from "../entity/Town"
import { District } from "../entity/District"
import { Address } from "../entity/Address"

export class TownController {

    private townRepository = AppDataSource.getRepository(Town)
    private districtRepository = AppDataSource.getRepository(District)
    private addressRepository = AppDataSource.getRepository(Address)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.townRepository.find()
    }

    async townUser(request: Request, response: Response, next: NextFunction){
        const townId=parseInt(request.params.townId)

        const town= await this.townRepository.findOne({where:{id:townId}})

        if(!town){
            return "kasaba bulunamadı"
        }

        const address= await this.addressRepository.find({where:{town}})

        if(!address){
            return "address bulunamadı"
        }

        return address
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, districtId } = request.body;

        console.log(request.body)

        const district = await this.districtRepository.findOne({ where: { id: districtId } })

        const town = Object.assign(new District(), {
            name,
            district,
        })
        return this.townRepository.save(town)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const { name, districtId } = request.body;

        const district = await this.districtRepository.findOne({ where: { id: districtId } })


        if (district)
            return this.townRepository.update({ id }, { name, district })
        else
            return false
    }

}