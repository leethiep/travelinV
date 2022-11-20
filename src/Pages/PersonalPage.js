import "../PersonalPage.css";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsFillFilterSquareFill } from "react-icons/bs";
import {useEffect} from 'react';
import {useState} from 'react';
import { FaEdit } from "react-icons/fa";
import { BsTextRight } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { RiDislikeLine } from "react-icons/ri";




var Name = 'Nguyễn Ngọc Thắng'
const tabs=[{name:'Post', style:<BsFillFilterSquareFill className='Thang_a'></BsFillFilterSquareFill>},{name:'PostLike', style: <BsBookmarkHeartFill className='Thang_'></BsBookmarkHeartFill>},{name:'Bag', style: <BsFillHandbagFill className='Thang_a'></BsFillHandbagFill>}]

const Event_bv={id: 'Post'/*,content: <ul id='edit_remove'><li><button className='Thang_event'><span><MdEdit id='mdedit'></MdEdit></span> Edit</button></li><li><button className='Thang_event'><span><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</button></li></ul>*/}
const Event_like={id: 'PostLike'/*, content: <ul id='edit_remove'><li><button className='Thang_event'><span><RiDislikeLine id='mdremove'></RiDislikeLine></span> Unlike</button></li></ul>*/}
const Event_td={id: 'Bag'/*, content: <ul id='edit_remove'><li><button className='Thang_event'><span><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</button></li></ul>*/}

const Bag=[
    {
     "Image": "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
     "Title": "Đà Lạt",
     "Time": "26/03/2022 - 05/04/2022",
     "id": "1"
    },
    {
     "Image": "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
     "Title": "Bình Định",
     "Time": "26/03/2022 - 05/04/2022",
     "id": "2"
    }
]

const PostsLike=[
    {
     "Title": "Những điều cần biết khi đến Đà Lạt",
     "Location": "Đà Lạt",
     "Time": "26/03/2002",
     "Image": "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
     "Author": "Tấn Tài",
     "id": "1"
    },
    {
     "Title": "Địa điểm du lịch Bình Định nổi tiếng không thể bỏ qua",
     "Location": "Bình Định",
     "Time": "26/03/2002",
     "Image": "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
     "Author": "Sơn Trần",
     "id": "2"
    },
    {
     "Title": "Đà Nẵng liệu có phải là nơi đáng sống",
     "Location": "Đà Nẵng",
     "Time": "26/03/2002",
     "Image": "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
     "Author": "Lê Thiệp",
     "id": "3"
    },
    {
     "Title": "Những điều nhất định phải thử ở Đà Lạt",
     "Location": "Đà Lạt",
     "Time": "20/10/2022",
     "Image": "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
     "Author": "Phú Sỹ",
     "id": "4"
    }
]

const Posts=[
    {
     "Title": "Những điều cần biết khi đến Đà Lạt",
     "Location": "Đà Lạt",
     "Time": "26/03/2002",
     "Image": "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
     "id": "3"
    },
    {
     "Title": "Địa điểm du lịch Bình Định nổi tiếng không thể bỏ qua",
     "Location": "Bình Định",
     "Time": "26/03/2002",
     "Image": "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
     "id": "2"
    },
    {
     "Title": "Đà Nẵng liệu có phải là nơi đáng sống",
     "Location": "Đà Nẵng",
     "Time": "26/03/2002",
     "Image": "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
     "id": "1"
    }
]

export default function PersonalPage() {

    const [type, setType] = useState('Post')
    const [Content, setContent] = useState([])
    const [CountPost, setCountPost] = useState()
    const [CountPostLike, setCountPostLike] = useState()
    const [CountBag, setCountBag] = useState()

    useEffect(() => {
        setCountPost(Posts.length)
        setCountPostLike(PostsLike.length)
        setCountBag(Bag.length)
        if(type===Event_bv.id) {setContent(Posts)}
        else if(type===Event_like.id) {setContent(PostsLike)}
        else if(type===Event_td.id) {setContent(Bag)}
    },[type])

function HandlCoutEvent(type, id)
{
    if(type===Event_bv.id)
        return <ul className='Thang_edit_remove'><li id='Thang_li1'><button className='Thang_button_event'><span className='Thang_span'><MdEdit id='mdedit'></MdEdit></span> Edit</button></li><li id='Thang_li2' onClick={()=>{const NewPosts=Content.filter(post=>post.id !== id); setContent(NewPosts); setCountPost(NewPosts.length)}}><button className='Thang_button_event' ><span className='Thang_span'><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</button></li></ul>
    else if (type===Event_like.id)
            return <ul className='Thang_edit_remove'><li className='Thang_li' onClick={()=>{const NewPostLike=Content.filter(postlike=>postlike.id !== id); setContent(NewPostLike); setCountPostLike(NewPostLike.length)}}><button className='Thang_button_event' ><span className='Thang_span'><RiDislikeLine id='mdremove'></RiDislikeLine></span> Unlike</button></li></ul>
        else if (type===Event_td.id)
            return <ul className='Thang_edit_remove'><li className='Thang_li' onClick={()=>{const NewBag=Content.filter(bag=>bag.id !== id); setContent(NewBag); setCountBag(NewBag.length)}}><button className='Thang_button_event' ><span className='Thang_span'><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</button></li></ul>
}

function HandlCoutContent(type, location, time)
{
    if(type===Event_bv.id || type===Event_like.id)
        return <p>{location}&nbsp;&nbsp;&nbsp;&nbsp;{time}</p>
    else
        return <p>{time}</p>
}

    return (
    <div className = "Thang_avatar"> 
        <div id='Thang_avatar_child'>
            <img src='https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg'/>
            
        </div>
        <div id='Thang_card'>
            </div>

        <div id='Thang_content0'>
            <div id="Thang_edit_setting">
                <button id='Thang_setting'> <FaEdit></FaEdit></button>
                    <button id="Thang_edit">Chỉnh sửa thông tin cá nhân</button>
            </div>
            <p className='Thang_name'>{Name}</p>  
            <div id='Thang_tab'>
                <p className="Thang_tab_content"><span>{CountPost}</span> {tabs[0].name}</p>
                <p className="Thang_tab_content"><span>{CountPostLike}</span> {tabs[1].name}</p>
                <p className="Thang_tab_content"><span>{CountBag}</span> {tabs[2].name}</p>
            </div>
        </div>
        <div>
        <hr id='Thang_hr'/>
        </div>
        <div id = 'Thang_content'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    style={type === tab.name ? 
                        {
                            color:'black',
                            marginTop: '-100px',
                            borderTop: '4px outset rgb(60, 60, 60)',
                        } : {}}
                    onClick={()=>setType(tab.name)}
                > 
                <div><span>{tab.style}</span><p>{tab.name}</p></div>
                </button>
            ))}
           
        </div>
        
        <div id ='Thang_content1'>
            {Content.map((Content0)=>(
                <div key={Content0.id}>
                    <img src={Content0.Image}/>
                    <p id='Thang_CONTENT_mokuji'>
                        <li className="Thang_li"><a id='Thang_text_right'><BsTextRight id='Thang_bstextright'></BsTextRight></a>
                        {HandlCoutEvent(type, Content0.id)}
                        </li>
                    </p>
                    <p id='Thang_CONTENT'>
                        <p >{Content0.Author}</p>
                        <h1 id='Thang_Content_Author'>{Content0.Title}</h1>
                        {HandlCoutContent(type, Content0.Location, Content0.Time)}                   </p>
                </div>
            ))}
        </div>

    </div>
    );
}
