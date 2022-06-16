export function trim<T>(v: T | undefined): v is T {
  return v !== undefined;
}
