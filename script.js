const getAdvice = function(){
    console.log('About to fetch')
    fetch("https://api.adviceslip.com/advice").then((response) => {
        console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data)
        const advice = data["slip"]
        document.getElementById('slip_id').innerHTML = advice["id"];
        document.getElementById('advice').innerHTML = advice["advice"]
    })
}


console.log(getAdvice())