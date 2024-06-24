import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newTaskCtrl = new FormControl('',
    {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]
    }
  );

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar Angular CLI',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: true
    }
  ]);

  filter = signal<string>('all');

  tasksByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();

    if (filter === 'all') {
      return tasks;
    } else {
      const filterTask = filter === 'completed';
      return tasks.filter(task => task.completed === filterTask);
    }
  })

  constructor() {
    effect(() => {
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  ngOnInit(): void {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  changeHandler = () => {
    if (this.newTaskCtrl.valid) {
      const isValid = this.newTaskCtrl.value.trim();
      if (isValid) {
        this.addTask(this.newTaskCtrl.value);
      }
      this.newTaskCtrl.reset();
    }
  }

  addTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask = (index: number) => {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTaskCompleted = (index: number) => {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        return {
          ...task,
          completed: position === index ? !task.completed : task.completed
        }
      })
    });

    /* this.tasks.mutate(state => {
      const currentTask = state[index];
      state[index] = {
        ...currentTask,
        completed: !currentTask.completed
      }
    }); */
  }

  editingTask = (index: number) => {
    console.log('index => ', index)
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        return {
          ...task,
          editing: position === index
        }
      })
    });
  }

  updateTitleTask = (index: number, title: Event) => {
    const newTitle = (title.target as HTMLInputElement).value;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        return {
          ...task,
          title: position === index ? newTitle : task.title,
          editing: false
        }
      })
    });
  }

  changeFilter = (filter: string) => {
    this.filter.set(filter);
  }

  clearTaskCompleted = () => {
    this.tasks.update((tasks) => tasks.filter((task) => !task.completed));
  }

}
