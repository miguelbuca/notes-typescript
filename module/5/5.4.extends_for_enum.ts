class Enum {
    constructor(protected value: string) { }
    public toString() {
        return String(this.value);
    }
    public is(value: Enum | string) {
        return this.value = this.toString()
    }
}

class Source_Enum extends Enum{
    public static value1 = new Source_Enum('value1')
    public static value2 = new Source_Enum('value2')
}

class Test_Enum extends Source_Enum {
    public static value3 = new Test_Enum('value3');
    public static value4 = new Test_Enum('value4');
}

function checkIn(test: Test_Enum) {
    return test === Test_Enum.value2;
   }
   let value1 = Test_Enum.value1;
   console.log(value1 + 'hello');
   console.log(value1.toString() === 'value1');
   console.log(value1.is('value1'));
   console.log(!Test_Enum.value3.is(Test_Enum.value3));
   console.log(checkIn(Test_Enum.value2));
   // this works but perhaps your TSLint would complain
   // attention! does not work with ===
   // use .is() instead
   console.log(Test_Enum.value1 == <any>'value1');