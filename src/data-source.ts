import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Phone } from "./entity/Phone"
import { Address } from "./entity/Address"
import { City } from "./entity/City"
import { District } from "./entity/District"
import { Town } from "./entity/Town"
import { Email } from "./entity/Email"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "address",
    synchronize: true,
    logging: false,
    entities: [User,Phone,Address,City,District,Town,Email],
    migrations: [],
    subscribers: [],
})
