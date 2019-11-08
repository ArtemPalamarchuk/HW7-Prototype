function LinkedList() {
    List.call(this);
    this.root = {
        next: null,
        prev: null,
        length: 0,
    }
}

LinkedList.prototype = Object.create(List.prototype);

LinkedList.prototype.pop = function() {
    if(this.root.length === 0){
        return false;
    }

    if(this.root.length === 1){
        let deleted = this.root.next;
        this.root.next = null;
        this.root.length --;
        return deleted;
    }

    let tmp = this.root;
    while(tmp.next !== null){
        tmp = tmp.next;

        if(tmp.index === (this.root.length - 2) ){
            let deleted = tmp.next;
            tmp.next == null;
            this.root.length --;
            return deleted
        }
    }
};
LinkedList.prototype.push = function(value) {
    const newNode = this.createNode(value);
    let tmp = this.root;
    while (tmp.next && (tmp.next !== this.root)){
        tmp.next.prev = tmp;
        tmp = tmp.next;
        newNode.prev = tmp
    }
    tmp.next = newNode;
    this.root.prev = null;
    this.root.length++;
    return true;
};
LinkedList.prototype.sort = function(f) {
    if(f && (typeof f == "function" )){
        let firstNoda = this.root.next;
        while(firstNoda && firstNoda.next){
            if(f(firstNoda.el, firstNoda.next.el) > 0){
                [firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
            }
        }
    }else{
        let firstNoda = this.root.next;
        if(!firstNoda){
            return false;
        }
        while(firstNoda && firstNoda.next){
            if(String(firstNoda.el) > String(firstNoda.next.el)){
                [firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
            }
            firstNoda = firstNoda.next;;
        }
    }
};
LinkedList.prototype.clear = function() {
    this.root.next = null;
    this.root.prev = null;
    this.root.length = 0;
};
LinkedList.prototype.shift = function() {
    if(this.root.next = null){
        return false;
    }else{
        const tmp = this.root.next.next;
        this.root.next = tmp;
        this.root.length--;
    }
};
LinkedList.prototype.length = function() {
    return this.root.length;
};
LinkedList.prototype.unshift = function(value) {
    const newNode = this.createNode(value);
    if(this.root.next == null){
        this.root.next = newNode;
        this.root.length++;
    }else{
        let tmp = this.root.next;
        this.root.next = newNode;
        this.root.next.next = tmp;
        this.root.length++;
    }
    return true;
};
LinkedList.prototype.toString = function() {
    let str = "";
    let tmp = this.root;
    while(tmp.next !== null){
        tmp = tmp.next;
        str += tmp.el + ", ";
    }
    str = str.substring(0, str.length - 2);
    return str;
};
LinkedList.prototype.createNode = function(el) {
    return {
        el : el ? el : null,
        next : null,
        prev : null,
        index : this.root.length,
    }
};

LinkedList.prototype.map = function(){};
LinkedList.prototype.reverse = function(){};
LinkedList.prototype.reduce = function(){};
