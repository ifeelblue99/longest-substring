const str = "aseffgahtrmma"


function longestSubstring(str){
  
  let index = []
  let lastIndex = 0
  
  str.split("").forEach((el, i)=>{
    console.log(el)
    
    if(el == str[i+1]){
      index.push([lastIndex, i])
      lastIndex = i
    }
  })
  
  return index
}
console.log(longestSubstring(str))
