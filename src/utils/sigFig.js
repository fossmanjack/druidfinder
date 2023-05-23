//export default const sigFig = (input, precision = 0) => Math.round(input * Math.pow(10, precision)) / Math.pow(10, precision);

// The above produces rounding errors sometimes.  The below should never produce rounding errors.
// Credit to https://www.jacklmoore.com/notes/rounding-in-javascript/

export default function sigFig(input, pre = 0) {
	return Number(Math.round(input + 'e' + pre) + 'e-' + pre);
}
