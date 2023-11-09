import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Phone } from "../entity/Phone"
import { User } from "../entity/User"


export class PhoneController {

    private phoneRepository = AppDataSource.getRepository(Phone)
    private userRepository = AppDataSource.getRepository(User)

    async save(request: Request, response: Response, next: NextFunction) {
        const { phoneType, phoneNumber }: Phone = request.body;
        const user = await this.userRepository.findOne({

        })

        const address = Object.assign(new Phone(), {
            phoneType: phoneType,
            phoneNumber: phoneNumber,
            user
        })

        return this.phoneRepository.save(address)
    }


    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const { phoneType, phoneNumber }: Phone = request.body;

        const user = await this.userRepository.findOne({

        })

        return this.phoneRepository.update({
            id
        }, {
            phoneType: phoneType,
            phoneNumber: phoneNumber,
            user
        })
    }
}