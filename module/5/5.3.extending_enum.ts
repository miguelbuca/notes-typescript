enum SourceEnum{
    value1 = <any>"value1",
    value2 = <any>"value2"
}
enum AdditionToSourceEnum {
    value3 = <any>'value3',
    value4 = <any>'value4'
}

// we need this type for TypeScript to resolve the types correctly
type TestEnumType = SourceEnum | AdditionToSourceEnum;
// and we need this value "instance" to use values
let TestEnum = Object.assign({}, SourceEnum, AdditionToSourceEnum);
// also works fine the TypeScript 2 feature
// let TestEnum = { ...SourceEnum, ...AdditionToSourceEnum };
function check(test: TestEnumType) {
 return test === TestEnum.value2;
}
console.log(TestEnum.value1);
console.log(TestEnum.value2 === <any>'value2');
console.log(check(TestEnum.value2));
console.log(check(TestEnum.value3));