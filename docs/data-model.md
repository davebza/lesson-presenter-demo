# Shared Planner / Presenter Data Model

The public portfolio versions of Lesson Planner and Lesson Presenter are designed to use the same synthetic Google Sheets database.

## Proposed tables

### Courses
`course_id | course_name | duration_months | active`

### Units
`unit_id | course_id | title | sequence | start_date | end_date`

### Lessons
`lesson_id | unit_id | lesson_date | title | objective | sequence | status`

### Activities
`activity_id | lesson_id | sequence | type | label | prompt | resource_id`

### Resources
`resource_id | title | type | url | notes`

### Classes
`class_id | course_id | display_name`

### Participants
For the public demo only, fictional display names can support interaction demonstrations:
`participant_id | class_id | display_name | active`

## Design principle
The Planner writes/edits structured lesson records. The Presenter reads the same records and turns them into a classroom-facing presentation. UI code should not need to know whether data came from a Sheet or the fallback demo repository.
