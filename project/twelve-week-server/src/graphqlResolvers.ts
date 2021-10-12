import {Connect} from "./db/Mongo"

export const Hello = (parent:any,args:any) => "hello graphql"

// export const HomeTopDataDb = async (parent:any,args:any) => {
//     try {
//         const client = await Connect();
//         try {
//             console.log("this is db query")
//             const db = client.db("test");
//             const result = await db.collection("hometopdata").find().limit(args.limit).toArray()
//             return result
//         } catch (e) {
//             return e
//         } finally {
//             client.close();
//         }
//     } catch (error) {
//         return error
//     }
// }

