import "./header.css"

export default function Header() {
  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome To</span>
        <span className="headerTitleLg">Plate Perfection</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640773.jpg&fm=jpg" alt=""></img>
    </div>
    <div className="about-section">
        <p className="about-text">Where culinary excellence meets convenience!<br/> Explore a world of mouthwatering dishes crafted with the finest <br/>ingredients,delivered straight to your doorstep.</p>
    </div>

    <div className="grid-container">
        <div className="grid-left">
            <div className="grid3-titles">
              <p className="grid-left-text">MENU</p>
            </div>
        </div>
        <div className="grid-right">
            <p className="grid-right-text">"Explore our diverse menu of fresh, flavorful dishes,from appetizers to desserts, crafted to satisfy every craving.Enjoy a perfect blend of classics and innovative culinary delights!"</p>
            <div className="grid-right-button">
                <button className="grid-right-btn">View our Menu</button>
            </div>
        </div> 
    </div>
    
    <div className="grid2-container">
        <div className="grid2-left">
        <p className="grid2-left-text">""Order your favorite dishes online and enjoy the convenience of quick, hassle-free delivery straight to your door. Fresh, delicious meals are just a few clicks away!"</p>
            <div className="grid2-left-button">
                <div className="grid2-left-btn">Order online now!</div>
        </div>
        </div>
        <div className="grid2-right">
            <div className="grid3-titles">
              <p className="grid-left-text">order online</p>
            </div>
        </div>
    </div>

    <div className="block3-container">
      <div className="block3-titles">
        <p className="block3-text">RESERVE A TABLE</p>
        <div className="block3-btn">
          <div className="block3-btn-text">reserve</div>
        </div>
      </div>
    </div>
    </>
  )
}
