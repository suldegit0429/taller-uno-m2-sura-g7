let codigos = ["A-10", "C-30", "B-20", "D-40"];
codigos.sort();
codigos.splice(2,1);
codigos.unshift("X-99");
codigos.reverse();    

console.log(codigos);