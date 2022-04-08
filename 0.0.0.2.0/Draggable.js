class Draggable{
    UpDate;
    // 
    constructor(Options){
        this.SetUpList(Options);
        this.List = Options.List;
        if(Options.UpDate) this.UpDate = Options.UpDate;
        
        for (let ListItem of Options.Element.children) {
            this.addDnDHandlers(ListItem)
        };
    };
    // 
    SetUpList(Options){
        let{ List , Element , Template } = Options;
        // 
        if (! Element)throw Error("This List isn't Exist");
        if (! List)throw Error("The Data isn't Exist");
        if (! Array.isArray(List))throw Error("The List isn't an Array");
        if (! Template)throw Error("Please Add a Template function");
        if (typeof Template != 'function' )throw Error("Please Add a function as Template");
        // 
        List.forEach(item => Element.innerHTML += Template(item));
    };
    addDnDHandlers(e){
        e.setAttribute('draggable',true);
        e.addEventListener('dragstart' , this.handleDragStart.bind(this));
        e.addEventListener('drageneter' , this.handledrageneter.bind(this));
        e.addEventListener('dragover' , this.handledragover.bind(this));
        e.addEventListener('dragleave' , this.handledragleave.bind(this));
        e.addEventListener('drop' , this.handledrop.bind(this));
        e.addEventListener('dragend' , this.handledragend.bind(this));
    };
    handleDragStart(e){
        this.dragSrcEl = e.target;
        e.dataTransfer.setData('text/html' , e.target.outerHTML);
        e.target.classList.add('DragEl');
    };
    handledrageneter(e){
    };
    handledragover(e){
        if(e.preventDefault) e.preventDefault();
        let target = e.target.closest('.L-Item');

        target.classList.add('Over');
    };
    handledragleave(e){
        let target = e.target.closest('.L-Item');

        target.classList.remove('Over');

    };
    handledrop(e){
        let target = e.target.closest('.L-Item');

       if(this.dragSrcEl != target) {
            target.parentNode.removeChild(this.dragSrcEl);
            let dropHTML = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin' , dropHTML);
            this.addDnDHandlers(target.previousSibling);
       }
       target.classList.remove('Over');
    };
    handledragend(e){
        let NewList = [];

        e.target.classList.remove('DragEl');
        list.querySelectorAll('.L-Item').forEach(elm => NewList.push(this.List.find(item => elm.id == item.id)));
        this.UpDate(NewList);
    };
};