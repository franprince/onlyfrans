import { useState } from "react";

interface Form extends HTMLFormElement {
  nombre: HTMLInputElement;
}

const Form = () => {
  const [name, setName] = useState<string>("");
  return (
    <form action={`/user/${name}`} method="get" className="form">
      <label className="input-label" htmlFor="">
        Ingresá tu nombre
        <input
          className="form-input"
          name="nombre"
          type="text"
          required
          pattern="\b[Ff][Rr][Aa][Nn]\w*"
          title="Sólo los elegidos pueden ingresar"
          onChange={(event) => setName(event.currentTarget.value)}
          value={name}
        />
      </label>
      <label></label>
      <input className="form-button" type="submit" />
    </form>
  );
};

export default Form;
