import {useRouteError} from "react-router-dom"
const Error = () => {
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Opps!</h1>
            <h4>SomeThing went wrong</h4>
            <h3>{err.status +':'+ err.statusText}</h3>
        </div>
    )
}

export default Error