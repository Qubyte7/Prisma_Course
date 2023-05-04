import { PrismaClient } from '@prisma/client'
import { log } from 'console';
import { name } from 'typescipt';
const prisma = new PrismaClient()// {log:["query"]} //this log  can be passed in PrismaClient to output our query that are running in the background

async function  main() {
//const user  =  await    prisma.user.create({data:{name:"innocent"}})//creating a user
// await prisma.user.deleteMany()
// const creatUser = await prisma.user.createMany({
//     data:[{
//         name:"innnocent",
//         email:"Mugisha@gmail.com",
//         age:57,
//         // userPreference:{//Prism provide an option of providing a user and give him characters of difference model
//         //     create:{
//         //         EmailUpdate: true,
//         //     },},
//     },
// {
//     name:"Ganza",
//     email:"Ettiene@gmail.com",
//     age:2,   
//}],
    //  include :{
    //     userPreference:true,//this line allow properties to a new user whose model is diffrent fron that property
    //  },
    //  select:{//this is going to help ou to return a specified out put
    //     name:true,
    //     userPreference :{select:{id:true}}
    //  }
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
const findUsers = await prisma.user.findMany({
    where:{
        // name:"Ganza",
        // name:{not :"Ganza"},
        // name:{in:["Ganza","innnocent"]},
       // name:{notIn:["Ganza","innnocent"]},
       // age:{lt :20},//less than 20
      // email:{contains : "@gmail.com"},
     // email :{endsWith :"@gmail.com"},
     //  email :{startsWith :"Gana"}
              //USING AND && OR
   //AND:[{email:{startsWith:"Gana"}},{name:"Ganza"},{email:{endsWith:"@gmail.com"}}]
   //OR:[{email:{startsWith:"Gana"}},{email:{endsWith:"@gmail.com"}}]
    //NOT:[{name:"Ganza"}]



    },
    //distinct:["name","age"]//this will restrict that we will get the user whose name and age are unique
    //         //Pagination
    // orderBy:{
    //   age:"asc"
    // }, 
    //offset pagination     
    //  take:2,
    //  skip:0
});
console.log(findUsers.length);

         //FINDING UNIQUE AND THROW
// const findUser3 = await prisma.user.findFirstOrThrow({//this works as findUnique but it throws an error called user not found if the user was not found 
//     where:{
//         email:"Ganza@gmail.com"
//     }
// })
// console.log(findUser3);
 }


//cathing Error
main()
.catch((e) => {
    console.error(e.message)
})
.finally(async () =>{
    await prisma.$disconnect()
})



