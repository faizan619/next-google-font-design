import { Suspense } from "react";
import Demo from "./Demo";
export default function Page() {
  return (
    <Suspense>
      <Demo />
    </Suspense>
  );
}
