let shoe_size = prompt("enter your shoe size" , "shoe_size");
let birthday = prompt("enter your birthday" , "birthday");

function shoe(shoe_size,birthday){
    let mul = shoe_size * 2;
    let add = mul + 5;
    let mult =add * 50;
    let res = mult - birthday;
    let result = res + 1766;
    return result;

}

 alert("the result is : " + shoe();
