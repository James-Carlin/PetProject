export class Dog {
  id: number;
  name: string;
  imageURL: string;

  constructor(id: number, breed: string, imageURL: string){
    this.id = id;
    this.name = breed;
    this.imageURL = imageURL;
  }
}
