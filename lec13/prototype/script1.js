grandparent={
    money:10000
}
parent={
    car:"Toyota"
}
child={
    toy:"doll"
}
console.log(child.__proto__==parent.__proto__);
console.log(child.toy)
console.log(child.car)
console.log(child.money)

child.__proto__=parent;
console.log(child.toy)
console.log(child.car)
console.log(child.money)

parent.__proto__=grandparent;
console.log(child.toy)
console.log(child.car)
console.log(child.money)
console.log(child.__proto__==parent.__proto__);