console.log('Console')

const response=await fetch("/test")
const text=await response.text()

const output=document.querySelector("#output")

output.textContent=text

console.log(text)