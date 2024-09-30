fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))

function fetchUsers(){
     fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul =document.getElementById('username-container')
    for(user of data){
       const li = document.createElement('li')
       li.innerText=`Name:${user.name} and lives in ${user.address.city}`
       ul.appendChild(li)
    }
}