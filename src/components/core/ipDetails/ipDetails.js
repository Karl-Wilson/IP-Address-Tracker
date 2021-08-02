import style from "./ipDetails.module.css";

const IpDetail = props =>{
    return(
        <div className={style.wrapper}>
            <p className={style.title}>{props.title}</p>
            <p className={style.body}>{props.body}</p>
        </div>
    )
}
export default IpDetail;