export function buildQueryParams(filter: Record<string, unknown>): string {
  const params = Object.entries(filter)
    .filter((e) => e[1])
    .map((e) => e.join('='))
    .join('&');
  return `?${params}`;
}
