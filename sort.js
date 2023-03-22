let myarr = [10,4,20,22,45]

function mysort(myarr){
    for (let i=0;i< myarr.length-1;i++){
		let ans= false
          for (let j=0; j< myarr.length-i-1; j++)
		{
           if (myarr[j] > myarr[j+1])
			{
                let temp = myarr[j]
                myarr[j] = myarr[j+1]
                myarr[j+1] = temp
                ans = true
				}}}
return myarr
}
document.write("The Ascending order:" +myarr);