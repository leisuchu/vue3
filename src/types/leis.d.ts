import bigDecimal from 'js-big-decimal'
export { }
declare global{
  interface MyInfo{
    name: string;
  }
  interface Window{
    test: any;
    test2: any;
    BigDecimal: typeof bigDecimal;
  }
}