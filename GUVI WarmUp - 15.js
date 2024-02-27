/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	
	if (typeof word1 === 'string') {
		return word1.length;
	} else {
		return -1; // Return -1 for invalid input
	}
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/