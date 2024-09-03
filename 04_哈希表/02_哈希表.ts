class HashTable<T = any> {
  private storage: [string, T][][] = []
  private length: number = 7
  private count: number = 0

  private hashFunc(key: string, max: number) {
    const length = key.length
    const base = 31
    let hashCode = key.charCodeAt(length - 1)
  
    for (let i = length - 2; i > -1; i--) {
      hashCode = base * hashCode + key.charCodeAt(i)
    }
  
    const index = hashCode % max
  
    return index
  }

  private resize(newLength) {
    let newPrime = newLength
    while (!isPrime(newLength)) {
      newPrime++
    }
    if (newPrime < 7) newPrime = 7
    this.length = newPrime
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    oldStorage.forEach(bucket => {
      if (!bucket) return

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  put(key: string, value: T) {
    const index = this.hashFunc(key, this.length)
    let bucket = this.storage[index]

    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (key === tupleKey) {
        tuple[1] = value
        isUpdate = true
      }
    }

    if (!isUpdate) {
      bucket.push([key, value])
      this.count++
      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) this.resize(this.length * 2)
    }
  
  }

  get(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]

      if (key === tupleKey) return tupleValue
    }
    
    return undefined
  }

  delete(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]

      if (key === tupleKey) {
        bucket.splice(i, 1)
        this.count--
        const loadFactor = this.count / this.length
        if (loadFactor < 0.25) this.resize(Math.floor(this.length / 2))
        return tupleValue
      }
    }
    
    return undefined
  }

  get size() {
    return this.count
  }

  get data() {
    return this.storage
  }
}

const isPrime = (num: number) => {
  const sqrt = Math.sqrt(num)

  // 分解成两个因数 其中必有一个因数小于等于它的平方根
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false
  }

  return true
}

const hashMap = new HashTable()
hashMap.put("name", "lll")
hashMap.put("name", "zzz")
hashMap.put("age", 18)
console.log(hashMap.get("name"))
console.log(hashMap.get("age"))
console.log(hashMap.size)
console.log(hashMap.data)

export default HashTable