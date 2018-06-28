let messages = [];
let id = 0;

module.exports= {
    create: (req, res)=> {
        const { text, time } = req.body;
        messages.push({ id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res)=> {
        res.status(200).send(messages);

    }, 
    update: (req, res)=> {
        const { id } = req.params;
        
        let { text } = req.body;
        messages.forEach((messages)=> {
           if(messages.id == id){
               messages.text= text
           }
        })

        res.status(200).send(messages)
    },
    delete: (req, res)=> {
        const deleteID = req.params.id;
        messageIndex= messages.findIndex( message=> message.id == deleteID);
        messages.splice(messageIndex,1);

        res.status(200).send(messages);
    }
}