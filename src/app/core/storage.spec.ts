import { Storage } from './storage';

interface ITest {
  id: number;
  name: string;
}

describe('Storage', () => {
  let sut: Storage;
  beforeEach(() => {
    sut = new Storage(localStorage);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('set/get number', () => {
    sut.set('myKey', 12345);
    const result = sut.get('myKey', 0);
    expect(result).toBe(12345);
  });

  test('set/get number with default', () => {
    const result = sut.get('myKey', 0);
    expect(result).toBe(0);
  });

  test('set/get typesafe object', () => {
    const obj: ITest = { id: 12, name: 'test' };
    sut.set('myKey', obj);
    const result = sut.get<ITest>('myKey');
    expect(result.id).toBe(12);
  });

  test('keys', () => {
    sut.set('myKey', 12345);
    sut.set('abc', '11111');
    const result = sut.keys();
    expect(result).toEqual(['myKey', 'abc']);
  });

  test('rm', () => {
    sut.set('myKey', 12345);
    expect(sut.keys()).toHaveLength(1);
    sut.rm('myKey');
    expect(sut.keys()).toHaveLength(0);
  });

  test('prefix', () => {
    sut.prefix = 'myApp';
    sut.set('myKey', 12345);
    expect(Object.keys(localStorage)).toEqual(['myApp.myKey']);
  });

  test('flush', () => {
    sut.set('myKey', 12345);
    sut.set('abc', '11111');
    expect(sut.keys()).toHaveLength(2);
    sut.flush();
    expect(sut.keys()).toHaveLength(0);
  });
});
