import React, { useEffect, useState } from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({type}) => {
    const [amount, setAmount] = useState(null);
    //const [diff, setDiff] = useState(null);
    let data;

    //temp DB
    //const amount=100;
    const diff=20;

    switch(type){
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                query: "users",
                icon: <PersonOutlineIcon className='icon' 
                style={{color:'crimson', backgroundColor: "rgba(255, 0, 0, 0.2"}} />              
            };
            break;

            case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon' 
                style={{backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod"}}
                />              
            };
            break;

            case "earning":
            data={
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' 
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />              
            };
            break;

            case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' 
                style={{backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple"}} />              
            };
            break;

        default:
            break;
    }

    //temp data
    useEffect(()=>{
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      
            const lastMonthQuery = query(
              collection(db, "users"),
              where("timeStamp", "<=", today),
              where("timeStamp", ">", lastMonth)
            );
            const prevMonthQuery = query(
              collection(db, "users"),
              where("timeStamp", "<=", lastMonth),
              where("timeStamp", ">", prevMonth)
            );
      
            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery);
      
            setAmount(lastMonthData.docs.length);
          };
          fetchData();
        }, []);
    {/*
            const lastMonthQuery = query(collection(db, "users"), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth));

            const prevMonthQuery = query(collection(db, "users"), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth));
*/}

  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "₹"} {amount}</span>
            <span className='link'>{data.link}</span>

        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
        
    </div>
  )
}

export default Widget