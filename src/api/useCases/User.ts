import BaseInputModele from "../../components/atoms/input/BaseInputModel";
import {User as UserEntity, ValidationStates} from "../entities/User";
import {Result} from "../utils/useCaseResult/Result";

export class User {

    public register(inputs: Array<BaseInputModele>): Result{
        let result: Result = new Result()

        let user = new UserEntity()
        user.createUser(inputs)

        result.content = user

        result.errors = user.validateProperties(ValidationStates.register)

        if(result.isFailed() === false){
            result.addSuccess("user/register-success", 201)
        }

        return result
    }

    public getPrivateProfile(){

    }

    public getPublicProfile(){

    }

    public listUsers(){

    }

    public updatePrivateProfile(){

    }

    public deletePrivateProfile(){

    }
}