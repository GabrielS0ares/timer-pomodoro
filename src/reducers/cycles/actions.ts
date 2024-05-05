import { Cycle } from './reducer'

export enum ActionTypes {
  addNewCycle = 'addNewCycle',
  removeCurrentCycle = 'removeCurrentCycle',
  finishedCurrentCycle = 'finishedCurrentCycle',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.addNewCycle,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.finishedCurrentCycle,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.removeCurrentCycle,
  }
}
