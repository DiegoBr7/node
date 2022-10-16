import usersRouters from "../routes/UsersRoutes";
import Router from "express"
import { request } from "https";


const routes = Router();

// routes.get("/",(require,response) => {
//     response.status(200).json({
//         Mesage:"Hello World!",
//         titulo:"Receitas de vendas",
//         valor:1000,
//         categoria:"Entrada",
//         data:"20/07/2022"
//     })
// } )

routes.use(usersRouters);



// routes.post("/transactions", (request,response)=>{
//     console.log('Body:',  request.body )
//     response.sendStatus(201)
// })

export default routes;