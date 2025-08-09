
const swap = (arr, i, j) => {
    arr = [...arr]
    // [arr[i], arr[j]] = [arr[j], arr[i]]
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    // console.log(str, i, j)
    return arr
}

const permute = (arr, st='') => {
    console.log(st, arr)
    // if(l === r) {
    //     return res.push(arr)
    // }
    if(arr.length === 1) {
        // return res.push(arr.join(''))
        console.log(st + arr[0]);
        return st + arr[0];
    }
    let op = []
    for(let i=0; i< arr.length; i++) {
        let sarr = swap(arr, 0, i)
        // console.log('swapped', sarr, i, arr, sarr.slice(1))
        let res = permute(sarr.slice(1), st + sarr[0])
        op = op.concat(res)
        // permute(arr, l+1, r, res)
        // arr = swap(arr, 0, i)
    }
    return op
}


let input = "ABCD";
let inp = input.split('')
let op = []
const res = permute(inp)

console.log(res)

// abc - a bc - a cb - bac - b ac - b ca - cba - c ba - c ab
//  abc, acb, bac, bca, cba, cab



// soln---

// function permute(str, l, r) {
//   if (l === r) {
//     console.log(str.join(""));
//   } else {
//     for (let i = l; i <= r; i++) {
//       [str[l], str[i]] = [str[i], str[l]]; // Swap
//       permute(str, l + 1, r);
//       [str[l], str[i]] = [str[i], str[l]]; // Backtrack
//     }
//   }
// }

// let input = "ABC";
// let res = permute(input.split(""), 0, input.length - 1, op);
// ["abc", "acb", "bac", "bca", "cab", "cba"]