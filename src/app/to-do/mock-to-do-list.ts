import { ToDoItem } from "./to-do-item";

export const TODOLIST: ToDoItem[] = [
  {
    id: 1,
    title: 'Homework',
    description: 'Doing math homework.',
    dueDate: new Date('December 3, 2021 00:00:00'),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: 'Restock the Refrigerator',
    description: 'Restock food for a whole month.',
    dueDate: new Date('December 7, 2021 00:00:00'),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: 'Physics Project',
    description: 'Create a simple two-legged robot.',
    dueDate: new Date('December 1, 2021 00:00:00'),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    title: 'Vacation to Bali',
    description: 'Made a promise with friends to visit Bali.',
    dueDate: new Date('December 8, 2021 00:00:00'),
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
