import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <img
        className="min-h-screen"
        src="https://hips.hearstapps.com/hmg-prod/images/abstract-glitch-background-404-royalty-free-illustration-1679362904.jpg"
        alt=""
        width="100%"
     
        
      />
    </div>
  );
};

export default ErrorPage;
