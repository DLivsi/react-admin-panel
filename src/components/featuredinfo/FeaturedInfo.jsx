import "./Featuredinfo.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-5,156 <KeyboardArrowDownIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1,156 <KeyboardArrowDownIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,415</span>
                    <span className="featuredMoneyRate">+3,156 <KeyboardArrowUpIcon className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}