export class modelList {
    src: Array<string>
    constructor(){
        this.src = new Array<string>
    }
}

export class dataPoint {
    constructor(
    public uiImage: UIImage,
    public shape: GLTFShape
  ) {}
}