import { ChineseMedicineClinicsEntityBase } from '../ChineseMedicineClinicsEntityBase';
import type { ChineseMedicineClinicsSDK } from '../ChineseMedicineClinicsSDK';
import type { Control } from '../types';
import type { AnnualAttendancesTc, AnnualAttendancesTcListMatch } from '../ChineseMedicineClinicsTypes';
declare class AnnualAttendancesTcEntity extends ChineseMedicineClinicsEntityBase<AnnualAttendancesTc> {
    constructor(client: ChineseMedicineClinicsSDK, entopts: any);
    make(this: AnnualAttendancesTcEntity): AnnualAttendancesTcEntity;
    list(this: any, reqmatch?: AnnualAttendancesTcListMatch, ctrl?: Control): Promise<AnnualAttendancesTcEntity[]>;
}
export { AnnualAttendancesTcEntity };
