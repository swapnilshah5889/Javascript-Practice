let arr1 = [1,2,3,4,5];
let arr2 = [2,4,6,7,8,10];

let jsonArr = [
    {name:"tom", age:20, occupation:"software developer", address:"290 Baker St", salary:100000},
    {name:"harry", age:30, occupation:"software developer", address:"234 Liberty St", salary:120000},
    {name:"rajesh", age:31, occupation:"graphic designer", address:"450 Baker St", salary:210000},
    {name:"mahesh", age:26, occupation:"lawyer", address:"320 Winkle St", salary:140000},
    {name:"gaurav", age:20, occupation:"doctor", address:"578 Wagenen St", salary:150000},
    {name:"parag", age:21, occupation:"project manager", address:"50 Gerald St", salary:170000},
    {name:"mark", age:22, occupation:"scrum master", address:"453 Newark St", salary:190000},
    {name:"elon", age:39, occupation:"qa tester", address:"289 Lincoln St", salary:80000},
    {name:"mike", age:31, occupation:"game developer", address:"983 Charles St", salary:90000},
    {name:"peter", age:27, occupation:"lawyer", address:"123 Chicago St", salary: 60000},
    {name:"harsh", age:25, occupation:"business owner", address:"456 Mulberry St", salary:135000},
    {name:"raj", age:23, occupation:"investment banker", address:"888 Thorne St", salary:179000},
    {name:"ritesh", age:24, occupation:"architect", address:"56 Baker St", salary:210000},
];

/*******  Find *******/ 
const doFindOperations = () => {
    const data = arr1.find((val) => {
        // this function must return boolean value for every element in the array,
        // where true stands for found and false for not found
        return val == 2;  
    })  
    
    console.log(data); // This will print 2 as find returns the first object that matched
    
    // Find in a json array
    let person = jsonArr.find((person, index) => {
        return person.name == "raj";
    })
    console.log(person); // This will print complete object for the first person whose name is raj
    
    
    //Find with a callback function
    
    function findPerson(person) {
        return person.name == "harry";
    }
    person = jsonArr.find(findPerson);
    console.log(person); // This will print complete object of harry
}


/*******  Pop and Push *******/
const popAndPush = () => {

    //Pop removes last element the same way as in stack
    const element = arr1.pop(); 
    console.log(element); // It will remove 5 as it is the last element

    // Add the new element to the end of the array
    arr1.push(7); 
    console.log(arr1); 
}

const ShiftUnshift = () => {
    // Shifts elements to a lower index and the first element is removed
    console.log("Array before shift : "+arr1);
    arr1.shift();
    console.log("Array after shift : "+arr1);

    // Unshift adds a new element to the beginning of the array
    console.log("Array before unshift : "+ arr1);
    arr1.unshift(10);
    console.log("Array after unshift : "+arr1);
}

const MergeArrays = () => {
    // Concat merges two arrays
    console.log("Array1 : "+arr1);
    console.log("Array2 : "+arr2);
    let arr3 = arr1.concat(arr2); // Concat can take any number of arrays to merge
    console.log("After merging");
    // Original arrays are not modified, always a new merged array is returned 
    console.log("Array1 : "+arr1);
    console.log("Array2 : "+arr2); 
    console.log("Array3 : "+arr3);
}

const FlatArray = () => {
    const twoDArr = [[1,2],[3,4],[5,6]];
    console.log("2D Array: ");
    console.log(twoDArr)
    const flatArr = twoDArr.flat();
    console.log("New Flattened Array: ");
    console.log(flatArr);
}

const DeepAndShallowCopy = () => {
    // ... operator spreads the array and creates a deep copy by creating a new array
    const deepCopy = [...arr1];
    console.log(deepCopy);

    console.log("Arr1 === deepcopy : " + (arr1===deepCopy));
    // Shallowcopy is created or basically a reference to the arr1
    // so any change in arr1 is reflected in shallow copy and vice versa
    // as they are pointing to the same array in memory
    const shallowCopy = arr1;
    console.log("Arr1 === Shallowcopy(reference to Arr1) : " +(arr1 === shallowCopy) );
}

const SpliceAndSlice = () => {
    // splice is used to add and remove elements at index
    // at index 2, remove 0 elements, add 10 and 12 at index 2
    console.log("Array before splice: "+arr1);
    arr1.splice(2,0,10,12);
    console.log("Array after splice: "+arr1);

    // Only remove elements. Splice does not leave holes while deleting like push and pop
    // Hence it must be preffered over delete
    console.log("Array before splice: "+arr1);
    //Remove 3 elements starting from index 2
    arr1.splice(2,3);
    console.log("Array after splice: "+arr1);

    // Delete element using delete keyword (not recommended)
    console.log("Array before delete: "+arr1);
    // This will leave a hole in the array
    delete arr1[1];
    console.log("Array after delete: ");
    console.log(arr1);

    // Array Slice - works same as substring in java
    console.log("Array to be sliced : "+arr2);
    const slicedArr = arr2.slice(1,3);
    console.log("New sliced array : " + slicedArr);
}

const forEachMethod = () => {
    // Does not return anything. Will iterate over every element.
    let personArr = [];
    jsonArr.forEach((person, index) => {
        console.log(person.name);
        personArr.push({name:person.name});
    }) 

    console.log(personArr);

    // Update jsonArray in place using foreach
    jsonArr.forEach((person, index, arr) => {
        arr[index].salary += person.salary*0.1; 
            arr[index].name += ' Last name';
    })
    console.log(jsonArr);
}

const filterMethod = () => {

    // Returns new array with all elements that matched the condition
    // in the callback function
    const filteredArr = jsonArr.filter((person, index, arr) => {
        if(person.salary>200000) {
            // New array arr will now have 150 more in these 2 person's salary
            arr[index].salary += 150;
            return true;
        }
        return false;
        // we can also write "return person.salary>200000", instead of if else;
    });
    console.log(filteredArr);

} 

const mapMethod = () => {

    // Map method creates a new array and also applies the manipulation 
    // written in the function
    const tempArr = jsonArr.map((person, index, arr) => {
        // Increase every person's salary by 10%;
        person.salary += person.salary*0.1;
        return person;
    })

    console.log(tempArr);
}

const reduceMethod = () => {
    
    // Return a single value by iterating on every element
    // First it takes function that will process every element
    // 2nd it will take initial value of accumulator that will
    // be returned after iterating through all elements.
    const dataObj = jsonArr.reduce((acc, person, index, arr)=>{
        acc.total += person.salary;
        acc.count++;
        // If this is not returned, the acc will not update for the next iteration
        acc.average = acc.total/acc.count;
        return acc;
    },{total:0, count:0, average:0})
    console.log(dataObj)

    // We can also create a filter or a new deep copy using reduce
    const filteredArr = jsonArr.reduce((acc, person) => {
        if(person.salary>150000) {
            acc.push(person);
        }
        return acc;
    }, [])
    console.log(filteredArr);
}

const SomeAndEvery = () => {
    //Some returns true if one or more element satisfies the condition
    // Returns boolean true or false
    if( jsonArr.some((person, index, arr) => {
        return person.age>30;}) ) {
        console.log("Persons are present who are above 30 in age");
    }
    else {
        console.log("No person is above 30 in age");
    }

    // Every returns true only if all elements satisfy the condition
    if(jsonArr.every((person, index) => {
        return person.salary>100000;
    })) {
        console.log("All person have salary greater than 100,000");
    }
    else {
        console.log("Not all person have salary greater than 100,000");
    }

}

// doFindOperations();
// popAndPush();
// ShiftUnshift();
// MergeArrays();
// FlatArray();
// DeepAndShallowCopy();
// SpliceAndSlice();
// forEachMethod();
// filterMethod();
// mapMethod();
// reduceMethod();
SomeAndEvery();