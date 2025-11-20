import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={image} alt="image" style = {{ width:"400px", height:"auto", display: "block", marginTop: "50px"}}/>
            </div>
            <div className="p-20 flex items-end justify-center pb-10" style={{marginTop: "50px"}}>
                <button
                    className="bg-pink-100 text-gray-800 font-bold border border-pink-300 shadow-md hover:bg-pink-200 transition rounded"
                    onClick={() => navigate("/main")}
                >
                    Press to Start
                </button>
            </div>
        </main>
    );
}