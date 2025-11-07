import { useEffect, useState } from "react";
import { getSession } from "./auth-client";

type SessionData = {
  user: any;
  loading: boolean;
};

export function useSession() {
  const [sessionData, setSessionData] = useState<SessionData>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await getSession();
        if (response?.data?.user && "role" in response.data.user) {
          const userData = {
            ...response.data.user,
            createdAt: response.data.user.createdAt.toISOString(),
            updatedAt: response.data.user.updatedAt.toISOString(),
          };
          setSessionData({
            user: userData,
            loading: false,
          });
        } else {
          setSessionData({
            user: null,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Failed to fetch session:", error);
        setSessionData({
          user: null,
          loading: false,
        });
      }
    };

    fetchSession();
  }, []);

  return sessionData;
}
