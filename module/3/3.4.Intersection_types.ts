interface Knife{
    cut(): void;
}
interface BottleOpner{
    openBotte(): void;
}
interface Screwdriver{
    turnScrew(): void;
}

type SwissArmKnife = Knife & BottleOpner & Screwdriver;

function use(tool:SwissArmKnife) {
    console.log("I can do anything!");

    tool.cut();
    tool.openBotte();
    tool.turnScrew();
}

use({
    cut: () => {
        console.log('cut');
    },
    openBotte: () => {
        console.log('openBotte');
    },
    turnScrew: () => {
        console.log('tuenScrew');
    }
} as SwissArmKnife)