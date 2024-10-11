import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const withAdmin = (WrappedComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const getUserData = async () => {
      const response = await fetch(
        "/api/users/user?email=" + session?.user?.email
      );
      const data = await response.json();
      return data;
    };

    useEffect(() => {
      if (status === "authenticated" && session?.user?.email) {
        getUserData().then((data) => {
          if (data?.data?.isAdmin) {
            setIsAdmin(true);
          } else {
            toast.error("You are not authorized to view this page.");
            window.location.href = "/";
          }
          setLoading(false);
        });
      } else if (status === "unauthenticated") {
        toast.error("Please log in to access this page.");
        signIn();
        setLoading(false);
      }
    }, [session, status]);

    if (loading) {
      return <div>Loading...</div>; // Or a more sophisticated loading component
    }

    return isAdmin ? <WrappedComponent {...props} /> : null;
  };
};

export default withAdmin;