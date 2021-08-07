import style from "./ipDetails.module.css";

const IpDetail = ({className, ...props}) =>{
    return(
        <div className={[style.wrapper, className].join(' ')}>
            <p className={style.title}>{props.title}</p>
            <p className={style.body}>{props.body}</p>
        </div>
    )
}
export default IpDetail;