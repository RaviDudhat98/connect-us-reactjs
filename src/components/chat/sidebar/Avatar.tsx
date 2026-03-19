import { Avatar as MuiAvatar } from "@mui/material";

type Props = {
  name: string;
  src?: string;
};

const Avatar = ({ name, src }: Props) => {
  return (
    <MuiAvatar src={src} alt={name}>
      {!src && name[0]}
    </MuiAvatar>
  );
};

export default Avatar;
