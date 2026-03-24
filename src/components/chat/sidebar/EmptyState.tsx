const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-illustration">
        {/* Stacked chat bubbles with avatar initials - matching Figma */}
        <div className="empty-bubble empty-bubble-1">
          <div className="empty-avatar" style={{ background: "#7C3AED" }}>SF</div>
          <div className="empty-lines">
            <div className="empty-line" style={{ width: 80 }}></div>
          </div>
        </div>
        <div className="empty-bubble empty-bubble-2">
          <div className="empty-avatar" style={{ background: "#7C3AED" }}>VN</div>
          <div className="empty-lines">
            <div className="empty-line" style={{ width: 100 }}></div>
          </div>
        </div>
        <div className="empty-bubble empty-bubble-3">
          <div className="empty-avatar" style={{ background: "#7C3AED" }}>MS</div>
          <div className="empty-lines">
            <div className="empty-line" style={{ width: 90 }}></div>
            <div className="empty-line" style={{ width: 60 }}></div>
          </div>
        </div>
      </div>
      <h3 className="empty-state-title">No Conversations Yet</h3>
      <p className="empty-state-subtitle">
        Start a new chat and invite others to join the conversation
      </p>
    </div>
  );
};

export default EmptyState;
