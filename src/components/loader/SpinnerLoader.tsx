const SpinnerLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary gap-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-textSecondary animate-pulse">Loading ConnectUs...</p>
    </div>
  );
};

export default SpinnerLoader;
