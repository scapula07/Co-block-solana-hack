export const devFilter = (devBase58PublicKey) => ({
    memcmp: {
        offset: 8, // Discriminator.
        bytes: devBase58PublicKey,
    },
})