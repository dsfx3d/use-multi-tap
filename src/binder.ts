// eslint-disable-next-line @typescript-eslint/ban-types
export function binder<A extends any[]>(fn: Function, ...args: A) {
  return fn.bind(undefined, ...args);
}
