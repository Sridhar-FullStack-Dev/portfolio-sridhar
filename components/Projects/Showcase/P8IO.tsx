import { useEffect } from "react";
export default function P8IO() {
  const redirectUrl = "https://p8.io/";
  useEffect(() => {
    window.open(redirectUrl, "_blank");
  }, []);
  return <div>Loading...</div>;
}
