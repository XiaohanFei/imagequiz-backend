drop schema imagequiz cascade;
create schema if not exists imagequiz ;


create table imagequiz.customer 
(
    id bigserial primary key,
    name text not null,
    email text not null,
    password text not null
);

create table imagequiz.question 
(
    id bigserial primary key,
    picture text not null,
    choices text not null,
    answer text not null
); 

create table imagequiz.category 
(
    id bigserial primary key,
    name text not null
);

create table imagequiz.quiz
 (
    id bigserial primary key,
    name text not null,
    category_id int not null REFERENCES imagequiz.category(id)
);

create table imagequiz.quiz_question
(
    quiz_id int not null REFERENCES imagequiz.quiz(id),
    question_id int not null REFERENCES imagequiz.question(id)
);

create table imagequiz.flower
(
    id bigserial primary key,
    name text not null,
    picture text not null
);

 

create table imagequiz.score
(
    id bigserial primary key,
    customer_id int not null REFERENCES imagequiz.customer(id),
    quiz_id int not null REFERENCES imagequiz.quiz(id),
    score text not null,
    date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);