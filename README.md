# Node.js

## 安装

 - 官方下载地址：https://nodejs.org/zh-cn/

 - 下载LTS （长期维护版本）

 - 安装目录放在非中文不含空格的目录即可

## 什么是I/O操作

 - Input/Output (输入/输出) 简称I/O

 - 输入/输出一般指的的是访问磁盘或网络，注意访问内存不算I/O !

 - I/O操作是计算机操作中速度最慢的一类

 - I/O操作一般不太占CPU资源

## 工作原理

 - 市面上大部分编程语言对I/O操作都是阻塞的，下面以网络请求为例

    ![image](./assets/imgs/sync_io.png)


 - Node.js的I/O操作是异步的，或者说Node.js的I/O操作是非阻塞的，下面还是以网络请求为例

    ![image](./assets/imgs/async_io.png)

    ```
    //上图的伪代码实现，尝试体会
    //这种方式叫做busy-waiting

    resources = [socketA,socketB,socketC]

    while(! resources.isEmpty()){
        for(resource of resources){
            //尝试读取
            data = resource.read()
            if(data === NO_DATA_AVAILABLE){
                //目前没有数据可以读取
                continue
            }

            if(data === RESOURCE_CLOSED){
                //资源已关闭，把它从列表中移除
                resources.remove(i)
            }else{
                //收到了数据，处理该数据
                consumeData(data)
            }
        }
    }
    ```

 - 事件多路分离

    上面的busy-waiting绝对不是处理非阻塞资源的理想方式，好在目前大多数操作系统，都提供了一种原生机制，能够高效处理并发式的非阻塞资源。这指的就是同步事件多路分离器(synchronus event demultiplexer)。
    下面使用事件多路分离技术实现刚才的busy-waiting方案,注意是伪代码实现。

    ```

    resources = [socketA,socketB,socketC]

    // 注意： demultiplexer.watch(resources) 是同步阻塞的，这是操作系统支持的
    while(events = demultiplexer.watch(resources)){
        // 事件轮询 event-loop
        for(event of events){
            // 这项读取操作绝不会阻塞，他总是能返回数据
            data = event.resource.read()
            if(data === RESOURCE_CLOSED){
                //资源已关闭，把它从列表中移除
                demultiplexer.unwatch(event.resource)
            }else{
                //收到了数据，处理该数据
                consumeData(data)
            }
        }
    }

    ```
 - 事件轮询 Event-loop

    下面的图是解释在Node.js中如何实现事件轮询的，同时也解释了如何与事件多路分离相配合

    ![image](./assets//imgs//eventloop.png)


## Node.js的宏观结构

 - 结构图
   
   ![image](./assets//imgs/nodeskelton.png)