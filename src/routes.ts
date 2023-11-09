import { AddressController } from "./controller/AddressController"
import { CityController } from "./controller/CityController"
import { CountryController } from "./controller/CountryController"
import { DistrictController } from "./controller/DistrictController"
import { FileController } from "./controller/FileController"
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
    route: "/city",
    controller: CityController,
    action: "all"
}, {
    method: "get",
    route: "/city/user/:cityId",
    controller:CityController,
    action: "cityUser"
}, {
    method: "post",
    route: "/city",
    controller: CityController,
    action: "save"
}, {
    method: "put",
    route: "/city/:id",
    controller: CityController,
    action: "update"
},  {
    method: "get",
    route: "/district",
    controller: DistrictController,
    action: "all"
}, {
    method: "get",
    route: "/district/user/:districtId",
    controller:DistrictController,
    action: "districtUser"
}, {
    method: "post",
    route: "/district",
    controller: DistrictController,
    action: "save"
},  {
    method: "put",
    route: "/district/:id",
    controller: DistrictController,
    action: "update"
},{
    method: "get",
    route: "/town",
    controller: TownController,
    action: "all"
}, {
    method: "get",
    route: "/town/user/:townId",
    controller:TownController,
    action: "townUser"
},{
    method: "post",
    route: "/town",
    controller: TownController,
    action: "save"
},{
    method: "put",
    route: "/town/:id",
    controller: TownController,
    action: "update"
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
    method: "get",
    route: "/country/user/:countryId",
    controller:CountryController,
    action: "countryUser"
}, {
    method: "post",
    route: "/country",
    controller: CountryController,
    action: "save"
}, {
    method: "put",
    route: "/country/:id",
    controller: CountryController,
    action: "update"
}, {
    method: "get",
    route: "/address",
    controller: AddressController,
    action: "all"
}, {
    method: "get",
    route: "/address/:id",
    controller: AddressController,
    action: "one"
}, {
    method: "get",
    route: "/address/user/:userId",
    controller: AddressController,
    action: "userOne"
}, {
    method: "post",
    route: "/address",
    controller: AddressController,
    action: "save"
}, {
    method: "put",
    route: "/address/:id",
    controller: AddressController,
    action: "update"
 } , {
        method: "get",
        route: "/file-read",
        controller: FileController,
        action: "all"
    }]