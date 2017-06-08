import { setValue } from './octopusHelper'

describe('octopusHelper', () => {
  describe('setValue', () => {
    test('string', () => {
      expect(setValue('#{test}', 'abc')).toBe('abc')
      expect(setValue('1234', 'abc')).toBe('1234')
    })

    test('boolean', () => {
      // not replaced
      expect(setValue('#{test}', true)).toBe(true)

      // falsy
      expect(setValue('false', true)).toBe(false)
      expect(setValue('0', true)).toBe(false)
      expect(setValue('no', true)).toBe(false)

      // truety
      expect(setValue('true', true)).toBe(true)
      expect(setValue('yes', true)).toBe(true)
      expect(setValue('1', true)).toBe(true)
    })

    test('number', () => {
      // not replaced
      expect(setValue('#{test}', 123)).toBe(123)

      // values
      expect(setValue(2000, 123)).toBe(2000)
      expect(setValue(20.00, 123)).toBe(20.00)
      expect(setValue(0, 123)).toBe(0)
    })
  })
})
