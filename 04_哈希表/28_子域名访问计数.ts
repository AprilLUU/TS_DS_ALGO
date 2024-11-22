function subdomainVisits(cpdomains: string[]): string[] {
  const map = new Map<string, number>()

  for (const cpdomain of cpdomains) {
    const [count, domain] = cpdomain.split(" ")
    const domainArr = domain.split(".")
    for (let i = domainArr.length - 1; i >= 0; i--) {
      const subDomain = domainArr.slice(i).join(".")
      const visitCount = (map.get(subDomain) ?? 0) + Number(count)
      map.set(subDomain, visitCount)
    }
  }

  let res: string[] = []
  for (const [domain, count] of map) {
    res.push(`${count} ${domain}`)
  }

  return res
}
