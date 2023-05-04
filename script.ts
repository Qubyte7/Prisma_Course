import { PrismaClient } from '@prisma/client'
import { log } from 'console';
const prisma = new PrismaClient()// {log:["query"]} //this log  can be passed in PrismaClient to output our query that are running in the background

async function  main() {
// const user  =  await    prisma.user.create({data:{name:"innocent"}})//creating a user
// await prisma.user.deleteMany()
// const creatUser = await prisma.user.createMany({
//     data:[{
//         name:"innnocent",
//         email:"innocent@gmail.com",
//         age:27,
//         // userPreference:{//Prism provide an option of providing a user and give him characters of difference model
//         //     create:{
//         //         EmailUpdate: true,
//         //     },},
//     },
// {
//     name:"Ganza",
//     email:"Ganza@gmail.com",
//     age:12,   
// }],
//     //  include :{
//     //     userPreference:true,//this line allow properties to a new user whose model is diffrent fron that property
//     //  },
//     //  select:{//this is going to help ou to return a specified out put
//     //     name:true,
//     //     userPreference :{select:{id:true}}
//     //  }
// });
// console.log(creatUser)

        //FINDING USERS
//Finding Single User
// const findUser = await prisma.user.findUnique({//this is used to find users based on the unique keys they could have
//     where:{
//         //   email:"Ganza@gmail.com",
//           age_name:{
//             age:12,
//             name:"Ganza"
//           }
//     },
//     //we can also use include and select as we did for the creation of the user
// })
// console.log(findUser)
       //FINDINF USING FIND FIRST
// const findUser2 = await prisma.user.findFirst({
//     where:{
//         name:"Ganza",//this will find the very user with the specified name
//     }
// });
// console.log(findUser2);
         //FINDING MANY USERS
const findUsers = await prisma.user.findMany();//you can also specify where
console.log(findUsers);

 
}


//cathing Error
main()
.catch((e) => {
    console.error(e.message)
})
.finally(async () =>{
    await prisma.$disconnect()
})



