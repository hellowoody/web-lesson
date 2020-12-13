import { useRouter } from 'vue-router';
import { clearCache } from '../../kits/LocalStore';
import { message } from 'ant-design-vue'

export const useGoto = () => {
    const router = useRouter()
    const goPath = path => router.push({path})
    const goName = name => router.push({name})
    const logout = ()=>{
        clearCache()
        message.success("登出成功")
        router.replace({path:"/login"})
    }
    return {
        goPath,
        goName,
        logout
    }
}
