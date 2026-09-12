import { AnnualAttendancesEnEntity } from './entity/AnnualAttendancesEnEntity';
import { AnnualAttendancesScEntity } from './entity/AnnualAttendancesScEntity';
import { AnnualAttendancesTcEntity } from './entity/AnnualAttendancesTcEntity';
export type * from './ChineseMedicineClinicsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ChineseMedicineClinicsEntityBase } from './ChineseMedicineClinicsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ChineseMedicineClinicsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    AnnualAttendancesEn(entopts?: Record<string, any>): AnnualAttendancesEnEntity;
    AnnualAttendancesSc(entopts?: Record<string, any>): AnnualAttendancesScEntity;
    AnnualAttendancesTc(entopts?: Record<string, any>): AnnualAttendancesTcEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ChineseMedicineClinicsSDK;
    tester(testopts?: any, sdkopts?: any): ChineseMedicineClinicsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ChineseMedicineClinicsSDK;
export { stdutil, config, BaseFeature, ChineseMedicineClinicsEntityBase, ChineseMedicineClinicsSDK, SDK, };
