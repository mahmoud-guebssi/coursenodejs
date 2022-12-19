//cour1
const http= require('http')

//creation serveur 
const server= http.createServer((req,res)=>{
    res.statusCode=200 //me3nih lena bech traje3 code mta3 il problem 
    res.setHeader('content-type','text/html') //lehna bech traje3lo type mta3 il reqt
    res.write('Welcome to my site \n')   //hena bech traje3 il message il t7eb te3malo affichage
    res.write('by mahmoud guebsi\n')
    
    res.end('done')       //hena hethi bech tsakir beha il serveur bech ya3melik il affichage w end tji kin wa7eda berka


})

server.listen(3000,()=>{console.log('server running')})
//cour2
const http= require('http')

//creation serveur 
const server= http.createServer((req,res)=>{

    if (req.url=='/home'){
        res.statusCode=200 
        res.write('wlecome from home')
    }else if (req.url=='/contact'){
        res.statusCode=200 
        res.write('wlecome from contact')
    }else if (req.url=='/about'){
        res.statusCode=200 
        res.write('wlecome from about')}
    else {
        res.statusCode=404
        res.write('not found')
    }
    res.end()
  })

server.listen(3000,()=>{console.log('server running')})