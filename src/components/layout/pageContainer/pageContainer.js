import style from './pageContainer.module.css'
const PageContainer = ({className, ...props}) =>{
    return(
        <div className={[style.container, className].join(" ")} {...props}>
        </div>
    )
}

export default PageContainer;