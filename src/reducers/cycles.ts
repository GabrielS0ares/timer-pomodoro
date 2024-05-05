export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate?: Date | undefined
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export enum ActionTypes {
  addNewCycle = 'addNewCycle',
  removeCurrentCycle = 'removeCurrentCycle',
  finishedCurrentCycle = 'finishedCurrentCycle',
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.addNewCycle:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.removeCurrentCycle:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle?.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    case ActionTypes.finishedCurrentCycle:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle?.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
