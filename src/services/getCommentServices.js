import http from "./httpServices";

export function getAllComment(){
    return http.get('/comments')
}