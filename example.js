function niceMap (key, role){

    const roles = {admin: 0, manager: 1, underling: 2, peon: 3}

    return !!{
        //            Admin | Manager | Underling | Peon
        FeatureOne:   [ 1,       1,        1,         1 ],
        FeatureTwo:   [ 0,       1,        1,         1 ],
        FeatureThree: [ 1,       1,        1,         1 ],
        FeatureFour:  [ 1,       1,        1,         1 ],
        FeatureFive:  [ 1,       1,        1,         1 ],
        
    }[key][roles[role]];

}

console.log(niceMap('FeatureOne', 'admin')); // 1
console.log(niceMap('FeatureOne', 'peon')); // 1
console.log(niceMap('FeatureTwo', 'admin')); // 0