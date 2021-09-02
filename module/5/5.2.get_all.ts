enum SomeEnum { A, B };

let enumValues: Array<string> = [];

for (const value in SomeEnum) {

    if (typeof SomeEnum[value] === "number"){
        enumValues.push(value)
    }
}

console.log(enumValues)