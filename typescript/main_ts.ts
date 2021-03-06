interface data{
    data:IinneraData[],
}
interface IinneraData{
    id:number,
    name:string,
    username:string,
    email:string,
    address:IAddress,
    phone: string,
    website:string,
    company:ICompany,

}
interface IAddress{
    street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: IGeo
}
interface ICompany{
     name: string,
      catchPhrase: string,
      bs: string,
} 
interface IGeo{
    lat:string,
    lng:string
}

const obj:IinneraData={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  };
  const arr=[obj];
  console.log(arr)