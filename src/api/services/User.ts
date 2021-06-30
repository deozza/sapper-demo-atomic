import type {User as UserEntity} from "../entities/User";
import {Error} from "../utils/useCaseResult/types/Error";
import {INSERT_USERS} from "../graphqlQueries/User";

import {auth} from "../../firebase";
import type firebase from "firebase";
import {mutation} from "svelte-apollo"

export class User {
    public async addUserToFirebase(user: UserEntity) {
        await auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential: firebase.auth.UserCredential) => {
                user.uid = userCredential.user.uid

                return [user, null]
            }).catch((errorFromFirebase) => {
                const error: Error = new Error(errorFromFirebase.code, errorFromFirebase.message)
                return [user, error]
            })
    }

    public async addUserToHasura(user: UserEntity){
        const addUserToHasura = mutation(INSERT_USERS)
        console.log('coucou')
        try{
            await addUserToHasura({variables: {$uuid: user.uid, $email: user.email, $username: user.username, $password: user.password}})

            return [user, null]
        }catch (e){
            console.log(e)
            return [user, null]
        }

    }
}