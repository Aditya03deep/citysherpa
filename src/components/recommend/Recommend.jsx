
import "./Recommend.css";
import recm_bg1 from "../../pics/recm_bg1.jpg"
const Recommend = () => {
    return (
        <div className="recm-rectangle-parent">
            <img className="recm-frame-child" alt="" src={recm_bg1} />


            <div className="recm-inner-parent">

                <div className="recm-inner-child">
                    <div className="recm-head">
                        <h3>FEELING CONFUSED ?</h3>
                        <h1>WE ARE HERE TO HELP YOU</h1>
                    </div>
                    <div className="recm-body">
                        <div className="recm-row-cat">
                            <div className="recm-cat">
                                <h2>SUMMER</h2>
                            </div>
                            <div className="recm-cat">
                                <h2>WINTER</h2>
                            </div>
                        </div>
                        <div className="recm-row-cat">
                            <div className="recm-cat">
                                <h2>HOLY PLACES</h2>
                            </div>
                            <div className="recm-cat">
                                <h2>FOOD</h2>
                            </div>
                        </div>

                    </div>
                </div>


            </div>




        </div>
    );
};

export default Recommend;
