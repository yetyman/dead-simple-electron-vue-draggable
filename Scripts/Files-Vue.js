var filesVM;
const filesVMStructure = {//vue template structure. 
    data() {//model data 
        var structure = {
            files: [
                "danny boi.txt",
                "sam hyde.txt",
                "samantha burgeiss.txt",
                "coffee good.txt",
                "sugar gooooood.txt",
                "watermelon nice.txt",
                "i am a file.txt",
                "so many files.txt",
                "hello.txt",
                "what's up.txt",
                "bo burnham.txt",
                "dun dun dun.txt",
                "marty.txt",
                "9 to 5.txt",
            ]
        };
        return structure;
    },
    methods: {
    }
}
async function LoadPage() {
    console.info("Loading Page");
    
    //all old sortable js code. so simple. so straight forward. so amazing
    //$('#iamaportionofthepage').sortable({
    //    animation: 250,
    //    //onEnd: fileOrderMoved
    //});

    filesVM = Vue.createApp(filesVMStructure);
    filesVM.component('draggable', VueDraggableNext.VueDraggableNext);
    filesVM.mount('#iamaportionofthepage');
}