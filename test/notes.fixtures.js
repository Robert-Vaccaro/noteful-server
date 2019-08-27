const moment = require('moment')

function makeNotesArray() {
  return [
    {
      id: 1,
      note_name: "Lions",
      date_modified: moment("2019-01-03T00:00:00.000Z").toISOString(true),
      folder_id: 1,
      content: "Lions are cool."
    },
    {
      id: 2,
      note_name: "Tigers",
      date_modified: moment("2018-08-15T23:00:00.000Z").toISOString(true),
      folder_id: 2,
      content: "Tigers are cooler."
    },
    {
      id: 3,
      note_name: "Bears",
      date_modified: moment("2018-03-01T00:00:00.000Z").toISOString(true),
      folder_id: 3,
      content: "Bears are the coolest, though.",
    },
  ]
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    note_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    date_modified: new Date().toISOString(),
    folder_id: '1',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
  }
  const expectedNote = {
    ...maliciousNote,
    note_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousNote,
    expectedNote
  }
}

module.exports = {
  makeNotesArray,
  makeMaliciousNote
}