function foo(a,b){    if(a === 0 || b === 0) {        return 0;    }    if (a === 0 && b === 0) {        return 0; //Explicitly handle both zero case    }    return a/b;}foo(0,0); // returns 0