import { createContext, useReducer } from "react";

const listMock = [{
    "id": 1,
    "details": "Do muscle training",
    "period": "week",
    "events": 5,
    "icon": "public/icons/gym.svg",
    "iconAlt": "gymSVG",
    "goal": 7,
    "goalName": "Gym",
    "deadline": "2025-12-31",
    "timesCompleted": 5,
},
{
    "id": 2,
    "details": "Eat healthy for 6 days",
    "period": "week",
    "events": 5,
    "icon": "public/icons/apple.svg",
    "iconAlt": "appleSVG",
    "goal": 6,
    "goalName": "Health",
    "deadline": "2025-12-31",
    "timesCompleted": 5,
},
{
    "id": 3,
    "details": "Read 5 pages daily",
    "period": "week",
    "events": 4,
    "icon": "public/icons/book.svg",
    "iconAlt": "bookVG",
    "goal": 7,
    "goalName": "Reading",
    "deadline": "2025-12-31",
    "timesCompleted": 4,
}]

const initialState = {
    order: [],
    objects: {}
}

const Reducer = ( state, action ) => {
    switch ( action.type ) {
        case 'addGoal': {
            const goals = action.goals
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }), {})
            }
            return newState

        }
        case 'addNewGoal' : {
            const id = Math.random()
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            }
            return newState
        }

        case 'removeGoal' : {

            return newState
        }
        case 'updateGoal' : {

            return newState
        }
        default: {
            return state
        }   

    }
}

const goals = Reducer(initialState, { type: 'addGoal', goals: listMock })

export const GoalContext = createContext(null)

export const GoalMemory = ({ children }) => {
    const [state, dispatch] = useReducer( Reducer, goals )
    return (
        <GoalContext.Provider value={[ state, dispatch ]}>
            {children}
        </GoalContext.Provider>
    )
}