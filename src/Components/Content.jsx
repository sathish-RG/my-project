
import ItemsList from "./ItemsList";

const Content = ({items, handleCheck, handleDelete }) => {// Destructured props
  return (
    <div className="flex flex-col">
    
      {items.length ? (
        <ItemsList
         items={items}
  handleCheck={handleCheck}
  handleDelete={handleDelete}
 />
      ) : (
        <p className="flex items-center justify-center">Your list is empty</p>
      )}
    </div>
  );
};

export default Content;
