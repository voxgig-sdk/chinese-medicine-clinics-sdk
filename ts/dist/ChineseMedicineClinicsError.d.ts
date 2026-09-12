import { Context } from './Context';
declare class ChineseMedicineClinicsError extends Error {
    isChineseMedicineClinicsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ChineseMedicineClinicsError };
