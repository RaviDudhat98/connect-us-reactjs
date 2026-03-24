import { Avatar as MuiAvatar } from "@mui/material";

type Props = {
  name: string;
  src?: string;
  isOnline?: boolean;
  size?: number;
};

const Avatar = ({ name, src, isOnline, size = 48 }: Props) => {
  // Generate a consistent color from name
  const getColor = (name: string) => {
    const colors = [
      "#7C3AED", "#2563EB", "#059669", "#D97706",
      "#DC2626", "#7C3AED", "#0891B2", "#4F46E5",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="avatar-wrapper">
      <MuiAvatar
        src={src}
        alt={name}
        sx={{
          width: size,
          height: size,
          fontSize: size * 0.38,
          fontWeight: 600,
          bgcolor: src ? undefined : getColor(name),
        }}
      >
        {!src && initials}
      </MuiAvatar>
      {isOnline && <div className="avatar-online-dot" />}
    </div>
  );
};

export default Avatar;
