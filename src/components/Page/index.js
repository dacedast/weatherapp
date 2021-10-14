import React, { Fragment } from "react";
import Form from "../Form";
import Header from "../Header";
import useForecast from "../../hooks/useForecast";
import Error from "../Error";
import Loader from "../Loader";
import Forecast from "../Forecast";
import "./page.styles.css";
const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <Fragment>
      <Header />
      {!forecast && (
        <div className="box position-relative">
          {!isLoading && <Form submitSearch={onSubmit} />}
          {isError && <Error message={isError} />}
          {isLoading && <Loader />}
        </div>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </Fragment>
  );
};

export default Page;
