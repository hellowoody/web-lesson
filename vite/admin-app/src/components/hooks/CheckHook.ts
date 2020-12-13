import { getCacheVal } from '../../kits/LocalStore';
import {useRouter} from 'vue-router'

export const useCheckLogin = () => {
    if(!getCacheVal("token") || getCacheVal("token").length <= 0 ){
        const router = useRouter()
        router.replace({path:"/login"})
    }
}