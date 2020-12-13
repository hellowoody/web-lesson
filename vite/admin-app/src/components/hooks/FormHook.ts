import { reactive,toRaw } from 'vue';
// import useForm from '@ant-design-vue/use/es/useForm/index.js';
import { useForm as antD_useForm } from '@ant-design-vue/use';

interface useFormOptions {
  data:Object,
  rules:Object,
  success:()=>{},
}

export const useForm = (option:useFormOptions) => {
  
    const form = reactive(option.data)
  
    const rules= reactive(option.rules)
  
    const {resetFields,validate, validateInfos} = antD_useForm(form,rules)
    
    const onSubmit = (e:Event)=> {
      e.preventDefault()
      validate()
        .then(() => {
          console.log(toRaw(form));
          option.success()
        })
        .catch(err => {
          // console.log(err)
        });
    }
  
    return {
      form,
      resetFields,
      validateInfos,
      onSubmit
    }
  }