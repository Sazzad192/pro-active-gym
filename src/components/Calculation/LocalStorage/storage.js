function btnBreak(peram){
    const text = document.getElementById(peram);
    const second = text.innerText;
    const setTime = document.getElementById('break-sec');
    setTime.innerText = second + 'second';

    localStorage.setItem('Break-Time', second);
    
    return second;
}

const getStored = () =>{
    const isData = localStorage.getItem('Break-Time');
    if(isData){
        const setTime = document.getElementById('break-sec');
        setTime.innerText = isData + ' second';
    }
}

export {
    btnBreak,
    getStored
}