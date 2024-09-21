class DisjointSet {
  private father: number[]

  constructor(n: number) {
    this.father = new Array(n)
    for (let i = 0; i < n; i++) {
      this.father[i] = i
    }
  }

  find(u: number) {
    // return this.father[u] === u
    //   ? u
    //   : (this.father[u] = this.find(this.father[u]))

    if (this.father[u] === u) {
      return u
    } else {
      // 路径压缩
      this.father[u] = this.find(this.father[u])
      return this.father[u]
    }
  }

  isSame(u: number, v: number) {
    return this.find(u) === this.find(v)
  }

  join(u: number, v: number) {
    // 找到u，v根节点
    u = this.find(u)
    v = this.find(v)
    if (u === v) return
    this.father[v] = u
  }
}
