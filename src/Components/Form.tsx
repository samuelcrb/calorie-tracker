import { ChangeEvent, Dispatch, FormEvent, useState } from "react"
import {v4 as uuidv4} from 'uuid'
import { categories } from "../Data/Categories"
import { Activity } from "../Types/Idex"
import { ActivityActions } from "../Reducers/activity.reducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

const Form = ({ dispatch }: FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target?.id]: isNumberField ? +e.target?.value : e.target?.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: 'save-activity', payload: { newActivity: activity }})
        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        <form
        className="space-y-5 bg-white shadow p-10 rounded-lg "
        onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                className="border bordel-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
                onChange={handleChange}
                >
                    {categories.map(category =>(
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input id="name" className="border bordel-slate-300 p-2 rounded-lg w-full bg-white"
                        placeholder="Ej. Comidas, Cardio, Entrenamiento"
                        value={activity.name}
                        onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input id="calories" className="border bordel-slate-300 p-2 rounded-lg w-full bg-white"
                type="number"
                placeholder="Ej. 508"
                value={activity.calories}
                onChange={handleChange}
                />
            </div>
            <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-sm disabled:opacity-10"
                    value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                    disabled={!isValidActivity()}
            />
        </form>
    )
}

export default Form