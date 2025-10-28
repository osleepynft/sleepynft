"use client";
import { useLuksoProfile } from "@/app/_contexts/LuksoProfileContext";
import styles from "./luksoProfile.module.css";

export default function LuksoProfile() {
  const { profile, isLoading, error } = useLuksoProfile();

  if (!profile) {
    return null;
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={profile.name}
            className={styles.profileImage}
          />
        ) : (
          <div className={styles.placeholder}>
            {profile.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className={styles.info}>
          <h3 className={styles.name}>{profile.name}</h3>
          <p className={styles.address}>
            {profile.address.slice(0, 6)}...{profile.address.slice(-4)}
          </p>
        </div>
      </div>
    </div>
  );
}

