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
