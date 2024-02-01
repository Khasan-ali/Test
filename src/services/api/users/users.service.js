import { useQuery } from "react-query";
import request from "services/httpRequest";


const usersServices = { getUsers: () => request.get("/users").then(res => res.data), };

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: usersServices.getUsers,
  });
};