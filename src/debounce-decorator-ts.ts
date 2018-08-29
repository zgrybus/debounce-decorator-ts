export function debounceFn(
  miliseconds: number = 100,
  timeoutPropertyName: string = 'timeoutFn'
): MethodDecorator {
  return function(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): TypedPropertyDescriptor<any> {
    Object.defineProperty(target, timeoutPropertyName, {
      value: 0,
      writable: true
    })
    const originalMethod: Function = descriptor.value

    descriptor.value = function() {
      if (this[timeoutPropertyName]) clearTimeout(this[timeoutPropertyName])
      const args = arguments
      this[timeoutPropertyName] = setTimeout(() => {
        originalMethod.apply(this, args)
      }, miliseconds)
    }

    return descriptor
  }
}
