// Node build:  node build.js
// Reads exam-master.js and writes:
//   ../site/questions.js          (public — no answers)
//   ../apps-script/AnswerKey.gs   (private — paste into Apps Script)
//   ./answer-key.js               (private — lets index.html mark locally for your own preview)
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = { window: {}, globalThis: {} }; vm.createContext(ctx);
// optional drawing helpers (e.g. helpers/logic-draw.js) are loaded before the questions
const HELP = path.join(__dirname, 'helpers');
if (fs.existsSync(HELP)) fs.readdirSync(HELP).filter(f => f.endsWith('.js')).sort().forEach(f => vm.runInContext(fs.readFileSync(path.join(HELP, f), 'utf8'), ctx, { filename: f }));
vm.runInContext(fs.readFileSync(path.join(__dirname, 'exam-master.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'build-lib.js'), 'utf8'), ctx);
const out = ctx.window.buildOutputs(ctx.window.EXAM_MASTER);
if (out.problems.length) { console.error('Problems:\n  ' + out.problems.join('\n  ')); process.exit(1); }
fs.writeFileSync(path.join(__dirname, '..', 'site', 'questions.js'), out.questionsJs);
fs.writeFileSync(path.join(__dirname, '..', 'apps-script', 'AnswerKey.gs'), out.keyGs);
fs.writeFileSync(path.join(__dirname, 'answer-key.js'), out.keyGs);
// Keep the Apps Script copy of the marking engine in step with the site's copy.
fs.copyFileSync(path.join(__dirname, '..', 'site', 'marking.js'), path.join(__dirname, '..', 'apps-script', 'Marking.gs'));
console.log(`Built: ${out.questionCount} questions, ${out.partCount} parts, ${out.total} marks`, out.bySection);
