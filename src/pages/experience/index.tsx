import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ExperienceIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#experience");
  }, [router]);

  return null;
}
