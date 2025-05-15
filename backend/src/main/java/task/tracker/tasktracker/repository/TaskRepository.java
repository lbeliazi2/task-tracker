package task.tracker.tasktracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import task.tracker.tasktracker.model.Task;

@Component
public interface TaskRepository extends JpaRepository<Task, Long> {}

