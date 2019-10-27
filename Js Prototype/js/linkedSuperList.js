function LinkedSuperList() {
    LinkedList.call(this);
}

LinkedSuperList.prototype = Object.create(LinkedList.prototype);
LinkedSuperList.prototype.constructor = LinkedSuperList;

LinkedSuperList.prototype.map = function() {};
LinkedSuperList.prototype.reduce = function() {};
LinkedSuperList.prototype.reverse = function() {};

const linkedSuperList = new LinkedSuperList();