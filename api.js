var {customers}=require('./data_tier/customers');
const { quizzes } = require('./data_tier/data');
var {flowers}=require('./data_tier/flowers')
var{scores}=require("./data_tier/scores")
let add=(n,m)=>{
    return n+m;
}

let addCustomer = (name,email, password) => {
    let alreadyExist=customers.find(x=>x.email.toLowerCase()===email);
    if (alreadyExist){
        return true
    }
    customers.push({id:customers.length + 1,name:name,email:email, password:password});
    return false
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
let addScores=(quiz_Taker,quiz_Id,score,date)=>{
    scores.push({quiz_Taker:quiz_Taker,quiz_Id:quiz_Id,score:score,date:date})

}
let getCustomer=()=>{
    return customers
}

let checkscores=(quizTaker,quizId)=>{
    quizTakerExist=scores.find(x=>x.quizTaker===quizTaker)
}

exports.add=add;
exports.addCustomer = addCustomer;
exports.checkCustomer = checkCustomer;
exports.get_flowers = get_flowers;
exports.get_quizzes=get_quizzes;
exports.addScores=addScores;
exports.get_scores=get_scores;
exports.getCustomer=getCustomer;