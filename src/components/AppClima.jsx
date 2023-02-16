import { Fragment } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado } = useClima();
  return (
    <Fragment>
      <main className="dos-columnas">
        <Formulario />

        {resultado?.name && <Resultado />}
      </main>
    </Fragment>
  );
};

export default AppClima;
