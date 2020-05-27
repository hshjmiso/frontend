/**
 *
 */

let address = 'Seoul';
let members = {};
let addFamily = function(age, name, role) {
    this.members[role] = { age, name };
};
let getHeadCount = function() {
        return Object.keys(this.members).length;
};

let family = { address, members, addFamily, getHeadCount };
 
family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadCount());
console.log(family);