export const prev = (content) => {
    setIndex(a => a -1);

    if(index <= 0){
        setIndex(content.length -1)
    }
}

export const next = (content) => {
    setIndex(a => a +1);
    if(index >= content.length -1){
        setIndex(0)
    }
}