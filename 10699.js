let date = new Date()
let year = date.getFullYear()
let month = ('0' + (date.getMonth()+1)).slice(-2)
let day = ('0'+date.getDay()).slice(-2)
console.log(year+'-'+month+'-'+day)