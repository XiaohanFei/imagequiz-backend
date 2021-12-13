var {customers}=require('./data_tier/customers');
const { quizzes } = require('./data_tier/data');
var {flowers}=require('./data_tier/flowers')
var{scores}=require("./data_tier/scores")
const db=require("./data_tier/db")
let add=(n,m)=>{
    return n+m;
}

/**let addCustomer = (name,email, password) => {
    let alreadyExist=customers.find(x=>x.email.toLowerCase()===email);
    if (alreadyExist){
        return true
    }
    customers.push({id:customers.length + 1,name:name,email:email, password:password});
    return false
}*/
let addCustomer = (name, email, password) => {
    return db.addCustomer(name, email, password);
}
let getCustomers = () => {
    return db.getCustomers();
}

let getQuizzes=()=>{
    return db.getQuizzes();
}
let addQuestion = (picture, choices, answer) => {
    return db.addQuestion(picture, choices, answer);
}
let addCategory = (name) => {
    return db.addCategory(name);
}
let addQuiz = (name, category_id) => {
    return db.addQuiz(name, category_id);
}
let getQuiz = (name) => {
    return db.getQuiz(name);
}
let addQuestionToQuiz = (quiz_id, question_id) => {
    return db.addQuestionToQuiz(quiz_id, question_id);
}
let getFlowers = () => {
    return db.getFlowers();
}
let addScore = (quizTaker, quizId, score) => {
    return db.addScore(quizTaker, quizId, score);
}
let checkScore = (quizTaker, quizId) => {
    return db.checkScore(quizTaker, quizId);
}

let checkCustomer = (email, password) => {
    for (var i = 0; i < customers.length; i++) {
        if(customers[i].email == email){
            if(customers[i].password != password){
                return false;
            }
            return true;
        }
    }
    return false;
}
let get_scores=()=>{
    scores_list=scores
    return scores_list
}
let get_flowers=()=>{
    flowers_list=flowers
    return flowers_list

}

let get_quizzes=()=>{
    quizzes_list=quizzes
    return quizzes_list
}
let customerLogin = (email, password) => {
    return db.login(email, password);
}
/** 
let addScores=(quiz_Taker,quiz_Id,score,date)=>{
    scores.push({quiz_Taker:quiz_Taker,quiz_Id:quiz_Id,score:score,date:date})

}
*/
/**
 *  
let getCustomer=()=>{
    return customers
}*/


/** 
let checkscores=(quizTaker,quizId)=>{
    quizTakerExist=scores.find(x=>x.quizTaker===quizTaker)
}*/



exports.add=add;
exports.checkCustomer = checkCustomer;
exports.get_flowers = get_flowers;
exports.get_scores=get_scores;



// DB 
exports.getQuizzes=getQuizzes
exports.getCustomers=getCustomers;
exports.addCustomer = addCustomer;
exports.customerLogin=customerLogin;
exports.getFlowers = getFlowers;
exports.addQuiz = addQuiz;
exports.get_quizzes=get_quizzes;
exports.getQuiz = getQuiz;
exports.addScore = addScore;
exports.checkScore = checkScore;
exports.addQuestionToQuiz = addQuestionToQuiz;
exports.addQuestion = addQuestion;
exports.addCategory = addCategory;
