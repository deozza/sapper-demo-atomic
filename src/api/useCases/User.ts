import type BaseInputModele from "../../components/atoms/input/BaseInputModel";
import {User as UserEntity, ValidationStates} from "../entities/User";
import {User as UserService} from "../services/User";
import {Result} from "../utils/useCaseResult/Result";
import {Error} from "../utils/useCaseResult/types/Error";

export class User {

    public register(inputs: Array<BaseInputModele>): Result{
        let result: Result = new Result()

        let user = new UserEntity()
        user.createUser(inputs)

        result.content = user

        result.errors = user.validateProperties(ValidationStates.register)

        if(result.isFailed()){
            return result
        }

        const userService: UserService = new UserService()
        const [userAfterUpdatedByFirebase, errorFromFirebase] = userService.addUserToFirebase(user)

        console.log(errorFromFirebase)

        if(errorFromFirebase !== null){
            result.errors.push(errorFromFirebase)
            return result
        }

        result.content = userAfterUpdatedByFirebase

        const [_, errorFromHasura]: Error = userService.addUserToHasura(user)

        if(errorFromHasura !== null){
            result.errors.push(errorFromFirebase)
            return result
        }

        result.addSuccess("user/register-success", 201)

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