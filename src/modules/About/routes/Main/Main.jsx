import { Counter } from "components/Counter";
import cls from "./styles.module.scss";
import { useMainProps } from "./useMainProps";

export const Main = () => {

  const { mainText } = useMainProps();

  return <div>
    <h1 className={cls.title}>About MAIN: {mainText}</h1>
    <Counter />
  </div>;
};
