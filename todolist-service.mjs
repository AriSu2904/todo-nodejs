export class TodolistService {
    todolist = ["Belajar", "Todolist", "NodeJS"]

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: (index + 1),
                    todo: value
                }
            })
        })
    }



    getTodoList(req,res){
        res.write(this.getJsonTodoList())
        res.end()
    }

    addTodoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString())
            this.todolist.push(body)
        })

        res.write(this.getJsonTodoList())
        res.end()
    }

    updateTodoList(req, res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString())
            if(this.todolist[body.id]){
                this.todolist[body.id] = body.todo
            }
        })

        res.write(this.getJsonTodoList())
        res.end()
    }

    deleteTodoList(req, res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString())
            if(this.todolist[body.id]){
                this.todolist.splice(body.id, 1)
            }
        })

        res.write(this.getJsonTodoList())
        res.end()
    }

}