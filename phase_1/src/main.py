from src.todo_manager import TodoManager
from src.todo import Todo

import sys


def display_todos(todos: list[Todo]):
    # Display a formatted list of todo items
    if not todos:
        print("No todo items found.")
        return

    print("\n--- Current Todos ---")
    for todo in todos:
        print(todo)  # Todo.__str__ handles the formatting
    print("---------------------\n")


def print_menu():
    # Print the main menu options to the console
    print("1. Add Todo")
    print("2. View Todos")
    print("3. Update Todo Description")
    print("4. Mark Todo Complete/Incomplete")
    print("5. Delete Todo")
    print("6. Exit")
    print("\nEnter your choice: ", end="")


def main():
    # Initialize the TodoManager to handle all todo operations
    todo_manager = TodoManager()

    # Main application loop
    while True:
        print_menu()
        choice = input().strip()

        if choice == "1":
            title = input("Enter todo title: ").strip()
            try:
                # Attempt to add a new todo
                todo = todo_manager.add_todo(title)
                print(f"Added: {todo}")
            except ValueError as e:
                # Handle validation errors for todo title
                print(f"Error: {e}")
        elif choice == "2":
            # Display all current todos
            display_todos(todo_manager.view_todos())
        elif choice == "3":
            try:
                todo_id = int(input("Enter ID of todo to update: ").strip())
                new_title = input("Enter new title: ").strip()
                # Attempt to update a todo's description
                updated_todo = todo_manager.update_todo(todo_id, new_title)
                if updated_todo:
                    print(f"Updated: {updated_todo}")
                else:
                    # Provide feedback if todo ID is not found
                    print(f"Error: Todo with ID {todo_id} not found.")
            except ValueError as e:
                # Handle invalid input for todo ID or other validation errors
                print(f"Error: {e}")
        elif choice == "4":
            try:
                todo_id = int(input("Enter ID of todo to mark: ").strip())
                status_input = (
                    input("Mark as (c)omplete or (i)ncomplete? ").strip().lower()
                )
                status = None
                if status_input == "c":
                    status = True
                elif status_input == "i":
                    status = False
                else:
                    # Handle invalid status input
                    print("Invalid status input. Please enter 'c' or 'i'.")
                    continue

                # Attempt to mark a todo as complete or incomplete
                marked_todo = todo_manager.mark_complete(todo_id, status)
                if marked_todo:
                    print(f"Status updated: {marked_todo}")
                else:
                    # Provide feedback if todo ID is not found
                    print(f"Error: Todo with ID {todo_id} not found.")
            except ValueError as e:
                # Handle invalid input for todo ID or other validation errors
                print(f"Error: {e}")
        elif choice == "5":
            try:
                todo_id = int(input("Enter ID of todo to delete: ").strip())
                # Attempt to delete a todo
                if todo_manager.delete_todo(todo_id):
                    print(f"Todo with ID {todo_id} deleted.")
                else:
                    # Provide feedback if todo ID is not found
                    print(f"Error: Todo with ID {todo_id} not found.")
            except ValueError as e:
                # Handle invalid input for todo ID
                print(f"Error: {e}")
        elif choice == "6":
            # Exit the application
            print("Exiting Todo App. Goodbye!")
            sys.exit(0)
        else:
            # Handle invalid menu choice
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
