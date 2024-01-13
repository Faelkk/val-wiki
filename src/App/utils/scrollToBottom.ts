export default  function scrollToBottom() {
    const {scrollHeight,clientHeight} = document.documentElement


    
    window.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth"
    })

}