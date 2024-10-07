import CryptoJs from "crypto-js";

export const getAvatar = (email) => {
    const hash = CryptoJs.MD5(email.trim().toLowerCase())
    return `https://www.gravatar.com/avatar${hash}`;
}

export const getRandomImage = () => {
    return `https:picsum.photos/600/400?random=${Math.random()}`
}