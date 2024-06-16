
const mongoose= require('mongoose')
const URL="mongodb+srv://admin:admin123@cluster0.ovhcx8c.mongodb.net/gfgdb?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(URL)

const user=mongoose.model('demousers',{name:String,email:String})
const myUser=new user({name:'admin',email:'admin@email.com'})
myUser.save().then(()=>console.log('user added'))

