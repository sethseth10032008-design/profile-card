import "./index.css";
function App(){
    return(
        <div className="profile-card">
            <img
                src="https://i.pinimg.com/736x/07/b6/c0/07b6c08eefb86d0395a06f9c18e5f6fa.jpg"
                alt="Anissa W. Glenn"
                className="profile-image"
            />
            <h2> BONG MAV</h2>
            <div className="skills">
                <span className="skill html">HTML&CSS</span>
                <span className="skill php">PHP</span>
                <span className="skill js">JavaScript</span>
            </div>
            < button className="hire-btn">Som kiss muy ban ot</button>
        </div>
    )
    
}
export default App