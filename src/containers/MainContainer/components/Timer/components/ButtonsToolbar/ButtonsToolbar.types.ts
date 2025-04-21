export interface ButtonsToolbarProps {
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
  handleUpdateTimer: (newValue: number) => void;
}
