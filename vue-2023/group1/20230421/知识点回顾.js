/*


    1. vue2和vue3的具名插槽是的语法是什么？

        vue2:
            const Child = {
                template:`
                    <div>
                        <slot name="Abc"></slot>
                        <slot name="Xyz"></slot>
                    </div>
                `
            }

            const Parent = {
                template:`
                    <div>
                        <child>
                            <h1 slot="Abc">title1</h1>
                            <h2 slot="Xyz">title2</h2>
                        </child>
                    </div>
                `
                components:{
                    Child
                }
            }

        vue3:

            const Parent = {
                template:`
                    <div>
                        <child>
                            <template v-slot:Abc>
                                <h1>title1</h1>
                            </template>
                            <template v-slot:Xyz>
                                <h2>title2</h2>>
                            </template>
                        </child>
                    </div>
                `
                components:{
                    Child
                }
            }

    2. vue2生命周期函数有几个？我们需要记住哪几个？


            8个

            created

            mounted


    3. vue2生命周期函数需要记住的那几个区别是什么？

            created

                data的属性，methods方法，computed的计算属性
                $nextTick(() => {
                    肯定能通过$refs拿到标签
                })

            mounted

                data的属性，methods方法，computed的计算属性
                肯定能通过$refs拿到标签(比nextTick先执行)

            



*/