export class Product {
  public productName: string;
  public productDescription: string;
  public productCategory: string;
  public productPrice: number;
  public productId: number;
  public productImage: string;

  constructor({productName}, {productDescription},{productPrice}) {
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice=productPrice;
    this.productCategory=null;
    this.productId=null;
    this.productImage=null;
  }
}
