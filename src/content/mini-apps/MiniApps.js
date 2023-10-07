import './MiniApps.css';
import TodoApp from './apps/todo/TodoApp';
import Counter from './apps/counter/Counter';

function MiniApps() {
  return (
    <div className="mini-apps">
      <TodoApp />
      <Counter />
    </div>
  );
}

export default MiniApps;
