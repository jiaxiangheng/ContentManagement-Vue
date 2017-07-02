let express = require('express');
let app=express();
let fs=require('fs');
let path = require('path');
let bodyParser=require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.resolve('assets')));

let readBooks=function (callBack){
    fs.readFile('./data.json','utf8',(err,data)=>{
        if(err||data.length===0) data=[];
        callBack(JSON.parse(data))
    })
};

let writeBooks=function (data,callBack){
    fs.writeFile('./data.json',JSON.stringify(data),callBack);
};

app.get('/books',(req,res)=>{
    let id=Number(req.query.id);
    if(id){    //如果有id则是查看详情
        readBooks(books=>{
            let book=books.find(function(item){
                return item.id===id;
            });
            res.send(book);
        })
    }else{
        readBooks(function (books){
            res.send(books);
        });
    }
});

app.post('/books',(req,res)=>{
    let book=req.body;
    readBooks(books=>{
        book.id=books[books.length-1].id+1;
        books.push(book);
        writeBooks(books,err=>{
            res.send(books);
        })
    })
});

app.delete('/books',(req,res)=>{
    let id=Number(req.query.id);
    readBooks(books=>{
        books=books.filter(item=>item.id!=id);
        writeBooks(books,()=>{
            res.send({})
        });
    });
});

app.put('/books',(req,res)=>{
    let id=Number(req.body.id);
    readBooks(books=>{
        books=books.map(item=>{
            if(item.id===id){
                return req.body;
            }
            return item;
        });
        writeBooks(books,()=>{
            res.send({})
        })
    });
});



app.listen(7000,()=>{
    console.log('监听7000端口')
});