function Header({evento, ulbraLogo}) {
    return (
        <>
            <img style={{display: "flex", alignItems:"center", width:"250px", height:"250px"}} src={ulbraLogo} alt="Logo da Ulbra" />
            
            <h1 style={{display:"flex", justifyContent:"center"}}>{evento}</h1>
        </>
    )
}
export default Header;