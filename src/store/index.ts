import { reactive } from 'vue';
import ics from 'ics-in-browser';

interface State {
  isDropped: boolean;
}

const state = reactive<State>({
  isDropped: false,
});

export const store = {
  state,
  cal: ics(),
  fileDropped: () => (state.isDropped = true),
  resetCal: () => (store.cal = ics()),
};
