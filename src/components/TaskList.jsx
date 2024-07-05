import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", completed: false },
    { id: 2, name: "Sample Task 2", completed: true },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-2 border rounded"
        >
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => handleToggleComplete(task.id)}
            />
            <span className={task.completed ? "line-through" : ""}>
              {task.name}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDelete(task.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;