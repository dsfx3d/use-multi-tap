import {TFallbackHandler} from "./TFallbackHandler";
import {THandlerMap} from "./THandlerMap";
import {binder} from "./binder";

export function tapHandler(
  handlers: THandlerMap,
  fallback: TFallbackHandler,
  taps: number,
): number {
  const delta = Array.isArray(handlers) ? 1 : 0;
  const onTap = handlers[taps - delta] ?? binder(fallback, taps);
  onTap();
  return 0;
}
