export interface SharedState {
  isSpinnerVisible: boolean;
  isDarkMode: boolean;
}

export const initialState: SharedState = {
  isSpinnerVisible: false,
  isDarkMode: false,
};

export const sharedFeatureKey = 'shared';
