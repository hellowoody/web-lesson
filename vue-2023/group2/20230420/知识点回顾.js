/*

    1. vue2和vue3的具名插槽是的语法是什么？

        <slot name="Abc"></slot>
        <slot name="Xyz"></slot>


        vue2:
            <child>
                <div slot="Abc">aadfdsafdsafdsa</div>
                <div slot="Xyz">范德萨范德萨范德萨范德萨发</div>
            </child>

        vue3:

            <child>
                <template v-slot:Abc>
                     <div>aadfdsafdsafdsa</div>
                </template>
                <template v-slot:Xyz>
                     <div>范德萨范德萨范德萨范德萨发</div>
                </template>
            </child>


    2. vue2生命周期函数有几个？我们需要记住哪几个？


        8个

        created mounted


    3. vue2生命周期函数需要记住的那几个区别是什么？


        created(){
            // 不能获取 v-dom 标签
            // data methods computed
        }

        mounted(){
            // data methods computed
            // v-dom 标签
        }

*/