function fecthdata(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(comments){
    const div = document.getElementById('comment-container')
    for(const comment of comments){
        const div2=document.createElement('div')
        div2.innerHTML = `
        <h2>UserId:${comment.id}</h2>
        <h3>Name:${comment.name}</h3>
        <p><h3>Email:</h3>${comment.email}</p>
        <h4>Opinion:${comment.body}<h4>
        `
        div.appendChild(div2)
        div2.classList.add('comment')
    }
}

