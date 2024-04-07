import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1> {err.status}</h1>
      <h2>{err.statusText}</h2>
      <h2>
        Looks like you are lost! Head back to homapage and search your path
        again.
      </h2>
    </div>
  );
};

export default Error;
