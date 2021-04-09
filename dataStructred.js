    function distincElem(arr1,arr2) {
        let finalArr=[];
    arr1.forEach(element => {
        if(arr2.includes(element)==false){
            finalArr.push(element)
        }   
        });
        arr2.forEach(element => {
            if(arr1.includes(element)==false){
                finalArr.push(element)
            }   
            });
    return finalArr;

        }
    function sumArray(arr){
        somme=0;
        arr.forEach(element=>{
            somme=somme+element;
        })
        return somme;
    }
    arr1=[3, 1, 7, 9];
    arr2=[2, 4, 1, 9, 3];
    
    console.log(distincElem(arr1,arr2))
    console.log(sumArray(distincElem(arr1,arr2)));


    //   overrlaoing elements in a set 
    function overlapping (arr1,arr2) {
        let finalArr=[];
    arr1.forEach(element => {
        if(arr2.includes(element)){
            finalArr.push(element)
        }   
        });
        
    return finalArr;

        }
        let arr3=[12, 13, 6, 10];
        let arr4=[13, 10, 16, 15];
        console.log(overlapping(arr3,arr4))
        console.log(sumArray(overlapping(arr3,arr4)));

        // Hashtable solution 

        // class HashTable {
        //     constructor() {
        //       this.values = {};
             
        //     }
          
        //     calculateHash(key) {
        //       return key.toString().length % this.size;
        //     }
          
        //     add(key, value) {
        //       const hash = this.calculateHash(key);
        //       If (!this.values.hasOwnProperty(hash)) {
        //         this.values[hash] = {};
        //       }
        //       if (!this.values[hash].hasOwnProperty(key)) {
        //          this.length++;
        //       }
        //       this.values[hash][key] = value;
        //     }
          
        //     search(key) {
        //        const hash = this.calculateHash(key);
        //        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        //          return this.values[hash][key];
        //        } else {
        //          return null;
        //        }
        //     }
        //   }
          
        //   //create object of type hash table
        //   const ht = new HashTable();
        //   //add data to the hash table ht
        //   ht.add("Canada", "300");
        //   ht.add("Germany", "100");
        //   ht.add("Italy", "50");
          
        //   //search
        //   console.log(ht.search("Italy"));