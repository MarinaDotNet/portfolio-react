
export default function ColapsedNavBar(){

    const collapsedNavBar = () => {
        var navBar = document.getElementById("nav-buttons");
        if(navBar){
           navBar.classList.toggle("responsive");
        }
    };
    return(
        <button title="icon-hamburger" className="hamburger-icon" onClick={collapsedNavBar}> 
            <svg height="5vh" width="5vw" id="hamburger" viewBox="5 5 30 30">
            <line
            id="hamburgerLine1"
            stroke="var(--color-highlight-primary)"  
            strokeWidth='3'
            strokeLinecap='round'
            x1='0'
            y1='25'
            x2='30'
            y2='25'
            ></line>
            <line
            id="hamburgerLine2"
            stroke='var(--color-highlight-primary)'  
            strokeWidth='3'
            strokeLinecap='round'
            x1='0'
            y1='17.5'
            x2='30'
            y2='17.5'
            ></line>
            <line
            id="hamburgerLine3"
            stroke='var(--color-highlight-primary)'  
            strokeWidth='3'
            strokeLinecap='round'
            x1='0'
            y1='10'
            x2='30'
            y2='10'
            ></line>
          </svg>
        </button>
    );
}