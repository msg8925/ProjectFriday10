/**
 * SETTINGS FOR THIS TEST — edit these, then Deploy → Manage deployments → New version.
 * (Code.gs, Marking.gs are the same for every test; AnswerKey.gs comes from the build.)
 */
var CONFIG = {
  TEACHER_EMAIL: 't.michael@merittonbritish.com',
  SHARED_KEY: 'change-this-to-a-random-phrase',   // must match sharedKey in config.js
  START_CODE: 'IGCSE10',                          // tell students in the lesson. '' = no start code needed
  ONE_ATTEMPT_PER_EMAIL: true,                    // false = allow retakes (they are still numbered in the sheet)
  SEND_TO_STUDENT: true,                          // email the two PDFs to the student too
  SHOW_SOLUTIONS: true,                           // false = students see ticks and crosses but not the correct answers
  SAVE_TO_DRIVE: true,
  DRIVE_FOLDER_NAME: 'Y10 CS Progress Test 1 — PDFs',
  RESULTS_SHEET: 'Results',
  QUESTIONS_SHEET: 'By question',
  STARTED_SHEET: 'Started',
  SENDER_NAME: 'Mr Gibbs — Computer Science',           // the "from" name on emails to students
  SIGN_OFF: 'Mr Gibbs',                            // how the student email is signed
  GRACE_MINUTES: 3                                 // "Notes" flags hand-ins later than the time limit + this
};
