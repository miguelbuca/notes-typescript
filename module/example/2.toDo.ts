//#region Interface

interface ILifeCicle{
    activity: string
}
interface IClock{
    time: {
        hours: string | number,
        minute?: string | number
    } 
}

interface Iconstructor<T>{
    list: T[],
    add(item: T) : void,
    delete(index: number) : void,
    edit(index: number, item: T) : void,
    get(): T[]
}
//#endregion

//#region type

type toDo = { action: ILifeCicle, moment: IClock }
//#endregion

//#region class

class ToDo<T> implements Iconstructor<T>{
    list: T[] = [];
    add(item: T) {
        this.list.push(item);
    }
    delete(index: number) {
        delete this.list[index];
    }
    edit(index: number, item: T) {
        this.list[index] = item;
    }
    get(): T[] {
        return this.list;
    }
   
}

//#endregion

const to = new ToDo<toDo>()

to.add({
    action: {
        activity: 'write code'
    },
    moment: {
        time: {
            hours: 14,
            minute: 15
        }
    }
})

to.add({
    action: {
        activity: 'listiner music'
    },
    moment: {
        time: {
            hours: 20,
            minute: 15
        }
    }
})

console.log(to.get())

to.delete(0)

to.edit(1,{
    action: {
        activity: 'play footeball'
    },
    moment: {
        time: {
            hours: 6,
            minute: 17
        }
    }
})

console.log(JSON.stringify(to.get()))
