import C from './constants'
import initialstate from './initialstate.json'
import appReducer  from './store/reducers'
import { createStore } from 'redux'

const store = createStore(appReducer, initialstate)

console.log('initial state', store.getState())

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		resort: "Mt Shasta",
		date: "2016-10-28",
		powder: false,
		backcountry: true
	}
})

console.log('next state', store.getState())
