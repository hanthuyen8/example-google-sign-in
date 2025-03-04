export function isExpired(exp: number): boolean {
    return exp * 1000 < new Date().getTime();
}

export function verifyString(v: unknown): string {
    if (v && typeof v === 'string') {
        return v;
    }
    throw new Error(`Cannot verify ${v}`);
}

export function verifyNumber(v: unknown): number {
    if (v && typeof v === 'number') {
        return v;
    }
    throw new Error(`Cannot verify ${v}`);
}

export function verifyBoolean(v: unknown): boolean {
    if (v && typeof v === 'boolean') {
        return v;
    }
    throw new Error(`Cannot verify ${v}`);
}