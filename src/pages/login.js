
import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";

const LoginPage = () => {

 
  return (
    <div>
      <Head>
        <title>PCBuilder | Login</title>
      </Head>
      <div className={styles.form}>
        <h3 className="mt-9 text-2xl text-amber-700">LOGIN</h3>
        <div className={styles.social_icons}>
          <div
            className="cursor-pointer border"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          >
            <h4 className="d-flex flex ">
              Google
              <GoogleOutlined className="ml-3" />
            </h4>
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
          >
            <h4 className="d-flex flex ">
              Github
              <GithubOutlined className="ml-3" />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;