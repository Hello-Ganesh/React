const WelcomeMessage = ({ todoItems }) => {
  return (
    <>{todoItems.length === 0 && <h4>Hurray! Your task is finished</h4>}</>
  );
};
export default WelcomeMessage;
