"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import UserAvatar from "@/app/_components/UserAvatar/UserAvatar";

export default function Connect() {
  const { authenticated, user, login, logout, ready } = usePrivy();
  console.log(authenticated);
  console.log(user);

  if (authenticated) {
    return (
      <>
        <UserAvatar />
      </>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}