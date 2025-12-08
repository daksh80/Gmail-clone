import { createAction, props } from "@ngrx/store";

export const setSelectedSectionEmails = createAction(
    '[Gmail] Set Selected Section Emails',
    props<{ emails: any[] }>()
);
export const clearSelectedSectionEmails = createAction(
    '[Gmail] Clear Selected Section Emails'
);