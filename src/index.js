import C from './constants'
import { errors } from './store/reducers'

const state = [
	"user not authorized",
	"Server feed not found"
]

const action = {
	type: C.ADD_ERROR,
	payload: "Cannot connect to server"
}

const clearAction = {
	type: C.CLEAR_ERROR,
	payload: 0
}



const nextState = errors(state, clearAction)

console.log(`

		initial state: ${state}
		action: ${JSON.stringify(action)}
		new state: ${JSON.stringify(nextState)}

	`)