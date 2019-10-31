function LinkedSuperList() {
    LinkedList.call(this);
}

LinkedSuperList.prototype = Object.create(LinkedList.prototype);
LinkedSuperList.prototype.constructor = LinkedSuperList;

LinkedSuperList.prototype.map = function (f) {
    if (typeof f != "function") return this;
    const newList = new LinkedSuperList();
    let tmp = this.root;
    let i = 0;
    while (tmp.next) {
        tmp = tmp.next;
        newList.push(f(tmp.el, i, LinkedSuperList));
        i++;
    }
    return newList;
}
LinkedSuperList.prototype.reduce = function (f, initValue) {
    if (typeof f != "function") return 0;
    let result = 0;
    if (initValue) result = initValue;
    let tmp = this.root;
    let i = 0;
    while (tmp.next && tmp.next != null) {
        tmp = tmp.next;
        result = f(result, tmp.el, i, LinkedSuperList)
        i++;
    }
    return result;
}
LinkedSuperList.prototype.reverse = function() {

    let a = [];
    let tmp = this.root;
    i = 0;
    while(tmp.next != null){
        a[i] = tmp.next.el;
        tmp = tmp.next;
        i++;
    }
    linkedSuperList.clear();
    for(let i = a.length; i > 0; i--){
        linkedSuperList.push(i);
    }
    return linkedSuperList;

}

const linkedSuperList = new LinkedSuperList();


