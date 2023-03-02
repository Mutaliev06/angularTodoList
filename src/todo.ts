export class Todo {
  'text': string;
  'date': string;
  'completed': boolean
}

export const todos:Todo[] = [
  {
    text: 'выполнить задачу',
    date: '23.02.2023',
    completed: true
  },
  {
    text: 'создать компонент',
    date: '26.02.2023',
    completed: false
  }
]
