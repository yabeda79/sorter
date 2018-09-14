class Sorter {
  constructor() {
    this.a=[]
    this.comparator=function(a,b){
      return a-b
    }
  }

  add(element) {
    this.a.push(element)
  }

  at(index) {
    return this.a[index]
    }

  get length() {
    return this.a.length
  }

  toArray() {
    return this.a
  }

  sort(indices) {
    indices.sort()
    let a2=[]
    indices.forEach((value, ind)=>{
      a2.push(this.a[value])
    });
    a2.sort(this.comparator)
    for(let i=0; i<indices.length; i++)
      this.a[indices[i]]=a2[i]
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction
  }
}

module.exports = Sorter;
