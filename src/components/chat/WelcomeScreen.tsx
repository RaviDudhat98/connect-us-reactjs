const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      {/* Chat icon SVG matching Figma */}
      <div className="welcome-icon">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 20H20C17.8 20 16 21.8 16 24V52C16 54.2 17.8 56 20 56H28V66L42 56H60C62.2 56 64 54.2 64 52V24C64 21.8 62.2 20 60 20Z"
            fill="currentColor"
            opacity="0.15"
          />
          <circle cx="32" cy="38" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="40" cy="38" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="48" cy="38" r="3" fill="currentColor" opacity="0.3" />
          <path
            d="M54 12H24C21.8 12 20 13.8 20 16V14"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.1"
          />
        </svg>
      </div>
      <h2 className="welcome-title">Welcome to Your Conversations</h2>
      <p className="welcome-subtitle">
        Select a chat from the list to start exploring your messages or begin a
        new conversation
      </p>
    </div>
  );
};

export default WelcomeScreen;
