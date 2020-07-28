let fruit = 36;
let height = 1.72;
let weight = 55;
let birth = 1986;
let day = 22;
let month = "setembro";
let sign = "libra";
let year = 2020;
var friends = ['Kraken','Kelvin','Rhuan'];

/* 1- Crie uma função que receba um número e retorne o dobro dele */

const getMess = (fruit) => {
    return fruit * 2;
};

const result = getMess(fruit);

console.log(result);

/* 2 - Crie uma função que receba sua altura e peso e retorne o IMC */

const Me = (height,weight) => {
    return weight / (height * height);
};

const IMC = Me(height,weight);

console.log(IMC);

/* 3 - Crie uma função que receba seu ano de nascimento e retorne sua idade */

const sub = (year,birth) => {
    return year - birth;
};

const age = sub(year,birth);

console.log(age);

/* 4 - Crie uma função que receba um Array com o nome de seus amigos
  e retorne uma mensagem: "Meus melhores amigos são "kraken", "kelvin", "rhuan". */

const mess = (friends) => {
    return `Meus melhores amigos são ${friends[0]},${friends[1]},${friends[2]}.`;
};

const myfriends = mess(friends);

console.log(myfriends);

/* 5 - Crie uma função que receba o dia e o mês do seu aniversário e retorne
  seu signo :) */

const birthday = (day,month,sign) => {
    return `O meu aniversário é no dia ${day} de ${month} e o signo é ${sign}.`;
};

const an = birthday(day,month,sign);

console.log(an);