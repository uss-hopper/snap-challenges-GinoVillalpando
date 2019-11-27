let arr = ["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor",
	"core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is",
	"futile.", "Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when",
	"proceeding.", "These", "appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow",
	"them", "to", "work", "collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector",
	"modulation", "to", "upper", "frequency", "band."];

let reducer = (append, string) => append + " " + string;

function appendStrings() {
	return arr.reduce(reducer)
}

console.log(appendStrings());