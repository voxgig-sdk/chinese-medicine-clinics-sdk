import { ChineseMedicineClinicsEntityBase } from '../ChineseMedicineClinicsEntityBase';
import type { ChineseMedicineClinicsSDK } from '../ChineseMedicineClinicsSDK';
import type { Control } from '../types';
import type { AnnualAttendancesEn, AnnualAttendancesEnListMatch } from '../ChineseMedicineClinicsTypes';
declare class AnnualAttendancesEnEntity extends ChineseMedicineClinicsEntityBase<AnnualAttendancesEn> {
    constructor(client: ChineseMedicineClinicsSDK, entopts: any);
    make(this: AnnualAttendancesEnEntity): AnnualAttendancesEnEntity;
    list(this: any, reqmatch?: AnnualAttendancesEnListMatch, ctrl?: Control): Promise<AnnualAttendancesEnEntity[]>;
}
export { AnnualAttendancesEnEntity };
