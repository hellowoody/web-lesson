# Graphql

 ## 是什么

    前请求接口的框架、风格

 ## 特点

    不跟语法绑定，但官方以js为默认语法

 ## 网址

    ```
        https://graphql.org/ 官方

        https://graphql.com/ 框架的教程

        https://www.apollographql.com/docs/apollo-server/ 阿波罗的网址（graphql，nodejs web框架express整合）

        https://www.apollographql.com/docs/apollo-server/api/express-middleware/

        在apollo这个库将graphql和express做整合

    ```
 
 ## 创建项目

   ```

      npm init -y

      npm i --save @apollo/server express graphql

      npm i -D nodemon  // 不需要频繁的启停服务
   
   ```
 
 ## typeDefs

   ```

   //下面两个是默认自带的，不能改名字
   type Query {

   }

   type Mutation {

   }
   
   // 自定义类型

   type Xxx {

   }

   ```

 ## gql的类型

   - String
   - Int
   - Float
   - Boolean
   - ID
   - []
   - 自定义类型 (当成js中的Object)

 ## query和mutation的post请求区别

 - query请求

   ```
   const params = {
        query:`
            {
                homecasual
                list {
                    name
                    score
                }
                user {
                    avatar
                    name
                    role
                }
            }
        `
    }
   ```

 - mutation请求

   ```
   const params = {
        query:`
            mutation {
                updateArea(id: "B01", area: 200) {
                    code
                    msg
                    data {
                    name
                    areaShow 
                    }
                }
            }
        `
    }
   ```