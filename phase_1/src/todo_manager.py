from typing import List, Optional
from src.todo import Todo
from src.utils import IdGenerator, validate_non_empty_string, validate_todo_id


class TodoManager:
    def __init__(self):
        self._todos: List[Todo] = []
        # Ensure ID generation starts fresh with each manager instance
        IdGenerator.reset()

    def add_todo(self, title: str) -> Todo:
        validate_non_empty_string(title, "Todo title")
        new_id = IdGenerator.generate_id()
        todo = Todo(new_id, title)
        self._todos.append(todo)
        return todo

    def get_todo_by_id(self, todo_id: int) -> Optional[Todo]:
        validate_todo_id(todo_id)
        # Iterate through the list to find the todo by its ID
        for todo in self._todos:
            if todo.id == todo_id:
                return todo
        return None

    def view_todos(self) -> List[Todo]:
        # Return all todos sorted by ID for consistent display
        return sorted(self._todos, key=lambda t: t.id)

    def update_todo(self, todo_id: int, new_title: str) -> Optional[Todo]:
        validate_todo_id(todo_id)
        validate_non_empty_string(new_title, "New todo title")
        todo = self.get_todo_by_id(todo_id)
        if todo:
            todo.title = new_title
            return todo
        return None

    def mark_complete(self, todo_id: int, status: bool) -> Optional[Todo]:
        validate_todo_id(todo_id)
        if not isinstance(status, bool):
            raise ValueError("Status must be a boolean (True/False).")
        todo = self.get_todo_by_id(todo_id)
        if todo:
            todo.completed = status
            return todo
        return None

    def delete_todo(self, todo_id: int) -> bool:
        validate_todo_id(todo_id)
        original_count = len(self._todos)
        # Filter out the todo with the specified ID
        filtered_todos = []
        for todo in self._todos:
            if todo.id != todo_id:
                filtered_todos.append(todo)
        self._todos = filtered_todos
        # Return True if a todo was actually removed
        return len(self._todos) < original_count
