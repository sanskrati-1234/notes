interface IGeograp{
    lat:string,
    log:string
}
interface IProfile extends IGeograp{
  name:string,
  email:string,
  pic?:string
}

const ss :IProfile={
   name:"Sanskrati",
   email: "sanskratiagrawal306@gmail.com",
   lat:"xyz",
   log:""
}
console.log(ss)