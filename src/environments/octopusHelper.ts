//
// Helpers to get correct values when octopus replacement tags are used
//

export function setValue(
  substitute: any,
  defaultValue: String | Boolean | Number,
) {
  if (typeof substitute === 'string' && substitute.startsWith('#{')) {
    // when still replacement tag, return default
    return defaultValue;
  }

  if (typeof defaultValue === 'number') {
    // Numbers
    return +substitute;
  } else if (typeof defaultValue === 'boolean') {
    // Booleans
    return substitute === 'false' || substitute === '0' || substitute === 'no'
      ? false
      : !!substitute;
  }
  // string
  return substitute;
}
