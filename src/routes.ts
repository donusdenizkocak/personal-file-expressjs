import { CityController } from "./controller/CityController"
import { CountryController } from "./controller/CountryController"
import { DistrictController } from "./controller/DistrictController"
import { TownController } from "./controller/TownController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/search",
    controller: UserController,
    action: "search"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/cities",
    controller: CityController,
    action: "all"
}, {
    method: "post",
    route: "/city",
    controller: CityController,
    action: "save"
},  {
    method: "get",
    route: "/district",
    controller: DistrictController,
    action: "all"
}, {
    method: "post",
    route: "/district",
    controller: DistrictController,
    action: "save"
},{
    method: "get",
    route: "/town",
    controller: TownController,
    action: "all"
},{
    method: "get",
    route: "/district",
    controller: DistrictController,
    action: "all"
}, {
    method: "post",
    route: "/town",
    controller: TownController,
    action: "save"
}, {
    method: "get",
    route: "/country",
    controller: CountryController,
    action: "all"
}, {
    method: "post",
    route: "/country",
    controller: CountryController,
    action: "save"
}]