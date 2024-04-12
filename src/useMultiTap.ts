import {TFallbackHandler} from "./TFallbackHandler";
import {THandlerMap} from "./THandlerMap";
import {TUseMultiTap} from "./TUseMultiTap";
import {binder} from "./binder";
import {tapHandler} from "./tapHandler";
import {useState} from "react";

export function useMultiTap(
  delay: number = 400,
  fallback: TFallbackHandler = () => {},
): TUseMultiTap {
  const setTaps = useState(0)[1];
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  return (handlers: THandlerMap) => {
    setTaps(taps => taps + 1);
    clearTimeout(timeoutId);
    const handler = binder(tapHandler, handlers, fallback);
    const tapSetter = binder(setTaps, handler);
    const toTimeOutId = binder(setTimeout, tapSetter, delay);
    setTimeoutId(toTimeOutId());
  };
}
