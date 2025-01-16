import { FunctionComponent } from "react";
import User from "../../../models/User";

type Props = {
  sender?: User;
  isSelfMessage: boolean;
  children: string;
};

const MessagePanel: FunctionComponent<Props> = ({
  sender,
  isSelfMessage,
  children,
}) => {
  const defaultMessageStyle =
    "px-5 py-2 my-1 lg:my-2 rounded-[16px] border text-gray-700";
  const messageStyle = "bg-blue-600 text-white";

  return (
    <div className="w-full grid grid-cols-3 lg:gap-20">
      <div
        className={
          isSelfMessage ? "col-start-2 col-span-2 flex" : "col-span-2 flex"
        }
      >
        <div>
          {sender && <h1>{`${sender.name} ${sender.firstName}`}</h1>}

          <div
            className={
              isSelfMessage
                ? `${messageStyle} ${defaultMessageStyle}`
                : defaultMessageStyle
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
