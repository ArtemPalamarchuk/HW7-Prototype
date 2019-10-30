function LinkedSuperList() {
    LinkedList.call(this);
}

LinkedSuperList.prototype = Object.create(LinkedList.prototype);
LinkedSuperList.prototype.constructor = LinkedSuperList;

LinkedSuperList.prototype.map = function() {};
LinkedSuperList.prototype.reduce = function() {};
LinkedSuperList.prototype.reverse = function() {
    let tmp = this.root;
    let flag = this.root.next.next;

    while (flag.next !=null){
        while(tmp.next !== null){
            tmp = tmp.next;
        }
    }
    return "return"
};

const linkedSuperList = new LinkedSuperList();
linkedSuperList.push(1);
linkedSuperList.push(2);
linkedSuperList.push(3);
linkedSuperList.push(4);
linkedSuperList.push(5);


