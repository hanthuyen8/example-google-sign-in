import {SignJWT, jwtVerify} from 'jose';

const DEFAULT_EXPIRED_SECONDS = 3600 * 24 * 365; // 1 year

export const JwtService = {
    async sign(
        secret: string,
        data: Record<string, any>,
        expiredSeconds: number = DEFAULT_EXPIRED_SECONDS
    ): Promise<string> {
        const encoder = new TextEncoder();
        const key = encoder.encode(secret);
        return await new SignJWT(data)
            .setProtectedHeader({alg: 'HS256'})
            .setIssuedAt()
            .setExpirationTime(`${expiredSeconds}s`)
            .sign(key);
    },

    /**
     * @throws {Error} If verify fail.
     */
    async verify(
        secret: string,
        jwt: string,
    ) {
        const {payload, protectedHeader} = await jwtVerify(jwt, new TextEncoder().encode(secret));
        return payload;
    },
};