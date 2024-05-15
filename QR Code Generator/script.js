const qrInput = document.getElementById("qr-input")
const qrImg = document.getElementById("qr-img")
const qrBtn = document.getElementById("qr-btn")

console.log(qrInput, qrImg, qrBtn);
qrBtn.addEventListener("click", ()=> {
    const inputValue = qrInput.value;
    console.log(inputValue);
    
    if(!inputValue){
        alert("Please enter valid URL")
            return;
        
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qrImg.alt = `QR code for${inputValue}`
    }
})