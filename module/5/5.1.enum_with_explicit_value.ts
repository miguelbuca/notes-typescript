enum MimeType_1 {
    JPEG,
    PNG,
    PDF
}

enum MimeType_2 {
    JPEG = <any>'image/jpeg',
    PNG = <any>'image/png',
    PDF = <any>'application/pdf'
}

enum MimeType_3 {
    JPEG = 'image/jpeg',
    PNG = 'image/png',
    PDF = 'application/pdf',
}

enum MyType_4 {
    Value = 3,
    ValueEx = 30,
    ValueEx2 = 300
}

enum FancyType {
    OneArr = <any>[1],
    TwoArr = <any>[2, 2],
    ThreeArr = <any>[3, 3, 3]
}
   
   
console.log(MimeType_2.PNG)