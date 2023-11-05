import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find({relations:{phone:true,address:true}})
    }

    async search(request: Request, response: Response, next: NextFunction) {
        const lastName =request.query['lastName'] as string;
     
        return this.userRepository.find({where: {lastName}})
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age,phone,city } = request.body;

        // const us= request.body as User;
        // const usr:User =request.body
        // const abc=Object.assign(new User(), usr)  //hepsi aynı manaya gelir hepsini alacaksak verilerin kullanılabilir

        const user = Object.assign(new User(), {
            // firstname:usr.firstname
            firstName,
            lastName,
            age,
            phone,
            city
        })

            // return this.userRepository.save(firstName,lastName,...)  object assing kullanmaya gerek kalmıyor
        return this.userRepository.save(user)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const userId =Number(request.params.id)
        const { firstName, lastName, age,phone }:User = request.body;

        return this.userRepository.update({
         id:userId
        },{
            firstName,
            lastName,
            age,
            phone
        })
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}