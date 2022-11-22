import http from "./httpServices";

export function postAllComment(comment){
    const token= 'SEND TOKEN'
    const Header = {
        header:{
            Authorization : token
        }
    }
    return http.post('/comments',comment,Header)
}