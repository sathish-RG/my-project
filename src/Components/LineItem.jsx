
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li
              className="h-16 flex flex-row items-center justify-between p-5 bg-slate-400 hover:bg-slate-200 mt-1"
              key={item.id}
            >
              <input
                type="checkbox"
                checked={item.checked}
                className="w-6 h-6" // Adjusted class name for checkbox size
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                className="text-xl text-blue-950 hover:text-red-600" // Adjusted icon size
                onClick={() => handleDelete(item.id)}
                aria-label={`delete ${item.item}`}
              />
            </li>
  )
}

export default LineItem