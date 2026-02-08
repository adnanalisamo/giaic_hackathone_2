# Tasks: In-Memory Python Console Todo App (Phase I)

**Input**: Design documents from `/specs/001-console-todo-app/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: The current plan does not explicitly request test tasks. However, the plan.md has a "NEEDS CLARIFICATION" for the test framework, which is addressed in the final phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

-   **[P]**: Can run in parallel (different files, no dependencies)
-   **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
-   Include exact file paths in descriptions

## Path Conventions

-   **Single project**: `src/`, `tests/` at repository root
-   Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Python 3.13+ environment with UV and install necessary tools (project root)
- [x] T002 Create initial project folder structure: `src/`, `tests/unit/`, `tests/integration/` (project root)
- [x] T003 Configure linting and formatting tools (e.g., Black, Flake8) (project root)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create `src/todo.py` for `Todo` class with `id` (integer), `title` (string), `completed` (boolean) attributes, constructor, and `__str__` representation.
- [x] T005 Create `src/utils.py` for helper functions, including a unique integer ID generator that ensures no collisions within the in-memory store.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Add Todo (Priority: P1) 🎯 MVP

**Goal**: User can add a new todo item to the application.

**Independent Test**: Can be fully tested by adding a todo item and then verifying its existence through the "View Todos" functionality.

### Implementation for User Story 1

- [x] T006 [US1] Implement `add_todo(title: str)` method in `src/todo_manager.py` to create a new `Todo` item using `src/utils.py`'s ID generator and add it to an in-memory list.
- [x] T007 [US1] Integrate `add_todo` with input validation from `src/utils.py` to ensure the title is not empty.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Todos (Priority: P1)

**Goal**: User can view a list of all existing todo items.

**Independent Test**: Can be fully tested by adding multiple todo items and then listing them, verifying all items appear correctly with their details.

### Implementation for User Story 2

- [x] T008 [US2] Implement `view_todos()` method in `src/todo_manager.py` to return all stored `Todo` items.
- [x] T009 [US2] Create a function in `src/main.py` or a display utility to format `Todo` items for human-readable console output.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Update Todo (Priority: P2)

**Goal**: User can modify the description of an existing todo item.

**Independent Test**: Can be fully tested by adding a todo, updating its description using its unique ID, and then viewing the todo to confirm the change.

### Implementation for User Story 3

- [x] T010 [US3] Implement `update_todo(todo_id: int, new_title: str)` method in `src/todo_manager.py` to find and modify a `Todo` item's description by its ID.
- [x] T011 [US3] Integrate `update_todo` with input validation from `src/utils.py` to ensure a valid `todo_id` exists and `new_title` is not empty.

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently

---

## Phase 6: User Story 4 - Mark Todo Complete/Incomplete (Priority: P2)

**Goal**: User can change the completion status of a todo item.

**Independent Test**: Can be fully tested by adding a todo, marking it complete/incomplete using its unique ID, and then viewing the todo to confirm the status change.

### Implementation for User Story 4

- [x] T012 [US4] Implement `mark_complete(todo_id: int, status: bool)` method in `src/todo_manager.py` to find and change a `Todo` item's completion status by its ID.
- [x] T013 [US4] Integrate `mark_complete` with input validation from `src/utils.py` to ensure a valid `todo_id` exists.

**Checkpoint**: At this point, User Stories 1, 2, 3 AND 4 should all work independently

---

## Phase 7: User Story 5 - Delete Todo (Priority: P2)

**Goal**: User can remove an existing todo item.

**Independent Test**: Can be fully tested by adding a todo, deleting it using its unique ID, and then verifying it no longer appears in the list of todos.

### Implementation for User Story 5

- [x] T014 [US5] Implement `delete_todo(todo_id: int)` method in `src/todo_manager.py` to find and remove a `Todo` item by its ID from the in-memory list.
- [x] T015 [US5] Integrate `delete_todo` with input validation from `src/utils.py` to ensure a valid `todo_id` exists.

**Checkpoint**: All user stories should now be independently functional

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T016 Implement main CLI loop in `src/main.py`: display menu, get user input, map commands to `todo_manager` functions, and loop until an exit command.
- [x] T017 Implement graceful error handling and clear console feedback in `src/main.py` for all operations, including invalid commands, non-existent IDs, and incorrect input types.
- [x] T018 Ensure PEP 8 compliance across all Python files (`src/`).
- [x] T019 Add inline comments where logic is non-obvious across all Python files (`src/`).
- [x] T020 Address `NEEDS CLARIFICATION` from `plan.md`: Research best practices for Python CLI testing frameworks (e.g., `pytest`, `unittest`) and propose a choice, then update `plan.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately.
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
-   **User Stories (Phase 3-7)**: All depend on Foundational phase completion.
    *   User stories can then proceed in parallel (if staffed).
    *   Or sequentially in priority order (P1 → P2 → P3).
-   **Polish (Final Phase)**: Depends on all desired user stories being complete.

### User Story Dependencies

-   All user stories (Add, View, Update, Mark Complete/Incomplete, Delete) are designed to be largely independent after the Foundational Phase. They can be implemented in parallel.

### Within Each User Story

-   Models before services.
-   Services before endpoints/CLI integration.
-   Input validation and error handling as part of each operation.

### Parallel Opportunities

-   Tasks within **Phase 1 (Setup)** (T001, T002, T003) can be worked on sequentially or in parallel.
-   Tasks within **Phase 2 (Foundational)** (T004, T005) can be worked on sequentially or in parallel once setup is complete.
-   Once the Foundational phase is complete, different user stories (Phases 3-7) can be implemented in parallel by different team members.
-   Within each user story, implementation tasks can be done in parallel where file conflicts are minimal (e.g., `todo.py` and `utils.py` can be developed independently at first, and then `todo_manager.py` can use them).

---

## Parallel Example: User Story 1 (Add Todo)

```bash
# Example of parallel work for User Story 1:
# Developer A:
Task: "T006 [US1] Implement `add_todo(title: str)` method in `src/todo_manager.py` to create and store a new `Todo` item using `src/utils.py`'s ID generator and add it to an in-memory list."

# Developer B:
Task: "T007 [US1] Integrate `add_todo` with input validation from `src/utils.py` to ensure the title is not empty."
```

---

## Implementation Strategy

### MVP First (User Story 1 & 2 only)

1.  Complete Phase 1: Setup.
2.  Complete Phase 2: Foundational (CRITICAL - blocks all stories).
3.  Complete Phase 3: User Story 1 (Add Todo).
4.  Complete Phase 4: User Story 2 (View Todos).
5.  **STOP and VALIDATE**: Test Add and View functionalities independently.
6.  Deploy/demo if ready.

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready.
2.  Add User Story 1 (Add Todo) → Test independently → Deploy/Demo (MVP!).
3.  Add User Story 2 (View Todos) → Test independently → Deploy/Demo.
4.  Add User Story 3 (Update Todo) → Test independently → Deploy/Demo.
5.  Add User Story 4 (Mark Complete/Incomplete) → Test independently → Deploy/Demo.
6.  Add User Story 5 (Delete Todo) → Test independently → Deploy/Demo.
7.  Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together.
2.  Once Foundational is done:
    *   Developer A: User Stories 1 & 2 (P1 tasks)
    *   Developer B: User Stories 3 & 4 (P2 tasks)
    *   Developer C: User Story 5 (P2 task)
3.  Stories complete and integrate independently.

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Verify tests fail before implementing (if test tasks are added later)
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
