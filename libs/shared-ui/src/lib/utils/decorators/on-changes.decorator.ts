export interface SimpleChange<T = unknown> {
  previousValue: T;
  currentValue: T;
  firstChange: boolean;
  isFirstChange(): boolean;
}

export function OnChanges<T = unknown>(
  callback: (value: T, simpleChange?: SimpleChange<T>) => void
) {
  const cachedValueKey = Symbol();
  const isFirstChangeKey = Symbol();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any, key: any) => {
    Object.defineProperty(target, key, {
      set: function (value: T): void {
        if (this[cachedValueKey] === value) {
          return;
        }
        this[isFirstChangeKey] = !!(this[isFirstChangeKey] === undefined);
        const simpleChange: SimpleChange<T> = {
          previousValue: this[cachedValueKey],
          currentValue: value,
          firstChange: this[isFirstChangeKey],
          isFirstChange: () => this[isFirstChangeKey],
        };
        this[cachedValueKey] = value;
        callback.call(this, value, simpleChange);
      },
      get: function (): T {
        return this[cachedValueKey];
      },
    });
  };
}
