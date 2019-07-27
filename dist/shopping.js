class ShoppingCartTable {
    constructor() {
        //   this.table = document.createElement('table');
        //   this.thead = <HTMLTableSectionElement> this.table.createTHead();
        //   this.tbody = <HTMLTableSectionElement> this.table.createTBody();
        //   var hrow = <HTMLTableRowElement> this.table.tHead.insertRow(0);
        //   var cell = hrow.insertCell(0);
        //   cell.innerHTML = "Module ID";
        //   var closebtns = document.getElementsByClassName("close");
        //   var cell = hrow.insertCell(1);
        //   var button = document.createElement("button");
        // var li = document.createElement("li");
        // var inputValue = document.getElementById("myInput").nodeValue;
        // var t = document.createTextNode(inputValue);
        // li.appendChild(t);
        this.count = 0;
    }
    newElement() {
        console.log("in new");
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput");
        var t = document.createTextNode(inputValue.value);
        li.appendChild(t);
        if (inputValue.value === '') {
            alert("You must write something!");
        }
        else {
            document.getElementById("myUL").appendChild(li);
            ++this.count;
        }
        var inputValueToset = document.getElementById("myInput");
        inputValueToset.value = '';
        let span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        let counttextarea = document.getElementById("counttextarea");
        counttextarea.value = "Total items:" + this.count;
        var closebtns = document.getElementsByClassName("close");
        span.onclick = () => {
            var div = span.parentElement;
            div.style.display = "none";
            --this.count;
            let counttextarea = document.getElementById("counttextarea");
            counttextarea.value = "Total items:" + this.count;
        };
        // for (let i = 0; i < closebtns.length; i++) {;
        //     closebtns[i].addEventListener("click", function()  {
        //     var div = this.parentElement;
        //     div.style.display = "none";
        //     --this.count;
        //     let counttextarea = <HTMLTextAreaElement>document.getElementById("counttextarea");
        //     counttextarea.value = "Total items:" + this.count;
        //   })
        // }
    }
}
window.onload = () => {
    // var docContext = document.getElementById('content');
    // var button = document.createElement("button");
    //  button.innerText = "Add";
    // var myTableObj = new ShoppingCartTable();
    // document.body.innerHTML = greeter(user);
    // button.onclick = (e: Event) => greeter(user);
    // docContext.appendChild(button);
    var myInput = document.createElement("input");
    myInput.id = "myInput";
    var addbutton = document.createElement("button");
    addbutton.className = 'button';
    addbutton.innerText = "Add to shopping cart";
    let shoppingoperation = new ShoppingCartTable();
    addbutton.addEventListener("click", (e) => shoppingoperation.newElement());
    var myUL = document.createElement("ul");
    myUL.id = "myUL";
    document.body.appendChild(myInput);
    document.body.appendChild(addbutton);
    document.body.appendChild(myUL);
    var counttextarea = document.createElement("textarea");
    counttextarea.id = 'counttextarea';
    counttextarea.value = "Total items:" + shoppingoperation.count;
    document.body.appendChild(counttextarea);
    // var closebtns = document.getElementsByClassName("close");
    // document.body.appendChild(button);
    // docContext.appendChild(closebtns);
};
//# sourceMappingURL=shopping.js.map