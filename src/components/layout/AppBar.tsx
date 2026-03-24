import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar as MuiAvatar,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useThemeMode } from "../../context/ThemeContext";

const AppSidebar = () => {
  const { isDark, toggleTheme } = useThemeMode();
  const navigate = useNavigate();
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchor);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleLogout = () => {
    handleProfileClose();
    navigate("/");
  };

  return (
    <aside className="app-sidebar">
      {/* Logo */}
      <div className="app-sidebar-top">
        <Tooltip title="ConnectUs" placement="right" arrow>
          <button
            className="app-sidebar-btn app-logo-btn"
            onClick={() => navigate("/chat")}
            aria-label="Home"
          >
            <ChatBubbleOutlineIcon sx={{ fontSize: 26 }} />
          </button>
        </Tooltip>
      </div>

      {/* Bottom actions */}
      <div className="app-sidebar-bottom">
        <Tooltip
          title={isDark ? "Light mode" : "Dark mode"}
          placement="right"
          arrow
        >
          <button
            className="app-sidebar-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <LightModeOutlinedIcon sx={{ fontSize: 22 }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ fontSize: 22 }} />
            )}
          </button>
        </Tooltip>

        <Tooltip title="Profile" placement="right" arrow>
          <button
            className="app-sidebar-btn profile-btn"
            onClick={handleProfileClick}
            aria-label="Profile menu"
          >
            <MuiAvatar
              sx={{
                width: 34,
                height: 34,
                fontSize: 14,
                fontWeight: 600,
                bgcolor: "#7C3AED",
              }}
            >
              U
            </MuiAvatar>
          </button>
        </Tooltip>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileAnchor}
          open={profileOpen}
          onClose={handleProfileClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "left" }}
          slotProps={{
            paper: {
              className: "border border-(--chat-border) shadow-xl bg-(--chat-sidebar-bg)!",
              sx: {
                ml: 1,
                minWidth: 200,
                borderRadius: 2,
              },
            },
          }}
        >
          <div style={{ padding: "12px 16px 8px" }}>
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              User
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "#9CA3AF",
              }}
            >
              user@connectus.com
            </p>
          </div>
          <Divider />
          <MenuItem onClick={() => { handleProfileClose(); alert("Profile page coming soon!"); }}>
            <ListItemIcon>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>View Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => { handleProfileClose(); alert("Settings page coming soon!"); }}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" sx={{ color: "#EF4444" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ "& .MuiTypography-root": { color: "#EF4444" } }}
            >
              Logout
            </ListItemText>
          </MenuItem>
        </Menu>
      </div>
    </aside>
  );
};

export default AppSidebar;
