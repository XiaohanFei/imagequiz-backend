const express =require('express');
const api=require('./api');
const { scores } = require('./data_tier/scores');
const application=express();
const port =process.env.PORT || 4002;
const {customer}=

application.use(express.json());

application.get('/add/:n/:m',(request,response)=>{
    let n =Number(request.params.n);
    let m=Number(request.params.m);
    let sum=api.add(n,m)
    response.send(`${n}+${m}=${sum}.`);

})

/** 
application.post('/register',(request,response)=>{
    let name =request.body.name;
    let email=request.body.email;
    let password=request.body.password;
    let alreadyExist=api.addCustomer(name,email,password)
    if (alreadyExist){
        response.status(403).json({message:"A customer with the same email already exist"})

    }else{    
        response.json({message:`The customer added ${name} ${email} ${password}.`});
    }



})

application.post('/login',(request,response)=>{
    let email=request.body.email;
    let password=request.body.password;
    let passwordCorrect=api.checkCustomer
    if (passwordCorrect){
        response.json({isvalid:"true",message:"customer exist"})

    }else{    
        response.json({isvalid:"false",message:"customer not exist"});
    }



})

application.get('/flowers',(request,response)=>{
    let flowers=api.get_flowers()
    
    response.send(flowers);

})

application.get('/quizzes',(request,response)=>{
    let quizzes=api.get_quizzes()
    
    response.send(quizzes);

})


application.get('/quizzes/:id',(request,response)=>{
    let quizzes=api.get_quizzes()
    let id=Number(request.params.id);
    
    response.send(quizzes[id]);

})
application.post('/score',(request,response)=>{
    let quizTaker =request.body.quizTaker;
    let quizId=request.body.quizId;
    let score=request.body.score;
    let date=request.body.date;
    api.addScores(quizTaker,quizId,score,date)
    response.json({message:`The socre added ${quizTaker} ${quizId} ${score} ${date}.`})});

*/

application.get('/customers', (request, response) => {
    api.getCustomers()
    .then(x => response.json(x))
    .catch(e => {
        console.log(e);
        response.status(500).json({message: 'There was an error in retrieving customers'})
    });
});


application.post('/register', (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    api.addCustomer(name, email, password)
    .then(x => response.json({message: 'The customer added.'}))
    .catch(e => {
        console.log(e);
        response.status(403).json({message: 'A customer with the same email already exists.'});
    });
});

application.post('/login', (request, response) => {
    let email = request.body.email;
    let password = request.body.password;
    let isValid = api.customerLogin(email, password);
    if(isValid) {
        response.json({message: 'Login successful'});
    } else {
        response.status(404).json({message: 'Login not successful'});
    }
});

application.get('/flowers', (request, response) => {
    api.getFlowers()
    .then(x => {
        response.json(x);
    });
});

application.post('/quiz', (request, response) => {
    let name = request.body.name;
    let category_id = request.body.category_id;
    api.addQuiz(name, category_id)
    .then(x => response.json({message: 'The quiz added.'}))
    .catch(e => {
        console.log(e);
        response.status(403).json({message: 'ERROR'});
    });
});

application.get('/quizzes', (request, response) => {
    console.log('in /quizzes');
    api.getQuizzes()
    .then(x => {
        response.json(x);
    })
    .catch(e => {
        console.log(e);
        response.status(500).json({message: 'Something went wrong.'});
    })
});

application.get('/quiz/:name', (request, response) => {
    api.getQuiz(request.params.id)
    .then(x => {
        response.json(x);
    })
    .catch(e => {
        console.log(e);
        response.status(500).json({message: 'Could not get quiz'});
    })
});

application.post('/score', (request, response) => {
    let quizTaker = request.body.quizTaker;
    let quizId = request.body.quizId;
    let score = request.body.score;
    api.addScore(quizTaker, quizId, score)
    .then(x => response.json({message: 'Score has been updated.'}))
    .catch((e) => response.status(500).json({message: 'ERROR'}));
    });

application.get('/scores/:quiztaker/:quizid', (request, response) => {
    let quizTaker = request.params.quiztaker;
    let quizId = request.params.quizid;
    api.checkScore(quizTaker, quizId)
    .then(x => {
        response.json(x);
    })
    .catch(e => {
        console.log(e);
        response.status(e).json({message: 'ERROR'});
    });
});

application.post('/quiz/:quiz_id/:question_id', (request, response) => {
    let quiz_id = request.params.quiz_id;
    let question_id = request.params.question_id;
    api.addQuestionToQuiz(quiz_id, question_id)
    .then(x => response.json({message: 'The question added to the quiz.'}))
    .catch(e => {
        console.log(e);
        response.status(403).json({message: 'ERROR'});
    });
});


application.listen(port,()=> console.log('Listening on port'+port));

