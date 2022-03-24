import { useState } from "react"

const pads = [
	{
		letter : "Q",
		keys   : 81,
		name   : "Percussion",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/91[kb]african-pe-med.wav.mp3",
	},
	{
		letter : "W",
		keys   : 87,
		name   : "Bendy",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/171[kb]bendy.wav.mp3",
	},
	{
		letter : "E",
		keys   : 69,
		name   : "Big Bend",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/114[kb]bigbend.wav.mp3",
	},
	{
		letter : "A",
		keys   : 65,
		name   : "Blobble",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/36[kb]blobble.wav.mp3",
	},
	{
		letter : "S",
		keys   : 83,
		name   : "Bongo",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/12[kb]bongo%20hi.wav.mp3",
	},
	{
		letter : "D",
		keys   : 68,
		name   : "Crikix",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/69[kb]crikix.wav.mp3",
	},
	{
		letter : "Z",
		keys   : 90,
		name   : "Chimes",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/122[kb]pipechimes.wav.mp3",
	},
	{
		letter : "X",
		keys   : 88,
		name   : "Steel",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/83[kb]SteelDrum-vs.wav.mp3",
	},
	{
		letter : "C",
		keys   : 67,
		name   : "Wave",
		audio  :
			"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/134[kb]wavedrum1.wav.mp3",
	},
]

const App = () => {
	const [playing, setPlaying] = useState("-")
	return (
		<div id="drum-machine" className="container">
			<div className="square">
				{pads.map((pad) => <DrumPad key={pad.letter} pad={pad} playing={playing} setPlaying={setPlaying} />)}
			</div>
			<div id="display">{playing}</div>
		</div>
	)
}

const DrumPad = ({ pad, setPlaying }) => {
	const handlePlay = () => {
		document.getElementById(pad.letter).play()
		setPlaying(pad.name)
	}

	document.addEventListener("keydown", function(e) {
		if (e.keyCode === pad.keys) {
			handlePlay()
		}
	})

	return (
		<div className="drum-pad" onClick={handlePlay} id={pad.name}>
			<audio src={pad.audio} className="clip" id={pad.letter} />
			{pad.letter}
		</div>
	)
}

export default App
