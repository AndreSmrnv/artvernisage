import { isRouteErrorResponse, useRouteError } from "react-router-dom";


export const ErrorPage = () => {
    const error = useRouteError();


    return (
        isRouteErrorResponse(error)
            ? <div>
                    <h2>Ошибка {error.status}</h2>
                    <p>{error.statusText}</p>
                    { error.data?.message &&
                        <p>
                            <i>{error.data.message}</i>
                        </p>
                    }
                </div>
            : <></>
    )
}