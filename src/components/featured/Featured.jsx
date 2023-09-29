import React from 'react';
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featured-chart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={8}/>
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">₹5000</p>
            <p className="desc">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
              <div className="item">
                <div className="item-title">Target</div>
                <div className="item-result positive">
                  <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                  <div className="result-amount">₹5,00,000</div>
                </div>
              </div>

              <div className="item">
                <div className="item-title">Last Week</div>
                <div className="item-result negative">
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="result-amount">₹70,000</div>
                </div>
              </div>

              <div className="item">
                <div className="item-title">Last Month</div>
                <div className="item-result positive">
                  <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                  <div className="result-amount">₹1,00,000</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured