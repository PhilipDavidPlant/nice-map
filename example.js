function niceMap (key, role){
  const headers = { admin:0, manager:1, peon:2, other:3, averylongone:4, small:5 }
  return {
      //      admin | manager | peon | other | averylongone | small
      one:   [  1,       1,      1,      1,         1,          1, ],
      two:   [  1,       1,      1,      1,         1,          1, ],
      three: [  1,       1,      1,      1,         1,          1, ],
      four:  [  1,       1,      1,      1,         1,          1, ],
      five:  [  1,       1,      1,      1,         1,          1, ],
      six:   [  1,       1,      1,      1,         1,          1, ],
      seven: [  1,       1,      1,      1,         1,          1, ],

  }[key][headers[role]];
}