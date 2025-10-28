"use client";
import Image from "next/image";
import { useLuksoProfile } from "@/app/_contexts/LuksoProfileContext";

export default function UserAvatar() {
  const { profile, isLoading, error } = useLuksoProfile();

  if (isLoading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!profile) return <p>No profile</p>;

  return (
    <div style={{ textAlign: "center" }}>
      {profile.profileImage ? (
        <Image
          src={profile.profileImage}
          alt={profile.name}
          width="100"
          height="100"
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ?
        </div>
      )}
      <p>{profile.name}</p>
    </div>
  );
}
