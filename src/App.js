import List from "./components/List";
import { data } from "./utils/data";

const App = () => {
  return (
    <div>
      <List items={data} />
    </div>
  );
};

export default App;
