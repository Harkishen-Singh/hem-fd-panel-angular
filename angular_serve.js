const express = require('express'),app=express(),
    port = process.env.PORT || 8000
;

app.use(express.static(__dirname+'/app'))

// app.get('/', (req, res) => {
//     console.warn('got home request')
//     res.sendFile(__dirname+'/templates/index.html')
// })

app.listen(port,'0.0.0.0' , (e)=>{
    if(e) throw e;
    console.warn('running at 8000')
})