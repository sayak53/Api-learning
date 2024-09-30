const user={
    id:1,
    name:'batman',
    money:500000,
    passion:'serial killer'
}
console.log(JSON.stringify(user))
console.log(user)

console.log(JSON.parse(JSON.stringify(user)))

