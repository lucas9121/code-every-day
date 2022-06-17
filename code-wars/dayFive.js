//Check if given chord is minor or major.
// Basic minor/major chord have three elements.
// Chord is minor when interval between first and second element equals 3 and between second and third -> 4.
// Chord is major when interval between first and second element equals 4 and between second and third -> 3.
// In minor/major chord interval between first and third element equals... 7.
//Output: String message: 'Minor', 'Major' or 'Not a chord'.

notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

function minorOrMajor(chord){
    const chordArr = chord.split(' ')
    let firstIdx
    let secondIdx
    let thirdIdx
    chordArr.forEach((note, idx) => {
      let noteIdx
      if(note.includes('b')){
        noteIdx = notes.indexOf(note.split('')[0]) - 1
      } else if(note.includes('#')){
        noteIdx = notes.indexOf(note.split('')[0]) + 1
      } else {
        noteIdx = notes.indexOf(note)
      }
      if(idx === 0) firstIdx = noteIdx
      if(idx === 1 && firstIdx >= noteIdx) secondIdx = noteIdx + 12
      if(idx === 1 && firstIdx < noteIdx) secondIdx = noteIdx 
      if(firstIdx >= noteIdx) thirdIdx = noteIdx + 12
      if(firstIdx < noteIdx) thirdIdx = noteIdx
    })
    if(thirdIdx - firstIdx !== 7) return "Not a chord"
    if(secondIdx - firstIdx === 4) return "Major"
    if(secondIdx - firstIdx === 3) return "Minor"
    return "Not a chord"
  }

  minorOrMajor('D# F# A#')