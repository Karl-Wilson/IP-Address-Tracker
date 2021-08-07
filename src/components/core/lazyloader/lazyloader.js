import style from './lazyloader.module.css'
const Lazyloader = ({className, ...props}) => {
    return(
        <div className={[className, style.load].join(' ')}>
            <div className={style.innerwrapper}>
                <p>{props.children}</p>
            </div>
        </div>
    )
}
export default Lazyloader;