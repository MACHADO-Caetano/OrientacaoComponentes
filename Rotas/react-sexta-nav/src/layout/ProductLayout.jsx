import { Outlet } from "react-router-dom";

function ProductLayout(){
    return <>
        <h1>Produto</h1>
        <Outlet />
    </>
}

export default ProductLayout;