let inputBox = document.getElementById("inputBox");
let outputBox = document.getElementById("outputBox");
let generateButton = document.getElementById("generateBtn");

generateBtn.onclick = () => {
    if(inputBox.value != ""){
        const data = JSON.parse(inputBox.value);
        let i = 0;
        let htmlElements = "";
        if(!isDuplicateData(data)){
            for(i in data){
                htmlElements += `<div class="root" data-id="${data[i].id}"><span class="username">${data[i].username}</span><span class="video_name">${data[i].video_name}</span><span class="additional_details"><span class="type">${data[i].action}</span></span></div>`
            }
            outputBox.value = htmlElements;
        } else{
            alert("Error: ID duplicated");
        }
    } else{
        alert("Error: Input box is empty");
    }
}

function isDuplicateData(data) {
    let arr = [];
    let i = 0;
    for(i in data){
        arr.push(data[i].id);
    }
    let uniqueArr = new Set(arr);
    if(uniqueArr.size == arr.length){
        return false;
    } else{
        return true;
    }
}