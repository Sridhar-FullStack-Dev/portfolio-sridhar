import { useLayoutEffect } from "react";
export default function P8IO() {
  const redirectUrl = "https://p8.io/";
  useLayoutEffect(() => {
    window.open(redirectUrl, "_blank");
  }, []);
  return <div>Loading...</div>;
}
