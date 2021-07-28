class LeisTest{
  private name = ''
  constructor(name: string) {
    this.name = name
  }
  /**
   * 返回名称
   * @returns {string} name
   */
  getName (): string {
    return this.name
  }
}
const leisTest = new LeisTest('leis')
export default leisTest
