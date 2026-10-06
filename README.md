# Lesson Presenter Demo

A public, sanitized demonstration of a browser-based lesson presentation system built around Google Apps Script.

## What it demonstrates
- Google Apps Script web-app architecture
- A structured lesson data layer rather than hard-coded slides
- Learning objectives, sequenced activities and resources
- Presentation mode and classroom interaction tools
- A random participant picker
- A design that can share a Google Sheets database with the Lesson Planner

## Architecture
```
Google Sheets (synthetic portfolio data)
        ↓
Apps Script data/service layer
        ↓
Lesson Presenter web app
        ↓
Presentation + classroom interactions
```

The demo currently includes an in-code synthetic fallback dataset so it can be inspected without a Sheet. The data contract is intentionally separated so a personal Google Sheet can be connected without redesigning the UI.

## Privacy
This repository contains no real student data, school identifiers, credentials, private Drive IDs, licensed teaching materials or production configuration. Names and records are fictional.

## Related project
Designed to share its data model with `lesson-planner-demo`.
