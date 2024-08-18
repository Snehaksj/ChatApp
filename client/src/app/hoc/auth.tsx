// withAuth.tsx
"use client";
import { ComponentType } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const AuthComponent = (props: P) => {
    const router = useRouter();
    const { isAuthenticated, loading } = useAuth();

    if (loading)
      return (
        <div className="h-screen w-full bg-black flex items-center justify-center ">
          <h3 className="text-xl text-white">Loading...</h3>
        </div>
      );

    if (!isAuthenticated) {
      router.push("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
