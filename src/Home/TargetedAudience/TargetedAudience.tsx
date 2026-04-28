import "./TargetedAudience.css";
import { img24, img21, img22, img23 } from "../../assets";

export default function TargetedAudience() {
    return (
        <div className="targeted-audience">
            <div className="targeted-audience-content">
                <h2 className="targeted-audience-title">A Space for Sisters to Gather</h2>
                <div className="targeted-audience-images">
                    <div className="polaroid-wrapper wrapper-1">
                        <div className="polaroid"><img src={img24} alt="" /></div>
                    </div>
                    <div className="polaroid-wrapper wrapper-2">
                        <div className="polaroid"><img src={img21} alt="" /></div>
                    </div>
                    <div className="polaroid-wrapper wrapper-3">
                        <div className="polaroid"><img src={img22} alt="" /></div>
                    </div>
                    <div className="polaroid-wrapper wrapper-4">
                        <div className="polaroid"><img src={img23} alt="" /></div>
                    </div>
                </div>
                <p>
                    A curated space designed for women to connect, unwind,
                    and share meaningful moments over matcha.
                    Every gathering is thoughtfully crafted to feel comfortable,
                    welcoming, and intentional.
                </p>
            </div>

        </div>


    );
}