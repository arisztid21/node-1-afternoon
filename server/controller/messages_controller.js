const messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let{text, time} = req.body
        let newBook = {
            text: text,
            time: time,
            id: +id
        }

        id++
        messages.push(newBook)
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let {id} = req.params;
        let {text, time} = req.body;
        let index = messages.findIndex(message=> message.id == id)

        if(index !== -1){
            let newMessage={
                text: text,
                time: +time,
                id: +id
            }
            messages.splice(index, 1, newMessage)
            res.status(200).send(messages)
        }else{
            res.status(404).send('not a real message')
        }
    },
    delete: (req, res) => {
        let {id} = req.params;
        let index = messages.findIndex(message=> message.id == id)

        if(index !== -1){
            messages.splice(index, 1)
            res.status(200).send(messages)
        }else{
            res.status(404).send('not a real message')
        }
    }
}