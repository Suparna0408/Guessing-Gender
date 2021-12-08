let username = document.querySelector('#username');
let showgender = document.querySelector(".showgender");
let btn = document.querySelector(".btn");

showgender.style.display = "none";
btn.addEventListener('click', ()=>{
    showdata();
});
function showdata(){
    fetch(`https://api.genderize.io?name=${username.value}
    `)
    .then(res => res.json())
    .then(data=>{
        // console.log(data);
        showgender.style.display = "block";
        showgender.innerHTML = `The gender of ${username.value} is ${data.gender}`;
        username.value = " ";
    })
    
}