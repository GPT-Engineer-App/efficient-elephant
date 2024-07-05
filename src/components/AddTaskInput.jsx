import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTaskInput = () => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      // Add task logic here
      setTaskName("");
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <Input
        placeholder="Add a task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default AddTaskInput;