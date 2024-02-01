import { useGetUsers } from "api";


export const useMainProps = () => {

  const users = useGetUsers()

  console.log(users);

  return {
    users
  };
};
