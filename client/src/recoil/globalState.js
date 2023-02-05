import {atom} from "recoil"

export const TasksState = atom({
    key: 'taskState',
    default: [],
  });