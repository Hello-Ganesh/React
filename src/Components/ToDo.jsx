import AddMenu from "./AddMenu";

const ToDo = ({ todoItems, onDeleteItem }) => {
  return (
    <>
      {todoItems.map((items) => (
        <AddMenu
          todoName={items.name}
          todoDate={items.date}
          onDeleteItem={onDeleteItem}
          key={items.name}
        />
      ))}
    </>
  );
};
export default ToDo;
