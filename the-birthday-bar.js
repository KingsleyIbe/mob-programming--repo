// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Solution to challenge

function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let n = s.length;
    for(let i=0; i<n; i++){
      let arr =  s.slice(i, m+i)
      let num = arr.reduce((cur, acc) => cur + acc, 0)
      if(num === d){
          count++
      }
    }
    return count
}

