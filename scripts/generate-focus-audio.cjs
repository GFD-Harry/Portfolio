const fs = require('fs')
const path = require('path')

const sampleRate = 22050
const duration = 24
const sampleCount = sampleRate * duration
const dataSize = sampleCount * 2
const output = Buffer.alloc(44 + dataSize)
const progression = [
  [130.81, 164.81, 196, 261.63], // C major
  [110, 130.81, 164.81, 220], // A minor
  [87.31, 130.81, 174.61, 261.63], // F major
  [98, 146.83, 196, 246.94], // G major
]

function pianoVoice(frequency, age) {
  const attack = Math.min(1, age / 0.012)
  const decay = Math.exp(-2.25 * age)
  const fundamental = Math.sin(2 * Math.PI * frequency * age)
  const second = Math.sin(2 * Math.PI * frequency * 2 * age + 0.08) * 0.34
  const third = Math.sin(2 * Math.PI * frequency * 3 * age + 0.16) * 0.14
  const fourth = Math.sin(2 * Math.PI * frequency * 4 * age) * 0.06

  return (fundamental + second + third + fourth) * attack * decay
}

output.write('RIFF', 0)
output.writeUInt32LE(36 + dataSize, 4)
output.write('WAVE', 8)
output.write('fmt ', 12)
output.writeUInt32LE(16, 16)
output.writeUInt16LE(1, 20)
output.writeUInt16LE(1, 22)
output.writeUInt32LE(sampleRate, 24)
output.writeUInt32LE(sampleRate * 2, 28)
output.writeUInt16LE(2, 32)
output.writeUInt16LE(16, 34)
output.write('data', 36)
output.writeUInt32LE(dataSize, 40)

for (let index = 0; index < sampleCount; index += 1) {
  const time = index / sampleRate
  const beatDuration = 0.75
  const beat = Math.floor(time / beatDuration)
  const chord = progression[Math.floor(beat / 8) % progression.length]
  const noteAge = time % beatDuration
  const note = chord[beat % chord.length] * 2
  const melody = pianoVoice(note, noteAge) * 0.36

  const chordAge = time % (beatDuration * 4)
  const harmony = chord.reduce(
    (sum, frequency) => sum + pianoVoice(frequency, chordAge),
    0,
  ) / chord.length * 0.5

  const loopFade = Math.min(1, time / 0.08, (duration - time) / 0.08)
  const sample = (melody + harmony) * loopFade

  output.writeInt16LE(Math.round(sample * 32767 * 0.68), 44 + index * 2)
}

const outputDirectory = path.join(__dirname, '..', 'public', 'audio')
fs.mkdirSync(outputDirectory, { recursive: true })
fs.writeFileSync(path.join(outputDirectory, 'focus-piano.wav'), output)
