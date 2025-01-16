import { FunctionComponent } from "react";

const LoginAside: FunctionComponent = () => {
  return (
    <div className="p-5 lg:p-10 lg:border rounded-lg">
      <img src="" alt="Chat app" />

      <h1 className="text-4xl mt-2">Bienvenu sur Chat app</h1>

      <p className="mt-5 text-lg">
        Envoyer et recevoir instantanément des messages venant de tes proches et
        tes amis.
      </p>

      <br />

      <p className="text-lg">
        Parler avec facilité avec des inconnus et étrangers <br />
        <em>en continuant à élargir tes réseaux.</em>
      </p>
    </div>
  );
};

export default LoginAside;
