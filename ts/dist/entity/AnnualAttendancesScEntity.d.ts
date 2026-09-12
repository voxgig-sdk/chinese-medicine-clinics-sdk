import { ChineseMedicineClinicsEntityBase } from '../ChineseMedicineClinicsEntityBase';
import type { ChineseMedicineClinicsSDK } from '../ChineseMedicineClinicsSDK';
import type { Control } from '../types';
import type { AnnualAttendancesSc, AnnualAttendancesScListMatch } from '../ChineseMedicineClinicsTypes';
declare class AnnualAttendancesScEntity extends ChineseMedicineClinicsEntityBase<AnnualAttendancesSc> {
    constructor(client: ChineseMedicineClinicsSDK, entopts: any);
    make(this: AnnualAttendancesScEntity): AnnualAttendancesScEntity;
    list(this: any, reqmatch?: AnnualAttendancesScListMatch, ctrl?: Control): Promise<AnnualAttendancesScEntity[]>;
}
export { AnnualAttendancesScEntity };
