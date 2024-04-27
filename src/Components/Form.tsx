import { useState } from "react"
import { categories } from "../Data/Categories"
const Form = () => {

    const [activity, setActivity] = useState({
        category: 2,
        name: '',
        calories: 0
    })

    return (
        <form
        className="space-y-5 bg-white shadow p-10 rounded-lg "
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                className="border bordel-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
                >
                    {categories.map(category =>(
                        <option key={category.id}>
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
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input id="calories" className="border bordel-slate-300 p-2 rounded-lg w-full bg-white"
                type="number"
                placeholder="Ej. 508"
                value={activity.calories}
                />
            </div>
            <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-sm"
                    value='Guardar comida o ejercicio'
            />
        </form>
    )
}

export default Form