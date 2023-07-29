import Image from "next/image";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <Image
        className="min-h-screen"
        src="https://hips.hearstapps.com/hmg-prod/images/abstract-glitch-background-404-royalty-free-illustration-1679362904.jpg"
        alt=""
        width={400}
        height={600}
      />
    </div>
  );
};

export default ErrorPage;
