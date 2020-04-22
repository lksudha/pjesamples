function getName() {
    return  document.getElementById("userName").value;
}

function getAge() {
    return 365 * document.getElementById("age").value;
}

function getResult() {
    const name = getName();
    const age = getAge();

    console.log(name, age);

    let result = document.getElementById("container");
    result.innerHTML = `Your name is ${name} and age is ${age} days`;
}