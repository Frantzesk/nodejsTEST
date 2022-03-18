console.log('Console')

const response=await fetch("/test")
const text=await response.text()

const output=document.querySelector("#output")

output.innerHTML=text

console.log(text)