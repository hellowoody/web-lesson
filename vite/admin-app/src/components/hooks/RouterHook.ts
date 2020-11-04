import { useRouter } from "vue-router";

export const useGoto = () => {
    const router = useRouter()
    const goPath = path => router.push({path})
    const goName = name => router.push({name})

    return {
        goPath,
        goName,
    }
}