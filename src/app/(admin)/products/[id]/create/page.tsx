import type { FC } from "react";

type Props = {
  params: {
    id?: string;
  };
};

const page: FC<Props> = ({ params }) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default page;
