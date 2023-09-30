import http from "http"
import {TodolistService} from "./todolist-service.mjs";


const server = http.createServer((request, response) => {
    const service = new TodolistService()
    if(request.method === "GET"){
        service.getTodoList(request, response)
    }
})

server.listen(3000)