import {Success} from "./types/Success";
import {Error} from "./types/Error";

export class Result {
    success?: Success = null
    errors: Array<Error> = []
    content: object

    public addSuccess(type: string,  code: number){
        this.success = new Success(type, code)
    }

    public addError(type: string, code: number){
        const error: Error = new Error(type, code)
        this.errors.push(error)
    }

    public isSuccessful(): boolean{
        return this.success !== null && this.errors.length === 0;
    }

    public isFailed(): boolean{
        return this.success === null && this.errors.length > 0;
    }
}