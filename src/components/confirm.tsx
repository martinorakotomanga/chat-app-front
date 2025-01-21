import { FunctionComponent } from "react";
import Button from "./form/button";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
  children: string;
};

const Confirm: FunctionComponent<Props> = ({
  onConfirm,
  onCancel,
  children,
}) => {
  return (
    <div className="shadow p-5 rounded-lg z-10">
      <p>{children}</p>

      <div className="flex justify-end mt-2">
        <Button className="me-1" size="small" onClick={onCancel}>
          Annuler
        </Button>

        <Button
          className="bg-white border text-black"
          size="small"
          onClick={onConfirm}
        >
          Confirmer
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
