
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
                    className="bg-(--primaryLight) text-(--textMain) font-bold border border-(--borderMain) shadow-md hover:bg-(--primary) transition rounded"
                    onClick={() => navigate("/main")}
                >
                    Press to Start
                </button>
            </div>
        </main>
    );
}