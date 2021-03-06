import makeOrganism from '../../../src'
import extractFromDOM from '../../../src/adjustArgs/extractFromDOM'
import Calculator from '../components/Calculator'

export default makeOrganism(Calculator, {
  initial: ({ initialValue = 0 }) => ({ value: initialValue }),
  changeValue: (props, { value }) => ({ value: parseInt(value, 10) || '' }),
  // Or more robust number input handling with fallback to previous value:
  // changeValue: (props, { target: { value: newValue } }) => ({ value: previousValue }) => ({
  //   value: newValue && (parseInt(newValue, 10) || previousValue)
  // }),
  double: () => ({ value }) => ({ value: (value || 0) * 2 }),
  add3: () => ({ value }) => ({ value: (value || 0) + 3 })
}, {
  adjustArgs: extractFromDOM
})
