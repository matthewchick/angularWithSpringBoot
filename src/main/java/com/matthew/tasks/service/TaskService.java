package com.matthew.tasks.service;

import com.matthew.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();
    Task save(Task task);
}
