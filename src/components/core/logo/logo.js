import style from './logo.module.css';
const Logo = ({wrapperClass, child_one_class, ...props}) =>{
    return(
        <div className={[style.wrapperClass, wrapperClass].join(' ')}>
            <p className={[style.logo, child_one_class].join(' ')}>IP Address Tracker</p>
        </div>
    )
}

export default Logo;