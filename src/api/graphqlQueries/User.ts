import gql from "graphql-tag";

export const INSERT_USERS = gql`
    mutation insertUser($uuid: String!, $email: String!, $username: String!, $password: String!) {
        insert_users(objects: {uuid: $uuid, email: $email, username: $username, password: $password}){
            users {
                uuid
                username
                email
                createdAt
            }
        }
    }
`