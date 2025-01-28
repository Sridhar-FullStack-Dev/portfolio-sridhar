import { useLayoutEffect } from "react";
export default function MariaCars() {
  const redirectUrl = "https://www.maria-cars.com/";
  useLayoutEffect(() => {
    window.open(redirectUrl, "_blank");
  }, []);
  return <div>Loading...</div>;
}
