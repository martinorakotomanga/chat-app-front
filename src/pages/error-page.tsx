import { FunctionComponent } from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import Button from "../components/form/button";

const ErrorContent: FunctionComponent<{ error: unknown }> = ({ error }) => {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1 className="text-6xl text-blue-600 mt-36">{error.status}</h1>
        <h1 className="text-xl font-bold mt-10">{error.statusText}</h1>
        <p className="text-base my-3">{error.data}</p>
      </>
    );
  }

  if (error instanceof Error) {
    return (
      <>
        <h1 className="text-6xl text-red-400 mt-36">Oops !</h1>
        <p className="text-xl font-bold mt-10">{error.message}</p>
        <p>{`Error: ${error.stack}`}</p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-6xl text-red-400 mt-36">Oops !</h1>
      <p className="text-xl mt-10 mb-3">Une erreur est survenue</p>
    </>
  );
};

const ErrorPage: FunctionComponent = () => {
  const error = useRouteError();

  return (
    <div className="text-center text-xl">
      <ErrorContent error={error} />

      <Link to="/">
        <Button size="medium" className="mt-3">
          Retour au menu
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
