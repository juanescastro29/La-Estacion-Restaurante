import React from "react";
import Carousel from "../../components/Carousel";
import Logo from "../../assets/Background.jpg";
import Image1 from "../../assets/LaEstacionLogo.png";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  const images = [
    { id: "0", src: Logo },
    {
      id: "1",
      src: Image1,
    },
  ];

  return (
    <div className="container-xl p-4 align-items-center justify-content-center d-flex flex-column min-vh-100 animate__animated animate__bounceInDown">
      <div className="row">
        <div className="col-md-7 p-4">
          <Carousel images={images} />
        </div>
        <div className="col-md-5 p-4 d-flex align-items-center">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;