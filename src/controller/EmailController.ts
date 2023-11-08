import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Phone } from "../entity/Phone"
import { User } from "../entity/User"
import { Email } from "../entity/Email"


export class EmailController {

    private emailRepository = AppDataSource.getRepository(Email)
    private userRepository = AppDataSource.getRepository(User)

    async save(request: Request, response: Response, next: NextFunction) {
        const { emailType, emailAddress }: Email = request.body;
        const user = await this.userRepository.findOne({
           
        })

        const address = Object.assign(new Phone(), {
            emailType:emailType,
            emailAddress:emailAddress,
            user
        })

        return this.emailRepository.save(address)
    }


    async update(request: Request, response: Response, next: NextFunction) {
        const id=parseInt(request.params.id)
        const { emailType, emailAddress }: Email = request.body;

        const user = await this.userRepository.findOne({})

        return this.emailRepository.update({
            id
        }, {
            emailType,
            emailAddress
            
        })
    }
}