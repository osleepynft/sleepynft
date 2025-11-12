"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";
import { useLuksoProfile } from "@/app/_contexts/LuksoProfileContext";
import styles from "./userAvatar.module.css";

export default function UserAvatar() {
  const { logout } = usePrivy();
  const { profile, isLoading } = useLuksoProfile();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!profile) {
    return <div className={styles.loading}>No profile</div>;
  }

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await logout();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.profileCard} ref={dropdownRef}>
      <button className={styles.profileButton} onClick={toggleDropdown}>
        {profile.profileImage ? (
          <Image
            src={profile.profileImage}
            alt={profile.name}
            width={40}
            height={40}
            className={styles.avatarImage}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {profile.name.charAt(0).toUpperCase()}
          </div>
        )}
        <span className={styles.profileName}>{profile.name}</span>
      </button>

      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <div className={styles.dropdownName}>{profile.name}</div>
            <div className={styles.dropdownAddress}>
              {profile.address.slice(0, 6)}...{profile.address.slice(-4)}
            </div>
          </div>
          <div className={styles.dropdownMenu}>
            <button className={`${styles.menuItem} ${styles.logout}`} onClick={handleLogout}>
              <span>🚪</span>
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
