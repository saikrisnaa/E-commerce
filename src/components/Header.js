import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >SHOP ME</div>
            <div onClick={() => props.handleShow(true)}> myCart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;