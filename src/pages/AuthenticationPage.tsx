import Authentication from "../components/authentication/Authentication";

function AuthenticationPage() {
  return (
    <div className="bg-(--chat-area-bg) h-screen flex justify-center items-center">
      <div className="bg-(--chat-sidebar-bg) border border-(--chat-border) rounded-2xl shadow-xl px-8 py-10 w-[90%] md:w-[450px] text-center">
        <Authentication />
      </div>
    </div>
  );
}

export default AuthenticationPage;
