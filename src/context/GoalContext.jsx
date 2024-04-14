import { createContext, useReducer } from "react";

const memory = localStorage.getItem('goals')
const initialState = memory 
    ? JSON.parse(memory) 
    : {
    order: [],
    objects: {}
    }

const reducer = ( state, action ) => {
    switch ( action.type ) {
        case 'addGoal': {
            const goals = action.goals
            const newState = {
                order: goals.map((goal) => goal.id),
                objects: goals.reduce(
                    (object, goal) => ({ ...object, [goal.id]: goal }), 
                    {}
                ),
            }

            localStorage.setItem('goals', JSON.stringify(newState))
            return newState

        }
        case 'addNewGoal' : {
            const id = String(Math.floor(Math.random()*101))

            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: {id, ...action.goal},
                },
            }

            localStorage.setItem('goals', JSON.stringify(newState))
            return newState
        }
        case 'updateGoal' : {
            //* Obtenemos el id de la meta
            const id = action.goal.id
            
            //* Actualizamos la meta
            state.objects[id] = {
                //* Creamos una copia de la meta actual
                ...state.objects[id],
                //* Actualizamos la meta con la nueva informacion
                ...action.goal,
            }
            const newState = { ...state }
            
            localStorage.setItem('goals', JSON.stringify(newState))            
            return newState
        }
        case 'deleteGoal' : {
            //* Obtenemos el id de la meta
            const id = action.id
            //* Actualizamos el orden porque al borrar una meta, el orden cambia
            const newOrder = state.order.filter((orderId) => orderId != id)
            //* Borramos la meta
            delete state.objects[id]
            //* Creamos un nuevo estado
            const newState = {
                order: newOrder,
                objects: state.objects,
            }

            localStorage.setItem('goals', JSON.stringify(newState))
            return newState
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }   
        
    }
}

export const GoalContext = createContext(null)

export const GoalMemory = ({ children }) => {
    const value = useReducer( reducer, initialState )
    return (
        <GoalContext.Provider value={ value }>
            {children}
        </GoalContext.Provider>
    )
}