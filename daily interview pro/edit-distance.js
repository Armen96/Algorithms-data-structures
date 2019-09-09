const assert = require('assert');
/**
 * This problem was recently asked by AirBNB:
 *
 * Given two strings, determine the edit distance between them.
 * The edit distance is defined as the minimum number of edits
 * (insertion, deletion, or substitution) needed to change one string to the other.For example,
 * "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).
 *
 */

function levenshteinDistance (a, b){
    if(a.length === 0) return b.length;
    if(b.length === 0) return a.length;

    let matrix = [];

    let i;
    for(i = 0; i <= b.length; i++){
        matrix[i] = [i];
    }

    let j;
    for(j = 0; j <= a.length; j++){
        matrix[0][j] = j;
    }

    for ( i = 1; i <= b.length; i++ ) {
        for ( j = 1; j <= a.length; j++ ){
            if ( b.charAt(i-1) === a.charAt(j-1) ) {
                matrix[i][j] = matrix[i-1][j-1];
            } else{
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1,//substitution
                    matrix[i][j-1] + 1, //insertion
                    matrix[i-1][j] + 1 // deletion
                )
            }
        }
    }

    return matrix[b.length][a.length];
}

describe("Edit Distance", () => {
    it('find edit distance', function () {
        assert.strictEqual(levenshteinDistance('bam','bom'),1);

        assert.strictEqual(levenshteinDistance('ddd',''),3);
        assert.strictEqual(levenshteinDistance('','aaaa'),4);

        assert.strictEqual(levenshteinDistance('dance','done'),2);
        assert.strictEqual(levenshteinDistance('vertical','horizontal'),7);
    });
});


