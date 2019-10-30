function LinkedSuperList() {
    LinkedList.call(this);
}

LinkedSuperList.prototype = Object.create(LinkedList.prototype);
LinkedSuperList.prototype.constructor = LinkedSuperList;

LinkedSuperList.prototype.map = function() {

};
LinkedSuperList.prototype.reduce = function() {};
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


