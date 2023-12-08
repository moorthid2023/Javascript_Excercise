//
console.log("connected !")
//below mentioned are valid json formates
//
let json1 = "hello";
let json2 = "a";
let json3 = 4;
let json4 = [1,2,53,5];
let json5 ={
    name:"Moorthi",
    pro:"Software Dev"
};
let json6 = [
    {
        name:"Moorthi",
        pro:"Software Dev"
    },
    {
        name:"Vel",
        pro:"Banker"
    },
    {
        name:"Surya",
        pro:"Police Ins"
    }
];
let json7 = `[
    {
        "name":"Moorthi",
        "pro":"Software Dev"
    },
    {
        "name":"Vel",
        "pro":"Banker"
    },
    {
        "name":"Surya",
        "pro":"Police Ins"
    }
]`;
//
let parsed = JSON.parse(json7);
parsed.forEach(element => {
console.log(element.name,"Working As ",element.pro)    
})