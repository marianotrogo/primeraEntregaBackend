const socket = io();

socket.emit("message","mensaje desde frontend!")
socket.on("message",(data)=>{
    console.log(data);
})