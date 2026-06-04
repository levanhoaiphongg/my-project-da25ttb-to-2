function inBCC(n)
{
    let result= "";
    let i=1;
    while(i<=10)
    {
    result+=`${n}x${i}=${n*i}<br>`;
    i++;
    }
    document.getElementById("result").innerHTML=result;
}