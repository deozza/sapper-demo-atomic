import type BaseInputModele from "../../components/atoms/input/BaseInputModel";
import {Error} from "../utils/useCaseResult/types/Error";

interface EntityInterface {
    validateProperties(validationState: string): Array<Error>
}

export const enum ValidationStates {
    register= "validateUserAtRegistration"
}

export class User implements EntityInterface{
    uid: string
    email: string
    username: string
    createdAt: Date
    updatedAt: Date
    password: string
    repeatPassword?: string

    public createUser(inputs: Array<BaseInputModele>): User{
        for(const input of inputs){
            switch (input.name) {
                case 'email': this.email = input.value;break;
                case 'username': this.username = input.value;break;
                case 'password': this.password = input.value;break;
                case 'repeatPassword': this.repeatPassword = input.value;break;
            }
        }

        this.createdAt = new Date()
        this.updatedAt = new Date()

        return this
    }

    public validateProperties(validationState: ValidationStates): Array<Error>{
        return this[validationState]()
    }

    private validateUserAtRegistration() : Array<Error>{
        let errors: Array<Error> = [];
        if(this.email === undefined || this.email === null || this.email === ''){
            const error = new Error('user/register-error/email/empty', 400)
            errors.push(error)
        }

        if(this.username === undefined || this.username === null || this.username === ''){
            const error = new Error('user/register-error/username/empty', 400)
            errors.push(error)
        }

        if(this.password === undefined || this.password === null || this.password === ''){
            const error = new Error('user/register-error/password/empty', 400)
            errors.push(error)
        }

        if(this.repeatPassword !== this.password){
            const error = new Error('user/register-error/repeatPassword/invalid', 400)
            errors.push(error)
        }

        return errors
    }
}