function arrayLastElementThree(arr, n) {
    for (let i = 0; i < n; i++) {
      const lastThree = arr.slice(-3);
      const sumOfLastThree = lastThree.reduce((a, b) => a + b, 0);
      arr.push(sumOfLastThree);
    }
    return arr;
  }
  
  
  
  const myArray = [1, 2, 3, 4, 5];
  const n = 3;
  const result = arrayLastElementThree(myArray, n);
  console.log(result);

  ////////////////////////////////////////////////////////////////////////////////
  

  function add() {

    if (inp.value != '' && !todo.includes(`${inp.value}`)) {
      todo.push(inp.value);
      inp.value = '';
  
      listcount();
    }
    else {
      alert('Bu deyer daxil edile bilmez!');


    }
  }



  //////////////////////////////////////////////////////////////////////////


  function del() {


    for (let item of todo) {
        if (!item == '') {
            data = todo.splice(length - 1, 1,)
            break;
            
        }
        
    }

    ulist.innerHTML = data;

}

btn_delete.addEventListener('click', del);


let arrNum = [0, 1, 2, 3];
let n = 6;


  