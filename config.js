/* =====================================================================
   TEST SETTINGS — safe to edit. Upload this file with index.html.
   (The timer length, grade boundaries and questions live in
    teacher-only/exam-master.js — run the build after changing them.)
   ===================================================================== */
window.TEST_CONFIG = {
  schoolName: 'Meritton British International School',

  // Google Apps Script web-app URL (README, step 2). While this is not set, the page
  // marks locally using teacher-only/answer-key.js, so you can preview it on your own computer.
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbycV8hligJDrR0Q90oiaff_y7M-SCgILDYBNq4op90UUeho3xwqRkIzjHgcAdOi4eQh/exec',
  // Must match SHARED_KEY in Code.gs. Stops random people posting to your script.
  sharedKey: 'g7dD@#F90Dh32n$H5H30!JFF!d-!5#l',

  // Show a "Start code" box. Set the code itself in Code.gs (START_CODE) so students can't read it here.
  askStartCode: true,

  // Only allow school email addresses, e.g. 'merittonbritish.com'. Leave '' to allow any address.
  requiredEmailDomain: '',

  // On-screen warnings (minutes left). The test hands itself in at 0:00.
  warnAtMinutes: [5, 1],

  // Visiting  index.html?reset=THIS-CODE  clears the saved test on that computer
  // (after your own trial run, or if a student needs a fresh start).
  resetCode: 'mbis-reset-2026',

  // Where the local-preview answer key lives (only used while appsScriptUrl is not set).
  localKeyPath: '../teacher-only/answer-key.js'
};
