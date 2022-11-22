import http from "./httpServices";

export function deleteAllComment(commentId){
    return http.delete(`/comments/${commentId}`)
}