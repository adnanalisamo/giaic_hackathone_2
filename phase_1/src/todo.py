class Todo:
    def __init__(self, id: int, title: str, completed: bool = False):
        # Validate ID: must be a non-negative integer
        if not isinstance(id, int) or id < 0:
            raise ValueError("Todo ID must be a non-negative integer.")
        # Validate title: must be a non-empty string
        if not isinstance(title, str) or not title.strip():
            raise ValueError("Todo title cannot be empty.")
        # Validate completed status: must be a boolean
        if not isinstance(completed, bool):
            raise ValueError(
                "Todo completed status must be a boolean."
            )

        self.id = id
        self.title = title
        self.completed = completed

    def __str__(self):
        status = "[x]" if self.completed else "[ ]"
        return f"{self.id}. {status} {self.title}"

    def __repr__(self):
        return f"Todo(id={self.id}, title='{self.title}', completed={self.completed})"
