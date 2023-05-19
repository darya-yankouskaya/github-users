export interface SharedState {
  isSpinnerVisible: boolean;
}

export const initialState: SharedState = {
  isSpinnerVisible: false,
};

export const sharedFeatureKey = 'shared';
