# Lukso Profile Context Provider

This context provider fetches and manages LSP3Profile information for connected Lukso wallets via Privy authentication.

## Setup

### Installation

First, install the required dependency:

```bash
npm install @erc725/erc725.js
```

### Integration

The provider is already integrated in `app/layout.js` and wraps the entire application:

```jsx
<Providers>
  <LuksoProfileProviderWrapper>
    {/* Your app components */}
  </LuksoProfileProviderWrapper>
</Providers>
```

## Usage

### Basic Example

Import and use the `useLuksoProfile` hook in any component:

```jsx
"use client";
import { useLuksoProfile } from "@/app/_contexts/LuksoProfileContext";

export default function MyComponent() {
  const { profile, isLoading, error } = useLuksoProfile();

  if (isLoading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return null;

  return (
    <div>
      <img src={profile.profileImage} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.address}</p>
    </div>
  );
}
```

### Using the Pre-built Component

A ready-to-use component is available at `app/_components/LuksoProfile/LuksoProfile.js`:

```jsx
import LuksoProfile from "@/app/_components/LuksoProfile/LuksoProfile";

export default function Header() {
  return (
    <header>
      <nav>
        {/* Your navigation */}
      </nav>
      <LuksoProfile />
    </header>
  );
}
```

## Profile Data Structure

The `profile` object contains:

```javascript
{
  address: string,           // Wallet address
  name: string,              // Profile name or shortened address
  description: string,       // Profile description
  profileImage: string|null, // Profile image URL (IPFS or HTTP)
  backgroundImage: string|null, // Background image URL
  tags: array,               // Profile tags
  links: array               // Profile links
}
```

## Hook API

### `useLuksoProfile()`

Returns an object with:

- `profile`: Profile data object (null if not connected)
- `isLoading`: Boolean indicating if profile is being fetched
- `error`: Error message string (null if no error)

## How It Works

1. The provider listens to Privy authentication state
2. When a user connects their wallet, it detects the wallet address
3. Uses ERC725.js to fetch LSP3Profile data from the Lukso mainnet
4. Parses and provides the profile data through React Context
5. Automatically updates when wallet connection changes

## Notes

- The provider automatically handles wallet connection/disconnection
- If no LSP3Profile data is found, it falls back to displaying the shortened address
- IPFS images are resolved through Universal Profile's IPFS gateway
- The RPC endpoint is configured for Lukso mainnet: `https://rpc.mainnet.lukso.network`

## Customization

To modify the RPC endpoint or IPFS gateway, edit `app/_contexts/LuksoProfileContext.js`:

```javascript
const erc725 = new ERC725(
  lsp3ProfileSchema,
  address,
  "https://your-rpc-endpoint.com", // Change RPC
  {
    ipfsGateway: "https://your-ipfs-gateway.com/ipfs", // Change IPFS gateway
  }
);
```

