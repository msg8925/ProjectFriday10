/* =====================================================================
   Y10 Cambridge IGCSE Computer Science (0478) — Progress Test 1
   MASTER QUESTION BANK + MARK SCHEME  (TEACHER ONLY — DO NOT UPLOAD)
   ---------------------------------------------------------------------
   Edit questions here, then run the build (node build.js, or open
   build.html in a browser). The build writes:
     site/questions.js          questions only, NO answers  → GitHub
     apps-script/AnswerKey.gs   answers + solutions         → Apps Script
     teacher-only/answer-key.js same key, for local preview only

   Part types (every one is marked automatically, no typing):
     mcq      options: [{text, code?, html?}], correct: index. grid:true = picture options
     select   drop-down gaps. template with {{0}},{{1}}.. ; gaps: [{options:[...], ans:'value'}]
              code:true shows the template as pseudocode; otherwise the template is HTML
     tick     table of radio buttons. columns: [...], rows: [{text, ans: columnIndex}]
     match    drop-down matching. items: [{text, ans: optionIndex}], options: [...]
     order    put in order. items: [...] written in the CORRECT order (shuffled for students)
     bits     click bits on/off. ans: '00001101' (4–16 bits; the length sets how many)
     errline  click the line with the error. lines: [...], ans: lineIndex (0 = first line)
   listing: 'pseudocode' on a question or part shows a code block above it.
   lead: 'html' on a part shows extra information above its prompt.
   Multi-item types (select, tick, match) score floor(correct × marks ÷ items).
   ===================================================================== */


window.EXAM_MASTER = {
  meta: {
    testId: 'y10-cs-progress-test-1',           // change for every new test (keeps saved attempts + sheets separate)
    title: 'Progress Test 1',
    subtitle: 'Data representation, storage, programming and 1D arrays',
    course: 'Cambridge IGCSE Computer Science (0478)',
    year: 'Year 10',
    subject: 'Computer Science',
    durationMinutes: 35,
    // Grade boundaries as a PERCENTAGE of the total (highest first). Below the last one = U.
    // These are the Cambridge 0478 June 2026 thresholds (components 11 + 21) converted to
    // percentages — the same as the original Y10 test. Replace with your own if you prefer.
    gradeBoundaries: [
      { grade: 'A*', min: 78 }, { grade: 'A', min: 62 }, { grade: 'B', min: 46 }, { grade: 'C', min: 30.7 },
      { grade: 'D', min: 26 }, { grade: 'E', min: 21.3 }, { grade: 'F', min: 16.7 }, { grade: 'G', min: 12 }
    ],
    instructions: [
      'Answer <b>all</b> the questions. There is no typing: you click, choose from drop-down lists or switch bits on and off.',
      'Use your pen and paper for working out and calculations. Only what you choose on screen is marked.',
      'The number of marks for each question or part question is shown in brackets [ ].',
      'Pseudocode uses the Cambridge IGCSE conventions. String positions start at 1.',
      'Not sure? Press <b>Flag</b> and come back to it. The numbered buttons at the top take you to any question.',
      'Your answers save automatically. When the timer reaches 0:00 your test is handed in automatically.'
    ]
  },

  sections: [
    { id: 'num',   name: 'Number systems',            desc: 'Binary, denary and hexadecimal, binary addition and overflow, logical shifts, two’s complement' },
    { id: 'media', name: 'Text, sound and images',    desc: 'ASCII and Unicode, sampling, resolution and colour depth, file sizes' },
    { id: 'store', name: 'Storage and compression',   desc: 'Storage units, 1024-based calculations, lossy and lossless compression, RLE' },
    { id: 'prog',  name: 'Programming fundamentals',  desc: 'Operators, string handling, tracing, loops, validation and CASE' },
    { id: 'arr',   name: '1D arrays', desc: 'Declaring and using 1D arrays, totalling and counting' }
  ],

  skills: [
    { id: 'AO1', name: 'AO1 Knowledge and understanding' },
    { id: 'AO2', name: 'AO2 Applying knowledge' },
    { id: 'AO3', name: 'AO3 Designing algorithms' }
  ],

  questions: [
    /* ======================================================== NUMBER SYSTEMS */
    { num: 1, section: 'num', stem: 'Computers store all data in binary.', parts: [
      { id: '1a', label: '(a)', type: 'bits', marks: 1, skill: 'AO2', topic: 'Denary to binary',
        prompt: 'Convert the denary number <b>179</b> into 8-bit binary. Click the bits to switch them between 0 and 1.',
        ans: '10110011', answer: '<code>10110011</code>', explain: '179 = 128 + 32 + 16 + 2 + 1.' },
      { id: '1b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Hexadecimal to denary',
        prompt: 'What is the hexadecimal number <code class="big">3E</code> in denary?',
        options: [{ text: '44' }, { text: '53' }, { text: '62' }, { text: '314' }], correct: 2,
        answer: '62', explain: '3 × 16 = 48 and E = 14. 48 + 14 = 62. (314 comes from writing 3 and 14 side by side.)' },
      { id: '1c', label: '(c)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Binary to hexadecimal',
        prompt: 'What is the binary number <code class="big">1101 0110</code> in hexadecimal?',
        options: [{ text: 'D6', code: true }, { text: '6D', code: true }, { text: '136', code: true }, { text: 'C6', code: true }], correct: 0,
        answer: '<code>D6</code>', explain: 'Split into nibbles: 1101 = 13 = D and 0110 = 6.' },
      { id: '1d', label: '(d)', type: 'bits', marks: 1, skill: 'AO2', topic: 'Hexadecimal to binary',
        prompt: 'Convert the hexadecimal number <b>9F</b> into 8-bit binary.',
        ans: '10011111', answer: '<code>10011111</code>', explain: 'Convert each hex digit to 4 bits: 9 = 1001 and F (15) = 1111.' },
      { id: '1e', label: '(e)', type: 'mcq', marks: 1, skill: 'AO1', topic: 'Why hexadecimal is used',
        prompt: 'Which is a reason why programmers use hexadecimal instead of binary?',
        options: [
          { text: 'It is shorter, so it is easier for people to read and there are fewer mistakes.' },
          { text: 'The CPU processes hexadecimal faster than binary.' },
          { text: 'Hexadecimal values take up less memory than binary values.' },
          { text: 'Hexadecimal can store larger numbers in 8 bits.' }], correct: 0,
        answer: 'It is shorter, so it is easier for people to read and there are fewer mistakes.',
        explain: 'Computers still store everything in binary: hexadecimal is only a shorter way for humans to write it.' }
    ] },
    { num: 2, section: 'num',
      stem: 'Two positive integers are stored in 8-bit registers. They are added together and the result is stored in an 8-bit register.',
      listing: '  1 0 1 1 0 1 1 0\n+ 0 1 0 1 1 1 0 1',
      parts: [
        { id: '2a', label: '(a)', type: 'bits', marks: 1, skill: 'AO2', topic: 'Binary addition',
          prompt: 'Add the two numbers. Click the bits to show the <b>8 bits stored in the register</b>. (A carry out of the left-most column cannot be stored.)',
          ans: '00010011', answer: '<code>00010011</code> (the full answer is <code>1 0001 0011</code>, which needs 9 bits)',
          explain: '182 + 93 = 275. Work right to left, carrying 1 whenever a column adds to 2 or 3.' },
        { id: '2b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO1', topic: 'Overflow',
          prompt: 'Which error has occurred?',
          options: [{ text: 'Overflow' }, { text: 'Underflow' }, { text: 'Syntax error' }, { text: 'Rounding error' }], correct: 0,
          answer: 'Overflow', explain: 'An overflow error happens when a result is too big to fit in the register.' },
        { id: '2c', label: '(c)', type: 'mcq', marks: 1, skill: 'AO1', topic: 'Why overflow happens',
          prompt: 'Why did this error occur?',
          options: [
            { text: 'The result (275) is greater than 255, the largest value 8 bits can store.' },
            { text: 'Both numbers were negative.' },
            { text: 'The register can only store 7 bits.' },
            { text: 'Adding two binary numbers always causes an error.' }], correct: 0,
          answer: 'The result (275) is greater than 255, the largest value 8 bits can store.', explain: 'It needs a 9th bit that the register does not have.' }
      ] },
    { num: 3, section: 'num', stem: 'An 8-bit register contains the value <code class="big">00101100</code> (denary 44).', parts: [
      { id: '3a', label: '(a)', type: 'bits', marks: 1, skill: 'AO2', topic: 'Logical left shift',
        prompt: 'Show the contents of the register after a <b>logical left shift of two places</b>.',
        ans: '10110000', answer: '<code>10110000</code>', explain: 'Every bit moves two places left, the two left-most bits (00) are lost, and two 0s enter on the right.' },
      { id: '3b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO1', topic: 'Effect of a left shift',
        prompt: 'What is the effect of this shift on the denary value?',
        options: [{ text: 'It is multiplied by 2' }, { text: 'It is multiplied by 4' }, { text: 'It is divided by 4' }, { text: 'It is multiplied by 8' }], correct: 1,
        answer: 'It is multiplied by 4', explain: 'Each place left multiplies by 2, so two places = × 4. 44 becomes 176.' },
      { id: '3c', label: '(c)', type: 'bits', marks: 1, skill: 'AO2', topic: 'Logical right shift',
        prompt: 'The <b>original</b> value <code>00101100</code> is given a <b>logical right shift of three places</b>. Show the result.',
        ans: '00000101', answer: '<code>00000101</code>', explain: 'The three right-most bits (100) are lost and three 0s enter on the left. 44 ÷ 8 = 5.5, but the 0.5 is lost, so the result is 5.' }
    ] },
    { num: 4, section: 'num', stem: 'This question is about 8-bit two’s complement integers.', parts: [
      { id: '4a', label: '(a)', type: 'bits', marks: 1, skill: 'AO2', topic: 'Negative denary to two’s complement',
        prompt: 'Show the denary number <b>−45</b> in 8-bit two’s complement.',
        ans: '11010011', answer: '<code>11010011</code>', explain: '+45 = 00101101 → flip the bits = 11010010 → add 1 = 11010011. Check: −128 + 64 + 16 + 2 + 1 = −45.' },
      { id: '4b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Two’s complement to denary',
        prompt: 'What is the 8-bit two’s complement number <code class="big">10011010</code> in denary?',
        options: [{ text: '154' }, { text: '102' }, { text: '−102' }, { text: '−26' }], correct: 2,
        answer: '−102', explain: '−128 + 16 + 8 + 2 = −102. (154 is the unsigned value.)' },
      { id: '4c', label: '(c)', type: 'mcq', marks: 1, skill: 'AO1', topic: 'Most significant bit in two’s complement',
        prompt: 'Which statement about the most significant bit (MSB) of an 8-bit two’s complement number is correct?',
        options: [
          { text: 'It has a place value of −128, so the number is negative when the MSB is 1.' },
          { text: 'It has a place value of 128 and is always 0 for negative numbers.' },
          { text: 'It is a parity bit used to check for errors.' },
          { text: 'It has a place value of −1, so 1 is subtracted from the total.' }], correct: 0,
        answer: 'It has a place value of −128, so the number is negative when the MSB is 1.', explain: '' }
    ] },

    /* ================================================ TEXT, SOUND, IMAGES */
    { num: 5, section: 'media', stem: 'ASCII and Unicode are both used to represent text.', parts: [
      { id: '5', type: 'tick', marks: 2, skill: 'AO1', topic: 'ASCII and Unicode',
        prompt: 'Does each statement apply to ASCII, Unicode or both? Choose one for each row.',
        columns: ['ASCII', 'Unicode', 'Both'],
        rows: [
          { text: 'Can represent characters from many different languages.', ans: 1 },
          { text: 'Uses 7 or 8 bits for each character.', ans: 0 },
          { text: 'Is a character set that gives each character a unique binary code.', ans: 2 },
          { text: 'Can represent emojis.', ans: 1 }],
        answer: 'Unicode; ASCII; Both; Unicode', explain: '2 marks for 4 correct, 1 mark for 2 or 3 correct. Unicode has far more characters, so it needs more bits per character.' }
    ] },
    { num: 6, section: 'media', stem: 'This question is about digital sound and images.', parts: [
      { id: '6a', label: '(a)', type: 'match', marks: 2, skill: 'AO1', topic: 'Sound and image key terms',
        prompt: 'Choose the correct description for each term. One description is not used.',
        options: ['The number of bits used to store each sample', 'The number of pixels in an image (width × height)', 'The number of samples taken each second',
          'The number of bits used to store the colour of each pixel', 'The number of characters in a character set'],
        items: [{ text: 'Sample rate', ans: 2 }, { text: 'Sample resolution', ans: 0 }, { text: 'Image resolution', ans: 1 }, { text: 'Colour depth', ans: 3 }],
        answer: 'Sample rate → samples each second; sample resolution → bits per sample; image resolution → number of pixels; colour depth → bits per pixel', explain: '' },
      { id: '6b', label: '(b)', type: 'select', marks: 2, skill: 'AO2', topic: 'Sound file-size calculation',
        lead: 'A sound clip is recorded with a sample rate of <b>8000 Hz</b> and a sample resolution of <b>16 bits</b>. It is <b>10 seconds</b> long (one channel).',
        prompt: 'Complete the calculation of the file size. Use your paper for working.',
        template: '<table class="gt"><tr><td class="l">File size in <b>bits</b></td><td>{{0}}</td></tr><tr><td class="l">File size in <b>KiB</b></td><td>{{1}}</td></tr></table>',
        gaps: [{ options: ['128 000', '160 000', '1 280 000', '12 800 000'], ans: '1 280 000' }, { options: ['125', '156.25', '160', '1250'], ans: '156.25' }],
        answer: '1 280 000 bits; 156.25 KiB', explain: '8000 × 16 × 10 = 1 280 000 bits → ÷ 8 = 160 000 bytes → ÷ 1024 = 156.25 KiB.' },
      { id: '6c', label: '(c)', type: 'tick', marks: 2, skill: 'AO1', topic: 'Effect of increasing the sample rate',
        prompt: 'The <b>sample rate</b> of a recording is increased. Is each statement true or false?',
        columns: ['True', 'False'],
        rows: [
          { text: 'More samples are taken each second.', ans: 0 },
          { text: 'The recording is closer to the original sound.', ans: 0 },
          { text: 'The file size gets smaller.', ans: 1 },
          { text: 'Each sample is stored using more bits.', ans: 1 }],
        answer: 'True; True; False; False', explain: 'More samples = better accuracy but a larger file. More bits per sample is the sample resolution, not the rate.' }
    ] },
    { num: 7, section: 'media', stem: 'A digital photograph has a resolution of <b>800 × 600</b> pixels and a colour depth of <b>24 bits</b>.', parts: [
      { id: '7a', label: '(a)', type: 'select', marks: 2, skill: 'AO2', topic: 'Image file-size calculation',
        prompt: 'Complete the calculation of the file size. Use your paper for working.',
        template: '<table class="gt"><tr><td class="l">File size in <b>bytes</b></td><td>{{0}}</td></tr><tr><td class="l">File size in <b>KiB</b></td><td>{{1}}</td></tr></table>',
        gaps: [{ options: ['480 000', '1 440 000', '11 520 000', '14 400 000'], ans: '1 440 000' }, { options: ['1.37', '1 406.25', '1 440', '11 250'], ans: '1 406.25' }],
        answer: '1 440 000 bytes; 1 406.25 KiB', explain: '800 × 600 = 480 000 pixels × 24 bits = 11 520 000 bits → ÷ 8 = 1 440 000 bytes → ÷ 1024 = 1 406.25 KiB.' },
      { id: '7b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO1', topic: 'Effect of colour depth',
        prompt: 'The colour depth is reduced from 24 bits to 8 bits. The resolution does not change. Which statement is correct?',
        options: [
          { text: 'The file size becomes one third of the original and fewer colours can be shown.' },
          { text: 'The file size stays the same but fewer colours can be shown.' },
          { text: 'The file size becomes three times larger and more colours can be shown.' },
          { text: 'The number of pixels in the image is reduced.' }], correct: 0,
        answer: 'The file size becomes one third of the original and fewer colours can be shown.', explain: '8 ÷ 24 = one third. Fewer bits per pixel means fewer possible colours.' }
    ] },

    /* ============================================= STORAGE & COMPRESSION */
    { num: 8, section: 'store', stem: 'Data storage is measured in units such as bits, bytes and kibibytes.', parts: [
      { id: '8a', label: '(a)', type: 'select', marks: 1, skill: 'AO1', topic: 'Storage units',
        prompt: 'Complete the statements. You need both for the mark.',
        template: '<div class="gapline">1 MiB = 1024 {{0}}</div><div class="gapline">1 EiB = 1024 {{1}}</div>',
        gaps: [{ options: ['bits', 'bytes', 'KiB', 'GiB'], ans: 'KiB' }, { options: ['GiB', 'TiB', 'PiB', 'ZiB'], ans: 'PiB' }],
        answer: '1 MiB = 1024 KiB; 1 EiB = 1024 PiB', explain: 'Order: bit, nibble, byte, KiB, MiB, GiB, TiB, PiB, EiB.' },
      { id: '8b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Storage calculation (1024-based)',
        prompt: 'A student has <b>3 GiB</b> of free storage. Each photograph is <b>6 MiB</b>. How many photographs can be stored?',
        options: [{ text: '18' }, { text: '500' }, { text: '512' }, { text: '3072' }], correct: 2,
        answer: '512', explain: '3 × 1024 = 3072 MiB. 3072 ÷ 6 = 512. (500 comes from using 1000.)' }
    ] },
    { num: 9, section: 'store', stem: 'A teacher sends large video files to students over the internet.', parts: [
      { id: '9a', label: '(a)', type: 'tick', marks: 2, skill: 'AO1', topic: 'Why files are compressed',
        prompt: 'Is each statement a good reason to compress the files before sending them?',
        columns: ['Good reason', 'Not a reason'],
        rows: [
          { text: 'The file size is reduced, so less storage space is needed.', ans: 0 },
          { text: 'The files upload and download faster.', ans: 0 },
          { text: 'The quality of the video always improves.', ans: 1 },
          { text: 'The files are protected from viruses.', ans: 1 }],
        answer: 'Good; Good; Not a reason; Not a reason', explain: 'Compression reduces file size, so transfers are quicker and use less bandwidth. It never improves quality and does not protect against malware.' },
      { id: '9b', label: '(b)', type: 'tick', marks: 2, skill: 'AO1', topic: 'Lossy and lossless compression',
        prompt: 'Does each statement describe lossy or lossless compression?',
        columns: ['Lossy', 'Lossless'],
        rows: [
          { text: 'Some data is permanently removed from the file.', ans: 0 },
          { text: 'The original file can be rebuilt exactly.', ans: 1 },
          { text: 'Run Length Encoding (RLE) is an example.', ans: 1 },
          { text: 'It could remove sounds that most people cannot hear.', ans: 0 }],
        answer: 'Lossy; Lossless; Lossless; Lossy', explain: '' },
      { id: '9c', label: '(c)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Run Length Encoding',
        lead: 'A simple RLE method stores each run as the number of repeats followed by the character. For example, <code>WWWBB</code> is stored as <code>3W2B</code>.',
        prompt: 'Which is the compressed version of <code>AAAAABBBCCCCCCCD</code>?',
        options: [{ text: '5A3B7C1D', code: true }, { text: '5A3B7CD', code: true }, { text: '5A3B6C1D', code: true }, { text: 'A5B3C7D1', code: true }], correct: 0,
        answer: '<code>5A3B7C1D</code>', explain: '5 As, 3 Bs, 7 Cs and 1 D. The single D still needs a count.' }
    ] },

    /* ============================================ PROGRAMMING FUNDAMENTALS */
    { num: 10, section: 'prog', stem: 'This question is about operators and string handling in pseudocode.', parts: [
      { id: '10a', label: '(a)', type: 'select', marks: 2, skill: 'AO2', topic: 'Arithmetic operators (MOD, DIV, ^, /)',
        prompt: 'Choose the value of each expression.',
        template: '<table class="gt"><tr><th>Expression</th><th>Value</th></tr><tr><td class="l"><code>MOD(17, 5)</code></td><td>{{0}}</td></tr><tr><td class="l"><code>DIV(17, 5)</code></td><td>{{1}}</td></tr><tr><td class="l"><code>2 ^ 4</code></td><td>{{2}}</td></tr><tr><td class="l"><code>17 / 4</code></td><td>{{3}}</td></tr></table>',
        gaps: [{ options: ['2', '3', '3.4', '12'], ans: '2' }, { options: ['2', '3', '3.4', '85'], ans: '3' }, { options: ['6', '8', '16', '24'], ans: '16' }, { options: ['1', '4', '4.1', '4.25'], ans: '4.25' }],
        answer: 'MOD(17, 5) = 2; DIV(17, 5) = 3; 2 ^ 4 = 16; 17 / 4 = 4.25', explain: 'MOD gives the remainder, DIV gives the whole-number part of a division, ^ is "to the power of", / is normal division. 2 marks for 4 correct, 1 mark for 2 or 3.' },
      { id: '10b', label: '(b)', type: 'tick', marks: 2, skill: 'AO2', topic: 'Relational operators',
        lead: 'The variables are assigned: <code>X ← 7</code> and <code>Y ← 12</code>',
        prompt: 'Is each expression TRUE or FALSE?',
        columns: ['TRUE', 'FALSE'],
        rows: [{ text: '<code>X &lt;&gt; Y</code>', ans: 0 }, { text: '<code>X &gt;= Y</code>', ans: 1 }, { text: '<code>Y &lt;= 12</code>', ans: 0 }, { text: '<code>MOD(Y, X) = 5</code>', ans: 0 }],
        answer: 'TRUE; FALSE; TRUE; TRUE', explain: '&lt;&gt; means "not equal to". 12 &lt;= 12 is TRUE. 12 MOD 7 = 5.' },
      { id: '10c', label: '(c)', type: 'select', marks: 2, skill: 'AO2', topic: 'String handling (LENGTH, SUBSTRING, UCASE)',
        lead: 'The variable is assigned: <code>Word ← "Computer Science"</code>',
        prompt: 'Choose the value returned by each expression. The first character is at position 1.',
        template: '<table class="gt"><tr><th>Expression</th><th>Value</th></tr><tr><td class="l"><code>LENGTH(Word)</code></td><td>{{0}}</td></tr><tr><td class="l"><code>UCASE(SUBSTRING(Word, 10, 7))</code></td><td>{{1}}</td></tr></table>',
        gaps: [{ options: ['2', '15', '16', '17'], ans: '16' }, { options: ['COMPUTER', 'SCIENC', 'SCIENCE', 'Science'], ans: 'SCIENCE' }],
        answer: 'LENGTH(Word) = 16; UCASE(SUBSTRING(Word, 10, 7)) = "SCIENCE"', explain: 'The space counts as a character. SUBSTRING takes 7 characters starting at position 10; UCASE makes them upper case.' }
    ] },
    { num: 11, section: 'prog', stem: 'This algorithm uses a loop, selection, a total and a counter.',
      listing: 'Total ← 0\nCount ← 0\nFOR Index ← 1 TO 5\n   INPUT Number\n   IF Number > 10\n     THEN\n       Total ← Total + Number\n       Count ← Count + 1\n   ENDIF\nNEXT Index\nOUTPUT Total, Count',
      parts: [
        { id: '11a', label: '(a)', type: 'select', marks: 2, skill: 'AO2', topic: 'Tracing a loop with a total and a counter',
          prompt: 'The algorithm is run with the inputs <b>12, 5, 20, 10, 15</b>. Complete the trace table to show <code>Total</code> and <code>Count</code> at the end of each pass through the loop.',
          template: '<table class="gt"><tr><th><code>Index</code></th><th><code>Number</code></th><th><code>Total</code></th><th><code>Count</code></th></tr>' +
            '<tr><td class="given"></td><td class="given"></td><td class="given">0</td><td class="given">0</td></tr>' +
            '<tr><td class="given">1</td><td class="given">12</td><td>{{0}}</td><td>{{1}}</td></tr>' +
            '<tr><td class="given">2</td><td class="given">5</td><td>{{2}}</td><td>{{3}}</td></tr>' +
            '<tr><td class="given">3</td><td class="given">20</td><td>{{4}}</td><td>{{5}}</td></tr>' +
            '<tr><td class="given">4</td><td class="given">10</td><td>{{6}}</td><td>{{7}}</td></tr>' +
            '<tr><td class="given">5</td><td class="given">15</td><td>{{8}}</td><td>{{9}}</td></tr></table>',
          gaps: (function () {
            var T = ['0', '5', '12', '17', '22', '32', '37', '42', '47', '57', '62'], C = ['0', '1', '2', '3', '4', '5'];
            return [['12', '1'], ['12', '1'], ['32', '2'], ['32', '2'], ['47', '3']].reduce(function (a, r) { return a.concat([{ options: T, ans: r[0] }, { options: C, ans: r[1] }]); }, []);
          })(),
          answer: 'Total: 12, 12, 32, 32, 47. Count: 1, 1, 2, 2, 3.',
          explain: 'Watch the input 10: 10 is not greater than 10, so nothing changes. 2 marks for all 10 cells, 1 mark for at least 5.' },
        { id: '11b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Output of an algorithm',
          prompt: 'What is the output of the algorithm for these inputs?',
          options: [{ text: '47 3', code: true }, { text: '57 4', code: true }, { text: '62 5', code: true }, { text: '47 2', code: true }], correct: 0,
          answer: '<code>47 3</code>', explain: '57 4 would be the output if 10 were counted (>= instead of >).' },
        { id: '11c', label: '(c)', type: 'tick', marks: 2, skill: 'AO1', topic: 'Types of loop',
          prompt: 'Which type of loop is described in each row?',
          columns: ['Count-controlled', 'Pre-condition', 'Post-condition'],
          rows: [
            { text: '<code>FOR … TO … NEXT</code>', ans: 0 },
            { text: '<code>WHILE … DO … ENDWHILE</code>', ans: 1 },
            { text: '<code>REPEAT … UNTIL</code>', ans: 2 },
            { text: 'The condition is checked at the start, so the loop body might never run.', ans: 1 }],
          answer: 'Count-controlled; Pre-condition; Post-condition; Pre-condition', explain: 'A post-condition loop (REPEAT … UNTIL) always runs at least once.' }
      ] },
    { num: 12, section: 'prog', stem: 'A menu program must keep asking the user for a choice until they enter 1, 2 or 3. It then outputs a message for that choice.', parts: [
      { id: '12', type: 'select', marks: 2, skill: 'AO3', topic: 'Validation loop and CASE statement', code: true,
        prompt: 'Choose the missing keywords to complete the pseudocode.',
        template: '{{0}}\n   OUTPUT "Enter 1, 2 or 3"\n   INPUT Choice\nUNTIL Choice >= 1 {{1}} Choice <= 3\nCASE {{2}} Choice\n   1 : OUTPUT "Start game"\n   2 : OUTPUT "Load game"\n   3 : OUTPUT "Quit"\n{{3}}',
        gaps: [{ options: ['FOR', 'LOOP', 'REPEAT', 'WHILE'], ans: 'REPEAT' }, { options: ['AND', 'NOT', 'OR'], ans: 'AND' }, { options: ['IN', 'IS', 'OF', 'TO'], ans: 'OF' }, { options: ['ENDCASE', 'ENDIF', 'ENDWHILE', 'UNTIL'], ans: 'ENDCASE' }],
        answer: '<code>REPEAT</code>, <code>AND</code>, <code>OF</code>, <code>ENDCASE</code>',
        explain: 'REPEAT … UNTIL is the loop that matches UNTIL. The choice must be at least 1 AND at most 3 (OR would accept anything). 2 marks for 4 correct, 1 mark for 2 or 3.' }
    ] },

    /* ================================================================== 1D ARRAYS */
    { num: 13, section: 'arr', stem: 'This question is about one-dimensional (1D) arrays.', parts: [
      { id: '13a', label: '(a)', type: 'mcq', marks: 1, skill: 'AO3', topic: 'Declaring a 1D array',
        prompt: 'Which statement declares an array called <code>Names</code> that stores <b>30</b> strings, indexed from 1?',
        options: [
          { text: 'DECLARE Names : ARRAY[1:30] OF STRING', code: true },
          { text: 'DECLARE Names : ARRAY[30] OF STRING', code: true },
          { text: 'DECLARE ARRAY Names[1:30] : STRING', code: true },
          { text: 'DECLARE Names : STRING[1:30]', code: true }], correct: 0,
        answer: '<code>DECLARE Names : ARRAY[1:30] OF STRING</code>', explain: 'Pattern: DECLARE name : ARRAY[lower:upper] OF type.' },
      { id: '13b', label: '(b)', type: 'mcq', marks: 1, skill: 'AO2', topic: 'Reading an element of a 1D array',
        lead: 'The array <code>Scores</code> holds these values:<table class="gt"><tr><th>Index</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>Scores</th><td>12</td><td>45</td><td>67</td><td>23</td><td>89</td></tr></table>',
        prompt: 'What is the value of <code>Scores[4]</code>?',
        options: [{ text: '4' }, { text: '23' }, { text: '67' }, { text: '89' }], correct: 1,
        answer: '23', explain: 'The index is the position, starting at 1. (89 would be the answer if the index started at 0.)' },
      { id: '13c', label: '(c)', type: 'mcq', marks: 1, skill: 'AO3', topic: 'Writing to an element of a 1D array',
        prompt: 'Which statement stores the value <b>50</b> in the <b>third</b> element of <code>Scores</code>?',
        options: [{ text: 'Scores[3] ← 50', code: true }, { text: 'Scores[50] ← 3', code: true }, { text: 'Scores ← 50[3]', code: true }, { text: '50 ← Scores[3]', code: true }], correct: 0,
        answer: '<code>Scores[3] ← 50</code>', explain: 'The array name and index go on the left of the arrow; the value goes on the right.' }
    ] },
    { num: 14, section: 'arr', stem: 'A 1D array <code>Scores[1:30]</code> stores the test scores (whole numbers from 0 to 100) of 30 students. This algorithm outputs the average score and how many scores are greater than 50.', parts: [
      { id: '14', type: 'select', marks: 4, skill: 'AO3', topic: 'Totalling, counting and averaging an array', code: true,
        prompt: 'Choose the missing parts to complete the algorithm.',
        template: 'Total ← 0\nCount ← 0\nFOR Index ← 1 TO {{0}}\n   Total ← {{1}}\n   IF Scores[Index] > 50\n     THEN\n       Count ← {{2}}\n   ENDIF\nNEXT Index\nAverage ← {{3}}\nOUTPUT "Average score: ", Average\nOUTPUT "Scores above 50: ", Count',
        gaps: [
          { options: ['5', '29', '30', '50'], ans: '30' },
          { options: ['Total + 1', 'Total + Index', 'Total + Scores[Index]', 'Scores[Index]'], ans: 'Total + Scores[Index]' },
          { options: ['1', 'Count + 1', 'Count + Scores[Index]', 'Total + 1'], ans: 'Count + 1' },
          { options: ['Count / 30', 'Total / 30', 'Total / Count', 'Total DIV 50'], ans: 'Total / 30' }],
        answer: '<code>30</code>, <code>Total + Scores[Index]</code>, <code>Count + 1</code>, <code>Total / 30</code>',
        explain: 'Loop over all 30 elements; add each score to the total; add 1 to the counter for each score over 50; divide the total by the number of scores (30).' }
    ] }
  ]
};
