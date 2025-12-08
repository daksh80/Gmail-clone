import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmailState } from "./email.reducer";

export const selectEmailState = createFeatureSelector<EmailState>('gmail');

export const selectSelectedSectionEmails = createSelector(
    selectEmailState,
    (state: EmailState) => state.selectedSectionEmails
);