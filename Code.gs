function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Lesson Presenter Demo');
}

function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

/**
 * Public demo data contract.
 * Replace this fallback with a Sheets repository adapter without changing the UI.
 */
function getLessonData() {
  return {
    class: { id: 'ENG10-A', name: 'English 10A' },
    lesson: {
      id: 'NW-01',
      title: 'Building Effective Openings',
      objective: 'Craft an opening that establishes voice, setting and tension.',
      sequence: [
        { type: 'notice', label: 'Notice', prompt: 'What makes an opening create questions for the reader?' },
        { type: 'experiment', label: 'Experiment', prompt: 'Rewrite a neutral opening using one deliberate technique.' },
        { type: 'draft', label: 'Draft', prompt: 'Write an 80-word opening.' },
        { type: 'reflect', label: 'Reflect', prompt: 'Identify the choice that had the greatest effect.' }
      ]
    },
    participants: ['Alex', 'Jamie', 'Morgan', 'Sam', 'Taylor', 'Jordan']
  };
}
