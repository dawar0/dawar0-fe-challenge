export function solve(text: string, noOfQueries: number, queries: string[]) {
  const obj = JSON.parse(text);
  const results: (string | undefined)[] = [];

  for (let i = 0; i < noOfQueries; i++) {
    const segments = queries[i].split('.');
    let value: string | Record<string, unknown> = obj;

    for (const segment of segments) {
      value = value[segment];
    }

    // Assuming the path always points to a string
    results.push(String(value));
  }

  return results.join(',');
}
