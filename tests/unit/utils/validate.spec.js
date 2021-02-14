import { validUsername, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('editor')).toBe(true)
    expect(validUsername('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('https://github.com/jackyyrose/vue-admin-dashboard')).toBe(true)
    expect(isExternal('http://github.com/jackyyrose/vue-admin-dashboard')).toBe(true)
    expect(isExternal('github.com/jackyyrose/vue-admin-dashboard')).toBe(false)
    expect(isExternal('/dashboard')).toBe(false)
    expect(isExternal('./dashboard')).toBe(false)
    expect(isExternal('dashboard')).toBe(false)
  })
})
