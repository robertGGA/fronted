function sort(str) {
    return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  }
  
  function isAnag(first, second) {
    if(first.trim() === second.trim()) {
      return false
    } else {
      return sort(first) === sort(second)
    }
  }