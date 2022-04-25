export const createStore = (reducer, preloadedState) => {
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []

  const getState = () => {
    // q1
  }

  const subscribe = (listener) => {
    // q3
  }

  const dispatch = (action) => {
    // q2

    const listeners = currentListeners
    // q3
  }

  return {
    dispatch,
    subscribe,
    getState,
  }
}
