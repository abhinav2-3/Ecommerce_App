import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartCount } = useSelector((state) => state.custom);
  return (
    <div>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/Shop"}>
          <li>Shop</li>
        </Link>
        <Link to={"/Blog"}>
          <li>Blog</li>
        </Link>
        <Link to={"/About"}>
          <li>About</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link to={"/profile"}>
          <li>Profile</li>
        </Link>
        <Link to={"/login"}>
          <li>Login</li>
        </Link>
        <Link to={"/register"}>
          <li>Register</li>
        </Link>
        <Link to={"/cart"}>
          <li>Cart ({cartCount})</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;

// function Header(){
//   const {cartCount} = useSelector(state => state.custom);
//   let login = localStorage.getItem('user');
//   let prfl = "none";
//   if(login){
//     prfl = "block";
//   }
//   const [disp, setDisp] = useState("none");
//   const toggleVisibility = () => {
//     disp ==="none" ?setDisp("flex"):setDisp("none");
//   };
//   return (
//     <>
//       <header>
//             <div className="nameicon">
//             <li>{login ?<Link title='Profile' to={"/"}> <div className="prfl" title='Profile Setting' ><p><b>{localStorage.fullname}</b></p></div></Link>: <Link title='Login' to={"/login"}> <img src='login.png'/> <p>Login</p></Link>}</li>
//             </div>
//             <div className="container">
//                 <nav className="logoname" >
//                     <ul>
//                         <li className='cancel' onClick={toggleVisibility}><img src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png"/></li>
//                         <Link to={"/"}>        <li>Home</li>    </Link>
//                         <Link to={"/Shop"}>    <li>Shop</li>    </Link>
//                         <Link to={"/Blog"}>    <li>Blog</li>    </Link>
//                         <Link to={"/About"}>   <li>About</li>   </Link>
//                         <Link to={"/contact"}> <li>Contact</li>   </Link>
//                         {login ?<Link to={"/profile"} ><li>Profile</li>   </Link>:null}
//                     </ul>
//                         <Link to={"/Cart"}>
//                         <div className='cart' style={{background:"transparent"}}>
//                         {login?<p className='count'><b>{cartCount}</b></p>:null}
//                            <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="Cart"/>
//                         </div>
//                         </Link>

//                     <div className="menu" onClick={toggleVisibility}>
//                         <img src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png"  alt=""/>
//                     </div>

//                     <div className="smallscreen">
//                         <ul onClick={toggleVisibility} style={{display:disp}}>
//                             <li className='cancel' onClick={toggleVisibility}><img src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png"/></li>
//                             <Link to={"/"}>        <li>Home</li>    </Link>
//                             <Link to={"/Shop"}>    <li>Shop</li>    </Link>
//                             <Link to={"/Blog"}>    <li>Blog</li>    </Link>
//                             <Link to={"/About"}>   <li>About</li>   </Link>
//                             <Link to={"/contact"}> <li>Contact</li>   </Link>
//                             {login?<Link to={"/profile"}> <li>Profile</li>   </Link>:null}
//                              <Link to={"/Cart"}>
//                             <li><div className='cart'>
//                             {login?<p className='counti'><b>{cartCount}</b></p>:null}
//                                <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="Cart"/>
//                             </div></li>
//                             </Link>

//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     </>
//   )
// }
// export default Header
