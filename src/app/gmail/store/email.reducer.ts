import { createReducer, on } from "@ngrx/store";
import * as EmailActions from "./email.actions";

export interface EmailState {
    selectedSectionEmails: any[];
}

export const initialState: EmailState = {
    selectedSectionEmails: []
};

export const emailReducer = createReducer(
    initialState,
    on(EmailActions.setSelectedSectionEmails, (state, { emails }) => ({
        ...state,
        selectedSectionEmails: emails
    })),
    on(EmailActions.clearSelectedSectionEmails, (state) => ({
        ...state,
        selectedSectionEmails: []
    }))
);