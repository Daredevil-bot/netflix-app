import React ,{useState,useEffect} from 'react'


function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true);

            }
            else setShow(false);
        })
        
        return () => {
            window.removeEventListener("scroll", );
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
                <img className="nav_logo" src="https://img.icons8.com/color/2x/netflix.png" alt="Netflix" />
                <img className="nav_avatar" src="https://tse4.mm.bing.net/th?id=OIP.WQtvVSX_upiNrA-gk9TEpAAAAA&pid=Api&P=0&w=300&h=300" alt="logo" />
                 
        </div>
    )
}

export default Nav
