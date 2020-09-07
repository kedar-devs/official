/*const Validator=require('validator')
const isEmpty=require('is-empty')
data={
    username:"",
    password:""
}
function login(data)
{
    let errors={};
    data.username=!isEmpty(data.username)?data.username:"";
    data.password=!isEmpty(data.password)?data.password:"";
    if (Validator.isEmpty(data.email)){
        errors.username="username is required";
    }else if(!Validator.isUsername(data.username)){
        errors.username="username is invalid"
    }
    if(Validator.isEmpty(data.password)){
        data.password="password field is required"

    }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}
module.exports=login()

*/
