function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const div = document.getElementById('post-container')
    for(const post of posts){
       const postDiv = document.createElement('div')
       postDiv.innerHTML = `
         <h3>UserID: ${post.id}</h3>
         <h3>Post-title: ${post.title}</h3>
         <h3>Post-description: ${post.body}</h3>
       `
       div.appendChild(postDiv)
    }
}