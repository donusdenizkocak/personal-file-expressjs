import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Phone } from "../entity/Phone"
import { User } from "../entity/User"


export class AddressController {

    private addressRepository = AppDataSource.getRepository(Phone)
    private userRepository = AppDataSource.getRepository(User)

    async save(request: Request, response: Response, next: NextFunction) {
        const { phoneType, phoneNumber }: Phone = request.body;
        const user = await this.userRepository.findOne({
           
        })

        const address = Object.assign(new Phone(), {
            phoneType:phoneType,
           phoneNumber:phoneNumber,
            user
        })

        return this.addressRepository.save(address)
    }


    async update(request: Request, response: Response, next: NextFunction) {
        const {  phoneType, phoneNumber  }: Phone = request.body;

        const user = await this.userRepository.findOne({
           
        })

        return this.addressRepository.update({
            user
        }, {
            phoneType:phoneType,
           phoneNumber:phoneNumber,
            user
        })
    }
}