export default class Utils {
  static generateFakeToken(user) {
    const base64url = (source) => {
      return btoa(JSON.stringify(source))
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
    };

    const header = {
      alg: "HS256",
      typ: "JWT",
    };

    const payload = {
      username: user,
      role: "user",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    const signature = "fake-signature";

    const token = `${base64url(header)}.${base64url(payload)}.${signature}`;

    return token;
  }
}
