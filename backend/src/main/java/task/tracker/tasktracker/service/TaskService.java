package task.tracker.tasktracker.service;

import org.springframework.stereotype.Service;
import task.tracker.tasktracker.model.Task;
import task.tracker.tasktracker.repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAll() {
        return repo.findAll();
    }

    public Task create(Task task) {
        return repo.save(task);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
