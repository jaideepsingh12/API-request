import React, { memo, ReactNode } from "react";
interface Props {
  email: ReactNode;
  gender: ReactNode;
  name: ReactNode;
}
const SingleUser: React.FC<Props> = (props) => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-3 gap-2 p-2 auto-cols-max ">
        <p className="p-5 bg-blue-300">{props.name}</p>
        <p className="p-5 bg-blue-300">{props.gender}</p>
        <p className="p-5 bg-blue-300">{props.email}</p>
      </div>
    </>
  );
};
export default memo(SingleUser);
