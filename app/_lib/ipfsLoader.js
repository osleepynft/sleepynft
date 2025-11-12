export default function ipfsLoader({ src, width, quality }) {
  // If it's already an HTTPS URL, return it as-is
  if (src.startsWith('https://') || src.startsWith('http://')) {
    return src;
  }

  // Handle IPFS protocol URLs (ipfs://...)
  if (src.startsWith('ipfs://')) {
    const ipfsHash = src.replace('ipfs://', '');
    // Use Universal Profile Cloud IPFS gateway
    return `https://api.universalprofile.cloud/ipfs/${ipfsHash}`;
  }

  // Handle /ipfs/ paths
  if (src.startsWith('/ipfs/')) {
    const ipfsHash = src.replace('/ipfs/', '');
    return `https://api.universalprofile.cloud/ipfs/${ipfsHash}`;
  }

  // If it's a regular path, return as-is
  return src;
}

