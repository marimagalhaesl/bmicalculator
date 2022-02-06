const age = document.getElementById("age");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calc = document.getElementById("calc");
const result = document.getElementById("result");

calc.addEventListener("click", async function(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:3000/', {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            weight: weight.value,
            height: height.value
        })
    });
    const data = await response.json();
    console.log(data);

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
    result.innerText = Number(data.msg).toPrecision(4);
})

