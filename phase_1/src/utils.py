class IdGenerator:
    _current_id = 0

    @classmethod
    def generate_id(cls) -> int:
        cls._current_id += 1
        return cls._current_id

    @classmethod
    def reset(cls):
        cls._current_id = 0


def validate_non_empty_string(value: str, field_name: str = "value"):
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"{field_name} cannot be empty.")


def validate_todo_id(todo_id: any) -> int:
    if not isinstance(todo_id, int) or todo_id <= 0:
        raise ValueError(
            "Todo ID must be a positive integer."
        )
    return todo_id
