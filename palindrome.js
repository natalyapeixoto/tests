
function isPalindrome(str) {
	const reverse = str.split("").reverse().join("")
	if (reverse == str) {
		return true
	}
	return false
}

module.exports = isPalindrome