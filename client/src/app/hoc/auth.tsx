"use client";
import { useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const AuthComponent = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          await axios.get("http://localhost:5000/protected", {
            withCredentials: true,
          });
        } catch (error) {
          router.push("/");
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
