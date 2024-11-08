function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let n = nums1.length
  let res = 0

  for (let i = 0; i < n; i++) {
    
    for (let j = 0; j < n; j++) {

      for (let k = 0; k < n; k++) {

        for (let l = 0; l < n; l++) {
          const sum = nums1[i] + nums2[j] + nums3[k] + nums4[l]
          if (sum === 0) {
            console.log(`i${i}, j${j}, k${k}, l${l}`)
            res += 1
          }
        }

      }

    }

  }

  return res
}

const A = [1, 2], B = [-2, -1], C = [-1, 2], D = [0, 2]
console.log(fourSumCount(A, B, C, D))