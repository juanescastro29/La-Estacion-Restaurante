import React from "react";
import FormRegister from "../../components/FormRegister";

function Register() {
  return (
    <div className="container p-4" style={{height: ""}}>
      <div className="row justify-content-center align-items-center bg-light rounded border p-4 border-1 border-dark">
        <FormRegister />
      </div>
    </div>
  );
}

export default Register;
