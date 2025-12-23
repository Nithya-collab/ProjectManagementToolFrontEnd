import { useState } from "react";
import { Button } from "@/components/ui/button";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Home from "../Home/Home";
import "./Auth.css";

function Auth() {
  // 1. Use string-based state consistently
  const [authState, setAuthState] = useState("guest");

  // 2. Internal helper to render the correct view
  const renderContent = () => {
    switch (authState) {
      case "guest":
        return <Signup setAuthState={setAuthState} />;
      case "registered":
        return <Login setAuthState={setAuthState} />;
      case "forgot":
        return <ForgotPassword setAuthState={setAuthState} />;
      case "reset":
        return <ResetPassword setAuthState={setAuthState} />;
      case "authenticated":
        return <Home />;
      default:
        return <Login setAuthState={setAuthState} />;
    }
  };

  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {renderContent()}

            <div className="mt-4 text-center space-y-2">
              {/* Toggle between Login and Signup */}
              <div>
                <span>
                  {authState === "guest"
                    ? "Already have an account?"
                    : "Don't have an account?"}
                </span>
                <Button
                  variant="link"
                  className="text-sm !text-blue-600 hover:text-blue-800"
                  onClick={() =>
                    setAuthState(authState === "guest" ? "registered" : "guest")
                  }
                >
                  {authState === "guest" ? "Sign In" : "Sign Up"}
                </Button>
              </div>

              {/* Link for Forgot Password (only show on login screen) */}
              {authState === "registered" && (
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={() => setAuthState("forgot")}
                >
                  Forgot password?
                </Button>
              )}

              {/* Back to login option for Forgot/Reset views */}
              {(authState === "forgot" || authState === "reset") && (
                <Button
                  variant="link"
                  className="text-primary"
                  onClick={() => setAuthState("registered")}
                >
                  Back to Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
