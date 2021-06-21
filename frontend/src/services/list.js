export function getList() {
    return fetch('/api')
      .then(data => data.json())
  }