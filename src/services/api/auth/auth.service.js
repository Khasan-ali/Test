import { useMutation } from "react-query"
import request from "services/httpRequest"

export const useAuthCreat = () => {
       return useMutation({ mutationFn: (data) => request.post("auth/login", data) })
}
